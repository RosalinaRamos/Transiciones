// Espera hasta que todo el contenido de la página esté cargado (incluyendo imágenes y otros recursos)
document.addEventListener('DOMContentLoaded', () => {
    
    // Selecciona todas las imágenes del carrusel y las guarda en una variable
    const carouselImages = document.querySelectorAll('.carousel img');
    
    // Selecciona todos los bloques de contenido del carrusel
    const carouselContents = document.querySelectorAll('.carousel-content');
    
    // Selecciona todos los puntos indicadores (dots) del carrusel
    const dots = document.querySelectorAll('.carousel-indicators .dot');
    
    // Inicializa el índice actual del carrusel en 0, que corresponde a la primera imagen
    let currentIndex = 0;

    // Función para mostrar una diapositiva específica del carrusel según el índice pasado
    function showSlide(index) {
        // Quita las clases 'active' y 'active-content' de la imagen y el contenido actual
        carouselImages[currentIndex].classList.remove('active');
        carouselContents[currentIndex].classList.remove('active-content');
        
        // Quita la clase 'active-dot' del punto indicador actual
        dots[currentIndex].classList.remove('active-dot');

        // Actualiza el índice actual al nuevo índice pasado como argumento
        currentIndex = index;

        // Agrega las clases 'active' y 'active-content' a la nueva imagen y contenido
        carouselImages[currentIndex].classList.add('active');
        carouselContents[currentIndex].classList.add('active-content');
        
        // Agrega la clase 'active-dot' al nuevo punto indicador
        dots[currentIndex].classList.add('active-dot');
    }

    // Recorre cada punto indicador del carrusel y agrega un evento 'click'
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Al hacer clic en un punto, muestra la diapositiva correspondiente
            showSlide(index);
        });
    });

    // Configura un temporizador para cambiar automáticamente la diapositiva cada 5 segundos
    setInterval(() => {
        // Calcula el índice de la siguiente diapositiva. Si es la última, vuelve a la primera.
        const nextIndex = (currentIndex + 1) % carouselImages.length;
        // Muestra la diapositiva siguiente
        showSlide(nextIndex);
    }, 5000); // 5000 milisegundos = 5 segundos
});
