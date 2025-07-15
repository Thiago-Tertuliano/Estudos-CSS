# 🎓 CSS Avançado – Aula 4
## 🔹 Tema: Dark Mode com CSS Puro

### 📖 Conceito

Dark Mode (Modo Escuro) não é apenas uma tendência visual, mas uma **necessidade de acessibilidade** e **experiência do usuário**. Implementar dark mode corretamente pode:

- **Reduzir fadiga visual** em ambientes com pouca luz
- **Economizar bateria** em dispositivos OLED
- **Melhorar a acessibilidade** para usuários com sensibilidade à luz
- **Respeitar as preferências** do sistema do usuário

---

## ✅ 1. Dark Mode Automático (Sistema)

### 🎯 Detecção Automática do Sistema

O CSS pode detectar automaticamente se o sistema do usuário está em modo escuro usando `prefers-color-scheme`:

```css
/* ===================================
   TEMA CLARO (padrão)
   =================================== */
body {
  background-color: #ffffff;
  color: #222222;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* ===================================
   TEMA ESCURO (sistema)
   =================================== */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #111111;
    color: #f0f0f0;
  }
}
```

### 💡 Como Funciona

- **`prefers-color-scheme: light`**: Sistema em modo claro
- **`prefers-color-scheme: dark`**: Sistema em modo escuro
- **Suporte nativo** em Windows, macOS, Android, iOS
- **Transições suaves** entre os temas

---

## ✅ 2. CSS Custom Properties (Variáveis)

### 🎨 Sistema de Variáveis para Temas

A melhor prática é usar **CSS Custom Properties** para gerenciar temas:

```css
/* ===================================
   VARIÁVEIS CSS - TEMA CLARO
   =================================== */
:root {
  /* Cores de fundo */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-card: #ffffff;
  --bg-header: #667eea;
  
  /* Cores de texto */
  --text-primary: #333333;
  --text-secondary: #666666;
  --text-light: #ffffff;
  
  /* Cores de borda */
  --border-color: #e9ecef;
  --border-focus: #667eea;
  
  /* Sombras */
  --shadow-light: 0 2px 8px rgba(0,0,0,0.1);
  --shadow-medium: 0 4px 16px rgba(0,0,0,0.1);
  
  /* Transições */
  --transition: all 0.3s ease;
}

/* ===================================
   VARIÁVEIS CSS - TEMA ESCURO
   =================================== */
@media (prefers-color-scheme: dark) {
  :root {
    /* Cores de fundo */
    --bg-primary: #1a1a1a;
    --bg-secondary: #2d2d2d;
    --bg-card: #2d2d2d;
    --bg-header: #4a5568;
    
    /* Cores de texto */
    --text-primary: #f0f0f0;
    --text-secondary: #cccccc;
    --text-light: #ffffff;
    
    /* Cores de borda */
    --border-color: #404040;
    --border-focus: #667eea;
    
    /* Sombras */
    --shadow-light: 0 2px 8px rgba(0,0,0,0.3);
    --shadow-medium: 0 4px 16px rgba(0,0,0,0.3);
  }
}
```

### 🎯 Aplicação das Variáveis

```css
/* ===================================
   APLICAÇÃO DAS VARIÁVEIS
   =================================== */
body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: var(--transition);
}

.card {
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-light);
  transition: var(--transition);
}

.header {
  background-color: var(--bg-header);
  color: var(--text-light);
}

.button {
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  transition: var(--transition);
}

.button:hover {
  background-color: var(--border-focus);
  color: var(--text-light);
}
```

---

## ✅ 3. Dark Mode Manual com JavaScript

### 🎛️ Controle Manual do Tema

Para permitir que o usuário controle o tema manualmente:

```html
<button id="theme-toggle" class="theme-toggle" aria-label="Alternar tema">
  <i class="fas fa-moon" id="theme-icon"></i>
  <span id="theme-text">Modo Escuro</span>
</button>
```

### 🎨 CSS para Tema Manual

```css
/* ===================================
   BOTÃO DE ALTERNÂNCIA
   =================================== */
.theme-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.75rem 1rem;
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  cursor: pointer;
  transition: var(--transition);
  font-weight: 500;
}

.theme-toggle:hover {
  background-color: var(--border-focus);
  color: var(--text-light);
}

/* ===================================
   CLASSE PARA TEMA ESCURO MANUAL
   =================================== */
body.dark-mode {
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --bg-card: #2d2d2d;
  --bg-header: #4a5568;
  --text-primary: #f0f0f0;
  --text-secondary: #cccccc;
  --border-color: #404040;
  --shadow-light: 0 2px 8px rgba(0,0,0,0.3);
  --shadow-medium: 0 4px 16px rgba(0,0,0,0.3);
}
```

### 💻 JavaScript para Controle

