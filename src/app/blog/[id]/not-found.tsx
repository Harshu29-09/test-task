import BackButton from "@/components/backButton";

export default function NotFound() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-center bg-gray-100 dark:bg-gray-900 transition">
      <h1 className="text-3xl font-bold text-red-500 mb-4 dark:text-red-400">
        Blog Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-6 dark:text-gray-400">
        Sorry, the blog you are looking for does not exist.
      </p>
      <BackButton />
    </div>
  );
}
