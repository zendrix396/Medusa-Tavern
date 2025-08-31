"use client";
import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Page(){
    useEffect(() => {
        let tl = gsap.timeline();
    }, []);

    return (

        // make them vibgyor 
        <div className="flex gap-20 justify-start items-center px-10 h-screen bg-emerald-100 overflow-hidden">
        <div className='flex gap-20 flex-shrink-0'>
        <div className="violet w-80 h-80 bg-violet-500/30 shadow-lg backdrop-blur-lg rounded-lg text-5xl flex items-center justify-center">🤗</div>
            <div className="indigo w-80 h-80 bg-indigo-500/30 shadow-lg backdrop-blur-lg rounded-lg text-5xl flex items-center justify-center">🤗</div>
            <div className="blue w-80 h-80 bg-blue-500/30 shadow-lg backdrop-blur-lg rounded-lg text-5xl flex items-center justify-center">🤗</div>
            <div className="green w-80 h-80 bg-green-500/30 shadow-lg backdrop-blur-lg rounded-lg text-5xl flex items-center justify-center">🤗</div>
            <div className="yellow w-80 h-80 bg-yellow-500/30 shadow-lg backdrop-blur-lg rounded-lg text-5xl flex items-center justify-center">🤗</div>
            <div className="orange w-80 h-80 bg-orange-500/30 shadow-lg backdrop-blur-lg rounded-lg text-5xl flex items-center justify-center">🤗</div>
            <div className="red w-80 h-80 bg-red-500/30 shadow-lg backdrop-blur-lg rounded-lg text-5xl flex items-center justify-center">🤗</div>
            </div>
        </div>
    )
}