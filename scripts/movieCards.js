let acumulador = ``;
let totalCarrito = 0;
const home = document.getElementsByTagName("body");
const containerCarousel = document.getElementById(`carousel-container`)
//Objetos

//CAROUSEL

class carousel{
    constructor(id, img){
        this.id = id;
        this.img = img;
    }
}


const carouselPeliculas = [new carousel('Maya and the last Dragon', 'Imagenes/maya-banner.jpg'),
        new carousel('Godzilla vs Kong', 'Imagenes/kong-banner.jpg'),
        new carousel ('Mr Robot', 'Imagenes/mr-robot-banner.jpg')
]

let verCarousel = () =>{
    carouselPeliculas.forEach((el) =>{
        containerCarousel.innerHTML += `
            <div class="carousel-item">
                <img src="${el.img}" class="d-block w-100" alt="..." height="700">
                <div class="carousel-caption d-none d-md-block carousel-info">
                    <h5>${el.id}</h5>
                    <button class="btn btn-primary btn-carousel">Reproducir</button>
                </div>
            </div>
        `
    } )

    document.getElementsByClassName(`carousel-item`)[0].classList.add(`active`);   
}

verCarousel();

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
            `<div class="col-12 col-md-3 col-lg-2  cards-peliculas">
            <div class="card card-movie">
                <div class="img-container">
                    <img src="${producto.imagen}" class="img-card" alt="..." >
                </div>
                <div class="card-body d-flex align-items-center">
                    <button type="button" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Reproducir"><i class="fas fa-play-circle"></i></button>
                    <button type="button" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Agregar a Mi Lista" id="agrearMiLista" onclick='agregarLista(${producto.id})'><i class="fas fa-plus-circle"></i></i></button>
                    
                </div>
            </div>
            </div>`
            })
        }
    mostrarCards(productos);

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })