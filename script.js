/* =====================================
   VIVACIDADE
   IDIOMA + IDEIAS PARA A CIDADE
===================================== */

let currentLanguage = localStorage.getItem("vivacidadeLanguage") || "pt";

/* =====================================
   MENU MOBILE
===================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuBtn.textContent = navMenu.classList.contains("active") ? "✕" : "☰";
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

  "Início": "Home",
  "Envelhecimento": "Aging",
  "Inclusão": "Inclusion",
  "Mobilidade": "Mobility",
  "Soluções": "Solutions",
  "Checklist": "Checklist",

  "♿ Acessibilidade": "♿ Accessibility",
  "A+ Aumentar fonte": "A+ Increase font",
  "A− Diminuir fonte": "A− Decrease font",
  "◐ Alto contraste": "◐ High contrast",
  "📖 Modo leitura": "📖 Reading mode",
  "↺ Restaurar": "↺ Reset",

  "🌎 Um futuro melhor começa na cidade":
    "🌎 A better future starts in the city",

  "Uma cidade melhor":
    "A better city",

  "para todas as idades.":
    "for all ages.",

  "Envelhecimento ativo, inclusão e mobilidade urbana para construir cidades mais humanas, acessíveis, seguras e preparadas para o futuro.":
    "Active aging, inclusion and urban mobility to build cities that are more human, accessible, safe and prepared for the future.",

  "Descobrir soluções →":
    "Discover solutions →",

  "🤖 Conversar com a IA":
    "🤖 Talk to AI",

  "Inclusão":
    "Inclusion",

  "Cidade ativa":
    "Active city",

  "Possibilidades":
    "Possibilities",

  "POR QUE ISSO IMPORTA?":
    "WHY DOES IT MATTER?",

  "A cidade deve funcionar":
    "The city should work",

  "para todos.":
    "for everyone.",

  "Uma cidade inclusiva não é construída pensando apenas em uma faixa etária. Ela precisa considerar crianças, jovens, adultos, pessoas idosas e pessoas com diferentes necessidades.":
    "An inclusive city is not designed for only one age group. It should consider children, young people, adults, older people and people with different needs.",

  "Envelhecimento ativo":
    "Active aging",

  "Criar oportunidades para que pessoas idosas tenham autonomia, saúde e participação social.":
    "Create opportunities for older people to have autonomy, health and social participation.",

  "Garantir que espaços e serviços possam ser utilizados pelo maior número possível de pessoas.":
    "Ensure that spaces and services can be used by as many people as possible.",

  "Facilitar deslocamentos seguros, acessíveis, confortáveis e sustentáveis.":
    "Make travel safe, accessible, comfortable and sustainable.",

  "ENVELHECIMENTO ATIVO":
    "ACTIVE AGING",

  "Envelhecer com":
    "Aging with",

  "autonomia e participação.":
    "autonomy and participation.",

  "O envelhecimento ativo envolve saúde, segurança, aprendizagem, convivência e participação na sociedade.":
    "Active aging involves health, safety, learning, social connection and participation in society.",

  "Vida ativa":
    "Active life",

  "Incentivar caminhadas, atividades físicas, lazer e contato com espaços públicos.":
    "Encourage walking, physical activities, leisure and contact with public spaces.",

  "Saúde e bem-estar":
    "Health and well-being",

  "Facilitar o acesso à saúde, alimentação adequada, lazer e prevenção.":
    "Facilitate access to healthcare, adequate nutrition, leisure and prevention.",

  "Participação social":
    "Social participation",

  "Criar espaços para convivência, cultura, voluntariado e participação comunitária.":
    "Create spaces for social interaction, culture, volunteering and community participation.",

  "Aprendizagem":
    "Learning",

  "Estimular novos conhecimentos e inclusão digital durante toda a vida.":
    "Encourage new knowledge and digital inclusion throughout life.",

  "CIDADE HUMANA":
    "HUMAN CITY",

  "Uma cidade acessível beneficia todas as gerações.":
    "An accessible city benefits every generation.",

  "Bancos em praças, calçadas adequadas, transporte acessível, iluminação e espaços verdes tornam a vida urbana melhor para todos.":
    "Benches in parks, proper sidewalks, accessible transportation, lighting and green spaces make urban life better for everyone.",

  "INCLUSÃO":
    "INCLUSION",

  "Acessibilidade não é":
    "Accessibility is not",

  "opcional.":
    "optional.",

  "Uma cidade verdadeiramente inclusiva elimina barreiras físicas, sociais e digitais.":
    "A truly inclusive city removes physical, social and digital barriers.",

  "Calçadas acessíveis":
    "Accessible sidewalks",

  "Espaço adequado, piso regular e rampas.":
    "Adequate space, regular surfaces and ramps.",

  "Comunicação acessível":
    "Accessible communication",

  "Informações visuais, sonoras e simples.":
    "Visual, audio and easy-to-understand information.",

  "Transporte inclusivo":
    "Inclusive transportation",

  "Veículos e pontos acessíveis.":
    "Accessible vehicles and stops.",

  "Inclusão digital":
    "Digital inclusion",

  "Serviços digitais simples e acessíveis.":
    "Simple and accessible digital services.",

  "MOBILIDADE URBANA":
    "URBAN MOBILITY",

  "Mover-se pela cidade":
    "Moving around the city",

  "deve ser fácil.":
    "should be easy.",

  "Mobilidade urbana é muito mais do que carros. É garantir que as pessoas consigam chegar aos lugares com segurança e autonomia.":
    "Urban mobility is much more than cars. It means ensuring that people can reach places safely and independently.",

  "Pedestres":
    "Pedestrians",

  "Calçadas contínuas, iluminação, travessias seguras e bancos para descanso.":
    "Continuous sidewalks, lighting, safe crossings and rest benches.",

  "Transporte público":
    "Public transportation",

  "Veículos acessíveis, pontos bem localizados e informações claras.":
    "Accessible vehicles, well-located stops and clear information.",

  "Bicicletas":
    "Bicycles",

  "Ciclovias conectadas e espaços seguros para bicicletas.":
    "Connected bike lanes and safe spaces for bicycles.",

  "Segurança viária":
    "Road safety",

  "Faixas de pedestres, sinalização adequada e redução de velocidades perigosas.":
    "Pedestrian crossings, proper signs and reduced dangerous speeds.",

  "COMO PODEMOS MELHORAR?":
    "HOW CAN WE IMPROVE?",

  "Problemas urbanos":
    "Urban problems",

  "e suas soluções.":
    "and their solutions.",

  "Calçadas quebradas":
    "Broken sidewalks",

  "Dificultam a circulação de idosos, cadeirantes e pessoas com mobilidade reduzida.":
    "They make movement difficult for older people, wheelchair users and people with reduced mobility.",

  "✓ Recuperar e padronizar calçadas":
    "✓ Repair and standardize sidewalks",

  "Pouca arborização":
    "Too few trees",

  "A ausência de árvores aumenta o calor e reduz o conforto dos espaços públicos.":
    "The lack of trees increases heat and reduces comfort in public spaces.",

  "✓ Criar corredores verdes":
    "✓ Create green corridors",

  "Transporte insuficiente":
    "Insufficient transportation",

  "Linhas e horários inadequados podem dificultar o acesso a serviços importantes.":
    "Inadequate routes and schedules can make access to important services difficult.",

  "✓ Melhorar rotas e horários":
    "✓ Improve routes and schedules",

  "Falta de iluminação":
    "Poor lighting",

  "Ruas mal iluminadas reduzem a sensação de segurança.":
    "Poorly lit streets can reduce people's sense of safety.",

  "✓ Melhorar iluminação pública":
    "✓ Improve public lighting",

  "SOLUÇÕES":
    "SOLUTIONS",

  "Seis caminhos para":
    "Six paths toward",

  "uma cidade melhor.":
    "a better city.",

  "Mais áreas verdes":
    "More green areas",

  "Praças, árvores, jardins e espaços de convivência.":
    "Parks, trees, gardens and community spaces.",

  "Acessibilidade universal":
    "Universal accessibility",

  "Remover barreiras e melhorar a circulação.":
    "Remove barriers and improve mobility.",

  "Transporte eficiente":
    "Efficient transportation",

  "Transporte público conectado e acessível.":
    "Connected and accessible public transportation.",

  "Iluminação inteligente":
    "Smart lighting",

  "Mais segurança e eficiência nos espaços públicos.":
    "More safety and efficiency in public spaces.",

  "Espaços de convivência":
    "Community spaces",

  "Locais para cultura, esporte e interação.":
    "Places for culture, sports and interaction.",

  "Cidade conectada":
    "Connected city",

  "Tecnologia para facilitar serviços e participação.":
    "Technology to make services and participation easier.",

  "INDICADORES":
    "INDICATORS",

  "Uma cidade preparada":
    "A prepared city",

  "pensa no futuro.":
    "thinks about the future.",

  "Acessibilidade":
    "Accessibility",

  "Espaços públicos acessíveis.":
    "Accessible public spaces.",

  "Autonomia":
    "Autonomy",

  "Liberdade para circular e participar.":
    "Freedom to move around and participate.",

  "Segurança":
    "Safety",

  "Ruas e transportes mais seguros.":
    "Safer streets and transportation.",

  "Participação":
    "Participation",

  "Comunidade envolvida nas decisões.":
    "Community involved in decisions.",

  "INSPIRAÇÃO":
    "INSPIRATION",

  "Como pode ser a":
    "What could the",

  "cidade do futuro?":
    "city of the future look like?",

  "Cidade conectada":
    "Connected city",

  "Mobilidade":
    "Mobility",

  "Espaços públicos":
    "Public spaces",

  "Áreas verdes":
    "Green areas",

  "INTERAÇÃO":
    "INTERACTION",

  "Sua cidade é":
    "Is your city",

  "acessível?":
    "accessible?",

  "Marque os itens que existem no seu bairro.":
    "Check the items that exist in your neighborhood.",

  "Calçadas em boas condições":
    "Sidewalks in good condition",

  "Rampas de acessibilidade":
    "Accessibility ramps",

  "Faixas de pedestres":
    "Pedestrian crossings",

  "Transporte público acessível":
    "Accessible public transportation",

  "Boa iluminação":
    "Good lighting",

  "Áreas verdes e espaços de convivência":
    "Green areas and community spaces",

  "Avaliar minha cidade":
    "Evaluate my city",

  "TECNOLOGIA":
    "TECHNOLOGY",

  "Conheça o":
    "Meet",

  "Converse com nosso assistente e tire dúvidas sobre envelhecimento ativo, inclusão, acessibilidade e mobilidade urbana.":
    "Talk to our assistant and ask questions about active aging, inclusion, accessibility and urban mobility.",

  "Assistente do projeto":
    "Project assistant",

  "● Online":
    "● Online",

  "Olá! 👋 Sou a VivaIA. Posso explicar temas como acessibilidade, envelhecimento ativo, mobilidade urbana e soluções para cidades.":
    "Hello! 👋 I'm VivaIA. I can explain topics such as accessibility, active aging, urban mobility and solutions for cities.",

  "O que você gostaria de saber?":
    "What would you like to know?",

  "👴 Envelhecimento ativo":
    "👴 Active aging",

  "♿ Acessibilidade":
    "♿ Accessibility",

  "🚌 Mobilidade":
    "🚌 Mobility",

  "🌎 Inclusão":
    "🌎 Inclusion",

  "Digite sua pergunta...":
    "Type your question...",

  "A VivaIA desta versão funciona localmente no navegador e responde com uma base de conhecimento sobre o projeto.":
    "This version of VivaIA works locally in your browser and responds using a knowledge base about the project.",

  "DÚVIDAS":
    "FAQ",

  "Perguntas":
    "Frequently",

  "frequentes.":
    "asked questions.",

  "O que significa envelhecimento ativo?":
    "What does active aging mean?",

  "É uma abordagem que busca proporcionar saúde, participação, segurança e qualidade de vida ao longo do envelhecimento.":
    "It is an approach that seeks to provide health, participation, safety and quality of life throughout aging.",

  "O que é uma cidade inclusiva?":
    "What is an inclusive city?",

  "É uma cidade que procura eliminar barreiras e permitir que pessoas diferentes participem da vida urbana.":
    "It is a city that seeks to remove barriers and allow different people to participate in urban life.",

  "Por que a mobilidade urbana é importante?":
    "Why is urban mobility important?",

  "Porque permite que as pessoas tenham acesso a trabalho, educação, saúde, lazer e convivência.":
    "Because it allows people to access work, education, healthcare, leisure and social activities.",

  "Como posso ajudar minha cidade?":
    "How can I help my city?",

  "Você pode observar problemas, participar de decisões comunitárias, preservar espaços públicos e apresentar propostas ao poder público.":
    "You can observe problems, participate in community decisions, preserve public spaces and present proposals to public authorities.",

  "PARTICIPE":
    "GET INVOLVED",

  "Qual cidade você quer deixar para o futuro?":
    "What kind of city do you want to leave for the future?",

  "Pequenas ideias podem ajudar a transformar grandes espaços.":
    "Small ideas can help transform large spaces.",

  "💡 Enviar uma ideia":
    "💡 Send an idea",

  "Sua ideia importa":
    "Your idea matters",

  "Conte uma ideia para melhorar sua cidade.":
    "Tell us an idea to improve your city.",

  "Seu nome":
    "Your name",

  "Qual melhoria você gostaria de ver?":
    "What improvement would you like to see?",

  "Enviar ideia":
    "Send idea",

  "✅ Obrigado pela sua contribuição!":
    "✅ Thank you for your contribution!",

  "Navegação":
    "Navigation",

  "Interação":
    "Interaction",

  "🤖 VivaIA":
    "🤖 VivaIA",

  "Perguntas":
    "Questions",

  "Envelhecimento Ativo, Inclusão e Mobilidade Urbana.":
    "Active Aging, Inclusion and Urban Mobility.",

  "© 2026 VivaCidade — Projeto educativo.":
    "© 2026 VivaCidade — Educational project."
};

/* =====================================
   IDEIAS PARA APRESENTAR AO PREFEITO
===================================== */

