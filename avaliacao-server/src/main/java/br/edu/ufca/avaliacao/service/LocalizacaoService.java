package br.edu.ufca.avaliacao.service;

import br.edu.ufca.avaliacao.model.Localizacao;
import br.edu.ufca.avaliacao.repository.LocalizacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LocalizacaoService extends AbstractService<Localizacao> {


    private LocalizacaoRepository repository;

    @Autowired
    public LocalizacaoService(LocalizacaoRepository repository) {
        this.repository = repository;
    }

    @Override
    public LocalizacaoRepository getRepository() {
        return repository;
    }

}
