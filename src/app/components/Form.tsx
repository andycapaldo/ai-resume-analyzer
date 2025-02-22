import { FaUserAlt, FaEnvelope, FaLock } from 'react-icons/fa';

export default function Form() {
    return (
        <form className="bg-gray-50 shadow-md 
                        rounded px-8 pt-6 pb-8 
                        mb-4 max-w-md w-full">
            <h1 className='font-bold mb-2'>Job Info</h1>
            <div className='border-2 border-gray border-opacity-100'>
                <input className='rounded-t-sm w-full' placeholder='job title' />
            </div>
            <div className='border-2 border-gray border-opacity-100'>
                <input className='rounded-none bg-gray-100 w-full' placeholder='company' />
            </div>
            <div className='border-2 border-gray border-opacity-100'>
                <input className='rounded-none bg-gray-100 w-full' placeholder='location' />
            </div>
            <div className='border-gray border-opacity-100 p-0'>
                <textarea className='rounded-none bg-gray-100 w-full' placeholder='copy and paste the job description here' />
            </div>
            <div className='rounded-none bg-gray-100 w-full'>
                <button className='rounded bg-black text-white' type="submit">Upload CV</button>
            </div>
        </form>
    )
}