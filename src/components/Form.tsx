import React, { FC } from "react";
import { Task } from "../types";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const Form: FC<Props> = ({ tasks, setTasks }) => {
  const [userValue, setUserValue] = React.useState("");

  const addTask = (title: string) => {
    if (title.trim().length > 0) {
      setTasks(prevTasks => [
        ...prevTasks,
        {
          id: crypto.randomUUID(),
          title: title.trim(),
          status: "active",
        },
      ]);
      setUserValue("");
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTask(userValue);
    }
  };

  return (
    <div className="add-input-wrapper">
      <input
        className="add-task-input"
        value={userValue}
        placeholder="напиши что-нибудь..."
        onChange={e => setUserValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="btn add" onClick={() => addTask(userValue)}>
        Добавить ✨
      </button>
    </div>
  );
};
