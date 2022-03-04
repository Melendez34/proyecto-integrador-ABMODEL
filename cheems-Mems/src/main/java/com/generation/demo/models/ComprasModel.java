package com.generation.demo.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name = "Compras")
public class ComprasModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private Integer id;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id")
    @JsonProperty(access = Access.WRITE_ONLY)
	private UsuariosModel usuarios;
	
	@Column(name = "total", nullable = false)
	private int total;
	
	@Column(name = "Estatus", nullable = false, length = 255)
	private String Estatus;
	
	@OneToMany(mappedBy = "compra", cascade = CascadeType.ALL)
	private List<EnvioModel> envios;
	
	@OneToMany(mappedBy = "productos", cascade = CascadeType.ALL)
	private List<ComprasProductoModel> productos;


	public ComprasModel() {

	}

	

	public Integer getId() {
		return id;
	}



	public void setId(Integer id) {
		this.id = id;
	}



	public UsuariosModel getUsuarios() {
		return usuarios;
	}



	public void setUsuarios(UsuariosModel usuarios) {
		this.usuarios = usuarios;
	}



	public int getTotal() {
		return total;
	}



	public void setTotal(int total) {
		this.total = total;
	}



	public String getEstatus() {
		return Estatus;
	}



	public void setEstatus(String estatus) {
		Estatus = estatus;
	}



	public List<EnvioModel> getEnvios() {
		return envios;
	}



	public void setEnvios(List<EnvioModel> envios) {
		this.envios = envios;
	}



	public List<ComprasProductoModel> getProductos() {
		return productos;
	}



	public void setProductos(List<ComprasProductoModel> productos) {
		this.productos = productos;
	}



	@Override
	public String toString() {
		return "ComprasModel [id=" + id + ", usuario=" + usuarios + ", total=" + total + ", Estatus=" + Estatus + "]";
	}

	
	
	
}
