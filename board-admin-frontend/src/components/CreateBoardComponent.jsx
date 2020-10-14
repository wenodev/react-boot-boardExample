import React, { Component } from 'react'
import BoardService from '../services/BoardService';

class CreateBoardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            title: '',
            content: ''
        }

        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeContentHandler = this.changeContentHandler.bind(this);
        this.saveOrUpdateBoard = this.saveOrUpdateBoard.bind(this);

    }

    // step 3
    componentDidMount() {

        // step 4
        if (this.state.id === '_add') {
            return
        } else {
            BoardService.getBoardById(this.state.id).then((res) => {
                let board = res.data;
                this.setState({
                    title: board.title,
                    content: board.content
                });
            });
        }
    }

    saveOrUpdateBoard = (e) => {
        e.preventDefault();
        let board = { title: this.state.title, content: this.state.content };
        console.log('board => ' + JSON.stringify(board));

        // step 5
        if (this.state.id === '_add') {
            BoardService.createBoard(board).then(res => {
                this.props.history.push('/boards');
            });
        } else {
            BoardService.updateBoard(board, this.state.id).then(res => {
                this.props.history.push('/boards');
            });
        }
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

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Board</h3>
        } else {
            return <h3 className="text-center">Update Board</h3>
        }
    }


    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
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

                                    <button className="btn btn-success" onClick={this.saveOrUpdateBoard}>Save</button>
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

export default CreateBoardComponent