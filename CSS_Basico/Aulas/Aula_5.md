# 🎓 CSS Básico – Aula 5
## 🔹 Tema: Position, Z-Index e Centralização

---

## ✅ 1. O que é Position?

**A propriedade `position` controla como um elemento é posicionado no documento.** Ela define o método de posicionamento usado para um elemento.

### 🎯 **Por que usar position?**
- **Posicionar elementos** em locais específicos
- **Criar layouts** complexos e sobrepostos
- **Centralizar elementos** de forma precisa
- **Criar menus** flutuantes e modais
- **Controlar camadas** com z-index

### 📊 **Valores da propriedade position:**

| Valor | Comportamento | Uso Comum |
|-------|---------------|-----------|
| `static` | Padrão. Sem posicionamento manual | Elementos normais |
| `relative` | Posiciona em relação à posição original | Ajustes finos |
| `absolute` | Posiciona em relação ao pai mais próximo | Menus, tooltips |
| `fixed` | Fica fixo na tela, mesmo ao rolar | Headers, botões flutuantes |
| `sticky` | Fica parado até certo ponto | Navegação, banners |

---

## ✅ 2. Tipos de Position

### 🔹 **1. Static (Padrão)**

**Elementos com `position: static` seguem o fluxo normal do documento.**

#### **Características:**
- ✅ **Fluxo normal** do documento
- ✅ **Não afeta** top, right, bottom, left
- ✅ **Não afeta** z-index
- ✅ **Comportamento padrão** de todos os elementos

#### **CSS:**
```css
.elemento-static {
    position: static;
    /* top, right, bottom, left não funcionam */
    /* z-index não funciona */
}
```

### 🔹 **2. Relative**

**Posiciona o elemento em relação à sua posição original no fluxo.**

#### **Características:**
- ✅ **Mantém espaço** no fluxo original
- ✅ **Aceita** top, right, bottom, left
- ✅ **Aceita** z-index
- ✅ **Não afeta** outros elementos

#### **CSS:**
```css
.elemento-relative {
    position: relative;
    top: 20px;      /* Move 20px para baixo */
    left: 30px;     /* Move 30px para direita */
    z-index: 1;     /* Controla camada */
}
```

#### **Exemplo Prático:**
```html
<div class="caixa-original">Posição Original</div>
<div class="caixa-movida">Posição Movida</div>
```

```css
.caixa-original {
    background-color: #e3f2fd;
    padding: 20px;
    border: 2px solid #2196f3;
    margin-bottom: 10px;
}

.caixa-movida {
    position: relative;
    top: 20px;
    left: 30px;
    background-color: #fff3e0;
    padding: 20px;
    border: 2px solid #ff9800;
}
```

### 🔹 **3. Absolute**

**Remove o elemento do fluxo normal e posiciona em relação ao pai mais próximo com position diferente de static.**

#### **Características:**
- ❌ **Não ocupa espaço** no fluxo
- ✅ **Posiciona em relação** ao pai com position
- ✅ **Aceita** top, right, bottom, left
- ✅ **Aceita** z-index
- ✅ **Sobre outros elementos**

#### **CSS:**
```css
.pai {
    position: relative;  /* Contexto para o filho */
    height: 200px;
    background-color: #f5f5f5;
    border: 2px solid #333;
}

.filho-absolute {
    position: absolute;
    top: 10px;      /* 10px do topo do pai */
    right: 10px;    /* 10px da direita do pai */
    background-color: #ff5722;
    color: white;
    padding: 10px;
    border-radius: 5px;
}
```

#### **Exemplo Completo:**
```html
<div class="container-relative">
    <div class="elemento-absolute top-left">Top Left</div>
    <div class="elemento-absolute top-right">Top Right</div>
    <div class="elemento-absolute bottom-left">Bottom Left</div>
    <div class="elemento-absolute bottom-right">Bottom Right</div>
    <div class="elemento-absolute center">Center</div>
</div>
```

```css
.container-relative {
    position: relative;
    height: 300px;
    background-color: #f0f0f0;
    border: 3px solid #333;
    margin: 20px;
}

.elemento-absolute {
    position: absolute;
    background-color: #2196f3;
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
    font-weight: bold;
}

.top-left {
    top: 10px;
    left: 10px;
}

.top-right {
    top: 10px;
    right: 10px;
}

.bottom-left {
    bottom: 10px;
    left: 10px;
}

.bottom-right {
    bottom: 10px;
    right: 10px;
}

.center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

### 🔹 **4. Fixed**

**Posiciona o elemento em relação à viewport (janela do navegador).**

#### **Características:**
- ❌ **Não ocupa espaço** no fluxo
- ✅ **Fica fixo** na tela
- ✅ **Não move** ao rolar a página
- ✅ **Aceita** z-index
- ✅ **Posiciona em relação** à viewport

#### **CSS:**
```css
.header-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #333;
    color: white;
    padding: 15px;
    z-index: 1000;
}