function createCityIdeasSection() {

  if (document.getElementById("ideias-prefeitura")) return;

  const section = document.createElement("section");

  section.className = "section city-ideas-section";
  section.id = "ideias-prefeitura";

  section.innerHTML = `
    <div class="container">

      <div class="section-heading">

        <span class="eyebrow">
          IDEIAS PARA A CIDADE
        </span>

        <h2>
          Propostas que podem ser apresentadas
          <span>à prefeitura.</span>
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
            Instalar sinais sonoros para ajudar pessoas com deficiência
            visual durante a travessia das ruas.
          </p>
        </article>

        <article class="city-idea-card">
          <div class="city-idea-icon">♿</div>
          <h3>Rampas acessíveis</h3>
          <p>
            Criar e melhorar rampas em calçadas, prédios públicos,
            praças e locais de grande circulação.
          </p>
        </article>

        <article class="city-idea-card">
          <div class="city-idea-icon">🚶</div>
          <h3>Calçadas acessíveis</h3>
          <p>
            Recuperar calçadas quebradas, remover obstáculos e melhorar
            a circulação de pedestres.
          </p>
        </article>

        <article class="city-idea-card">
          <div class="city-idea-icon">🚌</div>
          <h3>Pontos de ônibus acessíveis</h3>
          <p>
            Criar pontos com cobertura, bancos, espaço adequado e
            informações fáceis de entender.
          </p>
        </article>

        <article class="city-idea-card">
          <div class="city-idea-icon">🔊</div>
          <h3>Ônibus com avisos sonoros</h3>
          <p>
            Informar por áudio o número ou nome das próximas paradas,
            facilitando o uso do transporte público.
          </p>
        </article>

        <article class="city-idea-card">
          <div class="city-idea-icon">💡</div>
          <h3>Melhor iluminação</h3>
          <p>
            Melhorar a iluminação de ruas, praças, pontos de ônibus
            e áreas de grande circulação.
          </p>
        </article>

        <article class="city-idea-card">
          <div class="city-idea-icon">🌳</div>
          <h3>Mais áreas verdes</h3>
          <p>
            Plantar árvores e criar áreas verdes para oferecer sombra,
            conforto térmico e espaços de convivência.
          </p>
        </article>

        <article class="city-idea-card">
          <div class="city-idea-icon">🪑</div>
          <h3>Bancos para descanso</h3>
          <p>
            Instalar bancos em praças e trajetos movimentados,
            beneficiando principalmente pessoas que precisam descansar.
          </p>
        </article>

        <article class="city-idea-card">
          <div class="city-idea-icon">⏱️</div>
          <h3>Mais tempo para pedestres</h3>
          <p>
            Avaliar tempos de travessia para facilitar a passagem de
            pessoas idosas e pessoas com mobilidade reduzida.
          </p>
        </article>

        <article class="city-idea-card">
          <div class="city-idea-icon">📱</div>
          <h3>Canal para problemas urbanos</h3>
          <p>
            Criar um canal digital para moradores comunicarem problemas
            como buracos, iluminação defeituosa e calçadas danificadas.
          </p>
        </article>

        <article class="city-idea-card">
          <div class="city-idea-icon">🏞️</div>
          <h3>Praças acessíveis</h3>
          <p>
            Criar espaços com caminhos acessíveis, bancos, áreas verdes
            e equipamentos que possam ser utilizados por diferentes pessoas.
          </p>
        </article>

        <article class="city-idea-card">
          <div class="city-idea-icon">🗣️</div>
          <h3>Participação da população</h3>
          <p>
            Criar espaços para moradores apresentarem sugestões,
            identificarem problemas e participarem das discussões sobre a cidade.
          </p>
        </article>

      </div>

      <div class="idea-action-box">

        <h3>
          💡 Tem outra ideia?
        </h3>

        <p>
          Uma boa proposta pode começar com um simples problema
          observado no seu bairro.
        </p>

        <button class="btn btn-white" id="openIdeaFromCity">
          Enviar minha ideia
        </button>

      </div>

    </div>
  `;

  const solutions = document.getElementById("solucoes");

  if (solutions) {
    solutions.parentNode.insertBefore(section, solutions);
  } else {
    document.querySelector("main").appendChild(section);
  }
}

