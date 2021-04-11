package com.todo_app.error;

import java.util.Date;


public class ErrorData {
   private Date timestamp = null;
   private String message = "";
   private String details = "";

   public ErrorData(final Date timestamp, final String message, final String details) {

      if(
              timestamp != null &&
                      message.length() >= 3 &&
                      details.length() >= 3
      ) {
         this.timestamp = timestamp;
         this.message = message;
         this.details = details;
      } else
         System.err.println("Error in ErrorData Class Constructor");
   }

   public ErrorData(ErrorData errorData) {
      if(errorData != null) {
         this.setTimestamp(errorData.timestamp);
         this.setMessage(errorData.message);
         this.setDetails(errorData.details);
      } else
         System.err.println("Error in ErrorData Class Copy Constructor");
   }

   public Date getTimestamp() {
      return this.timestamp;
   }

   public void setTimestamp(final Date timestamp) {
      this.timestamp = timestamp;
   }

   public String getMessage() {
      return this.message;
   }

   public void setMessage(final String message) {
      this.message = message;
   }

   public String getDetails() {
      return this.details;
   }

   public void setDetails(final String details) {
      this.details = details;
   }
}
