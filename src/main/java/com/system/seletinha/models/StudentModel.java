package com.system.seletinha.models;

import jakarta.persistence.*;
import lombok.*;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "student")
public class StudentModel {

    @Id
    private int registry;

    private String name;

    private int series;

    private int team;


}
