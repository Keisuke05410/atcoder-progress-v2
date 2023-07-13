import React, { useState } from "react";
import { VerdiciInput } from "./Inputs/VerdiciInput";
import { URLInput } from "./Inputs/URLInput";
import { CodeInput } from "./Inputs/CodeInput";
import SubmitButton from "./Inputs/SubmitButton";
import SelectLanguage from "./Inputs/SelectLanguage";

export const RecordInput = (props) => {
  const [url, setUrl] = useState("");
  const [verdici, setVerdici] = useState("");
  const [code, setCode] = useState("");
  console.log(url, verdici, code);
  return (
    <>
      <form>
        <URLInput url={url} setUrl={setUrl} />
        <div className="flex flex-wrap w-full justify-center">
          <div className="flex relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
            <VerdiciInput verdici={verdici} setVerdici={setVerdici} />
            <SelectLanguage />
          </div>
        </div>
        <CodeInput code={code} setCode={setCode} />
        <SubmitButton />
      </form>
    </>
  );
};
