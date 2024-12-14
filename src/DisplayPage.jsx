import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const DisplayPage = () => {
    const [dependencyData, setDependencyData] = useState(null);

    useEffect(() => {
        // Retrieve data from localStorage
        const data = JSON.parse(localStorage.getItem("dependencyData"));
        if (data) {
            setDependencyData(data); // Directly setting the array
          }

        
    }, []);

    return (
    <>
        <Navbar/>
        <h1
            style={{
                marginTop:"5vh"
            }}
        >Dependency Data</h1>
        <br />
            <table className="table table-striped table-hover" style={{width:"85vw", marginLeft:"auto",marginRight:"auto"}}>
                <thead className="table-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">GroupID</th>
                    <th scope="col">ArtifactId</th>
                    <th scope="col">CurrentVersion</th>
                    <th scope="col">LatestVersion</th>
                    </tr>
                </thead>
                <tbody>
                {dependencyData?.length > 0 ? (
                    <>

                        {dependencyData.map((dep, index) => (
                            
                            <tr key={index}>
                                <th scope="row">{index}</th>
                                <td>{dep.groupId}</td>
                                <td>{dep.artifactId}</td>
                                <td> {dep.currentVersion}</td>
                                <td> {dep.latestVersion}</td>
                            </tr>

                            
                        ))}

                    </>    
                    ) : (   <tr><th colSpan="5" style={{textAlign:"center"}}><h1>Loading...</h1></th></tr>   )}

                </tbody>
            </table>
        
    </>
    );
};

export default DisplayPage;
