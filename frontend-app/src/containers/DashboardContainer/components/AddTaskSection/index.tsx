import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import CreateTaskModal from "../../../../components/CreateTaskModal";

const AddTaskSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Box sx={{ mr: 1 }}>
        <Button variant="contained" color="secondary" onClick={handleOpen}>
          Agregar tarea
        </Button>
      </Box>
      <CreateTaskModal open={isModalOpen} onClose={handleClose} />
    </>
  );
};

export default AddTaskSection;
