package com.generation.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.generation.demo.models.EnvioModel;

@Repository
public interface EnvioRepository extends JpaRepository<EnvioModel, Integer> {

}
