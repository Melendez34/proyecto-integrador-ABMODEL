import { correo_Correcto,password_Segura } from "../../assets/js/funcionesValidacion.js";
let $boton_sesion=document.querySelector('#sesion');
let $mail=document.querySelector('#usuario');
let $error_mail = document.getElementById('error-mail');
let $pasword=document.querySelector('#password');
let $error_pasword=document.getElementById('error-password');
let $meme_cabeza=document.getElementById('meme-cabeza');
let $meme_img=document.getElementById('meme-img');
let $meme_pie=document.getElementById('meme-pie');
let perfil={ 
    correo:"example@correo.com",
    password:"P@55word",
    isPerfil: function(mail,password){
        return (this.correo==mail && password==this.password);
    }
}
if($error_mail.className=="vacio" && $error_pasword.className=="vacio"){
    $meme_cabeza.innerText='WHEN no llenas los campos y das click';
    $meme_img.src="https://static.promodescuentos.com/threads/content/4q1zD/638478.jpg";
    $meme_pie.innerText='E que toy chiquito';
}

$mail.addEventListener("keyup",(e)=>{
    
    let correo=correo_Correcto(e.target.value)
    $error_mail.className=(correo.esSegura)?"text-success":"text-danger";
    $error_mail.innerText=correo.mensaje;

});

$pasword.addEventListener("keyup",(e)=>{
    let passwordSegura=password_Segura(e.target.value)
    $error_pasword.className=(passwordSegura.esSegura)?"text-success":"text-danger";
    $error_pasword.innerText=passwordSegura.mensaje;


});


$boton_sesion.addEventListener("click",(e)=>{
    e.preventDefault();
    if($error_pasword.className=="text-success" && $error_mail.className=="text-success"){
        if($error_pasword.className=="text-success" && $error_mail.className=="text-success"){
            fetch('http://localhost:8080/login', {
                method: 'POST',
                body: JSON.stringify( {
                    "email":$mail.value,
                    "contrasenia":$pasword.value
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            }).then(resp => {
                const token = resp.headers.get('Authorization');
                
                if(token && token.includes('Bearer') && resp.ok) {
                    var usuario={
                        token:token,
                        id:"",
                        email:$mail.value,
                        usuario:"",
                        telef:""
                    }
                    console.log(token);
                    //url = window.location;
                    //const path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1)
                    //location.href = path +  'usuario.html';
                    fetch('http://localhost:8080/usuarios/login', {
                        method: 'POST',
                        body: JSON.stringify( {
                            "email":$mail.value,
                        }),
                        headers: {
                            'Content-type': 'application/json',
                            'Authorization':usuario.token
                        }
                        }).then(resp=>resp.json()).then(resp=>{
                            console.log(resp,resp.json());
                        });
                } else {
                    localStorage.removeItem('token');
                    Swal.fire({
                        title: 'Correo electronico o contraseña incorrecta',
                        text: 'Reintentar',
                        icon: 'error',
                        confirmButtonText: 'ok'
                    });
                    //emailError.textContent = 'Usuario o contraseña incorrecta';
                }});
        }
        
    }else{
        
        if($error_mail.className=="" || $error_pasword.className==""){
            $meme_cabeza.innerText='WHEN no rellenas campos y das click';
            $meme_img.src="https://static.promodescuentos.com/threads/content/4q1zD/638478.jpg";
            $meme_pie.innerText='E que toy chiquito';
            $error_mail.className="vacio";
            $error_pasword.className=="vacio";
        }else{
            $meme_cabeza.innerText='cuando rellenas mal los campos';
            $meme_img.src="https://static.promodescuentos.com/threads/content/4q1zD/638478.jpg";
            if($error_mail.className=="text-danger" && $error_pasword.className=="text-danger"){
                $meme_pie.innerText='E que toy chiquito y no me se mi correo ni mi correo';
            }else if($error_mail.className=="text-danger"){
                $meme_pie.innerText='E que toy chiquito y no me se mi correo';
            }else{
                $meme_pie.innerText='E que toy chiquito y no me se mi contraseña';
            }
        }
    }
    
   
});

