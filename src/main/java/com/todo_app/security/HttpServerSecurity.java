package com.todo_app.security;

import org.springframework.context.annotation.*;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.*;
import java.util.List;
import com.todo_app.utils.index;


@EnableWebSecurity
@Configuration
class HttpServerSecurity extends WebSecurityConfigurerAdapter {

   @Override
   protected void configure(final HttpSecurity http) {
      try {
         http
                 .authorizeRequests()
                 .anyRequest().authenticated().and()
                 .httpBasic().and()
                 .csrf().disable()
                 .cors();
      }
      catch(final Exception e) {
         index.handleException(e);
      }
   }

   @Bean
   CorsConfigurationSource corsConfigurationSource() {
      CorsConfiguration configuration = new CorsConfiguration();
      configuration.setAllowedOrigins(List.of(
              "http://127.0.0.1:3000",
              "http://127.0.0.1:5000",
              "http://127.0.0.1:8000",
              "http://localhost:3000",
              "http://localhost:5000",
              "http://localhost:8000"
      ));
      configuration.setAllowedMethods(List.of("*"));
      configuration.setAllowedHeaders(List.of("*"));
      configuration.setAllowCredentials(true);
      UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
      source.registerCorsConfiguration("/**", configuration);
      return source;
   }

   @Override
   public void configure(final AuthenticationManagerBuilder auth) {
      try {
         auth
                 .inMemoryAuthentication()
                 .withUser("Matteo")
                 .password(encoder().encode("Lambertucci"))
                 .roles("ADMIN");
      } catch(final Exception e) {
         index.handleException(e);
      }
   }
@Bean
   public PasswordEncoder encoder() {
      return new BCryptPasswordEncoder();
   }
}