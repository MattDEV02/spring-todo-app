package com.todo_app.error;

import org.slf4j.*;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class HttpErrorController implements ErrorController {

   private final Logger log = LoggerFactory.getLogger(HttpErrorController.class);

   @RequestMapping("/error")
   public String handleError() {
      log.error("404 ERROR NOT FOUND.");
      return "error";
   }

   @Override
   public String getErrorPath() {
      return null;
   }
}
