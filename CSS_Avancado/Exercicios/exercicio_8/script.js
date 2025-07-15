// ===== CONFIGURAÇÃO INICIAL =====
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeAnimations();
    initializeFormValidation();
    initializeSmoothScrolling();
    initializeIntersectionObserver();
    initializeMobileMenu();
});

// ===== GERENCIAMENTO DE TEMA =====
function initializeTheme() {
    const themeToggle = document.getElementById('toggle-dark');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Verificar se há tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme === 'dark');
    } else if (prefersDarkScheme.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeIcon(true);
    }
    
    // Event listener para alternar tema
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme === 'dark');
        
        // Adicionar efeito de transição
        addThemeTransitionEffect();
    });
    
    // Escutar mudanças na preferência do sistema
    prefersDarkScheme.addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            updateThemeIcon(newTheme === 'dark');
        }
    });
}

function updateThemeIcon(isDark) {
    const themeToggle = document.getElementById('toggle-dark');
    const icon = themeToggle.querySelector('i');
    
    if (isDark) {
        icon.className = 'fas fa-sun';
        themeToggle.setAttribute('aria-label', 'Alternar para tema claro');
    } else {
        icon.className = 'fas fa-moon';
        themeToggle.setAttribute('aria-label', 'Alternar para tema escuro');
    }
}

function addThemeTransitionEffect() {
    const themeToggle = document.getElementById('toggle-dark');
    themeToggle.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        themeToggle.style.transform = 'scale(1)';
    }, 150);
}

// ===== ANIMAÇÕES DE SCROLL =====
function initializeAnimations() {
    // Adicionar animações aos elementos quando aparecem na tela
    const animatedElements = document.querySelectorAll('.feature-card, .stat-item, .contact-item');
    
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        element.style.transitionDelay = `${index * 0.1}s`;
    });
}

function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos animados
    const animatedElements = document.querySelectorAll('.feature-card, .stat-item, .contact-item');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// ===== SCROLL SUAVE =====
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link, .btn[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Atualizar URL sem recarregar a página
                    history.pushState(null, null, href);
                }
            }
        });
    });
}

// ===== VALIDAÇÃO DE FORMULÁRIO =====
function initializeFormValidation() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                showSuccessMessage();
                contactForm.reset();
            }
        });
        
        // Validação em tempo real
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    }
}

function validateForm() {
    const form = document.querySelector('.contact-form');
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';
    
    // Remover erros anteriores
    clearFieldError(field);
    
    // Validações específicas
    switch (fieldName) {
        case 'nome':
            if (value.length < 2) {
                errorMessage = 'Nome deve ter pelo menos 2 caracteres';
                isValid = false;
            }
            break;
            
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                errorMessage = 'Email deve ser válido';
                isValid = false;
            }
            break;
            
        case 'mensagem':
            if (value.length < 10) {
                errorMessage = 'Mensagem deve ter pelo menos 10 caracteres';
                isValid = false;
            }
            break;
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
    }
    
    return isValid;
}

function showFieldError(field, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.color = 'var(--danger)';
    errorDiv.style.fontSize = 'var(--font-size-sm)';
    errorDiv.style.marginTop = 'var(--space-xs)';
    
    field.style.borderColor = 'var(--danger)';
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
    field.style.borderColor = 'var(--border-light)';
}

function showSuccessMessage() {
    // Criar elemento de sucesso
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>Mensagem enviada com sucesso!</span>
    `;
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--success);
        color: white;
        padding: var(--space-md) var(--space-lg);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-lg);
        z-index: var(--z-modal);
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        transform: translateX(100%);
        transition: transform var(--transition-normal);
    `;
    
    document.body.appendChild(successDiv);
    
    // Animar entrada
    setTimeout(() => {
        successDiv.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover após 3 segundos
    setTimeout(() => {
        successDiv.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(successDiv);
        }, 300);
    }, 3000);
}

// ===== MENU MOBILE =====
function initializeMobileMenu() {
    // Criar menu mobile se necessário
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav');
    
    if (window.innerWidth <= 768) {
        createMobileMenu(header, nav);
    }
    
    // Escutar mudanças de tamanho da tela
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.mobile-menu-toggle')) {
                createMobileMenu(header, nav);
            }
        } else {
            const mobileToggle = document.querySelector('.mobile-menu-toggle');
            if (mobileToggle) {
                mobileToggle.remove();
            }
        }
    });
}

function createMobileMenu(header, nav) {
    if (document.querySelector('.mobile-menu-toggle')) return;
    
    const mobileToggle = document.createElement('button');
    mobileToggle.className = 'mobile-menu-toggle';
    mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
    mobileToggle.setAttribute('aria-label', 'Abrir menu');
    mobileToggle.style.cssText = `
        display: none;
        background: none;
        border: none;
        color: var(--text-secondary);
        font-size: var(--font-size-lg);
        cursor: pointer;
        padding: var(--space-sm);
        border-radius: var(--radius-md);
        transition: all var(--transition-fast);
    `;
    
    // Adicionar antes do botão de tema
    const themeToggle = document.getElementById('toggle-dark');
    header.querySelector('.container').insertBefore(mobileToggle, themeToggle);
    
    // Mostrar em telas pequenas
    if (window.innerWidth <= 768) {
        mobileToggle.style.display = 'block';
        nav.style.display = 'none';
    }
    
    // Toggle do menu
    mobileToggle.addEventListener('click', function() {
        const isOpen = nav.style.display === 'flex';
        
        if (isOpen) {
            nav.style.display = 'none';
            mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            mobileToggle.setAttribute('aria-label', 'Abrir menu');
        } else {
            nav.style.display = 'flex';
            nav.style.flexDirection = 'column';
            nav.style.position = 'absolute';
            nav.style.top = '100%';
            nav.style.left = '0';
            nav.style.right = '0';
            nav.style.background = 'var(--bg-header)';
            nav.style.backdropFilter = 'blur(10px)';
            nav.style.borderTop = '1px solid var(--border-light)';
            nav.style.padding = 'var(--space-md)';
            nav.style.gap = 'var(--space-md)';
            mobileToggle.innerHTML = '<i class="fas fa-times"></i>';
            mobileToggle.setAttribute('aria-label', 'Fechar menu');
        }
    });
}

// ===== EFEITOS INTERATIVOS =====
function initializeInteractiveEffects() {
    // Efeito de parallax no hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Efeito de hover nos cards
    const cards = document.querySelectorAll('.feature-card, .stat-item, .contact-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// ===== UTILITÁRIOS =====
function debounce(func, wait) {
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

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== PERFORMANCE =====
// Otimizar scroll com throttle
const throttledScrollHandler = throttle(function() {
    // Código de scroll aqui se necessário
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);

// ===== ACESSIBILIDADE =====
// Adicionar suporte a navegação por teclado
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Fechar menus abertos
        const nav = document.querySelector('.nav');
        if (nav && nav.style.display === 'flex') {
            nav.style.display = 'none';
            const mobileToggle = document.querySelector('.mobile-menu-toggle');
            if (mobileToggle) {
                mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    }
});

// ===== DEBUG =====
// Função para debug (remover em produção)
function debugTheme() {
    console.log('Tema atual:', document.documentElement.getAttribute('data-theme'));
    console.log('Tema salvo:', localStorage.getItem('theme'));
    console.log('Preferência do sistema:', window.matchMedia('(prefers-color-scheme: dark)').matches);
}

// Expor função de debug globalmente (apenas para desenvolvimento)
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.debugTheme = debugTheme;
} 