"use client";

import { useAccessLimit } from "../../../utils/auth/accessLimit";
import React, { useState } from "react";
import { URLInput } from "../../../components/RecordTask/URLInput";
import { SetDetail } from "../../../components/RecordTask/SetDetail";

const Dashbord = () => {
  useAccessLimit();
  const [taskInfo, setTaskInfo] = useState({});
  console.log(taskInfo);
  return (
    <div className="px-10 pt-10">
      <URLInput taskInfo={taskInfo} setTaskInfo={setTaskInfo} />
      <SetDetail />
    </div>
  );
};

export default Dashbord;
