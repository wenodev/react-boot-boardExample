import axios from 'axios';

const BOARD_API_BASE_URL = "http://localhost:8080/api/v1/boards";

class BoardService {

    getBoards() {
        console.log(axios.get(BOARD_API_BASE_URL));
        return axios.get(BOARD_API_BASE_URL);
    }

    getBoardById(boardId) {

        return axios.get(BOARD_API_BASE_URL + '/' + boardId);
    }

    createBoard(board) {
        return axios.post(BOARD_API_BASE_URL, board);
    }

    updateBoard(board, boardId) {
        return axios.put(BOARD_API_BASE_URL + '/' + boardId, board);
    }

    deleteBoard(boardId) {
        return axios.delete(BOARD_API_BASE_URL + '/' + boardId);
    }
}

export default new BoardService()