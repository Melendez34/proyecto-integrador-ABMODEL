package com.generation.demo.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.demo.models.ComprasModel;
import com.generation.demo.repositories.ComprasRepository;


@Service
public class ComprasService {
private final ComprasRepository comprasRepository;
	
	public ComprasService(@Autowired ComprasRepository comprasRepository) {
		this.comprasRepository = comprasRepository;
	}
	
	
	public ArrayList<ComprasModel> obtenerDatos() {
		return (ArrayList<ComprasModel>) comprasRepository.findAll();
	}
	
	
	public ComprasModel guardarDatos(ComprasModel comprasModel) {
		return comprasRepository.save(comprasModel);
	}
	
	
	public boolean eliminarDato(Integer id) {
		try {
			comprasRepository.deleteById(id);
			return true;
		}
		catch(Exception error) {
			return false;
		}
	}
}
