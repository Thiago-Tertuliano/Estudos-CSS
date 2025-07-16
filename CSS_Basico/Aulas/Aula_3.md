# 🎓 CSS Básico – Aula 3
## 🔹 Tema: Box Model - Margin, Padding, Border e Content

---

## ✅ 1. O que é o Box Model?

**O Box Model é um conceito fundamental no CSS que define como cada elemento HTML é renderizado como uma caixa retangular.** Entender o Box Model é essencial para controlar o layout e espaçamento dos elementos.

### 📦 **Estrutura do Box Model:**

```
┌─────────────────────────────────────────┐
│              MARGIN (externo)          │
│  ┌─────────────────────────────────┐   │
│  │           BORDER (borda)        │   │
│  │  ┌─────────────────────────┐   │   │
│  │  │      PADDING (interno)  │   │   │
│  │  │  ┌─────────────────┐   │   │   │
│  │  │  │   CONTENT       │   │   │   │
│  │  │  │   (conteúdo)    │   │   │   │
│  │  │  └─────────────────┘   │   │   │
│  │  └─────────────────────────┘   │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

### 🎯 **Por que o Box Model é importante?**
- **Controle preciso** do espaçamento
- **Layout responsivo** e previsível
- **Separação visual** entre elementos
- **Design consistente** em toda a aplicação

---

## ✅ 2. Partes do Box Model

### 🔹 **1. Content (Conteúdo)**
**O conteúdo real do elemento:** texto, imagens, vídeos, etc.

```css
/* O conteúdo é o que está dentro do elemento */
p {
    /* O texto "Olá mundo" é o content */
    color: #333;
    font-size: 16px;
}
```

### 🔹 **2. Padding (Espaçamento Interno)**
**Espaço entre o conteúdo e a borda.** Cria "respiro" interno.

```css
/* Padding em todos os lados */
.elemento {
    padding: 20px;
}

/* Padding específico por lado */
.elemento {
    padding-top: 10px;
    padding-right: 15px;
    padding-bottom: 10px;
    padding-left: 15px;
}
```

### 🔹 **3. Border (Borda)**
**Linha ao redor do conteúdo + padding.** Define os limites visuais.

```css
/* Borda simples */
.elemento {
    border: 2px solid #0066cc;
}

/* Bordas específicas */
.elemento {
    border-top: 1px solid #333;
    border-right: 2px dashed #666;
    border-bottom: 3px dotted #999;
    border-left: 1px solid #333;
}
```

### 🔹 **4. Margin (Espaçamento Externo)**
**Espaço fora da borda.** Separa elementos uns dos outros.

```css
/* Margin em todos os lados */
.elemento {
    margin: 30px;
}

/* Margin específico por lado */
.elemento {
    margin-top: 20px;
    margin-right: 15px;
    margin-bottom: 20px;
    margin-left: 15px;
}
```

---

## ✅ 3. Shorthand Properties

### 📝 **Padding Shorthand:**

```css
/* Todos os lados */
padding: 20px;

/* Topo e base / Laterais */
padding: 10px 20px;

/* Topo / Laterais / Base */
padding: 10px 20px 15px;

/* Topo / Direita / Base / Esquerda */
padding: 10px 20px 15px 5px;
```

### 📝 **Margin Shorthand:**

```css
/* Todos os lados */
margin: 20px;

/* Topo e base / Laterais */
margin: 10px 20px;

/* Topo / Laterais / Base */
margin: 10px 20px 15px;

/* Topo / Direita / Base / Esquerda */
margin: 10px 20px 15px 5px;
```

### 📝 **Border Shorthand:**

```css
/* Largura / Estilo / Cor */
border: 2px solid #0066cc;

/* Bordas específicas */
border-top: 1px solid #333;
border-right: 2px dashed #666;
border-bottom: 3px dotted #999;
border-left: 1px solid #333;
```

### 🧠 **Mnemônico para Lembrar:**
**"TRouBLe"** - Top, Right, Bottom, Left (sentido horário)

---

## ✅ 4. Tipos de Border

### 🔸 **Estilos de Borda:**

```css
/* Sólida */
border: 2px solid #333;

