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

interface TaskCardProps {
  task: TaskResponse;
  onDelete: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onDelete }) => {
  const { id, title, description, createdAt, inForce } = task;
  const [dateString, timeString] = createdAt.split(' ');
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
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
          {inForce ? <Typography sx={TextInForceStyle}>Vigente</Typography> : null}
        </DialogContent>
        <DialogActions>
          <Delete onClick={onDelete} sx={ActionIconStyle} />
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
