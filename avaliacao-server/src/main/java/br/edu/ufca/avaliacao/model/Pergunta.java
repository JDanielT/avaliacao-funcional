package br.edu.ufca.avaliacao.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@Data
@Entity
@EqualsAndHashCode(of = "id")
public class Pergunta implements BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "ciclo_id")
    private Ciclo ciclo;

    @ManyToOne
    @JoinColumn(name = "fomrulario_id")
    private Formulario formulario;

    private String descricao;

    @Data
    public static class Import {

        private String questao;
        private Long formulario_id;

    }

}
