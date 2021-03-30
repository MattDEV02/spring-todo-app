package com.todo_app.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.todo_app.error.exception.TodoNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Date;
import com.todo_app.model.Todo;
import com.todo_app.repository.TodoRepository;
import com.todo_app.utils.index;


@Service
public class TodoService {
   @Autowired
   private TodoRepository todoRepository;
   private final String message = "Todo Id = %d NOT FOUND.";

   public boolean exists(final int id) {
      return this.todoRepository.existsById(id);
   }

   public long count() {
      return this.todoRepository.count();
   }

   public String insert(final String json) {
      final JsonNode data = index.jsonParser(json);
      final String nome = data.path("nome").asText();
      final Date scadenza = index.DateCasting(data.path("scadenza").asText());
      final Todo todo = new Todo();
      todo.setNome(nome);
      todo.setScadenza(scadenza);
      if(this.todoRepository.save(todo) == null)
         throw new TodoNotFoundException("Todo NOT FOUND");
      return String.format("Todo Id = %d Inserted.", todo.getId());
   }

   public Iterable<Todo> selectAll() {
      final Iterable<Todo> todos = this.todoRepository.findAll();
      if(todos == null)
         throw new TodoNotFoundException("Todos NOT FOUND.");
      return todos;
   }

   public Todo select(final int id) {
      return this.todoRepository
              .findById(id)
              .orElseThrow(() -> new TodoNotFoundException(
                              String.format(this.message, id)
                      )
              );
   }

   public String delete(final int id) {
      if(!this.exists(id))
         throw new TodoNotFoundException(
                 String.format(this.message, id)
         );
      this.todoRepository.deleteById(id);
      return String.format("Todo Id = %d Deleted.", id);
   }

   public String deleteAll() {
      this.todoRepository.deleteAll();
      return "All Todos Deleted.";
   }

   public String update(final String json) {
      final JsonNode data = index.jsonParser(json);
      final int id = data.path("id").asInt();
      final String nome = data.path("nome").asText();
      final Date scadenza = index.DateCasting(data.path("scadenza").asText());
      final Todo todo = this.todoRepository
              .findById(id)
              .orElseThrow(() -> new TodoNotFoundException(
                              String.format(this.message, id)
                      )
              );
      todo.setNome(nome);
      todo.setScadenza(scadenza);
      todoRepository.save(todo);
      this.todoRepository.save(todo);
      return String.format("Todo Id = %d updated.", id);
   }
}
