# 🎓 CSS Básico – Aula 2
## 🔹 Tema: Cores, Unidades de Medida e Fontes no CSS

---

## ✅ 1. Cores em CSS

**As cores são fundamentais para criar interfaces atrativas e profissionais.** O CSS oferece várias formas de definir cores, cada uma com suas vantagens.

### 🎨 **Formas de Definir Cores:**

#### 🔸 **1. Por Nome (Cores Básicas)**
```css
color: red;
color: blue;
color: green;
color: yellow;
color: black;
color: white;
color: orange;
color: purple;
color: pink;
color: brown;
```

**✅ Vantagens:** Simples e fácil de lembrar
**❌ Desvantagens:** Limitado a ~150 cores predefinidas

#### 🔸 **2. Hexadecimal (#RRGGBB)**
```css
color: #ff0000;    /* Vermelho */
color: #00ff00;    /* Verde */
color: #0000ff;    /* Azul */
color: #ffffff;    /* Branco */
color: #000000;    /* Preto */
color: #ff6600;    /* Laranja */
color: #9933cc;    /* Roxo */
```

**📝 Formato:** `#RRGGBB` onde:
- **RR** = Vermelho (00-FF)
- **GG** = Verde (00-FF)
- **BB** = Azul (00-FF)

**💡 Dica:** Você pode usar forma abreviada quando os valores são iguais:
```css
color: #f00;    /* #ff0000 */
color: #0f0;    /* #00ff00 */
color: #00f;    /* #0000ff */
color: #fff;    /* #ffffff */
```

#### 🔸 **3. RGB (Red, Green, Blue)**
```css
color: rgb(255, 0, 0);      /* Vermelho */
color: rgb(0, 255, 0);      /* Verde */
color: rgb(0, 0, 255);      /* Azul */
color: rgb(255, 255, 255);  /* Branco */
color: rgb(0, 0, 0);        /* Preto */
color: rgb(255, 102, 0);    /* Laranja */
```

**📝 Formato:** `rgb(red, green, blue)` onde cada valor vai de 0 a 255

#### 🔸 **4. RGBA (RGB + Alpha/Transparência)**
```css
background-color: rgba(0, 0, 0, 0.5);    /* Preto 50% transparente */
background-color: rgba(255, 0, 0, 0.3);  /* Vermelho 30% transparente */
color: rgba(0, 0, 0, 0.8);              /* Preto 80% opaco */
```

**📝 Formato:** `rgba(red, green, blue, alpha)` onde alpha vai de 0 (transparente) a 1 (opaco)

#### 🔸 **5. HSL (Hue, Saturation, Lightness)**
```css
color: hsl(0, 100%, 50%);      /* Vermelho */
color: hsl(120, 100%, 50%);    /* Verde */
color: hsl(240, 100%, 50%);    /* Azul */
color: hsl(30, 100%, 50%);     /* Laranja */
color: hsl(280, 100%, 50%);    /* Roxo */
```

**📝 Formato:** `hsl(hue, saturation%, lightness%)`
- **Hue:** 0-360 (matiz/tonalidade)
- **Saturation:** 0-100% (saturação)
- **Lightness:** 0-100% (luminosidade)

#### 🔸 **6. HSLA (HSL + Alpha)**
```css
background-color: hsla(0, 100%, 50%, 0.5);    /* Vermelho 50% transparente */
color: hsla(240, 100%, 50%, 0.8);            /* Azul 80% opaco */
```

### 🎯 **Exemplos Práticos de Cores:**

```css
/* Cores de fundo */
body {
    background-color: #f5f5f5;              /* Cinza claro */
    background-color: rgb(245, 245, 245);   /* Mesmo cinza */
    background-color: hsl(0, 0%, 96%);      /* Mesmo cinza */
}

/* Cores de texto */
h1 {
    color: #2c3e50;                         /* Azul escuro */
    color: rgb(44, 62, 80);                /* Mesmo azul */
    color: hsl(210, 29%, 24%);             /* Mesmo azul */
}

/* Cores com transparência */
.overlay {
    background-color: rgba(0, 0, 0, 0.7);  /* Overlay escuro */
}

.button {
    background-color: hsla(210, 100%, 50%, 0.9); /* Azul com transparência */
}
```

### 🔥 **Ferramentas para Cores:**
- **🎨 Coolors:** https://coolors.co (gerador de paletas)
- **🌈 Adobe Color:** https://color.adobe.com
- **🎯 ColorZilla:** Extensão para capturar cores
- **📱 DevTools:** Shift + clique no seletor de cor

