//array obtenido del localStorage:
let arrayCarrito = [];

function cargarCarrito() {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (localStorage.getItem("id") !== null) {
        // Carga la información
        arrayCarrito = JSON.parse(localStorage.getItem("id"));
    }
}
cargarCarrito();

//capturo el contenedor donde voy a imprimir el carrito:
let shoppingCartItemsContainer = document.querySelector(".shoppingCartItemsContainer");

function addItemToCart(arrayCarrito) {
    //recorro arrayCarrito y por cada producto imprimo un div (linea):
    arrayCarrito.forEach(product => {
        let shoppingCartRow = document.createElement("div");
        //contenido de la linea (div) del producto:
        let shoppingCartContent =
            `
            <div class="row shoppingCartItem">
                <div class="col-6">
                    <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                        <img src="${product.imagen}" style="width: 90px; height: 90px; object-fit: cover">
                        <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${product.nombre}</h6>
                    </div>
                </div>
                <div class="col-2">
                    <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                        <p class="item-price mb-0 shoppingCartItemPrice">$ ${product.precio}</p>
                    </div>
                </div>
                <div class="col-4">
                    <div
                        class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                        <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                            value="1">
                        <button class="btn btn-danger buttonDelete" type="button">X</button>
                    </div>
                </div>
            </div>
            `
            //inserto HTML desde linea 21 a 43 en shoppingCartRow (div):
            shoppingCartRow.innerHTML = shoppingCartContent;
            //imprimimos todo el contenido en el contenedor del carrito:
            shoppingCartItemsContainer.appendChild(shoppingCartRow);
            //capturo el boton con clase delete para remover items del carrito con la funcion removeShoppingCartItem:
            shoppingCartRow.querySelector(".buttonDelete").addEventListener("click",removeShoppingCartItem);
            //capturo el input de cantidad para escuchar cuando cambia y su funcion:
            shoppingCartRow.querySelector(".shoppingCartItemQuantity").addEventListener("change",quantityChanged);
    });
}
addItemToCart(arrayCarrito)

//con esta funcion actualizo el monto total de la compra:
function updateShoppingCartTotal() {
    //capturo la clase shoppingCartTotal que es donde voy a insertar el HTML dinamico con el precio total de la compra:
    let shoppingCartTotal = document.querySelector(".shoppingCartTotal");
    //capturo el item (div) de la linea 22:
    let shoppingCartItems = document.querySelectorAll(".shoppingCartItem");
    //inicializo en 0 el contador:
    let total = 0;
    //recorro cada item/producto agragado al carrito y por cada uno:
    shoppingCartItems.forEach((shoppingCartItem) => {
        //obtengo el precio de cada uno:
        let shoppingCartItemPriceElement = shoppingCartItem.querySelector(".shoppingCartItemPrice");
        //quito los simbolos y comvierto el precio a tipo Number:
        let shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace("$",""));
        //obtengo la cantidad de cada uno:
        let shoppingCartItemQuantityElement = shoppingCartItem.querySelector(".shoppingCartItemQuantity");
        //obtengo el valor actual de la cantidad:
        let shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);
        //hago la cuenta:
        total += shoppingCartItemPrice * shoppingCartItemQuantity;
    })
    //e inserto HTML a la clase shoppingCartTotal para que muestre el monto total:
    shoppingCartTotal.innerHTML = `${new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(total)}`        
}

//con esta funcion elimino los items del carrito:
function removeShoppingCartItem(event) {
    //ya estoy escuchando al boton en la linea 50, por lo que solo necesito hacer la funcion para que elimine un item.
    //me fijo que boton se clickea:
    let buttonClicked = event.target;
    //el elemento mas cercano del boton clickeado con la clase shoppingCartItem de la linea 23, se elimina:
    buttonClicked.closest(".shoppingCartItem").remove();
    //incluyo la funcion para actualizar el monto total si se elimina un producto:
    updateShoppingCartTotal();
}

//con esta funcion cambio la cantidad de productos a comprar y se actualiza el monto total:
function quantityChanged(event) {
    //me fijo cual es el input que se cambia:
    let input = event.target;
    //se limita el minimo a 1, no se puede bajar de 1(una) cantidad:
    if(input.value <= 0){
        input.value = 1;
    }
    //actualizo el monto total:
    updateShoppingCartTotal();
}