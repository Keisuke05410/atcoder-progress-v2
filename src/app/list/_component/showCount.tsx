import React from "react";
import { BiCircle } from "react-icons/bi";
import { BsTriangle } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const ShowCount = (count: {
  [x: string]:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode;
}) => {
  return (
    <div className="flex items-center space-x-3 mb-2">
      <div className="flex items-center">
        <BiCircle className="text-blue-500" />
        <p>&nbsp;:&nbsp;</p>
        {count ? <p>{count["circle"]}</p> : <>loading</>}
      </div>
      <div className="flex items-center">
        <BsTriangle className="text-yellow-500" />
        <p>&nbsp;:&nbsp;</p>
        {count ? <p>{count["triangle"]}</p> : <>loading</>}
      </div>
      <div className="flex items-center">
        <RxCross1 className="text-red-500" />
        <p>&nbsp;:&nbsp;</p>
        {count ? <p>{count["cross"]}</p> : <>loading</>}
      </div>
    </div>
  );
};

export default ShowCount;
