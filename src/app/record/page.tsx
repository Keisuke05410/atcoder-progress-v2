"use client";

import { useAccessLimit } from "../../utils/auth/accessLimit";
import React, { useState } from "react";
import { RecordInput } from "./_component/RecordInput";
import { useSearchParams } from "next/navigation";

const Record = () => {
  useAccessLimit();
  const serachParams = useSearchParams();
  const url = serachParams.get("url");
  const code = serachParams.get("code");

  return (
    <div className="px-10 pt-10">
      <RecordInput url={url} code={code} />
    </div>
  );
};

export default Record;
