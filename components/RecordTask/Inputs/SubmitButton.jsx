import React from "react";

const SubmitButton = () => {
  return (
    <div className="flex w-full justify-center items-end">
      <button className="text-white bg-primary-sky hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
        Submit
      </button>
    </div>
  );
};

export default SubmitButton;
