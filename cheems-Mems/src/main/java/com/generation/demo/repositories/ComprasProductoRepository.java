package com.generation.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.generation.demo.models.ComprasProductoModel;

@Repository
public interface ComprasProductoRepository extends JpaRepository<ComprasProductoModel, Integer> {

}
