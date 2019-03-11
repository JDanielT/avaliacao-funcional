package br.edu.ufca.avaliacao.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;

@Data
@Entity
@EqualsAndHashCode(of = "id")
public class Avaliacao implements BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "ciclo_id")
    private Ciclo ciclo;

    @ManyToOne
    @JoinColumn(name = "formulario_id")
    private Formulario formulario;

    @JsonIgnore
    private Long avaliadoId;

    @JsonIgnore
    private Long avaliadorId;

    @Transient
    private Servidor avaliado;

    @Transient
    private Servidor avaliador;

    private BigDecimal nota;

    @Data
    @NoArgsConstructor
    static public class Import {

        private Long formulario_id;
        private Long avaliado_id;
        private Long avaliador_id;
        private BigDecimal nota;

    }

}
