  package com.generation.demo.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.*;

import com.generation.demo.models.UsuariosModel;
import com.generation.demo.services.UsuariosService;
@RestController
@RequestMapping("/usuarios")
public class UsuariosController {
	private final UsuariosService usuariosService;
	private final BCryptPasswordEncoder bCryptPasswordEncoder;
	
	public UsuariosController(@Autowired UsuariosService usuariosService,@Autowired BCryptPasswordEncoder bCryptPasswordEncoder) {
		this.usuariosService = usuariosService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
		
	}


	//mostrar datos de usuarios
		@GetMapping
		public ArrayList<UsuariosModel> obtenerDatos() {
			return usuariosService.obtenerDatos();
		}
		
		//Guardar & editar datos en la tabla usuarios
		@PostMapping
		public UsuariosModel guardarDatos(@RequestBody UsuariosModel usuariosModel) {
			usuariosModel.setContrasenia(bCryptPasswordEncoder.encode(usuariosModel.getContrasenia()));
			return usuariosService.guardarDatos(usuariosModel);
		}
		
		//Eliminar datos va a borrar elementos utilizando un identificador
		@DeleteMapping(path = "/{id}") 
		public boolean eliminarDato(@PathVariable("id") Integer id) {
			return usuariosService.eliminarDato(id);
		}

}
