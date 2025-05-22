import { useAutoAnimate } from "@formkit/auto-animate/react";
import React, { FC } from "react";
import { Task } from "../types";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const Tasks: FC<Props> = ({ tasks, setTasks }) => {
  const [parent] = useAutoAnimate();

  const removeTask = (id: string): void => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const toggleTaskStatus = (id: string): void => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id
          ? { ...task, status: task.status === "completed" ? "active" : "completed" }
          : task
      )
    );
  };

  return (
    <div className="wrapper-tasks">
      <div className="tasks" ref={parent}>
        {tasks.map((task: Task) => (
          <div className="task" key={task.id}>
            <div
              className={task.status === "active" ? "text" : "text done"}
              onClick={() => toggleTaskStatus(task.id)}>
              {task.title}
            </div>

            <button onClick={() => removeTask(task.id)} className="btn remove">
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
