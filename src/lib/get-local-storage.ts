import { Task } from "../types/index.ts";

export const getLocalStorage = (): Task[] => {
  const taskLS = localStorage.getItem("tasks");
  if (taskLS !== null) {
    return JSON.parse(taskLS) as Task[];
  } else {
    return [];
  }
};
