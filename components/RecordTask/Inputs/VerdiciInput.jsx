import React, { useState } from "react";
import { BiCircle } from "react-icons/bi";
import { BsTriangle } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

export const VerdiciInput = (props) => {
  const { verdici, setVerdici } = props;
  return (
    <div className="flex flex-wrap w-full justify-center">
      <div className="flex items-center mr-4">
        <input
          type="radio"
          value="circle"
          name="colored-radio"
          onChange={(e) => setVerdici(e.target.value)}
          className="w-4 h-4"
          required
        />
        <label for="red-radio" className="ml-2"></label>
        <BiCircle className="text-blue-500 text-xl" />
      </div>
      <div className="flex items-center mr-4">
        <input
          type="radio"
          value="triangle"
          name="colored-radio"
          onChange={(e) => setVerdici(e.target.value)}
          className="w-4 h-4"
        />
        <label for="teal-radio" className="ml-2">
          <BsTriangle className="text-yellow-500 text-xl" />
        </label>
      </div>
      <div className="flex items-center mr-4">
        <input
          type="radio"
          value="cross"
          name="colored-radio"
          onChange={(e) => setVerdici(e.target.value)}
          className="w-4 h-4"
        />
        <label for="yellow-radio" className="ml-2">
          <RxCross1 className="text-red-400 text-xl" />
        </label>
      </div>
    </div>
  );
};
