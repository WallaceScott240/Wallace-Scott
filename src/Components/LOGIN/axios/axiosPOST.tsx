import React, { useState } from "react";
import axios from "axios";
import { post } from "./axiosPOST2";

const AxiosEmail = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = async () => {
    post("verify-user", {
      authKey: email,
    });
  };

  return (
    <div>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleEmailSubmit}>Submit Email</button>
    </div>
  );
};

export default AxiosEmail;


