import axios from "axios";
import React, { useState } from "react";

const OtpRegister = ({ telpon }) => {
  const [otp, setOtp] = useState();
  const [telp, setTelp] = useState();
  const handleClick = () => {
    const sendOtp = async () => {
      try {
        const res = await axios.post("http://localhost:8000/auth/verify-otp", {
          telp,
          otp,
        });
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    sendOtp();
    console.log(telpon);
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center ">
        <div className="name flex flex-col">
          <label>No Whatsapp</label>
          <input
            type="text"
            placeholder="No Whatsapp"
            className="user border-2 border-sky-500 outline-none p-3"
            onChange={(e) => setTelp(e.target.value)}
          />
        </div>
        <div className="name flex flex-col ">
          <label>OTP</label>
          <input
            type="text"
            placeholder="OTP"
            className="user border-2 border-sky-500 outline-none p-3"
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        <button
          onClick={handleClick}
          className="mt-4 bg-slate-700 p-3 text-white"
        >
          OTP
        </button>
      </div>
    </div>
  );
};

export default OtpRegister;
