import { Task } from "../../models/task";

export const tasksMocked: Array<Task> = [
    {
      id: 1,
      title: "Tarea 1",
      description: "Descripción de la tarea 1",
      isCompleted: true,
      date: new Date("2022-06-01"),
      time: new Date("10:00"),
    },
    {
      id: 2,
      title: "Tarea 2",
      description: "Descripción de la tarea 2",
      isCompleted: false,
      date: new Date("2022-06-02"),
      time: new Date("15:30"),
    },
    {
      id: 3,
      title: "Tarea 3",
      description: "Descripción de la tarea 3",
      isCompleted: true,
      date: new Date("2022-06-03"),
      time: new Date("17:45"),
    },
  ];