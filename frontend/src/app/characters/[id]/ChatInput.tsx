'use client'

import React from "react"

// make the hash either null or string
export default function ChatInput({hash, characterName, onMessageSend}: {hash: string | null, characterName: string | null, onMessageSend: () => void}){
    
    // @ts-expect-error ignore this error
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const msg = formData.get('message') as string;
        const jailbreakChecked = formData.get('jailbreak') === 'on';
        
        console.log('Message:', msg, 'Jailbreak:', jailbreakChecked);
        
        // Add user message with jailbreak parameter
        await fetch(`http://localhost:8000/chat/add-user-message?jailbreak=${jailbreakChecked}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({hash: hash, message: msg}),
        })
        onMessageSend();
        
        // Clear the message input
        e.target.message.value = "";
        
        // Stream AI response
        await fetch(`http://localhost:8000/chat/stream-ai-response`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({hash: hash, message: msg}),
        })
        onMessageSend();
    }
     return <div>
     <form onSubmit={handleSubmit}>
       <div className="fixed bottom-[2%] left-0 right-0 flex justify-center">
         <div className="flex items-center gap-3 bg-white/70 backdrop-blur-md p-3 rounded-lg shadow-lg border border-white/20">
           {/* Checkbox with tooltip */}
           <div className="relative group">
             <input
               type="checkbox"
               name="jailbreak"
               id="jailbreak"
               className="w-5 h-5 cursor-pointer accent-blue-500"
             />
             <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800/90 backdrop-blur-sm text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
               Enable jailbreak mode
             </div>
           </div>
     
           <input
             type="text"
             name="message"
             placeholder={`Chat with ${characterName}!`}
             className="w-[60vw] md:w-[50vw] max-w-2xl p-3 backdrop-blur-md rounded-lg text-gray-700"
           />
         </div>
       </div>
     </form>
   </div>
}