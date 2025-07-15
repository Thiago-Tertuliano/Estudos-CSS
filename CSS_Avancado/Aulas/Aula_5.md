# 🎓 CSS Avançado – Aula 5
## 🔹 Tema: Animações e Transições com CSS

### 📖 Conceito

Animações CSS são **ferramentas poderosas** para criar experiências interativas e envolventes. Elas podem:

- **Melhorar a UX** com feedback visual
- **Guiar a atenção** do usuário
- **Criar micro-interações** que tornam a interface mais viva
- **Reduzir a percepção de tempo** de carregamento
- **Adicionar personalidade** ao design

---

## ✅ 1. Transitions - Animações Simples

### 🎯 Conceito Básico

`transition` anima a mudança entre dois estados de um elemento:

```css
/* ===================================
   TRANSITION BÁSICA
   =================================== */
.elemento {
  background-color: #0066cc;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.elemento:hover {
  background-color: #004999;
}
```

### 🎨 Propriedades de Transition

```css
/* ===================================
   PROPRIEDADES DE TRANSITION
   =================================== */

/* Sintaxe completa */
transition: propriedade duração timing-function delay;

/* Exemplos práticos */
.botao {
  /* Apenas background-color */
  transition: background-color 0.3s ease;
  
  /* Múltiplas propriedades */
  transition: background-color 0.3s ease, transform 0.2s ease;
  
  /* Todas as propriedades */
transition: all 0.3s ease;
  
  /* Com delay */
  transition: all 0.3s ease 0.1s;
}
```

### ⚡ Timing Functions

```css
/* ===================================
   TIMING FUNCTIONS
   =================================== */

.elemento-linear {
  transition: all 0.3s linear;
}

.elemento-ease {
  transition: all 0.3s ease;
}

.elemento-ease-in {
  transition: all 0.3s ease-in;
}

.elemento-ease-out {
  transition: all 0.3s ease-out;
}

.elemento-ease-in-out {
  transition: all 0.3s ease-in-out;
}

.elemento-cubic-bezier {
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### 🎯 Exemplos Práticos de Transitions

```css
/* ===================================
   BOTÕES INTERATIVOS
   =================================== */
.btn {
  background-color: #667eea;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn:hover {
  background-color: #5a6fd8;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.3);
}

/* ===================================
   CARDS COM HOVER
   =================================== */
.card {
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  border-color: #667eea;
}

/* ===================================
   LINKS COM UNDERLINE
   =================================== */
.link {
  color: #667eea;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}

.link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #667eea;
  transition: width 0.3s ease;
}

.link:hover {
  color: #5a6fd8;
}

.link:hover::after {
  width: 100%;
}
```

---

## ✅ 2. @keyframes - Animações Complexas

### 🎯 Conceito Avançado

`@keyframes` permite criar animações com **múltiplos estágios** e **controle total**:

```css
/* ===================================
   ANIMAÇÃO BÁSICA
   =================================== */
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

.fade-in {
  animation: fadeIn 1s ease-out forwards;
}
```

### 🎨 Animações com Múltiplos Estágios

```css
/* ===================================
   ANIMAÇÃO COM PERCENTUAIS
   =================================== */
@keyframes slideInFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  50% {
    opacity: 0.5;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-in {
  animation: slideInFromLeft 1.2s ease-out forwards;
}

/* ===================================
   ANIMAÇÃO DE PULSO
   =================================== */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.pulse {
  animation: pulse 2s ease-in-out infinite;
}

/* ===================================
   ANIMAÇÃO DE ROTAÇÃO
   =================================== */
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.rotate {
  animation: rotate 2s linear infinite;
}
```

### 🎯 Propriedades de Animation

```css
/* ===================================
   PROPRIEDADES DE ANIMATION
   =================================== */

/* Sintaxe completa */
animation: nome duração timing-function delay iteration-count direction fill-mode;

/* Exemplos práticos */
.elemento {
  /* Básico */
  animation: fadeIn 1s ease;
  
  /* Com delay */
  animation: fadeIn 1s ease 0.5s;
  
  /* Infinito */
  animation: pulse 2s ease-in-out infinite;
  
  /* Alternando direção */
  animation: slideIn 1s ease-in-out infinite alternate;
  
  /* Mantendo estado final */
  animation: fadeIn 1s ease forwards;
}
```

### 🎨 Animações Avançadas

```css
/* ===================================
   ANIMAÇÃO DE TIPO
   =================================== */
@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.typewriter {
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #667eea;
  animation: typewriter 3s steps(40) forwards;
}

/* ===================================
   ANIMAÇÃO DE BOUNCE
   =================================== */
@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translateY(0);
  }
  40%, 43% {
    transform: translateY(-30px);
  }
  70% {
    transform: translateY(-15px);
  }
  90% {
    transform: translateY(-4px);
  }
}

.bounce {
  animation: bounce 1s ease-in-out;
}

/* ===================================
   ANIMAÇÃO DE SHAKE
   =================================== */
