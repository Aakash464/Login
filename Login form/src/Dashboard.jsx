// import React from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import "./dashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  useEffect(()=>{
    axios.get("http://localhost:8081/dashboard")
    .then(res=>{
      if(res.data.Status === "Success"){
        console.log(res)
      }
      else{

        navigate("/")
      }
    })
  })
  return (
    
    <div className="container-1">
      <div className="navbar">
        <img src="/myflocklogo-removebg-preview 1.png" alt="" />

        <Link className="link12" to="/dashboard/Home"><button className="link">Home</button></Link>

        <Link className="link12" to="/dashboard/Profile"><button className="link">Profile</button></Link>

        <Link className="link12" to="/dashboard/processSetup"><button className="link">Process Setup</button></Link>

        <Link className="link12" to="/dashboard/UserDashboard"><div className="link">Dashboard</div></Link>

      </div>
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;