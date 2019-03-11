package br.edu.ufca.avaliacao.service;

import br.edu.ufca.avaliacao.model.Avaliacao;
import br.edu.ufca.avaliacao.repository.AvaliacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AvaliacaoService extends AbstractService<Avaliacao> {

    private AvaliacaoRepository repository;
    private ServidorService servidorService;

    @Autowired
    public AvaliacaoService(AvaliacaoRepository repository, ServidorService servidorService) {
        this.repository = repository;
        this.servidorService = servidorService;
    }

    @Override
    protected AvaliacaoRepository getRepository() {
        return repository;
    }

    public List<Avaliacao> findByCicloIdAndAvaliadoId(Long cicloId, Long servidorId) {

        var avaliacoes = getRepository().findByCicloIdAndAvaliadoId(cicloId, servidorId);

        avaliacoes.forEach(a -> {
                    a.setAvaliado(servidorService.findById(a.getAvaliadoId()));
                    if(a.getAvaliadorId() != null) {
                        a.setAvaliador(servidorService.findById(a.getAvaliadorId()));
                    }
                });

        return avaliacoes;

    }

}
