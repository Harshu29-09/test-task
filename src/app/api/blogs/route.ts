import { NextResponse } from 'next/server';
import {data} from '@/utils/db'
const dummyBlogs = data

export async function GET() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return NextResponse.json(dummyBlogs);
  }
  
