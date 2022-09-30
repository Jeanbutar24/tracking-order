import React, { useRef, useState } from "react";
import axios from "axios";
import OtpLogin from "./OtepLogin";

const Login = () => {
  const [telp, setTelp] = useState("");

  const handleLogin = () => {
    const getOtp = async () => {
      const res = await axios.post("http://localhost:8000/auth/login", {
        telp,
      });
      console.log(res);
    };
    getOtp();
  };
  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
      <div className="username flex flex-col">
        <label htmlFor="">
          No Telp <span className="text-xs text-red-500">(6281+++++++)</span>
        </label>
        <input
          type="text"
          className="user border-2 border-sky-500 outline-none p-3"
          placeholder="No Telp"
          onChange={(e) => setTelp(e.target.value)}
        />
      </div>
      <button
        onClick={handleLogin}
        className="mt-4 bg-slate-700 p-3 text-white"
      >
        LOGIN
      </button>
      <OtpLogin />
    </div>
  );
};

export default Login;
