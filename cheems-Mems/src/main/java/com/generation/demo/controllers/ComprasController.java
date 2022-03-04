package com.generation.demo.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.generation.demo.models.ComprasModel;
import com.generation.demo.services.ComprasService;
@RestController
public class ComprasController {
	
	private final ComprasService comprasService;
	
	public ComprasController(@Autowired ComprasService comprasService) {
		this.comprasService = comprasService;
	}

	//mostrar datos de compras
			@GetMapping("/compras")
			public ArrayList<ComprasModel> obtenerDatosCompras() {
				return comprasService.obtenerDatos();
			}
							
			//Guardar & editar datos en la tabla usuarios
			@PostMapping("/compras")
			public ComprasModel guardarDatosCompras(@RequestBody ComprasModel comprasModel) {
				return comprasService.guardarDatos(comprasModel);
			}
							
			//Eliminar datos va a borrar elementos utilizando un identificador
			@DeleteMapping(path = "/compras/{id}") 
			public boolean eliminarDatoComent(@PathVariable("id") Integer id) {
				return comprasService.eliminarDato(id);
			}
			

}
