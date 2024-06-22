import { NextRequest, NextResponse } from 'next/server';
import { handleCreateUser, handleGetUser, handleUpdateUser } from '@/app/controllers/userController';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, ...data } = body;

    switch (action) {
      case 'create':
        return handleCreateUser(data.username);
      case 'get':
        return handleGetUser(data.id);
      case 'update':
        return handleUpdateUser(data.id, data.username);
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

    return handleGetUser(id);
  } catch (error) {
    console.error('Error handling request:', error);
    return NextResponse.json({ error: 'Request handling failed' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, username } = body;

    if (!id || !username) {
      return NextResponse.json({ error: 'ID and username are required' }, { status: 400 });
    }

    return handleUpdateUser(id, username);
  } catch (error) {
    console.error('Error handling request:', error);
    return NextResponse.json({ error: 'Request handling failed' }, { status: 500 });
  }
}
