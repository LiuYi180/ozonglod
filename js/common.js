/* ============================================
   Ozon 掘金 PRO - 公共JavaScript文件
   ============================================ */

(function() {
    'use strict';

    // --- 1. 导航栏滚动效果 ---
    function initNavScroll() {
        const nav = document.querySelector('nav');
        if (!nav) return;

        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        });
    }

    // --- 2. 移动端菜单切换 ---
    function initMobileMenu() {
        const toggle = document.querySelector('.mobile-menu-toggle');
        const menu = document.querySelector('.nav-menu');
        const nav = document.querySelector('nav');
        
        if (!toggle || !menu) return;

        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggle.classList.toggle('active');
            menu.classList.toggle('active');
        });

        // 点击菜单项后关闭
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                menu.classList.remove('active');
            });
        });

        // 点击外部区域关闭菜单
        document.addEventListener('click', (e) => {
            const isMobile = window.innerWidth <= 768;
            const isMenuVisible = menu.classList.contains('active');
            
            if (isMobile && isMenuVisible) {
                if (!menu.contains(e.target) && !toggle.contains(e.target)) {
                    toggle.classList.remove('active');
                    menu.classList.remove('active');
                }
            }
        });
    }

    // --- 3. 滚动动画（Intersection Observer）---
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // 可选：观察一次后取消观察
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // 观察所有带 fade-up 类的元素
        document.querySelectorAll('.fade-up').forEach(el => {
            observer.observe(el);
        });
    }

    // --- 4. 粒子背景生成 ---
    function createParticles() {
        const particlesBg = document.getElementById('particlesBg');
        if (!particlesBg) return;

        const particleCount = 30;
        const colors = [
            'rgba(255, 107, 157, 0.3)',
            'rgba(109, 40, 217, 0.3)',
            'rgba(139, 92, 246, 0.3)'
        ];

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (15 + Math.random() * 10) + 's';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particlesBg.appendChild(particle);
        }
    }

    // --- 5. 鼠标跟随光效（可选）---
    function initCursorGlow() {
        const cursorGlow = document.querySelector('.cursor-glow');
        if (!cursorGlow) return;

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorGlow.classList.add('active');
        });

        document.addEventListener('mouseleave', () => {
            cursorGlow.classList.remove('active');
        });

        // 平滑跟随
        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            cursorGlow.style.left = cursorX + 'px';
            cursorGlow.style.top = cursorY + 'px';
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // 悬停效果
        const hoverElements = document.querySelectorAll('a, button, .card, .btn');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorGlow.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                cursorGlow.classList.remove('hover');
            });
        });
    }

    // --- 6. 页面加载动画 ---
    function initPageLoader() {
        const loader = document.querySelector('.page-loader');
        if (!loader) return;

        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.classList.add('hidden');
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500);
            }, 800);
        });
    }

    // --- 7. 平滑滚动到锚点 ---
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#' || href === '') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const navHeight = document.querySelector('nav')?.offsetHeight || 0;
                    const targetPosition = target.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // --- 8. 表单验证工具函数 ---
    const FormValidator = {
        email: function(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        },
        
        phone: function(phone) {
            const re = /^[\d\s\-\+\(\)]+$/;
            return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
        },
        
        required: function(value) {
            return value && value.trim().length > 0;
        },
        
        minLength: function(value, min) {
            return value && value.length >= min;
        }
    };

    // --- 9. 工具函数：防抖 ---
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

    // --- 10. 工具函数：节流 ---
    function throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // --- 11. 初始化所有功能 ---
    function init() {
        initNavScroll();
        initMobileMenu();
        initScrollAnimations();
        createParticles();
        initCursorGlow();
        initPageLoader();
        initSmoothScroll();
    }

    // DOM加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // 导出工具函数到全局
    window.OzonPro = {
        FormValidator: FormValidator,
        debounce: debounce,
        throttle: throttle
    };

})();
