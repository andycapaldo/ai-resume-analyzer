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
    <div className='flex flex-col justify-center items-center my-8 h-2/3'>
        <form className="bg-skyMist text-softNavy shadow-md 
                        rounded-lg px-8 pt-6 pb-6 
                        w-2/5 flex-1 border-4 border-coolGray" onSubmit={submitForm}>
            <h1 className='font-bold mb-2 text-2xl'>Job Info</h1>
            <div className="flex flex-col h-96">
                <div className='border-[1px] border-coolGray rounded-t-lg px-4'>
                    <input name="jobTitle" className='rounded-t-lg bg-gray-100 w-full h-12 bg-skyMist outline-none' placeholder='job title' />
                </div>
                <div className='border-[1px] border-coolGray rounded-none px-4'>
                    <input name="company" className='bg-gray-100 rounded-none w-full h-12 bg-skyMist outline-none' placeholder='company' />
                </div>
                <div className='border-[1px] border-coolGray px-4'>
                    <input name="location" className='rounded-none bg-gray-100 w-full h-12 bg-skyMist outline-none' placeholder='location' />
                </div>
                <div className='border-[1px] border-coolGray w-full h-1/4'>
                    <textarea name="description" className='rounded-none bg-gray-100 w-full h-full bg-skyMist outline-none px-4' placeholder='copy and paste the job description here' />
                </div>
                <div className="border-[1px] border-coolGray rounded-b-lg bg-gray-100 w-full bg-skyMist py-4 px-4">
                    <FileUpload onFileChange={handleFileChange} />
                    <h3 className='mt-4 text-sm'>Upload a PDF of your Resume/CV</h3>
                </div>
            </div>
                <div className='flex justify-start'>
                    <button type="submit" className='rounded-lg bg-oceanBlue text-crispWhite hover:bg-oceanBlueDark w-1/5 h-12'>Submit</button>
                </div>
        </form>
    </div>
    )
}