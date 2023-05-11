package com.mary.mamani.taskmaintainer.controllers;

import com.mary.mamani.taskmaintainer.dtos.TaskDto;
import com.mary.mamani.taskmaintainer.models.Task;
import com.mary.mamani.taskmaintainer.services.TaskService;
import com.mary.mamani.taskmaintainer.utils.constants.Endpoints;
import com.mary.mamani.taskmaintainer.utils.constants.Paths;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping(Endpoints.TASK_ENDPOINT)
public class TaskController {

  private final TaskService taskService;

  @PostMapping
  public ResponseEntity<Task> createTask(@Valid @RequestBody TaskDto taskDto) {
    return ResponseEntity.ok(taskService.createTask(taskDto));
  }

  @GetMapping
  public ResponseEntity<List<Task>> getAllTasks() {
    return ResponseEntity.ok(taskService.getAllTasks());
  }

  @GetMapping(Paths.Task.TASK_ID)
  public ResponseEntity<Task> getTaskById(@PathVariable Long taskId) {
    return ResponseEntity.ok(taskService.getTaskById(taskId));
  }

  @DeleteMapping(Paths.Task.TASK_ID)
  public ResponseEntity<Void> deleteTaskById(@PathVariable Long taskId) {
    taskService.deleteTaskById(taskId);
    return ResponseEntity.ok().build();
  }

  @PutMapping(Paths.Task.TASK_ID)
  public ResponseEntity<Task> updateTask(@PathVariable Long taskId, @Valid @RequestBody TaskDto taskDto) {
    Task taskUpdated = taskService.updateTask(taskId, taskDto);
    return ResponseEntity.ok(taskUpdated);
  }

}
