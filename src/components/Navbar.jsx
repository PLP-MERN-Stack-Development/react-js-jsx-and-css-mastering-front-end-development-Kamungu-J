import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Button from './Button';

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md transition-colors duration-300 ${
      isActive
        ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-white'
        : 'hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 dark:hover:text-gray-200'
    }`;

  return (
    <nav className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        <Link to="/" className="font-bold text-lg">Week3App</Link>
        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex space-x-1">
            <NavLink to="/" end className={linkClass}>Home</NavLink>
            <NavLink to="/tasks" className={linkClass}>Tasks</NavLink>
            <NavLink to="/api" className={linkClass}>API</NavLink>
          </div>
          <Button
            variant="secondary"
            onClick={toggle}
            className="text-sm px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </Button>
        </div>
      </div>
    </nav>
  );
}
