function correo_Correcto(text){
    let message="";
    let esSegura=false;
    let emailCorrecto = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.)[A-Z]{1,63}$/i;
    esSegura=emailCorrecto.test(text);
    message =esSegura?
        "correo válido":
        'correo incorrecto mira el ejemplo "example@correo.com"';
    return {
        esSegura:esSegura,
        mensaje:message
    };
}
function password_Segura(text){
    let minuscula = /(?=.*[a-z])/;
    let mayuscula=/(?=.*[A-Z])/;
    let numero=/(?=.*[0-9])/
    let caracter=/(?=.*[!@#\$%\^&\*])/;
    let message="";
    let esSegura=false;
    if (minuscula.test(text)) {
        if (mayuscula.test(text)) {
            if (numero.test(text)) {
                if (caracter.test(text)) {
                    if (text.length>=8) {
                        esSegura=true;
                        message= "es válida";
                    } else {
                        message= "debe acontener al menos 8 caracteres";
                    }
                } else {
                    message= "debe acontener al menos un caracter especial (!,@,#,$,%,&,*) ";
                }
            } else {
                message= "debe acontener al menos un numero";
            }
        } else {
            message= "debe acontener al menos una mayuscula";
        }
    } else {
         message= "debe acontener al menos una minuscula";
    }
    message=`La contraseña ${message}`
    return {
        esSegura:esSegura,
        mensaje:message
    };
}
export{
    correo_Correcto,
    password_Segura
}