"use client";

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import ChatInput from "./ChatInput";

const parseResponse = (text: string) => {
    if (!text) return { __html: "" };
    // make the text inside the * bold
    const italicText = text.replace(/\*(.*?)\*/g, "<i>$1</i>");
    // make the text inside "" bold
    const boldText = italicText.replace(/\"(.*?)\"/g, '"<b><i>$1</i></b>"');    
    return { __html: boldText };
}

export default function Page({ params }: { params: { id: string } }) {
  // @ts-expect-error ignore this
  const { id } = React.use(params);
  const [chats, setChats] = useState<{ user: string; system: string }[] | null>(
    null
  );
  const [character, setCharacter] = useState<string | null>(null);
  const fetchData = useCallback(async () => {
    const chatData = await fetch(`http://localhost:8000/chat?hash=${id}`).then(
      (res) => res.json()
    );
    const characterData = await fetch(`http://localhost:8000/characters`).then(
      (res) => res.json()
    );
    setCharacter(characterData[id].name);
    if (chatData) {
      setChats(chatData);
    }
  }, [id]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex justify-center relative"
      style={{ backgroundImage: 'url(/bg.png)' }}
    >
      {/* Back Arrow */}
      <Link 
        href="/characters"
        className="fixed top-4 left-10 z-50 bg-pink-400/70 backdrop-blur-md rounded-full p-3 shadow-lg hover:bg-pink-400/80 transition-all duration-200 border border-white/20"
      >
        <svg 
          className="w-6 h-6 text-gray-700" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </Link>
      <div className="w-full max-w-4xl h-[85vh] overflow-y-auto p-4 custom-scrollbar">
        {chats &&
          chats.map((msg: { user: string; system: string }, index: number) => (
            <div key={index} className="p-2 m-2 grid grid-cols-2 gap-2">
              {/* User message */}
              <div className="col-start-2 justify-self-end max-w-[80%]">
                <p className="bg-pink-400/50 backdrop-blur-sm text-white rounded-lg p-3 m-1 shadow-lg">
                  {msg.user}
                </p>
              </div>
              {/* System/Character message */}
              <div className="col-start-1 col-span-2 max-w-[85%]">
                <p className="bg-white/60 backdrop-blur-sm rounded-lg p-3 m-1 shadow-lg">
                  <div className="flex flex-col">
                    <p 
                      className="text-gray-700"
                      dangerouslySetInnerHTML={parseResponse(msg.system)}
                    ></p>
                  </div>
                </p>
              </div>
            </div>
          ))}
          
          {/* Chat input centered */}
          <div className="flex justify-center mt-4">
            <ChatInput
              hash={id || null}
              characterName={character || null}
              onMessageSend={fetchData}
            />
          </div>
        </div>
    </div>
  );
}
