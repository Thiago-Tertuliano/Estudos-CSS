# 🎓 CSS Avançado – Aula 2
## 🔹 Tema: Grid Layout – Criando Estruturas em Grade

### 🧠 O que é CSS Grid?

CSS Grid é um sistema de layout **bidimensional** (linhas e colunas) que permite criar layouts complexos e responsivos com muito menos código do que métodos tradicionais. É especialmente poderoso para:

- **Layouts de página** completos
- **Sistemas de cards** responsivos
- **Dashboards** e painéis administrativos
- **Galeria de imagens** com tamanhos variados
- **Formulários** complexos

---

## ✅ 1. Ativando o Grid

### 🎯 Conceito Básico

Para usar CSS Grid, você precisa definir um **container** como grid:

```css
.container {
  display: grid;
}
```

### 📐 Definindo Colunas e Linhas

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3 colunas iguais */
  grid-template-rows: auto auto;       /* 2 linhas automáticas */
  gap: 20px;                          /* Espaçamento entre itens */
}
```

---

## ✅ 2. Unidades do Grid

### 📊 Tabela de Unidades Comuns

| Unidade | Descrição | Exemplo |
|---------|-----------|---------|
| `px` | Tamanho fixo em pixels | `200px` |
| `%` | Porcentagem do container | `50%` |
| `fr` | Fração do espaço disponível | `1fr` |
| `auto` | Ajusta ao conteúdo | `auto` |
| `minmax()` | Define mínimo e máximo | `minmax(200px, 1fr)` |
| `repeat()` | Repete padrão | `repeat(3, 1fr)` |

### 💡 Unidade `fr` (Fractional Unit)

A unidade `fr` é específica do Grid e representa uma fração do espaço disponível:

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* 1/4, 2/4, 1/4 do espaço */
}
```

---

## ✅ 3. Exemplo Prático Básico

### 🎨 Layout de Cards

```html
<div class="grid-cards">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
  <div class="card">Card 5</div>
  <div class="card">Card 6</div>
</div>
```

```css
.grid-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas iguais */
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
}
```

---

## ✅ 4. Grid Areas - Layouts Complexos

### 🏗️ Sistema de Áreas Nomeadas

Grid Areas permite criar layouts complexos nomeando áreas específicas:

```css
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main ads"
    "footer footer footer";
  grid-template-columns: 250px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  gap: 20px;
  padding: 20px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.ads { grid-area: ads; }
.footer { grid-area: footer; }
```

### 📱 Exemplo HTML Completo

```html
<div class="layout">
  <header class="header">
    <h1>Meu Site</h1>
    <nav>
      <a href="#home">Home</a>
      <a href="#about">Sobre</a>
      <a href="#contact">Contato</a>
    </nav>
  </header>
  
  <aside class="sidebar">
    <h3>Menu Lateral</h3>
    <ul>
      <li><a href="#item1">Item 1</a></li>
      <li><a href="#item2">Item 2</a></li>
      <li><a href="#item3">Item 3</a></li>
    </ul>
  </aside>
  
  <main class="main">
    <h2>Conteúdo Principal</h2>
    <p>Este é o conteúdo principal da página...</p>
  </main>
  
  <aside class="ads">
    <h3>Anúncios</h3>
    <div class="ad">Anúncio 1</div>
    <div class="ad">Anúncio 2</div>
  </aside>
  
  <footer class="footer">
    <p>&copy; 2025 Meu Site. Todos os direitos reservados.</p>
  </footer>
</div>
```

### 🎨 Estilos para o Layout

```css
/* Estilos base */
.layout {
  font-family: 'Arial', sans-serif;
}

.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebar {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.main {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.ads {
  background-color: #fff3cd;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #ffeaa7;
}

.footer {
  background-color: #343a40;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}
```

---

## ✅ 5. Responsividade com Grid

### 📱 Grid Responsivo Automático

```css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}
```

**Como funciona:**
- `auto-fit`: Cria quantas colunas couberem
- `minmax(300px, 1fr)`: Mínimo 300px, máximo 1fr
- **Resultado:** Layout que se adapta automaticamente!

### 🎯 Exemplo Prático Responsivo

```html
<div class="gallery">
  <div class="gallery-item">Item 1</div>
  <div class="gallery-item">Item 2</div>
  <div class="gallery-item">Item 3</div>
  <div class="gallery-item">Item 4</div>
  <div class="gallery-item">Item 5</div>
  <div class="gallery-item">Item 6</div>
</div>
```

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.gallery-item {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: white;
  padding: 2rem;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
}
```

---

## ✅ 6. Propriedades Avançadas

### 🎛️ Controle de Posicionamento

```css
.grid-item {
  /* Posicionamento manual */
  grid-column: 1 / 3;    /* Da linha 1 à 3 */
  grid-row: 2 / 4;       /* Da linha 2 à 4 */
  
  /* Ou usando span */
  grid-column: span 2;    /* Ocupa 2 colunas */
  grid-row: span 2;       /* Ocupa 2 linhas */
}
```

### 📐 Alinhamento de Itens

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
  /* Alinhamento horizontal */
  justify-items: center;    /* start | center | end | stretch */
  
  /* Alinhamento vertical */
  align-items: center;      /* start | center | end | stretch */
  
  /* Alinhamento do conteúdo */
  justify-content: center;  /* start | center | end | space-around | space-between */
  align-content: center;    /* start | center | end | space-around | space-between */
}
```

