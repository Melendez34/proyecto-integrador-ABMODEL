const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("#mysearch")
const cartas=document.querySelectorAll(".carta");

let users = []

searchInput.addEventListener("input", (e) => {
    console.log("busqueda",e.target.value.toLowerCase(),users);
    const value = e.target.value.toLowerCase();
    users.forEach(user => {
        const isVisible = 
        user.name.toLowerCase().includes(value) || 
        user.email.toLowerCase().includes(value)
        user.element.classList.toggle("hide", !isVisible)
    })
})

fetch("http://localhost:8080/productos")
    .then(res => res.json())
    .then(data => {

        users = data.map(user => {
            const card = userCardTemplate.content.cloneNode(true).children[0]
            const header = card.querySelector("[data-header]")
            const body = card.querySelector("[data-body]")
            card.id=user.valor;
            header.textContent = user.nombre; 
            body.innerHTML = "$ MXN "+user.precio+'<br>';
            let imagen=document.createElement("img");
            imagen.src="../assets/imagenes/"+user.img;
            imagen.style.Width = "100%";
            imagen.style.maxHeight = "100px";
            card.appendChild(imagen)
            card.addEventListener("click",e=>{
                aux=(e.target.id=='')?e.target.parentElement:e.target;
                a=(window.location.pathname).split("/");
                let uril="";
                k=((aux.id.toLowerCase()).includes('k_'))?(a.length-1):(a.length-2);
                for(let i = 1; i < k; i++) {
                    uril+=("/"+a[i]);
                    
                }
                let uri=(((aux.id.toLowerCase()).includes('v_'))?
                `/index.html`:
                '/tienda.html');
                window.location.pathname=uril+uri;
            });
            userCardContainer.append(card);
            return{name: user.nombre, email: (""+user.precio), element: card}
        });
        
    })