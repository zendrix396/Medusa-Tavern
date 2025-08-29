'use client'

import React, { useState } from "react"
import chatData from "@/app/characters/ChatHistory";
interface ChatInputProps {
    characterName: string
}

export default function ChatInput({characterName}: ChatInputProps){
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const msg = e.target[0].value;
        if (msg.trim()){
            console.log(msg);
            // here i want to push chat where index is a hashed string of the address of that particular chat, use hashing, first check if local storage has that hash if yes then just add chat to it if no then create hash and set local storage, instead of characterName use that hash, you create hash by firrst getting a random number than creating it into a base64 string not using btoa on charactername
            chatData[characterName] = [...msg]
            e.target[0].value = "";
        }
    }
     return <div>
         <form onSubmit={handleSubmit} className="flex justify-center">
            <input type="text" placeholder={`Chat with ${characterName}!`} className="fixed bottom-[10%] w-[40%] m-10 p-3 border-3 border-gray-500" />
            </form>
        </div>
}