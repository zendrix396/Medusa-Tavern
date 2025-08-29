// i have chats.json, and want to save data there


interface chat {
    [key:string]:{};
}  
const chatData:chat = JSON.parse(JSON.stringify(chats));


export default chatData;