// import React from "react";
import Login from "./Login";
import ProcessSetup from "./processSetup";
import Signup from "./Signup";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import UserDashboard from "./UserDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<Login />}></Route>

        <Route path="/dashboard/:email" element={<Dashboard />}>
          <Route index element={<Home />}></Route>
          <Route path="/dashboard/:email/Home" element={<Home />}></Route>
          <Route path="/dashboard/:email/processSetup" element={<ProcessSetup />}></Route>
          <Route path="/dashboard/:email/Profile" element={<Profile />}></Route>
          <Route path="/dashboard/:email/UserDashboard" element={<UserDashboard />}></Route>
        </Route>
                                
      </Routes>
    </BrowserRouter>
  );
}

export default App;
