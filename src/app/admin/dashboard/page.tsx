// app/admin/dashboard/page.tsx
import React from "react";
import AdminDashboardClient from '@/components/AdminDashboardClient'

async function fetchBlogPosts() {
  const res = await fetch(`https://6784ab7d1ec630ca33a51b15.mockapi.io/allpost`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch blogs');
  return res.json();}

export default async function AdminDashboardPage() {
  const blogs = await fetchBlogPosts();

  return (
    <div>
      <AdminDashboardClient blogs={blogs} />
    </div>
  );
}
