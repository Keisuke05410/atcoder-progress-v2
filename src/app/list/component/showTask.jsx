import React, { useEffect, useState } from "react";
import { deletePost } from "../../../../lib/deletePost";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../lib/firebase";
import { showSymbol } from "../utils/showSymbol";

const ShowTask = (props) => {
  const { id, uid } = props;
  const [docSnap, setDocSnap] = useState(null);
  useEffect(() => {
    const docRef = doc(db, "tasks", id + uid);
    console.log(docRef);
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
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {docSnap ? (
              <>
                {docSnap.contestAlphabet}-{docSnap.contestNumber}-
                {docSnap.taskAlphabet}
                <br className="hidden lg:inline-block" />
                {showSymbol(docSnap.verdici)}
              </>
            ) : (
              <div>loading...</div>
            )}
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => deletePost(id)}
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Delete
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">IMAGE</div>
      </div>
    </section>
  );
};

export default ShowTask;
