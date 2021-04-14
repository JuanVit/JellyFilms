

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
                            <button class="btn-primary" onclick= agregarAlCarrito(${precios[i]})>Agregar al Carrito</button>
                            <button class="btn-primary mt-1" onclick = calcularCuotas(${precios[i]})>Calcular cuotas</button>
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

    console.log(`El total del carrito es de $ ${totalCarrito}`);
}

function calcularCuotas(precio){
    let cuotas = cantidadCuotas();
    let precioImpuesto = calcularImpuestos(cuotas, precio);
    switch(cuotas){
        case 3 : console.log(("Son 3 cuotas de $ ") + (precioImpuesto / 3));
        break;
        case 6 : console.log(("Son 6 cuotas de $ ") + (precioImpuesto / 6));
        break;
        case 12 : console.log(("Son 12 cuotas de $ ") + (precioImpuesto / 12));
        break;
        default: console.log(`No ha ingresado una cantidad de cuotas valida`)
    }
}

function cantidadCuotas(){
    let cantidadCuotas = Number(prompt(`Ingrese la cantidad de cuotas (3, 6 o 12)`))
    return cantidadCuotas;
}

function calcularImpuestos(cuotas, precio){
    let calcularImpuestos = 0 
    if (cuotas == 3){
        calcularImpuestos+= precio * 1.3;
    }
    else if (cuotas == 6){
        calcularImpuestos+= precio * 1.4;
    }
    else{
        calcularImpuestos+= precio * 1.5;
    }
    return calcularImpuestos;
}