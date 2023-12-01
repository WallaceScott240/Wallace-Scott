import React, { useState } from "react";
import axios from "axios";
import { post } from "./axiosPOST2";

const AxiosOtp = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const handleEmailSubmit = async () => {
    post("login-user", {
      authKey: email,
      otp: otp,
    });
  };

  return (
    <>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleEmailSubmit}>Submit Email</button>
      </div>
      <div>
        <label>OTP:</label>
        <input
          type="number"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <button onClick={handleEmailSubmit}>Submit Email</button>
      </div>
    </>
  );
};

export default AxiosOtp;
