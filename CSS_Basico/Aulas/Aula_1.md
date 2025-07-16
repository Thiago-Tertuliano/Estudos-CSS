# 🎓 CSS Básico – Aula 1
## 🔹 Tema: Como o CSS funciona + primeiros estilos

---

## ✅ 1. O que é CSS?

**CSS (Cascading Style Sheets)** é a linguagem de estilo usada para controlar a aparência visual das páginas web.

### 🔍 Conceito Principal:
- **HTML**: Estrutura e conteúdo da página
- **CSS**: Aparência visual (cores, fontes, layout, animações)

### 📋 O que o CSS controla:
- ✅ Cores de texto e fundo
- ✅ Tipografia e tamanhos de fonte
- ✅ Espaçamentos e margens
- ✅ Posicionamento de elementos
- ✅ Bordas e sombras
- ✅ Animações e transições
- ✅ Layout responsivo

---

## ✅ 2. Formas de aplicar CSS

### 🟡 1. CSS Inline (evitar em projetos maiores)

**Quando usar:** Apenas para testes rápidos ou estilos únicos

```html
<p style="color: red; font-size: 18px;">Texto em vermelho</p>
<button style="background-color: blue; color: white; padding: 10px;">Botão</button>
```

**❌ Desvantagens:**
- Difícil de manter
- Não reutilizável
- Mistura conteúdo com estilo

### 🟢 2. CSS Interno (tag `<style>`)

**Quando usar:** Páginas simples ou testes

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>CSS Interno</title>
    <style>
        body {
            background-color: #f5f5f5;
            font-family: Arial, sans-serif;
        }
        
        h1 {
            color: #333;
            text-align: center;
        }
        
        p {
            color: #666;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <h1>Meu Título</h1>
    <p>Este é um parágrafo estilizado.</p>
</body>
</html>
```

### 🟢 3. CSS Externo (RECOMENDADO)

**Quando usar:** Sempre! É a forma ideal para projetos reais.

**Estrutura de arquivos:**
```
projeto/
├── index.html
└── style.css
```

**index.html:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>CSS Externo</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Meu Título</h1>
    <p>Este é um parágrafo estilizado.</p>
</body>
</html>
```

**style.css:**
```css
body {
    background-color: #f5f5f5;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
}

h1 {
    color: #333;
    text-align: center;
    border-bottom: 2px solid #333;
    padding-bottom: 10px;
}

p {
    color: #666;
    line-height: 1.6;
    text-align: justify;
}
```

**✅ Vantagens do CSS Externo:**
- Código organizado e separado
- Reutilizável em múltiplas páginas
- Fácil manutenção
- Melhor performance (cache do navegador)

---

## ✅ 3. Sintaxe do CSS

### 📝 Estrutura Básica:
```css
seletor {
    propriedade: valor;
    propriedade: valor;
}
```

### 🔍 Exemplo Prático:
```css
h1 {
    color: #0066cc;
    font-size: 32px;
    text-align: center;
    margin-bottom: 20px;
}
```

### 📋 Regras Importantes:
- **Ponto e vírgula (;)** no final de cada propriedade
- **Chaves {}** envolvem as propriedades
- **Dois pontos (:)** separam propriedade do valor
- **Comentários** com `/* */`

---

## ✅ 4. Seletores Básicos

### 📊 Tabela de Seletores:

| Seletor | Exemplo | O que seleciona |
|---------|---------|------------------|
| **Tag** | `h1`, `p`, `div` | Todos os elementos com essa tag |
| **Classe** | `.destaque` | Elementos com `class="destaque"` |
| **ID** | `#especial` | Elemento com `id="especial"` |
| **Múltiplos** | `h1, h2, h3` | Todos os elementos listados |

### 🎯 Exemplos Práticos:

**HTML:**
```html
<h1 class="titulo-principal">Título Principal</h1>
<p class="destaque">Texto em destaque</p>
<p id="especial">Texto especial único</p>
<div class="container">
    <p>Parágrafo dentro do container</p>
</div>
```

**CSS:**
```css
/* Seleciona todos os h1 */
h1 {
    color: #333;
    font-size: 28px;
}

/* Seleciona elementos com class="destaque" */
.destaque {
    color: orange;
    font-weight: bold;
    background-color: #fff3cd;
    padding: 10px;
    border-radius: 5px;
}

/* Seleciona elemento com id="especial" */
#especial {
    color: purple;
    font-size: 20px;
    border: 2px solid purple;
    padding: 15px;
}

/* Seleciona parágrafos dentro de elementos com class="container" */
.container p {
    color: #666;
    line-height: 1.8;
}
```

---

## ✅ 5. Primeiros Estilos para Testar

### 🎨 Estilos Básicos para o Body:
```css
body {
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    line-height: 1.6;
}
```

### 🎯 Estilos para Títulos:
```css
h1 {
    color: #333;
    text-align: center;
    font-size: 32px;
    margin-bottom: 30px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

h2 {
    color: #555;
    font-size: 24px;
    border-left: 4px solid #0066cc;
    padding-left: 15px;
}
```

### 📝 Estilos para Parágrafos:
```css
p {
    font-size: 18px;
    line-height: 1.5;
    color: #444;
    margin-bottom: 15px;
    text-align: justify;
}
```

### 🔘 Estilos para Botões:
```css
button {
    background-color: #0066cc;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #0052a3;
}
```

---

## 🧪 Exercício 1 – Crie seu primeiro CSS externo

### 📋 Objetivo:
Criar uma página web simples com HTML e CSS externo aplicando os conceitos aprendidos.

### 🎯 Passos:

1. **Crie um arquivo `index.html`:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Primeiro CSS</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1 class="titulo-principal">Bem-vindo ao CSS!</h1>
        
        <p class="destaque">Este é meu primeiro projeto com CSS externo.</p>
        
        <p>Estou aprendendo a estilizar páginas web de forma organizada e profissional.</p>
        
        <div class="botoes">
            <button class="btn-primario">Clique Aqui</button>
            <button class="btn-secundario">Saiba Mais</button>
        </div>
    </div>
</body>
</html>
```

2. **Crie um arquivo `style.css`:**
```css
/* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Estilos do body */
body {
    background-color: #f5f5f5;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
}

/* Container principal */
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin-top: 50px;
}

