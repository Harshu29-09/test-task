export default function SkeletonCard() {
    return (
      <div className="p-4 border rounded-md shadow-md bg-gray-100 dark:bg-gray-800 animate-pulse">
        <div className="w-full h-40 bg-gray-300 dark:bg-gray-700 rounded-md mb-4"></div>
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-md mb-2"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md mb-2"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
      </div>
    );
}
  