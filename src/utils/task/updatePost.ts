import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { CheckURL, URL_last } from "../url/checkURL";
import { db } from "../auth/firebase";
import { UpdateData } from "../../types";

export const updatePost = (data: UpdateData, reset: any) => {
  // urlからコンテスト情報を取得
  const urlInfo = CheckURL(data.url);
  if (
    urlInfo.contestAlphabet != data.contestAlphabet ||
    urlInfo.contestNumber != data.contestNumber ||
    urlInfo.taskAlphabet != data.taskAlphabet
  ) {
    alert("URL and contest information do not match!");
  }
  // userのuidを取得
  //  保存する処理
  try {
    // urlが正しい場合
    if (urlInfo.status === true) {
      // dataを作成
      const docRef = doc(db, "tasks", URL_last(data.url) + data.uid);
      // 既存のデータベースに同じ問題がないかを確認
      updateDoc(docRef, {
        uid: data.uid,
        url: data.url,
        contestAlphabet: data.contestAlphabet,
        contestNumber: data.contestNumber,
        taskAlphabet: data.taskAlphabet,
        verdici: data.verdici,
        count: data.count,
        code: data.code,
        language: data.language,
        createdAt: data.createdAt,
        updatedAt: serverTimestamp(),
      }).then(() => {
        reset();
        alert("Successfully saved!");
      });
    }
    // urlが正しくない場合
    else {
      alert("Please enter a valid URL!");
    }
    // 保存に失敗した場合
  } catch (e: any) {
    console.error("Error adding document: ", e);
  }
};
