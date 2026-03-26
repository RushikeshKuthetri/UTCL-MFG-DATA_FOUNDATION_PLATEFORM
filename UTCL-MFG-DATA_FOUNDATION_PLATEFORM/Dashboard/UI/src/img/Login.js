"use client";

import Image from "next/image";
import React, { useState } from 'react'
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
       <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/login/bgImage.png')" }}
    >
     
      <div className="absolute inset-0 bg-white/75"></div>

      
      <div className="relative w-[320px] bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 z-10">

       
        <div className="absolute top-4 left-5">
          <Image
            src="/login/utclicon.png"
            alt="UTCL logo"
            width={45}
            height={45}
          />
        </div>

         <div className="absolute top-5 left-17">
          <Image
            src="/login/prakriti.png"
            alt="Prakriti Logo"
            width={35}
            height={40}
          />
        </div>
        
       
        <h1 className="text-2xl font-semibold text-center mt-6 mb-6">
          Login to Prakriti
        </h1>

      
        <div className="flex justify-center mb-6">
          <Image
            src="/login/loginIcon.png"
            alt="Login Illustration"
            width={150}
            height={200}
          />
        </div>

     
        <form className="space-y-4">

          
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <span
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

         
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 rounded-lg transition cursor-pointer hover:text-white">
            Login
          </button>
        </form>
      </div>
    </div>
    )
}

export default Login

