let $boton_pagar=document.querySelector('#pagar');
let $sub_total=document.querySelector('#sub-total');
let $total=document.querySelector('#total');
let $envio=document.querySelector('#envio');
let $meme_cabeza=document.getElementById('meme-cabeza');
let $meme_img=document.getElementById('meme-img');
let $label_text_tarjeta=document.querySelector("#radio-tarjeta").querySelector("label");
let $rd_btn_paypal=document.getElementById('paypal');
let $rd_btn_tarjeta=document.getElementById('tarjeta-credito');
let $tarjeta=document.querySelector('#tarjeta');
let $productos=document.querySelector('#productos');
let carrito_total=0;
dibujaCarrito();
document.addEventListener("click",(e)=>{
    if(((e.target.parentElement).parentElement).classList.contains('producto')){
        if(e.target.classList.contains('borrar-Articulo') ) {
            remover(e.target.getAttribute('data-id'));
       }else if(e.target.classList.contains('vaciar')){
            articulosCarrito=[];
            //carritoHTML();
       }else if(e.target.classList.contains('+')){
            sumarArticulo(e.target.getAttribute('data-id'),1);
            //carritoHTML();
       }else if(e.target.classList.contains('-')){
            restarArticulo(e.target.getAttribute('data-id'));
       }

    }else;

   carritoHTML();
    dibujaCarrito();
    
   
});
let medio_de_pago={
    medio:"",
    tipo:"",
    isActivo(){return $rd_btn_paypal.checked||$rd_btn_tarjeta.checked}
}
let tarjeta={
    num_tarjeta:"",
    cvv:"",
    vigencia:"",
    isCorectoCVV(tar){ 
        let patern=/[0-9]{3}/;
        return patern.test(tar.cvv);
    },
    isCorectoNum_tarjeta(tar){ 
        let secciones=tar.num_tarjeta.split("-");
        let correcto=(secciones.length==4);
        let i=0;
        while(correcto && i<secciones.length){
            correcto=(secciones[i].length==4)
            i++;
        }
        return correcto;
    },
    isCorectoVigencia(tar){
        let patern=/[0-9]{2}\/[0-9]{2}/;
        let fecha=new Date();
        let f_anio=tar.vigencia.split("/");
        let mes=parseInt(f_anio[0]);
        let anio=parseInt(f_anio[1]);
        return (mes>=fecha.getMonth() && anio>=(fecha.getFullYear()-2000) && mes<=12 && patern.test(tar.vigencia));
    },
    isCompleta(tar){
        return (tar.isCorectoNum_tarjeta(tar) && tar.isCorectoCVV(tar) && tar.isCorectoVigencia(tar))
    }

}
function crearTarjeta(){
    $tarjeta.innerHTML=`<h2>💳</h2>
    <div class="text-left p-1">
     <input id="num-tarjeta" class="h6 m1" type="text" placeholder="numero de tarjeta">
     <i class="fas"></i>
    </div>
    <div class="text-left">
    <span>
    <input id="cvv" class="h6 m-1" type="text" placeholder="cvv">
    <i class="fas"></i>
    </span>
    <span>
    <input type="text" class="h6 m-1" name="mes" id="vigencia" placeholder="mm/yy">
    <i class="fas"></i>
    </span>
    </div>
    <input type="submit" class="btn bg-dark text-white rounded p-1" value="guardar">
    <input type="reset" class="btn bg-danger text-white rounded p-1">`;
    $tarjeta.classList.add("bg-white");
    ($tarjeta.querySelector("#cvv")).setAttribute('maxlength','3');
    ($tarjeta.querySelector("#num-tarjeta")).setAttribute('maxlength','19');
    ($tarjeta.querySelector('#vigencia')).setAttribute("maxlength",'5');
    $tarjeta.addEventListener("keypress",e=>{
        let numero=/[0-9]/;
        if(!numero.test(e.key)){
            e.preventDefault(); 
        }else{
            verificarDato(e);
        }
    });
    $tarjeta.addEventListener("keyup",e=>{
        let numero=/[0-9]/;
        if(!numero.test(e.key)){
            e.preventDefault(); 
        }else{
            verificarDato(e);
        }
    });
    function verificarDato(e){
        
        let dato=e.target;
        let lugar=dato.parentElement
        switch (dato.id) {
            case 'cvv':
                tarjeta.cvv=dato.value;
                dato.value=tarjeta.cvv;
                cambiarClase(lugar,tarjeta.isCorectoCVV);
                break;
            case 'num-tarjeta':
                tarjeta.num_tarjeta=agregarCaracter(dato.value,[5,10,15],"-");
                dato.value=tarjeta.num_tarjeta;
                cambiarClase(lugar,tarjeta.isCorectoNum_tarjeta);
                break;
            case 'vigencia':
                tarjeta.vigencia=agregarCaracter(dato.value,[3],"/");
                dato.value=tarjeta.vigencia;
                cambiarClase(lugar,tarjeta.isCorectoVigencia);
                break;
        }
        console.log(tarjeta);
    }
    function agregarCaracter(texto,posiciones,simbolo){
        let resultado=(posiciones.includes(texto.length+1))?texto+simbolo:texto;
        return resultado;
        
    }
    function cambiarClase(dato,funcionValidacion){
        let lugar=dato.querySelector('.fas');
        lugar.classList.add((funcionValidacion(tarjeta))?'fa-check-circle':'fa-times-circle');
        lugar.classList.remove((!funcionValidacion(tarjeta))?'fa-check-circle':'fa-times-circle');
    }
   
    $tarjeta.addEventListener("click",(e)=>{
        let tar=e.target;
        console.log(tar);
        if(tar.type=="submit"){
            e.preventDefault();
            console.log(tarjeta)
            console.log(tarjeta.isCompleta(tarjeta));
            if(tarjeta.isCompleta(tarjeta)){
                $rd_btn_tarjeta.checked=true;
                quitarTarjeta();
                $label_text_tarjeta.innerText="********"+tarjeta.num_tarjeta.substring(15);
                dibuja_meme();
            }else{
                console.log(($tarjeta.querySelector('#cvv')).parentElement);
                cambiarClase(($tarjeta.querySelector('#cvv')).parentElement,tarjeta.isCorectoCVV);
                cambiarClase(($tarjeta.querySelector('#num-tarjeta')).parentElement,tarjeta.isCorectoNum_tarjeta);
                cambiarClase(($tarjeta.querySelector('#vigencia')).parentElement,tarjeta.isCorectoVigencia);
                
            }

        }
        
    });

}
function quitarTarjeta(){
    $tarjeta.innerHTML=``;
    $tarjeta.classList.remove("bg-warning");   
}
function dibuja_meme(){
    if(carrito_total==0.0){
        $meme_cabeza.innerText='Tu en la parte de pagos sin productos';
        $meme_img.src="../assets/img/elBuenJhon.png";
      
    }else if(carrito_total<3000){
        $meme_cabeza.innerText='Los que pagan gatos de envio';
        $meme_img.src="../assets/img/lobo.png";
       
    }else {
        $meme_cabeza.innerText='When compras mas de 3000 para no pagar envio';
        $meme_img.src="../assets/img/hombreDeNegocios.png";
    }
}
dibuja_meme();
document.getElementById('paypal').addEventListener("click",(e)=>{
    medio_de_pago.medio="paypal";
    quitarTarjeta();
    dibuja_meme();
 
});
$rd_btn_tarjeta.addEventListener("click",(e)=>{
    $rd_btn_tarjeta.checked=false;
    $rd_btn_paypal.checked=false;
    crearTarjeta();
    medio_de_pago.medio="tarjeta";
    
});
$boton_pagar.addEventListener("click",(e)=>{
    if($total.innerText<=0){
        e.stopImmediatePropagation();
        e.preventDefault();
    }else if(!medio_de_pago.isActivo()){
        $meme_cabeza.innerHTML=' <span class="logo"></span> sin saber con que vas a pagar';
        $meme_img.src="../assets/img/elBuenJhon.png";
        e.stopImmediatePropagation();
        e.preventDefault();
    }else{
        

    }
    ponerLogo();
   
});

