package com.todo_app.error.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


@ResponseStatus(value = HttpStatus.NOT_FOUND) // 404
public class TodoNotFoundException extends RuntimeException{
   public TodoNotFoundException(final String message) {
      super(message);
   }
}