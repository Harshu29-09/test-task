import { NextResponse } from 'next/server';

const dummyBlogs = [
  {
    id: 1,
    title: 'Optimizing Next.js Apps',
    description: 'Learn how to optimize your Next.js apps effectively...',
    author: 'John Doe',
    publishedDate: '2025-01-01',
    thumbnail: '/images/sample.jpg',
  },
  {
    id: 2,
    title: 'React vs Angular',
    description: 'A detailed comparison between React and Angular...',
    author: 'Jane Smith',
    publishedDate: '2025-01-05',
    thumbnail: 'https://media.istockphoto.com/id/976370312/photo/content-marketing-content-data-blogging-media-publication-information-vision-concept.jpg?s=1024x1024&w=is&k=20&c=6fx53oFJGXMuQNk1RCPhGB_smrdqeGtLVy0r0WJ4HbY=',
  },
  {
    id: 3,
    title: 'Optimizing Next.js Apps',
    description: 'Learn how to optimize your Next.js apps effectively...',
    author: 'John Doe',
    publishedDate: '2025-01-01',
    thumbnail: '/images/sample.jpg',
  },
  {
    id: 4,
    title: 'React vs Angular',
    description: 'A detailed comparison between React and Angular...',
    author: 'Jane Smith',
    publishedDate: '2025-01-05',
    thumbnail: 'https://media.istockphoto.com/id/976370312/photo/content-marketing-content-data-blogging-media-publication-information-vision-concept.jpg?s=1024x1024&w=is&k=20&c=6fx53oFJGXMuQNk1RCPhGB_smrdqeGtLVy0r0WJ4HbY=',
  },
  {
    id: 5,
    title: 'Optimizing Next.js Apps',
    description: 'Learn how to optimize your Next.js apps effectively...',
    author: 'John Doe',
    publishedDate: '2025-01-01',
    thumbnail: '/images/sample.jpg',
  },
  {
    id: 6,
    title: 'React vs Angular',
    description: 'A detailed comparison between React and Angular...',
    author: 'Jane Smith',
    publishedDate: '2025-01-05',
    thumbnail: 'https://media.istockphoto.com/id/976370312/photo/content-marketing-content-data-blogging-media-publication-information-vision-concept.jpg?s=1024x1024&w=is&k=20&c=6fx53oFJGXMuQNk1RCPhGB_smrdqeGtLVy0r0WJ4HbY=',
  },
  
];

export async function GET() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return NextResponse.json(dummyBlogs);
  }
  
