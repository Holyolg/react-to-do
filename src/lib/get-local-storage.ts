import { MyTask } from "../components/Task";

export const getLocalStorage = (): MyTask[] => {
	const taskLS = localStorage.getItem("tasks");
	if (taskLS !== null) {
		return JSON.parse(taskLS) as MyTask[];
	} else {
		return [];
	}
};
