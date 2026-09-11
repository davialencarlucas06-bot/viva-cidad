/* =====================================
   MENU MOBILE
===================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

  menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    menuBtn.textContent =
      navMenu.classList.contains("active")
        ? "✕"
        : "☰";

  });

  document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

      navMenu.classList.remove("active");
      menuBtn.textContent = "☰";

    });

  });

}


/* =====================================
   BOTÃO VOLTAR AO TOPO
===================================== */

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


/* =====================================
   ACESSIBILIDADE
===================================== */

const accessBtn = document.getElementById("accessBtn");
const accessPanel = document.getElementById("accessPanel");

accessBtn.addEventListener("click", () => {

  accessPanel.classList.toggle("active");

});


const increaseFont = document.getElementById("increaseFont");
const decreaseFont = document.getElementById("decreaseFont");
const contrastBtn = document.getElementById("contrastBtn");
const readingBtn = document.getElementById("readingBtn");
const resetAccess = document.getElementById("resetAccess");


increaseFont.addEventListener("click", () => {

  document.body.classList.add("large-text");

});


decreaseFont.addEventListener("click", () => {

  document.body.classList.remove("large-text");

});


contrastBtn.addEventListener("click", () => {

  document.body.classList.toggle("high-contrast");

});


readingBtn.addEventListener("click", () => {

  document.body.classList.toggle("reading-mode");

});


resetAccess.addEventListener("click", () => {

  document.body.classList.remove(
    "large-text",
    "high-contrast",
    "reading-mode"
  );

});


/* =====================================
   CHECKLIST
===================================== */

const checkResult = document.getElementById("checkResult");
const result = document.getElementById("result");
const checks = document.querySelectorAll(".check");


checkResult.addEventListener("click", () => {

  const total = checks.length;

  const checked =
    document.querySelectorAll(".check:checked").length;

  let message = "";

  if (checked === 0) {

    message =
      "Sua cidade ainda apresenta muitos pontos que podem ser melhorados. Comece observando seu bairro e identificando os principais problemas.";

  } else if (checked <= 2) {

    message =
      `Você marcou ${checked} de ${total}. Existem boas oportunidades para melhorar a acessibilidade, segurança e mobilidade.`;

  } else if (checked <= 4) {

    message =
      `Você marcou ${checked} de ${total}. Sua região possui alguns avanços, mas ainda existem desafios importantes.`;

  } else if (checked < total) {

    message =
      `Você marcou ${checked} de ${total}. Sua região está avançando bastante! Ainda existem alguns pontos que podem melhorar.`;

  } else {

    message =
      `Você marcou ${checked} de ${total}. Excelente! Seu bairro apresenta vários elementos de uma cidade mais inclusiva e acessível.`;

  }

  result.textContent = message;
  result.style.display = "block";

});


/* =====================================
   MODAL DE IDEIAS
===================================== */

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


ideaModal.addEventListener("click", event => {

  if (event.target === ideaModal) {

    ideaModal.classList.remove("active");

    document.body.style.overflow = "";

  }

});


ideaForm.addEventListener("submit", event => {

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


/* =====================================
   ESC FECHA MODAL
===================================== */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    ideaModal.classList.remove("active");

    document.body.style.overflow = "";

    accessPanel.classList.remove("active");

  }

});


/* =====================================
   VIVAI - ASSISTENTE INTELIGENTE
===================================== */

const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");
const quickQuestions = document.querySelectorAll(".quick-questions button");


function addMessage(text, type = "ai") {

  const message = document.createElement("div");

  message.className =
    type === "user"
      ? "message user-message"
      : "message ai-message";


  const avatar = document.createElement("div");

  avatar.className = "message-avatar";

  avatar.textContent =
    type === "user"
      ? "👤"
      : "🤖";


  const content = document.createElement("div");

  content.className = "message-content";

  content.innerHTML = text;


  message.appendChild(avatar);
  message.appendChild(content);

  chatMessages.appendChild(message);

  chatMessages.scrollTop =
    chatMessages.scrollHeight;

}


/*
   BASE DE CONHECIMENTO DA VIVAI
*/

