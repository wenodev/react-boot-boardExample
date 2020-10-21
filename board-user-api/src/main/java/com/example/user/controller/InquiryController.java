package com.example.user.controller;

import com.example.board.Inquiry;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/v1/api")
public class InquiryController {

    @GetMapping("/inquiries")
    public ResponseEntity<List<Inquiry>> getAllInquiry(){


    }



}
