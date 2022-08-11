const remediosContainer = document.getElementById("remediosContainer");
let cards;
let arrayCarrito = [];


fetch("https://apipetshop.herokuapp.com/api/articulos")
  .then((response) => response.json())
  .then((data) => pushArray(data));

const pushArray = (data) => {
  let remedios = [...data.response.filter((e) => e.tipo == "Medicamento")];
  function mostrarCartas(array) {
    cards = "";
    array.forEach((card) => {
      cards += `<div class="card">
                <img src="${card.imagen}" class="card-img imagenes" alt="${card.nombre}">
            <div class="card-info">
            <p class="text-title">${card.nombre}</p>
            <p class="text-body">${card.descripcion}</p>
            </div>
            <div class="card-footer d-flex">
            <div class="stockID">
            <span class="text-title">Stock: ${card.stock}</span>
            </div>
            <span class="text-title">$${card.precio}</span>
            <button class="card-button botonComprar" >
            <img  src="./asset/img/pngwing.com.png" style="width: 1.5rem; alt="boton comprar" id="${card._id}">
            </button>
            </div>
        </div>`;
      remediosContainer.innerHTML = cards;
      
    });
  }
  mostrarCartas(remedios);
  cargarCarrito();

  

//////// ----------- LEER BOTÓN AGREGAR AL CARRITO ---------- /////////
  let botonComprar = document.querySelectorAll(".botonComprar");
  // console.log(botonComprar);
  botonComprar.forEach((boton) => boton.addEventListener("click", pushCarrito));

  function pushCarrito(boton) {
    let clicked = boton.target.id;

    let item = remedios.find((e) => e._id == clicked);
    // console.log(item)
    if (item.stock > 0) {
      item.stock = --item.stock;
      // console.log("Si")
      arrayCarrito.push(item._id);
      localStorage.setItem("id", JSON.stringify(arrayCarrito));
      console.log(localStorage);



// let change = item.stock = --item.stock




//       let ID = document.querySelectorAll(".stockID")
//       console.log(ID)
//       ID.innerText = '${change}'












    } else {
      console.log("No");
      alert("Agotado el producto");
    }
    // console.log(arrayCarrito)
  }

  function cargarCarrito() {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (localStorage.getItem("id") !== null) {
      // Carga la información
      arrayCarrito = JSON.parse(localStorage.getItem("id"));
      console.log(arrayCarrito);
    }
  }
};
