package br.edu.ufca.avaliacao;

import br.edu.ufca.avaliacao.model.*;
import br.edu.ufca.avaliacao.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@SpringBootApplication
public class AvaliacaoApplication {

    public static void main(String[] args) {
        SpringApplication.run(AvaliacaoApplication.class, args);
    }

    @Autowired
    private RestTemplate rest;

    @Autowired
    private CicloRepository cicloRepository;

    @Autowired
    private AvaliacaoRepository avaliacaoRepository;

    @Autowired
    private PerguntaRepository perguntaRepository;

    @Autowired
    private RespostaRepository respostaRepository;

    @Autowired
    private LocalizacaoRepository localizacaoRepository;

    @Bean
    public RestTemplate rest() {
        return new RestTemplate();
    }

    @Bean
    public CommandLineRunner init() {
        return (args) -> {

//            Ciclo[] ciclos = rest.getForObject("https://dadosabertosapi.ufca.edu.br/service/recurso/ciclos_avaliacao.json", Ciclo[].class);
//
//            Arrays.asList(ciclos).forEach(cicloRepository::save);
//
//            cicloRepository.findAll()
//                    .stream()
//                    .filter(ciclo -> ciclo.getExercicio() < 2018)
//                    .forEach(ciclo -> {
//
//                        //Avaliacao.Import[] avaliacoes = rest.getForObject("https://dadosabertosapi.ufca.edu.br/service/recurso/auto_avaliacao_sem_funcao_gerencial.json?exercicio=" + ciclo.getExercicio(), Avaliacao.Import[].class);
//                        //Avaliacao.Import[] avaliacoes = rest.getForObject("https://dadosabertosapi.ufca.edu.br/service/recurso/auto_avaliacao_com_funcao_gerencial.json?exercicio=" + ciclo.getExercicio(), Avaliacao.Import[].class);
//                        //Avaliacao.Import[] avaliacoes = rest.getForObject("https://dadosabertosapi.ufca.edu.br/service/recurso/avaliacao_servidores_pela_chefia.json?exercicio=" + ciclo.getExercicio(), Avaliacao.Import[].class);
//                        //Avaliacao.Import[] avaliacoes = rest.getForObject("https://dadosabertosapi.ufca.edu.br/service/recurso/avaliacao_chefia_por_outra_chefia.json?exercicio=" + ciclo.getExercicio(), Avaliacao.Import[].class);
//
//                        Arrays.asList(avaliacoes).forEach(i -> {
//
//                            Avaliacao a = new Avaliacao();
//                            a.setCiclo(ciclo);
//                            a.setAvaliadoId(i.getAvaliado_id());
//                            a.setAvaliadorId(i.getAvaliador_id());
//
//                            Formulario f = new Formulario();
//                            f.setId(i.getFormulario_id());
//
//                            a.setFormulario(f);
//
//                            a.setNota(i.getNota());
//
//                            avaliacaoRepository.save(a);
//
//                        });
//
//
//
//                    });



//            cicloRepository.findAll()
//                    .stream()
//                    .filter(ciclo -> ciclo.getExercicio() >= 2018)
//                    .forEach(ciclo -> {
//
//                        //Pergunta.Import[] perguntas = rest.getForObject("https://dadosabertosapi.ufca.edu.br/service/recurso/perguntas_auto_avaliacao_sem_funcao_gerencial.json", Pergunta.Import[].class);
//                        //Pergunta.Import[] perguntas = rest.getForObject("https://dadosabertosapi.ufca.edu.br/service/recurso/perguntas_auto_avaliacao_com_funcao_gerencial.json", Pergunta.Import[].class);
//                        //Pergunta.Import[] perguntas = rest.getForObject("https://dadosabertosapi.ufca.edu.br/service/recurso/perguntas_servidores_pela_chefia.json", Pergunta.Import[].class);
//                        //Pergunta.Import[] perguntas = rest.getForObject("https://dadosabertosapi.ufca.edu.br/service/recurso/perguntas_chefia_por_outra_chefia.json", Pergunta.Import[].class);
//
//                        Arrays.asList(perguntas).forEach(i -> {
//
//                            Pergunta p = new Pergunta();
//                            p.setCiclo(ciclo);
//                            p.setDescricao(i.getQuestao());
//
//                            Formulario f = new Formulario();
//                            f.setId(i.getFormulario_id());
//                            p.setFormulario(f);
//
//                            perguntaRepository.save(p);
//
//                        });
//
//                    });





//            cicloRepository.findAll()
//                    .stream()
//                    .filter(ciclo -> ciclo.getExercicio() >= 2018)
//                    .forEach(ciclo -> {
//
//                        Avaliacao.Import[] avaliacoes = rest.getForObject("https://dadosabertosapi.ufca.edu.br/service/recurso/avaliacoes_2018.json", Avaliacao.Import[].class);
//
//                        Arrays.asList(avaliacoes).forEach(i -> {
//
//                            Avaliacao a = new Avaliacao();
//                            a.setCiclo(ciclo);
//                            a.setAvaliadoId(i.getAvaliado_id());
//                            a.setAvaliadorId(i.getAvaliador_id());
//
//                            Formulario f = new Formulario();
//                            f.setId(i.getFormulario_id());
//
//                            a.setFormulario(f);
//
//                            a.setNota(i.getNota());
//
//                            avaliacaoRepository.save(a);
//
//                        });
//
//                    });





//            Map<Long, Integer> servidorCount = new HashMap<>();
//            avaliacaoRepository.findAll().stream().filter(a -> a.getCiclo().getId() == 58).forEach(a -> {
//                servidorCount.put(a.getAvaliadoId(), servidorCount.get(a.getAvaliadoId()) == null ? 1 : servidorCount.get(a.getAvaliadoId()) + 1);
//            });
//
//            servidorCount.entrySet().stream().filter(entry -> entry.getValue() > 2).forEach(entry -> {
//
//                System.out.println(rest.getForObject("https://dadosabertosapi.ufca.edu.br/service/recurso/servidor_por_id.json?id="+entry.getKey(), String.class));
//
//            });




//            avaliacaoRepository.findAll().stream().filter(a -> a.getCiclo().getId() == 58).forEach(a -> {
//
//                List<Pergunta> perguntas = perguntaRepository.findByFormularioIdOrderById(a.getFormulario().getId());
//
//                int idFormulario = 0;
//
//                if (a.getFormulario().getId() == 1){
//                    idFormulario = 15;
//                } else if(a.getFormulario().getId() == 2) {
//                    idFormulario = 17;
//                } else if(a.getFormulario().getId() == 3) {
//                    idFormulario = 20;
//                } else if(a.getFormulario().getId() == 4) {
//                    idFormulario = 22;
//                }
//
//                Resposta.Import[] respostas = rest.getForObject("https://dadosabertosapi.ufca.edu.br/service/recurso/respostas_avaliacoes_2018.json?id_servidor="+a.getAvaliadoId()+"&id_formulario=" + idFormulario, Resposta.Import[].class);
//
//                if(respostas.length <= 8) {
//
//                    for (int i = 0; i < respostas.length; i++) {
//
//                    Resposta r = new Resposta();
//
//                    r.setPergunta(perguntas.get(i));
//                    r.setAvaliacao(a);
//                    r.setValor(respostas[i].getResposta());
//
//                    respostaRepository.save(r);
//
//                    }
//
//                }
//
//            });





//            cicloRepository.findAll()
//                    .forEach(ciclo -> {
//
//                        Localizacao.Import[] localizacoes = rest.getForObject("https://dadosabertosapi.ufca.edu.br/service/recurso/avaliacao_localizacao.json?exercicio="+ciclo.getExercicio(), Localizacao.Import[].class);
//                        Arrays.asList(localizacoes).forEach(i -> {
//
//                            Localizacao l = new Localizacao();
//                            l.setCiclo(ciclo);
//                            l.setServidorId(i.getServidor_id());
//                            l.setUnidadeId(i.getUnidade_id());
//
//                            localizacaoRepository.save(l);
//
//                        });
//
//                    });


        };
    }

}
