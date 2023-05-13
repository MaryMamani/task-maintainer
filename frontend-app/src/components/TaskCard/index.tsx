import React, { useState } from "react";
import { Delete, Edit } from "@mui/icons-material";
import {
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import {
  ActionIconStyle,
  DateStyle,
  TextDescriptionStyle,
  TextInForceStyle,
  TimeStyle,
  TitleStyle,
} from "./style";
import EditTaskModal from "../EditTaskModal";
import { TaskResponse } from "../../models/task";
import {
  useDeleteTaskMutation,
  useGetTasksQuery,
} from "../../services/taskApi";

interface TaskCardProps {
  task: TaskResponse;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { id, title, description, createdAt, inForce } = task;
  const [dateString, timeString] = createdAt.split(" ");
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteTask] = useDeleteTaskMutation();
  const { refetch } = useGetTasksQuery();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = () => {
    setOpen(false);
    setEditOpen(true);
  };

  const handleDelete = async () => {
    await deleteTask(id);
    refetch();
    setOpen(false);
  };

  return (
    <>
      <Card onClick={handleOpen}>
        <CardContent>
          <Typography sx={DateStyle}>{dateString}</Typography>
          <Typography sx={TitleStyle}>{title}</Typography>
          <Typography sx={TimeStyle}>{timeString}</Typography>
        </CardContent>
      </Card>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle sx={TitleStyle}>{title}</DialogTitle>
        <DialogContent dividers>
          <Typography sx={DateStyle}>{dateString}</Typography>
          <Typography sx={TextDescriptionStyle}>{description}</Typography>
          {inForce ? (
            <Typography sx={TextInForceStyle}>Vigente</Typography>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Delete onClick={handleDelete} sx={ActionIconStyle} />
          <Edit onClick={handleEdit} sx={ActionIconStyle} />
        </DialogActions>
      </Dialog>
      <EditTaskModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        task={task}
      />
    </>
  );
};

export default TaskCard;
