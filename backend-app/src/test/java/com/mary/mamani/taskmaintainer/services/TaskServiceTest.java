package com.mary.mamani.taskmaintainer.services;

import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import com.mary.mamani.taskmaintainer.dtos.TaskDto;
import com.mary.mamani.taskmaintainer.dtos.mappers.TaskMapper;
import com.mary.mamani.taskmaintainer.models.Task;
import com.mary.mamani.taskmaintainer.repositories.ITaskRepository;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class TaskServiceTest {

  @Mock
  private ITaskRepository taskRepository;

  @Mock
  private TaskMapper taskMapper;

  @InjectMocks
  private TaskService taskService;

  private TaskDto taskDto;
  private Task taskMapped;
  private Task taskSaved;
  private List<Task> tasks;
  private Long taskId;

  @BeforeEach
  void setUp() {
    LocalDateTime localDateTime = LocalDateTime.of(2023, 5, 11, 10, 30);

    taskDto = new TaskDto();
    taskDto.setTitle("Test task");
    taskDto.setDescription("Test description");

    taskMapped = new Task();
    taskMapped.setTitle("Test task");
    taskMapped.setDescription("Test description");
    taskMapped.setInForce(true);

    taskSaved = new Task();
    taskSaved.setId(1L);
    taskSaved.setTitle("Test task");
    taskSaved.setDescription("Test description");
    taskSaved.setCreatedAt(localDateTime);
    taskSaved.setInForce(true);

    tasks = new ArrayList<>();
    tasks.add(taskSaved);

    taskId = 1L;
  }

  @Test
  void createTask() {
    when(taskMapper.toTask(taskDto)).thenReturn(taskMapped);
    when(taskRepository.save(taskMapped)).thenReturn(taskSaved);

    Task createdTask = taskService.createTask(taskDto);

    Assertions.assertNotNull(createdTask);
    Assertions.assertEquals(taskSaved.getTitle(), createdTask.getTitle());
    Assertions.assertEquals(taskSaved.getDescription(), createdTask.getDescription());
    Assertions.assertEquals(taskSaved.getCreatedAt(), createdTask.getCreatedAt());
    Assertions.assertTrue(createdTask.getInForce());
    verify(taskMapper, times(1)).toTask(taskDto);
    verify(taskRepository, times(1)).save(taskMapped);
  }

  @Test
  void getAllTasks() {
    when(taskRepository.findAll()).thenReturn(tasks);

    List<Task> result = taskService.getAllTasks();

    Assertions.assertEquals(tasks.size(), result.size());
    Assertions.assertEquals(tasks.get(0).getTitle(), result.get(0).getTitle());
    verify(taskRepository, times(1)).findAll();
  }

  @Test
  void getTaskById() {
    when(taskRepository.findById(taskId)).thenReturn(Optional.of(taskSaved));

    Task foundTask = taskService.getTaskById(taskId);

    verify(taskRepository, times(1)).findById(taskSaved.getId());
    Assertions.assertEquals(taskSaved, foundTask);
  }

  @Test
  void deleteTaskById() {
    doNothing().when(taskRepository).deleteById(taskId);

    taskService.deleteTaskById(taskId);

    verify(taskRepository, times(1)).deleteById(taskId);
  }

}