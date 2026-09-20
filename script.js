/* =====================================
   VIVACIDADE
   IDIOMA + IDEIAS PARA A CIDADE
===================================== */

let currentLanguage =
  localStorage.getItem("vivacidadeLanguage") || "pt";

/* =====================================
   MENU MOBILE
===================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}


/* =====================================
   BOTÃO VOLTAR AO TOPO
===================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (!topBtn) return;

  if (window.scrollY > 500) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

if (topBtn) {
  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}


/* =====================================
   ACESSIBILIDADE
===================================== */

const accessBtn = document.getElementById("accessBtn");
const accessPanel = document.getElementById("accessPanel");

if (accessBtn && accessPanel) {
  accessBtn.addEventListener("click", () => {
    accessPanel.classList.toggle("active");
  });
}

const increaseFont = document.getElementById("increaseFont");
const decreaseFont = document.getElementById("decreaseFont");
const contrastBtn = document.getElementById("contrastBtn");
const readingBtn = document.getElementById("readingBtn");
const resetAccess = document.getElementById("resetAccess");

if (increaseFont) {
  increaseFont.addEventListener("click", () => {
    document.body.classList.add("large-text");
  });
}

if (decreaseFont) {
  decreaseFont.addEventListener("click", () => {
    document.body.classList.remove("large-text");
  });
}

if (contrastBtn) {
  contrastBtn.addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");
  });
}

if (readingBtn) {
  readingBtn.addEventListener("click", () => {
    document.body.classList.toggle("reading-mode");
  });
}

if (resetAccess) {
  resetAccess.addEventListener("click", () => {
    document.body.classList.remove(
      "large-text",
      "high-contrast",
      "reading-mode"
    );
  });
}


/* =====================================
   BOTÃO DE IDIOMA
===================================== */

const languageBtn = document.createElement("button");

languageBtn.id = "languageBtn";
languageBtn.className = "language-btn";
languageBtn.type = "button";

if (accessBtn && accessBtn.parentNode) {
  accessBtn.parentNode.insertBefore(languageBtn, accessBtn);
}


/* =====================================
   TRADUÇÕES
===================================== */

