const API = fetch("https://apipetshop.herokuapp.com/api/articulos")
const datosApi = async() => {
    try{
        res = await API
        arrayApi = await res.json()
        juguetes = arrayApi.response.filter(e => e.tipo == "Juguete")
        cardGenerator(juguetes)
        search.addEventListener('keyup', buscar)

        let botonComprar = document.querySelectorAll("button");
        botonComprar.forEach((boton) => boton.addEventListener("click", pushCarrito))
        cargarCarrito()
        carritoNumero()
    }catch(err){
        console.log(err)
    }
}
datosApi()

//CARTAS
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
            <div class="w3-container">
            

            <div id="${art.nombre}" class="w3-modal">
              <div class="w3-modal-content w3-animate-zoom w3-card-4">
                <div class="w3-container w3-teal w3-2021-marigold">
                  <span onclick="document.getElementById('${art.nombre}').style.display='none'" 
                  class="w3-button w3-display-topright">&times;</span>
                  <h2>${art.nombre}</h2>
                </div>
                <div class="w3-container">
                  <p class="w3-sans-serif ps-2 fs-3">${art.descripcion}</p>
                </div>
                <div class="w3-container w3-teal w3-2021-marigold">
                  <p class="d-flex g-5 fs-4">Stock: ${art.stock}</p>
                </div>
              </div>
            </div>
            </div>
            <div class="card-footer">
                <button onclick="document.getElementById('${art.nombre}').style.display='block'" class="w3-button w3-2021-mint mt-1 mb-2">Ver más</button>
                <span class="text-title">$${art.precio}</span>
                <button class="card-button">
                    <img src="./asset/img/pngwing.com.png" style="width: 1.5rem; alt="boton comprar" id="${art._id}">
                </button>
            </div>
            
        </div>`
        cardsCont.appendChild(card)
    });
}
function pushCarrito(boton) {
    let clicked = boton.target.id;
    let item = juguetes.find((e) => e._id == clicked);
    if (item.stock > 0) {
      item.stock = --item.stock;
      arrayCarrito.push(item);
      localStorage.setItem("id", JSON.stringify(arrayCarrito));
      console.log(localStorage);
      carritoNumero()
    } else {
      console.log("No");
      alert("Agotado el producto");
    }
}
function cargarCarrito() {
  // ¿Existe un carrito previo guardado en LocalStorage?
  if (localStorage.getItem("id") !== null) {
    // Carga la información
    arrayCarrito = JSON.parse(localStorage.getItem("id"));
  }
}
function carritoNumero() {
  document.getElementById("botoncarrito").innerText = arrayCarrito.length
}

//BUSCADOR
let inputBox = document.getElementById('buscador')
let search = document.getElementById('btn')
function searchText(text, arrayD){
  console.log(text)
  console.log(arrayD)
    let arrayFiltrado = arrayD.filter(e =>e.nombre.toLowerCase().includes(text.trim().toLowerCase()))
}

function buscar(array){
  text = ""
  if(array.nombre.toLowerCase().includes(text.trim().toLowerCase())){

  }
}