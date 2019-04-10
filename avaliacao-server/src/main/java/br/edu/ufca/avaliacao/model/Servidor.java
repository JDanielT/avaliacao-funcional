package br.edu.ufca.avaliacao.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Data
@EqualsAndHashCode(of = "id")
public class Servidor implements BaseEntity {

    private Long id;
    private String nome;
    private Integer siape;

    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private LocalDate ingresso;

}
