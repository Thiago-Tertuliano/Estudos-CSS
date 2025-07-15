🎓 CSS Avançado – Aula 8
🔹 Tema: Projeto Final – Landing Page Completa e Moderna
🎯 Objetivo:
Criar uma landing page com estrutura moderna, responsiva, com:

Layout em Grid

Tema claro e escuro (Dark Mode)

Variáveis CSS

Transições e animações

Estilo visual refinado

✅ Estrutura do Projeto
📁 Organização de pastas:
bash
Copiar
Editar
/projeto-final/
├── index.html
├── style.css
├── script.js
└── /images/ (opcional)
✅ HTML base (semântico)
html
Copiar
Editar
<body>
  <header>
    <h1>Meu Projeto</h1>
    <button id="toggle-dark">🌙</button>
  </header>

  <main class="grid-layout">
    <section class="hero fade-in">
      <h2>Bem-vindo</h2>
      <p>Essa é uma landing page feita com CSS moderno.</p>
      <a href="#" class="botao">Começar</a>
    </section>

    <section class="cards">
      <div class="card">Card 1</div>
      <div class="card">Card 2</div>
      <div class="card">Card 3</div>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 • Projeto Final CSS</p>
  </footer>

  <script src="script.js"></script>
</body>
✅ CSS completo (style.css)
🔹 Variáveis e modo escuro
css
Copiar
Editar
:root {
  --bg: #ffffff;
  --text: #111111;
  --primaria: #0066cc;
  --card-bg: #f2f2f2;
}

body.dark-mode {
  --bg: #111111;
  --text: #eeeeee;
  --primaria: #0050aa;
  --card-bg: #1a1a1a;
}
🔹 Base e Layout
css
Copiar
Editar
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--bg);
  color: var(--text);
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  transition: background 0.3s, color 0.3s;
}

header, footer {
  text-align: center;
  padding: 20px;
}

.grid-layout {
  display: grid;
  grid-template-areas:
    "hero"
    "cards";
  gap: 40px;
  padding: 40px;
}

.hero {
  grid-area: hero;
  text-align: center;
}

.cards {
  grid-area: cards;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
🔹 Componentes e efeitos
css
Copiar
Editar
.card {
  background-color: var(--card-bg);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.botao {
  background-color: var(--primaria);
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  display: inline-block;
  margin-top: 20px;
  transition: background-color 0.3s ease;
}

.botao:hover {
  background-color: #004999;
}

.fade-in {
  animation: aparecer 0.8s ease forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes aparecer {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
✅ JavaScript para Dark Mode (script.js)
js
Copiar
Editar
const botao = document.getElementById('toggle-dark')

botao.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode')
})
🧪 Desafio final
Customize as cores e fontes com variáveis

Adicione animações nos cards

Teste o dark mode funcionando

Adicione media queries para ajustar padding e fontes no mobile

Suba o projeto no GitHub ou Netlify (se quiser, te ajudo com isso)

🏁 Parabéns!
Você concluiu o curso CSS Avançado – Estilização Moderna, aplicando:

✅ Grid Layout
✅ Responsividade inteligente
✅ Dark Mode real
✅ Variáveis CSS
✅ Transições e Animações
✅ Código limpo e escalável