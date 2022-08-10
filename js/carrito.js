let cartContainer = document.getElementById("cartContainer");

function tableRender() {
    let table = document.createElement("div");
    table.innerHTML =
        `
            <div class="item-container" >
                <div class="cart-tittle-container">
                    <h5>Carrito(1)</h5>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="item-name">
                                    <div class="item-image">
                                        <img src="">
                                    </div>
                                    <p>/p>
                                </div>
                            </td>
                            <td>$100</td>
                            <td>
                                <input type="number" class="form-control" value="1">
                            </td>
                            <td>$100</td>
                            <td>
                                <button class="noselect"><span class="text">Eliminar</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `
    cartContainer.appendChild(table);
}
tableRender();