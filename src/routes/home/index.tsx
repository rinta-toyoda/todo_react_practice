import { TodoList } from "./components/TodoList";
import { AddTodoBar } from "./components/AddTodoBar";
import { FinishedTodoList } from "./components/FinishedTodoList";

export const HomePage = () => {
  return (
    <div className="flex flex-col font-serif items-center h-screen pt-10 bg-[#FDF8F6] dark:bg-[#121212] text-black dark:text-white">
      <h1 className="text-7xl font-bold pb-10 pt-2">Todo App</h1>
      <AddTodoBar />
      <div className="flex flex-col xl:flex-row pt-10 gap-10">
        <TodoList />
        <FinishedTodoList />
      </div>
    </div>
  );
};
