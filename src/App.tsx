import React, { useEffect, useState } from "react";
import {
  CircularProgressbarComponent,
  Filters,
  Form,
  Guide,
  Tasks,
  ThemeToggle,
} from "./components/index.ts";
import { MyTask } from "./components/Tasks.tsx";
import { getLocalStorage } from "./lib/get-local-storage.ts";

import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState(getLocalStorage());
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredTasks = tasks.filter((task: MyTask) => {
    if (filter === "completed") return task.status === "completed";
    if (filter === "active") return task.status === "active";

    if (search && !task.title.toLowerCase().includes(search.toLowerCase())) {
      if (filter === "completed") return task.status === "completed";
      if (filter === "active") return task.status === "active";
      return false;
    }

    return true;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <main className="wrapper">
      <ThemeToggle />
      <h1>Список дел на React ✍️</h1>
      <div className="wrapper__info">
        <CircularProgressbarComponent tasks={tasks} />
      </div>
      <Form setTasks={setTasks} tasks={tasks} />
      <Filters setFilter={setFilter} setSearch={setSearch} />
      <Tasks tasks={filteredTasks} setTasks={setTasks} />
      <Guide />
    </main>
  );
}
