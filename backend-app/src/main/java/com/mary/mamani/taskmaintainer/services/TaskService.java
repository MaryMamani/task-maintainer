package com.mary.mamani.taskmaintainer.services;

import com.mary.mamani.taskmaintainer.dtos.TaskDto;
import com.mary.mamani.taskmaintainer.dtos.mappers.TaskMapper;
import com.mary.mamani.taskmaintainer.models.Task;
import com.mary.mamani.taskmaintainer.repositories.ITaskRepository;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TaskService {

  private final ITaskRepository taskRepository;
  private final TaskMapper taskMapper;

  public Task createTask(TaskDto taskDto) {
    Task task = taskMapper.toTask(taskDto);
    task.setInForce(true);
    return taskRepository.save(task);
  }

  public List<Task> getAllTasks() {
    return taskRepository.findAll();
  }

  public Task getTaskById(Long id) {
    Optional<Task> taskToFind = taskRepository.findById(id);
    if (taskToFind.isEmpty()) {
      throw new EntityNotFoundException();
    }
    return taskToFind.get();
  }

  public void deleteTaskById(Long id) {
    taskRepository.deleteById(id);
  }

  public Task updateTask(Long taskId, TaskDto taskDto) {
    Task task = taskMapper.toTask(taskDto);
    Task taskToUpdate = getTaskById(taskId);

    taskToUpdate.setTitle(task.getTitle());
    taskToUpdate.setDescription(task.getDescription());
    taskToUpdate.setInForce(task.getInForce());
    return taskRepository.save(taskToUpdate);
  }
}
