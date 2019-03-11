package br.edu.ufca.avaliacao.repository;

import br.edu.ufca.avaliacao.model.Ciclo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CicloRepository extends JpaRepository<Ciclo, Long> {
}
