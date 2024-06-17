import { v4 as uuidv4 } from "uuid";

interface ITask {
	id: number;
	title: string;
	status: boolean;
}

export const Task = ({
	tasks,
	setTasks,
}: {
	tasks: [];
	setTasks: Function;
}) => {
	function remove(id: number) {
		let newTasks = [...tasks].filter((item: ITask) => item.id !== id);
		setTasks(newTasks);
	}
	function status(id: number) {
		let newTasks = [...tasks].filter((item: ITask) => {
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
				{tasks.map((task: ITask) => (
					<div className="task" key={uuidv4()}>
						<div
							className={task.status ? "text" : "text done"}
							onClick={() => status(task.id)}
						>
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
