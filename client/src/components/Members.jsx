import welcomeImg  from "../images/index.jpeg"
import io from "socket.io-client";
import { useState, useEffect} from "react";

import React from 'react'

const Members = () => {
  const [socket, setSocket] = useState(null);

  useEffect(()=> {
    const socketInstance= io('http://localhost:3000');
    setSocket(socketInstance);
    console.log(socket);

    return() => {
      socketInstance.disconnect();
    }
  }, [socket]);
  return (
    <>
      
      <p>Thank you for checking out</p>
      <img src={welcomeImg} />
    </>
  )
}

export default Members;
