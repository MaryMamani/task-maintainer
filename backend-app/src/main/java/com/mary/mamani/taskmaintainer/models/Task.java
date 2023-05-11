package com.mary.mamani.taskmaintainer.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.mary.mamani.taskmaintainer.utils.constants.TableConstants.TaskTable;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Generated;
import org.hibernate.annotations.GenerationTime;

@Entity
@Getter
@Setter
@Table(name = TaskTable.TABLE_NAME)
public class Task {

  @Id
  @GeneratedValue(strategy= GenerationType.IDENTITY)
  @Column(name = TaskTable.ID)
  private Long id;

  @Column(name = TaskTable.TITLE)
  private String title;

  @Column(name = TaskTable.DESCRIPTION)
  private String description;

  @Generated(value = GenerationTime.ALWAYS)
  @JsonFormat(pattern="yyyy-MM-dd HH:mm")
  @Column(name = TaskTable.CREATED_AT, insertable = false, updatable = false)
  private LocalDateTime createdAt;

  @Column(name = TaskTable.IN_FORCE)
  private Boolean inForce;

}
