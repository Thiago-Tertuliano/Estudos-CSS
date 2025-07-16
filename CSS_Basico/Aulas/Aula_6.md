# 🎓 CSS Básico – Aula 6
## 🔹 Tema: Flexbox – Fundamentos para Layouts Flexíveis

---

## ✅ 1. O que é Flexbox?

**Flexbox (Flexible Box) é um modelo de layout do CSS para criar disposições flexíveis e responsivas.** Ele resolve muitos problemas de layout que eram difíceis de implementar com CSS tradicional.

### 🎯 **Por que usar Flexbox?**
- **Layouts flexíveis** que se adaptam ao conteúdo
- **Centralização fácil** de elementos
- **Distribuição automática** de espaço
- **Responsividade nativa** sem media queries complexas
- **Alinhamento preciso** em ambos os eixos

### 📊 **Conceitos Fundamentais:**

| Conceito | Descrição |
|----------|-----------|
| **Container** | Elemento pai com `display: flex` |
| **Items** | Elementos filhos diretos do container |
| **Main Axis** | Eixo principal (row = horizontal, column = vertical) |
| **Cross Axis** | Eixo cruzado (perpendicular ao main axis) |
| **Flex Item** | Cada elemento filho se torna um flex item |

---

## ✅ 2. Como Ativar o Flexbox

**Aplique `display: flex` no elemento pai (container):**

```css
.container {
    display: flex;
}
```

### 🔹 **Exemplo Básico:**

```html
<div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
</div>
```

```css
.container {
    display: flex;
    background-color: #f0f0f0;
    padding: 20px;
    border: 2px solid #333;
}

.item {
    background-color: #2196f3;
    color: white;
    padding: 20px;
    margin: 5px;
    border-radius: 5px;
    text-align: center;
}
```

---

## ✅ 3. Propriedades do Container (Pai)

### 🔹 **1. flex-direction**

**Controla a direção dos itens no eixo principal:**

```css
.container {
    display: flex;
    flex-direction: row;        /* Padrão: horizontal */
    flex-direction: column;     /* Vertical */
    flex-direction: row-reverse; /* Horizontal invertido */
    flex-direction: column-reverse; /* Vertical invertido */
}
```

#### **Exemplo Visual:**

```css
/* Row (padrão) */
.container-row {
    display: flex;
    flex-direction: row;
    background-color: #e3f2fd;
    padding: 20px;
    gap: 10px;
}

/* Column */
.container-column {
    display: flex;
    flex-direction: column;
    background-color: #fff3e0;
    padding: 20px;
    gap: 10px;
}
```

### 🔹 **2. justify-content**

**Alinha os itens no eixo principal:**

```css
.container {
    display: flex;
    justify-content: flex-start;    /* Padrão: início */
    justify-content: center;        /* Centro */
    justify-content: flex-end;      /* Fim */
    justify-content: space-between; /* Espaço entre */
    justify-content: space-around;  /* Espaço em volta */
    justify-content: space-evenly;  /* Espaço igual */
}
```

#### **Exemplo Completo:**

```html
<div class="demo-justify">
    <div class="container justify-start">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
    </div>
    
    <div class="container justify-center">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
    </div>
    
    <div class="container justify-end">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
    </div>
    
    <div class="container justify-between">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
    </div>
</div>
```

```css
.demo-justify {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.container {
    display: flex;
    background-color: #f5f5f5;
    padding: 15px;
    border-radius: 8px;
    min-height: 80px;
}

.justify-start { justify-content: flex-start; }
.justify-center { justify-content: center; }
.justify-end { justify-content: flex-end; }
.justify-between { justify-content: space-between; }

.item {
    background-color: #2196f3;
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    font-weight: bold;
}
```

### 🔹 **3. align-items**

**Alinha os itens no eixo cruzado:**

```css
.container {
    display: flex;
    align-items: stretch;     /* Padrão: estica */
    align-items: center;      /* Centro */
    align-items: flex-start;  /* Início */
    align-items: flex-end;    /* Fim */
    align-items: baseline;    /* Linha base do texto */
}
```

#### **Exemplo com Alturas Diferentes:**

```html
<div class="demo-align">
    <div class="container align-stretch">
        <div class="item tall">Alto</div>
        <div class="item">Normal</div>
        <div class="item short">Baixo</div>
    </div>
    
    <div class="container align-center">
        <div class="item tall">Alto</div>
        <div class="item">Normal</div>
        <div class="item short">Baixo</div>
    </div>
</div>
```

