package br.edu.ufca.avaliacao.service;

import br.edu.ufca.avaliacao.model.Pergunta;
import br.edu.ufca.avaliacao.repository.PerguntaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PerguntaService extends AbstractService<Pergunta> {

    private PerguntaRepository repository;

    @Autowired
    public PerguntaService(PerguntaRepository repository) {
        this.repository = repository;
    }

    @Override
    public PerguntaRepository getRepository() {
        return repository;
    }

    public List<Pergunta> findByFormularioIdOrderById(Long formId){
        return getRepository().findByFormularioIdOrderById(formId);
    }

}
