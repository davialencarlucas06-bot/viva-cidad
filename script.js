// script.js

// MENU MOBILE
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    menuBtn.textContent = "✕";
  } else {
    menuBtn.textContent = "☰";
  }
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuBtn.textContent = "☰";
  });
});


// BOTÃO VOLTAR AO TOPO
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// CHECKLIST
const checkResult = document.getElementById("checkResult");
const result = document.getElementById("result");
const checks = document.querySelectorAll(".check");

checkResult.addEventListener("click", () => {

  let total = checks.length;
  let checked = document.querySelectorAll(".check:checked").length;

  let message = "";

  if (checked === 0) {
    message = "Ainda há muitos pontos para melhorar. Comece observando os problemas do seu bairro.";
  } else if (checked <= 2) {
    message = `Você marcou ${checked} de ${total}. Existem boas oportunidades para melhorar a acessibilidade e a mobilidade.`;
  } else if (checked <= 4) {
    message = `Você marcou ${checked} de ${total}. Sua região possui alguns avanços, mas ainda existem desafios importantes.`;
  } else if (checked < total) {
    message = `Você marcou ${checked} de ${total}. Sua região está avançando bastante, mas ainda há pontos que podem melhorar.`;
  } else {
    message = `Você marcou ${checked} de ${total}. Excelente! Sua cidade apresenta vários elementos de uma cidade mais inclusiva.`;
  }

  result.textContent = message;
  result.style.display = "block";
});


// MODAL DE IDEIAS
const ideaBtn = document.getElementById("ideaBtn");
const ideaModal = document.getElementById("ideaModal");
const closeModal = document.getElementById("closeModal");
const ideaForm = document.getElementById("ideaForm");
const success = document.getElementById("success");

ideaBtn.addEventListener("click", () => {
  ideaModal.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeModal.addEventListener("click", () => {
  ideaModal.classList.remove("active");
  document.body.style.overflow = "";
});

ideaModal.addEventListener("click", (event) => {
  if (event.target === ideaModal) {
    ideaModal.classList.remove("active");
    document.body.style.overflow = "";
  }
});

ideaForm.addEventListener("submit", (event) => {
  event.preventDefault();

  ideaForm.style.display = "none";
  success.style.display = "block";

  setTimeout(() => {
    ideaModal.classList.remove("active");
    document.body.style.overflow = "";

    ideaForm.reset();
    ideaForm.style.display = "block";
    success.style.display = "none";
  }, 2500);
});


// ANIMAÇÃO AO APARECER NA TELA
const animatedElements = document.querySelectorAll(
  ".info-card, .mobility-card, .problem-card, .solution, .pillar, .inclusion-item"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

animatedElements.forEach(element => {
  element.style.opacity = "0";
  element.style.transform = "translateY(25px)";
  element.style.transition = "opacity .6s ease, transform .6s ease";
  observer.observe(element);
});


// FECHAR MODAL COM ESC
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    ideaModal.classList.remove("active");
    document.body.style.overflow = "";
  }
});


// EFEITO SUAVE NO HEADER
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.style.boxShadow = "0 8px 30px rgba(16,35,31,.08)";
  } else {
    header.style.boxShadow = "none";
  }
});