```javascript
// ===================================
// CONTROLE DE TEMA MANUAL
// ===================================

class ThemeManager {
  constructor() {
    this.themeToggle = document.getElementById('theme-toggle');
    this.themeIcon = document.getElementById('theme-icon');
    this.themeText = document.getElementById('theme-text');
    this.currentTheme = localStorage.getItem('theme') || 'light';
    
    this.init();
  }
  
  init() {
    // Aplicar tema salvo
    this.applyTheme(this.currentTheme);
    
    // Adicionar event listener
    this.themeToggle.addEventListener('click', () => {
      this.toggleTheme();
    });
  }
  
  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(newTheme);
  }
  
  applyTheme(theme) {
    const body = document.body;
    
    if (theme === 'dark') {
      body.classList.add('dark-mode');
      this.themeIcon.className = 'fas fa-sun';
      this.themeText.textContent = 'Modo Claro';
    } else {
      body.classList.remove('dark-mode');
      this.themeIcon.className = 'fas fa-moon';
      this.themeText.textContent = 'Modo Escuro';
    }
    
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
  }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
});
```

---

## ✅ 4. Componentes Específicos

### 🎨 Cards e Containers

```css
/* ===================================
   CARDS RESPONSIVOS
   =================================== */
.card {
  background-color: var(--bg-card);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: var(--shadow-light);
  transition: var(--transition);
}

.card:hover {
  box-shadow: var(--shadow-medium);
  transform: translateY(-2px);
}

.card__title {
  color: var(--text-primary);
  font-weight: 600;
}

.card__description {
  color: var(--text-secondary);
}

/* ===================================
   FORMULÁRIOS
   =================================== */
.form-input {
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  padding: 0.75rem;
  transition: var(--transition);
}

.form-input:focus {
  outline: none;
  border-color: var(--border-focus);
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-label {
  color: var(--text-primary);
  font-weight: 500;
}

/* ===================================
   BOTÕES
   =================================== */
.btn {
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: var(--transition);
  font-weight: 500;
}

.btn:hover {
  background-color: var(--border-focus);
  color: var(--text-light);
}

.btn--primary {
  background-color: var(--border-focus);
  color: var(--text-light);
}

.btn--primary:hover {
  background-color: #5a6fd8;
}
```

---

## ✅ 5. Técnicas Avançadas

### 🎛️ Detecção de Preferência do Sistema

```css
/* ===================================
   DETECÇÃO DE PREFERÊNCIA
   =================================== */

/* Sistema em modo claro */
@media (prefers-color-scheme: light) {
  :root {
    --system-theme: 'light';
  }
}

/* Sistema em modo escuro */
@media (prefers-color-scheme: dark) {
  :root {
    --system-theme: 'dark';
  }
}

/* Aplicar tema do sistema automaticamente */
@media (prefers-color-scheme: dark) {
  body:not(.theme-manual) {
    --bg-primary: #1a1a1a;
    --text-primary: #f0f0f0;
    /* ... outras variáveis */
  }
}
```

### 🎨 Gradientes e Imagens

```css
/* ===================================
   GRADIENTES ADAPTATIVOS
   =================================== */
.hero {
  background: linear-gradient(135deg, var(--bg-header) 0%, var(--bg-secondary) 100%);
  color: var(--text-light);
}

/* ===================================
   IMAGENS E ÍCONES
   =================================== */
.icon {
  filter: var(--icon-filter);
}

/* Filtros para ícones */
:root {
  --icon-filter: none;
}

@media (prefers-color-scheme: dark) {
  :root {
    --icon-filter: invert(1);
  }
}

body.dark-mode {
  --icon-filter: invert(1);
}
```

---

## ✅ 6. Exemplo Completo

### 🎨 Dashboard com Dark Mode

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard com Dark Mode</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="header">
    <h1>Dashboard</h1>
    <button id="theme-toggle" class="theme-toggle">
      <i class="fas fa-moon" id="theme-icon"></i>
      <span id="theme-text">Modo Escuro</span>
    </button>
  </header>
  
  <main class="main">
    <div class="card">
      <h2 class="card__title">Estatísticas</h2>
      <p class="card__description">Visualize seus dados importantes</p>
    </div>
    
    <form class="form">
      <label class="form-label">Nome:</label>
      <input type="text" class="form-input" placeholder="Digite seu nome">
      
      <button type="submit" class="btn btn--primary">Enviar</button>
    </form>
  </main>
</body>
</html>
```

### 🎨 CSS Completo

```css
/* ===================================
   VARIÁVEIS CSS
   =================================== */
:root {
  /* Tema Claro */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-card: #ffffff;
  --bg-header: #667eea;
  --text-primary: #333333;
  --text-secondary: #666666;
  --text-light: #ffffff;
  --border-color: #e9ecef;
  --border-focus: #667eea;
  --shadow-light: 0 2px 8px rgba(0,0,0,0.1);
  --shadow-medium: 0 4px 16px rgba(0,0,0,0.1);
  --transition: all 0.3s ease;
}

