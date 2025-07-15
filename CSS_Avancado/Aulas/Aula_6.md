# 🎓 CSS Avançado – Aula 6
## 🔹 Tema: Pseudoelementos e Pseudoclasses

### 📖 Conceito

Pseudoelementos e pseudoclasses são **ferramentas poderosas** do CSS que permitem:

- **Estilizar estados** específicos dos elementos
- **Criar conteúdo** virtual sem HTML adicional
- **Melhorar a UX** com feedback visual
- **Reduzir markup** desnecessário
- **Criar efeitos** visuais avançados

---

## ✅ 1. Pseudoclasses - Estados e Comportamento

### 🎯 Conceito Básico

Pseudoclasses são **seletores especiais** que permitem estilizar elementos baseados em seu **estado** ou **posição**:

```css
/* ===================================
   SINTAXE BÁSICA
   =================================== */
seletor:pseudoclasse {
  propriedade: valor;
}

/* Exemplo */
a:hover {
  color: #667eea;
  text-decoration: underline;
}
```

### 🎨 Pseudoclasses de Estado

```css
/* ===================================
   PSEUDOCLASSES DE ESTADO
   =================================== */

/* Hover - Mouse sobre o elemento */
.elemento:hover {
  background-color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

/* Focus - Elemento recebe foco */
.input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

/* Active - Elemento está sendo clicado */
.botao:active {
  transform: scale(0.95);
}

/* Visited - Link já foi visitado */
a:visited {
  color: #805ad5;
}

/* Disabled - Elemento desabilitado */
.botao:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: #e2e8f0;
}
```

### 🎯 Pseudoclasses de Posição

```css
/* ===================================
   PSEUDOCLASSES DE POSIÇÃO
   =================================== */

/* Primeiro filho */
.lista li:first-child {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

/* Último filho */
.lista li:last-child {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

/* N-ésimo filho */
.lista li:nth-child(odd) {
  background-color: #f7fafc;
}

.lista li:nth-child(even) {
  background-color: #ffffff;
}

/* A cada 3 elementos */
.lista li:nth-child(3n) {
  border-bottom: 2px solid #e2e8f0;
}

/* Primeiro de cada tipo */
p:first-of-type {
  font-size: 1.2em;
  font-weight: 600;
}

/* Último de cada tipo */
p:last-of-type {
  margin-bottom: 0;
}

/* Único filho */
.card:only-child {
  margin: 0 auto;
}
```

### 🎨 Pseudoclasses de Formulário

```css
/* ===================================
   PSEUDOCLASSES DE FORMULÁRIO
   =================================== */

/* Checkbox/Radio marcado */
input[type="checkbox"]:checked {
  accent-color: #667eea;
}

/* Campo obrigatório */
input:required {
  border-left: 3px solid #e53e3e;
}

/* Campo opcional */
input:optional {
  border-left: 3px solid #38a169;
}

/* Campo válido */
input:valid {
  border-color: #38a169;
}

/* Campo inválido */
input:invalid {
  border-color: #e53e3e;
}

/* Campo em foco e válido */
input:focus:valid {
  box-shadow: 0 0 0 3px rgba(56, 161, 105, 0.1);
}

/* Campo em foco e inválido */
input:focus:invalid {
  box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.1);
}

/* Placeholder */
input::placeholder {
  color: #a0aec0;
  font-style: italic;
}

/* Placeholder em foco */
input:focus::placeholder {
  color: #667eea;
}
```

### 🎯 Pseudoclasses de Negação

```css
/* ===================================
   PSEUDOCLASSES DE NEGAÇÃO
   =================================== */

/* Todos os elementos exceto o primeiro */
.lista li:not(:first-child) {
  border-top: 1px solid #e2e8f0;
}

/* Todos os botões exceto o primário */
.botao:not(.botao--primary) {
  background-color: #f7fafc;
  color: #4a5568;
}

/* Todos os inputs exceto os desabilitados */
input:not(:disabled) {
  cursor: text;
}

/* Todos os links exceto os visitados */
a:not(:visited) {
  color: #667eea;
}
```

---

## ✅ 2. Pseudoelementos - Conteúdo Virtual

### 🎯 Conceito Avançado

Pseudoelementos criam **conteúdo virtual** sem necessidade de HTML adicional:

```css
/* ===================================
   SINTAXE BÁSICA
   =================================== */
seletor::pseudoelemento {
  propriedade: valor;
}

/* Exemplo */
.titulo::before {
  content: "";
  display: block;
  width: 60px;
  height: 4px;
  background-color: #667eea;
  margin-bottom: 8px;
}
```

### 🎨 Pseudoelementos Principais

