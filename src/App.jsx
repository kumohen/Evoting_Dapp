import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {ethers} from "ethers"
import './App.css'
import ABI from "./assets/data1.json"
import EduView from "./component/EduView"
import Candidate from "./component/Candidate"


function App() {
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  })
// 0x4f08e39350171ea9aF415fE2dFdfe2e3e0c4894c
  // 0x8C7D3c699FAdf6883c9c17b37228DA97586E2D67
  // 0x30BD82c28fCD0f596A9419f01Aec1b39F8677569

// 0x2582E649eCa2a2427aA929A17C87e9bcBE5d4E8e

  const [account,setAccount]=useState('Not connected');
  useEffect(()=>{
    const connectContract=async()=>{
   
      // const contractAddres="0x8C7D3c699FAdf6883c9c17b37228DA97586E2D67";
      const contractAddres = "0x2582E649eCa2a2427aA929A17C87e9bcBE5d4E8e"
      const contractABI=ABI;
      //Metamask part
      //1. In order do transactions on sepolia testnet
      //2. Metmask consists of infura api which actually help in connectig to the blockhain
      try{

        const {ethereum}=window;
        const account = await ethereum.request({
          method:"eth_requestAccounts"
        })
       
        window.ethereum.on("accountsChanged",()=>{
         window.location.reload()
        })
        setAccount(account);
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer =  provider.getSigner(); 
         console.log(signer)
        
        const contract = new ethers.Contract(
          contractAddres,
          contractABI,
          signer
        )
        console.log(contract)
      setState({provider,signer,contract});
       
      }catch(error){
        console.log(error)
      }
    }
    connectContract();
  },[])

  return (
    <>
  
         {/* <EduView  state={state} /> */}
         <Candidate state={state} />
    </>
  )
}

export default App
