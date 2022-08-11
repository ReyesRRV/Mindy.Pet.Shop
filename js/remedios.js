const remediosContainer = document.getElementById("remediosContainer");
let cards;
let text = "";
const api = "https://apipetshop.herokuapp.com/api/articulos";
fetch(api)
  .then((response) => response.json())
  .then((data) => pushArray(data));

const pushArray = (data) => {
  let remedios = [...data.response.filter((e) => e.tipo == "Medicamento")];
  console.log(remedios);
  function mostrarCards(array) {
    cards = "";
    array.forEach((card) => {
      cards += `<div class="card">>
                <img src="${card.imagen}" class="card-img imagenes" alt="${card.nombre}">
            <div class="card-info">
            <p class="text-title">${card.nombre}</p>
            <p class="text-body">${card.descripcion}</p>
            </div>
            <div class="card-footer">
            <span class="text-title">Stock: ${card.stock}</span>
            <span class="text-title">$${card.precio}</span>
            <button class="card-button" id="${card._id}">
            <img  src="./asset/img/pngwing.com.png" style="width: 1.5rem; alt="boton comprar" id="${card._id}">
            </button>
            </div>
        </div>`;
      remediosContainer.innerHTML = cards;
    });
  }
  mostrarCards(remedios);
  let arrayCarrito = [];

  let botonComprar = document.querySelectorAll("button");
  console.log(botonComprar);
  botonComprar.forEach((boton) => boton.addEventListener("click", pushCarrito));

  function pushCarrito(boton) {
    let clicked = boton.target.id;
    
    let item =  remedios.find((e) => e._id == clicked);
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
};