.botao-flutuante {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #ff5722;
    color: white;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    font-size: 24px;
    cursor: pointer;
    z-index: 999;
}
```

### 🔹 **5. Sticky**

**Combina relative e fixed - fica no fluxo até atingir um ponto, depois fica fixo.**

#### **Características:**
- ✅ **Mantém espaço** no fluxo inicialmente
- ✅ **Fica fixo** após atingir o ponto definido
- ✅ **Aceita** z-index
- ✅ **Funciona** com top, bottom

#### **CSS:**
```css
.nav-sticky {
    position: sticky;
    top: 0;
    background-color: #333;
    color: white;
    padding: 15px;
    z-index: 100;
}

.banner-sticky {
    position: sticky;
    bottom: 0;
    background-color: #ff9800;
    color: white;
    padding: 10px;
    text-align: center;
}
```

---

## ✅ 3. Z-Index: Controle de Camadas

**O `z-index` controla a ordem de empilhamento dos elementos posicionados.**

### 🎯 **Como funciona:**
- **Valores maiores** ficam por cima
- **Valores menores** ficam por baixo
- **Só funciona** em elementos com position diferente de static
- **Contexto de empilhamento** é criado por elementos com z-index

### 📊 **Exemplos de Z-Index:**

```css
/* Elemento de fundo */
.fundo {
    position: absolute;
    z-index: 1;
    background-color: #f0f0f0;
}

/* Elemento do meio */
.meio {
    position: absolute;
    z-index: 5;
    background-color: #2196f3;
}

/* Elemento de frente */
.frente {
    position: absolute;
    z-index: 10;
    background-color: #ff5722;
}
```

### 🎯 **Exemplo Prático de Sobreposição:**

```html
<div class="container-camadas">
    <div class="camada camada-1">Camada 1 (z-index: 1)</div>
    <div class="camada camada-2">Camada 2 (z-index: 2)</div>
    <div class="camada camada-3">Camada 3 (z-index: 3)</div>
</div>
```

```css
.container-camadas {
    position: relative;
    height: 200px;
    background-color: #f5f5f5;
    border: 2px solid #333;
    margin: 20px;
}

.camada {
    position: absolute;
    padding: 20px;
    border-radius: 8px;
    color: white;
    font-weight: bold;
    text-align: center;
}

.camada-1 {
    top: 20px;
    left: 20px;
    background-color: #4caf50;
    z-index: 1;
}

.camada-2 {
    top: 40px;
    left: 40px;
    background-color: #2196f3;
    z-index: 2;
}