createCityIdeasSection();

/* =====================================
   TRADUÇÃO DOS TEXTOS
===================================== */

const originalTextNodes = new WeakMap();

function translateTextNodes(language) {

  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT
  );

  const nodes = [];

  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }

  nodes.forEach(node => {

    if (!originalTextNodes.has(node)) {
      originalTextNodes.set(node, node.nodeValue.trim());
    }

    const original = originalTextNodes.get(node);

    if (!original) return;

    if (language === "en" && translations[original]) {

      const leading =
        node.nodeValue.match(/^\s*/)?.[0] || "";

      const trailing =
        node.nodeValue.match(/\s*$/)?.[0] || "";

      node.nodeValue =
        leading +
        translations[original] +
        trailing;

    } else if (language === "pt") {

      node.nodeValue = original;
    }

  });
}

/* =====================================
   TRADUÇÃO DOS CAMPOS
===================================== */

function updateFields(language) {

  const input = document.getElementById("chatInput");

  if (input) {
    input.placeholder =
      language === "en"
        ? "Type your question..."
        : "Digite sua pergunta...";
  }

  const name = document.getElementById("ideaName");

  if (name) {
    name.placeholder =
      language === "en"
        ? "Your name"
        : "Seu nome";
  }

  const ideaText = document.getElementById("ideaText");

  if (ideaText) {
    ideaText.placeholder =
      language === "en"
        ? "What improvement would you like to see?"
        : "Qual melhoria você gostaria de ver?";
  }
}

