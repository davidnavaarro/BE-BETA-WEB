// MENÚ HAMBURGUESA

$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('.menu ul').toggleClass('show');
    });
});


// BEMETA ICON EN MOVIMIENTO


$(document).ready(function () {
    const $image = $('.moving-image');
    const $container = $('.home-container');
    
    let x = 0; // Posición inicial en el eje X
    let y = 0; // Posición inicial en el eje Y
    let dx = 2; // Velocidad en el eje X
    let dy = 2; // Velocidad en el eje Y

    function moveImage() {
        const containerWidth = $container.width();
        const containerHeight = $container.height();
        const imageWidth = $image.width();
        const imageHeight = $image.height();

        // Actualizamos las posiciones
        x += dx;
        y += dy;

        // Detectamos colisiones con los bordes del contenedor
        if (x + imageWidth > containerWidth || x < 0) {
            dx *= -1; // Invertimos la dirección horizontal
        }
        if (y + imageHeight > containerHeight || y < 0) {
            dy *= -1; // Invertimos la dirección vertical
        }

        // Aplicamos las nuevas posiciones a la imagen
        $image.css({
            transform: `translate(${x}px, ${y}px)`,
        });

        // Llamamos a la función de movimiento en el siguiente frame
        requestAnimationFrame(moveImage);
    }

    // Iniciamos el movimiento
    moveImage();
});


// LOGO MÁS PEUQEÑO EN EL MENÚ AL HACER SCROLL


document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('.dynamic-heading');

    window.addEventListener('scroll', () => {
        // Calculamos la posición de scroll
        if (window.scrollY > 50) {
            heading.classList.add('shrink'); // Aplica la clase cuando se hace scroll
        } else {
            heading.classList.remove('shrink'); // Restaura el tamaño inicial
        }
    });
});

// VENTANA MODAL

// Obtener elementos del DOM
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const submitEmailBtn = document.getElementById('submitEmailBtn');
const emailInput = document.getElementById('emailInput');

// Abrir la ventana modal al hacer clic en el botón
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Cerrar la ventana modal al hacer clic en el botón de cerrar
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar la ventana modal si se hace clic fuera de la ventana modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Acción al hacer clic en el botón "Obtener Descuento"
submitEmailBtn.addEventListener('click', () => {
    const email = emailInput.value;
    if (email) {
        alert(`¡Descuento enviado a: ${email}!`);
        modal.style.display = 'none'; // Cerrar modal después de enviar
    } else {
        alert('Por favor ingresa un correo válido');
    }
});



// LOCOMOTIVE SCROLL JS

// import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });


// CARRUSEL PRODUCTOS

$(document).ready(function() {
    $('.pr-carrusel').flickity({
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        wrapAround: true,
    });
});

