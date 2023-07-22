import React,{useState,useEffect} from 'react';
import ABI from "./assets/data.json"
import Web3 from "web3";




const Wallets = () => {
    const [connected,setConnected]=useState(true);
    const contractAddress = "0x8b71c77431b51871764674942a3F9e8646fC5Db1"
    useEffect(() => {
      window.process = {
        ...window.process,
      };
    }, []);
    const init =async()=>{
        try{
          const web3 = new Web3(window.ethereum);
          await window.ethereum.request({method:'eth_requestAccounts'});
        //   const contract = new web3.eth.Contract(
        //       ABI,
        //       "0xd9145CCE52D386f254917e481eB44e9943F39138"
        //   );
        //   console.log(contract)
          
        }catch(error){
          alert("Please Install Metamask");
        }
          
        }
    return (
        <div>
               <button>connect</button>
        </div>
    );
};

export default Wallets;