```css
.demo-align {
    display: flex;
    gap: 20px;
}

.container {
    display: flex;
    background-color: #f5f5f5;
    padding: 15px;
    border-radius: 8px;
    min-height: 120px;
}

.align-stretch { align-items: stretch; }
.align-center { align-items: center; }

.item {
    background-color: #4caf50;
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    font-weight: bold;
    margin: 0 5px;
}

.tall { height: 80px; }
.short { height: 40px; }
```

### 🔹 **4. flex-wrap**

**Controla se os itens quebram linha:**

```css
.container {
    display: flex;
    flex-wrap: nowrap;    /* Padrão: não quebra */
    flex-wrap: wrap;      /* Quebra linha */
    flex-wrap: wrap-reverse; /* Quebra linha invertido */
}
```

#### **Exemplo com Wrap:**

```html
<div class="container-wrap">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
</div>
```

```css
.container-wrap {
    display: flex;
    flex-wrap: wrap;
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
    gap: 10px;
}

.container-wrap .item {
    background-color: #ff9800;
    color: white;
    padding: 15px 25px;
    border-radius: 5px;
    font-weight: bold;
    min-width: 120px;
    text-align: center;
}
```

### 🔹 **5. gap**

**Espaçamento entre itens (substitui margins):**

```css
.container {
    display: flex;
    gap: 20px;              /* Espaçamento uniforme */
    gap: 20px 10px;         /* Row gap, column gap */
    row-gap: 20px;          /* Apenas entre linhas */
    column-gap: 10px;       /* Apenas entre colunas */
}
```

---

## ✅ 4. Propriedades dos Items (Filhos)

### 🔹 **1. flex-grow**

**Controla quanto o item pode crescer:**

```css
.item {
    flex-grow: 0;    /* Padrão: não cresce */
    flex-grow: 1;    /* Cresce proporcionalmente */
    flex-grow: 2;    /* Cresce 2x mais que outros */
}
```

### 🔹 **2. flex-shrink**

**Controla quanto o item pode encolher:**

```css
.item {
    flex-shrink: 1;  /* Padrão: pode encolher */
    flex-shrink: 0;  /* Não encolhe */
    flex-shrink: 2;  /* Encolhe 2x mais */
}
```

### 🔹 **3. flex-basis**

**Define o tamanho base do item:**

```css
.item {
    flex-basis: auto;    /* Padrão: tamanho do conteúdo */
    flex-basis: 200px;   /* Largura fixa */
    flex-basis: 50%;     /* Percentual */
}
```

### 🔹 **4. flex (shorthand)**

**Combina flex-grow, flex-shrink e flex-basis:**

```css
.item {
    flex: 0 1 auto;      /* Padrão */
    flex: 1;              /* flex: 1 1 0% */
    flex: 2 1 200px;      /* grow: 2, shrink: 1, basis: 200px */
    flex: auto;           /* flex: 1 1 auto */
    flex: none;           /* flex: 0 0 auto */
}
```

#### **Exemplo Prático:**

```html
<div class="flex-demo">
    <div class="item flex-1">Flex 1</div>
    <div class="item flex-2">Flex 2</div>
    <div class="item flex-3">Flex 3</div>
</div>
```

```css
.flex-demo {
    display: flex;
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
    gap: 10px;
    min-height: 100px;
}

.flex-demo .item {
    background-color: #9c27b0;
    color: white;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
}

.flex-1 { flex: 1; }
.flex-2 { flex: 2; }
.flex-3 { flex: 3; }
```

### 🔹 **5. align-self**

**Alinha um item específico no eixo cruzado:**

```css
.item {
    align-self: auto;      /* Herda do container */
    align-self: center;    /* Centraliza este item */
    align-self: flex-start; /* Alinha no início */
    align-self: flex-end;   /* Alinha no fim */
    align-self: stretch;    /* Estica este item */
}
```

---

## ✅ 5. Casos de Uso Práticos

### 🎨 **1. Layout de Navegação:**

```html
<nav class="navbar">
    <div class="logo">Logo</div>
    <ul class="nav-links">
        <li><a href="#">Início</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Serviços</a></li>
        <li><a href="#">Contato</a></li>
    </ul>
    <div class="user-actions">
        <button>Login</button>
        <button>Cadastro</button>
    </div>
</nav>
```

