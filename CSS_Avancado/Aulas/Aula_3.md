# 🎓 CSS Avançado – Aula 3
## 🔹 Tema: Responsividade Avançada com Media Queries + Grid

### 📖 Conceito

Você já aprendeu a usar Grid para montar estruturas. Agora vamos adaptar essas estruturas para cada tipo de tela, alterando:

- **Número de colunas** conforme o espaço disponível
- **Posição dos elementos** para melhor usabilidade
- **Tamanho e alinhamento** otimizados para cada dispositivo
- **Ordem visual** quando necessário para melhor experiência

---

## ✅ 1. Mobile First: Abordagem Moderna

### 🎯 Conceito Mobile First

Comece seu CSS pensando no layout de **celular**, e vá "aumentando" com Media Queries para tablets e desktops. Esta abordagem garante:

- **Performance melhor** (carrega menos CSS inicialmente)
- **Experiência otimizada** para mobile (maioria dos usuários)
- **Código mais limpo** e organizado
- **Manutenção mais fácil**

### 💻 Exemplo Prático

```css
/* ===================================
   ESTILOS BASE (MOBILE FIRST)
   =================================== */
.grid {
  display: grid;
  grid-template-columns: 1fr;        /* 1 coluna no mobile */
  gap: 1rem;
  padding: 1rem;
}

.card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* ===================================
   TABLET (600px em diante)
   =================================== */
@media (min-width: 600px) {
  .grid {
    grid-template-columns: 1fr 1fr;  /* 2 colunas no tablet */
    gap: 1.5rem;
    padding: 1.5rem;
  }
  
  .card {
    padding: 2rem;
  }
}

/* ===================================
   DESKTOP (1024px em diante)
   =================================== */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr); /* 3 colunas no desktop */
    gap: 2rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .card {
    padding: 2.5rem;
  }
}

/* ===================================
   DESKTOP GRANDE (1440px em diante)
   =================================== */
@media (min-width: 1440px) {
  .grid {
    grid-template-columns: repeat(4, 1fr); /* 4 colunas em telas grandes */
  }
}
```

---

## ✅ 2. Auto-fit e Minmax: Responsividade Automática

### 🎯 Conceito

O `auto-fit` e `minmax()` permitem criar layouts **totalmente responsivos** sem precisar de media queries para ajustar o número de colunas.

### 💡 Como Funciona

```css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}
```

**Explicação:**
- `auto-fit`: Cria quantas colunas couberem
- `minmax(250px, 1fr)`: Mínimo 250px, máximo 1fr
- **Resultado:** Layout que se adapta automaticamente!

### 🎨 Exemplo Prático com Cards

```html
<div class="gallery">
  <div class="gallery-item">Card 1</div>
  <div class="gallery-item">Card 2</div>
  <div class="gallery-item">Card 3</div>
  <div class="gallery-item">Card 4</div>
  <div class="gallery-item">Card 5</div>
  <div class="gallery-item">Card 6</div>
</div>
```

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
}

