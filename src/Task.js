import React from "react";
import { v4 as uuidv4 } from "uuid";

export const Task = ({ tasks, setTasks }) => {
  function remove(id) {
    let newTasks = [...tasks].filter((item) => item.id !== id);
    setTasks(newTasks);
  }
  function status(id) {
    let newTasks = [...tasks].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTasks(newTasks);
  }

  return (
    <div className="wrapper-tasks">
      <div className="tasks">
        {tasks.map((task) => (
          <div className="task" key={uuidv4()}>
            <div
              className={task.status ? "text" : "text done"}
              onClick={() => status(task.id)}>
              {task.title}
            </div>

            <button onClick={() => remove(task.id)} className="btn remove">
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
