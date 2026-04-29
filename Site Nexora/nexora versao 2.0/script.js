const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const leadForm = document.getElementById("leadForm");

const WHATSAPP_NUMBER = "5514998029757"; // Troque pelo WhatsApp oficial da Nexora

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

leadForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const whatsapp = document.getElementById("whatsapp").value.trim();
  const email = document.getElementById("email").value.trim();
  const ramo = document.getElementById("ramo").value.trim();

  const message = `
Olá, sou ${nome}.
Quero receber um orçamento da Nexora Digital.

Meu WhatsApp: ${whatsapp}
Meu e-mail: ${email || "Não informado"}
Ramo de atuação: ${ramo}
`.trim();

  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");

  leadForm.reset();
});

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.86;

  revealElements.forEach((element) => {
    const top = element.getBoundingClientRect().top;

    if (top < trigger) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
