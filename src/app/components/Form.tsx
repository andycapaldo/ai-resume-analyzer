'use client'

import FileUpload from "./FileUpload";
import { useState } from 'react';

export default function Form() {

    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (uploadedFile: File) => {
        setFile(uploadedFile);
    }

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formData = new FormData(e.target as HTMLFormElement);
        if (file) {
            formData.append('file', file);
        }
        const payload = Object.fromEntries(formData); 

        console.log(payload);
    }

    return (
        <form className="bg-gray-50 shadow-md 
                        rounded px-8 pt-6 pb-8 
                        mb-4 max-w-md w-full" onSubmit={submitForm}>
            <h1 className='font-bold mb-2'>Job Info</h1>
            <div className='border-2 border-gray'>
                <input name="jobTitle" className='rounded-t-sm bg-gray-100 w-full' placeholder='job title' />
            </div>
            <div className='border-2 border-gray'>
                <input name="company" className='rounded-none bg-gray-100 w-full' placeholder='company' />
            </div>
            <div className='border-2 border-gray'>
                <input name="location" className='rounded-none bg-gray-100 w-full' placeholder='location' />
            </div>
            <div className='border-2 border-gray w-full'>
                <textarea name="description" className='rounded-none bg-gray-100 w-full h-full' placeholder='copy and paste the job description here' />
            </div>
            <div className="border-2 border-gray rounded-none bg-gray-100 w-full">
                <FileUpload onFileChange={handleFileChange} />
            </div>
            <div className='flex justify-center'>
                <button type="submit" className='rounded bg-black text-white mt-5 w-1/2'>Submit</button>
            </div>
        </form>
    )
}