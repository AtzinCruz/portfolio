// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Evita el comportamiento predeterminado
            const targetId = this.getAttribute('href').substring(1); // Obtiene el ID del destino
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth', // Hace el scroll suave
                    block: 'start', // Alinea al inicio del elemento
                });
            }
        });
    });
});

