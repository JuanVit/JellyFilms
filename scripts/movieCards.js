let acumulador = ``;
let totalCarrito = 0;

//Objetos
class producto{
    constructor(id, nombre, precio, imagen, genero){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio; 
        this.imagen = imagen;
        this.genero = genero;  
    }
}
const productos = [new producto(1, 'Spider-Man: Far From Home', 2000, `https://i.pinimg.com/originals/eb/f1/47/ebf147371216617098a1fa94e2a121e6.jpg`, `aventura`),
                    new producto(2, 'Nobody', 1600, `https://www.joblo.com/assets/images/joblo/posters/2021/01/nobody-NBD_Teaser1Sheet5_rgb.jpg`, `accion` ) , 
                    new producto(3, 'John Wick: Parabellum', 4500, 'https://i0.wp.com/noescinetodoloquereluce.com/wp-content/uploads/2019/05/cartel-final-final-JOHN-WICK-3.jpg?resize=800%2C1153&ssl=1', `accion`)];

//Productos Home

    let mostrarCards = (array) =>{
        let mostrarCards = document.getElementById(`contenedorCards`);
        mostrarCards.innerHTML = ``;
        array.forEach((producto) => {
            mostrarCards.innerHTML +=
            `<div class="col-12 col-md-2 px-1">
            <div class="card card-movie">
                <img src="${producto.imagen}" class="img-card" alt="..." height="250">
                <div class="card-body">
                    <button id= "agrearMiLista" class="btn btn-primary" onclick='agregarLista(${producto.id})'>Agregar a Mi Lista</button>
                </div>
            </div>
            </div>`
            })
        }
    mostrarCards(productos);