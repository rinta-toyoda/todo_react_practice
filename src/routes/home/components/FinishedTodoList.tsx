import { useAtom, useSetAtom } from "jotai";
import { finishedTodoAtom, removeTodoAtom } from "../atoms";
import { FinishedTodo } from "./FinsihedTodo";

export const FinishedTodoList = () => {
  const [todos] = useAtom(finishedTodoAtom);
  const removeTodo = useSetAtom(removeTodoAtom);

  return (
    <div className="flex flex-col items-center w-[400px]">
      <h1 className="text-2xl font-bold mb-4">Finished Todos</h1>
      {todos.map(
        (todo) =>
          todo.isDone && (
            <FinishedTodo
              key={todo.id}
              title={todo.text}
              onDelete={() => {
                removeTodo(todo.id);
              }}
            />
          ),
      )}
    </div>
  );
};
