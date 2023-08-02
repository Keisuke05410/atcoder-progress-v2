import React from "react";
import { BiCircle } from "react-icons/bi";
import { BsTriangle } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

export const VerdiciInput = (props: { register: any }) => {
  const { register } = props;
  return (
    <div className="flex flex-wrap w-1/2 justify-center">
      <div className="flex items-center mr-4">
        <input
          type="radio"
          value="circle"
          name="colored-radio"
          id="blue-radio"
          {...register("verdici")}
          className="w-6 h-6"
          required
        />
        <label htmlFor="blue-radio" className="ml-2">
          <BiCircle className="text-blue-500 text-3xl" />
        </label>
      </div>
      <div className="flex items-center mr-4">
        <input
          type="radio"
          value="triangle"
          name="colored-radio"
          id="yellow-radio"
          {...register("verdici")}
          className="w-6 h-6"
        />
        <label htmlFor="yellow-radio" className="ml-2">
          <BsTriangle className="text-yellow-500 text-3xl" />
        </label>
      </div>
      <div className="flex items-center mr-4">
        <input
          type="radio"
          value="cross"
          name="colored-radio"
          id="red-radio"
          {...register("verdici")}
          className="w-6 h-6"
        />
        <label htmlFor="red-radio" className="ml-2">
          <RxCross1 className="text-red-400 text-3xl" />
        </label>
      </div>
    </div>
  );
};
