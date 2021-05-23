let acumulador = ``;
let totalCarrito = 0;
const home = document.getElementsByTagName("body");
const containerCarousel = document.getElementById(`carousel-container`)

//NAVBAR SCROLL
$(window).scroll(function(){
    if(window.scrollY == 0 ){
        $("#nav").removeClass(`bg-dark`);
        $("#nav").addClass(`bg-transparent`);
    }

    else{
        $(`#nav`).removeClass(`bg-transparent`);
        $(`#nav`).addClass(`bg-dark`);
    }
})

//CAROUSEL
class carousel{
    constructor(id, img){
        this.id = id;
        this.img = img;
    }
}


const carouselPeliculas = [new carousel('Maya and the Last Dragon', 'Imagenes/maya-banner.jpg'),
        new carousel('Godzilla vs Kong', 'Imagenes/kong-banner.jpg'),
        new carousel ('Mr. Robot', 'Imagenes/mr-robot-banner.jpg')
]

let verCarousel = () =>{
    carouselPeliculas.forEach((el) =>{
        containerCarousel.innerHTML += `
            <div class="carousel-item">
                <img src="${el.img}" class="d-block w-100" alt="..." height="700">
                <div class="carousel-caption d-none d-md-block carousel-info">
                    <h5>${el.id}</h5>
                    <button class="btn btn-primary btn-carousel ">Reproducir</button>
                </div>
            </div>
        `
    } )

    document.getElementsByClassName(`carousel-item`)[0].classList.add(`active`);   
}

verCarousel();
