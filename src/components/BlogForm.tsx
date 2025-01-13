import React from "react";

interface BlogFormProps {
    blog: {
        id: number | null;
        title: string;
        author: string;
        description: string;
        image: string;
    };
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onSave: () => void;
}

const BlogForm: React.FC<BlogFormProps> = ({ blog, onChange, onSave }) => {
    return (
        <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {blog.id ? "Edit Blog" : "Create New Blog"}
            </h2>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Title
            </label>
            <input
                type="text"
                value={blog.title}
                onChange={onChange}
                name="title"
                className="w-full border border-gray-300 rounded px-2 py-1 mb-4"
            />
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Author
            </label>
            <input
                type="text"
                value={blog.author}
                onChange={onChange}
                name="author"
                className="w-full border border-gray-300 rounded px-2 py-1 mb-4"
            />
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Description
            </label>
            <textarea
                value={blog.description}
                onChange={onChange}
                name="description"
                className="w-full border border-gray-300 rounded px-2 py-1 mb-4"
            ></textarea>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Image
            </label>
            <input
                type="file"
                className="w-full border border-gray-300 rounded px-2 py-1 mb-4"
                onChange={onChange}
                name="image"
            />
            <button
                onClick={onSave}
                className="bg-indigo-500 text-white px-4 py-2 rounded relative top-[2.4rem]"
            >
                {blog.id ? "Save Changes" : "Create Blog"}
            </button>
        </div>
    );
};

export default BlogForm;
