import { MyTask } from "../components/Tasks.tsx";

export const getLocalStorage = (): MyTask[] => {
  const taskLS = localStorage.getItem("tasks");
  if (taskLS !== null) {
    return JSON.parse(taskLS) as MyTask[];
  } else {
    return [];
  }
};
