package com.mary.mamani.taskmaintainer.dtos.mappers;

import com.mary.mamani.taskmaintainer.dtos.TaskDto;
import com.mary.mamani.taskmaintainer.models.Task;
import org.springframework.stereotype.Component;

@Component
public class TaskMapper {

  public Task toTask(TaskDto taskDto) {
    Task task = new Task();
    task.setTitle(taskDto.getTitle());
    task.setDescription(taskDto.getDescription());
    task.setInForce(taskDto.getInForce());
    return task;
  }

}
