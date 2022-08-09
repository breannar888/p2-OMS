package com.oms.security;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.oms.filters.FilterChainConfig;

@Configuration
public class UserSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private DataSource datasource;

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	@Bean
	protected AuthenticationManager authenticationManager() throws Exception {
		return super.authenticationManager();
	}

	@Autowired
	protected void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.jdbcAuthentication().dataSource(datasource).passwordEncoder(passwordEncoder);
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable().addFilterBefore(new FilterChainConfig(), UsernamePasswordAuthenticationFilter.class);
		http.httpBasic();
		http.authorizeRequests().mvcMatchers("/login").permitAll();
		http.authorizeRequests().mvcMatchers("/order/**").hasAnyRole("USER", "MANAGER");
		http.authorizeRequests().mvcMatchers("/ticket/**").hasAnyRole("USER", "MANAGER");
		http.authorizeRequests().mvcMatchers("/menu/**").hasAnyRole("USER", "MANAGER");
		http.authorizeRequests().mvcMatchers("/**").permitAll().and().formLogin().disable();

		// logout
		http.logout().deleteCookies("JSESSIONID").invalidateHttpSession(true).clearAuthentication(true).deleteCookies("JSESSIONID");
	}
}