---

## ✅ 7. Grid vs Flexbox

### 🤔 Quando usar cada um?

| **CSS Grid** | **Flexbox** |
|--------------|-------------|
| Layouts **bidimensionais** | Layouts **unidimensionais** |
| Layouts de **página completa** | Componentes **menores** |
| **Sistemas de cards** | **Navegações** |
| **Dashboards** | **Botões** |
| **Galeria de imagens** | **Listas** |

### 💡 Regra Geral
- **Grid** para layouts de página
- **Flexbox** para componentes

---

## 🧪 Exercício 2 – Layout Completo com Grid

### 📋 Desafio: Criar um Dashboard

Crie um layout de dashboard com a seguinte estrutura:

```
+----------------------+
|       Header         |
+----+------------+----+
|Nav |   Main     |Ads |
+----+------------+----+
|       Footer         |
+----------------------+
```

### 🎯 Requisitos:

1. **Header** - Altura fixa, largura total
2. **Sidebar** - Largura fixa, altura flexível
3. **Main** - Área principal, flexível
4. **Ads** - Largura fixa, altura flexível
5. **Footer** - Altura fixa, largura total

### 💻 Código Base

```html
<div class="dashboard">
  <header class="dashboard__header">
    <h1>Dashboard</h1>
    <nav>
      <a href="#home">Home</a>
      <a href="#dashboard">Dashboard</a>
      <a href="#settings">Configurações</a>
    </nav>
  </header>
  
  <aside class="dashboard__sidebar">
    <h3>Menu</h3>
    <ul>
      <li><a href="#analytics">Analytics</a></li>
      <li><a href="#users">Usuários</a></li>
      <li><a href="#reports">Relatórios</a></li>
    </ul>
  </aside>
  
  <main class="dashboard__main">
    <h2>Conteúdo Principal</h2>
    <div class="dashboard__cards">
      <div class="card">Card 1</div>
      <div class="card">Card 2</div>
      <div class="card">Card 3</div>
      <div class="card">Card 4</div>
    </div>
  </main>
  
  <aside class="dashboard__ads">
    <h3>Anúncios</h3>
    <div class="ad">Anúncio 1</div>
    <div class="ad">Anúncio 2</div>
  </aside>
  
  <footer class="dashboard__footer">
    <p>&copy; 2025 Dashboard. Todos os direitos reservados.</p>
  </footer>
</div>
```

### 🎨 CSS para o Dashboard

```css
/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #f8f9fa;
}

/* Layout principal */
.dashboard {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main ads"
    "footer footer footer";
  grid-template-columns: 250px 1fr 200px;
  grid-template-rows: 80px 1fr 60px;
  min-height: 100vh;
  gap: 20px;
  padding: 20px;
}

/* Áreas do grid */
.dashboard__header { grid-area: header; }
.dashboard__sidebar { grid-area: sidebar; }
.dashboard__main { grid-area: main; }
.dashboard__ads { grid-area: ads; }
.dashboard__footer { grid-area: footer; }

/* Estilos dos componentes */
.dashboard__header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dashboard__sidebar {
  background-color: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.dashboard__main {
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.dashboard__ads {
  background-color: #fff3cd;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #ffeaa7;
}

.dashboard__footer {
  background-color: #343a40;
  color: white;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
}

/* Cards responsivos */
.dashboard__cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 2rem;
}

.card {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: white;
  padding: 2rem;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
}

/* Responsividade */
@media (max-width: 768px) {
  .dashboard {
    grid-template-areas:
      "header"
      "sidebar"
      "main"
      "ads"
      "footer";
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr auto auto;
  }
}
```

### 📊 Checklist de Verificação

- [ ] Layout criado com Grid Areas
- [ ] Responsividade implementada
- [ ] Cards responsivos dentro do main
- [ ] Estilos modernos aplicados
- [ ] Hover effects nos cards
- [ ] Layout funcional em mobile

---

## 📚 Recursos Adicionais

- **CSS Grid Guide:** https://css-tricks.com/snippets/css/complete-guide-grid/
- **Grid by Example:** https://gridbyexample.com/
- **CSS Grid Layout:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout

---

*Próxima aula: Flexbox - Alinhamento e Distribuição*
