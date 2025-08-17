import { Todo } from "./Todo";
import { useAtom, useSetAtom } from "jotai";
import { activeTodoAtom, finishTodoAtom, removeTodoAtom } from "../atoms";

export const TodoList = () => {
  const [todos] = useAtom(activeTodoAtom);
  const removeTodo = useSetAtom(removeTodoAtom);
  const finishTodo = useSetAtom(finishTodoAtom);

  return (
    <div className="flex flex-col items-center w-[400px]">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      {todos.map(
        (todo) =>
          !todo.isDone && (
            <Todo
              key={todo.id}
              title={todo.text}
              onDone={() => {
                finishTodo(todo.id);
              }}
              onDelete={() => {
                removeTodo(todo.id);
              }}
            />
          ),
      )}
    </div>
  );
};