```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: white;
    padding: 15px 30px;
}

.logo {
    font-size: 24px;
    font-weight: bold;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 20px;
}

.nav-links a {
    color: white;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.nav-links a:hover {
    background-color: #555;
}

.user-actions {
    display: flex;
    gap: 10px;
}

.user-actions button {
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.user-actions button:first-child {
    background-color: transparent;
    color: white;
    border: 1px solid white;
}

.user-actions button:last-child {
    background-color: #007bff;
    color: white;
}
```

### 🎨 **2. Cards Responsivos:**

```html
<div class="cards-container">
    <div class="card">
        <h3>Card 1</h3>
        <p>Conteúdo do card 1</p>
    </div>
    <div class="card">
        <h3>Card 2</h3>
        <p>Conteúdo do card 2</p>
    </div>
    <div class="card">
        <h3>Card 3</h3>
        <p>Conteúdo do card 3</p>
    </div>
</div>
```

```css
.cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
}

.card {
    flex: 1 1 300px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}

.card h3 {
    color: #333;
    margin-bottom: 10px;
}

.card p {
    color: #666;
    line-height: 1.6;
}
```

### 🎨 **3. Formulário Centralizado:**

```html
<div class="form-container">
    <form class="login-form">
        <h2>Login</h2>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" required>
        </div>
        <div class="form-group">
            <label for="password">Senha:</label>
            <input type="password" id="password" required>
        </div>
        <div class="form-actions">
            <button type="submit">Entrar</button>
            <button type="button">Cancelar</button>
        </div>
    </form>
</div>
```

```css
.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f5f5f5;
}

.login-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    min-width: 300px;
}

.login-form h2 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.form-group label {
    font-weight: bold;
    color: #555;
}

.form-group input {
    padding: 10px;
    border: 2px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    transition: border-color 0.3s;
}

.form-group input:focus {
    outline: none;
    border-color: #007bff;
}

.form-actions {
    display: flex;
    gap: 10px;
}

.form-actions button {
    flex: 1;
    padding: 12px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.form-actions button[type="submit"] {
    background-color: #007bff;
    color: white;
}

.form-actions button[type="submit"]:hover {
    background-color: #0056b3;
}

.form-actions button[type="button"] {
    background-color: #6c757d;
    color: white;
}

.form-actions button[type="button"]:hover {
    background-color: #545b62;
}
```

---

## ✅ 6. Responsividade com Flexbox

### 🔹 **Layout Responsivo:**

```css
.container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.item {
    flex: 1 1 300px;
}

/* Mobile */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
    
    .item {
        flex: 1 1 auto;
    }
}
```

### 🔹 **Navegação Responsiva:**

```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
}

.nav-links {
    display: flex;
    gap: 20px;
}

/* Mobile */
@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        gap: 15px;
    }
    
    .nav-links {
        flex-direction: column;
        text-align: center;
    }
}
```

---

## 🧪 Exercício 6 – Criando Layouts Flexíveis

### 📋 **Objetivo:**
Criar uma página demonstrando todos os conceitos do Flexbox com layouts práticos e responsivos.

### 🎯 **Passos:**

1. **Crie navegação horizontal** com flexbox
2. **Implemente cards responsivos** com flex-wrap
3. **Centralize formulário** usando flexbox
4. **Crie layout de galeria** flexível

### 📝 **Código Base:**

