
const rings = document.querySelector('.rings');

document.addEventListener("DOMContentLoaded", () => {
  
  window.addEventListener('mousemove', (e) => {
    rings.style.setProperty('--rotateX', `${e.clientY / window.innerHeight * -60 + 30}deg`);
    rings.style.setProperty('--rotateY', `${e.clientX / window.innerWidth * 60 - 30}deg`);
  });
});


Resources1× 0.5× 0.25×Rerun