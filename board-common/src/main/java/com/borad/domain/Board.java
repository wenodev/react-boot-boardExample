package com.borad.domain;

import com.borad.config.BaseEntity;
import lombok.Data;

import javax.persistence.*;


@Data
@Entity
public class Board extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String title;

    @Column
    private String content;

}
