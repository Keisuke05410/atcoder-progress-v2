import React from "react";
import { VerdiciInput } from "./VerdiciInput";
import { URLInput } from "../Inputs/URLInput";
import { CodeInput } from "../Inputs/CodeInput";
import SelectLanguage from "../Inputs/SelectLanguage";
import { useForm } from "react-hook-form";
import { updatePost } from "../../utils/task/updatePost";
import URLInfoInput from "../Inputs/URLInfoInput";
import CountInput from "../Inputs/CountInput";

import { useRouter } from "next/navigation";

export const EditInput = (props) => {
  const { docSnap, setIsOpen } = props;
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm({ defaultValues: docSnap });
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div onClick={handleModalClick}>
      <form
        onSubmit={handleSubmit((data) => {
          updatePost(data, reset);
          setIsOpen(false);
          router.push("/list");
        })}
      >
        <URLInput register={register} />
        <div className="flex flex-wrap w-full justify-center">
          <div className="flex relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
            <VerdiciInput register={register} />
            <SelectLanguage register={register} />
          </div>
        </div>
        <URLInfoInput register={register} />
        <CountInput register={register} />
        <CodeInput register={register} />
        <div className="flex">
          <div className="flex w-full justify-center items-end">
            <button className="text-white bg-primary-sky hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
              Submit
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
