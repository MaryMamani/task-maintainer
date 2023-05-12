import React, { useState } from "react";
import TaskBoard from "../../containers/DashboardContainer/components/TaskBoard";
import { tasksMocked } from "../../utilities/mocks/taskMocks";
import { useGetTasksQuery } from "../../services/taskApi";

const InProgress = () => {
  const [tasks, setTasks] = useState(tasksMocked);
  const { data, isLoading, isError } = useGetTasksQuery();

  return (
    <div>
      <TaskBoard tasks={data} />
    </div>
  );
};

export default InProgress;
