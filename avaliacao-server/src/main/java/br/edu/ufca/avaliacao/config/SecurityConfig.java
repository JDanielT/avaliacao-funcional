package br.edu.ufca.avaliacao.config;

import br.edu.ufca.avaliacao.security.JWTAuthorizationFilter;
import br.edu.ufca.avaliacao.security.JWTLoginFilter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.http.HttpServletResponse;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Value("${ldap.urls}")
    private String ldapUrls;

    @Value("${ldap.base.dn}")
    private String ldapBaseDn;

    @Value("${ldap.username}")
    private String ldapSecurityPrincipal;

    @Value("${ldap.password}")
    private String ldapPrincipalPassword;

    @Value("${ldap.user.dn.pattern}")
    private String ldapUserDnPattern;

    @Value("${ldap.group.search.base}")
    private String ldapGroupSearchBase;

    private final String ADMIN_ROLE = "AVALIACAOADMIN";

    @Bean
    public JWTLoginFilter loginFilter() throws Exception {
        return new JWTLoginFilter("/login", authenticationManager());
    }

    @Bean
    public JWTAuthorizationFilter authorizationFilter() {
        return new JWTAuthorizationFilter();
    }

    @Bean
    public AuthenticationEntryPoint unauthorizedEntryPoint() {
        return (request, response, authException) -> response.sendError(HttpServletResponse.SC_UNAUTHORIZED);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable()
                .exceptionHandling().authenticationEntryPoint(unauthorizedEntryPoint()).and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                .authorizeRequests()
                .antMatchers("/admin/**").hasRole(ADMIN_ROLE)
                .anyRequest().authenticated()
                .and()
                // filtra requisições de login
                .addFilterBefore(loginFilter(), UsernamePasswordAuthenticationFilter.class)
                // filtra outras requisições para verificar a presença do JWT no header
                .addFilterBefore(authorizationFilter(), UsernamePasswordAuthenticationFilter.class);

        super.configure(http);
    }

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.ldapAuthentication()
                .userSearchFilter(ldapUserDnPattern)
                .groupSearchBase(ldapGroupSearchBase)
                .contextSource()
                .managerDn(ldapSecurityPrincipal)
                .managerPassword(ldapPrincipalPassword)
                .url(ldapUrls + ldapBaseDn);
    }

}
