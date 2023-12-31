import Link from "next/link";
import React, { useState } from "react";
import { URL_last } from "../../../utils/url/checkURL";
import { showSymbol } from "./showSymbol";
import { BsBoxArrowUpRight, BsTrash } from "react-icons/bs";
import { deletePost } from "../../../utils/task/deletePost";
import { BiPencil } from "react-icons/bi";
import Edit from "../../../components/Edit/Edit";

const ShowList = (props) => {
  const { taskList } = props;
  const [isOpen, setIsOpen] = useState(false);
  const handleOverlayClick = () => {
    setIsOpen(false);
  };
  //
  return (
    <div className="flex items-center justify-center">
      <div className="p-10">
        {taskList.map((task) => (
          <div
            key={task.id}
            className="flex justify-center items-center border-b"
          >
            <Link
              href={`/list/${URL_last(task.url)}`}
              className="flex justify-center items-center w-full cursor-pointer rounded-lg p-4 transition duration-500 text-xl hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 "
            >
              <div className="pr-5">
                {`${task.contestAlphabet}-${task.contestNumber}-${task.taskAlphabet}`}
              </div>
              <div className="pr-5">{showSymbol(task.verdici)}</div>
              {task.updatedAt.toDate().toLocaleDateString()}
            </Link>
            <button
              type="button"
              onClick={() => {
                deletePost(task.id);
              }}
              className="text-white bg-red-600 rounded-full hover:bg-red-700 focus:ring-4 focus:outline-none font-medium text-sm p-2.5 text-center inline-flex items-center ml-2"
            >
              <BsTrash className="text-white text-lg" />
            </button>
            <button
              type="button"
              onClick={() => {
                setIsOpen(true);
              }}
              className="text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:ring-4 focus:outline-none font-medium text-sm p-2.5 text-center inline-flex items-center ml-2"
            >
              <BiPencil className="text-white text-lg" />
            </button>
            <a
              href={task.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-gray-300 rounded-full hover:bg-gray-400 focus:ring-4 focus:outline-none font-medium text-sm p-2.5 text-center inline-flex items-center ml-2"
            >
              <BsBoxArrowUpRight className="text-blask text-lg" />
            </a>
            {isOpen && (
              <div onClick={handleOverlayClick}>
                <Edit setIsOpen={setIsOpen} docSnap={task} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
