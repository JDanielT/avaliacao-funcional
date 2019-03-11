package br.edu.ufca.avaliacao.repository;

import br.edu.ufca.avaliacao.model.Avaliacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AvaliacaoRepository extends JpaRepository<Avaliacao, Long> {

    List<Avaliacao> findByCicloIdAndAvaliadoId(Long cicloId, Long servidorId);

}
