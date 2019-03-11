package br.edu.ufca.avaliacao.service;

import br.edu.ufca.avaliacao.model.Formulario;
import br.edu.ufca.avaliacao.repository.FormularioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FormularioService extends AbstractService<Formulario> {

    private FormularioRepository repository;

    @Autowired
    public FormularioService(FormularioRepository repository) {
        this.repository = repository;
    }

    @Override
    public FormularioRepository getRepository() {
        return repository;
    }

}
