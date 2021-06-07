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
    constructor(id, img, date, plot){
        this.id = id;
        this.img = img;
        this.date = date;
        this.plot = plot
    }
}


const carouselPeliculas = [new carousel('Maya and the Last Dragon', 'Imagenes/maya-banner.jpg', 2021, "he prosperous land of Kumandra is ravaged by the Druun, evil spirits that attack and petrify the land's people and dragons. Sisu, the last dragon, concentrates her magic into a gem and banishes the Druun, reviving Kumandra's people but not the dragons..."),
        new carousel('Godzilla vs Kong', 'Imagenes/kong-banner.jpg', 2021, "Five years after Godzilla defeated King Ghidorah, Kong is monitored by Monarch within a giant dome on Skull Island. Kong is visited by Jia, the last Iwi native and Kong expert Ilene Andrews' adopted daughter, who is deaf and communicates with Kong via sign language."),
        new carousel ('Mr. Robot', 'Imagenes/mr-robot-banner.jpg', 2015, 'Mr. Robot Decoded is a special produced by USA Network exploring the technical elements of the show. The spec...')
]

let verCarousel = () =>{
    carouselPeliculas.forEach((el) =>{
        containerCarousel.innerHTML += `
            <div class="carousel-item">
                <img src="${el.img}" class="d-block w-100" alt="..." height="700">
                <div class="carousel-caption d-none d-md-block carousel-info">
                    <h5>${el.id}</h5>
                    <div class="d-flex align-items-center">
                        <p>${el.date}</p>
                        <p class="hd">HD</p>
                    </div>
                    <p class="carousel-plot">${el.plot}</p>
                    <button class="btn btn-primary btn-carousel ">Reproducir</button>
                </div>
            </div>
        `
    } )

    document.getElementsByClassName(`carousel-item`)[0].classList.add(`active`);   
}

verCarousel();
