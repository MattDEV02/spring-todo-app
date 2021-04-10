package com.todo_app.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import java.util.List;
import com.todo_app.utils.index;


@EnableWebSecurity
@Configuration
class HttpServerSecurity extends WebSecurityConfigurerAdapter {

   @Override
   protected void configure(HttpSecurity http) {
      try {
         http
                 .authorizeRequests()
                 .anyRequest().authenticated().and()
                 .httpBasic().and()
                 .csrf().disable()
                 .cors();

                ;
      }
      catch(final Exception e) {
         index.handleException(e);
      }
   }

   @Bean
   CorsConfigurationSource corsConfigurationSource() {
      CorsConfiguration configuration = new CorsConfiguration();
      configuration.setAllowedOrigins(List.of(
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
   public void configure(AuthenticationManagerBuilder auth) {
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