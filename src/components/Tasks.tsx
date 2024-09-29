import { useAutoAnimate } from "@formkit/auto-animate/react";
import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";

export interface MyTask {
  id: number;
  title: string;
  status: "completed" | "active";
}

interface Props {
  tasks: MyTask[];
  setTasks: React.Dispatch<React.SetStateAction<MyTask[]>>;
}

export const Tasks: FC<Props> = ({ tasks, setTasks }) => {
  const [parent] = useAutoAnimate();

  function remove(id: number) {
    let newTasks = [...tasks].filter((item: MyTask) => item.id !== id);
    setTasks(newTasks);
  }
  function status(id: number) {
    let newTasks = [...tasks].filter((item: MyTask) => {
      if (item.id === id) {
        item.status =
          item.status === ("completed" as MyTask["status"])
            ? "active"
            : ("completed" as MyTask["status"]);
      }
      return item;
    });
    setTasks(newTasks);
  }

  return (
    <div className="wrapper-tasks">
      <div className="tasks" ref={parent}>
        {tasks.map((task: MyTask) => (
          <div className="task" key={uuidv4()}>
            <div
              className={task.status === "active" ? "text" : "text done"}
              onClick={() => status(task.id)}>
              {task.title}
            </div>

            <button onClick={() => remove(task.id)} className="btn remove">
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
