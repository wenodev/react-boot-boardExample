import React, { Component } from 'react'
import BoardService from '../services/BoardService'

class ListBoardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            boards: []
        }
        this.addBoard = this.addBoard.bind(this);
        this.editBoard = this.editBoard.bind(this);
        this.deleteBoard = this.deleteBoard.bind(this);
    }


    componentDidMount() {
        BoardService.getBoards().then((res) => {
            this.setState({ boards: res.data });
        });
    }

    deleteBoard(id) {
        BoardService.deleteBoard(id).then(res => {
            this.setState({ boards: this.state.boards.filter(board => board.id !== id) });
        });
    }

    viewBoard(id) {
        this.props.history.push(`/view-board/${id}`);
    }

    editBoard(id) {
        this.props.history.push(`/add-board/${id}`);
    }

    addBoard() {
        this.props.history.push('/add-board/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center mt-5">게시판</h2>
                <div className="row justify-content-end">
                    <button className="btn btn-primary" onClick={this.addBoard}>등록</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered text-center">

                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>작성일</th>
                                <th>작업</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.boards.map(
                                    board =>
                                        <tr key={board.id}>
                                            <td> {board.id} </td>
                                            <td onClick={() => this.viewBoard(board.id)} > {board.title} </td>
                                            <td> {board.createdDate}</td>
                                            <td>
                                                <button onClick={() => this.editBoard(board.id)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteBoard(board.id)} className="btn btn-danger">Delete </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewBoard(board.id)} className="btn btn-info">View </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListBoardComponent