const contenedorCards = document.querySelector('.contenedor-cards'); 
// html donde agregamos los productos obtenidos de la API (las que se compran)
//que es el contenedor de las cards de los productos

const templateCard = document.getElementById('template-card').content;
// TEMPLATE que usamos para poder agregar todos los productos obtenidos por la 
// API (seleccionando el card donde tenemos la estructura
// para meter la info) para agregar los producoss conforme son "comprados" 
// seleccionamos el card mediante el template por que si no no el javascript podria 
// tomar una cards ya agregada

const fragment = document.createDocumentFragment();
// frgment sin nada, puede ser usado para en cualquier funcion para un template

let carrito = {};
// sirve para el localStorage, para que la pagina recuerde que a sido agregado 
// al carrito incluso si se cierra y poder pintar los mismos

let sumarRestarCarrito = 1;
// sirve para llevar un conteo de todos los productos agregados al carrito
//!Esto se debe optimizar, es un proceso inecesario resultante de un codigo mal optizado
//!a la hora de sumar o restar en la lista del carrito de compras

const ulSubMenuPorductosDesplegable = document.getElementById("ulSubMenuPorductosDesplegable");

const ulSubMenuProductosInferior = document.getElementById("ulSubMenuProductosInferior")

document.addEventListener('DOMContentLoaded', () => {
    (async () => {
        try {
          const res = await fetch('https://dummyjson.com/products/?limit=0&skip=0');
          const data = await res.json();
          console.log(data)
          const resCategories = await fetch('https://dummyjson.com/products/categories/?limit=0');
          const dataCategories = await resCategories.json();
          
          console.log(dataCategories)
          pintarcategories(dataCategories)
          pintarCards(data.products)

        } catch (error) {
          console.error('Error al obtener los datos:', error);
        }
      })();      
});


  

  

/*
 Lo que hacemos aca es crear una funcion asincronica (esto quiere decir que no se ejecutara
 el codigo de la funcion hasta que se cumpla la promesa "await", osea hasta que recibamos 
 una respuesta del mismo, en este caso de la Api, la siguiente parte del codigo no se 
 ejecutará) por lo que con la constante res esperamos la respuesta de api.json (nuestra 
 "base de datos") hasta que esta nos devuelve los objetos dentro del mismo con un formato
 JSON, luego con la constante data hacemos otro await que esperar a que el metodo .json()
 aplicada a res convierta estos objetos JSON a objetos javascript para por ultimo dar
 la constante "data" como parametro de la funcion pintarCards con los objetos javascript

*/

const pintarcategories = e =>{
   
    e.forEach(item =>{
        const templateCategories = document.getElementById("templateCategories").content;
        const liCategories = templateCategories.getElementById("liCategories");
        liCategories.firstChild.textContent = item
        const clone = liCategories.cloneNode(true);
        fragment.appendChild(clone);
    })
    ulSubMenuProductosInferior.appendChild(fragment);
    ulSubMenuPorductosDesplegable.appendChild(fragment);
   
    console.log(ulSubMenuPorductosDesplegable)
    console.log(ulSubMenuProductosInferior)

}


const pintarCards = e => {
    e.forEach(item => { 
        templateCard.querySelector('h5').textContent = item.title;
        templateCard.querySelector('span').textContent = item.price;
        templateCard.querySelector('button').dataset.id = item.id;
        templateCard.querySelector('.img-card').setAttribute("src", item.images[0]);
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
        //? Se usa el fragment para que todos los clone (que serian todas las cards, por que esta funcion se
        //? ejecuta por cada producto que haya) se agreguen al fragment y por ultimo el fragment se agruegue 
        //? a la pagina, para no tener agregarlos uno por uno y que no se reflow (reajuste de la geometría 
        //? de la página) y un repaint (repintado de la página) por cada card que se tenga que pintar
    })
    contenedorCards.appendChild(fragment);
}