.camada-3 {
    top: 60px;
    left: 60px;
    background-color: #ff5722;
    z-index: 3;
}
```

---

## ✅ 4. Centralização de Elementos

### 🔹 **1. Centralização Horizontal**

#### **Para elementos inline/inline-block:**
```css
.texto-centralizado {
    text-align: center;
}
```

#### **Para elementos block com largura fixa:**
```css
.caixa-centralizada {
    width: 300px;
    margin: 0 auto;
}
```

#### **Para elementos com position absolute:**
```css
.elemento-centralizado {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
```

### 🔹 **2. Centralização Vertical**

#### **Para elementos com position absolute:**
```css
.elemento-centralizado-vertical {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
```

### 🔹 **3. Centralização Total (Horizontal + Vertical)**

#### **Método com position absolute:**
```css
.centralizado-total {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

#### **Método com Flexbox (mais moderno):**
```css
.container-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
}
```

#### **Método com Grid (mais moderno):**
```css
.container-grid {
    display: grid;
    place-items: center;
    height: 300px;
}
```

### 🎯 **Exemplo Completo de Centralização:**

```html
<div class="container-centralizacao">
    <div class="centralizado-absolute">Centralizado com Absolute</div>
    <div class="centralizado-flex">Centralizado com Flexbox</div>
    <div class="centralizado-grid">Centralizado com Grid</div>
</div>
```

```css
.container-centralizacao {
    position: relative;
    height: 400px;
    background-color: #f0f0f0;
    border: 2px solid #333;
    margin: 20px;
}

.centralizado-absolute {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #2196f3;
    color: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
}

.centralizado-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    background-color: #4caf50;
    color: white;
    margin: 10px 0;
    border-radius: 8px;
}

.centralizado-grid {
    display: grid;
    place-items: center;
    height: 100px;
    background-color: #ff9800;
    color: white;
    margin: 10px 0;
    border-radius: 8px;
}
```

---

## ✅ 5. Casos de Uso Práticos

### 🎨 **1. Header Fixo:**

```css
.header-fixo {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #333;
    color: white;
    padding: 15px;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

/* Espaço para o header fixo */
body {
    padding-top: 80px;
}
```

### 🎨 **2. Modal/Dialog:**

```css
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    max-width: 500px;
    width: 90%;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}
```

### 🎨 **3. Tooltip:**

```css
.tooltip-container {
    position: relative;
    display: inline-block;
}

.tooltip {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: white;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 14px;
    white-space: nowrap;
    z-index: 100;
    opacity: 0;
    transition: opacity 0.3s;
}

.tooltip-container:hover .tooltip {
    opacity: 1;
}
```

### 🎨 **4. Botão Flutuante:**

```css
.botao-flutuante {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #ff5722;
    color: white;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    z-index: 999;
    transition: all 0.3s ease;
}

.botao-flutuante:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
}
```

---

## ✅ 6. Exemplos Avançados

### 🎯 **1. Layout com Cards Sobrepostos:**

```css
.card-container {
    position: relative;
    height: 300px;
    background-color: #f5f5f5;
    border-radius: 10px;
    overflow: hidden;
}

.card {
    position: absolute;
    width: 200px;
    height: 150px;
    padding: 20px;
    border-radius: 8px;
    color: white;
    font-weight: bold;
    text-align: center;
    transition: all 0.3s ease;
}

.card-1 {
    top: 20px;
    left: 20px;
    background-color: #2196f3;
    z-index: 1;
}

.card-2 {
    top: 40px;
    left: 40px;
    background-color: #4caf50;
    z-index: 2;
}

.card-3 {
    top: 60px;
    left: 60px;
    background-color: #ff9800;
    z-index: 3;
}

.card:hover {
    transform: translateY(-10px);
    z-index: 10;
}
```

### 🎯 **2. Menu Dropdown:**

```css
.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    min-width: 160px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    border-radius: 4px;
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}

.dropdown:hover .dropdown-content {
    opacity: 1;
    visibility: visible;
}
```

### 🎯 **3. Loading Spinner Centralizado:**

```css
.loading-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
```

---

## 🧪 Exercício 5 – Praticando Position e Z-Index

### 📋 **Objetivo:**
Criar uma página demonstrando todos os tipos de position, z-index e técnicas de centralização.

### 🎯 **Passos:**

1. **Crie elementos com diferentes positions**
2. **Demonstre z-index com sobreposições**
3. **Centralize elementos de diferentes formas**
4. **Implemente um modal funcional**

### 📝 **Código Base:**

**index.html:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 5 - Position e Z-Index</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Header Fixo -->
    <header class="header-fixo">
        <h1>Position e Z-Index</h1>
        <nav>
            <a href="#relative">Relative</a>
            <a href="#absolute">Absolute</a>
            <a href="#fixed">Fixed</a>
            <a href="#sticky">Sticky</a>
        </nav>
    </header>

    <main class="conteudo">
        <!-- Seção 1: Relative -->
        <section id="relative" class="secao">
            <h2>Position: Relative</h2>
            <div class="demo-relative">
                <div class="caixa-original">Posição Original</div>
                <div class="caixa-movida">Posição Movida (relative)</div>
            </div>
        </section>

        <!-- Seção 2: Absolute -->
        <section id="absolute" class="secao">
            <h2>Position: Absolute</h2>
            <div class="container-absolute">
                <div class="elemento-absolute top-left">Top Left</div>
                <div class="elemento-absolute top-right">Top Right</div>
                <div class="elemento-absolute bottom-left">Bottom Left</div>
                <div class="elemento-absolute bottom-right">Bottom Right</div>
                <div class="elemento-absolute center">Center</div>
            </div>
        </section>

        <!-- Seção 3: Z-Index -->
        <section class="secao">
            <h2>Z-Index - Controle de Camadas</h2>
            <div class="container-camadas">
                <div class="camada camada-1">Camada 1 (z-index: 1)</div>
                <div class="camada camada-2">Camada 2 (z-index: 2)</div>
                <div class="camada camada-3">Camada 3 (z-index: 3)</div>
            </div>
        </section>

        <!-- Seção 4: Centralização -->
        <section class="secao">
            <h2>Técnicas de Centralização</h2>
            <div class="container-centralizacao">
                <div class="centralizado-absolute">Absolute + Transform</div>
                <div class="centralizado-flex">Flexbox</div>
                <div class="centralizado-grid">CSS Grid</div>
            </div>
        </section>

        <!-- Seção 5: Sticky -->
        <section id="sticky" class="secao">
            <h2>Position: Sticky</h2>
            <div class="nav-sticky">
                <p>Esta navegação fica sticky no topo!</p>
            </div>
            <div class="conteudo-scroll">
                <p>Conteúdo para scroll...</p>
                <p>Mais conteúdo...</p>
                <p>Ainda mais conteúdo...</p>
                <p>Muito conteúdo para scroll...</p>
                <p>Conteúdo infinito...</p>
            </div>
        </section>

        <!-- Seção 6: Modal -->
        <section class="secao">
            <h2>Modal com Position Fixed</h2>
            <button class="btn-modal" onclick="abrirModal()">Abrir Modal</button>
        </section>
    </main>

    <!-- Botão Flutuante -->
    <button class="botao-flutuante" onclick="scrollTopo()">↑</button>

    <!-- Modal -->
    <div id="modal" class="modal-overlay">
        <div class="modal-content">
            <h3>Modal Funcional</h3>
            <p>Este modal usa position: fixed para cobrir toda a tela.</p>
            <button class="btn-fechar" onclick="fecharModal()">Fechar</button>
        </div>
    </div>

    <script>
        function abrirModal() {
            document.getElementById('modal').style.display = 'flex';
        }

        function fecharModal() {
            document.getElementById('modal').style.display = 'none';
        }

        function scrollTopo() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    </script>
</body>
</html>
```

**style.css:**
```css
/* ========================================
   EXERCÍCIO 5 - POSITION E Z-INDEX
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
    padding-top: 80px; /* Espaço para header fixo */
}

/* Header Fixo */
.header-fixo {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #2c3e50;
    color: white;
    padding: 15px 30px;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.header-fixo h1 {
    font-size: 24px;
    margin-bottom: 10px;
}

.header-fixo nav a {
    color: white;
    text-decoration: none;
    margin-right: 20px;
    padding: 5px 10px;
    border-radius: 3px;
    transition: background-color 0.3s;
}

.header-fixo nav a:hover {
    background-color: #34495e;
}

/* Conteúdo */
.conteudo {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.secao {
    margin-bottom: 50px;
    padding: 30px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.secao h2 {
    color: #2c3e50;
    font-size: 28px;
    margin-bottom: 25px;
    border-bottom: 3px solid #3498db;
    padding-bottom: 10px;
}

/* ========================================
   SEÇÃO 1: RELATIVE
   ======================================== */
.demo-relative {
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    border: 2px solid #e9ecef;
}

.caixa-original {
    background-color: #e3f2fd;
    padding: 20px;
    border: 2px solid #2196f3;
    margin-bottom: 10px;
    border-radius: 5px;
    font-weight: bold;
}

.caixa-movida {
    position: relative;
    top: 20px;
    left: 30px;
    background-color: #fff3e0;
    padding: 20px;
    border: 2px solid #ff9800;
    border-radius: 5px;
    font-weight: bold;
}

/* ========================================
   SEÇÃO 2: ABSOLUTE
   ======================================== */
.container-absolute {
    position: relative;
    height: 300px;
    background-color: #f0f0f0;
    border: 3px solid #333;
    border-radius: 8px;
}

.elemento-absolute {
    position: absolute;
    background-color: #2196f3;
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    font-weight: bold;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

.top-left {
    top: 20px;
    left: 20px;
}

.top-right {
    top: 20px;
    right: 20px;
}

.bottom-left {
    bottom: 20px;
    left: 20px;
}

.bottom-right {
    bottom: 20px;
    right: 20px;
}

.center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ff5722;
}

/* ========================================
   SEÇÃO 3: Z-INDEX
   ======================================== */
.container-camadas {
    position: relative;
    height: 250px;
    background-color: #f5f5f5;
    border-radius: 8px;
    border: 2px solid #333;
}

.camada {
    position: absolute;
    width: 180px;
    height: 120px;
    padding: 20px;
    border-radius: 8px;
    color: white;
    font-weight: bold;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    cursor: pointer;
}

.camada:hover {
    transform: translateY(-10px);
    z-index: 10;
}

.camada-1 {
    top: 20px;
    left: 20px;
    background-color: #4caf50;
    z-index: 1;
}

.camada-2 {
    top: 40px;
    left: 40px;
    background-color: #2196f3;
    z-index: 2;
}

.camada-3 {
    top: 60px;
    left: 60px;
    background-color: #ff5722;
    z-index: 3;
}

/* ========================================
   SEÇÃO 4: CENTRALIZAÇÃO
   ======================================== */
.container-centralizacao {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.centralizado-absolute {
    position: relative;
    height: 100px;
    background-color: #f8f9fa;
    border: 2px solid #e9ecef;
    border-radius: 8px;
}

.centralizado-absolute::before {
    content: "Centralizado com Absolute + Transform";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #2196f3;
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    font-weight: bold;
    text-align: center;
}

.centralizado-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    background-color: #4caf50;
    color: white;
    border-radius: 8px;
    font-weight: bold;
    font-size: 18px;
}

.centralizado-grid {
    display: grid;
    place-items: center;
    height: 100px;
    background-color: #ff9800;
    color: white;
    border-radius: 8px;
    font-weight: bold;
    font-size: 18px;
}

/* ========================================
   SEÇÃO 5: STICKY
   ======================================== */
.nav-sticky {
    position: sticky;
    top: 80px; /* Abaixo do header fixo */
    background-color: #17a2b8;
    color: white;
    padding: 15px;
    text-align: center;
    border-radius: 5px;
    z-index: 100;
    margin-bottom: 20px;
}

.conteudo-scroll {
    height: 400px;
    overflow-y: auto;
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid #e9ecef;
}

.conteudo-scroll p {
    margin-bottom: 20px;
    padding: 10px;
    background-color: white;
    border-radius: 3px;
    border-left: 4px solid #3498db;
}

/* ========================================
   SEÇÃO 6: MODAL
   ======================================== */
.btn-modal {
    display: inline-block;
    padding: 12px 24px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-modal:hover {
    background-color: #218838;
    transform: translateY(-2px);
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 9999;
    display: none;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    max-width: 500px;
    width: 90%;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    text-align: center;
}

.modal-content h3 {
    color: #2c3e50;
    margin-bottom: 15px;
}

.modal-content p {
    margin-bottom: 20px;
    color: #666;
}

.btn-fechar {
    padding: 10px 20px;
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.btn-fechar:hover {
    background-color: #c82333;
}

/* ========================================
   BOTÃO FLUTUANTE
   ======================================== */
.botao-flutuante {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #ff5722;
    color: white;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    z-index: 999;
    transition: all 0.3s ease;
}

.botao-flutuante:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
}

/* ========================================
   RESPONSIVIDADE
   ======================================== */
@media (max-width: 768px) {
    .header-fixo {
        padding: 10px 20px;
    }
    
    .header-fixo h1 {
        font-size: 20px;
    }
    
    .header-fixo nav a {
        display: block;
        margin: 5px 0;
    }
    
    .conteudo {
        padding: 10px;
    }
    
    .secao {
        padding: 20px;
        margin-bottom: 30px;
    }
    
    .camada {
        width: 150px;
        height: 100px;
        font-size: 14px;
    }
    
    .botao-flutuante {
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        font-size: 20px;
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
.caixa-original::before {
    content: "📍";
    margin-right: 5px;
}

.caixa-movida::before {
    content: "🚀";
    margin-right: 5px;
}

.camada::before {
    content: "📦";
    margin-right: 5px;
}

.centralizado-flex::before {
    content: "🎯";
    margin-right: 5px;
}

.centralizado-grid::before {
    content: "🎯";
    margin-right: 5px;
}

.nav-sticky::before {
    content: "📌";
    margin-right: 5px;
}
```

### 🎯 **Desafio Extra:**
- Experimente mudar os valores de position
- Teste diferentes valores de z-index
- Crie um menu dropdown usando position
- Adicione animações baseadas em position

---

## 📚 Próximos Passos:
- ✅ Aula 6: CSS Grid
- ✅ Aula 7: Flexbox
- ✅ Aula 8: Animações

---

## 💡 Dicas Importantes:
- **🎯 Use** position: relative para criar contexto para elementos absolute
- **📦 Entenda** que z-index só funciona em elementos posicionados
- **🎨 Combine** position com transform para centralização precisa
- **📱 Teste** como positions se comportam em diferentes dispositivos
- **🔧 Use** DevTools para debugar posicionamentos complexos