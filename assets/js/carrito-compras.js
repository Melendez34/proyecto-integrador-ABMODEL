let $boton_pagar=document.querySelector('#pagar');
let $total=document.querySelector('#total');
let $meme_cabeza=document.getElementById('meme-cabeza');
let $meme_img=document.getElementById('meme-img');
let $label_text_tarjeta=document.querySelector("#radio-tarjeta").querySelector("label");
let $rd_btn_paypal=document.getElementById('paypal');
let $rd_btn_tarjeta=document.getElementById('tarjeta-credito');
let $tarjeta=document.querySelector('#tarjeta');
let $cvv;
let $num_tarjeta;
let $vigencia;
let span_cvv;
let span_num_tarjeta;
let $btn_reset_tarjeta;
let $btn_submit_tarjeta;
let span_vigencia;

function crearTarjeta(){
    $tarjeta.innerHTML=`<h2>💳</h2>
    <div>
     <input id="num-tarjeta" class="text-principal m1" type="text" placeholder="numero de tarjeta">
    </div>
    <input id="cvv" class="text-principal m-1" type="text" placeholder="cvv">
    <input type="text" class="text-principal m-1" name="mes" id="vigencia" placeholder="mm/yy">
    <br>
    <input type="submit" class="btn btn-success rounded" value="guardar">
    <input type="reset" class="btn btn-danger rounded ">`;
    $tarjeta.classList.add("bg-warning");
    $cvv=$tarjeta.querySelector("#cvv");
    $num_tarjeta=$tarjeta.querySelector("#num-tarjeta");
    $vigencia = $tarjeta.querySelector('#vigencia');
    span_cvv=document.createElement("span");
    span_num_tarjeta=document.createElement("span");
    $btn_reset_tarjeta=$tarjeta.querySelector('input[type="reset"]');
    $btn_submit_tarjeta=$tarjeta.querySelector('input[type="submit"]');
    span_vigencia=document.createElement("span");
    $cvv.insertAdjacentElement("afterend", span_cvv);
    $num_tarjeta.insertAdjacentElement("afterend", span_num_tarjeta);
    $vigencia.insertAdjacentElement("afterend", span_vigencia);
    $cvv.value=tarjeta.cvv;
    $num_tarjeta.value=tarjeta.num_tarjeta;
    $vigencia.value=tarjeta.vigencia;

    $vigencia.addEventListener("keypress",(e)=>{
        if(span_vigencia.className=="error-label")
            $vigencia.value="";
        let numero=/[0-9]/;
        e.preventDefault();
        if(numero.test(e.key) && $vigencia.value.length<5){
            if($vigencia.value.length==2)
                $vigencia.value+="/";
            tarjeta.vigencia=$vigencia.value+e.key;
            if(tarjeta.vigencia.length==5){
                if(tarjeta.isCorectoVigencia()){
                    span_vigencia.className="correcto-label";
                    span_vigencia.innerText="✅";
                }

            }
            
        if(tarjeta.vigencia.length==2)
            tarjeta.vigencia+="/";
        $vigencia.value=tarjeta.vigencia;
                
        }
        if(!tarjeta.isCorectoVigencia()){
            span_vigencia.className="";
            span_vigencia.innerText="";
            if(tarjeta.vigencia.length==5){
                span_vigencia.className="error-label";
                span_vigencia.innerText="❌";
            }
            $vigencia.insertAdjacentElement("afterend", span_vigencia)

    }
        
    });

    $cvv.addEventListener("keypress",(e)=>{
        let numero=/[0-9]/;
        if(numero.test(e.key) && $cvv.value.length<3){
        tarjeta.cvv=$cvv.value+e.key;
        if(tarjeta.isCorectoCVV()){
                span_cvv.className="correcto-label";
                span_cvv.innerText="✅";
                $cvv.insertAdjacentElement("afterend", span_cvv);
        }
        
        }else{
            
            e.preventDefault();
        }
        if(!tarjeta.isCorectoCVV()){
            span_cvv.className="";
            span_cvv.innerText="";
            $cvv.insertAdjacentElement("afterend", span_cvv)
    }

        
    });
    $num_tarjeta.addEventListener("keypress",(e)=>{
        if(span_num_tarjeta.className=="error-label")
            $num_tarjeta.value="";
        let numero=/[0-9]/;
        e.preventDefault();
        if(numero.test(e.key) && $num_tarjeta.value.length<19){
            if($num_tarjeta.value.length==4 || $num_tarjeta.value.length==9 || $num_tarjeta.value.length==14)
                $num_tarjeta.value+="-";
            tarjeta.num_tarjeta=$num_tarjeta.value+e.key;
            if(tarjeta.isCorectoNum_tarjeta()){
                span_num_tarjeta.className="correcto-label";
                span_num_tarjeta.innerText="✅";
                $num_tarjeta.insertAdjacentElement("afterend", span_num_tarjeta);
            }
            
            if(tarjeta.num_tarjeta.length==4 || tarjeta.num_tarjeta.length==9 || tarjeta.num_tarjeta.length==14)
                $num_tarjeta.value=tarjeta.num_tarjeta+"-";
            $num_tarjeta.value=tarjeta.num_tarjeta;
                
        }
        
        if(!tarjeta.isCorectoNum_tarjeta()){
            span_num_tarjeta.className="";
            span_num_tarjeta.innerText="";
            if(tarjeta.num_tarjeta.length==19){
                span_num_tarjeta.className="error-label";
                span_num_tarjeta.innerText="❌";
            }
            $num_tarjeta.insertAdjacentElement("afterend", span_num_tarjeta);
        }
    });

    $btn_reset_tarjeta.addEventListener("click",(e)=>{
        span_cvv.innerText="";
        span_num_tarjeta.innerText="";
        span_vigencia.innerText="";
        span_cvv.className="";
        span_num_tarjeta.className="";
        span_vigencia.className="";
        tarjeta.cvv="";
        tarjeta.vigencia="";
        tarjeta.num_tarjeta="";
    
    });
    $btn_submit_tarjeta.addEventListener("click",(e)=>{
        e.stopImmediatePropagation();
        e.preventDefault();
        tarjeta.cvv=$cvv.value;
        tarjeta.num_tarjeta=$num_tarjeta.value;
        tarjeta.vigencia=$vigencia.value;
        if(tarjeta.isCompleta()){
            $rd_btn_tarjeta.checked=true;
            quitarTarjeta();
            $label_text_tarjeta.innerText="********"+tarjeta.num_tarjeta.substring(15);
            dibuja_meme();
        }else{

            if(!tarjeta.isCorectoCVV()){
                span_cvv.className="error-label";
                span_cvv.innerText="❌";
            }
            if(!tarjeta.isCorectoNum_tarjeta()){
                span_num_tarjeta.className="error-label";
                span_num_tarjeta.innerText="❌";
            }
            if(!tarjeta.isCorectoVigencia()){
                span_vigencia.className="error-label";
                span_vigencia.innerText="❌";
            }
        }
    });

}
function quitarTarjeta(){
    $tarjeta.innerHTML=``;
    $tarjeta.classList.remove("bg-warning");   
}
let medio_de_pago={
    medio:"",
    tipo:"",
    isActivo(){return $rd_btn_paypal.checked||$rd_btn_tarjeta.checked}
}
let tarjeta={
    num_tarjeta:"",
    cvv:"",
    vigencia:"",
    isCorectoCVV(){ 
        let patern=/[0-9]{3}/;
        return patern.test(this.cvv);
    },
    isCorectoNum_tarjeta(){ 
        let secciones=this.num_tarjeta.split("-");
        let correcto=(secciones.length==4);
        let i=0;
        while(correcto && i<secciones.length){
            correcto=(secciones[i].length==4)
            i++;
        }
        return correcto;
    },
    isCorectoVigencia(){
        let patern=/[0-9]{2}\/[0-9]{2}/;
        let fecha=new Date();
        let f_anio=this.vigencia.split("/");
        let mes=parseInt(f_anio[0]);
        let anio=parseInt(f_anio[1]);
        return (mes>=fecha.getMonth() && anio>=(fecha.getFullYear()-2000) && mes<=12 && patern.test(this.vigencia));
    },
    isCompleta(){return (this.isCorectoNum_tarjeta() && this.isCorectoCVV() && this.isCorectoVigencia())}

}

function dibuja_meme(){
    if(parseFloat($total.innerText)==0.0){
        $meme_cabeza.innerText='Tu en la parte de pagos sin productos';
        $meme_img.src="../assets/img/elBuenJhon.png";
      
    }else if(parseFloat($total.innerText)<1000){
        $meme_cabeza.innerText='Los que no les importa pagar gatos de envio';
        $meme_img.src="../assets/img/lobo.png";
       
    }else {
        $meme_cabeza.innerText='When compras mas de 1000 para no pagar envio';
        $meme_img.src="../assets/img/hombreDeNegocios.png";
    }
}
dibuja_meme();
$rd_btn_paypal.addEventListener("click",(e)=>{
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
        $meme_cabeza.innerText='Lorem sin saber con que vas a pagar';
        $meme_img.src="../assets/img/elBuenJhon.png";
        e.stopImmediatePropagation();
        e.preventDefault();
    }else{
        

    }
    
   
});

