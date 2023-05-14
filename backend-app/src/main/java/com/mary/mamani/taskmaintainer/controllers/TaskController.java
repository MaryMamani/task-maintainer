package com.mary.mamani.taskmaintainer.controllers;

import com.mary.mamani.taskmaintainer.dtos.TaskDto;
import com.mary.mamani.taskmaintainer.models.Task;
import com.mary.mamani.taskmaintainer.services.TaskService;
import com.mary.mamani.taskmaintainer.utils.constants.Endpoints;
import com.mary.mamani.taskmaintainer.utils.constants.Paths;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping(Endpoints.TASK_ENDPOINT)
public class TaskController {

  private final TaskService taskService;

  @PostMapping
  @Operation(summary = "Create task")
  @ApiResponse(responseCode = "200", description = "Tasks created")
  public ResponseEntity<Task> createTask(@Valid @RequestBody TaskDto taskDto) {
    return ResponseEntity.ok(taskService.createTask(taskDto));
  }

  @GetMapping
  @Operation(summary = "Get all tasks")
  @ApiResponse(responseCode = "200", description = "Tasks found")
  public ResponseEntity<List<Task>> getAllTasks() {
    return ResponseEntity.ok(taskService.getAllTasks());
  }

  @GetMapping(Paths.Task.TASK_ID)
  @Operation(summary = "Get task by id")
  @ApiResponse(responseCode = "200", description = "Tasks found")
  public ResponseEntity<Task> getTaskById(
      @Parameter(description = "Task ID to find") @PathVariable Long taskId) {
    return ResponseEntity.ok(taskService.getTaskById(taskId));
  }

  @DeleteMapping(Paths.Task.TASK_ID)
  @Operation(summary = "Delete task by id")
  @ApiResponse(responseCode = "200", description = "Task deleted")
  public ResponseEntity<Void> deleteTaskById(
      @Parameter(description = "Task ID to delete") @PathVariable Long taskId) {
    taskService.deleteTaskById(taskId);
    return ResponseEntity.ok().build();
  }

  @PutMapping(Paths.Task.TASK_ID)
  @Operation(summary = "Update task by id")
  @ApiResponse(responseCode = "200", description = "Task updated")
  public ResponseEntity<Task> updateTask(
      @Parameter(description = "Task ID to update", required = true) @PathVariable Long taskId,
      @Valid @RequestBody TaskDto taskDto) {
    Task taskUpdated = taskService.updateTask(taskId, taskDto);
    return ResponseEntity.ok(taskUpdated);
  }

}
