package com.generation.demo.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.demo.models.ComprasProductoModel;
import com.generation.demo.repositories.ComprasProductoRepository;

@Service
public class ComprasProductoService {
private final ComprasProductoRepository comprasproductoRepository;
	
	public ComprasProductoService(@Autowired ComprasProductoRepository comprasproductoRepository) {
		this.comprasproductoRepository = comprasproductoRepository;
	}
	
	
	public ArrayList<ComprasProductoModel> obtenerDatos() {
		return (ArrayList<ComprasProductoModel>) comprasproductoRepository.findAll();
	}
	
	
	public ComprasProductoModel guardarDatos(ComprasProductoModel comprasproductoModel) {
		return comprasproductoRepository.save(comprasproductoModel);
	}
	
	
	public boolean eliminarDato(Integer id) {
		try {
			comprasproductoRepository.deleteById(id);
			return true;
		}
		catch(Exception error) {
			return false;
		}
	}
}
