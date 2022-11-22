const fotoPersonajes = document.getElementById("imgPersonajes");
const nombrePersonaje = document.getElementById("personaje");
const nombreJugador = document.getElementById('jugador');
const btnLogin = document.getElementById('ingresar');

ingresar.addEventListener('click',()=>{
    localStorage.setItem('name', jugador.value);
});

    let jugadorNombre = localStorage.getItem('name');
    console.log(jugadorNombre);

let radios = document.querySelectorAll('button[type="radio"]');

console.log(radios);

radios.forEach(item=> {
    item.addEventListener('click', ()=>{
        localStorage.setItem('personaje', item.value);
        console.log('Eligiste al personaje '+item.value);
    })
})

function cambiarPersonaje(elemento,source){
    elemento.src = source;
 }

const familias = [{
    id:1,
    name:'homero',
    imagen: './img/homero.jpg'
}, {
    id:2,
    name:'marge',
    imagen: './img/marge.jpg'
}, {
    id:3,
    name:'bart',
    imagen: './img/bart.jpg'
}, {
    id:4,
    name:'lisa',
    imagen: './img/lisa.jpg'
}, {
    id:5,
    name:'maggie',
    imagen: './img/magie.jpg'
}]
 radios.forEach(item => {
    item.addEventListener('click', () => {
        let personajeUsuario = item.value;
        let variante = familias.find((familia) => familia.name == personajeUsuario);
        cambiarPersonaje(fotoPersonajes, variante.imagen);
    })
 });
