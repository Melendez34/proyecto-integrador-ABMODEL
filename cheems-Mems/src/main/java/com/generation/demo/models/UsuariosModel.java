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

@Entity
@Table(name = "usuarios")
public class UsuariosModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private Integer id;
	
	@Column(name = "Email", nullable = false, length = 255,unique = true)
	private String email;
	
	@Column(name = "Usuario", nullable = false, length = 12)
	private String usuario;
	
	@Column(name = "Password", nullable = false, length = 255)
	private String contrasenia;
	
	@Column(name = "Telefono", nullable = false, length = 15)
	private String telefono;
	
	@OneToMany(mappedBy = "usuarios", cascade = CascadeType.ALL)
	private List<ComprasModel> compras;


	public UsuariosModel() {
		
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getContrasenia() {
		return contrasenia;
	}

	public void setContrasenia(String contrasenia) {
		this.contrasenia = contrasenia;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}
	
	public List<ComprasModel> getCompras() {
		return compras;
	}

	public void setCompras(List<ComprasModel> compras) {
		this.compras = compras;
	}

	@Override
	public String toString() {
		return "UsuariosModel [id=" + id + ", email=" + email + ", usuario=" + usuario + ", contrasenia=" + contrasenia
				+ ", telefono=" + telefono + "]";
	}
	
	

}