```css
/* ===================================
   ::BEFORE E ::AFTER
   =================================== */

/* Linha decorativa antes do título */
.titulo::before {
  content: "";
  display: block;
  width: 60px;
  height: 4px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  margin-bottom: 16px;
  border-radius: 2px;
}

/* Ícone após links externos */
a[href^="http"]::after {
  content: " ↗";
  font-size: 0.8em;
  color: #667eea;
}

/* Número antes de listas ordenadas */
.lista-numerada li::before {
  content: counter(item) ". ";
  counter-increment: item;
  font-weight: 600;
  color: #667eea;
}

/* Seta após botões */
.botao--seta::after {
  content: " →";
  transition: transform 0.3s ease;
}

.botao--seta:hover::after {
  transform: translateX(4px);
}
```

### 🎯 Pseudoelementos de Seleção

```css
/* ===================================
   ::SELECTION
   =================================== */

/* Estilo da seleção de texto */
::selection {
  background-color: #667eea;
  color: white;
}

/* Seleção específica */
.titulo::selection {
  background-color: #764ba2;
  color: white;
}

/* ===================================
   ::FIRST-LINE E ::FIRST-LETTER
   =================================== */

/* Primeira linha */
.paragrafo::first-line {
  font-weight: 600;
  color: #667eea;
}

/* Primeira letra (drop cap) */
.paragrafo::first-letter {
  font-size: 3em;
  font-weight: 700;
  color: #667eea;
  float: left;
  line-height: 1;
  margin-right: 8px;
}
```

---

## ✅ 3. Efeitos Avançados com Pseudoelementos

### 🎨 Botão com Efeito de Fundo

```css
/* ===================================
   BOTÃO COM FUNDO ANIMADO
   =================================== */
.botao-efeito {
  position: relative;
  display: inline-block;
  padding: 12px 24px;
  background-color: transparent;
  color: #667eea;
  border: 2px solid #667eea;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  overflow: hidden;
  transition: color 0.3s ease;
  cursor: pointer;
}

.botao-efeito::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  transition: left 0.3s ease;
  z-index: -1;
}

.botao-efeito:hover {
  color: white;
}

.botao-efeito:hover::before {
  left: 0;
}
```

### 🎯 Card com Borda Animada

```css
/* ===================================
   CARD COM BORDA ANIMADA
   =================================== */
.card-borda {
  position: relative;
  background-color: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-borda::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 0;
  background: linear-gradient(135deg, #667eea, #764ba2);
  transition: height 0.3s ease;
}

.card-borda:hover::before {
  height: 100%;
}
```

### 🎨 Tooltip com Pseudoelemento

```css
/* ===================================
   TOOLTIP COM ::AFTER
   =================================== */
.tooltip {
  position: relative;
  display: inline-block;
  cursor: help;
}

.tooltip::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #2d3748;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.875rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
}

.tooltip::before {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: #2d3748;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.tooltip:hover::after,
.tooltip:hover::before {
  opacity: 1;
  visibility: visible;
}
```

---

## ✅ 4. Listas e Navegação Avançadas

### 🎨 Lista com Indicadores

```css
/* ===================================
   LISTA COM INDICADORES
   =================================== */
.lista-avancada {
  list-style: none;
  padding: 0;
}

.lista-avancada li {
  position: relative;
  padding: 12px 0 12px 32px;
  border-bottom: 1px solid #e2e8f0;
  transition: background-color 0.3s ease;
}

.lista-avancada li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background-color: #667eea;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.lista-avancada li:hover {
  background-color: #f7fafc;
  padding-left: 40px;
}

.lista-avancada li:hover::before {
  width: 12px;
  height: 12px;
  background-color: #764ba2;
}
```

### 🎯 Navegação com Underline

```css
/* ===================================
   NAVEGAÇÃO COM UNDERLINE
   =================================== */
.nav-avancada {
  display: flex;
  gap: 2rem;
}

.nav-avancada a {
  position: relative;
  color: #4a5568;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 0;
  transition: color 0.3s ease;
}

.nav-avancada a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  transition: width 0.3s ease;
}

.nav-avancada a:hover {
  color: #667eea;
}

.nav-avancada a:hover::after {
  width: 100%;
}

.nav-avancada a.active {
  color: #667eea;
}

.nav-avancada a.active::after {
  width: 100%;
}
```

---

## ✅ 5. Formulários Avançados

### 🎨 Checkbox Personalizado

```css
/* ===================================
   CHECKBOX PERSONALIZADO
   =================================== */
.checkbox-custom {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.checkbox-custom input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkbox-custom::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border: 2px solid #cbd5e0;
  border-radius: 4px;
  background-color: white;
  transition: all 0.3s ease;
}

.checkbox-custom::after {
  content: "✓";
  position: absolute;
  top: 2px;
  left: 4px;
  color: white;
  font-size: 12px;
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.checkbox-custom input[type="checkbox"]:checked + label::before {
  background-color: #667eea;
  border-color: #667eea;
}

.checkbox-custom input[type="checkbox"]:checked + label::after {
  opacity: 1;
}
```

