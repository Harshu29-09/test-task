import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (<>
    <h1 className="text-2xl px-4 text-center font-bold text-gray-200 dark:text-gray-700">Blog Dashboard</h1>
    <div className="px-4">
    <ThemeToggle />
    </div>
    </>
  )}