package com.generation.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.generation.demo.models.ComprasModel;

@Repository
public interface ComprasRepository extends JpaRepository<ComprasModel, Integer> {

}
