package com.mary.mamani.taskmaintainer.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TaskDto {

  @NotBlank
  @Size(max = 80)
  private String title;

  @NotBlank
  private String description;

  private Boolean inForce;
}
