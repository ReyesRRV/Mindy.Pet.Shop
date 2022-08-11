// async function bringAPI() {
//     try {
//         const res = await fetch("https://apipetshop.herokuapp.com/api/articulos");
//         const data = await res.json();
//         const productsArray = data.response;
//         
//     } catch (error) {
//         console.error(error);
//     }
// }
// bringAPI();



let cartTable = document.getElementById("cartTable");


let arrayCarrito = [];

cargarCarrito();

renderizarCarrito(arrayCarrito);

function renderizarCarrito(carrito) {
    carrito.forEach(product => {
        let tr = document.createElement("tr");
        tr.innerHTML =
            `
        <td style="width: 60%" >
        <div class="item-name">
        <div class="item-image">
        <img src="${product.imagen}" style="width: 60px; height: 60px; object-fit: cover">
        </div>
        <p>${product.nombre}</p>
        </div>
        </td>
        <td></td>
        <td>${new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(product.precio)}</td>
        <td>(Falta realizar suma "subtotal")</td>
        <td>
        <button id="borrarItem" class="noselect"><span class="text">Eliminar</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
        </td>
        `
        cartTable.appendChild(tr);
    });
}





function cargarCarrito() {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (localStorage.getItem("id") !== null) {
        // Carga la información
        arrayCarrito = JSON.parse(localStorage.getItem("id"));
    }
}

console.log(arrayCarrito);

function eliminarCarrito() {
    let botonBorrar = document.querySelectorAll("#borrarItem");
    let botonClick = Array.from(botonBorrar);
    console.log(botonClick);
    
}

eliminarCarrito(arrayCarrito);