---

## ✅ 2. Unidades de Medida

**As unidades de medida no CSS determinam o tamanho e posicionamento dos elementos.** Existem unidades absolutas e relativas.

### 📏 **Unidades Absolutas:**

| Unidade | Exemplo | Descrição | Uso |
|---------|---------|-----------|-----|
| `px` | `16px` | Pixels | Mais comum, fixo |
| `pt` | `12pt` | Pontos | Impressão |
| `pc` | `1pc` | Picas | Impressão |
| `mm` | `10mm` | Milímetros | Impressão |
| `cm` | `2cm` | Centímetros | Impressão |
| `in` | `1in` | Polegadas | Impressão |

**💡 Dica:** Para web, use principalmente `px` para elementos que devem ter tamanho fixo.

### 📐 **Unidades Relativas:**

#### **Porcentagem (%)**
```css
.container {
    width: 80%;              /* 80% da largura do pai */
    height: 50%;             /* 50% da altura do pai */
    margin: 0 auto;          /* Centraliza horizontalmente */
}

.texto {
    width: 100%;             /* Largura total do pai */
    max-width: 600px;        /* Máximo de 600px */
}
```

#### **em (relativo à fonte do elemento)**
```css
body {
    font-size: 16px;         /* Tamanho base */
}

h1 {
    font-size: 2em;          /* 32px (2 × 16px) */
    margin-bottom: 0.5em;    /* 16px (0.5 × 32px) */
}

p {
    font-size: 1em;          /* 16px (1 × 16px) */
    line-height: 1.5em;      /* 24px (1.5 × 16px) */
}
```

#### **rem (relativo à fonte do html)**
```css
html {
    font-size: 16px;         /* Tamanho base do documento */
}

h1 {
    font-size: 2rem;         /* 32px (2 × 16px) */
    margin-bottom: 1rem;     /* 16px (1 × 16px) - sempre relativo ao html */
}

p {
    font-size: 1rem;         /* 16px (1 × 16px) */
    line-height: 1.5rem;     /* 24px (1.5 × 16px) */
}
```

#### **Viewport Units (vh/vw)**
```css
.hero {
    height: 100vh;           /* Altura total da tela */
    width: 100vw;            /* Largura total da tela */
}

.sidebar {
    width: 25vw;             /* 25% da largura da tela */
    height: 50vh;            /* 50% da altura da tela */
}

.modal {
    width: 80vw;             /* 80% da largura da tela */
    max-width: 600px;        /* Mas não mais que 600px */
}
```

### 🎯 **Exemplos Práticos de Unidades:**

```css
/* Layout responsivo */
.container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    padding: 2rem;
}

/* Tipografia escalável */
html {
    font-size: 16px;
}

h1 {
    font-size: 2.5rem;       /* 40px */
    margin-bottom: 1rem;     /* 16px */
}

h2 {
    font-size: 2rem;         /* 32px */
    margin-bottom: 0.75rem;  /* 12px */
}

p {
    font-size: 1rem;         /* 16px */
    line-height: 1.6rem;     /* 25.6px */
    margin-bottom: 1rem;     /* 16px */
}

/* Botões responsivos */
.button {
    padding: 0.75rem 1.5rem; /* 12px 24px */
    font-size: 1rem;         /* 16px */
    border-radius: 0.25rem;  /* 4px */
}

/* Espaçamentos consistentes */
.section {
    padding: 2rem 0;         /* 32px 0 */
    margin-bottom: 3rem;     /* 48px */
}

.card {
    padding: 1.5rem;         /* 24px */
    margin-bottom: 1rem;     /* 16px */
}
```

---

## ✅ 3. Fontes no CSS

**A tipografia é crucial para a legibilidade e aparência profissional de um site.**

### 🔤 **Propriedades de Fonte:**

#### **font-family**
```css
body {
    font-family: 'Arial', sans-serif;
    font-family: 'Times New Roman', serif;
    font-family: 'Courier New', monospace;
    font-family: 'Georgia', serif;
    font-family: 'Verdana', sans-serif;
}
```

#### **font-size**
```css
h1 {
    font-size: 2.5rem;       /* 40px */
}

h2 {
    font-size: 2rem;         /* 32px */
}

p {
    font-size: 1rem;         /* 16px */
}

.small {
    font-size: 0.875rem;     /* 14px */
}
```

