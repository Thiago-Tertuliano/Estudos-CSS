# 🎓 CSS Básico – Aula 4
## 🔹 Tema: Display Properties - inline, block, inline-block, none

---

## ✅ 1. O que é Display?

**A propriedade `display` é fundamental no CSS pois define como um elemento HTML será renderizado na página.** Ela controla o modelo de caixa e o comportamento do elemento no layout.

### 🎯 **O que o display controla:**
- **Como o elemento ocupa espaço** na página
- **Se aceita propriedades** como width, height, margin
- **Se pode ter elementos** ao lado ou em nova linha
- **Se aparece ou desaparece** da tela
- **Como interage** com outros elementos

### 📊 **Comportamento Padrão dos Elementos:**

| Elemento | Display Padrão | Comportamento |
|----------|----------------|---------------|
| `<div>`, `<section>`, `<article>` | `block` | Ocupa linha inteira |
| `<span>`, `<a>`, `<strong>` | `inline` | Fica na mesma linha |
| `<img>`, `<input>` | `inline-block` | Comportamento híbrido |

---

## ✅ 2. Tipos Principais de Display

### 🔹 **1. Block**

**Elementos block ocupam toda a largura disponível e começam em uma nova linha.**

#### **Características:**
- ✅ **Ocupa largura total** da linha
- ✅ **Começa em nova linha**
- ✅ **Aceita width, height**
- ✅ **Aceita margin, padding**
- ✅ **Aceita border**

#### **Exemplos de elementos block:**
```html
<div>, <section>, <article>, <header>, <footer>
<h1> até <h6>, <p>, <ul>, <ol>, <li>
<form>, <table>, <blockquote>
```

#### **CSS:**
```css
.block-element {
    display: block;
    width: 300px;
    height: 100px;
    margin: 20px;
    padding: 15px;
    border: 2px solid #333;
    background-color: #f0f0f0;
}
```

### 🔹 **2. Inline**

**Elementos inline ficam na mesma linha e só ocupam o espaço necessário.**

#### **Características:**
- ✅ **Fica na mesma linha**
- ✅ **Ocupa apenas espaço necessário**
- ❌ **Não aceita width, height**
- ❌ **Não aceita margin-top, margin-bottom**
- ✅ **Aceita margin-left, margin-right**
- ✅ **Aceita padding**

#### **Exemplos de elementos inline:**
```html
<span>, <a>, <strong>, <em>, <i>, <b>
<code>, <small>, <sub>, <sup>
<img>, <input>, <button>
```

#### **CSS:**
```css
.inline-element {
    display: inline;
    background-color: yellow;
    padding: 5px 10px;
    margin-left: 10px;
    margin-right: 10px;
    /* width e height não funcionam */
    /* margin-top e margin-bottom não funcionam */
}
```

### 🔹 **3. Inline-Block**

**Combina o melhor dos dois mundos: fica na linha mas aceita propriedades de block.**

#### **Características:**
- ✅ **Fica na mesma linha**
- ✅ **Aceita width, height**
- ✅ **Aceita margin, padding**
- ✅ **Aceita border**
- ✅ **Respeita line-height**

#### **CSS:**
```css
.inline-block-element {
  display: inline-block;
    width: 200px;
    height: 50px;
    margin: 10px;
    padding: 15px;
    border: 2px solid #333;
    background-color: #e0e0e0;
    vertical-align: top; /* Alinhamento vertical */
}
```

### 🔹 **4. None**

**Remove completamente o elemento da tela - não ocupa espaço nem aparece.**

#### **Características:**
- ❌ **Não aparece na tela**
- ❌ **Não ocupa espaço**
- ❌ **Não interage com outros elementos**
- ✅ **Pode ser reativado via JavaScript**

#### **CSS:**
```css
.hidden-element {
  display: none;
    /* Elemento completamente invisível */
}
```

---

## ✅ 3. Comparação Visual

### 📊 **Tabela Comparativa:**

