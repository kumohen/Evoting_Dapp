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


  const [account,setAccount]=useState('Not connected');
  useEffect(()=>{
    const connectContract=async()=>{
   
     
      const contractAddres = "Your Contract Address"
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