/* =====================================
   QUICK QUESTIONS
===================================== */

function updateQuickQuestions(language) {

  const buttons =
    document.querySelectorAll(".quick-questions button");

  const questionsPT = [
    "O que é envelhecimento ativo?",
    "O que é acessibilidade?",
    "Como melhorar a mobilidade urbana?",
    "Como tornar uma cidade mais inclusiva?"
  ];

  const questionsEN = [
    "What is active aging?",
    "What is accessibility?",
    "How can we improve urban mobility?",
    "How can we make a city more inclusive?"
  ];

  buttons.forEach((button, index) => {

    if (language === "en") {

      button.textContent = [
        "👴 Active aging",
        "♿ Accessibility",
        "🚌 Mobility",
        "🌎 Inclusion"
      ][index];

      button.dataset.question =
        questionsEN[index];

    } else {

      button.textContent = [
        "👴 Envelhecimento ativo",
        "♿ Acessibilidade",
        "🚌 Mobilidade",
        "🌎 Inclusão"
      ][index];

      button.dataset.question =
        questionsPT[index];
    }

  });
}

/* =====================================
   TROCAR IDIOMA
===================================== */

function applyLanguage(language) {

  currentLanguage = language;

  localStorage.setItem(
    "vivacidadeLanguage",
    language
  );

  document.documentElement.lang =
    language === "en"
      ? "en"
      : "pt-BR";

  translateTextNodes(language);
  updateFields(language);
  updateQuickQuestions(language);

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

  document.title =
    language === "en"
      ? "VivaCidade | City for Everyone"
      : "VivaCidade | Cidade para Todos";

  const meta =
    document.querySelector('meta[name="description"]');

  if (meta) {
    meta.content =
      language === "en"
        ? "VivaCidade - Active Aging, Inclusion and Urban Mobility."
        : "VivaCidade - Envelhecimento Ativo, Inclusão e Mobilidade Urbana.";
  }
}

