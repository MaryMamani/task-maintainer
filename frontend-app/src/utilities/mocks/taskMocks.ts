import { TaskResponse } from "../../models/task";

export const tasksMocked: Array<TaskResponse> = [
    {
      id: 1,
      title: "Tarea 1",
      description: "Descripción de la tarea 1",
      inForce: true,
      createdAt: "2022-06-02 15:30"
    },
    {
      id: 2,
      title: "Tarea 2",
      description: "Descripción de la tarea 2",
      inForce: false,
      createdAt: "2022-06-02 15:30"
    },
    {
      id: 3,
      title: "Tarea 3",
      description: "Descripción de la tarea 3",
      inForce: true,
      createdAt: "2022-06-02 15:30"
    },
  ];