import React from "react";

const URLInfoInput = (props: { register: any }) => {
  const { register } = props;
  return (
    <div className="flex w-full justify-center items-center pt-5">
      <div className="flex space-x-2 relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
        <div>
          <label
            htmlFor="contestAlphabet"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Contest Alphabet
          </label>
          <input
            {...register("contestAlphabet")}
            id="contestAlphabet"
            type="text"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Contest Alphabet"
          />
        </div>
        <div>
          <label
            htmlFor="contestNumber"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Contest Number
          </label>
          <input
            {...register("contestNumber")}
            id="contestNumber"
            type="text"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Contest Number"
          />
        </div>
        <div>
          <label
            htmlFor="taskAlphabet"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Task Alphabet
          </label>
          <input
            {...register("taskAlphabet")}
            id="taskAlphabet"
            type="text"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Task Alphabet"
          />
        </div>
      </div>
    </div>
  );
};

export default URLInfoInput;
