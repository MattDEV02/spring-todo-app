package com.todo_app.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.*;
import java.text.*;
import java.util.Date;


public class index {

   public final static String format = "yyyy-MM-dd HH:mm:ss";

   public static void handleException(final Exception e) {
      System.err.println("Exception threw: ");
      e.printStackTrace(System.err);
   }

   public static JsonNode jsonParser(final String json) {
      JsonNode node = null;
      try {
         node = new ObjectMapper()
                 .readTree(json);
      } catch(final JsonProcessingException e) {
         handleException(e);
      }
      return node;
   }

   public static Date dateCasting(final String date) {
      Date newDate = null;
      try {
         final SimpleDateFormat formatter = new SimpleDateFormat(format);
         newDate = formatter.parse(date);
      } catch (final ParseException e) {
         handleException(e);
      }
      return newDate;
   }
}
