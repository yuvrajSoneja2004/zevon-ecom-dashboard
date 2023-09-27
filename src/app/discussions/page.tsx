"use client"
import React , {FC, useState, useEffect} from 'react'
import styled from 'styled-components';
import io from 'socket.io-client';
import ChatBox from '@/components/ChatBox/ChatBox';


const page:FC = () => {

    const [name , setName] = useState("");
    const [socket,  setSocket] = useState();
    const [isJoinedToRoom , setIsJoinedToRoom] = useState(false);

    const joinUser = async () => {
        if(name !== ""){
            await socket?.emit("join_room" , name);
            setIsJoinedToRoom(true);
            
        } else {
            alert("Enter you name")
        }
    }

    useEffect(() => {
       const socket =  io.connect("http://localhost:5000/", {transports: ['websocket', 'polling', 'flashsocket']});
        setSocket(socket);
      }, []);


     

      if(isJoinedToRoom) return <ChatBox username={name} socket={socket}/>

  return (
    <div style={{width: '100%', height: '100vh'}}>
    <UserDetailsBx>
        <input type="text" placeholder='Enter Name..' value={name} onChange={(e) => {setName(e.target.value)}}/>
        <button onClick={joinUser}>Join</button>
    </UserDetailsBx>
    </div>
  )
}

const UserDetailsBx = styled.div`
border: 2px solid black;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export default page