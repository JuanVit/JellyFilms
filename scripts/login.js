
let welcomeUser = () =>{
    username = localStorage.getItem(`username`);
    password = localStorage.getItem(`password`);
    if((username != null) && (password != null)){
        let userLogged = document.getElementById(`usuarioLoggeado`);
        userLogged.innerHTML = `<div class = "d-flex py-0"><i class="fas fa-user pr-2"></i><h1 class="pr-4 my-0" style="color: white; font-size: 16px"> ${username}</h1></div></div>`}
    }
welcomeUser()   

let ingresarUsuario = () => {
    let username = document.getElementById(`inputUsuario`).value;
    let password = document.getElementById(`inputPassword`).value;
    if((username != null && password != null) && (username != `` && password != ``)){
        localStorage.setItem(`username`, username);
        localStorage.setItem(`password`, password);
        backIndex()
    } else {
        alert(`No ha ingresado los datos correctamente`)
    }
}

let backIndex = () =>{
    window.location.href = "index.html";
}

let cerrarSesion = () =>{
    localStorage.removeItem(`password`);
    localStorage.removeItem(`username`);
    location.reload();
}



