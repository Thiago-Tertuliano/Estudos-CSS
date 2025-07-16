// ===== INTERATIVIDADE DO EXERCÍCIO 7 =====

// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== NAVEGAÇÃO SUAVE =====
    const menuLinks = document.querySelectorAll('.menu a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== VALIDAÇÃO DE FORMULÁRIOS =====
    const formularios = document.querySelectorAll('form');
    
    formularios.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simula envio do formulário
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            // Adiciona estado de loading
            submitButton.classList.add('loading');
            submitButton.innerHTML = '<span class="icon">⏳</span><span class="text">Enviando...</span>';
            
            // Simula delay de envio
            setTimeout(() => {
                submitButton.classList.remove('loading');
                submitButton.innerHTML = originalText;
                
                // Mostra mensagem de sucesso
                mostrarMensagem('Formulário enviado com sucesso!', 'success');
                
                // Reseta o formulário
                form.reset();
            }, 2000);
        });
    });

    // ===== VALIDAÇÃO EM TEMPO REAL =====
    const inputs = document.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        // Validação em tempo real
        input.addEventListener('blur', function() {
            validarCampo(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validarCampo(this);
            }
        });
    });

    // ===== BOTÕES DE PRODUTOS =====
    const botoesProdutos = document.querySelectorAll('.produto-card button');
    
    botoesProdutos.forEach(botao => {
        botao.addEventListener('click', function() {
            const produto = this.closest('.produto-card');
            const nomeProduto = produto.querySelector('h3').textContent;
            const preco = produto.querySelector('.preco').textContent;
            
            // Adiciona ao carrinho (simulado)
            adicionarAoCarrinho(nomeProduto, preco);
            
            // Feedback visual
            this.innerHTML = '<span class="icon">✅</span><span class="text">Adicionado!</span>';
            this.style.background = 'linear-gradient(135deg, #28a745, #1e7e34)';
            
            setTimeout(() => {
                this.innerHTML = this.getAttribute('data-original') || 'Adicionar ao Pedido';
                this.style.background = '';
            }, 1500);
        });
    });

    // ===== ANIMAÇÕES DE SCROLL =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observa elementos para animação
    const elementosAnimados = document.querySelectorAll('.produto-card, .formulario-pedido, .formulario-contato');
    elementosAnimados.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ===== TOOLTIPS PARA BOTÕES =====
    const botoesComTooltip = document.querySelectorAll('button');
    
    botoesComTooltip.forEach(botao => {
        botao.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('title') || 'Clique para interagir';
            tooltip.style.cssText = `
                position: absolute;
                background: #333;
                color: white;
                padding: 8px 12px;
                border-radius: 6px;
                font-size: 12px;
                white-space: nowrap;
                z-index: 1000;
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + 'px';
            
            setTimeout(() => {
                tooltip.style.opacity = '1';
            }, 10);
            
            this.addEventListener('mouseleave', function() {
                tooltip.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(tooltip);
                }, 300);
            });
        });
    });

    // ===== CONTADOR DE CARACTERES =====
    const textareas = document.querySelectorAll('textarea');
    
    textareas.forEach(textarea => {
        const contador = document.createElement('div');
        contador.className = 'contador-caracteres';
        contador.style.cssText = `
            font-size: 12px;
            color: #666;
            text-align: right;
            margin-top: 5px;
        `;
        
        textarea.parentNode.appendChild(contador);
        
        function atualizarContador() {
            const maxLength = textarea.getAttribute('maxlength') || 500;
            const currentLength = textarea.value.length;
            contador.textContent = `${currentLength}/${maxLength}`;
            
            if (currentLength > maxLength * 0.8) {
                contador.style.color = '#ff6b35';
            } else {
                contador.style.color = '#666';
            }
        }
        
        textarea.addEventListener('input', atualizarContador);
        atualizarContador();
    });

    // ===== MODO ESCURO (BÔNUS) =====
    const toggleModoEscuro = document.createElement('button');
    toggleModoEscuro.innerHTML = '🌙';
    toggleModoEscuro.className = 'btn-outline';
    toggleModoEscuro.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
    `;
    
    document.body.appendChild(toggleModoEscuro);
    
    toggleModoEscuro.addEventListener('click', function() {
        document.body.classList.toggle('modo-escuro');
        this.innerHTML = document.body.classList.contains('modo-escuro') ? '☀️' : '🌙';
    });

    // ===== FUNÇÕES AUXILIARES =====
    
    function validarCampo(campo) {
        const valor = campo.value.trim();
        const tipo = campo.type;
        const required = campo.hasAttribute('required');
        
        // Remove classes de erro anteriores
        campo.classList.remove('error');
        
        // Validação básica
        if (required && !valor) {
            campo.classList.add('error');
            return false;
        }
        
        // Validações específicas
        if (tipo === 'email' && valor) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(valor)) {
                campo.classList.add('error');
                return false;
            }
        }
        
        if (tipo === 'tel' && valor) {
            const telefoneRegex = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/;
            if (!telefoneRegex.test(valor.replace(/\D/g, ''))) {
                campo.classList.add('error');
                return false;
            }
        }
        
        return true;
    }
    
    function adicionarAoCarrinho(nome, preco) {
        // Simula adição ao carrinho
        console.log(`Produto adicionado: ${nome} - ${preco}`);
        
        // Pode ser expandido para um sistema real de carrinho
        const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
        carrinho.push({ nome, preco, quantidade: 1 });
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }
    
    function mostrarMensagem(texto, tipo = 'info') {
        const mensagem = document.createElement('div');
        mensagem.className = `mensagem mensagem-${tipo}`;
        mensagem.textContent = texto;
        mensagem.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            ${tipo === 'success' ? 'background: #28a745;' : 'background: #007bff;'}
        `;
        
        document.body.appendChild(mensagem);
        
        setTimeout(() => {
            mensagem.style.transform = 'translateX(0)';
        }, 10);
        
        setTimeout(() => {
            mensagem.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(mensagem);
            }, 300);
        }, 3000);
    }
});

// ===== ESTILOS ADICIONAIS PARA MODO ESCURO =====
const estiloModoEscuro = document.createElement('style');
estiloModoEscuro.textContent = `
    .modo-escuro {
        background-color: #1a1a1a !important;
        color: #ffffff !important;
    }
    
    .modo-escuro .cardapio-section,
    .modo-escuro .contato-section,
    .modo-escuro .sobre-section,
    .modo-escuro .formulario-pedido,
    .modo-escuro .formulario-contato {
        background-color: #2d2d2d !important;
        color: #ffffff !important;
    }
    
    .modo-escuro input,
    .modo-escuro textarea,
    .modo-escuro select {
        background-color: #3d3d3d !important;
        color: #ffffff !important;
        border-color: #555 !important;
    }
    
    .modo-escuro .produto-card {
        background-color: #2d2d2d !important;
        color: #ffffff !important;
    }
    
    .modo-escuro .lista-diferenciais li {
        background: linear-gradient(135deg, #3d3d3d, #2d2d2d) !important;
        color: #ffffff !important;
    }
    
    .modo-escuro .lista-contato li {
        color: #cccccc !important;
    }
    
    .modo-escuro section h2,
    .modo-escuro .contato-info h3,
    .modo-escuro .sobre-content h3 {
        color: #ffffff !important;
    }
    
    .modo-escuro .produto-card h3 {
        color: #ffffff !important;
    }
    
    .modo-escuro .produto-card p {
        color: #cccccc !important;
    }
    
    .modo-escuro label {
        color: #ffffff !important;
    }
    
    .modo-escuro input::placeholder,
    .modo-escuro textarea::placeholder {
        color: #999 !important;
    }
`;

document.head.appendChild(estiloModoEscuro); 