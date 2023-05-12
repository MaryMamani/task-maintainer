import React, { useState } from "react";
import TaskBoard from "../../containers/DashboardContainer/components/TaskBoard";
import { tasksMocked } from "../../utilities/mocks/taskMocks";
import { useGetTasksQuery } from "../../services/taskApi";

const InProgress = () => {
  const [tasks, setTasks] = useState(tasksMocked);
  const { data, isLoading, isError } = useGetTasksQuery();
  console.log(data)

  const handleDelete = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <TaskBoard tasks={data} onDelete={handleDelete} />
    </div>
  );
};

export default InProgress;
