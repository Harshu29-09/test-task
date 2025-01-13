// app/api/blogs/update.ts
import { NextResponse } from 'next/server';
import { data } from '@/utils/db';

export async function PUT(request: Request) {
  const { id, title, description, author, publishedDate, thumbnail } = await request.json();
  
  // Find the blog and update it
  const blogIndex = data.findIndex(blog => blog.id === id);
  if (blogIndex === -1) {
    return NextResponse.error();
  }

  data[blogIndex] = { id, title, description, author, publishedDate, thumbnail };

  return NextResponse.json({ message: 'Blog updated successfully' });
}
