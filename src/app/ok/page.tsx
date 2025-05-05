'use client';

import { useState } from 'react';


export default function Ok() {
    const [result, setResult] = useState('');
    
    async function handleClick() {
        const res = await fetch('/api/test-openai', {
            method: 'POST',
        });
    
        const data = await res.json();
        setResult(data.response || data.error);
    }

    return (
        <div className="flex flex-col justify-center items-center my-8 h-2/3">
                <main className="p-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleClick}
      >
        Ask OpenAI
      </button>
      <p className="mt-4">{result}</p>
    </main>
        </div>
    )
}