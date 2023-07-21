import { BiCircle } from "react-icons/bi";
import { BsTriangle } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

export const showSymbol = (verdici) => {
  return (
    <div className="flex items-center">
      state :&nbsp;
      {verdici === "circle" ? (
        <BiCircle className="text-blue-500" />
      ) : verdici === "triangle" ? (
        <BsTriangle className="text-yellow-500" />
      ) : verdici === "cross" ? (
        <RxCross1 className="text-red-500" />
      ) : (
        <></>
      )}
    </div>
  );
  // if (verdici === "circle") {
  //   return <BiCircle className="text-blue-500" />;
  // } else if (verdici === "triangle") {
  //   return <BsTriangle className="text-yellow-500" />;
  // } else if (verdici === "cross") {
  //   return <RxCross1 className="text-red-500" />;
  // }
};
