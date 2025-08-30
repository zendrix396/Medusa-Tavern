import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uuid
from pydantic import BaseModel
app = FastAPI()
# add localhost:3000 and setup cors
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class Message(BaseModel):
    hash: str
    message: str
@app.get("/")
def root():
    return {"message": "Medusa Tavern API is running!"}
@app.get("/characters")
def get_characters():
    with open("characters.json", "r") as f:
        return json.load(f)

# get method to get all the chats at a particular id, hash is the id
@app.get("/chat")
def get_chats(hash: str):
    with open("chats.json", "r") as f:
        chats = json.load(f)
    if hash not in chats:
        return {"chatHistory": []}
    return chats[hash]

@app.post("/chat/update")
def update_chat(body: Message):
    hash = body.hash
    message = body.message
    with open("chats.json", "r") as f:
        chats = json.load(f)
    try: 
        chats[hash].append(message)
    except:
        chats[hash] = [message]
    with open("chats.json", "w") as f:
        json.dump(chats, f)
    return {"message": "Chat updated successfully"}