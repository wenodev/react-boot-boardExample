package com.example.board;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class BoardController {

    @Autowired
    private BoardRepository boardRepository;

    // get all employees
    @GetMapping("/employees")
    public List<Board> getAllEmployees() {
        return boardRepository.findAll();
    }

    // create employee rest api
    @PostMapping("/employees")
    public Board createEmployee(@RequestBody Board board) {
        return boardRepository.save(board);
    }

    // get employee by id rest api
    @GetMapping("/employees/{id}")
    public ResponseEntity<Board> getEmployeeById(@PathVariable Long id) {
        Board board = boardRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
        return ResponseEntity.ok(board);
    }

    // update employee rest api

    @PutMapping("/employees/{id}")
    public ResponseEntity <Board> updateEmployee(@PathVariable Long id, @RequestBody Board boardDetails) {
        Board board = boardRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));

        board.setTitle(boardDetails.getTitle());
        board.setContent(boardDetails.getContent());
        board.setDateTime(boardDetails.getDateTime());

        Board updatedBoard = boardRepository.save(board);
        return ResponseEntity.ok(updatedBoard);
    }

    // delete employee rest api
    @DeleteMapping("/employees/{id}")
    public ResponseEntity <Map< String, Boolean >> deleteEmployee(@PathVariable Long id) {
        Board board = boardRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));

        boardRepository.delete(board);
        Map < String, Boolean > response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


}