### 🎯 Input com Ícone

```css
/* ===================================
   INPUT COM ÍCONE
   =================================== */
.input-icone {
  position: relative;
  display: inline-block;
}

.input-icone input {
  padding-left: 40px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  padding: 12px 12px 12px 40px;
  transition: border-color 0.3s ease;
}

.input-icone::before {
  content: "🔍";
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: #a0aec0;
  transition: color 0.3s ease;
}

.input-icone input:focus {
  border-color: #667eea;
  outline: none;
}

.input-icone input:focus + ::before {
  color: #667eea;
}
```

---

## ✅ 6. Efeitos Visuais Avançados

### 🎨 Card com Sombra Animada

```css
/* ===================================
   CARD COM SOMBRA ANIMADA
   =================================== */
.card-sombra {
  position: relative;
  background-color: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card-sombra::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.card-sombra:hover {
  transform: translateY(-4px);
}

.card-sombra:hover::before {
  opacity: 1;
}
```

### 🎯 Botão com Gradiente Animado

```css
/* ===================================
   BOTÃO COM GRADIENTE ANIMADO
   =================================== */
.botao-gradiente {
  position: relative;
  padding: 12px 24px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
}

.botao-gradiente::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #764ba2, #667eea);
  transition: left 0.3s ease;
  z-index: -1;
}

.botao-gradiente:hover::before {
  left: 0;
}

.botao-gradiente:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
}
```

---

## 🧪 Exercício 6 – Explorando Pseudoelementos e Pseudoclasses

### 📋 Desafio: Criar Interface Interativa

Crie uma página que demonstre o uso avançado de pseudoelementos e pseudoclasses:

### 🎯 Requisitos:

1. **Formulário Interativo**: Inputs com validação e estados visuais
2. **Navegação Avançada**: Menu com underline animado
3. **Lista Estilizada**: Items com indicadores e hover effects
4. **Botões Animados**: Diferentes tipos de botões com efeitos
5. **Cards Interativos**: Cards com bordas e sombras animadas

### 💻 Código Base

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pseudoelementos e Pseudoclasses</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Navegação -->
    <nav class="nav">
        <a href="#home" class="nav__link active">Início</a>
        <a href="#form" class="nav__link">Formulário</a>
        <a href="#list" class="nav__link">Lista</a>
        <a href="#cards" class="nav__link">Cards</a>
    </nav>

    <!-- Seção Principal -->
    <main class="main">
        <!-- Formulário -->
        <section id="form" class="section">
            <h2 class="section__title">Formulário Interativo</h2>
            <form class="form">
                <div class="form__group">
                    <label for="name" class="form__label">Nome</label>
                    <input type="text" id="name" class="form__input" required>
                </div>
                <div class="form__group">
                    <label for="email" class="form__label">Email</label>
                    <input type="email" id="email" class="form__input" required>
                </div>
                <div class="form__group">
                    <label class="checkbox-custom">
                        <input type="checkbox" id="terms">
                        <span>Concordo com os termos</span>
                    </label>
                </div>
                <button type="submit" class="btn btn--primary">Enviar</button>
            </form>
        </section>

        <!-- Lista -->
        <section id="list" class="section">
            <h2 class="section__title">Lista Estilizada</h2>
            <ul class="lista">
                <li>Item 1 da lista</li>
                <li>Item 2 da lista</li>
                <li>Item 3 da lista</li>
                <li>Item 4 da lista</li>
                <li>Item 5 da lista</li>
            </ul>
        </section>

        <!-- Cards -->
        <section id="cards" class="section">
            <h2 class="section__title">Cards Interativos</h2>
            <div class="cards">
                <div class="card">
                    <h3>Card 1</h3>
                    <p>Descrição do card</p>
                    <button class="btn btn--secondary">Ação</button>
                </div>
                <div class="card">
                    <h3>Card 2</h3>
                    <p>Descrição do card</p>
                    <button class="btn btn--secondary">Ação</button>
                </div>
                <div class="card">
                    <h3>Card 3</h3>
                    <p>Descrição do card</p>
                    <button class="btn btn--secondary">Ação</button>
                </div>
            </div>
        </section>
    </main>
</body>
</html>
```

### 🎨 CSS com Pseudoelementos e Pseudoclasses

```css
/* ===================================
   VARIÁVEIS CSS
   =================================== */
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --success-color: #38a169;
    --error-color: #e53e3e;
    --text-color: #2d3748;
    --text-light: #718096;
    --border-color: #e2e8f0;
    --bg-color: #ffffff;
    --bg-secondary: #f7fafc;
    --transition: all 0.3s ease;
}

