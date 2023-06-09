export interface Task {
  id: number;
  title: string;
  date: Date;
  time: Date;
  description: string;
  inForce: boolean;
}

export interface TaskRequest {
  title: string;
  description: string;
  inForce: boolean;
}

export interface TaskResponse {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  inForce: boolean;
}

export interface TaskUpdate {
  id: number;
  data: TaskRequest;
}
