

const listaArticulos = document.querySelector('#ventanas-voladoras');

listaArticulos.addEventListener('click', agregarArticulo);

function agregarArticulo(e) {
     e.preventDefault();
     let Articulo = e.target.parentElement;
     // Delegation para agregar-carrito
     if(Articulo.classList.contains('boton')) {
         Articulo=Articulo.parentNode.parentNode.parentNode.parentNode.parentNode;
          // Enviamos el Articulo seleccionado para tomar sus datos
          leerDatosArticulo(Articulo);
     }
}

// Lee los datos del Articulo
function leerDatosArticulo(Articulo) {
     let pos=buscar("k_"+Articulo.id);
    if(pos>=0){
        articulosCarrito[pos].cantidad++;

    }else{
        const infoArticulo = {
            imagen: Articulo.querySelector('img').src,
            titulo: Articulo.querySelector('.card-text').textContent,
            precio: Articulo.querySelector('.card-title').textContent,
            id: "k_"+Articulo.id, 
            cantidad: 1
       }
       articulosCarrito.push(infoArticulo);

    }
    carritoHTML();
}