const translations = {

  /* HEADER */
  "Início": "Home",
  "Envelhecimento": "Aging",
  "Inclusão": "Inclusion",
  "Mobilidade": "Mobility",
  "Soluções": "Solutions",
  "Checklist": "Checklist",

  /* HERO */
  "Cidade para Todos": "A City for Everyone",
  "Uma cidade melhor começa quando todos podem participar.":
    "A better city begins when everyone can participate.",
  "Descubra como tornar sua cidade mais acessível, segura, inclusiva e preparada para o futuro.":
    "Discover how to make your city more accessible, safe, inclusive and prepared for the future.",
  "Conheça o projeto": "Discover the project",
  "Ver soluções": "See solutions",

  /* SOBRE */
  "SOBRE O PROJETO": "ABOUT THE PROJECT",
  "Uma cidade pensada para pessoas":
    "A city designed for people",
  "O VivaCidade apresenta ideias e soluções para construir espaços urbanos mais acessíveis, seguros e confortáveis para todos.":
    "VivaCidade presents ideas and solutions to build urban spaces that are more accessible, safe and comfortable for everyone.",

  /* ENVELHECIMENTO */
  "ENVELHECIMENTO": "AGING",
  "Envelhecer também faz parte da cidade":
    "Aging is also part of the city",
  "Cidades precisam estar preparadas para pessoas de todas as idades.":
    "Cities need to be prepared for people of all ages.",

  /* INCLUSÃO */
  "INCLUSÃO": "INCLUSION",
  "Inclusão significa garantir que todos possam participar":
    "Inclusion means ensuring everyone can participate",

  /* MOBILIDADE */
  "MOBILIDADE": "MOBILITY",
  "Mobilidade para todos": "Mobility for everyone",
  "Uma cidade acessível facilita a vida de pessoas com diferentes necessidades.":
    "An accessible city makes life easier for people with different needs.",

  /* PROBLEMAS */
  "PROBLEMAS": "PROBLEMS",
  "Problemas urbanos que precisam de atenção":
    "Urban problems that need attention",

  /* SOLUÇÕES */
  "SOLUÇÕES": "SOLUTIONS",
  "Soluções que podem transformar a cidade":
    "Solutions that can transform the city",

  /* GALERIA */
  "GALERIA": "GALLERY",

  /* CHECKLIST */
  "CHECKLIST": "CHECKLIST",
  "Sua cidade está preparada?": "Is your city prepared?",
  "Verificar minha cidade": "Check my city",

  /* IA */
  "VivaIA": "VivaAI",
  "Assistente inteligente do VivaCidade":
    "VivaCidade's intelligent assistant",
  "Pergunte qualquer coisa sobre acessibilidade, inclusão e cidade.":
    "Ask anything about accessibility, inclusion and cities.",
  "Olá! 👋 Sou a VivaIA. Posso ajudar você com dúvidas sobre acessibilidade, inclusão, mobilidade e melhorias para a cidade.":
    "Hello! 👋 I'm VivaAI. I can help you with questions about accessibility, inclusion, mobility and city improvements.",

  /* FAQ */
  "PERGUNTAS FREQUENTES": "FREQUENTLY ASKED QUESTIONS",
  "Perguntas": "Questions",

  /* CTA */
  "Sua ideia pode melhorar a cidade":
    "Your idea can improve the city",
  "Compartilhe uma sugestão de melhoria para sua cidade.":
    "Share a suggestion for improving your city.",
  "Enviar minha ideia": "Send my idea",

  /* MODAL */
  "Sua ideia importa": "Your idea matters",
  "Conte uma ideia para melhorar sua cidade.":
    "Tell us an idea to improve your city.",
  "Seu nome": "Your name",
  "Qual melhoria você gostaria de ver?":
    "What improvement would you like to see?",
  "Enviar ideia": "Send idea",
  "✅ Obrigado pela sua contribuição!":
    "✅ Thank you for your contribution!",

  /* IDEIAS PARA A PREFEITURA */
  "IDEIAS PARA A PREFEITURA":
    "IDEAS FOR CITY HALL",

  "Propostas que podem ser apresentadas":
    "Proposals that can be presented",

  "à prefeitura.":
    "to city hall.",

  "Pequenas melhorias podem tornar a cidade mais acessível, segura e confortável para diferentes pessoas.":
    "Small improvements can make the city more accessible, safe and comfortable for different people.",

  "Semáforos sonoros":
    "Audio traffic lights",

  "Instalar sinais sonoros para ajudar pessoas com deficiência visual durante a travessia das ruas.":
    "Install audible signals to help people with visual impairments cross streets.",

  "Rampas acessíveis":
    "Accessible ramps",

  "Criar e melhorar rampas em calçadas, prédios públicos, praças e locais de grande circulação.":
    "Create and improve ramps on sidewalks, public buildings, parks and busy areas.",

  "Calçadas acessíveis":
    "Accessible sidewalks",

  "Recuperar calçadas quebradas, remover obstáculos e melhorar a circulação de pedestres.":
    "Repair broken sidewalks, remove obstacles and improve pedestrian circulation.",

  "Pontos de ônibus acessíveis":
    "Accessible bus stops",

  "Criar pontos com cobertura, bancos, espaço adequado e informações fáceis de entender.":
    "Create stops with shelter, benches, adequate space and easy-to-understand information.",

  "Ônibus com avisos sonoros":
    "Buses with audio announcements",

  "Informar por áudio o número ou nome das próximas paradas, facilitando o uso do transporte público.":
    "Announce upcoming stops by audio, making public transportation easier to use.",

  "Melhor iluminação":
    "Better lighting",

  "Melhorar a iluminação de ruas, praças, pontos de ônibus e áreas de grande circulação.":
    "Improve lighting on streets, parks, bus stops and busy areas.",

  "Mais áreas verdes":
    "More green areas",

  "Plantar árvores e criar áreas verdes para oferecer sombra, conforto térmico e espaços de convivência.":
    "Plant trees and create green areas to provide shade, thermal comfort and community spaces.",

  "Bancos para descanso":
    "Rest benches",

  "Instalar bancos em praças e trajetos movimentados, beneficiando principalmente pessoas que precisam descansar.":
    "Install benches in parks and busy routes, especially benefiting people who need to rest.",

  "Mais tempo para pedestres":
    "More time for pedestrians",

  "Avaliar tempos de travessia para facilitar a passagem de pessoas idosas e pessoas com mobilidade reduzida.":
    "Review crossing times to make it easier for older people and people with reduced mobility to cross.",

  "Canal para problemas urbanos":
    "Urban problem reporting channel",

  "Criar um canal digital para moradores comunicarem problemas como buracos, iluminação defeituosa e calçadas danificadas.":
    "Create a digital channel for residents to report issues such as potholes, faulty lighting and damaged sidewalks.",

  "Praças acessíveis":
    "Accessible parks",

  "Criar espaços com caminhos acessíveis, bancos, áreas verdes e equipamentos que possam ser utilizados por diferentes pessoas.":
    "Create spaces with accessible paths, benches, green areas and equipment that can be used by different people.",

  "Participação da população":
    "Public participation",

  "Criar espaços para moradores apresentarem sugestões, identificarem problemas e participarem das discussões sobre a cidade.":
    "Create spaces for residents to make suggestions, identify problems and participate in discussions about the city.",

  "💡 Tem outra ideia?":
    "💡 Have another idea?",

  "Uma boa proposta pode começar com um simples problema observado no seu bairro.":
    "A good proposal can start with a simple problem observed in your neighborhood.",

  "Enviar minha ideia":
    "Send my idea"
};