function getAIResponse(question) {

  const q = question
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");


  if (
    q.includes("envelhecimento ativo") ||
    q.includes("envelhecer")
  ) {

    return `
      <strong>Envelhecimento ativo</strong> é uma abordagem que busca melhorar a qualidade de vida durante o envelhecimento.

      <br><br>

      Ela envolve principalmente:
      <br>• saúde e bem-estar;
      <br>• segurança;
      <br>• participação social;
      <br>• autonomia;
      <br>• aprendizagem ao longo da vida.

      <br><br>

      Uma cidade bem planejada pode ajudar muito nesse processo.
    `;

  }


  if (
    q.includes("acessibilidade") ||
    q.includes("cadeirante") ||
    q.includes("rampa")
  ) {

    return `
      <strong>Acessibilidade</strong> significa reduzir ou eliminar barreiras que dificultam a participação das pessoas.

      <br><br>

      Alguns exemplos são:
      <br>♿ rampas;
      <br>🚶 calçadas adequadas;
      <br>🚌 transporte acessível;
      <br>🔊 informações acessíveis;
      <br>🚦 travessias seguras.

      <br><br>

      A ideia é permitir que o maior número possível de pessoas utilize os espaços com autonomia.
    `;

  }


  if (
    q.includes("mobilidade") ||
    q.includes("transporte") ||
    q.includes("onibus") ||
    q.includes("ônibus")
  ) {

    return `
      <strong>Mobilidade urbana</strong> é a forma como as pessoas se deslocam pela cidade.

      <br><br>

      Para melhorar a mobilidade podemos:
      <br>🚌 melhorar o transporte público;
      <br>🚶 priorizar pedestres;
      <br>🚲 criar ciclovias conectadas;
      <br>🚦 melhorar travessias e sinalização;
      <br>🌳 criar caminhos mais confortáveis.

      <br><br>

      Uma boa mobilidade oferece diferentes opções de deslocamento.
    `;

  }


  if (
    q.includes("inclus") ||
    q.includes("cidade inclusiva")
  ) {

    return `
      Uma <strong>cidade inclusiva</strong> é planejada para que diferentes pessoas possam participar da vida urbana.

      <br><br>

      Isso envolve acessibilidade física, transporte, comunicação, inclusão digital, segurança e participação da comunidade.

      <br><br>

      O objetivo é diminuir barreiras e aumentar a autonomia das pessoas.
    `;

  }


  if (
    q.includes("melhorar a cidade") ||
    q.includes("melhorar") ||
    q.includes("solucao") ||
    q.includes("soluções")
  ) {

    return `
      Existem várias formas de melhorar uma cidade.

      <br><br>

      Algumas prioridades seriam:
      <br>🌳 aumentar áreas verdes;
      <br>♿ melhorar a acessibilidade;
      <br>🚶 recuperar calçadas;
      <br>🚌 melhorar o transporte público;
      <br>💡 melhorar a iluminação;
      <br>🚲 incentivar mobilidade ativa;
      <br>🤝 aumentar a participação da população.

      <br><br>

      O ideal é identificar primeiro os problemas mais importantes de cada região.
    `;

  }


  if (
    q.includes("calçada") ||
    q.includes("calcada")
  ) {

    return `
      Calçadas são fundamentais para a mobilidade.

      <br><br>

      Uma boa calçada deve ter superfície regular, espaço suficiente para circulação, acessibilidade e conexão segura com travessias.

      <br><br>

      Também é importante evitar obstáculos que dificultem a passagem.
    `;

  }


  if (
    q.includes("idoso") ||
    q.includes("idosa") ||
    q.includes("pessoa idosa")
  ) {

    return `
      Uma cidade amigável para pessoas idosas deve facilitar a autonomia e a participação.

      <br><br>

      Isso pode incluir:
      <br>🪑 bancos para descanso;
      <br>🚶 calçadas seguras;
      <br>💡 boa iluminação;
      <br>🚌 transporte acessível;
      <br>🌳 áreas verdes;
      <br>🏥 acesso facilitado aos serviços.
    `;

  }


  if (
    q.includes("oi") ||
    q.includes("ola") ||
    q.includes("olá") ||
    q.includes("bom dia") ||
    q.includes("boa tarde") ||
    q.includes("boa noite")
  ) {

    return `
      Olá! 👋

      Sou a <strong>VivaIA</strong>, assistente do projeto VivaCidade.

      <br><br>

      Pode me perguntar sobre:
      <br>👴 envelhecimento ativo;
      <br>♿ inclusão;
      <br>🚶 acessibilidade;
      <br>🚌 mobilidade urbana;
      <br>🌳 soluções para cidades.
    `;

  }


  return `
    Essa é uma ótima pergunta! 🤖

    <br><br>

    Dentro do tema do projeto, podemos pensar em soluções envolvendo <strong>acessibilidade, envelhecimento ativo, inclusão, mobilidade, segurança e qualidade dos espaços públicos</strong>.

    <br><br>

    Tente perguntar, por exemplo:
    <br>• "O que é envelhecimento ativo?"
    <br>• "Como melhorar a mobilidade?"
    <br>• "O que é acessibilidade?"
    <br>• "Como criar uma cidade inclusiva?"
  `;

}


/* =====================================
   ENVIO DA MENSAGEM
===================================== */

function sendQuestion(question) {

  if (!question.trim()) return;

  addMessage(question, "user");

  chatInput.value = "";

  setTimeout(() => {

    const response =
      getAIResponse(question);

    addMessage(response, "ai");

  }, 500);

}


chatForm.addEventListener("submit", event => {

  event.preventDefault();

  sendQuestion(chatInput.value);

});


/* =====================================
   PERGUNTAS RÁPIDAS
===================================== */

quickQuestions.forEach(button => {

  button.addEventListener("click", () => {

    const question =
      button.dataset.question;

    sendQuestion(question);

  });

});


/* =====================================
   BOTÃO HERO → IA
===================================== */

const heroAiBtn =
  document.getElementById("heroAiBtn");

heroAiBtn.addEventListener("click", () => {

  document.getElementById("ia").scrollIntoView({
    behavior: "smooth"
  });

  setTimeout(() => {
    chatInput.focus();
  }, 700);

});


/* =====================================
   ANIMAÇÕES
===================================== */

const animatedElements =
  document.querySelectorAll(
    ".feature-card, .info-card, .mobility-card, .problem-card, .solution, .indicator, .inclusion-item"
  );


const observer =
  new IntersectionObserver(
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
      threshold: .12
    }
  );


animatedElements.forEach(element => {

  element.style.opacity = "0";

  element.style.transform =
    "translateY(25px)";

  element.style.transition =
    "opacity .6s ease, transform .6s ease";

  observer.observe(element);

});


/* =====================================
   HEADER AO ROLAR
===================================== */

const header =
  document.getElementById("header");


window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {

    header.style.boxShadow =
      "0 8px 30px rgba(16,35,31,.10)";

  } else {

    header.style.boxShadow =
      "none";

  }

});