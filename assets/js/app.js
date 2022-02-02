

//const 

function insertarNav(){
  const var_nav= document.querySelector("header");
    var_nav.innerHTML=`<nav class="navbar-expand-md navbar-light  bg-light">        
<div class="row ">
  <div class="col-md-7 justify-content-center d-flex">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
  <div class="col-md-3">
      <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <form class="busqueda">
        <img class="icon" src="assets/img/211817_search_strong_icon.svg" alt="">
        <input  type="search" placeholder="Search">
        
      </input>
       
      </form>
      <span>Carrito</span>
      
  </div>
</div>
</nav>
<nav class="navbar navbar-expand-md navbar-light color-principal">
<div class="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>    
  </ul>
</div> 
</nav>`;
}

export{
    //var_nav,
    insertarNav
} 

/*]
let n=.5;
let suma=0;
for(i=n;i>0;i--){
  suma+=i;
}
console.log("funcion: "+suma,"ecuacion: "+(n*n+n)/2,((n*n+n)/2)-suma);
*/
