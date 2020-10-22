package com.borad.application;

import com.borad.domain.Inquiry;
import com.borad.domain.InquiryRepository;
import com.borad.exception.ResourceNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class InquiryService {


    private InquiryRepository inquiryRepository;

    public List<Inquiry> getAllInquiry(){
        return inquiryRepository.findAll();
    }

    public Inquiry getInquiryById(Long id){
        return inquiryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Inquiry is not exit with id : " + id));
    }

    public Inquiry createInquiries(Inquiry inquiry){
        return inquiryRepository.save(inquiry);
    }

    public Inquiry updateInquires(Long id, Inquiry inquiryDetails){

        Inquiry inquiry = inquiryRepository.findById(id)
                .orElseThrow( () -> new ResourceNotFoundException("Inquiry is not exit with id : " + id));

        inquiry.setTitle(inquiryDetails.getTitle());
        inquiry.setContent(inquiryDetails.getContent());

        inquiryRepository.save(inquiry);

        return inquiry;
    }

    public void deleteInquiry(Long id){

        Inquiry inquiry = inquiryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Inquiry is not exit with id : " + id));

        inquiryRepository.delete(inquiry);

    }

}
