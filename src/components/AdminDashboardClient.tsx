"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboardClient({ blogs: initialBlogs }: { blogs: any[] }) {
    const [isAdmin, setIsAdmin] = useState(false);
    const [blogs, setBlogs] = useState(initialBlogs);
    const [editingBlog, setEditingBlog] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const userId = sessionStorage.getItem("userId");
        if (userId === "admin") {
            setIsAdmin(true);
        } else {
            router.push("/login");
        }
    }, [router]);

    const handleEditClick = (blog: any) => {
        setEditingBlog(blog);
        setIsModalOpen(true);
    };

    const handleDeleteClick = (id: number) => {
        if (confirm("Are you sure you want to delete this blog?")) {
            setBlogs(blogs.filter((blog) => blog.id !== id));
        }
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setEditingBlog(null);
    };

    const handleSaveChanges = () => {
        setBlogs((prevBlogs) =>
            prevBlogs.map((blog) =>
                blog.id === editingBlog.id ? editingBlog : blog
            )
        );
        handleModalClose();
    };

    if (!isAdmin) {
        return <p>Loading...</p>;
    }

    return (
        <div className="p-6 bg-gray-50 dark:bg-gray-900">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Admin Dashboard
            </h1>
            <table className="min-w-full bg-white dark:bg-gray-800 border">
                <thead>
                    <tr>
                        <th className="border px-4 py-2 text-gray-900 dark:text-white">Title</th>
                        <th className="border px-4 py-2 text-gray-900 dark:text-white">Author</th>
                        <th className="border px-4 py-2 text-gray-900 dark:text-white">Date</th>
                        <th className="border px-4 py-2 text-gray-900 dark:text-white">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog) => (
                        <tr key={blog.id}>
                             <td className="border px-4 py-2">{blog.author}</td>
                            <td className="border px-4 py-2">{blog.title}</td>
                            <td className="border px-4 py-2">{blog.publishedDate}</td>
                            <td className="border px-4 py-2">
                                <button
                                    onClick={() => handleEditClick(blog)}
                                    className="text-blue-500 hover:underline mr-2"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteClick(blog.id)}
                                    className="text-red-500 hover:underline"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Edit Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-1/3">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                            Edit Blog
                        </h2>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Title
                        </label>
                        <input
                            type="text"
                            value={editingBlog.title}
                            onChange={(e) =>
                                setEditingBlog({ ...editingBlog, title: e.target.value })
                            }
                            className="w-full border border-gray-300 rounded px-2 py-1 mb-4"
                        />
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Author
                        </label>
                        <input
                            type="text"
                            value={editingBlog.author}
                            onChange={(e) =>
                                setEditingBlog({ ...editingBlog, author: e.target.value })
                            }
                            className="w-full border border-gray-300 rounded px-2 py-1 mb-4"
                        />
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Description
                        </label>
                        <textarea
                            value={editingBlog.description}
                            onChange={(e) =>
                                setEditingBlog({ ...editingBlog, description: e.target.value })
                            }
                            className="w-full border border-gray-300 rounded px-2 py-1 mb-4"
                        ></textarea>
                        <div className="flex justify-end">
                            <button
                                onClick={handleModalClose}
                                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSaveChanges}
                                className="bg-indigo-500 text-white px-4 py-2 rounded"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
