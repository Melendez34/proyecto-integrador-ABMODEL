package com.generation.demo.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.demo.models.ComentariosModel;
import com.generation.demo.repositories.ComentariosRepository;

@Service
public class ComentariosService {
private final ComentariosRepository comentariosRepository;
	
	public ComentariosService(@Autowired ComentariosRepository comentariosRepository) {
		this.comentariosRepository = comentariosRepository;
	}
	
	
	public ArrayList<ComentariosModel> obtenerDatos() {
		return (ArrayList<ComentariosModel>) comentariosRepository.findAll();
	}
	
	
	public ComentariosModel guardarDatos(ComentariosModel comentariosModel) {
		return comentariosRepository.save(comentariosModel);
	}
	
	
	public boolean eliminarDato(Integer id) {
		try {
			comentariosRepository.deleteById(id);
			return true;
		}
		catch(Exception error) {
			return false;
		}
	}
}