| Propriedade | Block | Inline | Inline-Block | None |
|-------------|-------|--------|--------------|------|
| **Nova linha** | ✅ | ❌ | ❌ | ❌ |
| **Width/Height** | ✅ | ❌ | ✅ | ❌ |
| **Margin completo** | ✅ | ❌ | ✅ | ❌ |
| **Padding** | ✅ | ✅ | ✅ | ❌ |
| **Border** | ✅ | ✅ | ✅ | ❌ |
| **Vertical-align** | ❌ | ✅ | ✅ | ❌ |

### 🎯 **Exemplo Prático:**

```html
<p>Texto com <span class="inline">inline</span>, 
<span class="inline-block">inline-block</span> e 
<div class="block">block</div>.</p>
```

```css
.inline {
  display: inline;
  background: yellow;
    padding: 5px;
    margin: 0 10px;
    /* width e height não funcionam */
}

.inline-block {
  display: inline-block;
  background: lightblue;
    padding: 10px;
  margin: 0 10px;
    width: 150px;
    height: 30px;
    vertical-align: middle;
}

.block {
  display: block;
  background: lightgreen;
    padding: 15px;
    margin: 10px 0;
    width: 300px;
    height: 50px;
}
```

---

## ✅ 4. Casos de Uso Práticos

### 🎨 **1. Botões com Inline-Block:**

```css
.button {
    display: inline-block;
    padding: 12px 24px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    margin: 5px;
    transition: all 0.3s ease;
}

.button:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
}
```

### 🎨 **2. Navegação Horizontal:**

```css
.nav {
    background-color: #333;
    padding: 15px;
}

.nav a {
    display: inline-block;
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    margin: 0 5px;
    border-radius: 3px;
    transition: background-color 0.3s;
}

.nav a:hover {
    background-color: #555;
}
```

### 🎨 **3. Cards em Linha:**

```css
.card {
    display: inline-block;
    width: 250px;
    margin: 10px;
    padding: 20px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    vertical-align: top;
}
```

### 🎨 **4. Elementos Ocultos:**

```css
.hidden {
    display: none;
}

.visible {
    display: block; /* ou inline, inline-block */
}
```

---

## ✅ 5. Vertical-Align com Inline-Block

### 📐 **Alinhamento Vertical:**

```css
/* Alinhamento superior */
.align-top {
    display: inline-block;
    vertical-align: top;
}

/* Alinhamento central */
.align-middle {
    display: inline-block;
    vertical-align: middle;
}

/* Alinhamento inferior */
.align-bottom {
    display: inline-block;
    vertical-align: bottom;
}

/* Alinhamento com texto */
.align-text-top {
    display: inline-block;
    vertical-align: text-top;
}

.align-text-bottom {
    display: inline-block;
    vertical-align: text-bottom;
}
```

---

## ✅ 6. Exemplos Avançados

### 🎯 **1. Layout de Formulário:**

```css
.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: inline-block;
    width: 120px;
    font-weight: bold;
    vertical-align: top;
}

.form-group input,
.form-group textarea {
    display: inline-block;
    width: 300px;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
}
```

### 🎯 **2. Galeria de Imagens:**

```css
.gallery {
    text-align: center;
}

.gallery img {
    display: inline-block;
    width: 200px;
    height: 150px;
    margin: 10px;
    border-radius: 8px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.gallery img:hover {
    transform: scale(1.05);
}
```

### 🎯 **3. Menu Responsivo:**

```css
.menu {
    background-color: #f8f9fa;
    padding: 15px;
    text-align: center;
}

.menu-item {
    display: inline-block;
    padding: 10px 20px;
    margin: 0 5px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    text-decoration: none;
    color: #333;
    transition: all 0.3s ease;
}

.menu-item:hover {
    background-color: #007bff;
    color: white;
    transform: translateY(-2px);
}
```

---

## ✅ 7. Interação com JavaScript

### 🔧 **Mostrar/Ocultar Elementos:**

```html
<button onclick="toggleElement()">Mostrar/Ocultar</button>
<div id="conteudo" class="hidden">Conteúdo que pode ser mostrado/ocultado</div>
```

```css
.hidden {
  display: none;
}

.visible {
    display: block;
}
```

