package br.edu.ufca.avaliacao.controller;

import br.edu.ufca.avaliacao.model.Localizacao;
import br.edu.ufca.avaliacao.service.LocalizacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/localizacoes")
public class LocalizacaoController extends AbstractController<Localizacao> {

    private LocalizacaoService service;

    @Autowired
    public LocalizacaoController(LocalizacaoService service) {
        this.service = service;
    }

    @Override
    public LocalizacaoService getService() {
        return service;
    }

    @GetMapping("/{cicloId}/{servidorId}")
    public ResponseEntity<Localizacao> findByCicloIdAndServidorId(@PathVariable Long cicloId,
                                                                  @PathVariable Long servidorId) {
        var localizacao = getService().findByCicloIdAndServidorId(cicloId, servidorId);
        if (localizacao == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(localizacao);
    }

}
