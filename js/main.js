const productos = [
    {
      id: "remera-01",
      titulo:"Remera-01",
      categorias:{
        nombre:"Remeras",
        id: "remeras",

      },
      precio: 900     
    },
    {
        id: "remera-02",
        titulo:"Remera-02",
        categorias:{
          nombre:"Remeras",
          id: "remeras",
  
        },
        precio: 1200     
    },
    {
        id: "remera-03",
        titulo:"Remera-03",
        categorias:{
          nombre:"Remeras",
          id: "remeras",
  
        },
        precio: 1500     
    },
    {
        id: "remera-04",
        titulo:"Remera-04",
        categorias:{
          nombre:"Remeras",
          id: "remeras",
  
        },
        precio: 1100     
    },
    {
        id: "pantalon-01",
        titulo:"Pantalon-01",
        categorias:{
          nombre:"Pantalones",
          id: "pantalones",
  
        },
        precio: 2000     
    },
    {
        id: "pantalon-02",
        titulo:"Pantalon-02",
        categorias:{
          nombre:"Pantalones",
          id: "pantalones",
  
        },
        precio: 2500     
    },
    {
        id: "pantalon-03",
        titulo:"Pantalon-03",
        categorias:{
          nombre:"Pantalones",
          id: "pantalones",
  
        },
        precio: 1000     
    },
    {
        id: "pantalon-04",
        titulo:"Pantalon-04",
        categorias:{
          nombre:"Pantalones",
          id: "pantalones",
  
        },
        precio: 1000     
    },
    {
        id: "zapatilla-01",
        titulo:"Zapatilla-01",
        categorias:{
          nombre:"Zapatillas",
          id: "zapatillas",
  
        },
        precio: 1000     
    },
    {
        id: "zapatilla-02",
        titulo:"zapatilla-02",
        categorias:{
          nombre:"Zapatillas",
          id: "zapatillas",
  
        },
        precio: 1000     
    },
    {
        id: "zapatilla-03",
        titulo:"Zapatilla-03",
        categorias:{
          nombre:"Zapatillas",
          id: "zapatillas",
  
        },
        precio: 1000     
    },
    {
        id: "zapatilla-04",
        titulo:"Zapatilla-04",
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