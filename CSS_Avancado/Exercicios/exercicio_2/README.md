# 🎯 Exercício 2 - Dashboard com CSS Grid

## 📋 Descrição
Este exercício demonstra a aplicação prática de CSS Grid Layout para criar um dashboard administrativo completo e responsivo, seguindo as especificações da Aula 2.

## 🏗️ Estrutura do Layout

### 📐 Grid Areas Implementadas
```
+----------------------+
|       Header         |
+----+------------+----+
|Nav |   Main     |Ads |
+----+------------+----+
|       Footer         |
+----------------------+
```

### 🎯 Áreas Definidas
- **Header** - Altura fixa (80px), largura total
- **Sidebar** - Largura fixa (250px), altura flexível
- **Main** - Área principal, flexível
- **Ads** - Largura fixa (200px), altura flexível
- **Footer** - Altura fixa (60px), largura total

## ✅ Características Implementadas

### 🎨 **Layout com CSS Grid Areas**
```css
.dashboard {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main ads"
    "footer footer footer";
  grid-template-columns: 250px 1fr 200px;
  grid-template-rows: 80px 1fr 60px;
}
```

### 📱 **Responsividade Completa**
- **Desktop (> 1024px)**: Layout completo com 3 colunas
- **Tablet (768px - 1024px)**: Sidebar + Main, Ads em linha
- **Mobile (< 768px)**: Layout em coluna única

### 🎯 **Componentes do Dashboard**

#### **Header**
- Logo com ícone
- Navegação principal
- Informações do usuário
- Gradiente de fundo

#### **Sidebar**
- Menu lateral com ícones
- Links com hover effects
- Efeito de deslizamento

#### **Main Content**
- Cards de métricas responsivos
- Gráficos placeholder
- Layout em grid interno

#### **Cards de Métricas**
- 4 cards com diferentes cores
- Ícones FontAwesome
- Indicadores de crescimento
- Hover effects

#### **Ads Sidebar**
- 3 anúncios interativos
- Botões de ação
- Layout flexível

#### **Footer**
- Copyright
- Links de navegação
- Layout responsivo

## 🎨 Design e UX

### **Paleta de Cores**
- **Primária**: #667eea (azul)
- **Sucesso**: #28a745 (verde)
- **Aviso**: #ffc107 (amarelo)
- **Info**: #17a2b8 (azul claro)
- **Escuro**: #343a40 (cinza escuro)

### **Tipografia**
- **Fonte**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700
- **Hierarquia**: Títulos, subtítulos, corpo

### **Efeitos Visuais**
- **Sombras**: Box-shadow em todos os componentes
- **Bordas**: Border-radius para modernidade
- **Transições**: Hover effects suaves
- **Gradientes**: Header com gradiente

## 📱 Responsividade

### **Breakpoints**
```css
/* Tablet */
@media (max-width: 1024px) {
  grid-template-areas:
    "header header"
    "sidebar main"
    "ads ads"
    "footer footer";
}

/* Mobile */
@media (max-width: 768px) {
  grid-template-areas:
    "header"
    "sidebar"
    "main"
    "ads"
    "footer";
}
```

### **Adaptações Mobile**
- Layout em coluna única
- Cards empilhados
- Navegação vertical
- Espaçamentos reduzidos

## 🔧 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3 Grid** - Layout principal
- **CSS3 Flexbox** - Alinhamentos internos
- **FontAwesome** - Ícones
- **Google Fonts** - Tipografia Inter
- **CSS Custom Properties** - Preparado para variáveis

## 📊 Checklist de Verificação

- [x] Layout criado com Grid Areas
- [x] Responsividade implementada
- [x] Cards responsivos dentro do main
- [x] Estilos modernos aplicados
- [x] Hover effects nos cards
- [x] Layout funcional em mobile
- [x] Acessibilidade com ARIA labels
- [x] Metodologia BEM aplicada
- [x] Código organizado e comentado

## 🎯 Funcionalidades

### **Cards de Métricas**
- **Usuários Ativos**: 1,234 (+12.5%)
- **Receita**: R$ 45,678 (+8.3%)
- **Pedidos**: 567 (-2.1%)
- **Visualizações**: 89,123 (+15.7%)

### **Navegação**
- Menu lateral com 6 seções
- Navegação principal no header
- Links funcionais (preparados para JavaScript)

### **Anúncios**
- 3 anúncios interativos
- Botões de ação
- Layout responsivo

## 🚀 Como Executar

1. Clone ou baixe os arquivos
2. Abra o `index.html` em um navegador
3. Teste a responsividade redimensionando a janela
4. Verifique os hover effects nos elementos

## 📚 Aprendizados

Este exercício demonstra:
- **CSS Grid Areas** para layouts complexos
- **Responsividade** com media queries
- **Design moderno** com gradientes e sombras
- **Acessibilidade** com ARIA labels
- **Organização de código** com BEM
- **Componentes reutilizáveis** (cards, botões)

## 🎯 Próximos Passos

- Implementar JavaScript para interatividade
- Adicionar gráficos reais (Chart.js, D3.js)
- Implementar tema escuro
- Adicionar animações mais complexas
- Integrar com backend para dados reais

---

*Exercício baseado na Aula 2 de CSS Avançado - Grid Layout* 