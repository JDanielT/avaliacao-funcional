package br.edu.ufca.avaliacao.service;

import br.edu.ufca.avaliacao.model.Unidade;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UnidadeService {

    @Value("${avaliacao.consulta.unidade.id}")
    private String findByid;

    @Value("${avaliacao.consulta.unidades}")
    private String findAll;

    private Map<Long, Unidade> unidades = new HashMap<>();

    private RestTemplate rest;

    public UnidadeService(RestTemplate rest) {
        this.rest = rest;
    }

    public Unidade findById(Long id){
        if(unidades.get(id) == null) {
            unidades.put(id, rest.getForObject(String.format(findByid, id), Unidade[].class)[0]);
        }
        return unidades.get(id);
    }

    public List<Unidade> findAll(){
        return Arrays.asList(rest.getForObject(findAll, Unidade[].class));
    }

}
