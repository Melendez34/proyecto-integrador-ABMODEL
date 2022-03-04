package com.generation.demo.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.generation.demo.models.ProductosModel;
import com.generation.demo.services.ProductosService;
@RestController
public class ProductosController {
	private final ProductosService productosService;
	public ProductosController(@Autowired ProductosService productosService) {
		this.productosService = productosService;
	}

	//mostrar datos de productos
			@GetMapping("/productos")
			public ArrayList<ProductosModel> obtenerDatosProduct() {
				return productosService.obtenerDatos();
			}
			
			//Guardar & editar datos en la tabla usuarios
			@PostMapping("/productos")
			public ProductosModel guardarDatosProduct(@RequestBody ProductosModel productosModel) {
				return productosService.guardarDatos(productosModel);
			}
			
			//Eliminar datos va a borrar elementos utilizando un identificador
			@DeleteMapping(path = "/productos/{id}") 
			public boolean eliminarDatoProduct(@PathVariable("id") Integer id) {
				return productosService.eliminarDato(id);
			}
			
			@GetMapping("/search/{nombre}")
			public ArrayList<ProductosModel> findByNombre(@PathVariable("nombre") String nombre){
				return (ArrayList<ProductosModel>)productosService.obtenerProductos(nombre);
			}

}
