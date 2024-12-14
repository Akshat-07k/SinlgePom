import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_ServerURL;
export const InputFile = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);

    const handleSubmit = async  (event)=>{

      if (!file) {
        alert("Please select a file!");
        return;
      }

      const formData = new FormData();
      formData.append("file",file);

        try{
            //first
          // const response = await axios.post("/api/getLatestVersion",formData,{
          console.log(apiUrl)
          const response = await axios.post(`${apiUrl}/api/getLatestVersion`,formData,{
            headers : {
              "Content-Type":"multipart/form-data"
            }
          })
          
          console.log(response.data);
          localStorage.setItem("dependencyData", JSON.stringify(response.data));
          navigate(`/display`);
        }
        catch(e){
          console.log("Eooro : ",e);
        }
    }

  return (
    <>
    <div style={{
        width:"80vw",
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:"20vh"
    }}>
        
        <label for="formFileLg" className="form-label">File Input Field </label>
        <input className="form-control form-control-lg" id="formFileLg" type="file" onChange={(e)=>{setFile(e.target.files[0])}}/>
        <br />
        <button
        style={{
            width:"20%",
            marginLeft:"auto",
            marginRight:"auto",
            display: "block", 
        }}
         type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>
    </div>
    </>
  )
}
