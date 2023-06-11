package com.system.seletinha.repository;

import com.system.seletinha.models.QuizzModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface QuizzRepository extends JpaRepository<QuizzModel, Integer> {

    Optional<QuizzModel> findById(String zone);

}
