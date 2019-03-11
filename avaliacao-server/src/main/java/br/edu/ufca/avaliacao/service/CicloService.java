package br.edu.ufca.avaliacao.service;

import br.edu.ufca.avaliacao.model.Ciclo;
import br.edu.ufca.avaliacao.repository.CicloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CicloService extends AbstractService<Ciclo> {

    private CicloRepository repository;

    @Autowired
    public CicloService(CicloRepository repository) {
        this.repository = repository;
    }

    @Override
    protected CicloRepository getRepository() {
        return repository;
    }

}
