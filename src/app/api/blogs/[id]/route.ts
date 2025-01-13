import { NextResponse } from "next/server";
import {data} from '@/utils/db'

let blogs = data;

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10);
  const updatedBlog = await req.json();

  const index = blogs.findIndex((blog) => blog.id === id);
  if (index === -1) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  blogs[index] = { ...blogs[index], ...updatedBlog };
  return NextResponse.json(blogs[index]);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10);
  blogs = blogs.filter((blog) => blog.id !== id);

  return NextResponse.json({ message: "Blog deleted successfully" });
}
