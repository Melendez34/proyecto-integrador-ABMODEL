package com.generation.demo.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.demo.models.ProductosModel;
import com.generation.demo.repositories.ProductosRepository;


@Service
public class ProductosService {
private final ProductosRepository productosRepository;
	
	public ProductosService(@Autowired ProductosRepository productosRepository) {
		this.productosRepository = productosRepository;
	}
	
	
	public ArrayList<ProductosModel> obtenerDatos() {
		return (ArrayList<ProductosModel>) productosRepository.findAll();
	}
	
	
	public ProductosModel guardarDatos(ProductosModel productosModel) {
		return productosRepository.save(productosModel);
	}
	
	
	public boolean eliminarDato(Integer id) {
		try {
			productosRepository.deleteById(id);
			return true;
		}
		catch(Exception error) {
			return false;
		}
	}
	public List<ProductosModel> obtenerProductos(String nombre) {
		return productosRepository.findByNombreContaining(nombre);
	}
}
