import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { FieldTitleStyle, FieldDescriptionStyle } from "../EditTaskModal/style";

interface CreateTaskModalProps {
  open: boolean;
  onClose: () => void;
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({ open, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    //llamar al API
    setTitle("");
    setDescription("");
    onClose();
  };

  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <DialogTitle color={"primary"}>Nueva tarea</DialogTitle>
      <DialogContent dividers>
        <TextField
          label="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          sx={FieldTitleStyle}
        />
        <TextField
          label="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          multiline
          sx={FieldDescriptionStyle}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleSave}>Guardar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateTaskModal;
