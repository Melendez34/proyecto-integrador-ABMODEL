const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("#mysearch")


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
            header.textContent = user.nombre; 
            body.textContent = user.precio; 
            userCardContainer.append(card)
            return{name: user.nombre, email: (""+user.precio), element: card}
        });
        
    })