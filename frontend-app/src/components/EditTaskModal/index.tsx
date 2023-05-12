import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { FieldDescriptionStyle, FieldTitleStyle } from "./style";

interface EditTaskModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (title: string, description: string) => void;
  title: string;
  description: string;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({
  open,
  onClose,
  onSave,
  title,
  description,
}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleSave = () => {
    onSave(newTitle, newDescription);
    onClose();
  };

  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <DialogTitle color={"primary"}>Editar tarea</DialogTitle>
      <DialogContent dividers>
        <TextField
          label="Título"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          fullWidth
          sx={FieldTitleStyle}
        />
        <TextField
          label="Descripción"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
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

export default EditTaskModal;
