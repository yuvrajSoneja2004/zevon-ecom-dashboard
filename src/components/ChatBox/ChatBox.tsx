"use client"
import React, { useState, useEffect , useMemo} from 'react'
import S from './ChatBox.module.css';
import styled from 'styled-components';

interface AvilProps {
    username: string,
    socket: any
}

const ChatBox:React.FC<AvilProps> = ({username, socket}) => {
    const [currentMsg , setCurrentMsg] = useState("");
    const [messageList, setMessageList] = useState([]);
    const memoizedMessageList = useMemo(() => messageList, [messageList]);


    const sendMsg = async () => {
        setCurrentMsg("")
        if(currentMsg === ""){
            alert("Write somethin");
        } else {

            // Code here
            const messageData = {
                room: 6969,
                author: username,
                message: currentMsg,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes() + `${new Date(Date.now()).getHours() < 12 ? "AM": "PM"}`
            }

            await socket?.emit("send_msg" , messageData);
            setMessageList((prev) => [...prev , messageData])

        }

    }

    useEffect(() => {
        socket?.on("recieve_msg" , (data) => {
            console.log(data , 'chat data man');
            setMessageList((prev) => [...prev , data]);
        })
  } , [socket])



  return (
    <Whole>
<h1>{username}</h1>
    {
        memoizedMessageList.map((eachMsg, i) => {
            return <div key={i} id={eachMsg?.author === username ? "you" : "other"}>
                <div>
                <p>{eachMsg.message}</p>
            </div>
            </div>
        })
    }
<div className='chat-input'>
<input type="text" value={currentMsg} onChange={(e) => {setCurrentMsg(e.target.value)}} />
<button onClick={sendMsg}>Send</button>
</div>
    </Whole>
  )
}

const Whole = styled.div`
     width: 100%;
    height: 80vh;
    border: 2px solid black;
    display: flex;
    justify-content: space-between;
    flex-direction: column;


    .chat-input {
        width: 100%;
        display: flex;
        align-items: center;

        input {
            width: 100%;
            height: 30px;
        }
        button {
            height: 100%;
        }

       


    }

    .chat-area {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            text-align: right;
            width: 100%;
            align-items: end;
        }
    #you {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            text-align: right;
            align-items: end;
            width: 100%;
        }
    #other {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            text-align: left;
            width: 100%;
            align-items: start;
            

        }

    #you div {
        padding: 10px;
           border-radius: 10px;
            background-color: #0066ff;
            font-size: 16px;
            width: 90px;
    }
    #other div {
        padding: 10px;
           border-radius: 10px;
            background-color: pink;
            font-size: 16px;
            width: 90px;
    }
       
`

export default ChatBox