function dibujaCarrito(){
    limpiaProductos();
    let table=$productos.querySelector('table');
    let total=0;

    articulosCarrito.forEach(Articulo => {
        let subTot=parseInt(Articulo.cantidad)*parseFloat(Articulo.precio.split(" ")[2]);
        const row = document.createElement('tr');
        const img=document.createElement('td');
        img.innerHTML=`<img src="${Articulo.imagen}" width=70 height=80>`;
        img.classList.add('p-1');
        row.appendChild(img);
        row.innerHTML += `
             
             <td class="h6" style="width:150px">${Articulo.titulo}</td>
             <td class="h6">$${subTot}</td>
             <td class="m-1" style="width:70px;height:80px; display: flex; align-items: center;">
             <button class="-" style="border-radius:50%; transform: scale(0.6);" data-id="${Articulo.id}">➖</button
             ><span class="h6">${Articulo.cantidad}</span><button
              data-id="${Articulo.id}" class="+" style="border-radius:50%; transform: scale(0.6);">➕</button></td>
             <td style="color:white;padding:2px">
                  <a href="#" class="borrar-Articulo h6" style=" transform: scale(2);" data-id="${Articulo.id}">X</a>
             </td>
        `;
        total+=subTot;
        table.appendChild(row);
   });
   $sub_total.innerText='$'+total;
   carrito_total=total;
   let envio=(total>1000)?((total<3000)?total*0.15:0):100;
   $envio.innerText='$'+envio;
   $total.innerText='$'+(total+envio);
   dibuja_meme();
}
function ponerLogo(){
    document.querySelectorAll('.logo').forEach(e=>
        e.innerHTML=`Cheems<span style="color:#f02121f3">&</span>Mems`);
}
function limpiaProductos(){
    $productos.querySelector('table').innerHTML="";
}