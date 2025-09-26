// ================================
// MENU RESPONSIVE
// ================================
function mostrarOcultarMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('responsive');
}

// ================================
// DROPDOWN PORTFOLIO
// ================================
function toggleDropdown(event) {
  event.preventDefault();
  const dropdown = event.target.parentElement;
  dropdown.classList.toggle('open');
}

// Cerrar dropdown al hacer clic fuera
document.addEventListener('click', function(e) {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dd => {
    if (!dd.contains(e.target)) {
      dd.classList.remove('open');
    }
  });
});

// ================================
// SMOOTH SCROLL
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Cerrar nav responsive si está abierto
    const nav = document.getElementById('nav');
    if(nav.classList.contains('responsive')){
      nav.classList.remove('responsive');
    }
  });
});

// ================================
// ANIMACIÓN DE SKILLS
// ================================
function animateSkills() {
  const skills = document.querySelectorAll('.skills .progreso');
  const triggerPoint = window.innerHeight * 1;
  
  skills.forEach(skill => {
    const rect = skill.getBoundingClientRect();
    if(rect.top < triggerPoint){
      skill.style.width = skill.dataset.value;
    }
  });
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// ================================
// APARICIÓN SECCIONES CON FADE-IN
// ================================
const faders = document.querySelectorAll('.contenido-seccion, .proyecto');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('fade-in');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ================================
// HOVER ANIMADO EN PROYECTOS
// ================================
const proyectos = document.querySelectorAll('.proyecto');
proyectos.forEach(proy => {
  proy.addEventListener('mouseenter', () => {
    proy.style.transform = 'scale(1.03)';
    proy.style.transition = 'all 0.3s ease';
    proy.style.boxShadow = '0px 10px 20px rgba(0,0,0,0.3)';
  });
  proy.addEventListener('mouseleave', () => {
    proy.style.transform = 'scale(1)';
    proy.style.boxShadow = '0px 0px 0px rgba(0,0,0,0)';
  });
});


// ================================
// BOTÓN VOLVER ARRIBA
// ================================
const btnArriba = document.querySelector('.btn-arriba');

// Inicialmente oculto
btnArriba.style.opacity = '0';
btnArriba.style.pointerEvents = 'none';
btnArriba.style.position = 'fixed';
btnArriba.style.bottom = '20px';
btnArriba.style.right = '20px';
btnArriba.style.zIndex = '100';
btnArriba.style.transition = 'opacity 0.3s, transform 0.3s';

// Mostrar u ocultar botón según scroll
window.addEventListener('scroll', () => {
  if(window.scrollY > 300){
    btnArriba.style.opacity = '1';
    btnArriba.style.pointerEvents = 'auto';
  } else {
    btnArriba.style.opacity = '0';
    btnArriba.style.pointerEvents = 'none';
  }
});

// Scroll hacia arriba al hacer clic
btnArriba.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
const toggle = document.querySelector('.modo-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
const bloques = document.querySelectorAll('.contenido-seccion > *');

const animarScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  bloques.forEach(bloque => {
    const bloqueTop = bloque.getBoundingClientRect().top;
    if(bloqueTop < triggerBottom) {
      bloque.classList.add('fade-up');
    }
  });
};

window.addEventListener('scroll', animarScroll);
animarScroll();
