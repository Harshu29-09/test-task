import { notFound } from 'next/navigation';
import BackButton from '@/components/backButton';

async function fetchBlogById(id: string) {
  const res = await fetch(`http://localhost:3000/api/blogs`);
  if (!res.ok) throw new Error('Failed to fetch blogs');
  const blogs = await res.json();
  return blogs.find((blog: any) => blog.id === parseInt(id));
}

export default async function BlogDetails({ params }: { params: { id: string } }) {
  const blog = await fetchBlogById(params.id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-100 dark:bg-gray-900 transition">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        {blog.title}
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-2">
        By {blog.author} on {blog.publishedDate}
      </p>
      <img
        src={blog.thumbnail}
        alt={blog.title}
        className="w-full h-60 object-cover rounded-md mb-6"
      />
      <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
        {blog.description}
      </p>
      <BackButton />
    </div>
  );
}
