import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { TaskRequest } from "../../models/task";
import {
  useCreateTaskMutation,
  useGetTasksQuery,
} from "../../services/taskApi";
import { FieldTitleStyle, FieldDescriptionStyle } from "../EditTaskModal/style";

interface CreateTaskModalProps {
  open: boolean;
  onClose: () => void;
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({ open, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createTask] = useCreateTaskMutation();
  const { refetch } = useGetTasksQuery();

  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const validate = () => {
    let valid = true;
    if (!title) {
      setTitleError("El título no puede estar vacío");
      valid = false;
    } else if (title.length > 80) {
      setTitleError("El título no puede tener más de 80 caracteres");
      valid = false;
    } else {
      setTitleError("");
    }
    if (!description) {
      setDescriptionError("La descripción no puede estar vacía");
      valid = false;
    } else {
      setDescriptionError("");
    }
    return valid;
  };

  const handleSave = async () => {
    const taskToSave: TaskRequest = {
      title: title,
      description: description,
      inForce: true,
    };

    if (validate()) {
      await createTask(taskToSave);
      refetch();
      setTitle("");
      setDescription("");
      onClose();
    }
  };

  const handleClose = () => {
    setTitle("");
    setDescription("");
    setTitleError("");
    setDescriptionError("");
    onClose();
  };

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogTitle color={"primary"}>Nueva tarea</DialogTitle>
      <DialogContent dividers>
        <TextField
          label="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          sx={FieldTitleStyle}
          error={Boolean(titleError)}
          helperText={titleError}
        />
        <TextField
          label="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          multiline
          sx={FieldDescriptionStyle}
          error={Boolean(descriptionError)}
          helperText={descriptionError}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleSave}>Guardar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateTaskModal;
