package br.edu.ufca.avaliacao.controller;

import br.edu.ufca.avaliacao.model.Avaliacao;
import br.edu.ufca.avaliacao.service.AvaliacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/avaliacoes")
public class AvaliacaoController extends AbstractController<Avaliacao> {

    private AvaliacaoService service;

    @Autowired
    public AvaliacaoController(AvaliacaoService service) {
        this.service = service;
    }

    @Override
    public AvaliacaoService getService() {
        return service;
    }

    @GetMapping("/{cicloId}/{servidorId}")
    public ResponseEntity avaliacoes(@PathVariable Long cicloId,
                                     @PathVariable Long servidorId) {
        var avaliacoes = service.findByCicloIdAndAvaliadoId(cicloId, servidorId);
        if (avaliacoes == null || avaliacoes.size() == 0) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(avaliacoes);
    }

}
