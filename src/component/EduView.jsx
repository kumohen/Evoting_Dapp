import React,{useEffect,useState} from 'react';

const EduView = ({state}) => {
    const [memos,setMemos]=useState([]);
    const {contract}=state;
    useEffect(()=>{
        const memosMessage = async()=>{
          const memos = await contract.allEductationDetails();
          setMemos(memos[0])
          //console.log(memos)
        }
        contract && memosMessage()
    },[contract])

    console.log(memos)
    return (
        <div>
            <h3>Eduction</h3>
        
                < div >
                    <p>Date:{memos.date}</p>
                    <p>Degree:{memos.degree}</p>
                    <p>Instution Name:{memos.instutionName}</p>
                    <p>Knowledge Acquired:{memos.knowledgeAcquired}</p>
                </div>
          
        </div>
    );
};

export default EduView;