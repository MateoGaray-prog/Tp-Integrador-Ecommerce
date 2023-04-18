const productos = [
    {
      id: "remera-01",
      titulo:"Remeras Clásicas Nine Pack x3",
      imagen: "./Imagenes/remera-01.jpg",
      categorias:{
        nombre:"Remeras",
        id: "remeras",

      },
      precio: 900     
    },
    {
        id: "remera-02",
        titulo:"Remera Puma Blanca",
        imagen: "./Imagenes/remera-02.jpg",
        categorias:{
          nombre:"Remeras",
          id: "remeras",
  
        },
        precio: 1200     
    },
    {
        id: "remera-03",
        titulo:"Remera Puma Azul",
        imagen: "./Imagenes/remera-03.jpg",
        categorias:{
          nombre:"Remeras",
          id: "remeras",
  
        },
        precio: 1500     
    },
    {
        id: "remera-04",
        titulo:"Remera Puma Roja",
        imagen: "./Imagenes/remera-04.jpg",
        categorias:{
          nombre:"Remeras",
          id: "remeras",
  
        },
        precio: 1100     
    },
    {
        id: "pantalon-01",
        titulo:"Pantalones Nine Pack x3",
        imagen: "./Imagenes/pantalon-01.jpg",
        categorias:{
          nombre:"Pantalones",
          id: "pantalones",
  
        },
        precio: 2000     
    },
    {
        id: "pantalon-02",
        titulo:"Pantalon Reebok",
        imagen: "./Imagenes/pantalon-02.jpg",
        categorias:{
          nombre:"Pantalones",
          id: "pantalones",
  
        },
        precio: 2500     
    },
    {
        id: "pantalon-03",
        titulo:"Pantalon Puma",
        imagen: "./Imagenes/pantalon-03.jpg",
        categorias:{
          nombre:"Pantalones",
          id: "pantalones",
  
        },
        precio: 1000     
    },
    {
        id: "pantalon-04",
        titulo:"Pantalon Adidas",
        imagen: "./Imagenes/pantalon-04.jpg",
        categorias:{
          nombre:"Pantalones",
          id: "pantalones",
  
        },
        precio: 1000     
    },
    {
        id: "zapatilla-01",
        titulo:'Zapatiilas Adidas "P-Zero"',
        imagen: "./Imagenes/zapatilla-01.jpg",
        categorias:{
          nombre:"Zapatillas",
          id: "zapatillas",
  
        },
        precio: 1000     
    },
    {
        id: "zapatilla-02",
        titulo:'zapatilla-02',
        imagen: "./Imagenes/zapatilla-02.jpg",
        categorias:{
          nombre:"Zapatillas",
          id: "zapatillas",
  
        },
        precio: 1000     
    },
    {
        id: "zapatilla-03",
        titulo:"Zapatilla-03",
        imagen: "./Imagenes/zapatilla-03.jpg",
        categorias:{
          nombre:"Zapatillas",
          id: "zapatillas",
  
        },
        precio: 1000     
    },
    {
        id: "zapatilla-04",
        titulo:"Zapatilla-04",
        imagen: "./Imagenes/zapatilla-04.jpg",
        categorias:{
          nombre:"Zapatillas",
          id: "zapatillas",
  
        },
        precio: 1000     
    }
  
]; 

let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

botonesAgregar.forEach(boton => {
    boton.addEventListener("click", agregarAlCarrito);
});


let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if(productosEnCarritoLS) {
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumerito();
} else {
  productosEnCarrito = [];
}


function agregarAlCarrito (e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
  actualizarNumerito();


  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito (){
  let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0 );
  numerito.innerText = nuevoNumerito;
}

/*-------------------------------Contacto----------------------------*/ 

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_qpml0ck';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Mensaje enviado!');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});