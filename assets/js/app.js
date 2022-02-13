var correo = document.getElementById('correo');
var user = document.getElementById('user');
var password = document.getElementById('password');
var telefono = document.getElementById('telefono');
var confirm = document.getElementById('confirm');
var terminos = document.getElementById('terminos');
var error = document.getElementById('error');
error.style.color = 'red';

function enviarFormulario(){
    console.log('Enviando formulario...');

    var mensajesError = [];

    if(correo.value === null || correo.value === ''){
        mensajesError.push("Ingresa tu correo");
    }
    if(user.value === null || user.value === ''){
        mensajesError.push("Ingresa tu usuario");
        
    }

    if(telefono.value === null || telefono.value === ''){
        mensajesError.push("Ingresa tu telefono");
    }

    if(password.value === null || password.value === ''){
        mensajesError.push("Ingresa tu contraseña");
    }

    
    if(confirm.value === null || confirm.value === ''){
        mensajesError.push("Por favor, confirma tu contraseña");
    }
   
    


    error.innerHTML = mensajesError.join(". <br> ");
    return false;

}
