import { Box } from "@mui/material";
import React from "react";
import TaskCard from "../../../../components/TaskCard";
import { TaskResponse } from "../../../../models/task";

interface TaskBoardProps {
  tasks?: TaskResponse[];
  onDelete: (id: number) => void;
}

const TaskBoard: React.FC<TaskBoardProps> = ({ tasks, onDelete }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: 2,
        p: 3,
      }}
    >
      {tasks?.map((task) => (
        <TaskCard task={task} onDelete={() => onDelete(task.id)} />
      ))}
    </Box>
  );
};

export default TaskBoard;
