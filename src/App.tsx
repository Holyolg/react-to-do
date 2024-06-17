import React from "react";
import { Form } from "./Form.tsx";
import { Task } from "./Task.tsx";

const getLS = () => {
	let taskLS = localStorage.getItem("tasks");
	if (taskLS !== null) {
		return (taskLS = JSON.parse(localStorage.getItem("tasks") ?? "{}"));
	} else {
		return [];
	}
};

function App() {
	const [tasks, setTasks] = React.useState(getLS());
	console.log(tasks);
	//UseEffect для отслеживания обновления
	React.useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	return (
		<div className="wrapper">
			<div className="content">
				<h1>Список дел на React ✍️</h1>

				<header>
					<Form setTasks={setTasks} tasks={tasks} />
				</header>
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
export default App;
