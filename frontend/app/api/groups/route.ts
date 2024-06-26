import { NextRequest, NextResponse } from 'next/server';
import { handleCreateGroup, handleGetGroup, handleUpdateGroup } from '@/app/controllers/groupController';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, ...data } = body;

    switch (action) {
      case 'create':
        return handleCreateGroup(data.groupname, data.userIds);
      case 'get':
        return handleGetGroup(data.id);
      case 'update':
        return handleUpdateGroup(data.id, data.groupname);
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

    return handleGetGroup(id);
  } catch (error) {
    console.error('Error handling request:', error);
    return NextResponse.json({ error: 'Request handling failed' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, groupname } = body;

    if (!id || !groupname) {
      return NextResponse.json({ error: 'ID and groupname are required' }, { status: 400 });
    }

    return handleUpdateGroup(id, groupname);
  } catch (error) {
    console.error('Error handling request:', error);
    return NextResponse.json({ error: 'Request handling failed' }, { status: 500 });
  }
}
