package com.system.seletinha.endpoint.service;

import com.system.seletinha.models.AtivosDescModel;
import com.system.seletinha.repository.AtivosDescarteRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@Slf4j
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class AtivosDescService {


    private final AtivosDescarteRepository ativosDescarteRepository;




    public AtivosDescModel searchZone(final String zone) {
        Optional<AtivosDescModel> student =  ativosDescarteRepository.findByZone(zone);
        return student.get();
    }

    public List<AtivosDescModel> searchAll() {
        return ativosDescarteRepository.findAll();
    }
}
