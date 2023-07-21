"use client";

import { useAccessLimit } from "../../utils/auth/accessLimit";
import React from "react";
import { RecordInput } from "./_component/RecordInput";

const Record = () => {
  useAccessLimit();

  return (
    <div className="px-10 pt-10">
      <RecordInput />
    </div>
  );
};

export default Record;