#### **font-weight**
```css
.light {
    font-weight: 300;
}

.normal {
    font-weight: 400;
}

.medium {
    font-weight: 500;
}

.bold {
    font-weight: 700;
}

.extra-bold {
    font-weight: 900;
}
```

#### **font-style**
```css
.normal {
    font-style: normal;
}

.italic {
    font-style: italic;
}

.oblique {
    font-style: oblique;
}
```

#### **line-height**
```css
p {
    line-height: 1.6;        /* 1.6x o tamanho da fonte */
    line-height: 1.6rem;     /* 25.6px */
    line-height: 160%;       /* 160% do tamanho da fonte */
}
```

### 🌐 **Fontes da Web (Google Fonts):**

#### **1. Escolha uma fonte:**
Acesse https://fonts.google.com

#### **2. Adicione ao HTML:**
```html
<head>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
</head>
```

#### **3. Use no CSS:**
```css
body {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    line-height: 1.6;
}

h1, h2, h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
}

.special-text {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-style: italic;
}
```

### 🎯 **Exemplo Completo de Tipografia:**

```css
/* Configuração base */
html {
    font-size: 16px;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
    font-weight: 400;
}

/* Hierarquia de títulos */
h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: #2c3e50;
}

h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 0.75rem;
    color: #34495e;
}

h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
    margin-bottom: 0.5rem;
    color: #34495e;
}

/* Parágrafos */
p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    color: #555;
}

/* Texto pequeno */
.small {
    font-size: 0.875rem;
    line-height: 1.5;
    color: #666;
}

/* Destaque */
.emphasis {
    font-weight: 600;
    color: #2c3e50;
}

/* Código */
code {
    font-family: 'Courier New', 'Monaco', 'Consolas', monospace;
    font-size: 0.875rem;
    background-color: #f8f9fa;
    padding: 0.125rem 0.25rem;
    border-radius: 0.25rem;
}
```

---

## 🧪 Exercício 2 – Aplicando o Conteúdo

### 📋 **Objetivo:**
Criar uma página web aplicando cores, unidades de medida e fontes aprendidas na aula.

### 🎯 **Passos:**

1. **Escolha uma paleta de cores (2-3 cores principais)**
2. **Selecione uma fonte do Google Fonts**
3. **Use unidades relativas (rem, %, vh/vw)**
4. **Crie um layout responsivo**

### 📝 **Código Base:**

**index.html:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 2 - Cores e Tipografia</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="header">
        <div class="container">
            <h1 class="titulo-principal">Minha Paleta de Cores</h1>
            <p class="subtitulo">Aplicando cores, unidades e fontes</p>
        </div>
    </header>

    <main class="conteudo">
        <div class="container">
            <section class="secao">
                <h2 class="titulo-secao">Cores Escolhidas</h2>
                <div class="paleta">
                    <div class="cor cor-primaria">
                        <span class="nome-cor">Cor Primária</span>
                        <span class="valor-cor">#3498db</span>
                    </div>
                    <div class="cor cor-secundaria">
                        <span class="nome-cor">Cor Secundária</span>
                        <span class="valor-cor">#2ecc71</span>
                    </div>
                    <div class="cor cor-accent">
                        <span class="nome-cor">Cor de Destaque</span>
                        <span class="valor-cor">#e74c3c</span>
                    </div>
                </div>
            </section>

            <section class="secao">
                <h2 class="titulo-secao">Tipografia</h2>
                <div class="tipografia">
                    <h1 class="exemplo-h1">Título H1 - 2.5rem</h1>
                    <h2 class="exemplo-h2">Título H2 - 2rem</h2>
                    <h3 class="exemplo-h3">Título H3 - 1.5rem</h3>
                    <p class="exemplo-p">Parágrafo normal - 1rem com line-height de 1.6. Este é um exemplo de texto para demonstrar como a tipografia se comporta com diferentes tamanhos e espaçamentos.</p>
                    <p class="exemplo-small">Texto pequeno - 0.875rem para informações secundárias.</p>
                </div>
            </section>

            <section class="secao">
                <h2 class="titulo-secao">Unidades de Medida</h2>
                <div class="unidades">
                    <div class="card">
                        <h3>Card com rem</h3>
                        <p>Este card usa padding de 1.5rem e margin-bottom de 1rem.</p>
                    </div>
                    <div class="card">
                        <h3>Card com %</h3>
                        <p>Este card tem width de 100% e max-width de 600px.</p>
                    </div>
                    <div class="card">
                        <h3>Card com vh/vw</h3>
                        <p>Este card tem min-height de 20vh.</p>
                    </div>
                </div>
            </section>

            <section class="secao">
                <h2 class="titulo-secao">Botões</h2>
                <div class="botoes">
                    <button class="btn btn-primario">Botão Primário</button>
                    <button class="btn btn-secundario">Botão Secundário</button>
                    <button class="btn btn-destaque">Botão Destaque</button>
                </div>
            </section>
        </div>
    </main>

    <footer class="footer">
        <div class="container">
            <p>Exercício 2 - Cores, Unidades e Fontes</p>
        </div>
    </footer>
