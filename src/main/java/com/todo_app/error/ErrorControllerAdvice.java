package com.todo_app.error;

import com.todo_app.controller.TodoController;
import com.todo_app.error.exception.TodoNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;
import java.util.Date;


@ControllerAdvice
public class ErrorControllerAdvice {

   private final Logger log = LoggerFactory.getLogger(ErrorControllerAdvice.class);

   @ExceptionHandler(TodoNotFoundException.class)
   public ResponseEntity<ErrorData> TodoNotFoundHandler(final TodoNotFoundException e, final WebRequest req){
      final String message = e.getMessage();
      ErrorData errorData = new ErrorData(
              new Date(),
              message,
              req.getDescription(false)
      );
      log.error(message, errorData);
      return new ResponseEntity<>(errorData, HttpStatus.NOT_FOUND);
   }
}
