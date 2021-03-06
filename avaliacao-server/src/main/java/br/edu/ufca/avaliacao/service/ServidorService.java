package br.edu.ufca.avaliacao.service;

import br.edu.ufca.avaliacao.model.Servidor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ServidorService {

    @Value("${avaliacao.consulta.servidor.id}")
    private String findByid;

    @Value("${avaliacao.consulta.servidor.nome}")
    private String findByNome;

    @Value("${avaliacao.consulta.servidor.login}")
    private String findByLogin;

    private static Map<Long, Servidor> servidores = new HashMap<>();

    private RestTemplate rest;

    @Autowired
    public ServidorService(RestTemplate rest) {
        this.rest = rest;
    }

    public Servidor findById(Long id) {
        if (ServidorService.servidores.get(id) == null) {
            ServidorService.servidores.put(id, rest.getForObject(String.format(findByid, id), Servidor[].class)[0]);
        }
        return ServidorService.servidores.get(id);
    }

    public List<Servidor> findByNome(String nome) {
        return Arrays.asList(rest.getForObject(String.format(findByNome, nome), Servidor[].class));
    }

    public Servidor findByLogin(String login) {
        return rest.getForObject(String.format(findByLogin, login), Servidor[].class)[0];
    }

}
