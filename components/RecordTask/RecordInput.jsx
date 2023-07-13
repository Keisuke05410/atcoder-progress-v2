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

export const RecordInput = (props) => {
  const DOCREF = doc(db, "tasks", "aaaaaaaaaaaaaaa");
  getDoc(DOCREF).then((doc) => {
    if (doc.exists()) {
      console.log("Document data:", doc.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  });

  const { user } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const urlInfo = CheckURL(data.url);
    const uid = user.uid;
    try {
      if (urlInfo.status == true) {
        const docRef = doc(db, "tasks", urlInfo.id + uid);
        getDoc(docRef).then((doc) => {
          if (doc.exists()) {
            alert("You have already submitted this task!");
          } else {
            setDoc(docRef, {
              uid: uid,
              url: data.url,
              verdici: data.verdici,
              code: data.code,
              language: data.language,
              createdAt: serverTimestamp(),
              updatedAt: serverTimestamp(),
            });
          }
        });
      } else {
        alert("Please enter a valid URL!");
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
