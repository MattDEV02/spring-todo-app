package com.todo_app;

import com.todo_app.mvc.controller.service.TodoService;
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import org.springframework.beans.factory.annotation.Autowired;
import com.fasterxml.jackson.databind.JsonNode;
import java.util.Date;
import com.todo_app.utils.index;


@SpringBootTest
public class TodoAppApplicationTests {

   @Autowired
   private TodoService todoService;

   @Test
   public void jsonParserTest() {
      final String key = "nome";
      final String value = "Matteo";
      final String json = String.format(
              "{\"%s\": \"%s\"}",
              key,
              value
      );
      final JsonNode node = index.jsonParser(json);
      final String result = node.path(key).asText();
      System.out.println("\njsonParserTest result: " + result + ".");
      assertThat(result)
              .isNotNull()
              .isInstanceOf(String.class)
              .isEqualTo(value);
   }

   @Test
   public void dateCastingTest() {
      final String date = "2021-03-31 17:10:56";
      final Date result = index.dateCasting(date);
      System.out.println("\ndateCastingTest result: " + result + ".");
      assertThat(result)
              .isNotNull()
              .isInstanceOf(Date.class)
              .hasYear(2021)
              .hasMonth(3)
              .hasDayOfMonth(31)
              .hasHourOfDay(17)
              .hasMinute(10)
              .hasSecond(56);
   }

   @Test
   public void todosCountTest() {
      final long result = this.todoService.count();
      System.out.println("\ntodosCountTest result: " + result + ".");
      assertThat(result)
              .isNotNull()
              .isInstanceOf(Long.class)
              .isGreaterThan(0);
   }
}
