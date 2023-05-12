import { Box } from "@mui/material";
import React from "react";
import TaskCard from "../../../../components/TaskCard";
import { Task } from "../../../../models/task";

interface TaskBoardProps {
  tasks: Task[];
  onToggle: (id: number) => void;
  onEdit: (id: number) => void;
}

const TaskBoard: React.FC<TaskBoardProps> = ({ tasks, onToggle, onEdit }) => {
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 2 }}>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          date={task.date}
          time={task.time}
          description={task.description}
          isCompleted={task.isCompleted}
          onToggle={() => onToggle(task.id)}
          onEdit={() => onEdit(task.id)}
          onDelete={() => onEdit(task.id)}
        />
      ))}
    </Box>
  );
};

export default TaskBoard;
