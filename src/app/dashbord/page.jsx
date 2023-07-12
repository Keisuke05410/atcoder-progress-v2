"use client";

import { useAccessLimit } from "../../../utils/auth/accessLimit";
import React from "react";

const Dashbord = () => {
  useAccessLimit();
  return <div>ログインできてるよ</div>;
};

export default Dashbord;
