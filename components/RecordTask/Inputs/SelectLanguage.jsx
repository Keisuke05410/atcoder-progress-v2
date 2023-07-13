import React from "react";

const SelectLanguage = () => {
  return (
    <>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2.5"
        required
      >
        <option selected>Choose Language</option>
        <option value="python">python</option>
        <option value="JavaScript">JavaScript</option>
        <option value="C++">C++</option>
      </select>
    </>
  );
};

export default SelectLanguage;
