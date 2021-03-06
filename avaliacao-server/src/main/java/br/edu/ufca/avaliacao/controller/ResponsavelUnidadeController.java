package br.edu.ufca.avaliacao.controller;

import br.edu.ufca.avaliacao.model.Ciclo;
import br.edu.ufca.avaliacao.model.ResponsavelUnidade;
import br.edu.ufca.avaliacao.service.ResponsavelUnidadeService;
import br.edu.ufca.avaliacao.service.UnidadeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequestMapping("/responsaveis-unidades")
public class ResponsavelUnidadeController extends AbstractController<ResponsavelUnidade> {

    private ResponsavelUnidadeService service;

    private UnidadeService unidadeService;

    @Autowired
    public ResponsavelUnidadeController(ResponsavelUnidadeService service, UnidadeService unidadeService) {
        this.service = service;
        this.unidadeService = unidadeService;
    }

    @Override
    public ResponsavelUnidadeService getService() {
        return service;
    }

    @GetMapping("/ciclo/{cicloId}")
    public ResponseEntity findByCiclo(@PathVariable Long cicloId) {
        var responsaveis = getService().findByCicloId(cicloId);
        if (responsaveis == null || responsaveis.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(responsaveis);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/importar/{cicloId}/{referenciaInicial}/{referenciaFinal}")
    public void importar(@PathVariable Long cicloId,
                         @PathVariable @DateTimeFormat(pattern = "ddMMyyyy") LocalDate referenciaInicial,
                         @PathVariable @DateTimeFormat(pattern = "ddMMyyyy") LocalDate referenciaFinal) {

        this.unidadeService.findAll().forEach(u -> {

            var ciclo = new Ciclo();
            ciclo.setId(cicloId);

            this.service.importarResponsaveis(u, ciclo, referenciaInicial, referenciaFinal);

        });

    }

}
