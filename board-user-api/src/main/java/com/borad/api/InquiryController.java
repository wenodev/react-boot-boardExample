package com.borad.api;

import com.borad.domain.Inquiry;
import com.borad.application.InquiryService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@AllArgsConstructor
@RestController
@RequestMapping("/v1/api")
public class InquiryController {

    private InquiryService inquiryService;

    @GetMapping("/inquiries")
    public ResponseEntity<List<Inquiry>> getAllInquiry(){
        List<Inquiry> inquiryList = inquiryService.getAllInquiry();
        return new ResponseEntity<>(inquiryList, HttpStatus.OK);
    }

    @GetMapping("/inquires/{id}")
    public ResponseEntity<Inquiry> getInquiryById(@PathVariable Long id){
        Inquiry inquiry = inquiryService.getInquiryById(id);
        return new ResponseEntity<>(inquiry, HttpStatus.OK);
    }

    @PostMapping("/inquiries")
    public ResponseEntity<Inquiry> createInquires(@RequestBody Inquiry inquiryResource){
        Inquiry inquiry = inquiryService.createInquiries(inquiryResource);
        return new ResponseEntity(inquiry, HttpStatus.CREATED);
    }

    @PutMapping("/inquiries/{id}")
    public ResponseEntity<Inquiry> updateInquiries(@PathVariable Long id, @RequestBody Inquiry inquiryResource){
        Inquiry inquiry = inquiryService.updateInquires(id, inquiryResource);
        return new ResponseEntity<>(inquiry, HttpStatus.OK);
    }

    @DeleteMapping("/inquiries/{id}")
    public ResponseEntity<?> deleteInquiries(@PathVariable Long id){
        inquiryService.deleteInquiry(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
