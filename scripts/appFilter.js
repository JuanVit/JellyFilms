const selectFiltro = document.getElementById(`genero`);

let filtrarGenero = () => {
    let filtro = selectFiltro.value;
    if(filtro == `todos`){
        mostrarCards(productos)
    } else{
        mostrarCards(productos.filter( el => el.genero == filtro))
    }
}