"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "./Modal";
import BlogForm from "./BlogForm";

const AdminDashboardClient = ({ blogs: initialBlogs }: { blogs: any[] }) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [blogs, setBlogs] = useState(initialBlogs);
    const [editingBlog, setEditingBlog] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [newBlog, setNewBlog] = useState({
        id: 0,
        publishedDate: "",
        title: "",
        author: "",
        description: "",
        image: "",
    });

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

    const handleSaveChanges = async () => {
        console.log("handleSaveChanges", editingBlog);
        try {
            const response = await fetch(`https://6784ab7d1ec630ca33a51b15.mockapi.io/allpost/${editingBlog.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(editingBlog),
            });

            if (response.ok) {
                const updatedBlog = await response.json();
                console.log("updatedBlog", updatedBlog);    
                setBlogs((prevBlogs) =>
                    prevBlogs.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog))
                );
                handleModalClose();
            } else {
                alert("Failed to update the blog. Please try again.");
            }
        } catch (error) {
            console.error("Error updating blog:", error);
            alert("An error occurred. Please try again.");
        }
    };

    const handleCreateModalClose = () => {
        setIsCreateModalOpen(false);
        setNewBlog({
            id: 0,
            publishedDate: "",
            title: "",
            author: "",
            description: "",
            image: "",
        });
    };

    const handleCreateBlog = async () => {
        const blogToCreate = {
            ...newBlog,
            id: Math.floor(Math.random() * 1000),
            publishedDate: new Date().toISOString(),
        };
        try {
            const response = await fetch("https://6784ab7d1ec630ca33a51b15.mockapi.io/allpost", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(blogToCreate),
            });

            if (response.ok) {
                const createdBlog = await response.json();
                setBlogs((prevBlogs) => [...prevBlogs, createdBlog]);
                handleCreateModalClose();
            } else {
                alert("Failed to create blog. Please try again.");
            }
        } catch (error) {
            console.error("Error creating blog:", error);
            alert("An error occurred. Please try again.");
        }
    };

    if (!isAdmin) {
        return <p>Loading...</p>;
    }

    return (
        <div className="p-6 bg-gray-50 dark:bg-gray-900">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Admin Dashboard
            </h1>
<div className="flex justify-between items-center mx-5 mb-4">
            <button
                onClick={() => setIsCreateModalOpen(true)}
                className="bg-indigo-500 text-white px-4 py-2 rounded mb-4"
            >
                Create Blog
            </button>
            <button
                onClick={() => router.push("/dashboard")}
                className="bg-indigo-500 text-white px-4 py-2 rounded mb-4"
            >
                Dashboard
            </button>
</div>
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
                            <td className="border px-4 py-2">{blog.title}</td>
                            <td className="border px-4 py-2">{blog.author}</td>
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

            <Modal isOpen={isModalOpen} onClose={handleModalClose}>
                <BlogForm blog={editingBlog} onChange={(e) => setEditingBlog({ ...editingBlog, [e.target.name]: e.target.value })} onSave={handleSaveChanges} />
            </Modal>

            <Modal isOpen={isCreateModalOpen} onClose={handleCreateModalClose}>
                <BlogForm blog={newBlog} onChange={(e) => setNewBlog({ ...newBlog, [e.target.name]: e.target.value })} onSave={handleCreateBlog} />
            </Modal>
        </div>
    );
};

export default AdminDashboardClient;
