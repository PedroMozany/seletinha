package com.system.seletinha.repository;

import com.system.seletinha.models.AtividadeModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AtividadeRepository extends JpaRepository<AtividadeModel, Integer> {

    <Atividade extends AtividadeModel> Atividade save(Atividade entity);

    Optional<AtividadeModel> findBySerieAndTeam(int serie, int team);
}
