🎓 CSS Avançado – Aula 4
🔹 Tema: Dark Mode com CSS puro
✅ 1. Dark Mode automático (respeitando o sistema do usuário)
Você pode detectar se o sistema do usuário está em modo escuro com:

css
Copiar
Editar
@media (prefers-color-scheme: dark) {
  body {
    background-color: #111;
    color: #f0f0f0;
  }
}
Esse media query ativa estilos somente quando o sistema do usuário está em dark mode (Windows, Android, iOS, macOS…).

Exemplo completo:
css
Copiar
Editar
body {
  background-color: #ffffff;
  color: #222222;
  transition: background-color 0.3s, color 0.3s;
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: #111111;
    color: #f0f0f0;
  }
}
✅ 2. Dark Mode manual com botão (CSS + classes)
Se quiser permitir que o usuário ative/desative, aí o ideal é usar JavaScript simples com classes CSS diferentes.

HTML:
html
Copiar
Editar
<button id="toggle-dark">🌙 Alternar Tema</button>
CSS:
css
Copiar
Editar
body {
  background-color: white;
  color: #222;
  transition: all 0.3s;
}

body.dark-mode {
  background-color: #111;
  color: #eee;
}
JS:
html
Copiar
Editar
<script>
  const btn = document.getElementById('toggle-dark')
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
  })
</script>
✅ 3. Aplicando dark mode a componentes específicos
css
Copiar
Editar
.card {
  background-color: #f2f2f2;
  color: #222;
}

body.dark-mode .card {
  background-color: #1a1a1a;
  color: #ddd;
}
Você pode criar temas completos apenas usando modificadores assim:
.dark-mode .elemento { ... }

🧪 Exercício 4 – Ative o modo escuro no seu projeto
Adicione o @media (prefers-color-scheme: dark) ao seu style.css

Estilize:

body

header, footer

.card, .botao, etc.

(Opcional) Crie um botão para alternar o tema

Teste no navegador com CTRL+SHIFT+P → “Toggle dark mode” (Chrome DevTools)

📌 Dica:
Você pode usar :root para definir variáveis CSS com temas claros e escuros. Exemplo:

css
Copiar
Editar
:root {
  --bg: #ffffff;
  --text: #222222;
}

body {
  background-color: var(--bg);
  color: var(--text);
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #111111;
    --text: #eeeeee;
  }
}