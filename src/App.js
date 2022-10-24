import React from "react";
import { Form } from "./Form";
import { Task } from "./Task";

const getLS = () => {
  let taskLS = localStorage.getItem("tasks");
  if (taskLS) {
    return (taskLS = JSON.parse(localStorage.getItem("tasks")));
  } else {
    return [];
  }
};

function App() {
  const [tasks, setTasks] = React.useState(getLS());

  //UseEffect для отслеживания обновления
  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="wrapper">
      <div className="content">
        <h1>React ToDo</h1>
        <header>
          <Form setTasks={setTasks} tasks={tasks} />
        </header>
        <Task tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}
export default App;
