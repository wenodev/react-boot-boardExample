import React, { Component } from 'react'
import axios from 'axios';

const INQUIRY_API_BASE_URL = "http://localhost:8081/api/v1/inquiries";

export default class InquiryCreate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            content: ''
        }

        this.saveInquiry = this.saveInquiry.bind(this);

    }

    saveInquiry = () => {

        let inquiry = {
            title: this.state.title,
            content: this.state.content
        }

        axios.post(INQUIRY_API_BASE_URL, inquiry)
            .then(response => {
                console.log("then");
                this.props.history.push("/inquiries")
            })
            .catch(response => {
                console.log("catch");
                console.log(response);
            })
    }

    changeTitle = (event) => {
        this.setState({ title: event.target.value });
    }

    changeContent = (event) => {
        this.setState({ content: event.target.value });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h2>문의하기</h2>
                    <div><span>제목 : </span><input onChange={this.changeTitle}></input></div>
                    <div><span>내용 : </span><input onChange={this.changeContent}></input></div>
                    <button onClick={this.saveInquiry}>제출</button>
                </div>
            </div>
        )
    }

}
