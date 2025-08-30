"use client";

import React, { useEffect, useState, useCallback } from "react";
import ChatInput from "./ChatInput";

export default function Page({ params }: { params: { id: string } }) {
    // @ts-expect-error ignore this 
  const { id } = React.use(params);
  const [chats, setChats] = useState<string[] | null>(null);
  const [character, setCharacter] = useState<string | null>(null);
  const fetchData = useCallback(async () => {
    const chatData = await fetch(`http://localhost:8000/chat?hash=${id}`).then(res => res.json());
    const characterData = await fetch(`http://localhost:8000/characters`).then(res => res.json());
    setCharacter(characterData[id].name);
    if(chatData.chatHistory) {
        setChats(chatData.chatHistory);
    }
    else {
        setChats(chatData);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="flex justify-center">
      <div>
        {chats &&
          chats.map((msg: string, index: number) => (
            <div key={index}>{msg}</div>
          ))
        }
      </div>
      <ChatInput hash={id || null} characterName={character || null} onMessageSend={fetchData} />
    </div>
  );
}
