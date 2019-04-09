package br.edu.ufca.avaliacao.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;

@Service
public class TokenAuthenticationService {

    public static final String HEADER_STRING = "authorization";

    // EXPIRATION_TIME = 10 dias
    static final long EXPIRATION_TIME = 860_000_000;
    static final String SECRET = "53cr3t";
    static final String ROLES = "ROLES";

    public void addAuthentication(HttpServletResponse response, Authentication auth) {

        String JWT = Jwts.builder()
                .setSubject(auth.getName())
                .claim(ROLES, auth.getAuthorities())
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
                return new UsernamePasswordAuthenticationToken(user, null, null);
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
