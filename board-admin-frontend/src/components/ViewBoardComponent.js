import React, { Component } from 'react'
import BoardService from '../services/BoardService'

class ViewBoardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            boards: {}
        }
    }

    componentDidMount() {
        BoardService.getBoardById(this.state.id).then(res => {
            this.setState({ boards: res.data });
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Board Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> 제목 : </label>
                            <div> {this.state.boards.title}</div>
                        </div>
                        <div className="row">
                            <label> 내용 : </label>
                            <div> {this.state.boards.content}</div>
                        </div>
                        <div className="row">
                            <label> 작성일 : </label>
                            <div> {this.state.boards.createdDate}</div>
                        </div>
                        <div className="row">
                            <label> 수정일 : </label>
                            <div> {this.state.boards.modifiedDate}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewBoardComponent