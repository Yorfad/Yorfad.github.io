const tarjetaProyectos = document.querySelector(".cards__carrito");

tarjetaProyectos.addEventListener("click", e =>{

    const url = "carritoDeCompras/carritoDeCompras.html";

    window.location.href = url;
} )


// Seleccionamos los elementos
const menuToggle = document.getElementById('menu-toggle'); // Ícono del menú
const menu = document.getElementById('menu'); // Contenedor del menú
const header = document.getElementById('header'); // Encabezado

// Agregamos un evento al ícono para alternar el menú
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active'); // Mostrar/ocultar el menú
    header.classList.toggle('active'); // Ajustar el encabezado
    header.classList.toggle('desactive'); // Ajustar el encabezado
});


