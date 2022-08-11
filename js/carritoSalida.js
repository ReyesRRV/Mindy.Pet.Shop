arrayCarrito = JSON.parse(localStorage.getItem("id"));

api = ('https://apipetshop.herokuapp.com/api/articulos')
fetch(api)
    .then((res) => res.json())
    .then((data) => pushArray(data))



    arrayCarrito = JSON.parse(localStorage.getItem("id"));
    console.log(arrayCarrito);


//     const elemento = pushArray.response.find(item => item.id == id)






// function pushArray(arraytable){
//     let table1 = document.getElementById('tabledatos1')
    // let taDataNombre = arraytable.response.filter(e=> e.nombre ===  )
// }


// function cargarCarrito() {
//     // ¿Existe un carrito previo guardado en LocalStorage?
//     if (localStorage.getItem("id") !== null) {
//       // Carga la información
//       arrayCarrito = JSON.parse(localStorage.getItem("id"));
//       console.log(arrayCarrito);
//     }
//   }


// info = []

// const api = 'https://amazing-events.herokuapp.com/api/events'
// fetch(api)
//   .then((res) => res.json())
//   .then((data) => {
//     info = data.events
//   const queryString = location.search
//   const params = new URLSearchParams(queryString)
  
//   const id = params.get("id")
  
//   const elemento = info.find(item => item._id == id)
  
  
//   const main = document.getElementById("containerCard")
//   let cartagrande = document.createElement('div')
//   cartagrande.className = "card mb-3 d-flex"
//   cartagrande.style.width= "600px"
//   cartagrande.innerHTML = 
        
//         `<img src="${elemento.image}" class="card-img-top" alt="...">
//         <div class="card-body card-body bg-dark text-white justify-content-center" >
//           <h5 class="card-title">${elemento.name}</h5>
//           <p class="card-text">${elemento.date}</p>
//           <p class="card-text">${elemento.category}</p>
//           <p class="card-text">${elemento.place}</p>
//           <p class="card-text">${elemento.capacity}</p>
//           <p class="card-text">${Object.keys(elemento)[8]}: ${elemento.assistance || elemento.estimate} </p>
//           <p class="card-text">$ ${elemento.price}</p
//           <p class="card-text"><small class="text-muted"></small></p>
//           </div>`
//       main.appendChild(cartagrande)
// })