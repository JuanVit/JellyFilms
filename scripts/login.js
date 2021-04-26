
let login= () => {
    let username = localStorage.getItem(`username`);
    let password = localStorage.getItem(`password`);
    if(username && password){
        alert(`Bienvenido ${username}`);
    }
    else{
        ingresarUsuario()
    }
}

let ingresarUsuario = () => {
    username = prompt(`Ingrese su usuario`)
    if (username != null) {
        localStorage.setItem(`username`, username);
        let password = prompt(`Ingrese su contraseña`);
        if (password != ``) {
            localStorage.setItem(`password`, password);
            alert(`Bienvenido/a ${username}`)
        } else{
            alert(`No ha ingresado una contraseña valida`)
        }
    } else{
        alert(`No ha ingresado un usuario válido`);
    }
}

