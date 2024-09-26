import {
	CircularProgressbarComponent,
	Filters,
	Form,
	Guide,
	Task,
	ThemeToggle,
} from "./components/index.ts";
import { MyTask } from "./components/Task.tsx";
import { getLocalStorage } from "./lib/get-local-storage.ts";
import { useEffect, useState } from "react";
import React from "react";

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
			<Task tasks={filteredTasks} setTasks={setTasks} />
			<Guide />
		</main>
	);
}
