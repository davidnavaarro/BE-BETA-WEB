// MENÚ HAMBURGUESA

$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('.menu ul').toggleClass('show');
    });
});


// BEMETA ICON EN MOVIMIENTO


document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.moving-image');
    let x = 0;
    let y = 0;
    let dx = 2;
    let dy = 2;

    function moveImage() {
        const container = document.querySelector('.container');
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        const imageWidth = image.clientWidth;
        const imageHeight = image.clientHeight;

        // Cambiar posiciones
        x += dx;
        y += dy;

        // Detectar colisiones
        if (x + imageWidth > containerWidth) {
            x = containerWidth - imageWidth;
            dx *= -1;
        } else if (x < 0) {
            x = 0;
            dx *= -1;
        }

        if (y + imageHeight > containerHeight) {
            y = containerHeight - imageHeight;
            dy *= -1;
        } else if (y < 0) {
            y = 0;
            dy *= -1;
        }

        // Mover imagen
        image.style.transform = `translate(${x}px, ${y}px)`;

        requestAnimationFrame(moveImage);
    }

    moveImage();
});


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
