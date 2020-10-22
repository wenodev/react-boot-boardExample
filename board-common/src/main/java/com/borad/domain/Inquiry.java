package com.borad.domain;

import com.borad.config.BaseEntity;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Inquiry extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String title;

    @Column
    private String content;
}
