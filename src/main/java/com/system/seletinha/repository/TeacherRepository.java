package com.system.seletinha.repository;

import com.system.seletinha.models.TeachersModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TeacherRepository  extends JpaRepository<TeachersModel, Integer> {

    List<TeachersModel> findAll();

    Optional<TeachersModel> findByEmail(String email);
}
