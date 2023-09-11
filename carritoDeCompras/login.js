document.querySelector('.section__formulario--log-in').classList.toggle('visible');

const cambiarFormulario = (action) =>{
    if (action === 'login') {
        document.querySelector('.section__formulario--log-in').classList.toggle('visible');
        document.querySelector('.section__formulario--sign-up').classList.toggle('visible');
        
    } else if (action === 'signup') {
        document.querySelector('.section__formulario--sign-up').classList.toggle('visible');
        document.querySelector('.section__formulario--log-in').classList.toggle('visible');
    } else {
        console.log("error")
    }
}

const iconoMenu = document.querySelector(".menu__icono--menu");
const menuDesplegable = document.querySelector(".menu__nav--desplegable")
const menuDesplegableFondo = document.querySelector(".menu-desplegable__fondo")


const toggleMenu = () => {
    menuDesplegable.classList.toggle("visible");
    menuDesplegableFondo.classList.toggle("visible");
    document.body.style.overflow = menuDesplegable.classList.contains("visible") ? "hidden" : "auto";
};
  
iconoMenu.addEventListener("click", toggleMenu);
menuDesplegableFondo.addEventListener("click", toggleMenu);


// Obtener referencia al formulario






const botonSingUp = document.getElementById('boton-sign-up');

botonSingUp.addEventListener('click', (e) => {
    e.preventDefault();
    const firstName = document.getElementById('nombre-sign-up').value;
    const lastName = document.getElementById('apellido-sign-up').value;
    const email = document.getElementById('correo-sign-up').value;
    const contraseña = document.getElementById('contraseña-sign-up').value;
    const confirmarContraseña = document.getElementById('confirmarContraseña-sign-up').value;

    if(validarContraseña(contraseña, confirmarContraseña)){
        console.log("se esta creando el usuario")
        const usuario = {
            firstName,
            lastName,
            email,
            contraseña,
            confirmarContraseña
        };

        guardarUsuario(usuario);
        formulario.reset();
    }
})



const inputContraseña = document.getElementById('contraseña-sign-up')
const inputConfirmarContraseña = document.getElementById('confirmarContraseña-sign-up')
const inputsContraseñas = document.querySelectorAll(".contraseña");


inputsContraseñas.forEach(input =>{
    input.addEventListener("input", () =>{
        input.classList.add("incorrecto")

        if(inputContraseña.value === inputConfirmarContraseña.value){
            inputConfirmarContraseña.classList.add("correcto");
            inputConfirmarContraseña.classList.remove("incorrecto");
        }
        
        if (input.id == "contraseña-sign-up" && /(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&¿?*])(?=.{8,})/.test(inputContraseña.value)) {
            inputContraseña.classList.add("correcto");
            inputContraseña.classList.remove("incorrecto");
        }

        else if (inputContraseña.value === inputConfirmarContraseña.value) {
            inputConfirmarContraseña.classList.add("correcto");
            inputConfirmarContraseña.classList.remove("incorrecto");
        }

        else{
            input.classList.add("incorrecto");
            input.classList.remove("correcto");
        }
    })
})


const formulario = document.querySelector(".sign-up");

const validarContraseña = (contraseña, confirmarContraseña)=> {

    console.log("Se esta validando la contraseña")
    
    if (/(?=.*[A-Z])(?=.*[!@#$%^&¿?*])(?=.{8,})/.test(contraseña) && contraseña === confirmarContraseña) {
        console.log("Se esta validando la contraseña en el if")
        inputContraseña.classList.toggle("correcto");
        inputConfirmarContraseña.classList.toggle("correcto");
        return true;
    }

    else if(!/(?=.*[A-Z])(?=.*[!@#$%^&¿?*])(?=.{8,})/.test(contraseña)){
        console.log("Se esta validando la contraseña en el wlse if 1")
        inputContraseña.classList.toggle("incorrecto");
        return false;
    }

    else if(!contraseña !== confirmarContraseña){
        console.log("Se esta validando la contraseña en el wlse if 2")
        inputConfirmarContraseña.classList.toggle("incorrecto");
        return false;
    }

    else{
        console.log("Se esta validando la contraseña en el wlse")
        return false;
    }
}





async function guardarUsuario(usuario) {

    console.log("Se esta enviando el usuario")
    try {
        const response = await fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
}
  
