package br.edu.ufca.avaliacao.controller;

import br.edu.ufca.avaliacao.model.Pergunta;
import br.edu.ufca.avaliacao.service.PerguntaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/perguntas")
public class PerguntaController extends AbstractController<Pergunta> {

    private PerguntaService service;

    @Autowired
    public PerguntaController(PerguntaService service) {
        this.service = service;
    }

    @Override
    public PerguntaService getService() {
        return service;
    }

    @GetMapping("/formulario/{formularioId}/ciclo/{cicloId}")
    public ResponseEntity<List<Pergunta>> findByFormularioAndCiclo(@PathVariable Long formularioId, @PathVariable Long cicloId) {
        var perguntas = getService().findByFormularioIdAndCicloIdOrderById(formularioId, cicloId);
        if (perguntas == null || perguntas.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(perguntas);
    }

}
