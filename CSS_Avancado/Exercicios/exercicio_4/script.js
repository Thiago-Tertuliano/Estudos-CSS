// ===================================
// DARK MODE CONTROLLER
// ===================================

class DarkModeController {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.themeIcon = document.getElementById('theme-icon');
        this.themeText = document.getElementById('theme-text');
        this.body = document.body;
        
        // Estados possíveis: 'system', 'light', 'dark'
        this.currentTheme = this.getSavedTheme();
        
        this.init();
    }
    
    init() {
        // Aplicar tema inicial
        this.applyTheme(this.currentTheme);
        
        // Adicionar event listeners
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
        
        // Detectar mudanças na preferência do sistema
        this.detectSystemThemeChange();
        
        // Adicionar feedback visual ao botão
        this.addButtonFeedback();
    }
    
    getSavedTheme() {
        const saved = localStorage.getItem('dark-mode-theme');
        return saved || 'system';
    }
    
    saveTheme(theme) {
        localStorage.setItem('dark-mode-theme', theme);
    }
    
    toggleTheme() {
        const themes = ['system', 'light', 'dark'];
        const currentIndex = themes.indexOf(this.currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;
        const newTheme = themes[nextIndex];
        
        this.applyTheme(newTheme);
    }
    
    applyTheme(theme) {
        // Remover classes anteriores
        this.body.classList.remove('dark-mode', 'light-mode');
        
        // Aplicar nova classe baseada no tema
        switch (theme) {
            case 'dark':
                this.body.classList.add('dark-mode');
                this.updateButtonUI('dark');
                break;
            case 'light':
                this.body.classList.add('light-mode');
                this.updateButtonUI('light');
                break;
            case 'system':
            default:
                this.updateButtonUI('system');
                // Deixar o CSS media query controlar
                break;
        }
        
        this.currentTheme = theme;
        this.saveTheme(theme);
        
        // Disparar evento customizado
        this.dispatchThemeChangeEvent(theme);
    }
    
    updateButtonUI(theme) {
        const iconMap = {
            'dark': 'fas fa-sun',
            'light': 'fas fa-moon',
            'system': 'fas fa-adjust'
        };
        
        const textMap = {
            'dark': 'Modo Claro',
            'light': 'Modo Escuro',
            'system': 'Sistema'
        };
        
        this.themeIcon.className = iconMap[theme];
        this.themeText.textContent = textMap[theme];
    }
    
    detectSystemThemeChange() {
        // Detectar mudanças na preferência do sistema
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        mediaQuery.addEventListener('change', (e) => {
            if (this.currentTheme === 'system') {
                // Se estiver no modo sistema, aplicar automaticamente
                this.applyTheme('system');
            }
        });
    }
    
    addButtonFeedback() {
        // Adicionar feedback visual ao botão
        this.themeToggle.addEventListener('mousedown', () => {
            this.themeToggle.style.transform = 'scale(0.95)';
        });
        
        this.themeToggle.addEventListener('mouseup', () => {
            this.themeToggle.style.transform = 'scale(1)';
        });
        
        this.themeToggle.addEventListener('mouseleave', () => {
            this.themeToggle.style.transform = 'scale(1)';
        });
    }
    
    dispatchThemeChangeEvent(theme) {
        // Disparar evento customizado para outros scripts
        const event = new CustomEvent('themeChange', {
            detail: { theme }
        });
        document.dispatchEvent(event);
    }
    
    // Métodos públicos para controle externo
    setTheme(theme) {
        if (['system', 'light', 'dark'].includes(theme)) {
            this.applyTheme(theme);
        }
    }
    
    getCurrentTheme() {
        return this.currentTheme;
    }
    
    isDarkMode() {
        if (this.currentTheme === 'dark') return true;
        if (this.currentTheme === 'light') return false;
        // Se for 'system', verificar preferência do sistema
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
}

// ===================================
// FORM HANDLER
// ===================================

class FormHandler {
    constructor() {
        this.form = document.querySelector('.contact-form');
        this.init();
    }
    
    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
            this.form.addEventListener('reset', (e) => this.handleReset(e));
            this.addFormValidation();
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        if (this.validateForm()) {
            this.showSuccessMessage();
            this.form.reset();
        }
    }
    
    handleReset(e) {
        // Adicionar confirmação antes de limpar
        if (!confirm('Tem certeza que deseja limpar o formulário?')) {
            e.preventDefault();
        }
    }
    
    validateForm() {
        const inputs = this.form.querySelectorAll('input[required], textarea[required], select[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                this.showFieldError(input, 'Este campo é obrigatório');
                isValid = false;
            } else {
                this.clearFieldError(input);
            }
        });
        
        // Validação específica para email
        const emailInput = this.form.querySelector('input[type="email"]');
        if (emailInput && emailInput.value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                this.showFieldError(emailInput, 'Email inválido');
                isValid = false;
            }
        }
        
        return isValid;
    }
    
    showFieldError(input, message) {
        // Remover erro anterior
        this.clearFieldError(input);
        
        // Adicionar classe de erro
        input.classList.add('form-input--error');
        
        // Criar mensagem de erro
        const errorElement = document.createElement('div');
        errorElement.className = 'form-error';
        errorElement.textContent = message;
        errorElement.style.color = 'var(--error-color)';
        errorElement.style.fontSize = '0.75rem';
        errorElement.style.marginTop = '0.25rem';
        
        input.parentNode.appendChild(errorElement);
    }
    
    clearFieldError(input) {
        input.classList.remove('form-input--error');
        const errorElement = input.parentNode.querySelector('.form-error');
        if (errorElement) {
            errorElement.remove();
        }
    }
    
    addFormValidation() {
        const inputs = this.form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    this.showFieldError(input, 'Este campo é obrigatório');
                } else {
                    this.clearFieldError(input);
                }
            });
            
            input.addEventListener('input', () => {
                if (input.value.trim()) {
                    this.clearFieldError(input);
                }
            });
        });
    }
    
    showSuccessMessage() {
        // Criar mensagem de sucesso
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success';
        successMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>Mensagem enviada com sucesso!</span>
        `;
        successMessage.style.cssText = `
            background-color: var(--success-color);
            color: white;
            padding: 1rem;
            border-radius: 8px;
            margin-top: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: 500;
        `;
        
        this.form.appendChild(successMessage);
        
        // Remover mensagem após 3 segundos
        setTimeout(() => {
            successMessage.remove();
        }, 3000);
    }
}

// ===================================
// ANIMATION CONTROLLER
// ===================================

class AnimationController {
    constructor() {
        this.init();
    }
    
    init() {
        this.addScrollAnimations();
        this.addHoverEffects();
    }
    
    addScrollAnimations() {
        // Animar elementos quando entram na viewport
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
        
        // Observar cards e features
        const animatedElements = document.querySelectorAll('.card, .feature');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
    
    addHoverEffects() {
        // Adicionar efeitos de hover mais suaves
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'translateY(-2px)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translateY(0)';
            });
        });
    }
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

class Utils {
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
}

// ===================================
// INITIALIZATION
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar controladores
    const darkModeController = new DarkModeController();
    const formHandler = new FormHandler();
    const animationController = new AnimationController();
    
    // Expor para uso global (opcional)
    window.darkModeController = darkModeController;
    
    // Adicionar listener para mudanças de tema
    document.addEventListener('themeChange', (e) => {
        console.log('Tema alterado para:', e.detail.theme);
        // Aqui você pode adicionar lógica adicional quando o tema mudar
    });
    
    // Adicionar feedback de carregamento
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===================================
// SERVICE WORKER (OPCIONAL)
// ===================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registrado:', registration);
            })
            .catch(error => {
                console.log('SW falhou:', error);
            });
    });
} 