const items = document.getElementById('items'); 
// html del carrito donde se agrega cada producto "comprado" por el usuario

const footer = document.getElementById('footer');
// html del carrito donde se grega "total de productos" con la catidad y el
// monto total de los productos, no son los productos, si no el total de estos

const templateFooter = document.getElementById('template-footer').content;
// TEMPLATE que usamos para agregar y cambiar tanto la cantidad como el monto
// total conforme se agreguen mas productos

const templateCarrito = document.getElementById('template-fila-carrito').content;
// TEMPLATE que usamos para meter la los items del carrito

const fragment = document.createDocumentFragment();
// frgment sin nada, puede ser usado para en cualquier funcion para un template

let carrito = {};
// sirve para el localStorage, para que la pagina recuerde que a sido agregado 
// al carrito incluso si se cierra y poder pintar los mismos

let sumarRestarCarrito = 1;
// sirve para llevar un conteo de todos los productos agregados al carrito
//!Esto se debe optimizar, es un proceso inecesario resultante de un codigo mal optizado
//!a la hora de sumar o restar en la lista del carrito de compras

document.addEventListener('DOMContentLoaded', e => {
    fetchData()
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito')); 
        pintarCarrito()
    }
});

/*
 Lo que hacemos aca es pirmero, crear una funcion que se ejecutara cuando el DOM o Document 
 Object Model (los scrpts del documento) cargan por completo para luego llamar a la funcion 
 de fetchData  que es la que mete a data todos los objetos de la api.json y el parametro que 
 le damos a pintarcards para que pinten los productos (cards) en la tienda, luego en el if
 con un getItem buscamos nuestro array de objetos (carrito) si da false quiere decir que no
 hay nada agregado anteriormente por el usuario y el codigo del if si se ejecuta, si devuelve true
 significa que hay objetos dentro de nuestro array de objetos carrito, entonces en la siguiente linea
 con localStorage.getItem('carrito') solicitamos el carrito del localStorage con todo lo añadido
 al carrito de compras y como es un string por que el storage solo puede almacenar string usamos
 JSON.parse() para convertirlo a objetos javascript para ingresarlo en nuestro array de objetos carrito,
 por iltimo llamamos a la funcion pintarCarrito() para que pinte los elementos dentro del carrito que
 estaban en el storage
*/



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

const pintarCarrito = () => {

    items.innerHTML = '' 
    //!cada vez que agrefamos un producto al carrito de compras esto elimina lo que habia
    //!para pintarlo todo de nuevo junto con el objeto agregado con una propiedad/metodo
    //!ineficaz, cambiar urgentemente
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelector('p').textContent = producto.cantidad
        templateCarrito.querySelector('span').textContent = producto.precio * producto.cantidad
        templateCarrito.querySelector('.boton-fila-carrito--aumentar').dataset.id = producto.id
        templateCarrito.querySelector('.boton-fila-carrito--disminuir').dataset.id = producto.id
        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })

    items.appendChild(fragment)

    console.log(fragment)

    pintarFooter()

    localStorage.setItem('carrito', JSON.stringify(carrito))
}

/* 
 La funcion pintarCards toma la parte items del html  **carritoDeCompras**
 (donde van los productos, el cuerpo) para PINTAR los mismos de la siguiente manera 

 La función pintarCarrito comienza vaciando el contenido del elemento HTML con el ID "items".
 Esto se hace con la línea items.innerHTML = '', ya que por alguna razon //*a la hora de agregar
* los productos comprados o aumentar los ya existentes en el producto (cuando usamos esta
* funcion se agregan TODOS los productos que ya se tenian mas el comprado en lugar de 
* unicamente agregar el objeto comprado

 Luego, se itera sobre los valores de cada objeto dentro de **carrito** con 
 Object.values(carrito).forEach(producto => { ... }). 

 con Object.values(carrito) obtenemos los valores de cada uno de los objetos dentro de **carrito**

 con forEach(producto lo que hacemos es crear una funcio flecha cuyo parametro es **producto**
 (producto es como el "e" que vamos a iterar, pero por temas de entendimient le ponemos producto)

 en cada iteracion tomamos a producto y vamos tomando cada valor de cada objeto para pintarlos 
 dentro del **carritoDeCompras** 

 Para cada elemento del objeto "carrito", se modifica el elemento "templateCarrito" para mostrar 
 información específica del elemento del objeto. Esto se hace con varias líneas de código que 
 utilizan el método querySelector para seleccionar elementos específicos dentro de "templateCarrito"
 y modificar sus contenidos.
 
 Una vez que se ha modificado "templateCarrito" para mostrar la información del elemento del objeto
 "carrito" actual, se crea una copia del elemento con el método cloneNode(true) y se añade a un 
 fragmento de documento con el método appendChild.

 Después de iterar sobre todos los elementos del objeto "carrito", se añade el fragmento de 
 documento al elemento "items" con items.appendChild(fragment).

 Finalmente, se llama a la función pintarFooter y se guarda el estado actual del objeto "carrito" 
 en el almacenamiento local del navegador con localStorage.setItem('carrito', JSON.stringify(carrito)).

todo    este codigo sirve para pintar los elementos comprados al carritoDeCompras, optimizable
*/