/* 
 (FUNCION) Aca en pintarCards lo que hacemos es que con la informacion de data (todos los objetos
 del api.json convertido a javascript) le damos un foreach para recorrer cada "objeto" dentro de 
 data donde tomaremos cada propiedad y meteremos su valor en el templateCard (mas especificamente
 en las CARDS que hay dentro del template) , para luego clonar el template cards y meter este 
 dentro de un fragment, esto con el objetivo que al final nuestro fragment tenga dentro de si 
 T0DOS los productos de la API como HTML (recordemos que un fragment sirve para construir una 
 parte de un documento de forma eficiente y luego agregarla al documento completo) para por ultimo
 agregar el fragment con un apeendChild a *cards* que es el contenedor donde estan se agregan todos
 los productos
*/



const setCarrito = item => {
    const producto = {
        title: item.querySelector('h5').textContent,
        precio: item.querySelector('span').textContent,
        id: item.querySelector('button').dataset.id,
        cantidad: 1
    }

    //todoVer si se puede optimizar para no tener que crear un producto e investigar por que se creo uno y como funciona

    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1;
        sumarRestarCarrito++;
    }

    //todo estamos tomando el id del producto recien creado para commproar si esta en el carrito, esto lo debemos 
    //todo corregir para comprobar con el id del card y poder comprobar si el elemento ya fue agregado antes de crear el objeto innecesariamente

    carrito[producto.id] = { ...producto }
    
}



/* 
 Creamos una funcion flecha con nombre **setCarrito** con un parametro de nombre **item** dentro de esta
 creamos un onjeto de nombre **producto** con cuatro propiedades, el titulo, el precio, el id y la cantidad
 seCarrito es usada en la funcion addCarrito (funcion que se activa cuando se agrega un producto al carrito
 desde su card), al llamar esta funcion en addVarriyo se nos da como parametro (en este caso **item**) todo
 el card del producto comprado, aso que con un "quertSelector" tomamos el **h5** para obtener el titulo del produvto
 el **p** para el precio y el **button** para el id, la cantidad se le da el valor de 1
 
 luego con un **if** tomamos el array **carrito**, donde estan todos los objetos agregados al **carritoDeCompras**
 que tiene como parametro el **id** del objeto **produvto** qie acabamos de crear, si ya hay un objeto con este 
 ^ *id** tomamos nuestro **producto** recien creado y hacemos que tome el valor del **producto** del carrito con
 el mismo id y le sumamos 1 en cantidad, de esta manera aumentamos la cantidad de nuestro **producto** local de esta 
 funcion en 1 y tambien sumamos uno en la variable **sumarRestarCarrito** al igual que antes creamos una copea
 dek producto en nuestro producto local para por ultimo llamar a **pintaeCarrito**  aumentamos la cantidad del objeto en 1
*/ 


 //*javascript para menu desplegable


const iconoMenu = document.querySelector(".menu__icono--menu");
const menuDesplegable = document.querySelector(".menu__nav--desplegable")
const menuDesplegableFondo = document.querySelector(".menu-desplegable__fondo")
const menuDesplegableProductos = document.getElementById("menuDesplegableProductos");
const menuOcultoListaProductos = document.querySelector("sub-menu-productos--desplegable");
const menulibotonesnavdesplegable = document.querySelector("menu__nav--imferior");

const toggleMenu = () => {
    menuDesplegable.classList.toggle("visible");
    menuDesplegableFondo.classList.toggle("visible");
    document.body.style.overflow = menuDesplegable.classList.contains("visible") ? "hidden" : "auto";
};
  
iconoMenu.addEventListener("click", toggleMenu);


const toggleMenuDesplegableProductos = () => {
    ulSubMenuProductosInferior.classList.toggle("visible");
    menuDesplegableFondo.classList.toggle("visible");
    document.body.style.overflow = menuDesplegable.classList.contains("visible") ? "hidden" : "auto";
};

const clickFondo = () => {
    ulSubMenuProductosInferior.classList.remove("visible");
    menuDesplegable.classList.remove("visible");
    menuDesplegableFondo.classList.toggle("visible");
};
  
iconoMenu.addEventListener("click", toggleMenu);

menuDesplegableProductos.addEventListener('click', toggleMenuDesplegableProductos);
menuDesplegableFondo.addEventListener('click', clickFondo);
