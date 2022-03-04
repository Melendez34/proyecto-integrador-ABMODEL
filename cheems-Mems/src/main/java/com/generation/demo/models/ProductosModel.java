package com.generation.demo.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name = "Productos")
public class ProductosModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private Integer id;
	
	@Column(nullable = false, length = 255)
	private String nombre;
	
	@Column(name = "Precio", nullable = false)
	private int precio;
	
	@Column(name = "Cantidad_inventario", nullable = false)
	private int cantidad_inventario;
	
	@Column(unique = true, nullable = false)
	private String valor;
	
	@Column(length = 255)
	private String img;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre_producto) {
		this.nombre = nombre_producto;
	}

	public int getPrecio() {
		return precio;
	}

	public void setPrecio(int precio) {
		this.precio = precio;
	}

	public int getCantidad_inventario() {
		return cantidad_inventario;
	}

	public void setCantidad_inventario(int cantidad_inventario) {
		this.cantidad_inventario = cantidad_inventario;
	}
	
	public String getValor() {
		return valor;
	}

	public void setValor(String valor) {
		this.valor = valor;
	}
	
	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	@Override
	public String toString() {
		return "ProductosModel [id=" + id + ", nombre_producto=" + nombre + ", precio=" + precio
				+ ", cantidad_inventario=" + cantidad_inventario + "]";
	}
	
	
}
