import React from "react";
import TaskBoard from "../../containers/DashboardContainer/components/TaskBoard";
import { useGetTasksQuery } from "../../services/taskApi";

const InProgress = () => {
  const { data, isLoading, isError } = useGetTasksQuery();

  const tasksInProgress = data?.filter(task => task.inForce === true);

  return (
    <div data-testid="in-progress-component">
      <TaskBoard tasks={tasksInProgress} />
    </div>
  );
};

export default InProgress;
