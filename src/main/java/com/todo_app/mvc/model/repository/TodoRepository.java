package com.todo_app.mvc.model.repository;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.*;
import com.todo_app.mvc.model.Todo;


@Repository
public interface TodoRepository extends CrudRepository<Todo, Integer> {
   Iterable<Todo> findAll(final Sort scadenza);
   @Query(
           "SELECT DATE(created_at) AS DataInserimento, COUNT(id) AS TodoInseriti " +
                   "FROM Todo " +
                   "GROUP BY DataInserimento"
   )
   Iterable<Map<Date, Integer>>findCalculations();
}