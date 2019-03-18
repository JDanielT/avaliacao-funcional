package br.edu.ufca.avaliacao.controller;

import br.edu.ufca.avaliacao.model.Ciclo;
import br.edu.ufca.avaliacao.service.CicloService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Comparator;

@RestController
@RequestMapping("/ciclos")
public class CicloController extends AbstractController<Ciclo> {

    private CicloService cicloService;

    @Autowired
    public CicloController(CicloService cicloService) {
        this.cicloService = cicloService;
    }

    @Override
    protected CicloService getService() {
        return cicloService;
    }

    @GetMapping
    public ResponseEntity findAll() {

        var ciclos = cicloService.findAll();
        ciclos.sort(Comparator.comparing(Ciclo::getExercicio).reversed());

        return ResponseEntity.ok(ciclos);
    }

}
