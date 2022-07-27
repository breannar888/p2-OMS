package com.oms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@ComponentScan("com.oms")
@Configuration
@EnableAutoConfiguration
public class P2OrderManagementSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(P2OrderManagementSystemApplication.class, args);
	}

}
