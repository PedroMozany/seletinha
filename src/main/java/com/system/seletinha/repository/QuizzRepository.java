package com.system.seletinha.repository;

import com.system.seletinha.models.QuizzModel;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface QuizzRepository {

    Optional<QuizzModel> findByIdAndNivel(Integer id, String nivel);
}
