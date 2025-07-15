🎓 CSS Avançado – Aula 5
🔹 Tema: Animações e Transições com CSS
✅ 1. transition: animações simples e suaves
A transition anima a mudança de estado (como hover, focus, etc.)

Exemplo: botão com hover suave
css
Copiar
Editar
.botao {
  background-color: #0066cc;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.botao:hover {
  background-color: #004999;
}
transition: propriedade duração ease-in-out;

Você pode aplicar a múltiplas propriedades:

css
Copiar
Editar
transition: all 0.3s ease;
✅ 2. @keyframes: animações completas, controladas
Use @keyframes para criar animações personalizadas com início, meio e fim.

Exemplo: animação de fade-in ao carregar
css
Copiar
Editar
.fade-in {
  animation: aparecer 1s ease-in-out forwards;
}

@keyframes aparecer {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
A classe .fade-in pode ser aplicada a qualquer elemento que você quer que “entre suavemente”.

✅ 3. Looping e efeitos contínuos
css
Copiar
Editar
.loader {
  width: 40px;
  height: 40px;
  border: 5px solid #ccc;
  border-top: 5px solid #0066cc;
  border-radius: 50%;
  animation: girar 1s linear infinite;
}

@keyframes girar {
  to {
    transform: rotate(360deg);
  }
}
✅ 4. Delay e timing
Você pode atrasar e controlar o ritmo da animação:

css
Copiar
Editar
animation: aparecer 1s ease-in-out 0.5s forwards;
Sintaxe: animation: nome duração easing delay direção modo;

✅ 5. Animação ao entrar na tela (com JS ou bibliotecas como AOS)
Isso exige JS ou bibliotecas externas, mas com só CSS você pode animar:

Ao carregar a página

Ao passar o mouse

Ao dar foco em um campo

Ao aplicar uma classe dinamicamente

🧪 Exercício 5 – Aplique animações no seu projeto
Adicione transition nos botões e links do menu

Crie um @keyframes para um elemento aparecer suavemente na hero section

Crie um .loader de carregamento com rotação

Use animation-delay para sequenciar cards, por exemplo:

css
Copiar
Editar
.card:nth-child(1) { animation-delay: 0.1s }
.card:nth-child(2) { animation-delay: 0.3s }
.card:nth-child(3) { animation-delay: 0.5s }
