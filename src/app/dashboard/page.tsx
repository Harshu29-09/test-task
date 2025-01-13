import React, { Suspense } from 'react';
import BlogList from '@/components/Blogzlist';
import SkeletonCard from '@/components/SkeletonCard';
import Header from '@/components/Header';

export default function Dashboard() {
  return (
    <>
    <div className="flex items-center h-20 m-0 p-0 relative justify-between bg-gray-700 dark:bg-gray-200">
       <Header />
      </div>
    <div className="p-6 bg-cyan-50 dark:bg-gray-900 transition">
      
      <Suspense
        fallback={
          <div className="grid max-w-5xl p-4 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        }
      >
        <BlogList />
      </Suspense>
    </div>
    </>
  )
}