package com.todo_app.error;

import org.jetbrains.annotations.NotNull;
import org.slf4j.*;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;


@Controller
public class HttpErrorController implements ErrorController {

   private final Logger log = LoggerFactory.getLogger(HttpErrorController.class);

   @RequestMapping("/error")
   public String handleError(@NotNull final HttpServletRequest req, final Model model) {
      Object statusCode = req
              .getAttribute(RequestDispatcher.ERROR_STATUS_CODE)
              .toString();
      log.error("HTTP ERROR CODE = " + statusCode);
      model.addAttribute("statusCode", statusCode);
      return "error";
   }

   @Override
   public String getErrorPath() {
      return null;
   }
}
