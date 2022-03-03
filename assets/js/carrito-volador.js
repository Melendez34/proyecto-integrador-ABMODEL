
// Variables
const carrito = document.querySelector('.fa-cart-arrow-down');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
var articulosCarrito =(sessionStorage.getItem("carrito")==[] || sessionStorage.getItem("carrito")==null)?
new Array():JSON.parse(sessionStorage.getItem("carrito"));
const hov_carr=document.createElement('div');

hov_carr.setAttribute('style','position: fixed; border-radius:11px;transform:translate(-70%);background-color: hsl(180deg 100% 2% / 65%);')
hov_carr.classList.add("text-center");

carrito.appendChild(hov_carr);
carritoHTML();

carrito.addEventListener('click', eventoArticulo);


// Elimina el Articulo del carrito en el DOM
function eventoArticulo(e) {
     e.preventDefault();
     if(e.target.classList.contains('borrar-Articulo') ) {
          remover(e.target.getAttribute('data-id'));
          //carritoHTML();
     }else if(e.target.classList.contains('carrito') || e.target.classList.contains('fa-cart-arrow-down')){
          window.location.href = ((window.location.href.split("#")[0].split("/").includes('index.html'))?"pages/":"")+"carrito-compras.html";
     }else if(e.target.classList.contains('vaciar')){
          articulosCarrito=[];
          //carritoHTML();
     }else if(e.target.classList.contains('+')){
          sumarArticulo(e.target.getAttribute('data-id'),1);
          //carritoHTML();
     }else if(e.target.classList.contains('-')){
          restarArticulo(e.target.getAttribute('data-id'));
     }
     carritoHTML();
}
function remover(id){
     let num_id=buscar(id);
     articulosCarrito.splice(num_id,1);
     
}
function restarArticulo(id){
     let articulo=articulosCarrito[buscar(id)];
     if (articulo.cantidad>1){
          sumarArticulo(id,-1);
     }else{
          remover(id);
     }
}
function sumarArticulo(id,num){
     articulosCarrito[buscar(id)].cantidad+=num;   
}

// Muestra el Articulo seleccionado en el Carrito
function carritoHTML() {

     vaciarCarrito();
     let aux=[];
     articulosCarrito.forEach(Articulo => {
          const row = document.createElement('tr');
          row.innerHTML = `
               <td style="color:white;padding: 10px">  
                    <img src="${Articulo.imagen}" width=40>
               </td>
               <td style="color:white;padding: 6px">${Articulo.titulo.split(" ")[0]}</td>
               <td style="color:white;padding: 6px">$${(parseInt(Articulo.cantidad)*parseFloat(Articulo.precio.split(" ")[2]))}</td>
               <td style="color:white;padding: 6px;width: 110px;display: inline-block;">
               <button class="- h6" style="border-radius:50% " data-id="${Articulo.id}">➖</button>
               ${Articulo.cantidad} 
               <button data-id="${Articulo.id}" class="+ h6" style="border-radius:50%">➕</button></td>
               <td style="color:white;padding: 6px">
                    <a href="#" class="borrar-Articulo" data-id="${Articulo.id}">X</a>
               </td>
          `;
          
          hov_carr.appendChild(row);
     });
     sessionStorage.setItem("carrito",JSON.stringify(articulosCarrito));
  
     const btn1=document.createElement('span');
     const btn2=document.createElement('span');
     btn1.innerHTML=`
     <button class="btn-white text-center m-2 p-1 h4 carrito" style="border-radius:10px">
     comprar 🛒</button>`;
     btn2.innerHTML=`<button class="btn-darning text-center m-2 p-1 h4 vaciar" style="border-radius:10px">vaciar 🗑️</button>`;
     if(articulosCarrito.length>0){
          hov_carr.appendChild(btn1);
          hov_carr.appendChild(btn2);
     }
     
     //sessionStorage.setItem("carrito", JSON.stringify(articulosCarrito));

}

// Elimina los cursos del carrito en el DOM
function vaciarCarrito() {
     hov_carr.innerHTML='';
     }

function buscar(id){
     let pos=-1;
     articulosCarrito.forEach((e,i) => {
          if(e.id==id){
               pos=i;
          }
          
     });
     return pos;

}
