"use client";

import { useAccessLimit } from "../../../utils/auth/accessLimit";
import React, { useState } from "react";
import { RecordInput } from "../../../components/RecordTask/RecordInput";

const Dashbord = () => {
  useAccessLimit();
  const [taskInfo, setTaskInfo] = useState({ status: false });

  return (
    <div className="px-10 pt-10">
      <RecordInput taskInfo={taskInfo} setTaskInfo={setTaskInfo} />
    </div>
  );
};

export default Dashbord;
