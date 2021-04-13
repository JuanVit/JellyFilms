

const nombres = ["God of War", "GTA V", "Call of Duty; Modern Warafare"];
let precios = [2000, 1600, 4500];
let imagenes = ['https://images-na.ssl-images-amazon.com/images/I/813xlI-NGpL._SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/916T5H6sCtL._SL1500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81n2llGXyiL._SL1500_.jpg'];
let cardsHome = ``;
let totalCarrito = 0;
//Productos Home

for (let i = 0; i < nombres.length; i++){
    cardsHome+= `<div class="col-lg-4 col-md-6 mb-4">
                    <div class="card h-100">
                        <a href="#"><img class="card-img-top" src=${imagenes[i]} alt=""></a>
                        <div class="card-body">
                            <h4>
                                ${nombres[i]}
                            </h4>
                            <h5>$ ${precios[i]}</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                            <button class="btn-primary" onclick=${agregarAlCarrito(precios[i])}>Agregar al Carrito</button>
                            <button class="btn-primary mt-1" onclick = ${calcularCuotas(precios[i])}>Calcular cuotas</button>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                        </div>
                    </div>
                </div>`   
}

document.getElementById("productos").innerHTML = cardsHome;

function agregarAlCarrito(precio){
    totalCarrito += precio;

    document.write(`El total del carrito es de $ ${totalCarrito}`);
}

function calcularCuotas(precio){
    let cuotas = Number (prompt ("Elija la cantidad de cuotas (3, 6 o 12)"));
    let precioImpuesto = precio * 1.30;
    switch(cuotas){
        case 3 : let precioFinal = precioImpuesto / 3;
            alert(`Son 3 cuotas de $ ${precioFinal}`);
    }
    switch(cuotas){
        case 6 : let precioFinal = precioImpuesto / 6;
            alert(`Son 6 cuotas de $ ${precioFinal}`);
    }
    switch(cuotas){
        case 12 : let precioFinal = precioImpuesto / 12;
            alert(`Son 12 cuotas de $ ${precioFinal}`);
    }
}
