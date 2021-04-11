package com.todo_app.mvc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import javax.servlet.http.HttpServletRequest;
import org.slf4j.*;
import org.jetbrains.annotations.NotNull;
import com.todo_app.mvc.controller.service.TodoService;
import com.todo_app.mvc.model.Todo;


@RestController
public class TodoController {
   @Autowired
   private TodoService todoService;
   private final Logger log = LoggerFactory.getLogger(TodoController.class);
   private final HttpStatus OK = HttpStatus.OK;

   @RequestMapping("/")
   public ModelAndView index(final Model model) {
      final long numTodos = this.todoService.count();
      log.info("Todos number: " + numTodos);
      model.addAttribute("numTodos", numTodos);
      return new ModelAndView("index");
   }

   @GetMapping("/select")
   public ResponseEntity<Iterable<Todo>> selectAll() {
      final Iterable<Todo> todos = this.todoService.selectAll();
      log.info("Todos selected: " + todos.toString());
      return new ResponseEntity<>(todos, this.OK);
   }

   @GetMapping("/select/{id}")
   public Todo select(@PathVariable int id) {
      final Todo todo = this.todoService.select(id);
      log.info("Todo Selected: " + todo.toString());
      return todo;
   }

   @PostMapping("/insert")
   public ResponseEntity<String> insert(@NotNull HttpServletRequest req) {
      final String json = req.getParameter("todo");
      final String res = this.todoService.insert(json);
      log.info(res);
      return new ResponseEntity<>(res, this.OK);
   }

   @PutMapping("/update")
   public ResponseEntity<String> update(@NotNull HttpServletRequest req) {
      final String json = req.getParameter("todo");
      log.info("json: " + json);
      final String res = this.todoService.update(json);
      log.info(res);
      return new ResponseEntity<>(res, this.OK);
   }

   @DeleteMapping("/delete")
   public ResponseEntity<String>  deleteAll() {
      final String res = this.todoService.deleteAll();
      log.info(res);
      return new ResponseEntity<>(res, this.OK);
   }

   @DeleteMapping("/delete/{id}")
   public ResponseEntity<String> delete(@PathVariable int id) {
      final String res = this.todoService.delete(id);
      log.info(res);
      return new ResponseEntity<>(res, this.OK);
   }
}