import React from "react";

const SelectLanguage = (props) => {
  const { register } = props;

  return (
    <div className="w-1/2 justify-center items-center flex">
      <select
        id="countries"
        {...register("language")}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2.5"
        required
      >
        <option value="python">python</option>
        <option value="JavaScript">javascript</option>
        <option value="C++">cpp</option>
      </select>
    </div>
  );
};

export default SelectLanguage;
