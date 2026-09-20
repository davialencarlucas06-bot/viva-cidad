/* =========================================================
   VIVACIDADE — SCRIPT PRINCIPAL
   Compatível com o novo index.html
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     ELEMENTOS
  ========================================================= */

  const body = document.body;
  const header = document.getElementById("header");

  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  const accessBtn = document.getElementById("accessBtn");
  const accessPanel = document.getElementById("accessPanel");

  const topBtn = document.getElementById("topBtn");

  const heroAI = document.getElementById("heroAI");

  const chatForm = document.getElementById("chatForm");
  const chatInput = document.getElementById("chatInput");
  const chatMessages = document.getElementById("chatMessages");

  const checklistBtn = document.getElementById("checklistBtn");
  const checklistResult = document.getElementById("checklistResult");

  const ideaModal = document.getElementById("ideaModal");
  const closeModal = document.getElementById("closeModal");
  const ideaForm = document.getElementById("ideaForm");
  const ideaName = document.getElementById("ideaName");
  const ideaText = document.getElementById("ideaText");
  const success = document.getElementById("success");

  /* =========================================================
     MENU MOBILE
  ========================================================= */

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      menuBtn.classList.toggle("active");
    });

    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuBtn.classList.remove("active");
      });
    });
  }

  /* =========================================================
     HEADER
  ========================================================= */

  function updateHeader() {
    if (!header) return;

    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", updateHeader);
  updateHeader();

  /* =========================================================
     BOTÃO VOLTAR AO TOPO
  ========================================================= */

  if (topBtn) {
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
  }

  /* =========================================================
     PAINEL DE ACESSIBILIDADE
  ========================================================= */

  if (accessBtn && accessPanel) {
    accessBtn.addEventListener("click", () => {
      accessPanel.classList.toggle("active");
    });
  }

  /* =========================================================
     ACESSIBILIDADE
  ========================================================= */

  const increaseText = document.getElementById("increaseText");
  const decreaseText = document.getElementById("decreaseText");
  const contrastBtn = document.getElementById("contrastBtn");
  const readingBtn = document.getElementById("readingBtn");

  let fontScale = 1;

  if (increaseText) {
    increaseText.addEventListener("click", () => {
      fontScale += 0.08;

      if (fontScale > 1.35) {
        fontScale = 1.35;
      }

      document.documentElement.style.fontSize = `${fontScale}em`;
    });
  }

  if (decreaseText) {
    decreaseText.addEventListener("click", () => {
      fontScale -= 0.08;

      if (fontScale < 0.9) {
        fontScale = 0.9;
      }

      document.documentElement.style.fontSize = `${fontScale}em`;
    });
  }

  if (contrastBtn) {
    contrastBtn.addEventListener("click", () => {
      body.classList.toggle("high-contrast");
    });
  }

  if (readingBtn) {
    readingBtn.addEventListener("click", () => {
      body.classList.toggle("reading-mode");
    });
  }

  /* =========================================================
     CRIA BOTÃO DE IDIOMA
  ========================================================= */

  let languageBtn = document.getElementById("languageBtn");

  if (!languageBtn && accessBtn) {
    languageBtn = document.createElement("button");

    languageBtn.id = "languageBtn";
    languageBtn.className = "language-btn";
    languageBtn.type = "button";
    languageBtn.textContent = "EN";

    accessBtn.parentNode.insertBefore(languageBtn, accessBtn);
  }

  /* =========================================================
     IDEIAS PARA A CIDADE
  ========================================================= */

  function createCityIdeasSection() {

    if (document.getElementById("cityIdeas")) return;

    const solutions = document.getElementById("solucoes");

    if (!solutions) return;

    const section = document.createElement("section");

    section.id = "cityIdeas";
    section.className = "city-ideas-section";

    section.innerHTML = `
      <div class="container">

        <div class="city-ideas-intro">
          <span class="section-tag">VIVACIDADE</span>

          <h2>Ideias para uma cidade melhor</h2>

          <p>
            Pequenas mudanças podem transformar a vida das pessoas.
            Explore algumas ideias para tornar a cidade mais acessível,
            inclusiva e preparada para o futuro.
          </p>
        </div>

        <div class="city-ideas-grid">

          <article class="city-idea-card">
            <div class="city-idea-icon">🚶</div>
            <h3>Calçadas acessíveis</h3>
            <p>
              Calçadas niveladas, seguras e livres de obstáculos
              facilitam a circulação de todos.
            </p>
          </article>

          <article class="city-idea-card">
            <div class="city-idea-icon">🚌</div>
            <h3>Transporte público</h3>
            <p>
              Melhorar ônibus, pontos e informações facilita
              a mobilidade pela cidade.
            </p>
          </article>

          <article class="city-idea-card">
            <div class="city-idea-icon">🌳</div>
            <h3>Mais áreas verdes</h3>
            <p>
              Praças e espaços arborizados contribuem para
              o bem-estar e a convivência.
            </p>
          </article>

          <article class="city-idea-card">
            <div class="city-idea-icon">♿</div>
            <h3>Acessibilidade</h3>
            <p>
              Rampas, sinalização e espaços adaptados ajudam
              a garantir participação para todos.
            </p>
          </article>

          <article class="city-idea-card">
            <div class="city-idea-icon">💡</div>
            <h3>Iluminação pública</h3>
            <p>
              Ruas bem iluminadas aumentam a segurança e
              melhoram a utilização dos espaços públicos.
            </p>
          </article>

          <article class="city-idea-card">
            <div class="city-idea-icon">📱</div>
            <h3>Serviços digitais</h3>
            <p>
              Serviços públicos digitais podem facilitar o
              acesso da população às informações.
            </p>
          </article>

          <article class="city-idea-card">
            <div class="city-idea-icon">👵</div>
            <h3>Cidade amiga da pessoa idosa</h3>
            <p>
              Espaços seguros e acessíveis ajudam pessoas
              idosas a participar mais da vida urbana.
            </p>
          </article>

          <article class="city-idea-card">
            <div class="city-idea-icon">🧑‍🦽</div>
            <h3>Mobilidade inclusiva</h3>
            <p>
              Uma cidade deve considerar diferentes necessidades
              de locomoção.
            </p>
          </article>

          <article class="city-idea-card">
            <div class="city-idea-icon">🏙️</div>
            <h3>Planejamento urbano</h3>
            <p>
              Planejar bairros pensando nas pessoas ajuda
              a criar espaços mais eficientes.
            </p>
          </article>

          <article class="city-idea-card">
            <div class="city-idea-icon">🗣️</div>
            <h3>Participação popular</h3>
            <p>
              A população pode contribuir com ideias e
              identificar problemas do próprio bairro.
            </p>
          </article>

          <article class="city-idea-card">
            <div class="city-idea-icon">❤️</div>
            <h3>Saúde e bem-estar</h3>
            <p>
              Espaços para atividades físicas e convivência
              podem melhorar a qualidade de vida.
            </p>
          </article>

          <article class="city-idea-card">
            <div class="city-idea-icon">🌎</div>
            <h3>Cidade sustentável</h3>
            <p>
              Energia limpa, reciclagem e transporte sustentável
              ajudam a reduzir impactos ambientais.
            </p>
          </article>

        </div>

        <div class="idea-action-box">

          <h3>Você também pode participar</h3>

          <p>
            Tem uma ideia para melhorar sua cidade?
            Envie sua sugestão para o VivaCidade.
          </p>

          <button class="btn primary" id="openIdeaFromCity">
            Enviar minha ideia →
          </button>

        </div>

      </div>
    `;

    solutions.parentNode.insertBefore(section, solutions);

    const ideaButton = document.getElementById("openIdeaFromCity");

    if (ideaButton) {
      ideaButton.addEventListener("click", openIdeaModal);
    }
  }

  createCityIdeasSection();

  /* =========================================================
     MODAL DE IDEIAS
  ========================================================= */

  function openIdeaModal() {

    if (!ideaModal) return;

    ideaModal.classList.add("active");
    document.body.style.overflow = "hidden";

    if (ideaName) {
      setTimeout(() => ideaName.focus(), 150);
    }
  }

  function closeIdeaModal() {

    if (!ideaModal) return;

    ideaModal.classList.remove("active");
    document.body.style.overflow = "";

  }

  window.openIdeaModal = openIdeaModal;

  if (closeModal) {
    closeModal.addEventListener("click", closeIdeaModal);
  }

  if (ideaModal) {
    ideaModal.addEventListener("click", event => {

      if (event.target === ideaModal) {
        closeIdeaModal();
      }

    });
  }

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

      if (ideaModal && ideaModal.classList.contains("active")) {
        closeIdeaModal();
      }

      if (accessPanel) {
        accessPanel.classList.remove("active");
      }

    }

  });

  if (ideaForm) {

    ideaForm.addEventListener("submit", event => {

      event.preventDefault();

      if (success) {
        success.style.display = "block";
      }

      ideaForm.reset();

      setTimeout(() => {

        if (success) {
          success.style.display = "none";
        }

        closeIdeaModal();

      }, 2200);

    });

  }

  /* =========================================================
     CHECKLIST
  ========================================================= */

  function updateChecklist() {

    if (!checklistResult) return;

    const checks = document.querySelectorAll(
      '.checklist-box input[type="checkbox"]'
    );

    if (!checks.length) return;

    const total = checks.length;

    let completed = 0;

    checks.forEach(check => {

      if (check.checked) {
        completed++;
      }

    });

    const percentage = Math.round((completed / total) * 100);

    let message = "";

    if (percentage === 0) {

      message = `
        <strong>Vamos começar!</strong>
        <br>
        Marque os itens que sua cidade já possui.
      `;

    } else if (percentage < 40) {

      message = `
        <strong>Há espaço para melhorias.</strong>
        <br>
        Sua cidade pode avançar em acessibilidade e inclusão.
      `;

    } else if (percentage < 70) {

      message = `
        <strong>Bom começo!</strong>
        <br>
        Algumas áreas já apresentam boas condições.
      `;

    } else if (percentage < 100) {

      message = `
        <strong>Cidade no caminho certo!</strong>
        <br>
        Ainda existem alguns pontos que podem melhorar.
      `;

    } else {

      message = `
        <strong>Parabéns!</strong>
        <br>
        Todos os itens foram marcados.
      `;

    }

    checklistResult.innerHTML = `
      <div class="check-result-box">

        <div class="check-result-number">
          ${percentage}%
        </div>

        <div class="check-result-text">
          ${message}
        </div>

      </div>
    `;

  }

  if (checklistBtn) {
    checklistBtn.addEventListener("click", updateChecklist);
  }

  document.querySelectorAll(
    '.checklist-box input[type="checkbox"]'
  ).forEach(check => {

    check.addEventListener("change", updateChecklist);

  });

  /* =========================================================
     VIVAAI
  ========================================================= */

  const aiResponses = {

    acessibilidade: `
      A acessibilidade permite que pessoas com diferentes necessidades
      utilizem espaços, serviços e transportes com mais autonomia.
      Rampas, calçadas adequadas, sinalização e transporte acessível
      são alguns exemplos.
    `,

    mobilidade: `
      Mobilidade urbana envolve a forma como as pessoas se deslocam
      pela cidade. Transporte público eficiente, calçadas seguras,
      ciclovias e ruas bem planejadas são importantes.
    `,

    idoso: `
      Uma cidade amiga da pessoa idosa deve oferecer segurança,
      acessibilidade, transporte adequado, espaços de convivência
      e oportunidades de participação social.
    `,

    inclusão: `
      Inclusão significa garantir que diferentes pessoas possam
      participar da vida da cidade com igualdade de oportunidades.
    `,

    transporte: `
      Um bom transporte público deve ser acessível, seguro,
      confortável, frequente e atender diferentes regiões da cidade.
    `,

    calçada: `
      Calçadas acessíveis devem ser contínuas, niveladas,
      seguras e livres de obstáculos que dificultem a circulação.
    `,

    cidade: `
      Uma cidade para todos combina acessibilidade, mobilidade,
      sustentabilidade, inclusão, segurança e participação popular.
    `,

    sustentabilidade: `
      Uma cidade sustentável pode investir em áreas verdes,
      reciclagem, transporte coletivo, energia limpa e planejamento
      urbano responsável.
    `,

    segurança: `
      A segurança urbana pode ser favorecida por iluminação adequada,
      espaços públicos bem cuidados, circulação de pessoas e
      planejamento urbano.
    `,

    soluções: `
      Algumas soluções incluem melhorar calçadas, ampliar o
      transporte público, criar áreas verdes, melhorar a
      acessibilidade e ouvir a população.
    `

  };

  function getAIResponse(question) {

    const text = question
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    if (
      text.includes("acess")
      || text.includes("rampa")
      || text.includes("pcd")
    ) {
      return aiResponses.acessibilidade;
    }

    if (
      text.includes("mobilidade")
      || text.includes("andar")
      || text.includes("desloc")
    ) {
      return aiResponses.mobilidade;
    }

    if (
      text.includes("idos")
      || text.includes("terceira idade")
    ) {
      return aiResponses.idoso;
    }

    if (
      text.includes("inclus")
      || text.includes("igualdade")
    ) {
      return aiResponses.inclusao;
    }

    if (
      text.includes("transporte")
      || text.includes("onibus")
      || text.includes("ônibus")
    ) {
      return aiResponses.transporte;
    }

    if (
      text.includes("calcada")
      || text.includes("calçada")
    ) {
      return aiResponses.calcada;
    }

    if (
      text.includes("sustent")
      || text.includes("verde")
      || text.includes("reciclag")
    ) {
      return aiResponses.sustentabilidade;
    }

    if (
      text.includes("segur")
      || text.includes("violencia")
      || text.includes("violência")
    ) {
      return aiResponses.segurança;
    }

    if (
      text.includes("solucao")
      || text.includes("solução")
      || text.includes("melhorar")
    ) {
      return aiResponses.soluções;
    }

    if (text.includes("cidade")) {
      return aiResponses.cidade;
    }

    return `
      Posso ajudar com temas como acessibilidade,
      mobilidade urbana, inclusão, envelhecimento,
      transporte, sustentabilidade e soluções para a cidade.
    `;

  }

  function addMessage(text, type = "ai") {

    if (!chatMessages) return;

    const message = document.createElement("div");

    message.className =
      type === "user"
        ? "message user-message"
        : "message";

    message.innerHTML = text;

    chatMessages.appendChild(message);

    chatMessages.scrollTop = chatMessages.scrollHeight;

  }

  function sendAIQuestion(question) {

    if (!question || !question.trim()) return;

    addMessage(question, "user");

    setTimeout(() => {

      const response = getAIResponse(question);

      addMessage(response, "ai");

    }, 450);

  }

  if (chatForm) {

    chatForm.addEventListener("submit", event => {

      event.preventDefault();

      if (!chatInput) return;

      const question = chatInput.value.trim();

      if (!question) return;

      chatInput.value = "";

      sendAIQuestion(question);

    });

  }

  /* =========================================================
     PERGUNTAS RÁPIDAS DA IA
  ========================================================= */

  document.querySelectorAll("[data-question]").forEach(button => {

    button.addEventListener("click", () => {

      const question = button.dataset.question;

      if (!question) return;

      if (chatInput) {
        chatInput.value = question;
        chatInput.focus();
      }

    });

  });

  /* =========================================================
     BOTÃO DA IA NO HERO
  ========================================================= */

  if (heroAI) {

    heroAI.addEventListener("click", () => {

      const iaSection = document.getElementById("ia");

      if (iaSection) {

        iaSection.scrollIntoView({
          behavior: "smooth"
        });

      }

      setTimeout(() => {

        if (chatInput) {
          chatInput.focus();
        }

      }, 700);

    });

  }

  /* =========================================================
     ANIMAÇÕES AO ROLAR
  ========================================================= */

  const animatedElements = document.querySelectorAll(
    ".feature-card, .info-card, .city-idea-card, .problem-card, .solution-card, .indicator-card, .gallery-item, .faq-item"
  );

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12
      }
    );

    animatedElements.forEach(element => {
      observer.observe(element);
    });

  } else {

    animatedElements.forEach(element => {
      element.classList.add("visible");
    });

  }

  /* =========================================================
     FAQ
  ========================================================= */

  document.querySelectorAll(".faq-question").forEach(question => {

    question.addEventListener("click", () => {

      const item = question.parentElement;

      if (!item) return;

      const alreadyOpen = item.classList.contains("active");

      document.querySelectorAll(".faq-item").forEach(other => {
        other.classList.remove("active");
      });

      if (!alreadyOpen) {
        item.classList.add("active");
      }

    });

  });

  /* =========================================================
     TRADUÇÃO PT / EN
  ========================================================= */

  const translations = {

    "VIVACIDADE": "VIVACIDADE",
    "Cidade para Todos": "City for Everyone",

    "Início": "Home",
    "Sobre": "About",
    "Envelhecimento": "Aging",
    "Inclusão": "Inclusion",
    "Mobilidade": "Mobility",
    "Soluções": "Solutions",
    "Checklist": "Checklist",
    "VivaIA": "VivaAI",

    "Conheça o VivaCidade": "Discover VivaCidade",

    "Uma cidade melhor começa quando todos podem participar dela.":
      "A better city begins when everyone can participate in it.",

    "Envelhecimento ativo":
      "Active aging",

    "Inclusão social":
      "Social inclusion",

    "Acessibilidade":
      "Accessibility",

    "Mobilidade urbana":
      "Urban mobility",

    "Cidade sustentável":
      "Sustainable city",

    "Participação popular":
      "Public participation",

    "Ideias para uma cidade melhor":
      "Ideas for a better city",

    "Você também pode participar":
      "You can participate too",

    "Enviar minha ideia →":
      "Send my idea →",

    "Acessibilidade urbana":
      "Urban accessibility",

    "Transporte público":
      "Public transportation",

    "Calçadas acessíveis":
      "Accessible sidewalks",

    "Mais áreas verdes":
      "More green spaces",

    "Iluminação pública":
      "Public lighting",

    "Serviços digitais":
      "Digital services",

    "Cidade amiga da pessoa idosa":
      "Age-friendly city",

    "Mobilidade inclusiva":
      "Inclusive mobility",

    "Planejamento urbano":
      "Urban planning",

    "Saúde e bem-estar":
      "Health and well-being",

    "Cidade sustentável":
      "Sustainable city",

    "Calçadas acessíveis, seguras e livres de obstáculos.":
      "Accessible, safe and obstacle-free sidewalks.",

    "Transporte público":
      "Public transportation",

    "Participação popular":
      "Public participation",

    "VivaIA — Inteligência para uma cidade melhor":
      "VivaAI — Intelligence for a better city"

  };

  function translatePage(language) {

    const elements = document.querySelectorAll(
      "body *:not(script):not(style)"
    );

    elements.forEach(element => {

      if (
        element.children.length === 0 &&
        element.textContent.trim()
      ) {

        const original = element.dataset.originalText ||
          element.textContent.trim();

        element.dataset.originalText = original;

        if (language === "en") {

          if (translations[original]) {
            element.textContent = translations[original];
          }

        } else {

          element.textContent = original;

        }

      }

    });

    updateLanguageButton(language);

  }

  function updateLanguageButton(language) {

    if (!languageBtn) return;

    languageBtn.textContent =
      language === "pt" ? "EN" : "PT";

    languageBtn.setAttribute(
      "aria-label",
      language === "pt"
        ? "Mudar para inglês"
        : "Switch to Portuguese"
    );

  }

  let currentLanguage =
    localStorage.getItem("vivaCidadeLanguage") || "pt";

  if (languageBtn) {

    languageBtn.addEventListener("click", () => {

      currentLanguage =
        currentLanguage === "pt"
          ? "en"
          : "pt";

      localStorage.setItem(
        "vivaCidadeLanguage",
        currentLanguage
      );

      translatePage(currentLanguage);

    });

  }

  updateLanguageButton(currentLanguage);

  /* =========================================================
     LINK DE NAVEGAÇÃO SUAVE
  ========================================================= */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const targetId =
        link.getAttribute("href");

      if (
        !targetId ||
        targetId === "#"
      ) {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });

  /* =========================================================
     FECHA PAINEL DE ACESSIBILIDADE AO CLICAR FORA
  ========================================================= */

  document.addEventListener("click", event => {

    if (
      accessPanel &&
      accessBtn &&
      !accessPanel.contains(event.target) &&
      !accessBtn.contains(event.target)
    ) {

      accessPanel.classList.remove("active");

    }

  });

  /* =========================================================
     DESTAQUE DO MENU CONFORME A SEÇÃO
  ========================================================= */

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(
    '#navMenu a[href^="#"]'
  );

  if ("IntersectionObserver" in window) {

    const sectionObserver =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const id = entry.target.id;

            navLinks.forEach(link => {

              link.classList.remove("active");

              if (
                link.getAttribute("href") === `#${id}`
              ) {

                link.classList.add("active");

              }

            });

          });

        },
        {
          rootMargin: "-30% 0px -60% 0px"
        }
      );

    sections.forEach(section => {
      sectionObserver.observe(section);
    });

  }

  /* =========================================================
     ANO AUTOMÁTICO NO FOOTER
  ========================================================= */

  document.querySelectorAll("[data-year]").forEach(element => {
    element.textContent = new Date().getFullYear();
  });

  /* =========================================================
     FINALIZAÇÃO
  ========================================================= */

  console.log("VivaCidade carregado com sucesso.");

});