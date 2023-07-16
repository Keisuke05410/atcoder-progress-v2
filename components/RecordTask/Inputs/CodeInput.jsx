import { useState } from "react";

export const CodeInput = (props) => {
  const { register } = props;
  return (
    <>
      <div className="flex flex-wrap w-full justify-center pt-10">
        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left pb-10">
          <label
            htmlFor="code"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your code
          </label>
          <textarea
            {...register("code")}
            id="code"
            rows="10"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write your thoughts here..."
          />
        </div>
      </div>
    </>
  );
};
