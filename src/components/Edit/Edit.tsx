import React from "react";
import { EditInput } from "./EditInput";

const Edit = (props: { setIsOpen: any; docSnap: any }) => {
  const { setIsOpen, docSnap } = props;
  return (
    <div className="fixed inset-0 w-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded w-3/4">
        <EditInput docSnap={docSnap} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default Edit;
