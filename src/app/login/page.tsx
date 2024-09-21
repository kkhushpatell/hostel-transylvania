"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; 
import { toast } from "react-hot-toast"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/warden/login", { email, password });
      toast.success(response.data.message);
      
      // If login is successful, redirect to profile
      router.push("/profile"); 
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Login failed");
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>Login</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <button
          onClick={handleLogin}
          style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
