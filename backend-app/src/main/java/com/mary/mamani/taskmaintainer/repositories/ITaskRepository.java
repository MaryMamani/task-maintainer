package com.mary.mamani.taskmaintainer.repositories;

import com.mary.mamani.taskmaintainer.models.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ITaskRepository extends JpaRepository<Task, Long> {

}
