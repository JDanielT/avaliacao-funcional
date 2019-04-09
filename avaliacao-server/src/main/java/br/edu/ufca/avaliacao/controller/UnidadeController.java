package br.edu.ufca.avaliacao.controller;

import br.edu.ufca.avaliacao.service.UnidadeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/unidades")
public class UnidadeController {

    private UnidadeService unidadeService;

    @Autowired
    public UnidadeController(UnidadeService unidadeService) {
        this.unidadeService = unidadeService;
    }

    @GetMapping("/{id}")
    public ResponseEntity findById(Long id) {
        var unidade = unidadeService.findById(id);
        if (unidade == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(unidade);
    }

}
