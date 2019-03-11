package br.edu.ufca.avaliacao.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@Data
@Entity
@EqualsAndHashCode(of = "id")
public class Localizacao implements BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "ciclo_id")
    private Ciclo ciclo;

    @JsonIgnore
    private Long unidadeId;

    @JsonIgnore
    private Long servidorId;

    @Transient
    private Unidade unidade;

    @Transient
    private Servidor servidor;

    @Data
    public static class Import {

        private Long unidade_id;
        private Long servidor_id;

    }

}
