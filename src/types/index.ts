export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}

export type TaskStatus = "completed" | "active";