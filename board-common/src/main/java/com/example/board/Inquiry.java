package com.example.board;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Inquiry {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String title;

    @Column
    private String content;


}
