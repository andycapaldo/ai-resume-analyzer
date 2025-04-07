'use client';

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


export default function Navbar() {
    const [toggleIcon, setToggleIcon] = useState(false);
    

return (
    <div className='border-b-2 border-coolGray flex justify-between items-center px-8 py-4'>
        <div className='text-2xl font-bold'>
            Resume<span className='text-accentCoral'>GPT</span>
        </div>
        <div className='flex gap-8 text-xl'>
            <div onClick={() => setToggleIcon(!toggleIcon)} className='cursor-pointer'>
                {!toggleIcon ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
            </div>
            <div>
                Login
            </div>
        </div>
    </div>
    );
}
