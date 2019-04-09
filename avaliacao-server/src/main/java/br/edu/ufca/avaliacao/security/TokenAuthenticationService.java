package br.edu.ufca.avaliacao.security;

import br.com.craweb.model.Acesso;
import br.com.craweb.model.Pessoa;
import br.com.craweb.model.Profissional;
import br.com.craweb.service.AcessoService;
import br.com.craweb.service.PessoaService;
import br.com.craweb.service.ProfissionalService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;
import java.util.stream.Collectors;

@Service
public class TokenAuthenticationService {

    @Autowired
    private AcessoService acessoService;

    @Autowired
    private PessoaService pessoaService;

    public static final String HEADER_STRING = "authorization";

    // EXPIRATION_TIME = 10 dias
    static final long EXPIRATION_TIME = 860_000_000;
    static final String SECRET = "53cr3t";
    static final String ROLES = "ROLES";
    static final String DOCUMENTO = "DOCUMENTO";

    public void addAuthentication(HttpServletResponse response, String username) {
        Pessoa pessoa = pessoaService.findPessoaByUsername(username);

        String JWT = Jwts.builder()
                .setSubject(username)
                .claim(ROLES, acessoService.findAcessoByUsername(username).getRoles().stream().map(r -> r.getTipo()).collect(Collectors.toList()))
                .claim(DOCUMENTO, pessoa != null ? pessoa.getDocumentoPrincipal() : null)
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();

        response.addHeader(HEADER_STRING, JWT);

    }

    public Authentication getAuthentication(HttpServletRequest request) {

        String token = request.getHeader(HEADER_STRING);

        if (token != null && !token.isBlank()) {

            // faz parse do token
            String user = Jwts.parser()
                    .setSigningKey(SECRET)
                    .parseClaimsJws(token)
                    .getBody()
                    .getSubject();

            if (user != null) {
                Acesso acesso = acessoService.findAcessoByUsername(user);
                return new UsernamePasswordAuthenticationToken(user, null, acesso.getAuthorities());
            }

        }

        return null;

    }

    public String getPrincipal(HttpServletRequest request) {
        Authentication auth = getAuthentication(request);
        if (auth != null) {
            return auth.getPrincipal().toString();
        }
        return null;
    }

    public GrantedAuthority getAuthority(HttpServletRequest request) {
        Authentication auth = getAuthentication(request);
        if (auth != null) {
            return auth.getAuthorities().iterator().next();
        }
        return null;
    }

}
