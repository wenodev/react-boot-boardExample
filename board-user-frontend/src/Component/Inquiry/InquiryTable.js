import React, { Component } from 'react'
import axios from 'axios';





export default class Table extends Component {

    constructor(props) {

        super(props)

        this.state = {
            inquiries: []
        }

        this.addInquiry = this.addInquiry.bind(this);

    }

    componentDidMount() {
        axios.get('http://localhost:8081/api/v1/inquiries')
            .then(response => {
                console.log(response);
                this.setState({ inquiries: response.data })
            })
            .catch(response => { console.log(response); });
    }

    addInquiry() {
        this.props.history.push('/add-inquiry')
    }



    render() {
        return (

            <div>
                <table className="container table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">제목</th>
                            <th scope="col">내용</th>
                            <th scope="col">작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.inquiries.map(
                                inquiry =>
                                    <tr key={inquiry.id}>
                                        <td>{inquiry.id}</td>
                                        <td>{inquiry.title}</td>
                                        <td>{inquiry.content}</td>
                                        <td>{inquiry.createdDate}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

                {/* <button><a href="/add-inquiry">문의하기</a></button> */}
                <button onClick={this.addInquiry}>문의하기</button>

            </div>
        )
    }
}
