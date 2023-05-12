import React, { useState } from "react";
import { Close, Delete, Edit } from "@mui/icons-material";
import {
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import {
  ActionIconStyle,
  CloseIconStyle,
  DateStyle,
  TextDescriptionStyle,
  TextInForceStyle,
  TimeStyle,
  TitleStyle,
} from "./style";
import EditTaskModal from "../EditTaskModal";

interface TaskCardProps {
  title: string;
  date: Date;
  time: Date;
  description: string;
  isCompleted: boolean;
  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  date,
  time,
  description,
  isCompleted,
  onToggle,
  onEdit,
  onDelete,
}) => {
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
          <Typography sx={DateStyle}>{date.toDateString()}</Typography>
          <Typography sx={TitleStyle}>{title}</Typography>
          <Typography sx={TimeStyle}>{date.toLocaleTimeString()}</Typography>
        </CardContent>
      </Card>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle sx={TitleStyle}>{title}</DialogTitle>
        <DialogContent dividers>
          <Typography sx={DateStyle}>{date.toDateString()}</Typography>
          <Typography sx={TextDescriptionStyle}>{description}</Typography>
          <Typography sx={TextInForceStyle}>Vigente</Typography>
        </DialogContent>
        <DialogActions>
          <Delete onClick={onDelete} sx={ActionIconStyle} />
          <Edit onClick={handleEdit} sx={ActionIconStyle} />
        </DialogActions>
      </Dialog>
      <EditTaskModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        onSave={(editedTitle, editedDescription) => {}}
        title={"sdsdfds"}
        description={"dsfd"}
      />
    </>
  );
};

export default TaskCard;
