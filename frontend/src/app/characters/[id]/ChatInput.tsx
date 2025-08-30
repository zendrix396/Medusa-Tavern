'use client'

import React from "react"

// make the hash either null or string
export default function ChatInput({hash, characterName, onMessageSend}: {hash: string | null, characterName: string | null, onMessageSend: () => void}){
    
    // @ts-expect-error ignore this error
    const handleSubmit = async (e) => {
        e.preventDefault();
        const msg = e.target[0].value;
       await fetch(`http://localhost:8000/chat/update`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({hash: hash, message: msg}),
    })
        e.target[0].value = "";
        onMessageSend();
    }
     return <div>
         <form onSubmit={handleSubmit} className="flex justify-center">
            <input type="text" placeholder={`Chat with ${characterName}!`} className="fixed bottom-[10%] w-[40%] m-10 p-3 border-3 border-gray-500" />
            </form>
        </div>
}