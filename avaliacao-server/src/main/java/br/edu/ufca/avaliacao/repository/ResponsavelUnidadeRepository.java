package br.edu.ufca.avaliacao.repository;

import br.edu.ufca.avaliacao.model.ResponsavelUnidade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ResponsavelUnidadeRepository extends JpaRepository<ResponsavelUnidade, Long> {

    List<ResponsavelUnidade> findByCicloId(Long cicloId);

}
