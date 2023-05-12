import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { FieldDescriptionStyle, FieldTitleStyle } from "./style";
import { TaskResponse } from "../../models/task";

interface EditTaskModalProps {
  open: boolean;
  onClose: () => void;
  task: TaskResponse;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({
  open,
  onClose,
  task,
}) => {
  const { title, description, inForce } = task;
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [isInForce, setInForce] = useState<boolean>(inForce);

  const handleSave = () => {
    //Aqui mi API
    //onSave(newTitle, newDescription, isInForce);
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
        <FormControlLabel
          control={
            <Switch
              checked={isInForce}
              onChange={(e) => setInForce(e.target.checked)}
              color="primary"
            />
          }
          label="Vigente"
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
