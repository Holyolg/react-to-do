import {
	CircularProgressbarWithChildren,
	buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ITask } from "./Task";
import React from "react";

export function CircularProgressbarComponent({
	tasks,
	doneTasks,
}: {
	tasks: ITask[];
	doneTasks: ITask[];
}) {
	return (
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
	);
}
