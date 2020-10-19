package com.example.board.api;

import com.example.board.Board;
import com.example.board.BoardRepository;
import com.example.board.ResourceNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/")
public class BoardController {

    BoardRepository boardRepository;

    // get all employees
    @GetMapping("/boards")
    public ResponseEntity<List<Board>> getAllEmployees() {
        List<Board> boardList = boardRepository.findAll();
        return ResponseEntity.ok(boardList);
    }

    // create employee rest api
    @PostMapping("/boards")
    public ResponseEntity<Board> createEmployee(@RequestBody Board board) {
        Board createdBoard = boardRepository.save(board);
        return ResponseEntity.ok(createdBoard);
    }

    // get employee by id rest api
    @GetMapping("/boards/{id}")
    public ResponseEntity<Board> getEmployeeById(@PathVariable Long id) {
        Board board = boardRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));


        return ResponseEntity.ok(board);
    }

    // update employee rest api

    @PutMapping("/boards/{id}")
    public ResponseEntity <Board> updateEmployee(@PathVariable Long id, @RequestBody Board boardDetails) {
        Board board = boardRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));

        board.setTitle(boardDetails.getTitle());
        board.setContent(boardDetails.getContent());

        Board updatedBoard = boardRepository.save(board);
        return ResponseEntity.ok(updatedBoard);
    }

    // delete employee rest api
    @DeleteMapping("/boards/{id}")
    public ResponseEntity <Map< String, Boolean >> deleteEmployee(@PathVariable Long id) {
        Board board = boardRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));

        boardRepository.delete(board);
        Map < String, Boolean > response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


}
