import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
export default function Navigation() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="font-bold text-xl text-gray-900 dark:text-white">BlockChat</span>
          </div>

          {/* Right side - Nav Actions */}
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Sign in
            </Link>
            <Link to="/register" className="hidden sm:flex text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 px-4 py-2 rounded-lg shadow-md shadow-primary-500/20 transition-all hover:scale-105">
              Sign up
            </Link>
            <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-2 hidden sm:block"></div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
