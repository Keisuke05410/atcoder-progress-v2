import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { CheckURL } from "../url/checkURL";
import { db } from "../auth/firebase";

export const newPost = (data, uid, reset) => {
  // urlからコンテスト情報を取得
  const urlInfo = CheckURL(data.url);
  // userのuidを取得
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
          let count = { circle: 0, triangle: 0, cross: 0 };
          count[data.verdici] = 1;
          // 既存のデータベースに同じ問題がない場合
          setDoc(docRef, {
            uid: uid,
            url: data.url,
            contestAlphabet: urlInfo.contestAlphabet,
            contestNumber: urlInfo.contestNumber,
            taskAlphabet: urlInfo.taskAlphabet,
            verdici: data.verdici,
            count: count,
            code: data.code,
            language: data.language,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          }).then(() => {
            reset();
            alert("Successfully saved!");
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
