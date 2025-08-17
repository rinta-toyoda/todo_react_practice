import { addTodoAtom } from "../atoms";
import { useSetAtom } from "jotai";
import { FormEvent, useState } from "react";

export const AddTodoBar = () => {
  const [text, setText] = useState("");
  const addTodo = useSetAtom(addTodoAtom);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    addTodo({
      id: crypto.randomUUID(),
      text: text.trim(),
      isDone: false,
    });

    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex dark:border-white border-black border-2 rounded-2xl p-2 w-[90%] justify-between"
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="w-[86%] p-3 bg-[#FDF8F6] dark:bg-[#121212] dark:text-white text-black"
        maxLength={20}
      />
      <button
        type="submit"
        className="pr-2 transition-transform transform hover:scale-110 hover:text-green-500"
      >
        Add
      </button>
    </form>
  );
};
