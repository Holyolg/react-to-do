import {
	CircularProgressbarWithChildren,
	buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { MyTask } from "./Task";
import React, { FC } from "react";

interface Props {
	tasks: MyTask[];
}

export const CircularProgressbarComponent: FC<Props> = ({ tasks }) => {
	const doneTasks = tasks.filter(
		(tasks: MyTask) => tasks.status === "сompleted"
	);

	return (
		<div className="wrapper__progressbar">
			<CircularProgressbarWithChildren
				value={doneTasks.length}
				maxValue={tasks.length}
				styles={buildStyles({
					textColor: "#bdbdbd",
					pathColor: "#9dedce",
					trailColor: "#e0e0e0",
				})}>
				<p style={{ fontSize: 16, fontWeight: 500, color: "#bdbdbd" }}>
					{doneTasks.length} из {tasks.length}
				</p>
				<p style={{ fontSize: 16, fontWeight: 500, color: "#bdbdbd" }}>
					Завершено
				</p>
			</CircularProgressbarWithChildren>
		</div>
	);
};
