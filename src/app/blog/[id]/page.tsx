import { notFound } from 'next/navigation';
import Image from 'next/image';
import BackButton from '@/components/backButton';
import Header from '@/components/Header';

async function fetchBlogById(id: string) {
  const res = await fetch(`https://6784ab7d1ec630ca33a51b15.mockapi.io/allpost/${id}`);
  if (!res.ok) throw new Error('Failed to fetch blogs');
  const blogs = await res.json();
  return blogs
}

export default async function BlogDetails({ params }: { params: { id: string } }) {
  const { id } = await params
  const blog = await fetchBlogById(id);

  if (!blog) {
    notFound();
  }

  return (
    <>
    <div className="flex items-center h-20 m-0 p-0 relative justify-between bg-gray-700 dark:bg-gray-200">
       <Header />
      </div>
      <div className='w-full bg-cyan-50 dark:bg-gray-900 '>
    <div className="p-6 max-w-4xl mx-auto bg-cyan-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        {blog.title}
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-2">
        By {blog.author} on {blog.publishedDate}
      </p>
      <Image
        src={blog.thumbnail}
        width={520}
        height={320}
        alt={blog.title}
        className="w-2/5 h-40 object-cover mx-auto rounded-md mb-6"
      />
      <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
        {blog.description}
      </p>
      <BackButton />
    </div>
    </div>
    </>
  );
}
