package com.todo_app.error.exception;

import org.slf4j.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;
import java.util.Date;
import com.todo_app.error.ErrorData;


@ControllerAdvice
public class ExceptionController {

   private final Logger log = LoggerFactory.getLogger(ExceptionController.class);

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