if (languageBtn) {

  languageBtn.addEventListener("click", () => {

    applyLanguage(
      currentLanguage === "pt"
        ? "en"
        : "pt"
    );

  });
}

/* =====================================
   CHECKLIST
===================================== */

const checkResult = document.getElementById("checkResult");
const result = document.getElementById("result");
const checks = document.querySelectorAll(".check");

function getChecklistMessage(checked, total) {

  if (currentLanguage === "en") {

    if (checked === 0) {
      return "Your city still has many areas that could be improved. Start by observing your neighborhood and identifying the main problems.";
    }

    if (checked <= 2) {
      return `You checked ${checked} of ${total}. There are good opportunities to improve accessibility, safety and mobility.`;
    }

    if (checked <= 4) {
      return `You checked ${checked} of ${total}. Your area has made some progress, but important challenges still exist.`;
    }

    if (checked < total) {
      return `You checked ${checked} of ${total}. Your area is making great progress! There are still some points that could improve.`;
    }

    return `You checked ${checked} of ${total}. Excellent! Your neighborhood has several elements of a more inclusive and accessible city.`;

  }

  if (checked === 0) {
    return "Sua cidade ainda apresenta muitos pontos que podem ser melhorados. Comece observando seu bairro e identificando os principais problemas.";
  }

  if (checked <= 2) {
    return `Você marcou ${checked} de ${total}. Existem boas oportunidades para melhorar a acessibilidade, segurança e mobilidade.`;
  }

  if (checked <= 4) {
    return `Você marcou ${checked} de ${total}. Sua região possui alguns avanços, mas ainda existem desafios importantes.`;
  }

  if (checked < total) {
    return `Você marcou ${checked} de ${total}. Sua região está avançando bastante! Ainda existem alguns pontos que podem melhorar.`;
  }

  return `Você marcou ${checked} de ${total}. Excelente! Seu bairro apresenta vários elementos de uma cidade mais inclusiva e acessível.`;
}

