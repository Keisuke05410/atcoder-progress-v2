import React from "react";
import { VerdiciInput } from "./Inputs/VerdiciInput";
import { URLInput } from "./Inputs/URLInput";
import { CodeInput } from "./Inputs/CodeInput";
import SubmitButton from "./Inputs/SubmitButton";
import SelectLanguage from "./Inputs/SelectLanguage";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../../utils/auth/state";
import { newPost } from "../../lib/newPost";

export const RecordInput = () => {
  const { user } = useAuthContext();
  const { register, handleSubmit, reset } = useForm();
  const uid = user.uid;

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          newPost(data, uid, reset);
        })}
      >
        <URLInput register={register} />
        <div className="flex flex-wrap w-full justify-center">
          <div className="flex relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
            <VerdiciInput register={register} />
            <SelectLanguage register={register} />
          </div>
        </div>
        <CodeInput register={register} />
        <SubmitButton />
      </form>
    </>
  );
};
