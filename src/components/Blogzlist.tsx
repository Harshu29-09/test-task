import Link from "next/link";
import Image from "next/image";
import LinkWrapper from "./LinkWrapper";


async function fetchBlogs() {
    const res = await fetch(`https://6784ab7d1ec630ca33a51b15.mockapi.io/allpost`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch blogs");
    return res.json();
}

export default async function BlogList() {
    const blogs = await fetchBlogs();

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                {blogs.map((blog: any) => (
                    <LinkWrapper key={blog.id} href={`/blog/${blog.id}`}>
                        <div className="p-4 border rounded-md shadow-md bg-white hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-600">
                            {blog.thumbnail && (
                                <Image
                                    src={blog.thumbnail}
                                    priority
                                    width={200}
                                    height={120}
                                    alt={blog.title}
                                    className="w-full h-40 object-cover rounded-md mb-4"
                                />
                            )}
                            <h2 className="text-lg font-semibold text-black dark:text-white">{blog.title}</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{`${blog.description.substr(0, 100)}...`}</p>
                            <p className="text-xs text-gray-500 mt-2 dark:text-gray-400">
                                By {blog.author} on {blog.publishedDate}
                            </p>
                        </div>
                    </LinkWrapper>
                ))}
            </div>
        </div>
    );
}