if (checkResult) {

  checkResult.addEventListener("click", () => {

    const total = checks.length;

    const checked =
      document.querySelectorAll(".check:checked").length;

    result.textContent =
      getChecklistMessage(checked, total);

    result.style.display = "block";
  });
}

/* =====================================
   MODAL DE IDEIAS
===================================== */

const ideaBtn = document.getElementById("ideaBtn");
const ideaModal = document.getElementById("ideaModal");
const closeModal = document.getElementById("closeModal");
const ideaForm = document.getElementById("ideaForm");
const success = document.getElementById("success");

function openIdeaModal() {

  if (!ideaModal) return;

  ideaModal.classList.add("active");

  document.body.style.overflow = "hidden";
}

if (ideaBtn) {
  ideaBtn.addEventListener(
    "click",
    openIdeaModal
  );
}

const openIdeaFromCity =
  document.getElementById("openIdeaFromCity");

if (openIdeaFromCity) {
  openIdeaFromCity.addEventListener(
    "click",
    openIdeaModal
  );
}

if (closeModal) {

  closeModal.addEventListener("click", () => {

    ideaModal.classList.remove("active");

    document.body.style.overflow = "";
  });
}

if (ideaModal) {

  ideaModal.addEventListener("click", event => {

    if (event.target === ideaModal) {

      ideaModal.classList.remove("active");

      document.body.style.overflow = "";
    }

  });
}

if (ideaForm) {

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

}

/* =====================================
   ESC FECHA MODAL
===================================== */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    if (ideaModal) {
      ideaModal.classList.remove("active");
    }

    document.body.style.overflow = "";

    if (accessPanel) {
      accessPanel.classList.remove("active");
    }

  }

});

