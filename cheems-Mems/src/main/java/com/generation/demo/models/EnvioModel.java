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
@Table(name = "Envio")
public class EnvioModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private Integer id;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "compras_id")
    @JsonProperty(access = Access.WRITE_ONLY)
	private ComprasModel compra;
	
	@Column(name = "Nombre", nullable = false, length = 255)
	private String nombre;
	
	@Column(name = "dirección", nullable = false, length = 255)
	private String direccion;
	
	@Column(name = "C_P", nullable = false, length = 6)
	private String cp;
	
	@Column(name = "Ciudad", nullable = false, length = 255)
	private String ciudad;
	
	@Column(name = "Provincia", nullable = false, length = 255)
	private String provincia;
	
	@Column(name = "No_guia", nullable = false, length = 255)
	private String no_guia;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public ComprasModel getCompra() {
		return compra;
	}

	public void setCompra(ComprasModel compra) {
		this.compra = compra;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getCp() {
		return cp;
	}

	public void setCp(String cp) {
		this.cp = cp;
	}

	public String getCiudad() {
		return ciudad;
	}

	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	}

	public String getProvincia() {
		return provincia;
	}

	public void setProvincia(String provincia) {
		this.provincia = provincia;
	}

	public String getNo_guia() {
		return no_guia;
	}

	public void setNo_guia(String no_guia) {
		this.no_guia = no_guia;
	}
	
	
}
