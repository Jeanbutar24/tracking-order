import React, { useRef, useState } from "react";
import UserStore from "../../../Application/store/userStore";

const OtpLogin = () => {
  const [otp, setOtp] = useState("");
  const [telp, setTelp] = useState("");
  const getUsers = UserStore((state) => state.getUsers);

  const handleOtp = () => {
    getUsers(telp, otp);
  };
  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        placeholder="OTP"
        onChange={(e) => setOtp(e.target.value)}
        className="user border-2 border-sky-500 outline-none p-3 mt-3"
      />
      <input
        type="text"
        placeholder="telp"
        onChange={(e) => setTelp(e.target.value)}
        className="user border-2 border-sky-500 outline-none p-3 mt-3"
      />
      <button className="mt-4 bg-slate-700 p-3 text-white" onClick={handleOtp}>
        SEND OTP
      </button>
    </div>
  );
};

export default OtpLogin;
