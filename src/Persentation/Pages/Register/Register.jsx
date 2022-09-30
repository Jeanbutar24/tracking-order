import React, { useState } from "react";
import OtpRegister from "./OtpRegister";
import axios from "axios";
const Register = () => {
  const [name, setName] = useState();
  const [telp, setTelp] = useState();
  const handleClick = () => {
    const register = async () => {
      try {
        const res = await axios.post("http://localhost:8000/auth/register", {
          name,
          telp,
        });
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    register();
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="name flex flex-col">
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          className="user border-2 border-sky-500 outline-none p-3"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="name flex flex-col ">
        <label>Telp</label>
        <input
          type="text"
          placeholder="No Whatsapp"
          className="user border-2 border-sky-500 outline-none p-3"
          onChange={(e) => setTelp(e.target.value)}
        />
      </div>
      <button
        className="mt-4 bg-slate-700 p-3 text-white"
        onClick={handleClick}
      >
        REGISTER
      </button>
      <hr className="text-gray-900 font-bold" />
      <OtpRegister telpon={telp} />
    </div>
  );
};

export default Register;
