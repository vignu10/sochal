import { NextRequest, NextResponse } from 'next/server';
import { handleCreateVideo, handleGetVideo, handleUpdateVideo } from '@/app/controllers/videoController';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, ...data } = body;

    switch (action) {
      case 'create':
        return handleCreateVideo(data.userId, data.groupId, data.videoLink);
      case 'get':
        return handleGetVideo(data.id);
      case 'update':
        return handleUpdateVideo(data.id, data.videoLink);
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error handling request:', error);
    return NextResponse.json({ error: 'Request handling failed' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get('id') || '', 10);
    
    if (isNaN(id)) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    return handleGetVideo(id);
  } catch (error) {
    console.error('Error handling request:', error);
    return NextResponse.json({ error: 'Request handling failed' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, videoLink } = body;

    if (!id || !videoLink) {
      return NextResponse.json({ error: 'ID and videoLink are required' }, { status: 400 });
    }

    return handleUpdateVideo(id, videoLink);
  } catch (error) {
    console.error('Error handling request:', error);
    return NextResponse.json({ error: 'Request handling failed' }, { status: 500 });
  }
}