@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-10px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(10px);
  }
}

.shake {
  animation: shake 0.8s ease-in-out;
}
```

---

## ✅ 3. Loaders e Indicadores

### 🎯 Loader Circular

```css
/* ===================================
   LOADER CIRCULAR
   =================================== */
.loader {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* ===================================
   LOADER DE PONTOS
   =================================== */
.loader-dots {
  display: flex;
  gap: 8px;
  justify-content: center;
}

.loader-dots .dot {
  width: 12px;
  height: 12px;
  background-color: #667eea;
  border-radius: 50%;
  animation: dotPulse 1.4s ease-in-out infinite both;
}

.loader-dots .dot:nth-child(1) {
  animation-delay: -0.32s;
}

.loader-dots .dot:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes dotPulse {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
```

### 🎨 Loaders Avançados

```css
/* ===================================
   LOADER DE BARRAS
   =================================== */
.loader-bars {
  display: flex;
  gap: 4px;
  justify-content: center;
}

.loader-bars .bar {
  width: 4px;
  height: 20px;
  background-color: #667eea;
  animation: barGrow 1.2s ease-in-out infinite;
}

.loader-bars .bar:nth-child(1) { animation-delay: -1.2s; }
.loader-bars .bar:nth-child(2) { animation-delay: -1.1s; }
.loader-bars .bar:nth-child(3) { animation-delay: -1.0s; }
.loader-bars .bar:nth-child(4) { animation-delay: -0.9s; }
.loader-bars .bar:nth-child(5) { animation-delay: -0.8s; }

@keyframes barGrow {
  0%, 40%, 100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
}

/* ===================================
   LOADER DE PULSO
   =================================== */
.loader-pulse {
  width: 40px;
  height: 40px;
  background-color: #667eea;
  border-radius: 50%;
  animation: pulse 1.2s ease-in-out infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
```

---

## ✅ 4. Animações de Entrada

### 🎯 Fade In Sequencial

```css
/* ===================================
   FADE IN SEQUENCIAL
   =================================== */
.fade-in-item {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease forwards;
}

.fade-in-item:nth-child(1) { animation-delay: 0.1s; }
.fade-in-item:nth-child(2) { animation-delay: 0.2s; }
.fade-in-item:nth-child(3) { animation-delay: 0.3s; }
.fade-in-item:nth-child(4) { animation-delay: 0.4s; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### 🎨 Animações de Slide

```css
/* ===================================
   SLIDE IN FROM LEFT
   =================================== */
.slide-in-left {
  opacity: 0;
  transform: translateX(-100px);
  animation: slideInLeft 0.8s ease forwards;
}

@keyframes slideInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* ===================================
   SLIDE IN FROM RIGHT
   =================================== */
.slide-in-right {
  opacity: 0;
  transform: translateX(100px);
  animation: slideInRight 0.8s ease forwards;
}

@keyframes slideInRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* ===================================
   ZOOM IN
   =================================== */
.zoom-in {
  opacity: 0;
  transform: scale(0.8);
  animation: zoomIn 0.6s ease forwards;
}

@keyframes zoomIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

---

## ✅ 5. Animações de Hover Avançadas

### 🎯 Efeitos de Hover

```css
/* ===================================
   HOVER COM SCALE
   =================================== */
.hover-scale {
  transition: transform 0.3s ease;
}

.hover-scale:hover {
  transform: scale(1.05);
}

/* ===================================
   HOVER COM ROTATION
   =================================== */
.hover-rotate {
  transition: transform 0.3s ease;
}

.hover-rotate:hover {
  transform: rotate(5deg);
}

/* ===================================
   HOVER COM GLOW
   =================================== */
.hover-glow {
  transition: all 0.3s ease;
}

.hover-glow:hover {
  box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
  transform: translateY(-2px);
}

/* ===================================
   HOVER COM BORDER ANIMATION
   =================================== */
.hover-border {
  position: relative;
  overflow: hidden;
}

.hover-border::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background-color: #667eea;
  transition: left 0.3s ease;
}

.hover-border:hover::before {
  left: 0;
}
```

---

## ✅ 6. Animações com JavaScript

### 🎯 Intersection Observer

```javascript
// ===================================
// ANIMAÇÃO AO ENTRAR NA VIEWPORT
// ===================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

// Observar elementos
document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
```

### 🎨 CSS para Animações JavaScript

```css
/* ===================================
   ANIMAÇÕES PARA JS
   =================================== */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.animate-on-scroll.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* ===================================
   ANIMAÇÕES DIFERENTES
   =================================== */
.slide-in-left {
  opacity: 0;
  transform: translateX(-100px);
  transition: all 0.6s ease;
}

.slide-in-left.animate-in {
  opacity: 1;
  transform: translateX(0);
}

.fade-in-up {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease;
}

.fade-in-up.animate-in {
  opacity: 1;
  transform: translateY(0);
}
```

---

## ✅ 7. Performance e Boas Práticas

### 🎯 Propriedades Otimizadas

```css
/* ===================================
   PROPRIEDADES OTIMIZADAS
   =================================== */

/* ✅ BOM - GPU acelerado */
.elemento-otimizado {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* ❌ EVITAR - Reflow */
.elemento-lento {
  transition: width 0.3s ease, height 0.3s ease;
}
```

### 🎨 Reduzir Motion

```css
/* ===================================
   RESPETAR PREFERÊNCIAS
   =================================== */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 🎯 Will-change

```css
/* ===================================
   WILL-CHANGE
   =================================== */
.elemento-animado {
  will-change: transform, opacity;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
```

---

## 🧪 Exercício 5 – Animações Avançadas

### 📋 Desafio: Criar Interface Animada

Crie uma página com múltiplas animações seguindo estes requisitos:

### 🎯 Requisitos:

1. **Transitions nos botões**: Hover com scale e glow
2. **Animações de entrada**: Fade in sequencial para cards
3. **Loader animado**: Spinner ou dots loader
4. **Animações de scroll**: Elementos aparecem ao entrar na viewport
5. **Micro-interações**: Hover effects em cards e links

### 💻 Código Base

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animações CSS</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Loader -->
    <div class="loader-container">
        <div class="loader"></div>
    </div>
    
    <!-- Header -->
    <header class="header">
        <h1 class="header__title">Animações CSS</h1>
        <nav class="nav">
            <a href="#" class="nav__link">Início</a>
            <a href="#" class="nav__link">Sobre</a>
            <a href="#" class="nav__link">Contato</a>
        </nav>
    </header>
    
    <!-- Hero -->
    <section class="hero">
        <h2 class="hero__title">Bem-vindo às Animações</h2>
        <p class="hero__description">Explore o poder das animações CSS</p>
        <button class="btn btn--primary">Começar</button>
    </section>
    
    <!-- Cards -->
    <section class="cards">
        <div class="card animate-on-scroll">
            <h3>Card 1</h3>
            <p>Descrição do card</p>
        </div>
        <div class="card animate-on-scroll">
            <h3>Card 2</h3>
            <p>Descrição do card</p>
        </div>
        <div class="card animate-on-scroll">
            <h3>Card 3</h3>
            <p>Descrição do card</p>
        </div>
    </section>
</body>
</html>
```

### 🎨 CSS com Animações

```css
/* ===================================
   VARIÁVEIS CSS
   =================================== */
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --text-color: #333;
  --bg-color: #fff;
  --transition: all 0.3s ease;
}

/* ===================================
   LOADER
   =================================== */
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeOut 0.5s ease 2s forwards;
}

.loader {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes fadeOut {
  to {
    opacity: 0;
    visibility: hidden;
  }
}

/* ===================================
   HEADER
   =================================== */
.header {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__title {
  animation: slideInLeft 0.8s ease;
}

.nav__link {
  color: white;
  text-decoration: none;
  margin-left: 2rem;
  transition: var(--transition);
  position: relative;
}

.nav__link:hover {
  transform: translateY(-2px);
}

.nav__link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: white;
  transition: width 0.3s ease;
}

.nav__link:hover::after {
  width: 100%;
}

/* ===================================
   HERO
   =================================== */
.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
}

.hero__title {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: fadeInUp 1s ease 0.5s both;
}

.hero__description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  animation: fadeInUp 1s ease 0.7s both;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: var(--transition);
  font-size: 1rem;
  font-weight: 500;
}

.btn--primary {
  background-color: white;
  color: var(--primary-color);
  animation: fadeInUp 1s ease 0.9s both;
}

.btn--primary:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

/* ===================================
   CARDS
   =================================== */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
  opacity: 0;
  transform: translateY(30px);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
}

.card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* ===================================
   ANIMAÇÕES
   =================================== */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* ===================================
   RESPONSIVIDADE
   =================================== */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav__link {
    margin-left: 1rem;
  }
  
  .hero__title {
    font-size: 2rem;
  }
  
  .cards {
    grid-template-columns: 1fr;
    padding: 2rem 1rem;
  }
}
```

### 💻 JavaScript para Scroll Animations

```javascript
// ===================================
// INTERSECTION OBSERVER
// ===================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

// Observar elementos
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
});
```

### 📊 Checklist de Verificação

- [ ] Loader animado implementado
- [ ] Transitions nos botões funcionando
- [ ] Animações de entrada sequenciais
- [ ] Hover effects nos cards
- [ ] Animações de scroll funcionando
- [ ] Performance otimizada
- [ ] Acessibilidade respeitada
- [ ] Responsividade mantida

---

## 📚 Recursos Adicionais

- **CSS Animations:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations
- **CSS Transitions:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions
- **Animation Performance:** https://web.dev/animations-guide/
- **Reduced Motion:** https://web.dev/prefers-reduced-motion/

---

*Próxima aula: CSS Grid Layout Avançado*
