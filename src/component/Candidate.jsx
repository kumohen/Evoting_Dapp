import React,{useState,useEffect} from 'react';

const Candidate = ({state}) => {
    const [candidates,setCandidates]=useState([]);
    const [error,setError] = useState(false)
    const {contract}=state;
    useEffect(()=>{
        const getCandidates = async()=>{
          const candidates = await contract.allcandidates();
          setCandidates(candidates)
          //console.log(memos)
        }
        contract && getCandidates()
    },[contract])
    // console.log(candidates)
    const getfunction = ()=>{
        candidates && candidates.filter(item => console.log(  item.name))
    }
    // getfunction()
    const callFunctVote = async (id)=>{
        try {
            const res =  await contract.giveVote(id)
        } catch (e) {
           const err = e.message;
           setError(true);
           setTimeout(()=>{
             setError(false)
           },5000)
        }
      
       
   
      
    }


const images = [
    "https://res.cloudinary.com/dvfpkko1z/image/upload/v1690032171/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI_._V1_FMjpg_UX1000__wt5dnq.jpg",
    "https://res.cloudinary.com/dvfpkko1z/image/upload/v1690032430/MH_S5_Promotional_kz3bb1.webp",
    "https://res.cloudinary.com/dvfpkko1z/image/upload/v1690032540/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1__wcq8rm.jpg"
]
const seriesname = ["Game of Thrones","Money Heist","Breaking Bad"]
    return (
        <div >
               {error && <>
                <div className="alert alert-danger" role="alert">
                   <h3 style={{textAlign:"center"}}> You have already voted  </h3> 
                </div>
             </>}
          
            <div className='d-flex flex-row' style={{marginLeft:"25%",marginTop:"2%"}}>
             
           
         
             {candidates && candidates.map((item,index)=>(
                <div key={index} style={{height:"300px",marginLeft:"10px",}}>
                  <h3 style={{fontWeight:"bold",textAlign:"center"}}>{item.name}</h3>
              
                  <img src={images[index]} alt="aa" height={440} width={300} />
                  <h5 style={{fontWeight:"700",textAlign:"center",marginTop:"5px"}}>Total Vote: {item.votecount.toNumber()}</h5>
                  <button onClick={()=>  callFunctVote(item.id.toNumber())}
                   className='btn btn-primary' style={{marginLeft:"35%"}}>  Vote</button>
                </div>
             ))}
            </div>

            <h4 style={{marginLeft:"25%",marginTop:"15%"}}> # Give Vote to your favourite Series</h4>
        </div>
    );
};

export default Candidate;