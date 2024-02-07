import React, { useEffect, useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/AboutHero.js";
import Features from "components/features/AboutFeatures.js";
import Papa from "papaparse";
import { VitalClient, VitalEnvironment } from '@tryvital/vital-node';
import  {SleepGetRawRequest} from '@tryvital/vital-node/api/resources/sleep';
const allowedExtensions = ["csv"];
 const App = () => {
 
    // This state will store the parsed data
    const [data, setData] = useState([]);
 
    // It state will contain the error when
    // correct file extension is not used
    const [error, setError] = useState("");
 
    // It will store the file uploaded by the user
    const [file, setFile] = useState("");
 
    // This function will be called when
    // the file input changes
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        Papa.parse(file,{
            header: true,
            complete: (results) => {
                setData(results.data)
            }
        })
    };
  
    return (
        <div className="App">
            <input type="file" accept = '.csv' onChange={handleFileChange}/>
            {data.length ? (
            <table className = "table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Occupation</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row,index) => (
                    <tr key={index}>
                        <td>{row.timestamp}</td>
                        <td>{row.hr}</td>
                        <td>{row.hrv}</td>
                    </tr>
                ))}

            </tbody>
            </table>
            
            ) : null}
        </div>
    );
};




const dsc180 = () => {
  return (
  <AnimationRevealPage>
    <Hero />
    <Features />
  </AnimationRevealPage>
  );
}

export default App;
