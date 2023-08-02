"use client";

import { collection, query, where } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../utils/auth/firebase";
import ShowList from "./_component/showList";
import { useAuthState } from "react-firebase-hooks/auth";

const Page = () => {
  const [taskList, setTaskList] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const uid = user ? user.uid : null;

  useEffect(() => {
    const q = query(collection(db, "tasks"), where("uid", "==", uid));
    const obserber = onSnapshot(q, (querySnapshot) => {
      const itemList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data({ serverTimestamps: "estimate" }),
      }));
      setTaskList(itemList);
    });
    return () => obserber();
  }, [uid]);

  console.log(taskList);

  return <ShowList taskList={taskList} />;
};

export default Page;
