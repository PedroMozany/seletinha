package com.system.seletinha.endpoint.service;

import com.system.seletinha.models.QuizzModel;

import java.util.LinkedList;
import java.util.List;
import java.util.Random;

public class QuizzService {

    List<QuizzModel> list = new LinkedList<>();

    public int gerarQuestao(int quantities, String nivel) {
        int id = 0;


        Random random = new Random();

        for (int i = 0; i < quantities; i++) {
            id = random.nextInt(0, 73);
        }
        return id;
    }


}
