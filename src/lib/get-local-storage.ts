import { ITask } from "../components/Task";

export const getLocalStorage = (): ITask[] => {
	const taskLS = localStorage.getItem("tasks");
	if (taskLS !== null) {
		return JSON.parse(taskLS) as ITask[];
	} else {
		return [];
	}
};
