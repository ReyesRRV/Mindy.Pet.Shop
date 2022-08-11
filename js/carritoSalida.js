arrayCarrito = JSON.parse(localStorage.getItem("id"));
console.log(arrayCarrito);

let tabla = document.getElementById("tabledatos1");
function t(array){
    let contador = 0
    let nombres = [...(new Set(array.map(events => events.nombre)))]
    let tabla1 = document.getElementById("tabledatos1")
    nombres.forEach(e=> {
        let cantidad = 0
        arrayCarrito.forEach(producto =>{
            if(e == producto.nombre){
                cantidad = ++cantidad
            }
        })
        contador = ++contador
        let artículo = arrayCarrito.find(p => p.nombre == e)
        let precioTotal = cantidad * artículo.precio
        console.log(precioTotal)
        let row = document.createElement ('tr')
        row.innerHTML = `
        <th scope="row">${contador}</th>
        <td>${e}</td>
        <td>${cantidad}</td>
        <td>${new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(artículo.precio)}</td>
        <td>${new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(precioTotal)}</td>
        `
        tabla1.appendChild(row)
    })
}
t(arrayCarrito)