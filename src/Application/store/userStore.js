import create from "zustand";
import { devtools, persist } from "zustand/middleware";

import axios from "axios";
let store = (set) => ({
  getUsers: async (telp, otp) => {
    const res = await axios.post("http://localhost:8000/auth/verify-otp", {
      telp,
      otp,
    });
    console.log(res.data.data.token);

    localStorage.setItem("auth", JSON.stringify(res.data.data.token));
  },
});
store = devtools(store);
store = persist(store);
const UserStore = create(devtools(store));

export default UserStore;
