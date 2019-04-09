package br.edu.ufca.avaliacao.controller;

import br.edu.ufca.avaliacao.model.Servidor;
import br.edu.ufca.avaliacao.service.ServidorService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/servidores")
public class ServidorController {

    private ServidorService service;

    @Autowired
    public ServidorController(ServidorService service) {
        this.service = service;
    }

    @GetMapping("/{nome}")
    public ResponseEntity<List<Servidor>> findByNome(@PathVariable String nome) {
        nome = StringUtils.stripAccents(nome);
        var servidores = service.findByNome(nome);
        if (servidores == null || servidores.size() == 0) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(servidores);
    }

    @GetMapping("/login/{login}")
    public ResponseEntity<Servidor> findByLogin(@PathVariable String login) {
        var servidor = service.findByLogin(login);
        if (servidor == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(servidor);
    }

}
