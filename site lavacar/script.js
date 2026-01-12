/* Voltar ao topo */
const btnTopo = document.getElementById('topo');

if (btnTopo) {
  window.addEventListener('scroll', () => {
    btnTopo.style.display = window.scrollY > 400 ? 'block' : 'none';
  });

  btnTopo.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* Scroll suave no menu */
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const alvo = document.querySelector(link.getAttribute('href'));
    if (alvo) {
      alvo.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