/* =====================================
   IDEIAS PARA A CIDADE
===================================== */

function createCityIdeasSection() {

  if (document.getElementById("cityIdeas")) {
    return;
  }

  const solutionsSection = document.getElementById("solucoes");

  if (!solutionsSection) {
    return;
  }

  const section = document.createElement("section");

  section.id = "cityIdeas";
  section.className = "section city-ideas-section";

  section.innerHTML = `
    <div class="container">

      <div class="section-heading city-ideas-intro">

        <span class="eyebrow">
          IDEIAS PARA A PREFEITURA
        </span>

        <h2>
          Propostas que podem ser apresentadas à prefeitura.
        </h2>

        <p>
          Pequenas melhorias podem tornar a cidade mais acessível,
          segura e confortável para diferentes pessoas.
        </p>

      </div>

      <div class="city-ideas-grid">

        <article class="city-idea-card">
          <div class="city-idea-icon">🚦</div>
          <h3>Semáforos sonoros</h3>
          <p>
            Instalar sinais sonoros para ajudar pessoas com deficiência visual durante a travessia das ruas.
          </p>
        </article>

        <article class="city-idea-card">
          <div class="city-idea-icon">♿</div>
          <h3>Rampas acessíveis</h3>
          <p>
            Criar e melhorar rampas em calçadas, prédios públicos, praças e locais de grande circulação.
          </p>
        </article>

        <article class="city-idea-card">
          <div class="city-idea-icon">🚶</div>
          <h3>Calçadas acessíveis</h3>
          <p>
            Recuperar calçadas quebradas, remover obstáculos e melhorar a circulação de pedestres.
          </p>
        </article>

        <article class="city-idea-card">
          <div class="city-idea-icon">🚌</div>
          <h3>Pontos de ônibus acessíveis</h3>
          <p>
            Criar pontos com cobertura, bancos, espaço adequado e informações fáceis de entender.
          </p>
        </article>

        <article class="city-idea-card">
          <div class="city-idea-icon">🔊</div>
          <h3>Ônibus com avisos sonoros</h3>
          <p>
            Informar por áudio o número ou nome das próximas paradas, facilitando o uso do transporte público.
          </p>
        </article>

        <article class="city-idea-card">
          <div class="city-idea-icon">💡</div>
          <h3>Melhor iluminação</h3>
          <p>
            Melhorar a iluminação de ruas, praças, pontos de ônibus e áreas de grande circulação.
          </p>
        </article>

        <article class="city-idea-card">
          <div class="city-idea-icon">🌳</div>
          <h3>Mais áreas verdes</h3>
          <p>
            Plantar árvores e criar áreas verdes para oferecer sombra, conforto térmico e espaços de convivência.
          </p>
        </article>

        <article class="city-idea-card">
          <div class="city-idea-icon">🪑</div>
          <h3>Bancos para descanso</h3>
          <p>
            Instalar bancos em praças e trajetos movimentados, beneficiando principalmente pessoas que precisam descansar.
          </p>
        </article>

        <article class="city-idea-card">
          <div class="city-idea-icon">⏱️</div>
          <h3>Mais tempo para pedestres</h3>
          <p>
            Avaliar tempos de travessia para facilitar a passagem de pessoas idosas e pessoas com mobilidade reduzida.
          </p>
        </article>

        <article class="city-idea-card">
          <div class="city-idea-icon">📱</div>
          <h3>Canal para problemas urbanos</h3>
          <p>
            Criar um canal digital para moradores comunicarem problemas como buracos, iluminação defeituosa e calçadas danificadas.
          </p>
        </article>

        <article class="city-idea-card">
          <div class="city-idea-icon">🏞️</div>
          <h3>Praças acessíveis</h3>
          <p>
            Criar espaços com caminhos acessíveis, bancos, áreas verdes e equipamentos que possam ser utilizados por diferentes pessoas.
          </p>
        </article>

        <article class="city-idea-card">
          <div class="city-idea-icon">👥</div>
          <h3>Participação da população</h3>
          <p>
            Criar espaços para moradores apresentarem sugestões, identificarem problemas e participarem das discussões sobre a cidade.
          </p>
        </article>

      </div>

      <div class="idea-action-box">

        <h3>💡 Tem outra ideia?</h3>

        <p>
          Uma boa proposta pode começar com um simples problema observado no seu bairro.
        </p>

        <button
          class="btn btn-primary"
          id="openIdeaFromCity"
          type="button"
        >
          Enviar minha ideia
        </button>

      </div>

    </div>
  `;

  solutionsSection.parentNode.insertBefore(
    section,
    solutionsSection
  );

  const openIdeaFromCity =
    document.getElementById("openIdeaFromCity");

  if (openIdeaFromCity) {
    openIdeaFromCity.addEventListener("click", () => {

      const ideaModal =
        document.getElementById("ideaModal");

      if (ideaModal) {
        ideaModal.classList.add("active");
      }

    });
  }
}


