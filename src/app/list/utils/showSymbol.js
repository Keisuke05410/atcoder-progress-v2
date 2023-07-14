import { BiCircle } from "react-icons/bi";
import { BsTriangle } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

export const showSymbol = (verdici) => {
  if (verdici === "circle") {
    return <BiCircle className="text-blue-500" />;
  } else if (verdici === "triangle") {
    return <BsTriangle className="text-yellow-500" />;
  } else if (verdici === "cross") {
    return <RxCross1 className="text-red-500" />;
  }
};
