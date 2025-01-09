import React, { Suspense } from 'react';
import BlogList from '@/components/Blogzlist';
import SkeletonCard from '@/components/SkeletonCard';
import ThemeToggle from '@/components/ThemeToggle';

export default function Dashboard() {
  return (
    <div className="p-6 max-w-5xl mx-auto bg-gray-100 dark:bg-gray-900 transition">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Blog Dashboard</h1>
        <ThemeToggle />
      </div>
      <Suspense
        fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        }
      >
        <BlogList />
      </Suspense>
    </div>
  )}