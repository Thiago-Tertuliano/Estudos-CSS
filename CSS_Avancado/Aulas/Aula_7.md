# 🎓 CSS Avançado – Aula 7

## 🔹 Tema: Variáveis CSS (Custom Properties) e Organização Moderna

---

### ✅ O que são Variáveis CSS?

Variáveis CSS (custom properties) permitem definir valores reutilizáveis para cores, fontes, espaçamentos, etc., facilitando manutenção, criação de temas e padronização do design.

```css
:root {
  --cor-primaria: #0066cc;
  --cor-secundaria: #f2f2f2;
  --texto-principal: #222;
  --fonte-base: 'Roboto', sans-serif;
}
body {
  background-color: var(--cor-secundaria);
  color: var(--texto-principal);
  font-family: var(--fonte-base);
}
.botao {
  background-color: var(--cor-primaria);
}
```

---

### ✅ Vantagens das Variáveis CSS

- **Manutenção fácil:** altere um valor e afete todo o projeto.
- **Temas dinâmicos:** mude do claro para o escuro facilmente.
- **Menos repetição:** DRY (Don't Repeat Yourself).
- **Design system:** padronização visual.

---

### ✅ Tema Claro e Escuro com Variáveis

```css
:root {
  --bg: #ffffff;
  --text: #111111;
  --cor-principal: #0066cc;
}
body {
  background-color: var(--bg);
  color: var(--text);
}
.botao {
  background-color: var(--cor-principal);
}
/* Dark mode */
body.dark-mode {
  --bg: #111111;
  --text: #eeeeee;
  --cor-principal: #0050aa;
}
```

**Troque o tema** com:
```js
document.body.classList.toggle('dark-mode');
```

---

### ✅ Variáveis Locais vs Globais

- **Globais:** definidas em `:root`, valem para todo o CSS.
- **Locais:** definidas em um seletor, valem só para aquele escopo.

```css
:root {
  --borda-raio: 8px;
}
.card {
  --sombra: 0 0 10px rgba(0,0,0,0.2);
  box-shadow: var(--sombra);
  border-radius: var(--borda-raio);
}
```

---

### ✅ Organização Moderna por Categorias

Organize suas variáveis por grupos:

```css
:root {
  /* Cores */
  --cor-bg: #f8f8f8;
  --cor-texto: #222;
  --cor-link: #0066cc;

  /* Tipografia */
  --fonte-base: 'Inter', sans-serif;
  --tamanho-base: 16px;

  /* Espaçamentos */
  --espacamento: 20px;
  --borda-raio: 8px;
}
```

---

### ✅ Fallbacks e Funções

Use fallback para garantir valor padrão:

```css
color: var(--cor-inexistente, red); /* se não existir, usa red */
```

Use variáveis com funções:

```css
.container {
  padding: calc(var(--espacamento, 20px) * 2);
}
```

---

### 🧪 Exercício 7 – Refatorando com Variáveis

**Desafio:**  
1. Crie um bloco `:root` com pelo menos 3 cores, 1 fonte, 1 espaçamento.
2. Substitua todas as cores e fontes fixas do seu CSS por `var(--...)`.
3. Adicione `.dark-mode` com variáveis diferentes.
4. Implemente um botão para alternar o tema (claro/escuro) usando JavaScript.

**Dica bônus:**  
Use fallback:  
```css
color: var(--cor-primaria, #0066cc);
```

---

### 📚 Recursos

- [MDN - CSS Custom Properties](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Using_CSS_custom_properties)
- [CSS Tricks - Guia de Variáveis CSS](https://css-tricks.com/css-variables-a-guide/)
- [Design System com CSS](https://www.smashingmagazine.com/2021/03/modern-css-solutions-custom-properties/)

---

Se quiser um exemplo de projeto prático ou um exercício completo, é só pedir!
