package br.edu.ufca.avaliacao.repository;

import br.edu.ufca.avaliacao.model.Pergunta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PerguntaRepository extends JpaRepository<Pergunta, Long> {

    List<Pergunta> findByFormularioIdAndCicloIdOrderById(Long formId, Long cicloId);

}
