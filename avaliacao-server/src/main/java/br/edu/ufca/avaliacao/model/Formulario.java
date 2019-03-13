package br.edu.ufca.avaliacao.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
@EqualsAndHashCode(of = "id")
public class Formulario implements BaseEntity {

    enum Tipo {

        AUTO_AVALIACAO_SEM_FUNCAO_GERENCIAL,
        AUTO_AVALIACAO_COM_FUNCAO_GERENCIAL,

        SERVIDORES_PELA_CHEFIA_SEM_FUNCAO_GERENCIAL,
        SERVIDORES_PELA_CHEFIA_COM_FUNCAO_GERENCIAL

    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String descricao;
    private Tipo tipo;
    private Integer[] escala;

}
