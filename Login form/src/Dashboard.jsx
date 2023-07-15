// import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./dashboard.css";

function Dashboard() {
  return (
    // <div>
    // <div>Dashboard</div>
    // <Link to="/dashboard/data">Go to the data</Link><br />
    // <Link to="/dashboard/Profile">Go to Profile</Link>
    // <Outlet />
    // </div>
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
