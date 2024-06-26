import { NextResponse } from 'next/server';
import { createUser, getUserById, updateUser } from '../services/userService';

export async function handleCreateUser(username: string) {
  try {
    if (!username) {
      return NextResponse.json({ error: 'Username is required' }, { status: 400 });
    }
    const user = await createUser(username);
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'User creation failed' }, { status: 500 });
  }
}

export async function handleGetUser(id: number) {
  try {
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    const user = await getUserById(id);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error('Error getting user:', error);
    return NextResponse.json({ error: 'User retrieval failed' }, { status: 500 });
  }
}

export async function handleUpdateUser(id: number, username: string) {
  try {
    if (!id || !username) {
      return NextResponse.json({ error: 'ID and username are required' }, { status: 400 });
    }
    const user = await updateUser(id, username);
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json({ error: 'User update failed' }, { status: 500 });
  }
}
