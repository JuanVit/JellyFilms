let agregarLista = (id) =>{
    let miLista = [];
    let agregarPelicula = productos.find(el => el.id == id);
    miLista.push(agregarPelicula);
}

let verMiLista = () =>{
$("#carousel").remove();
document.getElementById(`sectionTitle`).innerHTML = `<strong>Mi Lista</strong>`
let miLista = document.getElementById(`contenedorCards`);

miLista.innerHTML = `<div class="col-12 col-md-2 px-1">
<div class="card card-movie">
    <p>Prueba</p>
</div>
</div>`
} 