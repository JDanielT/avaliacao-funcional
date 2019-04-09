package br.edu.ufca.avaliacao.security;

import br.edu.ufca.avaliacao.model.CredenciaisAcesso;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.logging.Level;
import java.util.logging.Logger;

public class JWTLoginFilter extends AbstractAuthenticationProcessingFilter {

    @Autowired
    private TokenAuthenticationService tokenAuthenticationService;

    public JWTLoginFilter(String url, AuthenticationManager authManager) {
        super(new AntPathRequestMatcher(url));
        setAuthenticationManager(authManager);
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
            throws AuthenticationException {

        var credenciais = new CredenciaisAcesso();

        try {

            credenciais = new ObjectMapper()
                    .readValue(request.getInputStream(), CredenciaisAcesso.class);

        } catch (Exception ex){
            Logger.getLogger(getClass().getName()).log(Level.INFO, ex.getMessage());
        }

        return getAuthenticationManager()
                .authenticate(new UsernamePasswordAuthenticationToken(credenciais.getUsername(), credenciais.getPassword()));

    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain filterChain,
                                            Authentication auth) {

        tokenAuthenticationService.addAuthentication(response, auth);

    }

}
