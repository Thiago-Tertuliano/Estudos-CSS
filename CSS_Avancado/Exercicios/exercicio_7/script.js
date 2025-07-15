// ===================================
// EXERCÍCIO 7 - VARIÁVEIS CSS
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // ALTERNÂNCIA DE TEMA
    // ===================================
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Verificar se há preferência salva
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.toggle('dark-mode', savedTheme === 'dark');
        updateThemeButton();
    }
    
    // Alternar tema
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        // Salvar preferência
        const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
        
        updateThemeButton();
        showThemeNotification();
    });
    
    function updateThemeButton() {
        const isDark = body.classList.contains('dark-mode');
        const icon = themeToggle.querySelector('i');
        const text = themeToggle.querySelector('span');
        
        if (isDark) {
            icon.className = 'fas fa-moon';
            text.textContent = 'Modo Escuro';
        } else {
            icon.className = 'fas fa-sun';
            text.textContent = 'Modo Claro';
        }
    }
    
    function showThemeNotification() {
        const isDark = body.classList.contains('dark-mode');
        const message = isDark ? 'Tema escuro ativado!' : 'Tema claro ativado!';
        
        const notification = document.createElement('div');
        notification.className = 'theme-notification';
        notification.innerHTML = `
            <i class="fas ${isDark ? 'fa-moon' : 'fa-sun'}"></i>
            <span>${message}</span>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--color-primary);
            color: white;
            padding: var(--spacing-md) var(--spacing-lg);
            border-radius: var(--border-radius-md);
            box-shadow: var(--shadow-lg);
            z-index: var(--z-tooltip);
            display: flex;
            align-items: center;
            gap: var(--spacing-sm);
            font-size: var(--font-size-sm);
            font-weight: var(--font-weight-medium);
            animation: slideInRight 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }

    // ===================================
    // ANIMAÇÕES DE ENTRADA
    // ===================================
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
    
    // Animar elementos ao entrar na viewport
    const animatedElements = document.querySelectorAll('.color-item, .typography-item, .component-group, .spacing-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // ===================================
    // INTERAÇÕES COM BOTÕES
    // ===================================
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Efeito de clique
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Mostrar feedback se for botão de formulário
            if (this.type === 'submit') {
                e.preventDefault();
                showSuccessMessage();
            }
        });
    });

    // ===================================
    // FORMULÁRIO INTERATIVO
    // ===================================
    const form = document.querySelector('.form');
    const inputs = document.querySelectorAll('.form__input');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showSuccessMessage();
    });

    // ===================================
    // CARDS INTERATIVOS
    // ===================================
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ===================================
    // DEMONSTRAÇÃO DE VARIÁVEIS CSS
    // ===================================
    function updateCSSVariables() {
        const root = document.documentElement;
        const isDark = body.classList.contains('dark-mode');
        
        // Atualizar variáveis dinamicamente (exemplo)
        if (isDark) {
            root.style.setProperty('--color-primary', '#60a5fa');
        } else {
            root.style.setProperty('--color-primary', '#3b82f6');
        }
    }
    
    // Observar mudanças no tema
    const themeObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                updateCSSVariables();
            }
        });
    });
    
    themeObserver.observe(body, {
        attributes: true,
        attributeFilter: ['class']
    });

    // ===================================
    // FUNÇÕES AUXILIARES
    // ===================================
    function showSuccessMessage() {
        const message = document.createElement('div');
        message.className = 'success-message';
        message.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>Formulário enviado com sucesso!</span>
        `;
        
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--color-success);
            color: white;
            padding: var(--spacing-md) var(--spacing-lg);
            border-radius: var(--border-radius-md);
            box-shadow: var(--shadow-lg);
            z-index: var(--z-tooltip);
            display: flex;
            align-items: center;
            gap: var(--spacing-sm);
            font-size: var(--font-size-sm);
            font-weight: var(--font-weight-medium);
            animation: slideInRight 0.3s ease;
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => message.remove(), 300);
        }, 3000);
    }

    // ===================================
    // ANIMAÇÕES CSS ADICIONAIS
    // ===================================
    const style = document.createElement('style');
    style.textContent = `
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
        
        .form__group.focused .form__label {
            color: var(--color-primary);
        }
        
        .form__group.focused .form__input {
            border-color: var(--color-primary);
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
    `;
    document.head.appendChild(style);

    // ===================================
    // DETECÇÃO DE PREFERÊNCIA DO SISTEMA
    // ===================================
    function detectSystemTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            if (!localStorage.getItem('theme')) {
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
                updateThemeButton();
            }
        }
    }
    
    // Detectar preferência do sistema
    detectSystemTheme();
    
    // Observar mudanças na preferência do sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
            updateThemeButton();
        }
    });

    // ===================================
    // INICIALIZAÇÃO
    // ===================================
    console.log('Exercício 7 - Variáveis CSS carregado!');
    console.log('Funcionalidades disponíveis:');
    console.log('- Alternância de tema claro/escuro');
    console.log('- Animações de entrada');
    console.log('- Formulário interativo');
    console.log('- Cards com hover effects');
    console.log('- Detecção de preferência do sistema');
    
    // Atualizar botão inicial
    updateThemeButton();
}); 