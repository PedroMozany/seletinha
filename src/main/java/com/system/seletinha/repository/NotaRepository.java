package com.system.seletinha.repository;

import com.system.seletinha.models.NotaModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotaRepository  extends JpaRepository<NotaModel, Integer> {

    <Nota extends NotaModel> Nota save(Nota entity);
    List<NotaModel> findByRegistryStudentAndIdGamer(int registry,int idGamer);
}
