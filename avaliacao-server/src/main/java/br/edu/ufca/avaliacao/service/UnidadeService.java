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

    private static Map<Long, Unidade> unidades = new HashMap<>();

    private RestTemplate rest;

    public UnidadeService(RestTemplate rest) {
        this.rest = rest;
    }

    public Unidade findById(Long id) {
        if (UnidadeService.unidades.get(id) == null) {
            var result = rest.getForObject(String.format(findByid, id), Unidade[].class);
            var unidade = result.length > 0 ? result[0] : null;
            if(unidade != null) {
                unidade.setUnidadeResponsavel(findById(unidade.getResponsavel()));
                UnidadeService.unidades.put(id, unidade);
            }
        }
        return UnidadeService.unidades.get(id);
    }

    public List<Unidade> findAll() {
        return Arrays.asList(rest.getForObject(findAll, Unidade[].class));
    }

}
