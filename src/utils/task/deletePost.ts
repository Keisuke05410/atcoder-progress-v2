import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../auth/firebase";

export const deletePost = (id: string) => {
  deleteDoc(doc(db, "tasks", id))
    .then(() => {
      alert("Successfully deleted!");
    })
    .catch((error: Error) => {
      console.error("Error removing document: ", error);
    });
};
