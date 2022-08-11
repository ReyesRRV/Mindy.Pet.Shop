arrayCarrito = JSON.parse(localStorage.getItem("id"));
console.log(arrayCarrito);

let tabla = document.getElementById("tabledatos1");
function t(array){
    let nombres = [...(new Set(array.map(events => events.nombre)))]
    console.log(nombres)
    nombres.forEach(e=> {
        let cantidad = 0
        let unit = 0
        arrayCarrito.forEach(producto =>{
            if(e == producto.nombre){
                cantidad = ++cantidad
            }
            unit = producto.precio
        })
        let precioTotal = cantidad * unit
        console.log(cantidad)
        console.log(precioTotal)
    })
}

t(arrayCarrito)