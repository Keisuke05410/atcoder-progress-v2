import { useState } from "react";
import { CheckURL } from "../../utils/recordtask/checkURL";

export const URLInput = (props) => {
  const { taskInfo, setTaskInfo } = props;
  const [url, setUrl] = useState("");
  const handleClick = () => {
    const res = CheckURL(url);
    setTaskInfo(res);
  };
  return (
    <div className="flex w-full justify-center items-end">
      <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
        <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600">
          Placeholder
        </label>
        <input
          type="text"
          id="hero-field"
          name="hero-field"
          onChange={(e) => setUrl(e.target.value)}
          className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <button
        onClick={handleClick}
        className="inline-flex text-white bg-primary-sky border-0 py-2 px-6 focus:outline-none hover:bg-opacity-80 rounded text-lg"
      >
        Button
      </button>
    </div>
  );
};
