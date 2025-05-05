import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
    try {
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: 'Say hello world' }],
            model: 'gpt-3.5-turbo',
        });

        const response = chatCompletion.choices[0].message.content;
        return NextResponse.json({ response });
    } catch (error) {
        console.error('OpenAI error:', error);
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}
