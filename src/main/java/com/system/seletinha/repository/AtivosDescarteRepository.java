package com.system.seletinha.repository;

import com.system.seletinha.models.AtivosDescModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AtivosDescarteRepository extends JpaRepository<AtivosDescModel, Integer> {

    List<AtivosDescModel> findAll();
    Optional<AtivosDescModel> findByZone(String zone);

}
