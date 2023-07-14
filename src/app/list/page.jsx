"use client";

import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../lib/firebase";
import { useAuthContext } from "../../../utils/auth/state";
import Link from "next/link";
import ShowList from "./component/ShowList";

const Page = () => {
  const [taskList, setTaskList] = useState([]);
  const { user } = useAuthContext();
  const uid = user ? user.uid : null;

  useEffect(() => {
    const q = query(collection(db, "tasks"), where("uid", "==", uid));
    getDocs(q).then((querySnapshot) => {
      const tasks = [];
      querySnapshot.forEach((doc) => {
        tasks.push({ id: doc.id, ...doc.data() });
      });
      setTaskList(tasks);
    });
  }, [uid]);

  console.log(taskList);

  return <ShowList taskList={taskList} />;
};

export default Page;
