let acumulador = ``;
let totalCarrito = 0;

//Objetos
class producto{
    constructor(nombre, precio, imagen, genero){
        this.nombre = nombre;
        this.precio = precio; 
        this.imagen = imagen;
        this.genero = genero;  
    }
}

const productoUno = new producto(`Spider-Man: Far From Home`, 2000, `https://i.pinimg.com/originals/eb/f1/47/ebf147371216617098a1fa94e2a121e6.jpg`, `aventura`);
const productoDos = new producto(`Nobody`, 1600, `https://www.joblo.com/assets/images/joblo/posters/2021/01/nobody-NBD_Teaser1Sheet5_rgb.jpg`, `accion` );
const productoTres = new producto(`John Wick: Parabellum`, 4500, 'https://i0.wp.com/noescinetodoloquereluce.com/wp-content/uploads/2019/05/cartel-final-final-JOHN-WICK-3.jpg?resize=800%2C1153&ssl=1', `accion`);

const productos = [productoUno, productoDos, productoTres];

//Productos Home

productos.forEach((producto) => {
    acumulador+= `<div class="col-lg-2 col-md-6 mb-4">
                    <div class="card h-100">
                        <a href="#"><img class="card-img-top" src=${producto.imagen} alt=""></a>
                        <div class="card-body">
                            <h4 class= "card-title">
                                ${producto.nombre}
                            </h4>
                            <h5>${producto.genero}</h5>
                            <h6>$ ${producto.precio}</h6>
                            <button class="button-card" onclick= agregarAlCarrito(${producto.precio})>Comprar</button>
                            <button class="button-card mt-1" onclick = calcularCuotas(${producto.precio})>Calcular cuotas</button>
                        </div>
                    </div>
                </div>`   
})
document.getElementById("productos").innerHTML = acumulador;

// Funciones


let filtrarGenero = (genero) => {
    let filtroAccion = productos.filter (el => el.genero === genero)
    console.log(filtroAccion);
}

let agregarAlCarrito = (precio) => {
    totalCarrito += precio;
    console.log(`El total del carrito es de $ ${totalCarrito}`);
}

let calcularCuotas= precio => {
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

let cantidadCuotas = () =>{
    let cantidadCuotas = Number(prompt(`Ingrese la cantidad de cuotas (3, 6 o 12)`));
    return cantidadCuotas;
}


let calcularImpuestos = (cuotas, precio) => {
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