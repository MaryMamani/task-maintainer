import React, { useState } from "react"
import { Typography } from "@mui/material"
import TaskBoard from "../../containers/DashboardContainer/components/TaskBoard";
import { tasksMocked } from "../../utilities/mocks/taskMocks";

const InProgress = () => {
  const [tasks, setTasks] = useState(tasksMocked)

  const handleToggle = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, valid: !task.isCompleted } : task
      )
    );
  };

  const handleDelete = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <TaskBoard tasks={tasks} onToggle={handleToggle} onEdit={handleDelete} />
    </div>
  );
};
  
  export default InProgress