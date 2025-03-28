'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

return (
    <nav className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
                <div className="flex-shrink-0">
                    <a href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                        ResumeGPT
                    </a>
                </div>
            <div className="flex items-center space-x-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                    Login
                    </button>
                    <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none"
                    aria-label="Toggle Dark Mode"
                    >
                {theme === 'dark' ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-yellow-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12.34h-1m15.31-4.95l-.71.71m-12.02 12.02l-.71.71m12.02 0l-.71-.71m-12.02-12.02l-.71-.71M12 5a7 7 0 000 14 7 7 0 000-14z" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12.34h-1m15.31-4.95l-.71.71m-12.02 12.02l-.71.71m12.02 0l-.71-.71m-12.02-12.02l-.71-.71" />
                    </svg>
                )}
                    </button>
            </div>
            </div>
        </div>
    </nav>
    );
}
