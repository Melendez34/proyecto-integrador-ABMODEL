package com.generation.demo.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.demo.models.EnvioModel;
import com.generation.demo.repositories.EnvioRepository;

@Service
public class EnvioService {
private final EnvioRepository envioRepository;
	
	public EnvioService(@Autowired EnvioRepository envioRepository) {
		this.envioRepository = envioRepository;
	}
	
	
	public ArrayList<EnvioModel> obtenerDatos() {
		return (ArrayList<EnvioModel>) envioRepository.findAll();
	}
	
	
	public EnvioModel guardarDatos(EnvioModel envioModel) {
		return envioRepository.save(envioModel);
	}
	
	
	public boolean eliminarDato(Integer id) {
		try {
			envioRepository.deleteById(id);
			return true;
		}
		catch(Exception error) {
			return false;
		}
	}
}
