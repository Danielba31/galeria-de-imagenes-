// Selecciona todas las tarjetas de imagen
const imageCards = document.querySelectorAll('.image-card');

imageCards.forEach(card => {
  // Añade un evento de clic a cada tarjeta
  card.addEventListener('click', () => {
    const description = card.querySelector('.description');
    // Muestra/oculta la descripción al hacer clic
    if (description.style.display === 'none' || !description.style.display) {
      description.style.display = 'block';
    } else {
      description.style.display = 'none';
    }
  });
});