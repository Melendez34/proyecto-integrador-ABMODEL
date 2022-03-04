package com.generation.demo.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.generation.demo.models.ComprasProductoModel;
import com.generation.demo.services.ComprasProductoService;
@RestController
public class ComprasProductosController {
	
	private final ComprasProductoService comprasproductoService;
	
	public ComprasProductosController(@Autowired ComprasProductoService comprasproductoService) {
		this.comprasproductoService =comprasproductoService;
	}

	
	//mostrar datos de comprasproducto
			@GetMapping("/comprasproducto")
			public ArrayList<ComprasProductoModel> obtenerDatosComprod() {
				return comprasproductoService.obtenerDatos();
			}
									
			//Guardar & editar datos en la tabla comprasproducto
			@PostMapping("/comprasproducto")
			public ComprasProductoModel guardarDatosComprod(@RequestBody ComprasProductoModel comprasproductoModel) {
				return comprasproductoService.guardarDatos(comprasproductoModel);
			}
									
			//Eliminar datos va a borrar elementos utilizando un identificador
			@DeleteMapping(path = "/comprasproducto/{id}") 
			public boolean eliminarDatoComprod(@PathVariable("id") Integer id) {
				return comprasproductoService.eliminarDato(id);
			}
}