/* ===================================
   TEMA ESCURO (SISTEMA)
   =================================== */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #1a1a1a;
    --bg-secondary: #2d2d2d;
    --bg-card: #2d2d2d;
    --bg-header: #4a5568;
    --text-primary: #f0f0f0;
    --text-secondary: #cccccc;
    --border-color: #404040;
    --shadow-light: 0 2px 8px rgba(0,0,0,0.3);
    --shadow-medium: 0 4px 16px rgba(0,0,0,0.3);
  }
}

/* ===================================
   TEMA ESCURO (MANUAL)
   =================================== */
body.dark-mode {
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --bg-card: #2d2d2d;
  --bg-header: #4a5568;
  --text-primary: #f0f0f0;
  --text-secondary: #cccccc;
  --border-color: #404040;
  --shadow-light: 0 2px 8px rgba(0,0,0,0.3);
  --shadow-medium: 0 4px 16px rgba(0,0,0,0.3);
}

/* ===================================
   ESTILOS BASE
   =================================== */
body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: var(--transition);
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 20px;
}

.header {
  background-color: var(--bg-header);
  color: var(--text-light);
  padding: 1rem 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.theme-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.75rem 1rem;
  background-color: rgba(255,255,255,0.1);
  color: var(--text-light);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 8px;
  cursor: pointer;
  transition: var(--transition);
}

.theme-toggle:hover {
  background-color: rgba(255,255,255,0.2);
}

.card {
  background-color: var(--bg-card);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: var(--shadow-light);
  transition: var(--transition);
  margin-bottom: 1rem;
}

.card:hover {
  box-shadow: var(--shadow-medium);
}

