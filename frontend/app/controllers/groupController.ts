import { NextResponse } from 'next/server';
import { createGroup, getGroupById, updateGroup } from '@/app/services/groupServices';

export async function handleCreateGroup(groupname: string, userIds: number[]) {
  try {
    if (!groupname || !userIds) {
      return NextResponse.json({ error: 'Groupname and userIds are required' }, { status: 400 });
    }
    const group = await createGroup(groupname, userIds);
    return NextResponse.json(group, { status: 200 });
  } catch (error) {
    console.error('Error creating group:', error);
    return NextResponse.json({ error: 'Group creation failed' }, { status: 500 });
  }
}

export async function handleGetGroup(id: number) {
  try {
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    const group = await getGroupById(id);
    if (!group) {
      return NextResponse.json({ error: 'Group not found' }, { status: 404 });
    }
    return NextResponse.json(group, { status: 200 });
  } catch (error) {
    console.error('Error getting group:', error);
    return NextResponse.json({ error: 'Group retrieval failed' }, { status: 500 });
  }
}

export async function handleUpdateGroup(id: number, groupname: string) {
  try {
    if (!id || !groupname) {
      return NextResponse.json({ error: 'ID and groupname are required' }, { status: 400 });
    }
    const group = await updateGroup(id, groupname);
    return NextResponse.json(group, { status: 200 });
  } catch (error) {
    console.error('Error updating group:', error);
    return NextResponse.json({ error: 'Group update failed' }, { status: 500 });
  }
}
