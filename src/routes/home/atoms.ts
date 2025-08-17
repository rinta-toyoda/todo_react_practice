import { atom } from "jotai";
import { Todo } from "./types";
import { atomWithStorage } from "jotai/utils";

export const todoListAtom = atomWithStorage<Todo[]>("todos.v1", []);

export const activeTodoAtom = atom((get) =>
  get(todoListAtom).filter((todo) => !todo.isDone),
);

export const finishedTodoAtom = atom((get) =>
  get(todoListAtom).filter((todo) => todo.isDone),
);

export const addTodoAtom = atom(null, (get, set, newTodo: Todo) => {
  set(todoListAtom, [...get(todoListAtom), newTodo]);
});

export const removeTodoAtom = atom(null, (get, set, id: string) => {
  set(
    todoListAtom,
    get(todoListAtom).filter((todo) => todo.id !== id),
  );
});

export const finishTodoAtom = atom(null, (get, set, id: string) => {
  set(
    todoListAtom,
    get(todoListAtom).map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
    ),
  );
});
