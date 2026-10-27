/**
 * SOTELO DIGITAL - Web App Logic & Interactions
 * Agencia Creativa de Diseño Web y Soporte
 * Craft Floor & Impeccable Compliant
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial State & Elements
  const header = document.querySelector('.site-header');
  const themeToggle = document.getElementById('theme-toggle');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileBackdrop = document.getElementById('mobile-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');
  const billingSwitch = document.getElementById('billing-switch');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalCloseBtn = document.getElementById('modal-close');
  const modalContentContainer = document.getElementById('modal-body-content');
  const contactModal = document.getElementById('contact-modal');
  const contactModalClose = document.getElementById('contact-modal-close');
  const openConsultationBtns = document.querySelectorAll('.trigger-consultation-modal');

  // WhatsApp official business number (can be configured)
  const WHATSAPP_NUMBER = '5491123456789';

  // 2. Theme Management (Dark / Light)
  const savedTheme = localStorage.getItem('sotelo_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('sotelo_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    if (theme === 'dark') {
      themeToggle.innerHTML = `
        <svg viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/></svg>
      `;
      themeToggle.setAttribute('aria-label', 'Cambiar a modo claro');
    } else {
      themeToggle.innerHTML = `
        <svg viewBox="0 0 24 24"><path d="M12.3 2a10 10 0 0 0-.19 20 10.04 10.04 0 0 0 9.95-8.77.75.75 0 0 0-.8-0.84 8.5 8.5 0 0 1-8.96-10.39.75.75 0 0 0-.75-.82c-.08 0-.17.01-.25.02z"/></svg>
      `;
      themeToggle.setAttribute('aria-label', 'Cambiar a modo oscuro');
    }
  }

  // 3. Header Scroll Effect & Active Nav Link Highlight
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scrollspy
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add('active');
        } else {
          navItem.classList.remove('active');
        }
      }
    });
  });

  // 4. Mobile Menu Drawer
  if (mobileToggle && mobileDrawer && mobileBackdrop) {
    const toggleMenu = (open) => {
      const isOpen = open !== undefined ? open : !mobileDrawer.classList.contains('active');
      mobileDrawer.classList.toggle('active', isOpen);
      mobileBackdrop.classList.toggle('active', isOpen);
      mobileToggle.classList.toggle('active', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    mobileToggle.addEventListener('click', () => toggleMenu());
    mobileBackdrop.addEventListener('click', () => toggleMenu(false));
    mobileLinks.forEach(link => link.addEventListener('click', () => toggleMenu(false)));
  }

  // 5. Portfolio Filtering
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.getAttribute('data-filter');

      portfolioCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // 6. Portfolio Case Studies Data & Modal Handler
  const projectsData = {
    'ecommerce': {
      title: 'Nova Urban - E-Commerce de Moda & Streetwear',
      category: 'E-Commerce / Tienda Online',
      heroImage: 'assets/images/ecommerce-mockup.jpg',
      client: 'Nova Urban Apparel',
      timeline: '21 Días',
      metrics: '+215% en ventas el primer mes | Tiempo de carga: 0.8s',
      description: 'Desarrollo de plataforma de comercio electrónico de alta gama con catálogo dinámico, pasarela de pagos con Stripe/MercadoPago, filtro por tallas y diseño minimalista orientado a conversión.',
      stack: ['HTML5', 'Vanilla CSS', 'JavaScript ES6', 'Stripe API', 'Shopify Headless'],
      results: [
        'Aumento del 42% en la tasa de conversión en móvil.',
        'Checkout simplificado en 2 pasos con integración directa a WhatsApp para soporte.',
        'Puntuación de 99/100 en Google Lighthouse para rendimiento y SEO.'
      ]
    },
    'dashboard': {
      title: 'Synapse Enterprise - Gestor de Datos & Automatización',
      category: 'Gestor de Datos / Web App',
      heroImage: 'assets/images/dashboard-mockup.jpg',
      client: 'Synapse Logistics & Data',
      timeline: '28 Días',
      metrics: 'Automatización de 1,400+ horas de carga manual | 99.98% Uptime',
      description: 'Plataforma empresarial de control y visualización de datos en tiempo real. Incluye paneles analíticos con gráficos interactivos, monitoreo de servidores, gestión de usuarios por roles y exportación automatizada.',
      stack: ['REST API', 'JavaScript', 'Chart.js', 'PostgreSQL', 'WebSockets'],
      results: [
        'Centralización de operaciones de 5 sedes en un único panel unificado.',
        'Alertas preventivas automáticas ante fallos de servidor o anomalías de datos.',
        'Reducción de tiempos de reporte de 4 horas a tan solo 1 clic.'
      ]
    },
    'realestate': {
      title: 'Luna Residences - Landing Page Inmobiliaria de Lujo',
      category: 'Landing Page de Alta Conversión',
      heroImage: 'assets/images/realestate-mockup.jpg',
      client: 'Luna Developments',
      timeline: '12 Días',
      metrics: '420+ Leads calificados en 3 semanas | CPL reducido un 48%',
      description: 'Landing page ultra optimizada para captación de inversionistas de bienes raíces de alta gama. Recorrido visual inmersivo, integración con CRM, formulario inteligente de calificación de leads y botón directo a asesor por WhatsApp.',
      stack: ['HTML5', 'CSS Grid', 'JavaScript', 'HubSpot CRM Webhook', 'Google Ads Tracker'],
      results: [
        'Tasa de conversión de formulario de visita del 8.4% (vs 2.1% del sitio anterior).',
        'Notificación instantánea por WhatsApp al equipo de ventas cada vez que ingresa un prospecto.',
        'Optimización completa para anuncios en Meta Ads y Google Search.'
      ]
    }
  };

  const projectButtons = document.querySelectorAll('.view-project-btn');
  projectButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = btn.getAttribute('data-project');
      const project = projectsData[projId];

      if (project && modalContentContainer && modalOverlay) {
        modalContentContainer.innerHTML = `
          <div style="position: relative; border-radius: 12px; overflow: hidden; margin-bottom: 24px; border: 1px solid var(--border-color);">
            <img src="${project.heroImage}" alt="${project.title}" style="width: 100%; max-height: 400px; object-fit: cover;">
            <div style="position: absolute; bottom: 16px; left: 16px; background: rgba(0,0,0,0.85); backdrop-filter: blur(8px); padding: 6px 14px; border-radius: 999px; color: #fff; font-size: 0.8rem; font-weight: 700; border: 1px solid rgba(255,255,255,0.2);">
              ${project.category}
            </div>
          </div>
          
          <h3 style="font-size: 1.8rem; margin-bottom: 12px;">${project.title}</h3>
          
          <div style="display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 20px; padding: 14px 18px; background: var(--bg-secondary); border-radius: 10px; border: 1px solid var(--border-color);">
            <div><span style="font-size: 0.8rem; color: var(--text-muted); display: block;">Cliente</span><strong>${project.client}</strong></div>
            <div style="border-left: 1px solid var(--border-color); padding-left: 16px;"><span style="font-size: 0.8rem; color: var(--text-muted); display: block;">Plazo</span><strong>${project.timeline}</strong></div>
            <div style="border-left: 1px solid var(--border-color); padding-left: 16px;"><span style="font-size: 0.8rem; color: var(--text-muted); display: block;">Impacto</span><strong style="color: var(--red-primary);">${project.metrics}</strong></div>
          </div>

          <p style="margin-bottom: 20px; font-size: 1.05rem; line-height: 1.6;">${project.description}</p>

          <p style="font-family: var(--font-heading); font-size: 1.15rem; text-transform: uppercase; margin-bottom: 12px; font-weight: 800;">Logros y Resultados Clave:</p>
          <ul style="list-style: none; margin-bottom: 28px; display: flex; flex-direction: column; gap: 10px;">
            ${project.results.map(r => `
              <li style="display: flex; align-items: center; gap: 10px; font-size: 0.95rem;">
                <span style="color: var(--red-primary); font-weight: 900;">✓</span> ${r}
              </li>
            `).join('')}
          </ul>

          <div style="margin-bottom: 28px;">
            <span style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); display: block; margin-bottom: 10px;">Tecnologías Utilizadas:</span>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              ${project.stack.map(s => `<span class="tech-tag" style="background: var(--bg-tertiary); padding: 5px 12px; border-radius: 6px; font-weight: 700; color: var(--text-title);">${s}</span>`).join('')}
            </div>
          </div>

          <div style="display: flex; flex-wrap: wrap; gap: 14px; padding-top: 20px; border-top: 1px solid var(--border-color);">
            <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Sotelo Digital! Me interesó mucho el caso de éxito de ' + project.title + ' y quisiera cotizar un desarrollo similar para mi negocio.')}" target="_blank" class="btn btn-primary">
              Cotizar Proyecto Similar
              <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <button class="btn btn-secondary" onclick="document.getElementById('modal-close').click();">Cerrar</button>
          </div>
        `;

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (modalCloseBtn && modalOverlay) {
    modalCloseBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // 7. Consultation / Contact Modal
  openConsultationBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (contactModal) {
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (contactModalClose && contactModal) {
    contactModalClose.addEventListener('click', () => {
      contactModal.classList.remove('active');
      document.body.style.overflow = '';
    });

    contactModal.addEventListener('click', (e) => {
      if (e.target === contactModal) {
        contactModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Escape key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modalOverlay && modalOverlay.classList.contains('active')) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
      if (contactModal && contactModal.classList.contains('active')) {
        contactModal.classList.remove('active');
        document.body.style.overflow = '';
      }
      if (mobileDrawer && mobileDrawer.classList.contains('active')) {
        mobileDrawer.classList.remove('active');
        mobileBackdrop.classList.remove('active');
        mobileToggle.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });

  // 8. Maintenance Billing Switcher (Monthly vs. Annual)
  if (billingSwitch) {
    const basicPriceElem = document.getElementById('price-basic');
    const proPriceElem = document.getElementById('price-pro');
    const enterprisePriceElem = document.getElementById('price-enterprise');

    const prices = {
      monthly: { basic: '$149', pro: '$299', enterprise: '$599' },
      annual: { basic: '$119', pro: '$239', enterprise: '$479' }
    };

    const toggleBilling = () => {
      billingSwitch.classList.toggle('annual');
      const isAnnual = billingSwitch.classList.contains('annual');
      const currentTier = isAnnual ? 'annual' : 'monthly';

      if (basicPriceElem) basicPriceElem.textContent = prices[currentTier].basic;
      if (proPriceElem) proPriceElem.textContent = prices[currentTier].pro;
      if (enterprisePriceElem) enterprisePriceElem.textContent = prices[currentTier].enterprise;
    };

    billingSwitch.addEventListener('click', toggleBilling);
    billingSwitch.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleBilling();
      }
    });
  }

  // 9. Interactive Quick Estimator ("Sin cuestionarios tediosos")
  const typeBtns = document.querySelectorAll('.opt-type');
  const timeBtns = document.querySelectorAll('.opt-time');
  const supportBtns = document.querySelectorAll('.opt-support');
  const estimatorSummary = document.getElementById('estimator-summary-text');
  const estimatorWaBtn = document.getElementById('estimator-wa-btn');

  let currentEstimate = {
    type: 'Landing Page de Alta Conversión',
    timeline: 'Estándar (14 días)',
    support: 'Plan Profesional (30h/mes)'
  };

  function updateEstimatorOptions(buttons, key, attr = 'data-val') {
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentEstimate[key] = btn.getAttribute(attr);
        renderEstimateSummary();
      });
    });
  }

  updateEstimatorOptions(typeBtns, 'type');
  updateEstimatorOptions(timeBtns, 'timeline');
  updateEstimatorOptions(supportBtns, 'support');

  function renderEstimateSummary() {
    if (estimatorSummary) {
      estimatorSummary.innerHTML = `
        <p class="summary-heading">Configuración Seleccionada:</p>
        <p class="summary-details"><strong>Proyecto:</strong> ${currentEstimate.type} | <strong>Plazo:</strong> ${currentEstimate.timeline} | <strong>Soporte:</strong> ${currentEstimate.support}</p>
      `;
    }

    if (estimatorWaBtn) {
      const message = `¡Hola Sotelo Digital! Estuve configurando mi propuesta web en su sitio:
• Tipo de Proyecto: ${currentEstimate.type}
• Plazo Deseado: ${currentEstimate.timeline}
• Mantenimiento/Soporte: ${currentEstimate.support}

¿Podemos coordinar una llamada o mensaje directo para revisar detalles y presupuesto formal? Gracias!`;

      estimatorWaBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    }
  }

  // Initialize estimator message
  renderEstimateSummary();

  // 10. Direct Contact Form Submission Handler
  const contactForm = document.getElementById('main-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name')?.value || '';
      const email = document.getElementById('form-email')?.value || '';
      const service = document.getElementById('form-service')?.value || 'Diseño Web';
      const message = document.getElementById('form-message')?.value || '';

      const fullMessage = `¡Hola Sotelo Digital! Mi nombre es ${name}.
• Email: ${email}
• Servicio de interés: ${service}
• Mensaje: ${message}`;

      // Open WhatsApp with prefilled message
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`, '_blank');

      // Visual feedback
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '¡Mensaje Enviado! Redirigiendo a WhatsApp... ✓';
        submitBtn.style.backgroundColor = '#10B981';
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.style.backgroundColor = '';
          contactForm.reset();
        }, 4000);
      }
    });
  }

  // Modal contact form
  const modalContactForm = document.getElementById('modal-contact-form');
  if (modalContactForm) {
    modalContactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('modal-name')?.value || '';
      const phone = document.getElementById('modal-phone')?.value || '';
      const notes = document.getElementById('modal-notes')?.value || '';

      const fullMessage = `¡Hola Sotelo Digital! Solicito una asesoría directa:
• Nombre: ${name}
• Teléfono/WhatsApp: ${phone}
• Detalles: ${notes}`;

      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`, '_blank');
      if (contactModal) contactModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // 11. Subtle Mouse Parallax on Hero Visual
  const heroCard = document.querySelector('.hero-mockup-wrapper');
  if (heroCard && window.innerWidth > 992) {
    document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 12;
      const y = (clientY / window.innerHeight - 0.5) * -12;
      heroCard.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });
  }
});