/* =====================================
   VIVAI
===================================== */

const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

function addMessage(text, type = "ai") {

  if (!chatMessages) return;

  const message =
    document.createElement("div");

  message.className =
    type === "user"
      ? "message user-message"
      : "message ai-message";

  const avatar =
    document.createElement("div");

  avatar.className =
    "message-avatar";

  avatar.textContent =
    type === "user"
      ? "👤"
      : "🤖";

  const content =
    document.createElement("div");

  content.className =
    "message-content";

  content.innerHTML = text;

  message.appendChild(avatar);
  message.appendChild(content);

  chatMessages.appendChild(message);

  chatMessages.scrollTop =
    chatMessages.scrollHeight;
}

function getAIResponse(question) {

  const q =
    question
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const english =
    currentLanguage === "en";

  if (
    q.includes("envelhecimento ativo") ||
    q.includes("envelhecer") ||
    q.includes("active aging") ||
    q.includes("active ageing")
  ) {

    if (english) {

      return `
        <strong>Active aging</strong> is an approach that seeks to improve quality of life throughout aging.
        <br><br>
        It involves:
        <br>• health and well-being;
        <br>• safety;
        <br>• social participation;
        <br>• autonomy;
        <br>• lifelong learning.
        <br><br>
        A well-planned city can greatly support this process.
      `;

    }

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
    q.includes("rampa") ||
    q.includes("accessibility") ||
    q.includes("wheelchair") ||
    q.includes("ramp")
  ) {

    if (english) {

      return `
        <strong>Accessibility</strong> means reducing or eliminating barriers that make participation difficult.
        <br><br>
        Examples include:
        <br>♿ ramps;
        <br>🚶 proper sidewalks;
        <br>🚌 accessible transportation;
        <br>🔊 accessible information;
        <br>🚦 safe crossings.
        <br><br>
        The goal is to allow as many people as possible to use public spaces independently.
      `;

    }

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
    q.includes("ônibus") ||
    q.includes("mobility") ||
    q.includes("transportation") ||
    q.includes("bus")
  ) {

    if (english) {

      return `
        <strong>Urban mobility</strong> is the way people move around a city.
        <br><br>
        We can improve it by:
        <br>🚌 improving public transportation;
        <br>🚶 prioritizing pedestrians;
        <br>🚲 creating connected bike lanes;
        <br>🚦 improving crossings and signs;
        <br>🌳 creating more comfortable routes.
        <br><br>
        Good mobility offers different ways to move around the city.
      `;

    }

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
    q.includes("cidade inclusiva") ||
    q.includes("inclusive city") ||
    q.includes("inclusion")
  ) {

    if (english) {

      return `
        An <strong>inclusive city</strong> is planned so that different people can participate in urban life.
        <br><br>
        This involves physical accessibility, transportation, communication, digital inclusion, safety and community participation.
        <br><br>
        The goal is to reduce barriers and increase people's autonomy.
      `;

    }

    return `
      Uma <strong>cidade inclusiva</strong> é planejada para que diferentes pessoas possam participar da vida urbana.
      <br><br>
      Isso envolve acessibilidade física, transporte, comunicação, inclusão digital, segurança e participação da comunidade.
      <br><br>
      O objetivo é diminuir barreiras e aumentar a autonomia das pessoas.
    `;
  }

  if (
    q.includes("melhorar") ||
    q.includes("solucao") ||
    q.includes("soluções") ||
    q.includes("improve") ||
    q.includes("solution")
  ) {

    if (english) {

      return `
        There are many ways to improve a city.
        <br><br>
        Some possibilities are:
        <br>🌳 more green areas;
        <br>♿ better accessibility;
        <br>🚶 better sidewalks;
        <br>🚌 better public transportation;
        <br>💡 better lighting;
        <br>🚲 active mobility;
        <br>🤝 more community participation.
        <br><br>
        The first step is identifying the most important problems in each area.
      `;

    }

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
    q.includes("calcada") ||
    q.includes("sidewalk")
  ) {

    return english
      ? `
        <strong>Sidewalks</strong> are fundamental for mobility.
        <br><br>
        A good sidewalk should have a regular surface, enough space for circulation, accessibility and safe connections to crossings.
        <br><br>
        Obstacles that make passage difficult should also be avoided.
      `
      : `
        <strong>Calçadas</strong> são fundamentais para a mobilidade.
        <br><br>
        Uma boa calçada deve ter superfície regular, espaço suficiente para circulação, acessibilidade e conexão segura com travessias.
        <br><br>
        Também é importante evitar obstáculos que dificultem a passagem.
      `;
  }

  if (
    q.includes("idoso") ||
    q.includes("idosa") ||
    q.includes("pessoa idosa") ||
    q.includes("older people") ||
    q.includes("elderly")
  ) {

    return english
      ? `
        A city that is friendly to <strong>older people</strong> should support autonomy and participation.
        <br><br>
        This can include:
        <br>🪑 rest benches;
        <br>🚶 safe sidewalks;
        <br>💡 good lighting;
        <br>🚌 accessible transportation;
        <br>🌳 green areas;
        <br>🏥 easier access to services.
      `
      : `
        Uma cidade amigável para <strong>pessoas idosas</strong> deve facilitar a autonomia e a participação.
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
    q.includes("boa noite") ||
    q.includes("hello") ||
    q.includes("hi") ||
    q.includes("good morning") ||
    q.includes("good afternoon") ||
    q.includes("good evening")
  ) {

    return english
      ? `
        Hello! 👋
        <br><br>
        I'm <strong>VivaIA</strong>, the VivaCidade project assistant.
        <br><br>
        You can ask me about:
        <br>👴 active aging;
        <br>♿ inclusion;
        <br>🚶 accessibility;
        <br>🚌 urban mobility;
        <br>🌳 city solutions.
      `
      : `
        Olá! 👋
        <br><br>
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

  return english
    ? `
      That's a great question! 🤖
      <br><br>
      Within the project's theme, we can think about solutions involving
      <strong>accessibility, active aging, inclusion, mobility, safety and quality public spaces</strong>.
      <br><br>
      Try asking:
      <br>• "What is active aging?"
      <br>• "How can we improve mobility?"
      <br>• "What is accessibility?"
      <br>• "How can we create an inclusive city?"
    `
    : `
      Essa é uma ótima pergunta! 🤖
      <br><br>
      Dentro do tema do projeto, podemos pensar em soluções envolvendo
      <strong>acessibilidade, envelhecimento ativo, inclusão, mobilidade, segurança e qualidade dos espaços públicos</strong>.
      <br><br>
      Tente perguntar, por exemplo:
      <br>• "O que é envelhecimento ativo?"
      <br>• "Como melhorar a mobilidade?"
      <br>• "O que é acessibilidade?"
      <br>• "Como criar uma cidade inclusiva?"
    `;
}

/* =====================================
   ENVIO DO CHAT
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

if (chatForm) {

  chatForm.addEventListener(
    "submit",
    event => {

      event.preventDefault();

      sendQuestion(chatInput.value);

    }
  );

}

function setupQuickQuestions() {

  document
    .querySelectorAll(".quick-questions button")
    .forEach(button => {

      button.addEventListener("click", () => {

        sendQuestion(
          button.dataset.question
        );

      });

    });

}

setupQuickQuestions();

/* =====================================
   BOTÃO HERO → IA
===================================== */

const heroAiBtn =
  document.getElementById("heroAiBtn");

if (heroAiBtn) {

  heroAiBtn.addEventListener("click", () => {

    document
      .getElementById("ia")
      .scrollIntoView({
        behavior: "smooth"
      });

    setTimeout(() => {

      if (chatInput) {
        chatInput.focus();
      }

    }, 700);

  });

}

/* =====================================
   ANIMAÇÕES
===================================== */

const animatedElements =
  document.querySelectorAll(
    ".feature-card, .info-card, .mobility-card, .problem-card, .solution, .indicator, .inclusion-item, .city-idea-card"
  );

if ("IntersectionObserver" in window) {

  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform =
              "translateY(0)";

            observer.unobserve(
              entry.target
            );

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

}

/* =====================================
   HEADER AO ROLAR
===================================== */

const header =
  document.getElementById("header");

if (header) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

      header.style.boxShadow =
        "0 8px 30px rgba(16,35,31,.10)";

    } else {

      header.style.boxShadow =
        "none";

    }

  });

}

/* =====================================
   INICIAR IDIOMA
===================================== */

applyLanguage(currentLanguage);