contenedorCards.addEventListener('click', e => { addCarrito(e) });

const addCarrito = e => {
    if (e.target.classList.contains('boton-card--agregar')) {
     //!OPTIMIZAR ESTE CODIGO PARA QUE SOLO SE OIGA AL BOTON AGREGAR Y NO A TODO EL CARDS DEL PRODUCTO

        setCarrito(e.target.parentElement)
        //?revisar si al dar agregar a un producto que ya esta en el carrito aumenta su cantidad y como
        //?si es asi revisar noas de este codigo, si no 
        //!ARREGLAR

        //?revisr que le damos como parametro a set carrito, si es un objeto javascript o JSON y por que
    }
    e.stopPropagation()
}

/*
 primero le añadimos un addEventListener a cards (el html que es contenedor de los productos)
 que al dar click ññamatrmos a la funcion **addCarrito** dandole como parametro el objeto 
 html que disparo el evento (guardo en ek parametro "e") la funcion **addCarrito** con
 in if revisamos el html que disparo el evento tiene la clase "boton-card--agregar" que es
 el boton para agregar el producto (si se compra por primera vez) al **carritoDeCompras**
 si se cumple, llamamos a la funcion **setCarrito** para darle como parametro el padte del
 objeto que disparo el evento, que seria el objeto html para por ultimo, dar un 
 "stopPropagation()" al objeto que disparo el evento para que se finalice la funcion
*/

items.addEventListener('click', e => { btnAumentarDisminuir(e) })

const btnAumentarDisminuir = e => {

    if (e.target.classList.contains('boton-fila-carrito--aumentar')) {
        // todoOPTIMIZAR ESTE CODIGO PARA QUE SOLO SE OIGA AL BOTON SUMAR Y NO A TODO EL CONTENEDOR ITEMS
        const producto = carrito[e.target.dataset.id]

        console.log(producto)
        producto.cantidad++ 
        sumarRestarCarrito++;
        carrito[e.target.dataset.id] = { ...producto }
        pintarCarrito()
    }

    if (e.target.classList.contains('boton-fila-carrito--disminuir')) {
        //!OPTIMIZAR ESTE CODIGO PARA QUE SOLO SE OIGA AL BOTON RESTAR Y NO A TODO EL CONTENEDOR ITEMS
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        sumarRestarCarrito--;
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        } else {
            carrito[e.target.dataset.id] = { ...producto }
        }
        pintarCarrito()
    }
    e.stopPropagation()
}

