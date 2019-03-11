package br.edu.ufca.avaliacao.service;

import br.edu.ufca.avaliacao.model.Resposta;
import br.edu.ufca.avaliacao.repository.RespostaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RespostaService extends AbstractService<Resposta> {

    private RespostaRepository repository;

    @Autowired
    public RespostaService(RespostaRepository repository) {
        this.repository = repository;
    }

    @Override
    public RespostaRepository getRepository() {
        return repository;
    }

}