**index.html:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 6 - Flexbox</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Navegação -->
    <nav class="navbar">
        <div class="logo">Flexbox Demo</div>
        <ul class="nav-links">
            <li><a href="#cards">Cards</a></li>
            <li><a href="#form">Formulário</a></li>
            <li><a href="#gallery">Galeria</a></li>
        </ul>
        <div class="user-actions">
            <button class="btn-login">Login</button>
            <button class="btn-signup">Cadastro</button>
        </div>
    </nav>

    <main class="main-content">
        <!-- Seção 1: Demonstração Flexbox -->
        <section class="section">
            <h2>Demonstração Flexbox</h2>
            <div class="flex-demo">
                <div class="demo-container">
                    <h3>justify-content: center</h3>
                    <div class="container justify-center">
                        <div class="item">1</div>
                        <div class="item">2</div>
                        <div class="item">3</div>
                    </div>
                </div>
                
                <div class="demo-container">
                    <h3>justify-content: space-between</h3>
                    <div class="container justify-between">
                        <div class="item">1</div>
                        <div class="item">2</div>
                        <div class="item">3</div>
                    </div>
                </div>
                
                <div class="demo-container">
                    <h3>align-items: center</h3>
                    <div class="container align-center">
                        <div class="item tall">Alto</div>
                        <div class="item">Normal</div>
                        <div class="item short">Baixo</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Seção 2: Cards Responsivos -->
        <section id="cards" class="section">
            <h2>Cards Responsivos</h2>
            <div class="cards-container">
                <div class="card">
                    <h3>Card 1</h3>
                    <p>Este é um card usando flexbox. Ele se adapta automaticamente ao tamanho da tela.</p>
                    <button class="card-btn">Saiba Mais</button>
                </div>
                <div class="card">
                    <h3>Card 2</h3>
                    <p>Outro card demonstrando o poder do flexbox para layouts responsivos.</p>
                    <button class="card-btn">Saiba Mais</button>
                </div>
                <div class="card">
                    <h3>Card 3</h3>
                    <p>Mais um card para mostrar como flexbox facilita a criação de layouts.</p>
                    <button class="card-btn">Saiba Mais</button>
                </div>
                <div class="card">
                    <h3>Card 4</h3>
                    <p>Este card demonstra como flex-wrap funciona automaticamente.</p>
                    <button class="card-btn">Saiba Mais</button>
                </div>
            </div>
        </section>

        <!-- Seção 3: Formulário Centralizado -->
        <section id="form" class="section">
            <h2>Formulário Centralizado</h2>
            <div class="form-container">
                <form class="contact-form">
                    <h3>Entre em Contato</h3>
                    <div class="form-group">
                        <label for="name">Nome:</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Mensagem:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                    </div>
                    <div class="form-actions">
                        <button type="submit" class="btn-submit">Enviar</button>
                        <button type="reset" class="btn-reset">Limpar</button>
                    </div>
                </form>
            </div>
        </section>

        <!-- Seção 4: Galeria Flexível -->
        <section id="gallery" class="section">
            <h2>Galeria Flexível</h2>
            <div class="gallery">
                <div class="gallery-item">
                    <img src="https://via.placeholder.com/300x200/3498db/ffffff?text=Imagem+1" alt="Imagem 1">
                    <h4>Imagem 1</h4>
                </div>
                <div class="gallery-item">
                    <img src="https://via.placeholder.com/300x200/e74c3c/ffffff?text=Imagem+2" alt="Imagem 2">
                    <h4>Imagem 2</h4>
                </div>
                <div class="gallery-item">
                    <img src="https://via.placeholder.com/300x200/2ecc71/ffffff?text=Imagem+3" alt="Imagem 3">
                    <h4>Imagem 3</h4>
                </div>
                <div class="gallery-item">
                    <img src="https://via.placeholder.com/300x200/f39c12/ffffff?text=Imagem+4" alt="Imagem 4">
                    <h4>Imagem 4</h4>
                </div>
                <div class="gallery-item">
                    <img src="https://via.placeholder.com/300x200/9b59b6/ffffff?text=Imagem+5" alt="Imagem 5">
                    <h4>Imagem 5</h4>
                </div>
                <div class="gallery-item">
                    <img src="https://via.placeholder.com/300x200/1abc9c/ffffff?text=Imagem+6" alt="Imagem 6">
                    <h4>Imagem 6</h4>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <p>Exercício 6 - Flexbox Layouts</p>
    </footer>
</body>
</html>
```

**style.css:**
```css
/* ========================================
   EXERCÍCIO 6 - FLEXBOX
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
}

/* ========================================
   NAVEGAÇÃO
   ======================================== */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2c3e50;
    color: white;
    padding: 15px 30px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.logo {
    font-size: 24px;
    font-weight: bold;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 20px;
}

.nav-links a {
    color: white;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.nav-links a:hover {
    background-color: #34495e;
}

.user-actions {
    display: flex;
    gap: 10px;
}

.btn-login,
.btn-signup {
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
}

.btn-login {
    background-color: transparent;
    color: white;
    border: 1px solid white;
}

.btn-login:hover {
    background-color: white;
    color: #2c3e50;
}

.btn-signup {
    background-color: #3498db;
    color: white;
}

.btn-signup:hover {
    background-color: #2980b9;
}

/* ========================================
   CONTEÚDO PRINCIPAL
   ======================================== */
.main-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
}

