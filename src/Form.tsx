import React from "react";
import { v4 as uuidv4 } from "uuid";

export const Form = ({
	tasks,
	setTasks,
}: {
	tasks: [];
	setTasks: Function;
}) => {
	const [userValue, setUserValue] = React.useState("");

	function add(data: string) {
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
				onChange={e => setUserValue(e.target.value)}
				onKeyDown={handleChange}
			/>
			<button className="btn add" onClick={() => add(userValue)}>
				Добавить ✨
			</button>
		</div>
	);
};
