// src/app/signup/page.tsx
"use client"; 

import React, { useState } from "react";
import axios from "axios";
import OtpVerification from "../verifyotp/OtpVerification"; 
import { toast } from "react-hot-toast";

const Signup = () => {
  const [name, setName] = useState("");
  const [employeeID, setRegNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const handleSignup = async () => {
    try {
      const response = await axios.post("/api/warden/signup", { name, employeeID, email, password });
      toast.success(response.data.message);
      setShowOtp(true); 
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>Signup</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="text" value={employeeID} onChange={(e) => setRegNo(e.target.value)} placeholder="Employee ID" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button onClick={handleSignup}>Sign Up</button>
      </div>

      {showOtp && <OtpVerification email={email} />}
    </div>
  );
};

export default Signup;
