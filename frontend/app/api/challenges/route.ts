import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

type Challenge = {
  id: number;
  userId: number;
  title: string;
  description?: string;
  createdAt: string;
};

export async function POST(req: Request) {
  try {
    const { userId, title, description }: { userId: number; title: string; description?: string } = await req.json();

    if (!userId || !title) {
      return NextResponse.json({ error: 'User ID and title are required' }, { status: 400 });
    }

    const { rows } = await sql<Challenge>`
      INSERT INTO challenges (user_id, title, description)
      VALUES (${userId}, ${title}, ${description})
      RETURNING *;
    `;

    return NextResponse.json(rows[0], { status: 200 });
  } catch (error) {
    console.error('Error creating challenge:', error);
    return NextResponse.json({ error: 'Challenge creation failed ' ,  }, { status: 500 });
  }
}
