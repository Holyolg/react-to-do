import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { MyTask } from "./Task";

interface Props {
	tasks: MyTask[];
	setTasks: React.Dispatch<React.SetStateAction<MyTask[]>>;
}

export const Form: FC<Props> = ({ tasks, setTasks }) => {
	const [userValue, setUserValue] = React.useState("");

	function add(data: string) {
		if (userValue.length > 0) {
			setTasks([
				...tasks,
				{
					id: uuidv4(),
					title: userValue,
					status: "active",
				},
			]);
			setUserValue("");
		}
	}
	function handleChange(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key === "Enter") {
			add(userValue);
		}
	}

	return (
		<div className="add-input-wrapper">
			<input
				className="add-task-input"
				value={userValue}
				placeholder="напиши что-нибудь..."
				onChange={(e) => setUserValue(e.target.value)}
				onKeyDown={handleChange}
			/>
			<button className="btn add" onClick={() => add(userValue)}>
				Добавить ✨
			</button>
		</div>
	);
};
