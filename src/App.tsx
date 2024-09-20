import { CircularProgressbarComponent } from "./components/CircularProgressbarComponent.tsx";
import { Form } from "./components/Form.tsx";
import { ITask, Task } from "./components/Task.tsx";
import { useTheme } from "./hooks/use-theme.tsx";
import { getLocalStorage } from "./lib/get-local-storage.ts";
import { useEffect, useState } from "react";
import React from "react";

import "./App.css";

export default function App() {
	const [tasks, setTasks] = useState(getLocalStorage());
	const { theme, setTheme } = useTheme();

	const handleThemeClick = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	const doneTasks = tasks.filter((tasks: ITask) => tasks.status === false);

	return (
		<div className="wrapper">
			<div className="content">
				<div className="theme-toggle__groups">
					<button className="theme-toggle" onClick={handleThemeClick}>
						{theme === "light" ? "☀️" : "🌔"}
					</button>
				</div>
				<h1>Список дел на React ✍️</h1>
				<div className="wrapper__info">
					{/* <div className="info">
						<p>Всего: {tasks.length}</p>
						<p>Выполнено: {doneTasks.length}</p>
					</div> */}
					<div className="wrapper__progressbar">
						<CircularProgressbarComponent tasks={tasks} doneTasks={doneTasks} />
					</div>
				</div>
				<main>
					<Form setTasks={setTasks} tasks={tasks} />
				</main>

				<Task tasks={tasks} setTasks={setTasks} />
				<div className="guide">
					<h2>
						✏️Для добавления задачи - напиши что-нибудь в поле ввода и нажми на
						кнопку Добавить или Enter на клавиатуре. <br />
						✔️Чтобы обозначить задачу как выполненную - просто нажми на нее
						<br />
						💾Задачи сохраняются автоматически.
					</h2>
				</div>
			</div>
		</div>
	);
}
