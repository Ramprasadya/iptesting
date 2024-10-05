"use client";
// import Address from "@/Address/Address";
import axios from "axios";
import React, { useState } from "react";

export default function Home() {
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

  return (
    <>
      <div className="mt-5 flex justify-evenly items-center ">
        <h1 className="text-[16px]  " > Get Your Details from IP </h1>
        <button
          onClick={location}
          className="bg-violet-500 px-4 py-3 border text-white rounded-lg "
        >
          Get IP Detail
        </button>
      </div>
      {data ? (
        <div className="text-center mt-8 ">
          <h2>IP Details:</h2>
          <ul>
            {Object.entries(data).map(([key, value], index) => (
              <li key={index}>
                <strong>{key}:</strong> {value.toString()}
              </li>
            ))}
          </ul>
        </div>
      ):(
        <p>Not Details have to display</p>
      )}
    </>
  );
}