</body>
</html>
```

**style.css:**
```css
/* Reset e configuração base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 16px;
}

body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f8f9fa;
}

/* Container */
.container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    padding: 0 1rem;
}

/* Header */
.header {
    background: linear-gradient(135deg, #3498db 0%, #2ecc71 100%);
    color: white;
    padding: 4rem 0;
    text-align: center;
}

.titulo-principal {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.subtitulo {
    font-size: 1.25rem;
    font-weight: 300;
    opacity: 0.9;
}

/* Conteúdo */
.conteudo {
    padding: 3rem 0;
}

.secao {
    margin-bottom: 4rem;
    padding: 2rem;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.titulo-secao {
    font-size: 2rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 1.5rem;
    border-bottom: 3px solid #3498db;
    padding-bottom: 0.5rem;
}

/* Paleta de cores */
.paleta {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
}

.cor {
    padding: 2rem;
    border-radius: 0.5rem;
    text-align: center;
    color: white;
    font-weight: 600;
}

.cor-primaria {
    background-color: #3498db;
}

.cor-secundaria {
    background-color: #2ecc71;
}

.cor-accent {
    background-color: #e74c3c;
}

.nome-cor {
    display: block;
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
}

.valor-cor {
    display: block;
    font-size: 0.875rem;
    opacity: 0.9;
}

/* Tipografia */
.tipografia h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 1rem;
}

.tipografia h2 {
    font-size: 2rem;
    font-weight: 600;
    color: #34495e;
    margin-bottom: 0.75rem;
}

.tipografia h3 {
    font-size: 1.5rem;
    font-weight: 500;
    color: #34495e;
    margin-bottom: 0.5rem;
}

.tipografia p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    color: #555;
}

.exemplo-small {
    font-size: 0.875rem;
    color: #666;
}

/* Unidades */
.unidades {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
}

.card {
    background-color: #f8f9fa;
    border: 2px solid #e9ecef;
    border-radius: 0.5rem;
    padding: 1.5rem;
    min-height: 20vh;
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    border-color: #3498db;
}

.card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 0.75rem;
}

.card p {
    color: #666;
    line-height: 1.6;
}

/* Botões */
.botoes {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.btn {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-primario {
    background-color: #3498db;
    color: white;
}

.btn-primario:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
}

.btn-secundario {
    background-color: #2ecc71;
    color: white;
}

.btn-secundario:hover {
    background-color: #27ae60;
    transform: translateY(-2px);
}

.btn-destaque {
    background-color: #e74c3c;
    color: white;
}

.btn-destaque:hover {
    background-color: #c0392b;
    transform: translateY(-2px);
}

/* Footer */
.footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 2rem 0;
    margin-top: 3rem;
}

/* Responsividade */
@media (max-width: 768px) {
    .container {
        width: 95%;
        padding: 0 0.5rem;
    }
    
    .titulo-principal {
        font-size: 2rem;
    }
    
    .secao {
        padding: 1.5rem;
        margin-bottom: 2rem;
    }
    
    .botoes {
        flex-direction: column;
    }
    
    .btn {
        width: 100%;
    }
}
```

### 🎯 **Desafio Extra:**
- Experimente diferentes paletas de cores
- Teste outras fontes do Google Fonts
- Adicione mais seções com diferentes unidades
- Crie animações com cores

---

## 📚 Próximos Passos:
- ✅ Aula 3: Box Model (Margin, Padding, Border)
- ✅ Aula 4: Layout e Posicionamento
- ✅ Aula 5: Flexbox e Grid

---

## 💡 Dicas Importantes:
- **🎨 Sempre** teste suas cores em diferentes dispositivos
- **📏 Use** unidades relativas para layouts responsivos
- **🔤 Mantenha** consistência na tipografia
- **🎯 Escolha** fontes que combinem com o propósito do site
- **📱 Teste** em diferentes tamanhos de tela