.gallery-item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
}
```

### 🔄 Auto-fit vs Auto-fill

| **Auto-fit** | **Auto-fill** |
|--------------|---------------|
| Remove colunas vazias | Mantém colunas vazias |
| Melhor para conteúdo dinâmico | Melhor para layouts fixos |
| Mais flexível | Mais previsível |

```css
/* Auto-fit - remove colunas vazias */
.grid-auto-fit {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

/* Auto-fill - mantém colunas vazias */
.grid-auto-fill {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

---

## ✅ 3. Reorganizando Áreas com Grid + Media Queries

### 🏗️ Layout Responsivo Completo

Você pode redefinir a `grid-template-areas` em cada ponto de quebra para reorganizar completamente o layout:

```html
<div class="layout">
  <header class="layout__header">Header</header>
  <nav class="layout__nav">Menu</nav>
  <main class="layout__main">Conteúdo</main>
  <aside class="layout__aside">Anúncios</aside>
  <footer class="layout__footer">Rodapé</footer>
</div>
```

### 📱 CSS Responsivo

```css
/* ===================================
   MOBILE FIRST (padrão)
   =================================== */
.layout {
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "nav"
    "aside"
    "footer";
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
  min-height: 100vh;
}

/* ===================================
   TABLET (768px em diante)
   =================================== */
@media (min-width: 768px) {
  .layout {
    grid-template-areas:
      "header header"
      "nav main"
      "aside footer";
    grid-template-columns: 200px 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
  }
}

/* ===================================
   DESKTOP (1024px em diante)
   =================================== */
@media (min-width: 1024px) {
  .layout {
    grid-template-areas:
      "header header header"
      "nav main aside"
      "footer footer footer";
    grid-template-columns: 250px 1fr 200px;
    gap: 2rem;
    padding: 2rem;
    max-width: 1400px;
    margin: 0 auto;
  }
}

/* ===================================
   ÁREAS DO GRID
   =================================== */
.layout__header { grid-area: header; }
.layout__nav { grid-area: nav; }
.layout__main { grid-area: main; }
.layout__aside { grid-area: aside; }
.layout__footer { grid-area: footer; }
```

### 🎨 Estilos dos Componentes

```css
/* Estilos base */
.layout__header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}

.layout__nav {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.layout__main {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.layout__aside {
  background-color: #fff3cd;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #ffeaa7;
}

.layout__footer {
  background-color: #343a40;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}
```

---

## ✅ 4. Breakpoints Modernos

### 📱 Breakpoints Recomendados

```css
/* ===================================
   BREAKPOINTS MODERNOS
   =================================== */

/* Mobile pequeno */
@media (max-width: 480px) {
  /* Ajustes específicos para mobile pequeno */
}

/* Mobile */
@media (min-width: 481px) and (max-width: 767px) {
  /* Ajustes para mobile */
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  /* Ajustes para tablet */
}

/* Desktop pequeno */
@media (min-width: 1024px) and (max-width: 1439px) {
  /* Ajustes para desktop */
}

/* Desktop grande */
@media (min-width: 1440px) {
  /* Ajustes para telas grandes */
}
```

### 🎯 Abordagem Simplificada

```css
/* ===================================
   ABORDAGEM SIMPLIFICADA
   =================================== */

/* Mobile First (padrão) */
.container {
  padding: 1rem;
  max-width: 100%;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 1.5rem;
    max-width: 90%;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

---

## ✅ 5. Técnicas Avançadas

### 🎛️ Controle de Visibilidade

```css
/* Elementos que aparecem apenas em desktop */
.desktop-only {
  display: none;
}

@media (min-width: 1024px) {
  .desktop-only {
    display: block;
  }
}

/* Elementos que aparecem apenas em mobile */
.mobile-only {
  display: block;
}

@media (min-width: 768px) {
  .mobile-only {
    display: none;
  }
}
```

### 📐 Ajustes de Tamanho

```css
/* Tipografia responsiva */
.title {
  font-size: 1.5rem; /* Mobile */
}

@media (min-width: 768px) {
  .title {
    font-size: 2rem; /* Tablet */
  }
}

@media (min-width: 1024px) {
  .title {
    font-size: 2.5rem; /* Desktop */
  }
}

/* Espaçamentos responsivos */
.section {
  padding: 2rem 1rem; /* Mobile */
}

@media (min-width: 768px) {
  .section {
    padding: 3rem 2rem; /* Tablet */
  }
}

@media (min-width: 1024px) {
  .section {
    padding: 4rem 3rem; /* Desktop */
  }
}
```

---

## ✅ 6. Hero Section Responsiva

### 🎨 Exemplo de Hero Section

```html
<section class="hero">
  <div class="hero__container">
    <div class="hero__content">
      <h1 class="hero__title">Título Principal</h1>
      <p class="hero__description">Descrição do produto ou serviço</p>
      <button class="hero__button">Saiba Mais</button>
    </div>
    <div class="hero__image">
      <img src="hero-image.jpg" alt="Imagem hero">
    </div>
  </div>
</section>
```

### 📱 CSS Responsivo para Hero

```css
/* ===================================
   HERO SECTION RESPONSIVA
   =================================== */

.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem 1rem;
}

.hero__container {
  max-width: 1200px;
  margin: 0 auto;
}

.hero__content {
  text-align: center;
  margin-bottom: 2rem;
}

.hero__title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero__description {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero__button {
  background: white;
  color: #667eea;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.hero__image {
  text-align: center;
}

.hero__image img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
}

/* ===================================
   TABLET (768px em diante)
   =================================== */
@media (min-width: 768px) {
  .hero {
    padding: 3rem 2rem;
  }
  
  .hero__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
  }
  
  .hero__content {
    text-align: left;
    margin-bottom: 0;
  }
  
  .hero__title {
    font-size: 2.5rem;
  }
}

