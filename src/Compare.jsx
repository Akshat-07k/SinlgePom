import React, { useState } from 'react'
import Navbar from './Navbar';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_ServerURL;

export const Compare = () => {

    const navigate  = useNavigate();
    const [file1,setFile1] = useState(null);
    const [file2,setFile2] = useState(null);


    const handleSubmit = async()=>{
        if(!file1 || !file2){
            alert("Enter Both Files ");
            return;
        }

        const formDate1 = new FormData();
        formDate1.append("file",file1);

        const formDate2 = new FormData();
        formDate2.append("file",file2);

        try{

            const response1 = await axios.post(`${apiUrl}/api/getLatestVersion`,formDate1,{
                headers : {
                  "Content-Type":"multipart/form-data"
                }
              })

              const response2 = await axios.post(`${apiUrl}/api/getLatestVersion`,formDate2,{
                headers : {
                  "Content-Type":"multipart/form-data"
                }
              })

              if(response1 && response2){
                localStorage.setItem("compareData1", JSON.stringify(response1.data));
                localStorage.setItem("compareData2", JSON.stringify(response2.data));
                navigate("/compareDisplay");
              }
              

        }
        catch(e){
            console.log(e);
        }
        
    }

  return (
    <>  
    <Navbar/>
    <div style={{ width:"80vw",marginLeft:"auto",marginRight:"auto",marginTop:"5vh",backgroundColor:"whitesmoke",padding:"10px"}}>
        <input className="form-control form-control-lg" id="formFileLg" type="file" onChange={(e)=>{setFile1(e.target.files[0])}}/>
            <br />
        <input className="form-control form-control-lg" id="formFileLg" type="file" onChange={(e)=>{setFile2(e.target.files[0])}}/>
    </div>
    <br />
        <button onClick={handleSubmit} className='btn btn-success' style={{padding:"10px",marginLeft:"auto",marginRight:"auto", width:"20vw",display: "block",}}>Submit </button>

    </>
  )
}
