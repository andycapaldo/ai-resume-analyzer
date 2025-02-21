"use client"; 

import Link from "next/link";

export default function Navbar() {

return (
    <nav className="p-6 bg-gray-800 text-white">
        <ul className="flex gap-4">
            <li>
                <Link href="/">ResumeGPT</Link>
            </li>
        </ul>
    </nav>
);
}
