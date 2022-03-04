package com.generation.demo.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.generation.demo.models.ComentariosModel;
import com.generation.demo.models.ComprasModel;
import com.generation.demo.models.ComprasProductoModel;
import com.generation.demo.models.EnvioModel;
import com.generation.demo.models.ProductosModel;
import com.generation.demo.models.UsuariosModel;
import com.generation.demo.services.ComentariosService;
import com.generation.demo.services.ComprasProductoService;
import com.generation.demo.services.ComprasService;
import com.generation.demo.services.EnvioService;
import com.generation.demo.services.ProductosService;
import com.generation.demo.services.UsuariosService;



public class CheemsController {
private final UsuariosService usuariosService;
private final ProductosService productosService;
private final ComentariosService comentariosService;
private final ComprasService comprasService;
private final EnvioService envioService;
private final ComprasProductoService comprasproductoService;

	
	public CheemsController(
		@Autowired UsuariosService usuariosService,
		@Autowired ProductosService productosService,
		@Autowired ComentariosService comentariosService,
		@Autowired ComprasService comprasService,
		@Autowired EnvioService envioService,
		@Autowired ComprasProductoService comprasproductoService) {
		this.usuariosService = usuariosService;
		this.productosService = productosService;
		this.comentariosService = comentariosService;
		this.comprasService = comprasService;
		this.envioService = envioService;
		this.comprasproductoService = comprasproductoService;
	}
	
	//mostrar datos de usuarios
	@GetMapping("/usuarios")
	public ArrayList<UsuariosModel> obtenerDatos() {
		return usuariosService.obtenerDatos();
	}
	
	//Guardar & editar datos en la tabla usuarios
	@PostMapping("/usuarios")
	public UsuariosModel guardarDatos(@RequestBody UsuariosModel usuariosModel) {
		return usuariosService.guardarDatos(usuariosModel);
	}
	
	//Eliminar datos va a borrar elementos utilizando un identificador
	@DeleteMapping(path = "/usuarios/{id}") 
	public boolean eliminarDato(@PathVariable("id") Integer id) {
		return usuariosService.eliminarDato(id);
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
		
		//mostrar datos de comentarios
		@GetMapping("/comentarios")
		public ArrayList<ComentariosModel> obtenerDatosComent() {
			return comentariosService.obtenerDatos();
		}
				
		//Guardar & editar datos en la tabla usuarios
		@PostMapping("/comentarios")
		public ComentariosModel guardarDatosComent(@RequestBody ComentariosModel comentariosModel) {
			return comentariosService.guardarDatos(comentariosModel);
		}
				
		//Eliminar datos va a borrar elementos utilizando un identificador
		@DeleteMapping(path = "/comentarios/{id}") 
		public boolean eliminarDatoCompras(@PathVariable("id") Integer id) {
			return comentariosService.eliminarDato(id);
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
