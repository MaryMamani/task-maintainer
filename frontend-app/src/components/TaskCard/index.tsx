import React, { useState } from "react";
import { Delete, Edit } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import {
  DateStyle,
  DeleteStyle,
  EditStyle,
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
      <Card onClick={handleOpen} data-testid="task-card-component">
        <CardContent>
          <Typography sx={DateStyle}>{dateString}</Typography>
          <Typography sx={TitleStyle}>{title}</Typography>
          <Typography sx={TimeStyle}>{timeString + " hrs"}</Typography>
        </CardContent>
      </Card>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle sx={TitleStyle}>{title}</DialogTitle>
        <DialogContent dividers>
          <Typography sx={DateStyle}>{dateString}</Typography>
          <Typography sx={TextDescriptionStyle}>{description}</Typography>
          <Typography sx={TextInForceStyle}>
            {inForce ? "Vigente" : "Finalizado"}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleDelete}
            startIcon={<Delete />}
            sx={DeleteStyle}
          >
            Borrar
          </Button>
          <Button onClick={handleEdit} sx={EditStyle} startIcon={<Edit />}>
            Editar
          </Button>
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
