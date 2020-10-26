import axios from 'axios';

const INQUIRY_API_BASE_URL = "http://localhost:8080/api/v1/inquiries";

class InquiryService {


    getInquiries() {
        return axios.get(INQUIRY_API_BASE_URL);
    }

    createInquiry(inquiry) {
        return axios.post(NQUIRY_API_BASE_URL, inquiry);
    }


}