package com.generation.demo.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.generation.demo.models.EnvioModel;
import com.generation.demo.services.EnvioService;
@RestController
public class EnvioController {
	private final EnvioService envioService;
	
	
	public EnvioController(@Autowired EnvioService envioService) {
		this.envioService = envioService;
	}

	//mostrar datos de envio
			@GetMapping("/envio")
			public ArrayList<EnvioModel> obtenerDatosEnvio() {
				return envioService.obtenerDatos();
			}
							
			//Guardar & editar datos en la tabla envio
			@PostMapping("/envio")
			public EnvioModel guardarDatosEnvio(@RequestBody EnvioModel envioModel) {
				return envioService.guardarDatos(envioModel);
			}
							
			//Eliminar datos va a borrar elementos utilizando un identificador
			@DeleteMapping(path = "/envio/{id}") 
			public boolean eliminarDatoEnvio(@PathVariable("id") Integer id) {
				return envioService.eliminarDato(id);
			}
}
