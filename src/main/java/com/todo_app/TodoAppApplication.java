package com.todo_app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class TodoAppApplication {
   public static void main(final String[] args) {
      final Class<TodoAppApplication> className = TodoAppApplication.class;
      SpringApplication.run(className, args);
   }
}
