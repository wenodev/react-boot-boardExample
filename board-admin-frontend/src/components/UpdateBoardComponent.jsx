import React, { Component } from 'react'
import BoardService from '../services/BoardService';

class UpdateBoardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            content: ''
        }

        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeContentHandler = this.changeContentHandler.bind(this);
        this.updateBoard = this.updateBoard.bind(this);
    }

    componentDidMount() {
        BoardService.getBoardById(this.state.id).then((res) => {
            let board = res.data;
            this.setState({
                firstName: board.firstName,
                lastName: board.lastName,
                emailId: board.emailId
            });
        });
    }

    updateBoard = (e) => {
        e.preventDefault();
        let board = { title: this.state.title, content: this.state.content };
        console.log('board => ' + JSON.stringify(board));
        console.log('id => ' + JSON.stringify(this.state.id));
        BoardService.updateBoard(board, this.state.id).then(res => {
            this.props.history.push('/boards');
        });
    }

    changeTitleHandler = (event) => {
        this.setState({ title: event.target.value });
    }

    changeContentHandler = (event) => {
        this.setState({ content: event.target.value });
    }

    cancel() {
        this.props.history.push('/boards');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Board</h3>
                            <div className="card-body">
                                <form>

                                    <div className="form-group">
                                        <label> Title: </label>
                                        <input placeholder="Title" name="title" className="form-control"
                                            value={this.state.title} onChange={this.changeTitleHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Content: </label>
                                        <input placeholder="Content" name="content" className="form-control"
                                            value={this.state.content} onChange={this.changeContentHandler} />
                                    </div>


                                    <button className="btn btn-success" onClick={this.updateBoard}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default UpdateBoardComponent