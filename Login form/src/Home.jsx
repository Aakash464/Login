// import React from 'react'
import "./home.css"
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import "./dashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";




function Home() {
  const[data,setData] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8081/dashboard")
    .then(res=>{
      if(res.data.Status === "Success"){

        setData(res.data.Result)
        console.log(res.data.Result)

       
      }
      else{
        console.log(res)
      }
    })
  },[])
  
  return (
    <div className="home-container">
      <div className="home-details">
        {data.map((user,index)=>{
          return (
          <div key={index}>
            <p>Name: {user.Name}</p>
            <p>UserName: {user.Username}</p>
            <p>Age: {user.Age}</p>
          </div>
         
          )
        })}
        </div>
         </div>
         
  )
}

export default Home
