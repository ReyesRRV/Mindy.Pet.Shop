const API = fetch("https://apipetshop.herokuapp.com/api/articulos")
const datosApi = async() => {
    try{
        res = await API
        arrayApi = await res.json()
        juguetes = arrayApi.response.filter(e => e.tipo == "Juguete")
        console.log(juguetes)
        cardGenerator(juguetes)
        let botonComprar = document.querySelectorAll("button");
        botonComprar.forEach((boton) => boton.addEventListener("click", pushCarrito))
    }catch(err){
        console.log(err)
    }
}
datosApi()

//CARDS
let cardsCont = document.getElementById("cont_juguetes")
function cardGenerator(array){
   cardsCont.innerHTML = ''
    array.forEach(art=>{
        let card = document.createElement ('div')
        card.className = 'card'
        card.innerHTML = `
        <img class="card-img" id="foto" src="${art.imagen}" alt="Imagen de ${art.nombre}">
        <div class="card-info">
            <p class="text-title">${art.nombre}</p>
            <p class="text-body">${art.descripcion}</p>
        </div>
        <div class="card-footer">
            <span class="text-title">Stock: ${art.stock}</span>
            <span class="text-title">$${art.precio}</span>
            <button class="card-button" id="${art._id}">
                <img src="./asset/img/pngwing.com.png" style="width: 1.5rem; alt="boton comprar" id="${art._id}">
            </button>
        </div>`
        cardsCont.appendChild(card)
    });
}

function pushCarrito(boton) {
    let arrayCarrito = []
    let clicked = boton.target.id
    let item = juguetes.find((e) => e._id == clicked)
    console.log(item)
    if(item.stock > 0){
        item.stock = -- item.stock
        console.log("Si")
        arrayCarrito.push(item)
    }else {
        console.log("No")
        alert("Agotado el producto")
    }
    console.log(arrayCarrito)
}