/* Título principal */
.titulo-principal {
    color: #2c3e50;
    text-align: center;
    font-size: 36px;
    margin-bottom: 30px;
    border-bottom: 3px solid #3498db;
    padding-bottom: 15px;
}

/* Parágrafo em destaque */
.destaque {
    background-color: #e8f4fd;
    color: #2980b9;
    padding: 15px;
    border-radius: 5px;
    border-left: 4px solid #3498db;
    margin-bottom: 20px;
    font-weight: 500;
}

/* Parágrafo normal */
p {
    font-size: 18px;
    margin-bottom: 15px;
    text-align: justify;
}

/* Container dos botões */
.botoes {
    text-align: center;
    margin-top: 30px;
}

/* Botão primário */
.btn-primario {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 12px 30px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
    transition: all 0.3s ease;
}

.btn-primario:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* Botão secundário */
.btn-secundario {
    background-color: #95a5a6;
    color: white;
    border: none;
    padding: 12px 30px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-secundario:hover {
    background-color: #7f8c8d;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
```

### 🎯 Desafio Extra:
- Adicione uma imagem ao projeto
- Crie um formulário simples
- Experimente diferentes cores e fontes
- Adicione efeitos hover em outros elementos

---

## 📚 Próximos Passos:
- ✅ Aula 2: Cores e Tipografia
- ✅ Aula 3: Box Model (Margin, Padding, Border)
- ✅ Aula 4: Layout e Posicionamento

---

## 💡 Dicas Importantes:
- **Sempre** use CSS externo em projetos reais
- **Organize** seu código com comentários
- **Teste** em diferentes navegadores
- **Mantenha** consistência nos nomes das classes
- **Use** nomes descritivos para classes e IDs