import { data } from "../CharacterData";
import React from "react";
import ChatInput from "./ChatInput";
import chatData from "../ChatHistory";
export default async function page({ params }: {params:{id: string}}){
    const {id} = await params;
    const character = data[id].name
    const chatHistory = chatData[character]
    console.log(chatHistory)
    return <div className="flex justify-center">
        <div>
            {chatHistory && chatHistory.map((msg, index) => (
                <div key={index}>
                    <strong>{msg}</strong> 
                </div>
            ))}
        </div>
        <ChatInput characterName={character}/>
    </div>
}