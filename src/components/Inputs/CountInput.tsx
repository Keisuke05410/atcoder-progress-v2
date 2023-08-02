import React from "react";
import { BiCircle } from "react-icons/bi";
import { BsTriangle } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const CountInput = (props: { register: any }) => {
  const { register } = props;
  return (
    <div className="flex w-full justify-center items-center pt-5">
      <div className="flex space-x-2 relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-center">
        <div className="flex items-center justify-center">
          <label className="mr-1">
            <BiCircle className="text-blue-500 text-3xl" />
          </label>
          <input
            {...register("count.circle")}
            type="number"
            name="circle"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            min="0"
          />
        </div>
        <div className="flex items-center justify-center">
          <label className="mr-1">
            <BsTriangle className="text-yellow-500 text-3xl" />
          </label>
          <input
            {...register("count.triangle")}
            type="number"
            name="triangle"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            min="0"
          />
        </div>
        <div className="flex items-center justify-center">
          <label className="mr-1">
            <RxCross1 className="text-red-400 text-3xl" />
          </label>
          <input
            {...register("count.cross")}
            type="number"
            name="cross"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            min="0"
          />
        </div>
      </div>
    </div>
  );
};

export default CountInput;
