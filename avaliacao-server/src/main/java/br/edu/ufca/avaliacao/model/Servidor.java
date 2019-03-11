package br.edu.ufca.avaliacao.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(of = "id")
public class Servidor implements BaseEntity {

    private Long id;
    private String nome;
    private Integer siape;

}
