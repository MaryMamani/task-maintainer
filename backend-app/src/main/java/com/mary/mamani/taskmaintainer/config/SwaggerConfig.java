package com.mary.mamani.taskmaintainer.config;

import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

  @Bean
  public GroupedOpenApi api() {
    return GroupedOpenApi.builder()
        .group("api")
        .packagesToScan("com.mary.mamani.taskmaintainer.controllers")
        .build();
  }

}
