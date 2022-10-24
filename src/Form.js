import React from "react";
import { v4 as uuidv4 } from "uuid";

export const Form = ({ tasks, setTasks }) => {
  const [userValue, setUserValue] = React.useState("");

  function add() {
    if (userValue.length > 0) {
      setTasks([
        ...tasks,
        {
          id: uuidv4(),
          title: userValue,
          status: true,
        },
      ]);
      setUserValue("");
    }
  }
  function handleChange(e) {
    if (e.key === "Enter") {
      add(userValue);
    }
  }

  return (
    <div>
      <input
        className="add-task-input"
        value={userValue}
        placeholder="write..."
        onChange={(e) => setUserValue(e.target.value)}
        onKeyDown={handleChange}
      />
      <button className="btn add" onClick={add}>
        Добавить
      </button>
    </div>
  );
};
