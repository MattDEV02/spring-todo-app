package com.todo_app.mvc.model.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.todo_app.mvc.model.Todo;


@Repository
public interface TodoRepository extends CrudRepository<Todo, Integer> { }