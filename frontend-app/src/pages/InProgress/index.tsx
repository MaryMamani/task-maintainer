import React, { useState } from "react"
import { Typography } from "@mui/material"
import TaskBoard from "../../containers/DashboardContainer/components/TaskBoard";
import { tasksMocked } from "../../utilities/mocks/taskMocks";

const InProgress = () => {
  const [tasks, setTasks] = useState(tasksMocked)

  //Aqui llamar al store de redux

  const handleDelete = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <TaskBoard tasks={tasks} onDelete={handleDelete} />
    </div>
  );
};
  
  export default InProgress