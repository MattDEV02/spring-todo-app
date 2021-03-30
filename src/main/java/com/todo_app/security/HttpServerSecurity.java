package com.todo_app.security;

import com.todo_app.utils.index;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import com.todo_app.utils.index;


@Configuration
public class HttpServerSecurity extends WebSecurityConfigurerAdapter {
   @Override
   protected void configure(final HttpSecurity http) {
      try {
         http
                 .csrf().disable()
                 .authorizeRequests()
                 .anyRequest()
                 .authenticated()
                 .and()
                 .httpBasic();
      } catch(final Exception e) {
         index.handleException(e);
      }
   }

}