/* Pontilhada */
border: 2px dotted #333;

/* Tracejada */
border: 2px dashed #333;

/* Dupla */
border: 4px double #333;

/* 3D - Inserida */
border: 2px inset #333;

/* 3D - Projetada */
border: 2px outset #333;

/* Ridge (crista) */
border: 2px ridge #333;

/* Groove (sulco) */
border: 2px groove #333;

/* Nenhuma */
border: none;
```

### 🔸 **Border Radius (Bordas Arredondadas):**

```css
/* Todos os cantos */
border-radius: 10px;

/* Cantos específicos */
border-radius: 10px 20px 30px 40px;

/* Círculo perfeito */
border-radius: 50%;

/* Elipse */
border-radius: 50px 25px;
```

---

## ✅ 5. Box-Sizing

### 🔧 **Comportamento Padrão (content-box):**

```css
.elemento {
    width: 200px;
    padding: 20px;
    border: 2px solid #333;
    /* Largura total = 200px + 40px (padding) + 4px (border) = 244px */
}
```

### 🔧 **Com Border-Box:**

```css
* {
    box-sizing: border-box;
}

.elemento {
    width: 200px;
    padding: 20px;
    border: 2px solid #333;
    /* Largura total = 200px (inclui padding e border) */
}
```

### 🎯 **Vantagens do Border-Box:**
- **Cálculos mais simples**
- **Layout mais previsível**
- **Responsividade mais fácil**
- **Menos surpresas no desenvolvimento**

---

## ✅ 6. Margin Collapse

### 📚 **O que é Margin Collapse?**
Quando duas margens verticais se encontram, elas se "colapsam" e apenas a maior é aplicada.

```css
/* Exemplo de margin collapse */
.primeiro {
    margin-bottom: 30px;
}

.segundo {
    margin-top: 20px;
    /* Resultado: apenas 30px de espaço entre os elementos */
}
```

### 🎯 **Quando acontece:**
- **Margens verticais** (top/bottom)
- **Elementos em bloco**
- **Sem padding/border** entre eles

### 💡 **Como evitar:**
```css
/* Use padding em vez de margin */
.container {
    padding: 20px 0;
}

/* Ou adicione border/padding */
.elemento {
    border: 1px solid transparent;
    padding: 1px 0;
}
```

---

## ✅ 7. Exemplos Práticos

### 🎨 **Card Básico:**

```css
.card {
    background-color: #f8f9fa;
    padding: 20px;
    border: 2px solid #e9ecef;
    border-radius: 8px;
    margin: 20px;
    width: 300px;
    box-sizing: border-box;
}
```

### 🎨 **Botão Estilizado:**

```css
.button {
    background-color: #007bff;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    margin: 10px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;
}

.button:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
```

### 🎨 **Container Responsivo:**

```css
.container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
```

### 🎨 **Seção com Espaçamento:**

```css
.section {
    padding: 40px 20px;
    margin-bottom: 30px;
    border-bottom: 1px solid #eee;
}

