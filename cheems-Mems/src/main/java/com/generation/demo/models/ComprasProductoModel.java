package com.generation.demo.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name = "Compras_Producto")
public class ComprasProductoModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private Integer id;
	
	@Column(name = "cantidad", nullable = false)
	private int cantidad;
	
	@Column(name = "subtotal", nullable = false, length = 255)
	private String subtotal;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "compras_id")
    @JsonProperty(access = Access.WRITE_ONLY)
	private ComprasModel compra;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JsonProperty(access = Access.WRITE_ONLY)
	private ProductosModel productos;

	public ComprasProductoModel() {

	}

	
	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public int getCantidad() {
		return cantidad;
	}


	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}


	public String getSubtotal() {
		return subtotal;
	}


	public void setSubtotal(String subtotal) {
		this.subtotal = subtotal;
	}


	public ComprasModel getCompra() {
		return compra;
	}


	public void setCompra(ComprasModel compra) {
		this.compra = compra;
	}


	public ProductosModel getProductos() {
		return productos;
	}


	public void setProductos(ProductosModel producto) {
		this.productos = producto;
	}


	@Override
	public String toString() {
		return "ComprasProductoModel [id=" + id + ", cantidad=" + cantidad + ", subtotal=" + subtotal + ", productos="
				+ productos + "]";
	}

	


	
	
	
}
