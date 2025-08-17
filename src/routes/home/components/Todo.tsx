import { IoIosTrash } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

export const Todo = ({ title, onDone, onDelete }) => {
  return (
    <div className="flex items-center justify-between h-[50px] w-[420px] border-black border-2 rounded-xl m-2 dark:border-white ">
      <h1 className="text-md font-bold pl-2">{title}</h1>
      <div className="flex">
        <FaCheck
          onClick={onDone}
          className="m-2 cursor-pointer transition-transform transform hover:scale-110 hover:text-green-500"
          size={25}
        />
        <IoIosTrash
          onClick={onDelete}
          className="m-2 cursor-pointer transition-transform transform hover:scale-110 hover:text-red-500"
          size={25}
        />
      </div>
    </div>
  );
};
