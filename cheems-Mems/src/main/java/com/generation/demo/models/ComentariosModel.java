package com.generation.demo.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Comentarios")
public class ComentariosModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private Integer id;
	
	@Column(name = "Nombre", nullable = false, length = 40)
	private String nombre;
	
	@Column(name = "email", nullable = false, length = 255)
	private String email;
	
	@Column(name = "Mensaje", nullable = false)
	private String mensaje;
	
	

	public ComentariosModel() {

	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMensaje() {
		return mensaje;
	}

	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}

	@Override
	public String toString() {
		return "ComentariosModel [id=" + id + ", nombre=" + nombre + ", email=" + email + ", mensaje=" + mensaje + "]";
	}
	
	
}
