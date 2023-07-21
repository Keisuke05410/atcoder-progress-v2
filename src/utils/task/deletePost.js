import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../auth/firebase";

export const deletePost = (id) => {
  deleteDoc(doc(db, "tasks", id))
    .then(() => {
      alert("Successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
};
