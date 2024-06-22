import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

type Video = {
  id: number;
  challengeId: number;
  userId: number;
  videoLink: string;
  uploadedAt: string;
};

export async function POST(req: Request) {
  try {
    const { challengeId, userId, videoLink }: { challengeId: number; userId: number; videoLink: string } = await req.json();

    if (!challengeId || !userId || !videoLink) {
      return NextResponse.json({ error: 'Challenge ID, User ID, and video link are required' }, { status: 400 });
    }

    const { rows } = await sql<Video>`
      INSERT INTO videos (challenge_id, user_id, video_link)
      VALUES (${challengeId}, ${userId}, ${videoLink})
      RETURNING *;
    `;

    return NextResponse.json(rows[0], { status: 200 });
  } catch (error) {
    console.error('Error uploading video:', error);
    return NextResponse.json({ error: 'Video upload failed' }, { status: 500 });
  }
}