```javascript
function toggleElement() {
    const elemento = document.getElementById('conteudo');
    elemento.classList.toggle('hidden');
}
```

### 🔧 **Menu Dropdown:**

```css
.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 160px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown:hover .dropdown-content {
    display: block;
}
```

---

## 🧪 Exercício 4 – Explorando Display Properties

### 📋 **Objetivo:**
Criar uma página demonstrando todos os tipos de display e suas aplicações práticas.

### 🎯 **Passos:**

1. **Crie botões com inline-block**
2. **Demonstre elementos inline vs block**
3. **Crie layout com inline-block**
4. **Implemente funcionalidade show/hide**

### 📝 **Código Base:**

**index.html:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 4 - Display Properties</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header class="header">
            <h1 class="titulo-principal">Display Properties</h1>
            <p class="subtitulo">inline, block, inline-block e none</p>
        </header>

        <main class="conteudo">
            <!-- Seção 1: Comparação Visual -->
            <section class="secao">
                <h2 class="titulo-secao">Comparação Visual</h2>
                <div class="comparacao">
                    <p class="texto-exemplo">
                        Este é um parágrafo com elementos 
                        <span class="inline-demo">inline</span>, 
                        <span class="inline-block-demo">inline-block</span> e 
                        <div class="block-demo">block</div>
                        para demonstrar as diferenças.
                    </p>
                </div>
            </section>

            <!-- Seção 2: Botões com Inline-Block -->
            <section class="secao">
                <h2 class="titulo-secao">Botões com Inline-Block</h2>
                <div class="botoes-container">
                    <button class="btn btn-primario">Botão Primário</button>
                    <button class="btn btn-secundario">Botão Secundário</button>
                    <button class="btn btn-sucesso">Botão Sucesso</button>
                    <button class="btn btn-perigo">Botão Perigo</button>
                </div>
            </section>

            <!-- Seção 3: Navegação Horizontal -->
            <section class="secao">
                <h2 class="titulo-secao">Navegação Horizontal</h2>
                <nav class="nav-horizontal">
                    <a href="#" class="nav-item">Início</a>
                    <a href="#" class="nav-item">Sobre</a>
                    <a href="#" class="nav-item">Serviços</a>
                    <a href="#" class="nav-item">Contato</a>
                </nav>
            </section>

            <!-- Seção 4: Cards em Linha -->
            <section class="secao">
                <h2 class="titulo-secao">Cards em Linha</h2>
                <div class="cards-container">
                    <div class="card">
                        <h3>Card 1</h3>
                        <p>Este é um card usando inline-block.</p>
                    </div>
                    <div class="card">
                        <h3>Card 2</h3>
                        <p>Outro card com inline-block.</p>
                    </div>
                    <div class="card">
                        <h3>Card 3</h3>
                        <p>Mais um card para demonstrar.</p>
                    </div>
                </div>
            </section>

            <!-- Seção 5: Alinhamento Vertical -->
            <section class="secao">
                <h2 class="titulo-secao">Alinhamento Vertical</h2>
                <div class="alinhamento-container">
                    <div class="alinhamento-item align-top">
                        <h3>Top</h3>
                        <p>vertical-align: top</p>
                    </div>
                    <div class="alinhamento-item align-middle">
                        <h3>Middle</h3>
                        <p>vertical-align: middle</p>
                    </div>
                    <div class="alinhamento-item align-bottom">
                        <h3>Bottom</h3>
                        <p>vertical-align: bottom</p>
                    </div>
                </div>
            </section>

            <!-- Seção 6: Show/Hide -->
            <section class="secao">
                <h2 class="titulo-secao">Mostrar/Ocultar Elementos</h2>
                <div class="show-hide-container">
                    <button class="btn-toggle" onclick="toggleElement()">
                        Mostrar/Ocultar Conteúdo
                    </button>
                    <div id="conteudo-dinamico" class="conteudo-oculto">
                        <h3>Conteúdo Dinâmico</h3>
                        <p>Este conteúdo pode ser mostrado ou ocultado usando JavaScript e display: none/block.</p>
                        <p>Experimente clicar no botão acima para ver a funcionalidade em ação!</p>
                    </div>
                </div>
            </section>

            <!-- Seção 7: Formulário com Inline-Block -->
            <section class="secao">
                <h2 class="titulo-secao">Formulário com Inline-Block</h2>
                <form class="formulario-inline">
                    <div class="form-grupo">
                        <label for="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" placeholder="Digite seu nome">
                    </div>
                    
                    <div class="form-grupo">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Digite seu email">
                    </div>
                    
                    <div class="form-grupo">
                        <label for="mensagem">Mensagem:</label>
                        <textarea id="mensagem" name="mensagem" placeholder="Digite sua mensagem"></textarea>
                    </div>
                    
                    <div class="form-botoes">
                        <button type="submit" class="btn-enviar">Enviar</button>
                        <button type="reset" class="btn-limpar">Limpar</button>
                    </div>
                </form>
            </section>

            <!-- Seção 8: Galeria de Imagens -->
            <section class="secao">
                <h2 class="titulo-secao">Galeria com Inline-Block</h2>
                <div class="galeria">
                    <div class="galeria-item">
                        <img src="https://via.placeholder.com/200x150/3498db/ffffff?text=Imagem+1" alt="Imagem 1">
                        <p>Imagem 1</p>
                    </div>
                    <div class="galeria-item">
                        <img src="https://via.placeholder.com/200x150/e74c3c/ffffff?text=Imagem+2" alt="Imagem 2">
                        <p>Imagem 2</p>
                    </div>
                    <div class="galeria-item">
                        <img src="https://via.placeholder.com/200x150/2ecc71/ffffff?text=Imagem+3" alt="Imagem 3">
                        <p>Imagem 3</p>
                    </div>
                    <div class="galeria-item">
                        <img src="https://via.placeholder.com/200x150/f39c12/ffffff?text=Imagem+4" alt="Imagem 4">
                        <p>Imagem 4</p>
                    </div>
                </div>
            </section>
        </main>

        <footer class="footer">
            <p>Exercício 4 - Display Properties</p>
        </footer>
    </div>

    <script>
        function toggleElement() {
            const elemento = document.getElementById('conteudo-dinamico');
            elemento.classList.toggle('conteudo-oculto');
        }
    </script>
