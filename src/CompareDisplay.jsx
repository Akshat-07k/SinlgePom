import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

export const CompareDisplay = () => {
  const [compareData1, setCompareData1] = useState([]);
  const [compareData2, setCompareData2] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data1 = JSON.parse(localStorage.getItem("compareData1"));
    const data2 = JSON.parse(localStorage.getItem("compareData2"));

    if (data1 && data2) {
      setCompareData1(data1);
      setCompareData2(data2);
    } else {
      navigate('/'); // Redirect if data is not found
    }
  }, [navigate]);

  // Function to get common dependencies
  const getCommonDependencies = () => {
    return compareData1.filter(dep1 => 
      compareData2.some(dep2 => dep1.artifactId === dep2.artifactId && dep1.groupId === dep2.groupId)
    );
  };

  const commonDependencies = getCommonDependencies();

  return (
    <>
    <Navbar/>
      <h2>Compare Dependencies</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>GroupId</th>
            <th>ArtifactId</th>
            <th>Current Version (Data 1)</th>
            <th>Current Version (Data 2)</th>
            <th>Latest Version</th>
          </tr>
        </thead>
        <tbody>
          {commonDependencies.length > 0 ? (
            commonDependencies.map((dep, index) => {
              const dep2 = compareData2.find(d => d.artifactId === dep.artifactId && d.groupId === dep.groupId);
              return (
                <tr key={index}>
                  <td>{dep.groupId}</td>
                  <td>{dep.artifactId}</td>
                  <td>{dep.currentVersion}</td>
                  <td>{dep2?.currentVersion}</td>
                  <td>{dep.latestVersion}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="5">No common dependencies found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