.section {
    margin-bottom: 60px;
    padding: 30px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.section h2 {
    color: #2c3e50;
    font-size: 28px;
    margin-bottom: 30px;
    text-align: center;
    border-bottom: 3px solid #3498db;
    padding-bottom: 10px;
}

/* ========================================
   DEMONSTRAÇÃO FLEXBOX
   ======================================== */
.flex-demo {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.demo-container {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    border: 2px solid #e9ecef;
}

.demo-container h3 {
    color: #2c3e50;
    margin-bottom: 15px;
    text-align: center;
}

.container {
    display: flex;
    background-color: #e3f2fd;
    padding: 15px;
    border-radius: 8px;
    min-height: 80px;
    gap: 10px;
}

.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.align-center { align-items: center; }

.item {
    background-color: #2196f3;
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    font-weight: bold;
    text-align: center;
    min-width: 60px;
}

.tall { height: 60px; }
.short { height: 30px; }

/* ========================================
   CARDS RESPONSIVOS
   ======================================== */
.cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1 1 300px;
    background-color: white;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    padding: 25px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0,0,0,0.15);
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
    margin-bottom: 20px;
    flex: 1;
}

.card-btn {
    align-self: flex-start;
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.card-btn:hover {
    background-color: #2980b9;
}

/* ========================================
   FORMULÁRIO CENTRALIZADO
   ======================================== */
.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #f8f9fa;
    padding: 30px;
    border-radius: 10px;
    border: 2px solid #e9ecef;
    min-width: 400px;
    max-width: 500px;
    width: 100%;
}

.contact-form h3 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 10px;
    font-size: 24px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.form-group label {
    font-weight: 600;
    color: #2c3e50;
}

.form-group input,
.form-group textarea {
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    transition: border-color 0.3s;
    font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #3498db;
}

.form-group textarea {
    resize: vertical;
    min-height: 100px;
}

.form-actions {
    display: flex;
    gap: 15px;
}

.btn-submit,
.btn-reset {
    flex: 1;
    padding: 12px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-submit {
    background-color: #28a745;
    color: white;
}

.btn-submit:hover {
    background-color: #218838;
}

.btn-reset {
    background-color: #6c757d;
    color: white;
}

.btn-reset:hover {
    background-color: #5a6268;
}

/* ========================================
   GALERIA FLEXÍVEL
   ======================================== */
.gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.gallery-item {
    flex: 1 1 300px;
    max-width: 350px;
    background-color: white;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
}

.gallery-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0,0,0,0.15);
    border-color: #3498db;
}

.gallery-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.gallery-item:hover img {
    transform: scale(1.05);
}

.gallery-item h4 {
    padding: 15px;
    color: #2c3e50;
    text-align: center;
    margin: 0;
}

/* ========================================
   FOOTER
   ======================================== */
.footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 20px;
    margin-top: 40px;
}

/* ========================================
   RESPONSIVIDADE
   ======================================== */
@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        gap: 15px;
        padding: 15px 20px;
    }
    
    .nav-links {
        flex-direction: column;
        text-align: center;
        gap: 10px;
    }
    
    .user-actions {
        flex-direction: column;
        width: 100%;
    }
    
    .btn-login,
    .btn-signup {
        width: 100%;
        padding: 12px;
    }
    
    .main-content {
        padding: 20px 10px;
    }
    
    .section {
        padding: 20px;
        margin-bottom: 40px;
    }
    
    .contact-form {
        min-width: 100%;
        margin: 0 10px;
    }
    
    .form-actions {
        flex-direction: column;
    }
    
    .gallery-item {
        flex: 1 1 100%;
        max-width: 100%;
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

.section {
    animation: fadeIn 0.6s ease-out;
}

/* ========================================
   ESTILOS ESPECIAIS
   ======================================== */
.card::before {
    content: "💳";
    font-size: 20px;
    display: block;
    margin-bottom: 10px;
}

.gallery-item::before {
    content: "🖼️";
    font-size: 20px;
    display: block;
    margin-bottom: 10px;
}

.contact-form::before {
    content: "📝";
    font-size: 20px;
    display: block;
    margin-bottom: 10px;
    text-align: center;
}
```

### 🎯 **Desafio Extra:**
- Experimente mudar os valores de flex-direction
- Teste diferentes justify-content e align-items
- Crie um layout de sidebar usando flexbox
- Adicione animações baseadas em flexbox

---

## 📚 Próximos Passos:
- ✅ Aula 7: CSS Grid
- ✅ Aula 8: Animações e Transições
- ✅ Aula 9: Media Queries Avançadas

---

## 💡 Dicas Importantes:
- **🎯 Use** flex: 1 para distribuição igual de espaço
- **📱 Combine** flexbox com media queries para responsividade
- **🎨 Entenda** a diferença entre main axis e cross axis
- **🔧 Teste** diferentes valores de flex-grow, flex-shrink e flex-basis
- **📦 Use** gap em vez de margins para espaçamento uniforme