/* =====================================
   TRADUÇÃO DOS TEXTOS
===================================== */

const originalTextNodes = new WeakMap();

function translateTextNodes(language) {

  const elements = document.querySelectorAll(
    "body *"
  );

  elements.forEach(element => {

    if (
      element.tagName === "SCRIPT" ||
      element.tagName === "STYLE" ||
      element.tagName === "INPUT" ||
      element.tagName === "TEXTAREA"
    ) {
      return;
    }

    element.childNodes.forEach(node => {

      if (node.nodeType !== Node.TEXT_NODE) {
        return;
      }

      const original =
        originalTextNodes.has(node)
          ? originalTextNodes.get(node)
          : node.nodeValue;

      if (!originalTextNodes.has(node)) {
        originalTextNodes.set(node, original);
      }

      const cleanText = original.trim();

      if (!cleanText) {
        return;
      }

      if (language === "en") {

        if (translations[cleanText]) {

          node.nodeValue =
            original.replace(
              cleanText,
              translations[cleanText]
            );

        }

      } else {

        node.nodeValue = original;

      }

    });

  });

}


/* =====================================
   CAMPOS E PLACEHOLDERS
===================================== */

function updateFields(language) {

  const nameInput =
    document.getElementById("ideaName");

  const ideaText =
    document.getElementById("ideaText");

  const chatInput =
    document.getElementById("chatInput");

  if (language === "en") {

    if (nameInput) {
      nameInput.placeholder = "Your name";
    }

    if (ideaText) {
      ideaText.placeholder =
        "What improvement would you like to see?";
    }

    if (chatInput) {
      chatInput.placeholder =
        "Type your question...";
    }

  } else {

    if (nameInput) {
      nameInput.placeholder = "Seu nome";
    }

    if (ideaText) {
      ideaText.placeholder =
        "Qual melhoria você gostaria de ver?";
    }

    if (chatInput) {
      chatInput.placeholder =
        "Digite sua pergunta...";
    }

  }

}


/* =====================================
   PERGUNTAS RÁPIDAS DA IA
===================================== */

function updateQuickQuestions(language) {

  const quickQuestions =
    document.querySelectorAll(
      ".quick-questions button"
    );

  if (!quickQuestions.length) {
    return;
  }

  const ptQuestions = [
    "Como melhorar a acessibilidade?",
    "O que é uma cidade inclusiva?",
    "Como melhorar a mobilidade?",
    "Dê uma ideia para minha cidade."
  ];

  const enQuestions = [
    "How can accessibility be improved?",
    "What is an inclusive city?",
    "How can mobility be improved?",
    "Give me an idea for my city."
  ];

  quickQuestions.forEach((button, index) => {

    const text =
      language === "en"
        ? enQuestions[index]
        : ptQuestions[index];

    if (text) {
      button.textContent = text;
      button.dataset.question = text;
    }

  });

}


/* =====================================
   APLICAR IDIOMA
===================================== */

