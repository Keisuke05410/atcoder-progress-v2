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
  const { user } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // submitbuttonが押された時の処理
  const onSubmit = (data) => {
    // urlからコンテスト情報を取得
    const urlInfo = CheckURL(data.url);
    // userのuidを取得
    const uid = user.uid;
    //  保存する処理
    try {
      // urlが正しい場合
      if (urlInfo.status == true) {
        // dataを作成
        const docRef = doc(db, "tasks", urlInfo.id + uid);
        // 既存のデータベースに同じ問題がないかを確認
        getDoc(docRef).then((doc) => {
          if (doc.exists()) {
            // 既存のデータベースに同じ問題がある場合
            alert("You have already submitted this task!");
          } else {
            // 既存のデータベースに同じ問題がない場合
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
        // urlが正しくない場合
      } else {
        alert("Please enter a valid URL!");
      }
      // 保存に失敗した場合
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
