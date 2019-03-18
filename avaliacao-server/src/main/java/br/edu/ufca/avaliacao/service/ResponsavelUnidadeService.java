package br.edu.ufca.avaliacao.service;

import br.edu.ufca.avaliacao.model.Ciclo;
import br.edu.ufca.avaliacao.model.ResponsavelUnidade;
import br.edu.ufca.avaliacao.model.Unidade;
import br.edu.ufca.avaliacao.repository.ResponsavelUnidadeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class ResponsavelUnidadeService extends AbstractService<ResponsavelUnidade> {

    @Value("${avaliacao.consulta.responsavel.unidade.periodo}")
    private String findResponsavel;

    private ResponsavelUnidadeRepository repository;
    private RestTemplate rest;

    private ServidorService servidorService;
    private UnidadeService unidadeService;

    @Autowired
    public ResponsavelUnidadeService(ResponsavelUnidadeRepository repository,
                                     RestTemplate rest,
                                     ServidorService servidorService,
                                     UnidadeService unidadeService) {
        this.repository = repository;
        this.rest = rest;
        this.servidorService = servidorService;
        this.unidadeService = unidadeService;
    }

    @Override
    public ResponsavelUnidadeRepository getRepository() {
        return repository;
    }

    public List<ResponsavelUnidade> findByCicloId(Long cicloId) {
        var responsaveis = getRepository().findByCicloId(cicloId);
        responsaveis.forEach(r -> {
            r.setServidor(servidorService.findById(r.getServidorId()));
            r.setUnidade(unidadeService.findById(r.getUnidadeId()));
        });
        return responsaveis;
    }

    /**
     * Importa responsáveis por unidade para o ciclo em questão (dentro do período dos parâmetros)
     */
    public void importarResponsaveis(Unidade unidade, Ciclo ciclo, LocalDate inicio, LocalDate fim) {

        var array = rest.getForObject(this.mountFindResponsavel(unidade, inicio, fim), ResponsavelUnidade.Import[].class);

        if (array.length > 0) {

            var importer = array[0];

            var responsabilidade = new ResponsavelUnidade();
            responsabilidade.setCiclo(ciclo);
            responsabilidade.setServidorId(importer.getServidor_id());
            responsabilidade.setUnidadeId(importer.getUnidade_id());

            getRepository().save(responsabilidade);

        }

    }

    private String mountFindResponsavel(Unidade u, LocalDate i, LocalDate f) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        return String.format(findResponsavel, u.getId(), formatter.format(i), formatter.format(i));
    }

}