function applyLanguage(language) {

  currentLanguage = language;

  localStorage.setItem(
    "vivacidadeLanguage",
    language
  );

  if (languageBtn) {

    languageBtn.textContent =
      language === "pt"
        ? "🇺🇸 English"
        : "🇧🇷 Português";

    languageBtn.setAttribute(
      "aria-label",
      language === "pt"
        ? "Mudar para inglês"
        : "Switch to Portuguese"
    );

  }

  translateTextNodes(language);

  updateFields(language);

  updateQuickQuestions(language);

}


/* =====================================
   TROCAR IDIOMA
===================================== */

if (languageBtn) {

  languageBtn.addEventListener("click", () => {

    const nextLanguage =
      currentLanguage === "pt"
        ? "en"
        : "pt";

    applyLanguage(nextLanguage);

  });

}


/* =====================================
   CHECKLIST
===================================== */

const checklistBtn =
  document.getElementById("checklistBtn");

const checklistResult =
  document.getElementById("checklistResult");

if (checklistBtn && checklistResult) {

  checklistBtn.addEventListener("click", () => {

    const checks =
      document.querySelectorAll(
        '.checklist-box input[type="checkbox"]'
      );

    const checked =
      [...checks].filter(
        checkbox => checkbox.checked
      ).length;

    const total = checks.length;

    if (total === 0) {
      return;
    }

    let message = "";

    if (currentLanguage === "en") {

      if (checked === total) {

        message =
          "Excellent! Your city meets all the points checked.";

      } else if (checked >= total / 2) {

        message =
          `Your city meets ${checked} of ${total} accessibility points. There is still room for improvement.`;

      } else {

        message =
          `Your city meets ${checked} of ${total} accessibility points. There are several opportunities for improvement.`;

      }

    } else {

      if (checked === total) {

        message =
          "Excelente! Sua cidade atende a todos os pontos avaliados.";

      } else if (checked >= total / 2) {

        message =
          `Sua cidade atende ${checked} de ${total} pontos de acessibilidade. Ainda há espaço para melhorias.`;

      } else {

        message =
          `Sua cidade atende ${checked} de ${total} pontos de acessibilidade. Existem várias oportunidades de melhoria.`;

      }

    }

    checklistResult.textContent = message;
    checklistResult.style.display = "block";

  });

}


/* =====================================
   MODAL DE IDEIAS
===================================== */

const ideaModal =
  document.getElementById("ideaModal");

const closeModal =
  document.getElementById("closeModal");

const ideaForm =
  document.getElementById("ideaForm");

const success =
  document.getElementById("success");

if (closeModal && ideaModal) {

  closeModal.addEventListener("click", () => {
    ideaModal.classList.remove("active");
  });

}

if (ideaModal) {

  ideaModal.addEventListener("click", event => {

    if (event.target === ideaModal) {
      ideaModal.classList.remove("active");
    }

  });

}

if (ideaForm && success) {

  ideaForm.addEventListener("submit", event => {

    event.preventDefault();

    ideaForm.style.display = "none";
    success.style.display = "block";

  });

}


/* =====================================
   VIVAI
===================================== */

const chatForm =
  document.getElementById("chatForm");

const chatInput =
  document.getElementById("chatInput");

const chatMessages =
  document.getElementById("chatMessages");


function addMessage(text, type = "ai") {

  if (!chatMessages) {
    return;
  }

  const message =
    document.createElement("div");

  message.className =
    type === "user"
      ? "message user-message"
      : "message";

  message.innerHTML = `
    <div class="message-avatar">
      ${type === "user" ? "👤" : "🤖"}
    </div>

    <div class="message-content">
      ${text}
    </div>
  `;

  chatMessages.appendChild(message);

  chatMessages.scrollTop =
    chatMessages.scrollHeight;
}


/* =====================================
   RESPOSTAS DA IA
===================================== */

