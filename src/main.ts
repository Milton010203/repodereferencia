
import './pages/store/home/home.css';
import { categorias, productos } from './data/data.ts';

const listaCategorias = document.getElementById("lista-categorias");
const listaProductos = document.getElementById("contenedor-productos");
function cargarCategorias() {
    if (!listaCategorias) return;
    categorias.forEach((el) => {
        const li = document.createElement("li");
        li.classList.add("categoria");
        li.innerHTML = `<a href="#">${el}</a>`
        listaCategorias.appendChild(li);
    });    
}

cargarCategorias();

function cargarProductos() {
    if (!listaProductos) return;
    productos.forEach((el) => {
        const li = document.createElement("li");
        li.classList.add("card");
        li.innerHTML = `
                <img src="${el.imagen}" alt="Imagen de ${el.nombre}">
                <h3>${el.nombre}</h3>
                <p>${el.descripcion}</p>
                <span>$${el.precio}</span>`
        listaProductos.appendChild(li);
    });
}

cargarProductos();