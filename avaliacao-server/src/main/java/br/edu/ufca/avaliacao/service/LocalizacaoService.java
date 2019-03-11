package br.edu.ufca.avaliacao.service;

import br.edu.ufca.avaliacao.model.Localizacao;
import br.edu.ufca.avaliacao.repository.LocalizacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LocalizacaoService extends AbstractService<Localizacao> {

    private LocalizacaoRepository repository;

    private UnidadeService unidadeService;

    private ServidorService servidorService;

    @Autowired
    public LocalizacaoService(LocalizacaoRepository repository, UnidadeService unidadeService, ServidorService servidorService) {
        this.repository = repository;
        this.unidadeService = unidadeService;
        this.servidorService = servidorService;
    }

    @Override
    public LocalizacaoRepository getRepository() {
        return repository;
    }

    public Localizacao findByCicloIdAndServidorId(Long cicloId, Long servidorId){
        var localizacao = getRepository().findByCicloIdAndServidorId(cicloId, servidorId);
        if(localizacao != null) {
            localizacao.setUnidade(unidadeService.findById(localizacao.getUnidadeId()));
            localizacao.setServidor(servidorService.findById(localizacao.getServidorId()));
        }
        return localizacao;
    }

}
