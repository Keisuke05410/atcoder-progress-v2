import React, { useState } from "react";
import { VerdiciInput } from "./Inputs/VerdiciInput";
import { URLInput } from "./Inputs/URLInput";
import { CodeInput } from "./Inputs/CodeInput";
import SubmitButton from "./Inputs/SubmitButton";

export const RecordInput = (props) => {
  const [url, setUrl] = useState("");
  const [verdici, setVerdici] = useState("");
  const [code, setCode] = useState("");
  console.log(url, verdici, code);
  return (
    <>
      <form>
        <URLInput url={url} setUrl={setUrl} />
        <VerdiciInput verdici={verdici} setVerdici={setVerdici} />
        <CodeInput code={code} setCode={setCode} />
        <SubmitButton />
      </form>
    </>
  );
};