/* ===================================
   DESKTOP (1024px em diante)
   =================================== */
@media (min-width: 1024px) {
  .hero {
    padding: 4rem 3rem;
  }
  
  .hero__title {
    font-size: 3rem;
  }
  
  .hero__description {
    font-size: 1.25rem;
  }
}
```

---

## 🧪 Exercício 3 – Layout Responsivo Completo

### 📋 Desafio: Transformar Grid em Layout Responsivo

Pegue o layout da Aula 2 e adapte com responsividade completa:

### 🎯 Requisitos:

1. **Mobile (1 coluna)**: Layout vertical, elementos empilhados
2. **Tablet (2 colunas)**: Sidebar + Main, Ads em linha
3. **Desktop (3 colunas)**: Layout completo com sidebar, main e ads
4. **Auto-fit e minmax**: Para cards internos
5. **Hero section responsiva**: Com reorganização de conteúdo

### 💻 Código Base para o Exercício

```html
<div class="dashboard">
  <header class="dashboard__header">
    <h1>Dashboard Responsivo</h1>
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
    <section class="hero">
      <div class="hero__content">
        <h2>Bem-vindo ao Dashboard</h2>
        <p>Gerencie seus dados de forma eficiente</p>
      </div>
      <div class="hero__image">
        <img src="dashboard-image.jpg" alt="Dashboard">
      </div>
    </section>
    
    <div class="dashboard__cards">
      <div class="card">Card 1</div>
      <div class="card">Card 2</div>
      <div class="card">Card 3</div>
      <div class="card">Card 4</div>
    </div>
  </main>
  
  <aside class="dashboard__ads">
    <div class="ad">Anúncio 1</div>
    <div class="ad">Anúncio 2</div>
  </aside>
  
  <footer class="dashboard__footer">
    <p>&copy; 2025 Dashboard. Todos os direitos reservados.</p>
  </footer>
</div>
```

### 🎨 CSS Responsivo Completo

```css
/* ===================================
   MOBILE FIRST
   =================================== */
.dashboard {
  display: grid;
  grid-template-areas:
    "header"
    "sidebar"
    "main"
    "ads"
    "footer";
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
  min-height: 100vh;
}

/* ===================================
   TABLET (768px em diante)
   =================================== */
@media (min-width: 768px) {
  .dashboard {
    grid-template-areas:
      "header header"
      "sidebar main"
      "ads ads"
      "footer footer";
    grid-template-columns: 250px 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
  }
}

/* ===================================
   DESKTOP (1024px em diante)
   =================================== */
@media (min-width: 1024px) {
  .dashboard {
    grid-template-areas:
      "header header header"
      "sidebar main ads"
      "footer footer footer";
    grid-template-columns: 250px 1fr 200px;
    gap: 2rem;
    padding: 2rem;
    max-width: 1400px;
    margin: 0 auto;
  }
}

/* ===================================
   HERO SECTION RESPONSIVA
   =================================== */
.hero {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .hero {
    flex-direction: row;
    align-items: center;
  }
}

/* ===================================
   CARDS RESPONSIVOS
   =================================== */
.dashboard__cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

@media (min-width: 768px) {
  .dashboard__cards {
    gap: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .dashboard__cards {
    gap: 2rem;
  }
}
```

### 📊 Checklist de Verificação

- [ ] Layout mobile-first implementado
- [ ] Media queries para tablet e desktop
- [ ] Auto-fit e minmax nos cards
- [ ] Hero section responsiva
- [ ] Grid areas reorganizadas
- [ ] Tipografia responsiva
- [ ] Espaçamentos adaptativos
- [ ] Testado em diferentes dispositivos

---

## 📚 Recursos Adicionais

- **CSS Grid Responsive:** https://css-tricks.com/snippets/css/complete-guide-grid/
- **Responsive Design:** https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design
- **CSS Container Queries:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries

---

*Próxima aula: Flexbox - Alinhamento e Distribuição*