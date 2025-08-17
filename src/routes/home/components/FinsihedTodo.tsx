import { IoIosTrash } from "react-icons/io";

export const FinishedTodo = ({ title, onDelete }) => {
  return (
    <div className="flex items-center justify-between h-[50px] w-[420px] border-black border-2 rounded-xl m-2 dark:border-white ">
      <h1 className="text-md font-bold pl-2 line-through">{title}</h1>
      <IoIosTrash
        onClick={onDelete}
        className="m-2 cursor-pointer transition-transform transform hover:scale-110 hover:text-red-500"
        size={25}
      />
    </div>
  );
};
