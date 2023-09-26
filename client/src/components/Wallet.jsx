import { useNavigate } from 'react-router-dom';
import React from 'react'

const Wallet = () => {

  const navigateTo = useNavigate();
  
  const connectWallet = async() => {
    try { 
      if (window.ethereum) {
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
        // console.log(accounts[0]);
        navigateTo("/home", {state:{address: accounts[0]}});
      } else {
        alert("Install Metamask");
      }
    } catch (error) {
      console.log(error);
    } 
  }
  return (
    <>
      <button onClick={connectWallet}>Connect Wallet</button>
    </>
  )
}

export default Wallet
