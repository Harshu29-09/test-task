// app/api/blogs/delete.ts
import { NextResponse } from 'next/server';
import { data } from '@/utils/db';

export async function DELETE(request: Request) {
  const { id } = await request.json();

  // Find the blog and delete it
  const blogIndex = data.findIndex(blog => blog.id === id);
  if (blogIndex === -1) {
    return NextResponse.error();
  }

  data.splice(blogIndex, 1);

  return NextResponse.json({ message: 'Blog deleted successfully' });
}
