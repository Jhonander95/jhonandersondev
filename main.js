console.log('Hola');
const sections = document.querySelectorAll('section');

let enableAnimation = true;

// Función para controlar el comportamiento de los botones de navegación
const navigate = () => {
  enableAnimation = false;
  // Código para navegar entre secciones
  setTimeout(() => {
    enableAnimation = true;
  }, 1000); // Tiempo en milisegundos antes de habilitar la animación nuevamente
};

// Evento de scroll
window.addEventListener('scroll', () => {
  if (!enableAnimation) return;
  // Código para la animación
});

window.addEventListener('scroll', () => {
  for (let i = 0; i < sections.length; i++) {
    let section = sections[i];
    if (section.offsetTop - window.innerHeight / 2  < window.pageYOffset) {
        section.scrollIntoView({ behavior: 'smooth' });
        console.log(section.id)
    }
  }
});