function getAIResponse(question) {

  const q =
    question.toLowerCase();

  if (currentLanguage === "en") {

    if (
      q.includes("accessibility") ||
      q.includes("accessible") ||
      q.includes("disabled")
    ) {

      return `
        Some important accessibility measures include accessible ramps,
        sidewalks without obstacles, audio traffic lights,
        accessible public transportation and adapted public spaces.
      `;

    }

    if (
      q.includes("mobility") ||
      q.includes("transport") ||
      q.includes("bus")
    ) {

      return `
        Improving mobility can involve better public transportation,
        accessible bus stops, safer sidewalks, bike lanes and
        pedestrian-friendly crossings.
      `;

    }

    if (
      q.includes("inclusive") ||
      q.includes("inclusion")
    ) {

      return `
        An inclusive city is one where different people can use
        public spaces, services and transportation with safety,
        independence and dignity.
      `;

    }

    if (
      q.includes("idea") ||
      q.includes("suggestion") ||
      q.includes("improve")
    ) {

      return `
        One good idea is to create a digital channel where residents
        can report problems such as potholes, damaged sidewalks
        and faulty street lighting.
      `;

    }

    return `
      I can help with accessibility, inclusion, mobility,
      urban problems and ideas for improving the city.
    `;

  }


  /* PORTUGUÊS */

  if (
    q.includes("acessibilidade") ||
    q.includes("acessível") ||
    q.includes("deficiência")
  ) {

    return `
      Algumas medidas importantes de acessibilidade são rampas adequadas,
      calçadas sem obstáculos, semáforos sonoros, transporte público acessível
      e espaços públicos adaptados.
    `;

  }

  if (
    q.includes("mobilidade") ||
    q.includes("transporte") ||
    q.includes("ônibus")
  ) {

    return `
      Melhorar a mobilidade pode envolver transporte público de qualidade,
      pontos de ônibus acessíveis, calçadas seguras, ciclovias e travessias
      mais adequadas para pedestres.
    `;

  }

  if (
    q.includes("inclusão") ||
    q.includes("inclusiva")
  ) {

    return `
      Uma cidade inclusiva é aquela em que diferentes pessoas conseguem
      utilizar espaços públicos, serviços e transportes com segurança,
      autonomia e dignidade.
    `;

  }

  if (
    q.includes("ideia") ||
    q.includes("sugestão") ||
    q.includes("melhorar")
  ) {

    return `
      Uma boa ideia é criar um canal digital onde os moradores possam
      comunicar problemas como buracos, calçadas danificadas e iluminação
      pública defeituosa.
    `;

  }

  return `
    Posso ajudar com acessibilidade, inclusão, mobilidade,
    problemas urbanos e ideias para melhorar a cidade.
  `;
}


/* =====================================
   ENVIO DA IA
===================================== */

if (chatForm && chatInput) {

  chatForm.addEventListener("submit", event => {

    event.preventDefault();

    const question =
      chatInput.value.trim();

    if (!question) {
      return;
    }

    addMessage(question, "user");

    chatInput.value = "";

    setTimeout(() => {

      const response =
        getAIResponse(question);

      addMessage(response, "ai");

    }, 500);

  });

}


/* =====================================
   PERGUNTAS RÁPIDAS
===================================== */

document
  .querySelectorAll(".quick-questions button")
  .forEach(button => {

    button.addEventListener("click", () => {

      const question =
        button.dataset.question ||
        button.textContent;

      if (chatInput) {
        chatInput.value = question;
        chatInput.focus();
      }

    });

  });


/* =====================================
   BOTÃO HERO → IA
===================================== */

const heroAIButton =
  document.getElementById("heroAI");

if (heroAIButton) {

  heroAIButton.addEventListener("click", () => {

    const iaSection =
      document.getElementById("ia");

    if (iaSection) {

      iaSection.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

}


/* =====================================
   ANIMAÇÕES
===================================== */

const animatedElements =
  document.querySelectorAll(
    ".feature-card, .info-card, .mobility-card, .problem-card, .solution, .city-idea-card"
  );

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";

        }

      });

    },
    {
      threshold: 0.12
    }
  );


animatedElements.forEach(element => {

  element.style.opacity = "0";
  element.style.transform = "translateY(20px)";
  element.style.transition =
    "opacity .6s ease, transform .6s ease";

  observer.observe(element);

});


/* =====================================
   SOMBRA DO HEADER
===================================== */

window.addEventListener("scroll", () => {

  const header =
    document.getElementById("header");

  if (!header) {
    return;
  }

  if (window.scrollY > 20) {

    header.style.boxShadow =
      "0 10px 30px rgba(0,0,0,.08)";

  } else {

    header.style.boxShadow = "none";

  }

});


/* =====================================
   CRIAR SEÇÃO DE IDEIAS
===================================== */

createCityIdeasSection();


/* =====================================
   INICIAR IDIOMA
===================================== */

applyLanguage(currentLanguage);