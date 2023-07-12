"use client";

import { useAccessLimit } from "../../../utils/auth/accessLimit";
import React, { useState } from "react";
import { SetDetail } from "../../../components/RecordTask/SetDetail";
import { useAuthContext } from "../../../utils/auth/state";
import { RecordInput } from "../../../components/RecordTask/RecordInput";

const Dashbord = () => {
  const user = useAuthContext();
  useAccessLimit();
  const [taskInfo, setTaskInfo] = useState({ status: false });
  console.log(user);
  console.log(taskInfo);
  return (
    <div className="px-10 pt-10">
      <RecordInput taskInfo={taskInfo} setTaskInfo={setTaskInfo} />
      {taskInfo.status ? <SetDetail /> : <div>none</div>}
    </div>
  );
};

export default Dashbord;
