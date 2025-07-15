// ===================================
// EXERCÍCIO 6 - PSEUDOELEMENTOS E PSEUDOCLASSES
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // NAVEGAÇÃO SUAVE
    // ===================================
    const navLinks = document.querySelectorAll('.nav__link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Atualizar link ativo
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                // Scroll suave
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===================================
    // VALIDAÇÃO DE FORMULÁRIO
    // ===================================
    const form = document.querySelector('.form');
    const inputs = document.querySelectorAll('.form__input, .form__textarea');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    // Validação em tempo real
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearError);
    });
    
    // Validação de checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const label = this.closest('.checkbox-custom');
            if (this.checked) {
                label.classList.add('valid');
                label.classList.remove('error');
            } else {
                label.classList.remove('valid');
                if (this.hasAttribute('required')) {
                    label.classList.add('error');
                }
            }
        });
    });
    
    // Envio do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            showSuccessMessage();
            form.reset();
            clearAllErrors();
        } else {
            showErrorMessage();
        }
    });
    
    // Reset do formulário
    const resetBtn = document.querySelector('button[type="reset"]');
    resetBtn.addEventListener('click', function() {
        setTimeout(() => {
            clearAllErrors();
        }, 100);
    });

    // ===================================
    // EFEITOS INTERATIVOS
    // ===================================
    
    // Efeito de digitação no hero
    const heroTitle = document.querySelector('.hero__title');
    if (heroTitle) {
        typeWriter(heroTitle, 'Explorando CSS Avançado', 100);
    }
    
    // Animação de entrada dos cards
    const cards = document.querySelectorAll('.card');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Efeito hover nos botões da lista
    const listButtons = document.querySelectorAll('.lista__btn');
    listButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Efeito de loading no botão
    const loadingBtn = document.querySelector('.btn--loading');
    if (loadingBtn) {
        loadingBtn.addEventListener('click', function() {
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processando...';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-check"></i> Concluído!';
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Carregando';
                    this.disabled = false;
                }, 2000);
            }, 3000);
        });
    }

    // ===================================
    // GALERIA DE EFEITOS INTERATIVA
    // ===================================
    const effectItems = document.querySelectorAll('.effect-item');
    effectItems.forEach(item => {
        item.addEventListener('click', function() {
            // Adicionar efeito de destaque
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 8px 32px rgba(102, 126, 234, 0.3)';
            
            setTimeout(() => {
                this.style.transform = '';
                this.style.boxShadow = '';
            }, 300);
        });
    });

    // ===================================
    // TOOLTIPS DINÂMICOS
    // ===================================
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });

    // ===================================
    // FUNÇÕES AUXILIARES
    // ===================================
    
    function validateField() {
        const input = this;
        const value = input.value.trim();
        const type = input.type;
        const required = input.hasAttribute('required');
        
        let isValid = true;
        let errorMessage = '';
        
        // Validação de campo obrigatório
        if (required && !value) {
            isValid = false;
            errorMessage = 'Este campo é obrigatório';
        }
        
        // Validação de email
        if (type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Digite um email válido';
            }
        }
        
        // Validação de telefone
        if (type === 'tel' && value) {
            const phoneRegex = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4,5})[-. ]?([0-9]{4})$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                errorMessage = 'Digite um telefone válido';
            }
        }
        
        // Aplicar estado visual
        if (isValid) {
            input.classList.add('valid');
            input.classList.remove('error');
            removeErrorMessage(input);
        } else {
            input.classList.add('error');
            input.classList.remove('valid');
            showErrorMessage(input, errorMessage);
        }
        
        return isValid;
    }
    
    function clearError() {
        this.classList.remove('error');
        removeErrorMessage(this);
    }
    
    function showErrorMessage(input, message) {
        removeErrorMessage(input);
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: var(--error-color);
            font-size: 0.875rem;
            margin-top: 0.25rem;
            animation: slideIn 0.3s ease;
        `;
        
        input.parentNode.appendChild(errorDiv);
    }
    
    function removeErrorMessage(input) {
        const existingError = input.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
    }
    
    function validateForm() {
        let isValid = true;
        
        // Validar inputs
        inputs.forEach(input => {
            if (!validateField.call(input)) {
                isValid = false;
            }
        });
        
        // Validar checkboxes obrigatórios
        const requiredCheckboxes = document.querySelectorAll('input[type="checkbox"][required]');
        requiredCheckboxes.forEach(checkbox => {
            if (!checkbox.checked) {
                isValid = false;
                const label = checkbox.closest('.checkbox-custom');
                label.classList.add('error');
            }
        });
        
        return isValid;
    }
    
    function clearAllErrors() {
        inputs.forEach(input => {
            input.classList.remove('error', 'valid');
            removeErrorMessage(input);
        });
        
        checkboxes.forEach(checkbox => {
            const label = checkbox.closest('.checkbox-custom');
            label.classList.remove('error', 'valid');
        });
    }
    
    function showSuccessMessage() {
        const message = document.createElement('div');
        message.className = 'success-message';
        message.innerHTML = `
            <i class="fas fa-check-circle"></i>
            Formulário enviado com sucesso!
        `;
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--success-color);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: var(--border-radius-sm);
            box-shadow: var(--shadow-medium);
            z-index: 1000;
            animation: slideInRight 0.5s ease;
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.style.animation = 'slideOutRight 0.5s ease';
            setTimeout(() => message.remove(), 500);
        }, 3000);
    }
    
    function showErrorMessage() {
        const message = document.createElement('div');
        message.className = 'error-message-global';
        message.innerHTML = `
            <i class="fas fa-exclamation-triangle"></i>
            Por favor, corrija os erros no formulário.
        `;
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--error-color);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: var(--border-radius-sm);
            box-shadow: var(--shadow-medium);
            z-index: 1000;
            animation: slideInRight 0.5s ease;
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.style.animation = 'slideOutRight 0.5s ease';
            setTimeout(() => message.remove(), 500);
        }, 3000);
    }
    
    function typeWriter(element, text, speed) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    function showTooltip(e) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = this.getAttribute('data-tooltip');
        tooltip.style.cssText = `
            position: absolute;
            background: var(--text-color);
            color: white;
            padding: 0.5rem 0.75rem;
            border-radius: var(--border-radius-sm);
            font-size: 0.875rem;
            z-index: 1000;
            pointer-events: none;
            white-space: nowrap;
            box-shadow: var(--shadow-medium);
        `;
        
        document.body.appendChild(tooltip);
        
        const rect = this.getBoundingClientRect();
        tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
        tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        
        this.tooltip = tooltip;
    }
    
    function hideTooltip() {
        if (this.tooltip) {
            this.tooltip.remove();
            this.tooltip = null;
        }
    }

    // ===================================
    // ANIMAÇÕES CSS ADICIONAIS
    // ===================================
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100%);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideOutRight {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100%);
            }
        }
        
        .form__input.error {
            border-color: var(--error-color);
            animation: shake 0.5s ease;
        }
        
        .form__input.valid {
            border-color: var(--success-color);
        }
        
        .checkbox-custom.error::before {
            border-color: var(--error-color);
        }
        
        .checkbox-custom.valid::before {
            background-color: var(--success-color);
            border-color: var(--success-color);
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(style);

    // ===================================
    // INICIALIZAÇÃO
    // ===================================
    console.log('Exercício 6 - Pseudoelementos e Pseudoclasses carregado!');
    console.log('Funcionalidades disponíveis:');
    console.log('- Navegação suave');
    console.log('- Validação de formulário em tempo real');
    console.log('- Efeitos interativos');
    console.log('- Animações de entrada');
    console.log('- Tooltips dinâmicos');
}); 