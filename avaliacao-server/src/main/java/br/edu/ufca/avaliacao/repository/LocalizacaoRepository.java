package br.edu.ufca.avaliacao.repository;

import br.edu.ufca.avaliacao.model.Localizacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocalizacaoRepository extends JpaRepository<Localizacao, Long> {

    Localizacao findByCicloIdAndServidorId(Long cicloId, Long servidorId);

}
