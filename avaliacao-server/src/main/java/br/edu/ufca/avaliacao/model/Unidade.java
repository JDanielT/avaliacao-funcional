package br.edu.ufca.avaliacao.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(of = "id")
public class Unidade implements BaseEntity {

    private Long id;
    private String codigo;
    private String sigla;
    private String nome;

    @JsonIgnore
    private Long responsavel;

    private Unidade unidadeResponsavel;

}
