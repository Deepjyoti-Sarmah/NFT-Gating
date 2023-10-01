import welcomeImg  from "../images/index.jpeg"
import io from "socket.io-client";
import { useState, useEffect} from "react";

import React from 'react'
import { useNavigate } from "react-router-dom";

const Members = () => {
  const navigateTo = useNavigate();
  const [socket, setSocket] = useState(null);

  useEffect(()=> {
    const socketInstance= io('http://localhost:3000');
    setSocket(socketInstance);
    console.log(socket);

    return() => {
      socketInstance.disconnect();
    }
  }, []);

  
  useEffect(() => {
    if(socket){                                                                     
      socket.on('nftsUpdated', (data) => {
        if(data.userNFTs < 1) {
          navigateTo("/");
          alert("You've been logged out because you no longer hold any NFTs in collection with address 0xd618581402226c92b14c9f4870799b3000ac4c77");
        }
      })
    }
  },[socket, navigateTo]);

  return (
    <>
      
      <p>Thank you for checking out</p>
      <img src={welcomeImg} />
    </>
  )
}

export default Members;
