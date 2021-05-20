const seriesCards = document.getElementById(`seriesCards`);


const llamarApi = async (busqueda) =>{
    const resp = await fetch("https://ott-details.p.rapidapi.com/getnew?region=US&page=1", {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "21164b7e21mshe2ad8337c37e8d2p120d56jsnf10702c11407",
			"x-rapidapi-host": "ott-details.p.rapidapi.com"
		}
	})
    const data = await resp.json();
	const resultados = data.results
	let mostrarCards = document.getElementById(`contenedorCards`);
	resultados.forEach(element => {
		let img = element.imageurl;
		let title = element.title;
		console.log(resultados)
		mostrarCards.innerHTML+= `
		<div class="col-12 col-md-3 col-lg-2 cards-peliculas">
            <div class="card card-movie">
                <div class="img-container">
                    <img src="${img[0]}" class="img-card" alt="..." >
                </div>
                <div class="card-body d-flex flex-column  align-items-center">
                    <p class="movieTitle my-0">${title}</p>
                    <button type="button" class="btn btn-primary"><i class="fas fa-play-circle"></i></button>
                    <button type="button" class="btn btn-primary" id=agregarMiLista${producto.id} onclick='agregarLista(${producto.id})'><i class="fas fa-plus-circle"></i></i></button>
                    
                </div>
            </div>
            </div>
		`	
	});
}

llamarApi(); 


