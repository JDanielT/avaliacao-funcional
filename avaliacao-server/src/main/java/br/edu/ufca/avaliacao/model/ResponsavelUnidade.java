package br.edu.ufca.avaliacao.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@Data
@Entity
@Table(uniqueConstraints = {@UniqueConstraint(columnNames = {"unidade_id", "servidor_id", "ciclo_id"}),})
@EqualsAndHashCode(of = "id")
public class ResponsavelUnidade implements BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Transient
    private Unidade unidade;

    @JsonIgnore
    @Column(name = "unidade_id")
    private Long unidadeId;

    @Transient
    private Servidor servidor;

    @JsonIgnore
    @Column(name = "servidor_id")
    private Long servidorId;

    @ManyToOne
    @JoinColumn(name = "ciclo_id")
    private Ciclo ciclo;

    @Data
    public static class Import {

        private Long unidade_id;
        private Long servidor_id;

    }

}