/*
 Aca al igual que arriba se le da un addEventListener que escuchara un click en items 
 (los items son los objetos ya agregados al carrito) llame a la funcion btnAumentarDisminuir
 lo que esta hace es que selecciona los botones de aumentar y disminuir del item, si se da en
 aumentar creamos una nueva constante llamada producto, aca seleccionamos al carrito (que 
 contiene todos la informacion de los productos ya agregados al carritoDeCompras como objetos) y le 
 damos parametros para seleccionar uno de ellos, primero e que es un objeto que contiene los 
 datos del evento, desde que elemento disparo el evento hasta en que parte de el se a hecho 
 click incluyendo una propiedad target que hace referencia al elemento que ha disparado el evento
 al tener el objeto que ha disparado el evento (en este caso el producto al que se le a dado 
 aumentar en el carrito) con la propiedad dataset con el parametro de id que le dimos
 nos devuelve el valor del id del elemento al cual se a dado click, lo que quiere decir
 Que si se dio click a un elemento con id uno const producto = carrito[e.target.dataset.id]
 se convierte en const producto = carrito[1] lo que nos devuelve todo el objeto con el id 1 
 por lo que producto pasa a ser el onjeto que al que se le dio aumentar, luego con  producto.cantidad++ 
 aumentamos en 1 el valor de **cantidad** de la constante **producto** en  **sumarRestarCarrito**
 aumentamos en 1 su valor, con la linea "carrito[e.target.dataset.id] = { ...producto }"
 con "carrito[e.target.dataset.id]" estamos seleccionando denuevo el objeto que disparo el 
 evento para con un "=" asignarle el valor de producto "{ ...producto }" los tres puntos
 "..." lo que hacen es crear una copea de **producto** que al ser creada tiene los valores de
  **producto** pero no es lo mismo ya que esta es independiente, por lo que si ek **producto**
 original es moduficado, la copea no sera modificada, esto con el fin de no reasignar a 
 referencia al objeto original en lugar de crear una nueva instancia del objeto
 Si no se creara una copia y se asignara el objeto original, cualquier cambio realizado en el 
 objeto en esa posición del carrito afectaría al objeto original, ya que ambos apuntarían a la 
 misma dirección en memoria. Esto puede causar problemas si se esperaba que el objeto original 
 permaneciera inmutable. Además si se estuviera utilizando ese objeto en varios lugares de la 
 aplicación y no se estuviera utilizando una copia de ese objeto cualquier cambio que se realizara 
 a ese objeto en un lugar afectaría en todos los lugares donde se estuviera utilizando ese objeto.
 En resumen, crear una copia del objeto original garantiza que los cambios realizados al objeto 
 copiado no afecten al objeto original y permite trabajar con versiones independientes del objeto 
 original.
 
 en resumen, al usar "{ ...producto }" la copea creada se añade como una nueva instancia del objeto
 original en el carrito que puede ser modificado sin inmutar al objeto orginal del carrito para poder 
 trabajar con versiones independientes del objeto original, esto se hace puesto que los objetos dentro 
 de **carrito** son  utilizados en otros lugares; lo que puede ocasionar grandes problemas, por eso al 
 esta técnica es recomendable usarla especialmente cuando se esta trabajando con objetos compuestos, 
 y es recomendado usarlo siempre cuando el objeto original es mutable y se espera que sea inmutable.
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

    carrito[producto.id] = { ...producto }
    
    //todoInvestigar carrito[producto.id] = { ...producto }
    

    pintarCarrito()
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


const pintarFooter = () => {
    footer.innerHTML = ''

    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío</th>
        `
        return
    }


 //todoHacer esto con hidden


    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, { cantidad, precio }) => acc + cantidad * precio, 0)


    templateFooter.querySelectorAll('td')[0].textContent = nCantidad

    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)

    footer.appendChild(fragment)

}

/*
  creamos una funcion flecha llamada pintar footer, que se encarga de pintar el footer del **carritoDeCompras**
  primero tomamos la constante **footer** y le damos un **innerHTML =´´** lo que hace que el footer quede vacio
 eliminando el texto **Carrito vacío**, luego creamos un **if** con Object.keys(carrito).length === 0

 con Object.keys(carrito) tomamos las propiedades, no los valores de cada objeto en carrito
 
 con .length === 0 tomamos la longitud de lo obtenido por lo anterior y lo comparamos ESTRICTAMENTE (===)
 con 0, para saber si hay objetos comprados

 si lo anterior da TRUE (no hay ningun objeto dentro de carrito y por tanto ninguno comprado) le damos un
 innerHTML al footer con el valor **<th scope="row" colspan="5">Carrito vacío</th>** con el objetivo
 de que cuando el carrito quede vacio este el mensaje de "Carrito vacio" con un return a final del 
  **if** para dar fin a toda la funcion y que esta no siga ejecutandose

 si lo anterior no se cumple contimnuamos con la declaracion de dos constantes:

 const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)

 primero declaranos la constande **nCantidad**, primero tomamos los valores de las propiedadaes cada objeto 
 dentro de carrito con **Object.values(carrito)** teniendo como resultado un array con los valores de los
 objetos
*/








 //*javascript para menu desplegable

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





  