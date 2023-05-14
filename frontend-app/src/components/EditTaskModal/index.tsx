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
import { ButtonStyle, FieldDescriptionStyle, FieldTitleStyle } from "./style";
import { TaskRequest, TaskResponse, TaskUpdate } from "../../models/task";
import {
  useGetTasksQuery,
  useUpdateTaskMutation,
} from "../../services/taskApi";

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
  const { title, description, inForce, id } = task;
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [isInForce, setInForce] = useState<boolean>(inForce);
  const [updateTask] = useUpdateTaskMutation();
  const { refetch } = useGetTasksQuery();

  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const validate = () => {
    let valid = true;
    if (!newTitle) {
      setTitleError("El título no puede estar vacío");
      valid = false;
    } else if (newTitle.length > 80) {
      setTitleError("El título no puede tener más de 80 caracteres");
      valid = false;
    } else {
      setTitleError("");
    }
    if (!newDescription) {
      setDescriptionError("La descripción no puede estar vacía");
      valid = false;
    } else {
      setDescriptionError("");
    }
    return valid;
  };

  const handleSave = async () => {
    const newTask: TaskRequest = {
      title: newTitle,
      description: newDescription,
      inForce: isInForce,
    };
    const taskToUpdate: TaskUpdate = {
      id: task.id,
      data: newTask,
    };

    if (validate()) {
      await updateTask(taskToUpdate);
      refetch();
      onClose();
    }
  };

  const handleClose = () => {
    setNewTitle(title);
    setNewDescription(description);
    setInForce(inForce);
    setTitleError("");
    setDescriptionError("");
    onClose();
  };

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogTitle color={"primary"}>Editar tarea</DialogTitle>
      <DialogContent dividers>
        <TextField
          label="Título"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          fullWidth
          sx={FieldTitleStyle}
          error={Boolean(titleError)}
          helperText={titleError}
        />
        <TextField
          label="Descripción"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          fullWidth
          multiline
          sx={FieldDescriptionStyle}
          error={Boolean(descriptionError)}
          helperText={descriptionError}
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
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleSave} sx={ButtonStyle} >Guardar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTaskModal;
