package com.oms.data;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.oms.beans.Tickets;
import com.oms.beans.Users;

public interface UserRepository extends JpaRepositoryImplementation<Users, Integer> {

}
