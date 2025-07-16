# 🎓 CSS Básico – Aula 7
## 🔹 Tema: Estilizando listas, botões e inputs

---

## 📋 Introdução
Nesta aula, vamos aprender a estilizar elementos fundamentais da interface web: listas, botões e campos de formulário. Estes são componentes essenciais que aparecem em praticamente todos os sites.

---

## ✅ 1. Estilizando Listas (ul, ol, li)

### 🔸 Conceitos Básicos
As listas HTML são elementos muito versáteis que podem ser transformados em menus, navegação, cards e muito mais.

### 🔸 Removendo Marcadores Padrão
```css
/* Remove marcadores e espaçamento padrão */
ul {
  list-style: none;  /* Remove bolinhas */
  padding: 0;        /* Remove padding padrão */
  margin: 0;         /* Remove margin padrão */
}

ol {
  list-style: none;  /* Remove números */
  padding: 0;
  margin: 0;
}
```

### 🔸 Estilizando Itens da Lista
```css
/* Estilo básico para cada item */
li {
  padding: 12px 16px;
  border-bottom: 1px solid #e0e0e0;
  background-color: #ffffff;
  transition: background-color 0.3s ease;
}

/* Efeito hover */
li:hover {
  background-color: #f5f5f5;
}

/* Primeiro e último item */
li:first-child {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

li:last-child {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom: none;
}
```

### 🔸 Lista Horizontal (Menu de Navegação)
```css
/* Container do menu */
.menu {
  display: flex;
  gap: 20px;
  background-color: #333;
  padding: 16px 24px;
  border-radius: 8px;
}

/* Remove marcadores e estiliza links */
.menu li {
  list-style: none;
}

.menu a {
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.menu a:hover {
  background-color: #555;
}
```

### 🔸 Lista com Ícones
```css
/* Lista com ícones personalizados */
.lista-icones li {
  list-style: none;
  padding: 8px 0;
  position: relative;
  padding-left: 30px;
}

.lista-icones li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #28a745;
  font-weight: bold;
}
```

---

## ✅ 2. Estilizando Botões

### 🔸 Botão Base Moderno
```css
/* Estilo base para botões */
button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Efeito hover */
button:hover {
  background-color: #0056b3;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

/* Efeito active (quando clicado) */
button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

### 🔸 Variações de Botões
```css
/* Botão secundário */
.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #545b62;
}

/* Botão de sucesso */
.btn-success {
  background-color: #28a745;
  color: white;
}

.btn-success:hover {
  background-color: #1e7e34;
}

/* Botão de perigo */
.btn-danger {
  background-color: #dc3545;
  color: white;
}

.btn-danger:hover {
  background-color: #c82333;
}

/* Botão outline */
.btn-outline {
  background-color: transparent;
  color: #007bff;
  border: 2px solid #007bff;
}

.btn-outline:hover {
  background-color: #007bff;
  color: white;
}
```

### 🔸 Botão com Ícone
```html
<button class="btn-icon">
  <span class="icon">🔍</span>
  <span class="text">Buscar</span>
</button>
```

```css
.btn-icon {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
}

.btn-icon:hover {
  background-color: #0056b3;
  transform: translateY(-1px);
}

.icon {
  font-size: 18px;
}
```

---

## ✅ 3. Estilizando Inputs e Formulários

### 🔸 Inputs Básicos
```css
/* Estilo base para inputs */
input, textarea, select {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  margin-bottom: 16px;
  font-size: 16px;
  font-family: inherit;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

/* Estado focus */
input:focus, textarea:focus, select:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

/* Placeholder */
input::placeholder, textarea::placeholder {
  color: #999;
  font-style: italic;
}
```

### 🔸 Labels Acessíveis
```css
/* Estilo para labels */
label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
  font-size: 14px;
}

/* Label obrigatório */
label.required::after {
  content: " *";
  color: #dc3545;
}
```

### 🔸 Estados dos Inputs
```css
/* Input válido */
input:valid {
  border-color: #28a745;
}

/* Input inválido */
input:invalid {
  border-color: #dc3545;
}

/* Input desabilitado */
input:disabled {
  background-color: #f8f9fa;
  color: #6c757d;
  cursor: not-allowed;
}
```

---

## ✅ 4. Formulário Completo

### 🔸 HTML Estruturado
```html
<form class="formulario">
  <div class="form-grupo">
    <label for="nome" class="required">Nome completo</label>
    <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required>
  </div>

  <div class="form-grupo">
    <label for="email" class="required">Email</label>
    <input type="email" id="email" name="email" placeholder="seu@email.com" required>
  </div>

  <div class="form-grupo">
    <label for="mensagem">Mensagem</label>
    <textarea id="mensagem" name="mensagem" rows="4" placeholder="Digite sua mensagem..."></textarea>
  </div>

  <div class="form-grupo">
    <button type="submit" class="btn-primary">Enviar Mensagem</button>
  </div>
</form>
```

### 🔸 CSS do Formulário
```css
/* Container do formulário */
.formulario {
  max-width: 500px;
  margin: 0 auto;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Grupo de campos */
.form-grupo {
  margin-bottom: 20px;
}

/* Botão do formulário */
.btn-primary {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #0056b3;
  transform: translateY(-1px);
}

.btn-primary:active {
  transform: translateY(0);
}
```

---

## ✅ 5. Tabela de Propriedades Importantes

| Propriedade | Descrição | Valores Comuns |
|-------------|-----------|----------------|
| `list-style` | Tipo de marcador da lista | `none`, `disc`, `circle`, `square`, `decimal` |
| `cursor` | Tipo do cursor | `pointer`, `default`, `not-allowed` |
| `transition` | Animação de transição | `all 0.3s ease` |
| `border-radius` | Arredondamento das bordas | `4px`, `8px`, `50%` |
| `box-shadow` | Sombra do elemento | `0 2px 4px rgba(0,0,0,0.1)` |
| `outline` | Contorno do elemento | `none`, `2px solid #color` |

---

## ✅ 6. Boas Práticas

### 🔸 Acessibilidade
- Sempre use `label` para inputs
- Mantenha contraste adequado (4.5:1 mínimo)
- Use `focus` visível para navegação por teclado
- Teste com leitores de tela

### 🔸 Responsividade
```css
/* Inputs responsivos */
@media (max-width: 768px) {
  input, textarea {
    font-size: 16px; /* Evita zoom no iOS */
  }
  
  .menu {
    flex-direction: column;
    gap: 8px;
  }
}
```

### 🔸 Performance
- Use `transform` em vez de `margin/padding` para animações
- Evite muitas sombras em dispositivos móveis
- Use `will-change` para elementos que animam frequentemente

---

## ✅ 7. Dicas Rápidas

| Situação | Dica |
|----------|------|
| Botões sem estilo | Use `appearance: none` para reset completo |
| Inputs com ícones | Use `position: relative` no container |
| Listas horizontais | Combine `display: flex` + `list-style: none` |
| Validação visual | Use `:valid` e `:invalid` para feedback |
| Estados de loading | Adicione `pointer-events: none` durante carregamento |

---

## 🧪 Exercício Prático

Crie um formulário de contato completo com:
- Lista de navegação horizontal
- Campos para nome, email e mensagem
- Botão de envio com ícone
- Estados hover e focus
- Layout responsivo

**Dica:** Use as propriedades aprendidas para criar uma interface moderna e acessível!

---

## 📚 Próximos Passos
Na próxima aula, vamos explorar **CSS Grid** e **Flexbox** para criar layouts mais complexos e responsivos.

