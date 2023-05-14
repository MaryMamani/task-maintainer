import React from "react"
import { Typography } from "@mui/material"
import TaskBoard from "../../containers/DashboardContainer/components/TaskBoard";
import { useGetTasksQuery } from "../../services/taskApi";

const Finished = () => {
  const { data, isLoading, isError } = useGetTasksQuery();
  const finishedTasks = data?.filter(task => task.inForce === false);

  return (
    <div>
      <TaskBoard tasks={finishedTasks} />
    </div>
  )
}
  
  export default Finished