.section:last-child {
    border-bottom: none;
    margin-bottom: 0;
}
```

---

## 🧪 Exercício 3 – Praticando Box Model

### 📋 **Objetivo:**
Criar diferentes elementos aplicando os conceitos do Box Model e observar como cada propriedade afeta o layout.

### 🎯 **Passos:**

1. **Crie cards com diferentes configurações**
2. **Experimente com box-sizing**
3. **Observe margin collapse**
4. **Teste diferentes tipos de border**

### 📝 **Código Base:**

**index.html:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 3 - Box Model</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header class="header">
            <h1 class="titulo-principal">Box Model em Ação</h1>
            <p class="subtitulo">Praticando margin, padding, border e content</p>
        </header>

        <main class="conteudo">
            <!-- Seção 1: Cards Básicos -->
            <section class="secao">
                <h2 class="titulo-secao">Cards com Diferentes Configurações</h2>
                <div class="cards-container">
                    <div class="card card-basico">
                        <h3>Card Básico</h3>
                        <p>Padding: 20px<br>Margin: 10px<br>Border: 2px solid</p>
                    </div>
                    
                    <div class="card card-grande">
                        <h3>Card Grande</h3>
                        <p>Padding: 40px<br>Margin: 20px<br>Border: 3px dashed</p>
                    </div>
                    
                    <div class="card card-sem-margin">
                        <h3>Sem Margin</h3>
                        <p>Padding: 15px<br>Margin: 0<br>Border: 1px dotted</p>
                    </div>
                </div>
            </section>

            <!-- Seção 2: Box-Sizing -->
            <section class="secao">
                <h2 class="titulo-secao">Box-Sizing Comparação</h2>
                <div class="box-sizing-demo">
                    <div class="box content-box">
                        <h3>Content-Box (Padrão)</h3>
                        <p>Width: 200px<br>Padding: 20px<br>Border: 2px<br>Total: 244px</p>
                    </div>
                    
                    <div class="box border-box">
                        <h3>Border-Box</h3>
                        <p>Width: 200px<br>Padding: 20px<br>Border: 2px<br>Total: 200px</p>
                    </div>
                </div>
            </section>

            <!-- Seção 3: Margin Collapse -->
            <section class="secao">
                <h2 class="titulo-secao">Margin Collapse</h2>
                <div class="margin-collapse-demo">
                    <div class="elemento-collapse">
                        <p>Elemento 1<br>Margin-bottom: 30px</p>
                    </div>
                    <div class="elemento-collapse">
                        <p>Elemento 2<br>Margin-top: 20px</p>
                    </div>
                    <div class="elemento-collapse sem-collapse">
                        <p>Elemento 3<br>Com padding para evitar collapse</p>
                    </div>
                </div>
            </section>

            <!-- Seção 4: Bordas Experimentais -->
            <section class="secao">
                <h2 class="titulo-secao">Tipos de Borda</h2>
                <div class="bordas-container">
                    <div class="borda-item borda-solida">
                        <h3>Solid</h3>
                        <p>Borda sólida padrão</p>
                    </div>
                    
                    <div class="borda-item borda-pontilhada">
                        <h3>Dotted</h3>
                        <p>Borda pontilhada</p>
                    </div>
                    
                    <div class="borda-item borda-tracejada">
                        <h3>Dashed</h3>
                        <p>Borda tracejada</p>
                    </div>
                    
                    <div class="borda-item borda-dupla">
                        <h3>Double</h3>
                        <p>Borda dupla</p>
                    </div>
                    
                    <div class="borda-item borda-inset">
                        <h3>Inset</h3>
                        <p>Borda 3D inserida</p>
                    </div>
                    
                    <div class="borda-item borda-outset">
                        <h3>Outset</h3>
                        <p>Borda 3D projetada</p>
                    </div>
                </div>
            </section>

            <!-- Seção 5: Border Radius -->
            <section class="secao">
                <h2 class="titulo-secao">Border Radius</h2>
                <div class="radius-container">
                    <div class="radius-item radius-pequeno">
                        <h3>Pequeno</h3>
                        <p>5px</p>
                    </div>
                    
                    <div class="radius-item radius-medio">
                        <h3>Médio</h3>
                        <p>15px</p>
                    </div>
                    
                    <div class="radius-item radius-grande">
                        <h3>Grande</h3>
                        <p>25px</p>
                    </div>
                    
                    <div class="radius-item radius-circular">
                        <h3>Circular</h3>
                        <p>50%</p>
                    </div>
                </div>
            </section>
        </main>

        <footer class="footer">
            <p>Exercício 3 - Box Model</p>
        </footer>
    </div>
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

/* Seção 1: Cards Básicos */
.cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.card {
    background-color: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.card h3 {
    color: #2c3e50;
    font-size: 20px;
    margin-bottom: 15px;
    border-bottom: 2px solid #3498db;
    padding-bottom: 8px;
}

.card p {
    color: #666;
    line-height: 1.6;
}

.card-basico {
    border: 2px solid #3498db;
    margin: 10px;
}

.card-grande {
    border: 3px dashed #e74c3c;
    margin: 20px;
    padding: 40px;
}

.card-sem-margin {
    border: 1px dotted #27ae60;
    margin: 0;
    padding: 15px;
}

/* Seção 2: Box-Sizing */
.box-sizing-demo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}

.box {
    background-color: #e8f4fd;
    padding: 20px;
    border: 2px solid #3498db;
    text-align: center;
}

.box h3 {
    color: #2c3e50;
    margin-bottom: 15px;
}

.box p {
    color: #666;
    line-height: 1.8;
}

.content-box {
    box-sizing: content-box;
    width: 200px;
    margin: 0 auto;
}

.border-box {
    box-sizing: border-box;
    width: 200px;
    margin: 0 auto;
}

/* Seção 3: Margin Collapse */
.margin-collapse-demo {
    display: flex;
    flex-direction: column;
    gap: 0;
}

.elemento-collapse {
    background-color: #fff3cd;
    border: 1px solid #ffc107;
    padding: 15px;
    text-align: center;
}

.elemento-collapse p {
    margin: 0;
    color: #856404;
}

.elemento-collapse:first-child {
    margin-bottom: 30px;
}

.elemento-collapse:nth-child(2) {
    margin-top: 20px;
}

.sem-collapse {
    background-color: #d4edda;
    border-color: #28a745;
    padding: 20px;
    margin-top: 20px;
}

.sem-collapse p {
    color: #155724;
}

/* Seção 4: Bordas Experimentais */
.bordas-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.borda-item {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    transition: all 0.3s ease;
}

.borda-item:hover {
    transform: scale(1.05);
}

.borda-item h3 {
    color: #2c3e50;
    margin-bottom: 10px;
}

.borda-item p {
    color: #666;
}

.borda-solida {
    border: 3px solid #3498db;
}

.borda-pontilhada {
    border: 3px dotted #e74c3c;
}

.borda-tracejada {
    border: 3px dashed #f39c12;
}

.borda-dupla {
    border: 6px double #9b59b6;
}

.borda-inset {
    border: 3px inset #34495e;
}

.borda-outset {
    border: 3px outset #27ae60;
}

/* Seção 5: Border Radius */
.radius-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.radius-item {
    background-color: #3498db;
    color: white;
    padding: 30px;
    text-align: center;
    transition: all 0.3s ease;
}

.radius-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(52, 152, 219, 0.3);
}

.radius-item h3 {
    margin-bottom: 10px;
    font-size: 18px;
}

.radius-item p {
    font-size: 14px;
    opacity: 0.9;
}

.radius-pequeno {
    border-radius: 5px;
}

.radius-medio {
    border-radius: 15px;
}

.radius-grande {
    border-radius: 25px;
}

.radius-circular {
    border-radius: 50%;
    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* Footer */
.footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 20px;
}

/* Responsividade */
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
    
    .box-sizing-demo {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .bordas-container {
        grid-template-columns: 1fr;
    }
    
    .radius-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Animações */
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

/* Estilos especiais */
.card::before {
    content: "📦";
    font-size: 24px;
    display: block;
    text-align: center;
    margin-bottom: 10px;
}

.borda-item::before {
    content: "🔲";
    font-size: 20px;
    display: block;
    margin-bottom: 10px;
}

.radius-item::before {
    content: "⭕";
    font-size: 24px;
    display: block;
    margin-bottom: 10px;
}
```

### 🎯 **Desafio Extra:**
- Experimente diferentes valores de padding e margin
- Teste o DevTools para ver o Box Model em ação
- Crie um layout responsivo usando apenas Box Model
- Adicione animações baseadas em padding/margin

---

## 📚 Próximos Passos:
- ✅ Aula 4: Layout e Posicionamento
- ✅ Aula 5: Flexbox
- ✅ Aula 6: CSS Grid

---

## 💡 Dicas Importantes:
- **📦 Sempre** use `box-sizing: border-box` no início do projeto
- **📏 Teste** diferentes valores de padding e margin
- **🔍 Use** o DevTools para inspecionar o Box Model
- **📱 Considere** como o Box Model afeta a responsividade
- **🎯 Mantenha** consistência nos espaçamentos