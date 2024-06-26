import { NextResponse } from 'next/server';
import { createVideo, getVideoById, updateVideo } from '@/app/services/videoServices';

export async function handleCreateVideo(userId: number, groupId: number, videoLink: string) {
  try {
    if (!userId || !groupId || !videoLink) {
      return NextResponse.json({ error: 'userId, groupId, and videoLink are required' }, { status: 400 });
    }
    const video = await createVideo(userId, groupId, videoLink);
    return NextResponse.json(video, { status: 200 });
  } catch (error) {
    console.error('Error creating video:', error);
    return NextResponse.json({ error: 'Video creation failed' }, { status: 500 });
  }
}

export async function handleGetVideo(id: number) {
  try {
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    const video = await getVideoById(id);
    if (!video) {
      return NextResponse.json({ error: 'Video not found' }, { status: 404 });
    }
    return NextResponse.json(video, { status: 200 });
  } catch (error) {
    console.error('Error getting video:', error);
    return NextResponse.json({ error: 'Video retrieval failed' }, { status: 500 });
  }
}

export async function handleUpdateVideo(id: number, videoLink: string) {
  try {
    if (!id || !videoLink) {
      return NextResponse.json({ error: 'ID and videoLink are required' }, { status: 400 });
    }
    const video = await updateVideo(id, videoLink);
    return NextResponse.json(video, { status: 200 });
  } catch (error) {
    console.error('Error updating video:', error);
    return NextResponse.json({ error: 'Video update failed' }, { status: 500 });
  }
}