/* ===================================
   RESET E BASE
   =================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--bg-color);
}

/* ===================================
   NAVEGAÇÃO
   =================================== */
.nav {
    background-color: var(--bg-color);
    padding: 1rem 2rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

.nav__link {
    position: relative;
    color: var(--text-color);
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    transition: var(--transition);
}

.nav__link::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    transition: width 0.3s ease;
}

.nav__link:hover {
    color: var(--primary-color);
}

.nav__link:hover::after {
    width: 100%;
}

.nav__link.active {
    color: var(--primary-color);
}

.nav__link.active::after {
    width: 100%;
}

/* ===================================
   SEÇÕES
   =================================== */
.section {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.section__title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
    position: relative;
}

.section__title::before {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    border-radius: 2px;
}

/* ===================================
   FORMULÁRIO
   =================================== */
.form {
    max-width: 500px;
    margin: 0 auto;
    background-color: var(--bg-color);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.form__group {
    margin-bottom: 1.5rem;
}

.form__label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--text-color);
}

.form__input {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid var(--border-color);
    border-radius: 8px;
    font-size: 1rem;
    transition: var(--transition);
}

.form__input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form__input:valid {
    border-color: var(--success-color);
}

.form__input:invalid:not(:placeholder-shown) {
    border-color: var(--error-color);
}

/* ===================================
   CHECKBOX PERSONALIZADO
   =================================== */
.checkbox-custom {
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-weight: 500;
}

.checkbox-custom input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.checkbox-custom::before {
    content: "";
    width: 20px;
    height: 20px;
    border: 2px solid var(--border-color);
    border-radius: 4px;
    margin-right: 0.75rem;
    background-color: var(--bg-color);
    transition: var(--transition);
}

.checkbox-custom::after {
    content: "✓";
    position: absolute;
    left: 4px;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    font-size: 12px;
    font-weight: bold;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.checkbox-custom input[type="checkbox"]:checked + span::before {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
}

.checkbox-custom input[type="checkbox"]:checked + span::after {
    opacity: 1;
}

/* ===================================
   BOTÕES
   =================================== */
.btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
}

.btn--primary {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
}

.btn--primary::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
    transition: left 0.3s ease;
    z-index: -1;
}

.btn--primary:hover::before {
    left: 0;
}

.btn--primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
}

.btn--secondary {
    background-color: var(--bg-secondary);
    color: var(--text-color);
    border: 2px solid var(--border-color);
}

.btn--secondary:hover {
    background-color: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
    transform: translateY(-2px);
}

/* ===================================
   LISTA
   =================================== */
.lista {
    list-style: none;
    max-width: 600px;
    margin: 0 auto;
    background-color: var(--bg-color);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.lista li {
    position: relative;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--border-color);
    transition: var(--transition);
}

.lista li:last-child {
    border-bottom: none;
}

.lista li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background-color: var(--primary-color);
    border-radius: 50%;
    margin-left: 1rem;
    transition: var(--transition);
}

.lista li:nth-child(even) {
    background-color: var(--bg-secondary);
}

.lista li:hover {
    background-color: var(--primary-color);
    color: white;
    padding-left: 2rem;
}

.lista li:hover::before {
    width: 12px;
    height: 12px;
    background-color: white;
}

/* ===================================
   CARDS
   =================================== */
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.card {
    position: relative;
    background-color: var(--bg-color);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: var(--transition);
    overflow: hidden;
}

.card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 0;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    transition: height 0.3s ease;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.card:hover::before {
    height: 100%;
}

.card h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-color);
}

.card p {
    color: var(--text-light);
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

/* ===================================
   RESPONSIVIDADE
   =================================== */
@media (max-width: 768px) {
    .nav {
        padding: 1rem;
    }
    
    .nav__link {
        display: block;
        margin-bottom: 0.5rem;
    }
    
    .section {
        padding: 2rem 1rem;
    }
    
    .cards {
        grid-template-columns: 1fr;
    }
    
    .form {
        padding: 1.5rem;
    }
}

/* ===================================
   ACESSIBILIDADE
   =================================== */
@media (prefers-reduced-motion: reduce) {
    * {
        transition-duration: 0.01ms !important;
    }
}

/* Foco visível */
*:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
}
```

### 📊 Checklist de Verificação

- [ ] Navegação com underline animado
- [ ] Formulário com validação visual
- [ ] Checkbox personalizado
- [ ] Lista com indicadores e hover
- [ ] Cards com bordas animadas
- [ ] Botões com efeitos de hover
- [ ] Responsividade implementada
- [ ] Acessibilidade respeitada

---

## 📚 Recursos Adicionais

- **CSS Pseudo-classes:** https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
- **CSS Pseudo-elements:** https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements
- **CSS Selectors:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors
- **CSS Custom Properties:** https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

---

*Próxima aula: CSS Grid Layout Avançado*
