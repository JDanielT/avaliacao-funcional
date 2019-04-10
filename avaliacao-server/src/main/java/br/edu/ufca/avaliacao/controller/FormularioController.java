package br.edu.ufca.avaliacao.controller;

import br.edu.ufca.avaliacao.model.Formulario;
import br.edu.ufca.avaliacao.service.FormularioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/formularios")
public class FormularioController extends AbstractController<Formulario> {

    private FormularioService service;

    @Autowired
    public FormularioController(FormularioService service) {
        this.service = service;
    }

    @Override
    public FormularioService getService() {
        return service;
    }
    
}
