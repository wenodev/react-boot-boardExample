package com.example.board;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
@Slf4j
public class ExceptionController {

    @ExceptionHandler
    public ResponseEntity<Object> BadRequestException(final RuntimeException e){
      log.warn("error", e);
      return ResponseEntity.badRequest().body(e.getMessage());
    };




}
