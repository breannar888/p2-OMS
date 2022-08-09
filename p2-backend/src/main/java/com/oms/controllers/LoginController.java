package com.oms.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestContextHolder;

import com.oms.beans.LoginInfo;
import com.oms.beans.Users;
import com.oms.data.UserRepository;

@RestController
@RequestMapping("")
@CrossOrigin("*")
public class LoginController {

	@Autowired
	UserRepository userRepository;

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	PasswordEncoder passwordEncoder;

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody Users user) throws Exception {
		Authentication auth;
		try {
			auth = authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
			SecurityContextHolder.getContext().setAuthentication(auth);
			user.setPassword(null);
			System.out.println(RequestContextHolder.getRequestAttributes().getSessionId());
			return ResponseEntity.ok(new LoginInfo(RequestContextHolder.getRequestAttributes().getSessionId(),
					auth.getAuthorities().toArray()[0].toString()));
		} catch (BadCredentialsException e) {
			throw new Exception("invalid credentials");
		}
	}
}
