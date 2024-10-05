"use client";
import axios from "axios";
import React, { useState } from "react";
import "../app/globals.css"

const Address = () => {
  const [data, setData] = useState(null); 

  const location = async () => {
    try {
      const ipResponse = await axios.get("https://ipapi.co/json/");
      const ipData = ipResponse.data;
      setData(ipData); 
    } catch (error) {
      console.error("Error fetching IP data:", error);
    }
  };

  console.log(data)

  return (
    <>
     <div>
     <button onClick={location} className="bg-violet-500" >Get IP Detail</button>
     </div>
      {data && (
        <div className="text-center" >
        
          <h2>IP Details:</h2>
          <ul>
            {Object.entries(data).map(([key, value], index) => (
              <li key={index}>
                <strong>{key}:</strong> {value.toString()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Address;
