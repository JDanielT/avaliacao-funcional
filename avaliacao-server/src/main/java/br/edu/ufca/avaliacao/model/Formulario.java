package br.edu.ufca.avaliacao.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Arrays;

@Data
@Entity
@EqualsAndHashCode(of = "id")
public class Formulario implements BaseEntity {

    enum Tipo {

        AUTO_AVALIACAO_SEM_FUNCAO_GERENCIAL(0, "Auto avaliação - Sem função gerencial"),
        AUTO_AVALIACAO_COM_FUNCAO_GERENCIAL(1, "Auto avaliação - Com função gerencial"),

        SERVIDORES_PELA_CHEFIA_SEM_FUNCAO_GERENCIAL(2, "Servidores pela chefia - Sem função gerencial"),
        SERVIDORES_PELA_CHEFIA_COM_FUNCAO_GERENCIAL(3, "Servidores pela chefia - Com função gerencial");

        private int codigo;
        private String descricao;

        Tipo(int codigo, String descricao) {
            this.codigo = codigo;
            this.descricao = descricao;
        }

        public int getCodigo() {
            return codigo;
        }

        @JsonValue
        public String getDescricao() {
            return descricao;
        }

        @JsonCreator
        public static Tipo fromString(String descricao) {
            return Arrays.stream(Tipo.values())
                    .filter(item -> item.descricao.equals(descricao))
                    .findFirst().get();
        }

        }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String descricao;

    @NotNull
    private Tipo tipo;

}
