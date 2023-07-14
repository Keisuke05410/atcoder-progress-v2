import React, { useState } from "react";
import { VerdiciInput } from "./Inputs/VerdiciInput";
import { URLInput } from "./Inputs/URLInput";
import { CodeInput } from "./Inputs/CodeInput";
import SubmitButton from "./Inputs/SubmitButton";
import SelectLanguage from "./Inputs/SelectLanguage";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../../lib/firebase";
import { CheckURL } from "../../utils/recordtask/checkURL";
import { get, useForm } from "react-hook-form";
import { useAuthContext } from "../../utils/auth/state";
import { data } from "autoprefixer";
import { newPost } from "../../lib/newPost";

export const RecordInput = () => {
  const { user } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // submitbuttonが押された時の処理
  const uid = user.uid;

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          newPost(data, uid);
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
