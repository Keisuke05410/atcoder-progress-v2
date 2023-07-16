import React, { useEffect, useState } from "react";
import { deletePost } from "../../../../lib/deletePost";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../lib/firebase";
import { showSymbol } from "./showSymbol";
import ShowCount from "./showCount";
import ShowCode from "./showCode";

const ShowTask = (props) => {
  const { id, uid } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [docSnap, setDocSnap] = useState(null);
  useEffect(() => {
    const docRef = doc(db, "tasks", id + uid);
    getDoc(docRef)
      .then((docSnap) => {
        setDocSnap(docSnap.data());
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id, uid]);
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-10 py-24 md:flex-row flex-col">
        <div className="w-1/2 flex flex-col mb-16 md:mb-0 items-center text-center">
          {docSnap ? (
            <>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary-black">
                {docSnap.contestAlphabet}-{docSnap.contestNumber}-
                {docSnap.taskAlphabet}
              </h1>
              <h2 className="sm:text-2xl text-xl mb-4 font-medium">
                {showSymbol(docSnap.verdici)}
                {ShowCount(docSnap.count)}
                last_edit : {docSnap.updatedAt.toDate().toLocaleDateString()}
              </h2>
            </>
          ) : (
            <div>loading...</div>
          )}
          <div className="flex justify-center">
            <button
              onClick={() => deletePost(id)}
              className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
            >
              Delete
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          {docSnap ? (
            docSnap.code === "" ? (
              <div className="text-3xl">no code</div>
            ) : (
              <ShowCode code={docSnap.code} language={docSnap.language} />
            )
          ) : (
            <div>loading...</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShowTask;