.form {
  background-color: var(--bg-card);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.form-label {
  display: block;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-input {
  width: 100%;
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  padding: 0.75rem;
  margin-bottom: 1rem;
  transition: var(--transition);
}

.form-input:focus {
  outline: none;
  border-color: var(--border-focus);
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-input::placeholder {
  color: var(--text-secondary);
}

/* ===================================
   BOTÕES
   =================================== */
.btn {
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: var(--transition);
  font-weight: 500;
  font-family: inherit;
}

.btn--primary {
  background-color: var(--border-focus);
  color: var(--text-light);
}

.btn:hover {
  background-color: var(--border-focus);
  color: var(--text-light);
  transform: translateY(-1px);
}
```

---

## 🧪 Exercício 4 – Implementando Dark Mode

### 📋 Desafio: Adicionar Dark Mode ao Projeto

Aplique dark mode ao seu projeto atual seguindo estas etapas:

### 🎯 Requisitos:

1. **Dark Mode Automático**: Respeitar preferência do sistema
2. **Dark Mode Manual**: Botão para alternar tema
3. **CSS Custom Properties**: Usar variáveis CSS
4. **Transições Suaves**: Animações entre temas
5. **Componentes Completos**: Todos os elementos estilizados

### 💻 Código Base para o Exercício

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Projeto com Dark Mode</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="header">
    <h1>Meu Projeto</h1>
    <button id="theme-toggle" class="theme-toggle">
      <i class="fas fa-moon" id="theme-icon"></i>
      <span id="theme-text">Modo Escuro</span>
    </button>
  </header>
  
  <main class="main">
    <div class="card">
      <h2>Card Principal</h2>
      <p>Este é um card de exemplo com dark mode.</p>
      <button class="btn btn--primary">Ação</button>
    </div>
    
    <form class="form">
      <label class="form-label">Email:</label>
      <input type="email" class="form-input" placeholder="seu@email.com">
      
      <label class="form-label">Mensagem:</label>
      <textarea class="form-input" rows="4" placeholder="Sua mensagem..."></textarea>
      
      <button type="submit" class="btn btn--primary">Enviar</button>
    </form>
  </main>
</body>
</html>
```

### 🎨 CSS com Dark Mode

```css
/* ===================================
   VARIÁVEIS CSS - TEMA CLARO
   =================================== */
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-card: #ffffff;
  --bg-header: #667eea;
  --text-primary: #333333;
  --text-secondary: #666666;
  --text-light: #ffffff;
  --border-color: #e9ecef;
  --border-focus: #667eea;
  --shadow-light: 0 2px 8px rgba(0,0,0,0.1);
  --shadow-medium: 0 4px 16px rgba(0,0,0,0.1);
  --transition: all 0.3s ease;
}

/* ===================================
   TEMA ESCURO (SISTEMA)
   =================================== */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #1a1a1a;
    --bg-secondary: #2d2d2d;
    --bg-card: #2d2d2d;
    --bg-header: #4a5568;
    --text-primary: #f0f0f0;
    --text-secondary: #cccccc;
    --border-color: #404040;
    --shadow-light: 0 2px 8px rgba(0,0,0,0.3);
    --shadow-medium: 0 4px 16px rgba(0,0,0,0.3);
  }
}

/* ===================================
   TEMA ESCURO (MANUAL)
   =================================== */
body.dark-mode {
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --bg-card: #2d2d2d;
  --bg-header: #4a5568;
  --text-primary: #f0f0f0;
  --text-secondary: #cccccc;
  --border-color: #404040;
  --shadow-light: 0 2px 8px rgba(0,0,0,0.3);
  --shadow-medium: 0 4px 16px rgba(0,0,0,0.3);
}

/* ===================================
   ESTILOS BASE
   =================================== */
body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: var(--transition);
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 20px;
  min-height: 100vh;
}

/* ===================================
   HEADER
   =================================== */
.header {
  background-color: var(--bg-header);
  color: var(--text-light);
  padding: 1rem 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--shadow-light);
}

.theme-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.75rem 1rem;
  background-color: rgba(255,255,255,0.1);
  color: var(--text-light);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 8px;
  cursor: pointer;
  transition: var(--transition);
  font-weight: 500;
}

.theme-toggle:hover {
  background-color: rgba(255,255,255,0.2);
}

/* ===================================
   MAIN CONTENT
   =================================== */
.main {
  max-width: 800px;
  margin: 0 auto;
}

/* ===================================
   CARDS
   =================================== */
.card {
  background-color: var(--bg-card);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: var(--shadow-light);
  transition: var(--transition);
  margin-bottom: 2rem;
}

.card:hover {
  box-shadow: var(--shadow-medium);
  transform: translateY(-2px);
}

.card h2 {
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.card p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

/* ===================================
   FORMULÁRIOS
   =================================== */
.form {
  background-color: var(--bg-card);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-light);
}

.form-label {
  display: block;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-input {
  width: 100%;
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  padding: 0.75rem;
  margin-bottom: 1rem;
  transition: var(--transition);
  font-family: inherit;
}

.form-input:focus {
  outline: none;
  border-color: var(--border-focus);
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-input::placeholder {
  color: var(--text-secondary);
}

/* ===================================
   BOTÕES
   =================================== */
.btn {
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: var(--transition);
  font-weight: 500;
  font-family: inherit;
}

.btn--primary {
  background-color: var(--border-focus);
  color: var(--text-light);
}

.btn:hover {
  background-color: var(--border-focus);
  color: var(--text-light);
  transform: translateY(-1px);
}
```

### 💻 JavaScript para Controle Manual

```javascript
// ===================================
// CONTROLE DE TEMA
// ===================================

class ThemeManager {
  constructor() {
    this.themeToggle = document.getElementById('theme-toggle');
    this.themeIcon = document.getElementById('theme-icon');
    this.themeText = document.getElementById('theme-text');
    this.currentTheme = localStorage.getItem('theme') || 'system';
    
    this.init();
  }
  
  init() {
    this.applyTheme(this.currentTheme);
    this.themeToggle.addEventListener('click', () => this.toggleTheme());
  }
  
  toggleTheme() {
    const themes = ['system', 'light', 'dark'];
    const currentIndex = themes.indexOf(this.currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const newTheme = themes[nextIndex];
    
    this.applyTheme(newTheme);
  }
  
  applyTheme(theme) {
    const body = document.body;
    
    // Remover classes anteriores
    body.classList.remove('dark-mode', 'light-mode');
    
    switch (theme) {
      case 'dark':
        body.classList.add('dark-mode');
        this.themeIcon.className = 'fas fa-sun';
        this.themeText.textContent = 'Modo Claro';
        break;
      case 'light':
        body.classList.add('light-mode');
        this.themeIcon.className = 'fas fa-moon';
        this.themeText.textContent = 'Modo Escuro';
        break;
      default: // system
        this.themeIcon.className = 'fas fa-adjust';
        this.themeText.textContent = 'Sistema';
        break;
    }
    
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
  }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
});
```

### 📊 Checklist de Verificação

- [ ] Dark mode automático implementado
- [ ] Botão de alternância funcional
- [ ] CSS Custom Properties utilizadas
- [ ] Transições suaves aplicadas
- [ ] Todos os componentes estilizados
- [ ] Testado em diferentes navegadores
- [ ] Preferência salva no localStorage
- [ ] Ícones e imagens adaptados

---

## 📚 Recursos Adicionais

- **CSS Custom Properties:** https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
- **prefers-color-scheme:** https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
- **Dark Mode Guidelines:** https://web.dev/prefers-color-scheme/

---

*Próxima aula: Animações CSS Avançadas*