import React, { useState } from "react";
import {
  CircularProgressbarComponent,
  Filters,
  Form,
  Guide,
  Tasks,
  ThemeToggle,
} from "./components/index.ts";
import { useTasks } from "./hooks/useTasks.ts";
import "./App.css";

export default function App() {
  const { tasks, setTasks, filterTasks } = useTasks();
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredTasks = filterTasks(filter, search);

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