</body>
</html>
```

**style.css:**
```css
/* ========================================
   EXERCÍCIO 4 - DISPLAY PROPERTIES
   inline, block, inline-block, none
   ======================================== */

/* Reset e configuração base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f5f5f5;
    padding: 20px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 20px rgba(0,0,0,0.1);
    overflow: hidden;
}

/* Header */
.header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 40px 30px;
    text-align: center;
}

.titulo-principal {
    font-size: 36px;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.subtitulo {
    font-size: 18px;
    opacity: 0.9;
    font-weight: 300;
}

/* Conteúdo */
.conteudo {
    padding: 40px 30px;
}

.secao {
    margin-bottom: 50px;
    padding: 30px;
    border-radius: 10px;
    background-color: #fafafa;
    border: 1px solid #e0e0e0;
}

.titulo-secao {
    color: #2c3e50;
    font-size: 28px;
    margin-bottom: 25px;
    border-bottom: 3px solid #3498db;
    padding-bottom: 10px;
}

/* ========================================
   SEÇÃO 1: COMPARAÇÃO VISUAL
   ======================================== */
.comparacao {
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    border: 2px solid #e0e0e0;
}

.texto-exemplo {
    font-size: 18px;
    line-height: 2;
    margin-bottom: 20px;
}

.inline-demo {
    display: inline;
    background-color: #fff3cd;
    color: #856404;
    padding: 5px 10px;
    border: 1px solid #ffeaa7;
    border-radius: 3px;
    font-weight: bold;
}

.inline-block-demo {
    display: inline-block;
    background-color: #d1ecf1;
    color: #0c5460;
    padding: 8px 15px;
    margin: 0 10px;
    border: 2px solid #bee5eb;
    border-radius: 5px;
    width: 120px;
    text-align: center;
    font-weight: bold;
}

.block-demo {
    display: block;
    background-color: #d4edda;
    color: #155724;
    padding: 15px;
    margin: 10px 0;
    border: 2px solid #c3e6cb;
    border-radius: 8px;
    width: 100%;
    text-align: center;
    font-weight: bold;
}

/* ========================================
   SEÇÃO 2: BOTÕES COM INLINE-BLOCK
   ======================================== */
.botoes-container {
    text-align: center;
}

.btn {
    display: inline-block;
    padding: 12px 24px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.btn-primario {
    background-color: #007bff;
    color: white;
}

.btn-primario:hover {
    background-color: #0056b3;
}

.btn-secundario {
    background-color: #6c757d;
    color: white;
}

.btn-secundario:hover {
    background-color: #545b62;
}

.btn-sucesso {
    background-color: #28a745;
    color: white;
}

.btn-sucesso:hover {
    background-color: #1e7e34;
}

.btn-perigo {
    background-color: #dc3545;
    color: white;
}

.btn-perigo:hover {
    background-color: #c82333;
}

/* ========================================
   SEÇÃO 3: NAVEGAÇÃO HORIZONTAL
   ======================================== */
.nav-horizontal {
    background-color: #333;
    padding: 15px;
    border-radius: 8px;
    text-align: center;
}

.nav-item {
    display: inline-block;
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    margin: 0 5px;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.nav-item:hover {
    background-color: #555;
    transform: translateY(-2px);
}

/* ========================================
   SEÇÃO 4: CARDS EM LINHA
   ======================================== */
.cards-container {
    text-align: center;
}

.card {
    display: inline-block;
    width: 250px;
    margin: 10px;
    padding: 20px;
    background-color: white;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    vertical-align: top;
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    border-color: #3498db;
}

.card h3 {
    color: #2c3e50;
    margin-bottom: 15px;
    border-bottom: 2px solid #3498db;
    padding-bottom: 8px;
}

.card p {
    color: #666;
    line-height: 1.6;
}

/* ========================================
   SEÇÃO 5: ALINHAMENTO VERTICAL
   ======================================== */
.alinhamento-container {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    border: 2px solid #e9ecef;
}

.alinhamento-item {
    display: inline-block;
    width: 200px;
    height: 100px;
    margin: 10px;
    padding: 15px;
    background-color: white;
    border: 2px solid #3498db;
    border-radius: 8px;
    text-align: center;
}

.alinhamento-item h3 {
    color: #2c3e50;
    margin-bottom: 10px;
    font-size: 16px;
}

.alinhamento-item p {
    color: #666;
    font-size: 14px;
    font-family: 'Courier New', monospace;
}

.align-top {
    vertical-align: top;
}

.align-middle {
    vertical-align: middle;
}

.align-bottom {
    vertical-align: bottom;
}

/* ========================================
   SEÇÃO 6: SHOW/HIDE
   ======================================== */
.show-hide-container {
    text-align: center;
}

.btn-toggle {
    display: inline-block;
    padding: 12px 24px;
    background-color: #17a2b8;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-toggle:hover {
    background-color: #138496;
    transform: translateY(-2px);
}

.conteudo-oculto {
    display: none;
    margin-top: 20px;
    padding: 20px;
    background-color: #e8f4fd;
    border: 2px solid #bee5eb;
    border-radius: 8px;
    color: #0c5460;
}

.conteudo-oculto h3 {
    color: #0c5460;
    margin-bottom: 15px;
}

.conteudo-oculto p {
    margin-bottom: 10px;
    line-height: 1.6;
}

/* ========================================
   SEÇÃO 7: FORMULÁRIO COM INLINE-BLOCK
   ======================================== */
.formulario-inline {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    border: 2px solid #e9ecef;
}

.form-grupo {
    margin-bottom: 20px;
}

.form-grupo label {
    display: inline-block;
    width: 120px;
    font-weight: 600;
    color: #2c3e50;
    vertical-align: top;
    margin-right: 10px;
}

.form-grupo input,
.form-grupo textarea {
    display: inline-block;
    width: 400px;
    padding: 10px;
    border: 2px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    transition: border-color 0.3s ease;
}

.form-grupo input:focus,
.form-grupo textarea:focus {
    outline: none;
    border-color: #3498db;
}

.form-grupo textarea {
    resize: vertical;
    min-height: 100px;
    font-family: inherit;
}

.form-botoes {
    text-align: center;
    margin-top: 30px;
}

.btn-enviar,
.btn-limpar {
    display: inline-block;
    padding: 12px 30px;
    margin: 0 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-enviar {
    background-color: #28a745;
    color: white;
}

.btn-enviar:hover {
    background-color: #218838;
    transform: translateY(-2px);
}

.btn-limpar {
    background-color: #6c757d;
    color: white;
}

.btn-limpar:hover {
    background-color: #5a6268;
    transform: translateY(-2px);
}

/* ========================================
   SEÇÃO 8: GALERIA DE IMAGENS
   ======================================== */
.galeria {
    text-align: center;
}

.galeria-item {
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: white;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.galeria-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    border-color: #3498db;
}

.galeria-item img {
    width: 200px;
    height: 150px;
    border-radius: 5px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.galeria-item:hover img {
    transform: scale(1.05);
}

.galeria-item p {
    margin-top: 10px;
    color: #666;
    font-weight: 600;
}

/* ========================================
   FOOTER
   ======================================== */
.footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 20px;
}

/* ========================================
   RESPONSIVIDADE
   ======================================== */
@media (max-width: 768px) {
    .container {
        margin: 10px;
        border-radius: 5px;
    }
    
    .header {
        padding: 30px 20px;
    }
    
    .titulo-principal {
        font-size: 28px;
    }
    
    .conteudo {
        padding: 30px 20px;
    }
    
    .secao {
        padding: 20px;
        margin-bottom: 30px;
    }
    
    .card {
        width: 100%;
        margin: 10px 0;
    }
    
    .alinhamento-item {
        width: 100%;
        margin: 10px 0;
    }
    
    .form-grupo label {
        display: block;
        width: 100%;
        margin-bottom: 5px;
    }
    
    .form-grupo input,
    .form-grupo textarea {
        width: 100%;
    }
    
    .galeria-item {
        width: 100%;
        margin: 10px 0;
    }
    
    .galeria-item img {
        width: 100%;
        max-width: 300px;
    }
}

/* ========================================
   ANIMAÇÕES
   ======================================== */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.secao {
    animation: fadeIn 0.6s ease-out;
}

/* ========================================
   ESTILOS ESPECIAIS
   ======================================== */
.inline-demo::before {
    content: "📝";
    margin-right: 5px;
}

.inline-block-demo::before {
    content: "📦";
    margin-right: 5px;
}

.block-demo::before {
    content: "🟦";
    margin-right: 5px;
}

.btn::before {
    content: "🔘";
    margin-right: 5px;
}

.nav-item::before {
    content: "🔗";
    margin-right: 5px;
}

.card::before {
    content: "💳";
    font-size: 20px;
    display: block;
    margin-bottom: 10px;
}

.galeria-item::before {
    content: "🖼️";
    font-size: 20px;
    display: block;
    margin-bottom: 10px;
}
```

### 🎯 **Desafio Extra:**
- Experimente mudar os valores de display
- Teste diferentes alinhamentos verticais
- Crie um menu dropdown usando display
- Adicione animações baseadas em display

---

## 📚 Próximos Passos:
- ✅ Aula 5: Flexbox
- ✅ Aula 6: CSS Grid
- ✅ Aula 7: Posicionamento

---

## 💡 Dicas Importantes:
- **📦 Use** inline-block para elementos que precisam ficar na linha mas aceitar propriedades de block
- **🎯 Entenda** bem block, inline e inline-block antes de avançar para Flexbox
- **📱 Teste** como os displays se comportam em diferentes tamanhos de tela
- **🔧 Combine** display com outras propriedades para layouts mais complexos
- **🎨 Experimente** diferentes valores de vertical-align com inline-block

