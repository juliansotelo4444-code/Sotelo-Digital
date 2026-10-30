/**
 * SOTELO DIGITAL — Core Web Application Logic
 * TypeScript Implementation
 * Strict Typing, Accessible Interactions & Direct Conversion Workflows
 */

import { PORTFOLIO_MAP, ProjectItem } from './data/projects';

// --- TypeScript Interfaces & Types ---

export interface EstimateState {
  type: string;
  timeline: string;
  support: string;
}

export interface PlanPricing {
  basic: string;
  pro: string;
  enterprise: string;
}

export interface PricingTiers {
  monthly: PlanPricing;
  annual: PlanPricing;
}

// --- Configuration Constants ---
const WHATSAPP_NUMBER: string = '5491167873243';

const PRICING_DATA: PricingTiers = {
  monthly: { basic: '$25.000', pro: '$45.000', enterprise: '$85.000' },
  annual: { basic: '$20.000', pro: '$36.000', enterprise: '$68.000' }
};

// --- Application Controller ---
class SoteloDigitalApp {
  private header: HTMLElement | null = null;
  private menuButton: HTMLButtonElement | null = null;
  private navigation: HTMLElement | null = null;
  private modalOverlay: HTMLElement | null = null;
  private modalCloseBtn: HTMLElement | null = null;
  private modalContentContainer: HTMLElement | null = null;
  private contactModal: HTMLElement | null = null;
  private contactModalClose: HTMLElement | null = null;
  private billingSwitch: HTMLElement | null = null;

  private currentEstimate: EstimateState = {
    type: 'Landing Page de Ventas',
    timeline: 'Estándar (14 a 20 días)',
    support: 'Plan Profesional (10 a 12h/mes)'
  };

  public init(): void {
    this.cacheElements();
    this.bindEvents();
    this.initEstimator();
    this.initFaq();
    this.syncWhatsAppLinks();
    this.updateCopyrightYear();
  }

  private cacheElements(): void {
    this.header = document.querySelector('.site-header');
    this.menuButton = document.querySelector('.nav-toggle');
    this.navigation = document.querySelector('#main-navigation');
    this.modalOverlay = document.getElementById('modal-overlay');
    this.modalCloseBtn = document.getElementById('modal-close');
    this.modalContentContainer = document.getElementById('modal-body-content');
    this.contactModal = document.getElementById('contact-modal');
    this.contactModalClose = document.getElementById('contact-modal-close');
    this.billingSwitch = document.getElementById('billing-switch');
  }

  private bindEvents(): void {
    // Scroll header effect
    window.addEventListener('scroll', () => this.handleScroll(), { passive: true });

    // Mobile Navigation Drawer Toggle
    if (this.menuButton && this.navigation) {
      this.menuButton.addEventListener('click', () => {
        const isOpen = this.menuButton?.getAttribute('aria-expanded') === 'true';
        this.menuButton?.setAttribute('aria-expanded', String(!isOpen));
        this.menuButton?.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
        this.navigation?.classList.toggle('is-open', !isOpen);
      });

      this.navigation.addEventListener('click', (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (target.closest('a')) {
          this.navigation?.classList.remove('is-open');
          this.menuButton?.setAttribute('aria-expanded', 'false');
          this.menuButton?.setAttribute('aria-label', 'Abrir menú');
        }
      });
    }

    // Modal Triggers
    const openConsultationBtns = document.querySelectorAll<HTMLElement>('.trigger-consultation-modal');
    openConsultationBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openModal(this.contactModal);
      });
    });

    if (this.contactModalClose) {
      this.contactModalClose.addEventListener('click', () => this.closeModal(this.contactModal));
    }

    if (this.contactModal) {
      this.contactModal.addEventListener('click', (e: MouseEvent) => {
        if (e.target === this.contactModal) this.closeModal(this.contactModal);
      });
    }

    // Project Case Study Modal
    const projectButtons = document.querySelectorAll<HTMLElement>('.view-project-btn');
    projectButtons.forEach(btn => {
      btn.addEventListener('click', (e: MouseEvent) => {
        e.preventDefault();
        const projectId = btn.getAttribute('data-project');
        if (projectId && PORTFOLIO_MAP[projectId]) {
          this.renderCaseStudyModal(PORTFOLIO_MAP[projectId]);
        }
      });
    });

    if (this.modalCloseBtn) {
      this.modalCloseBtn.addEventListener('click', () => this.closeModal(this.modalOverlay));
    }

    if (this.modalOverlay) {
      this.modalOverlay.addEventListener('click', (e: MouseEvent) => {
        if (e.target === this.modalOverlay) this.closeModal(this.modalOverlay);
      });
    }

    // Escape Key Handler for All Modals
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        this.closeModal(this.modalOverlay);
        this.closeModal(this.contactModal);
      }
    });

    // Portfolio Category Filtering
    const filterBtns = document.querySelectorAll<HTMLButtonElement>('.filter-btn');
    const portfolioCards = document.querySelectorAll<HTMLElement>('.portfolio-card');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        const filter = btn.getAttribute('data-filter') || 'all';
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

    // Maintenance Billing Switcher
    if (this.billingSwitch) {
      const toggleBilling = () => {
        this.billingSwitch?.classList.toggle('annual');
        const isAnnual = this.billingSwitch?.classList.contains('annual');
        const currentTier = isAnnual ? 'annual' : 'monthly';
        const pricing = PRICING_DATA[currentTier];

        const basicElem = document.getElementById('price-basic');
        const proElem = document.getElementById('price-pro');
        const enterpriseElem = document.getElementById('price-enterprise');

        if (basicElem) basicElem.textContent = pricing.basic;
        if (proElem) proElem.textContent = pricing.pro;
        if (enterpriseElem) enterpriseElem.textContent = pricing.enterprise;
      };

      this.billingSwitch.addEventListener('click', toggleBilling);
      this.billingSwitch.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleBilling();
        }
      });
    }

    // Contact Form WhatsApp Submissions
    const contactForm = document.getElementById('main-contact-form') as HTMLFormElement | null;
    if (contactForm) {
      contactForm.addEventListener('submit', (e: SubmitEvent) => {
        e.preventDefault();
        const name = (document.getElementById('form-name') as HTMLInputElement)?.value || '';
        const email = (document.getElementById('form-email') as HTMLInputElement)?.value || '';
        const service = (document.getElementById('form-service') as HTMLSelectElement)?.value || 'Diseño Web';
        const message = (document.getElementById('form-message') as HTMLTextAreaElement)?.value || '';

        const fullMessage = [
          '¡Hola Sotelo Digital! Quisiera conversar sobre un proyecto.',
          '',
          `Nombre: ${name}`,
          `Email / Contacto: ${email}`,
          `Servicio de interés: ${service}`,
          `Detalles: ${message}`
        ].join('\n');

        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`, '_blank');
        contactForm.reset();
      });
    }

    // Modal Consultation Form
    const modalForm = document.getElementById('modal-contact-form') as HTMLFormElement | null;
    if (modalForm) {
      modalForm.addEventListener('submit', (e: SubmitEvent) => {
        e.preventDefault();
        const name = (document.getElementById('modal-name') as HTMLInputElement)?.value || '';
        const phone = (document.getElementById('modal-phone') as HTMLInputElement)?.value || '';
        const notes = (document.getElementById('modal-notes') as HTMLTextAreaElement)?.value || '';

        const fullMessage = [
          '¡Hola Sotelo Digital! Solicito una asesoría directa:',
          `Nombre: ${name}`,
          `WhatsApp: ${phone}`,
          `Proyecto: ${notes}`
        ].join('\n');

        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`, '_blank');
        this.closeModal(this.contactModal);
        modalForm.reset();
      });
    }

    // 3D Mouse Parallax on Hero Browser Mockup
    const heroBrowser = document.querySelector<HTMLElement>('.browser');
    if (heroBrowser && window.innerWidth > 960) {
      document.addEventListener('mousemove', (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 8;
        const y = (e.clientY / window.innerHeight - 0.5) * -8;
        heroBrowser.style.transform = `rotate(${ -3 + x * 0.2 }deg) translateY(${ y }px)`;
      });
    }
  }

  private handleScroll(): void {
    if (!this.header) return;
    if (window.scrollY > 40) {
      this.header.classList.add('scrolled');
    } else {
      this.header.classList.remove('scrolled');
    }
  }

  private openModal(modal: HTMLElement | null): void {
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  private closeModal(modal: HTMLElement | null): void {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  private renderCaseStudyModal(project: ProjectItem): void {
    if (!this.modalContentContainer || !this.modalOverlay) return;

    this.modalContentContainer.innerHTML = `
      <div style="position: relative; border-radius: 12px; overflow: hidden; margin-bottom: 24px; border: 1px solid var(--border-color); background: #0D0D11;">
        <img src="${project.image}" alt="${project.title}" style="width: 100%; max-height: 400px; object-fit: cover;">
        <div style="position: absolute; bottom: 16px; left: 16px; background: rgba(10,10,12,0.9); backdrop-filter: blur(8px); padding: 6px 14px; border-radius: 999px; color: #fff; font-size: 0.8rem; font-weight: 700; border: 1px solid rgba(255,255,255,0.2);">
          ${project.categoryLabel}
        </div>
      </div>
      
      <h3 id="modal-title" style="font-size: 1.8rem; margin-bottom: 12px; font-family: var(--font-heading); font-weight: 800; color: #FFFFFF;">${project.title}</h3>
      
      <div style="display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 20px; padding: 14px 18px; background: var(--bg-secondary); border-radius: 10px; border: 1px solid var(--border-color);">
        <div><span style="font-size: 0.8rem; color: var(--text-muted); display: block;">Cliente</span><strong style="color: #FFFFFF;">${project.client}</strong></div>
        <div style="border-left: 1px solid var(--border-color); padding-left: 16px;"><span style="font-size: 0.8rem; color: var(--text-muted); display: block;">Modalidad</span><strong style="color: #FFFFFF;">${project.timeline}</strong></div>
        <div style="border-left: 1px solid var(--border-color); padding-left: 16px;"><span style="font-size: 0.8rem; color: var(--text-muted); display: block;">Enfoque</span><strong style="color: var(--red);">${project.metric}</strong></div>
      </div>

      <p style="margin-bottom: 20px; font-size: 1rem; line-height: 1.6; color: var(--text-body);">${project.description}</p>

      <p style="font-family: var(--font-heading); font-size: 1.1rem; text-transform: uppercase; margin-bottom: 12px; font-weight: 800; color: #FFFFFF;">Funcionalidades y Características:</p>
      <ul style="list-style: none; margin-bottom: 28px; display: flex; flex-direction: column; gap: 10px; padding: 0;">
        ${project.results.map(r => `
          <li style="display: flex; align-items: center; gap: 10px; font-size: 0.95rem; color: #D4D4D8;">
            <span style="color: var(--red); font-weight: 900;">✓</span> ${r}
          </li>
        `).join('')}
      </ul>

      <div style="margin-bottom: 28px;">
        <span style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); display: block; margin-bottom: 10px;">Tecnologías Utilizadas:</span>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${project.stack.map(s => `<span class="tech-tag" style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 5px 12px; border-radius: 6px; font-weight: 700; font-size: 12px; color: #FFFFFF;">${s}</span>`).join('')}
        </div>
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 14px; padding-top: 20px; border-top: 1px solid var(--border-color);">
        ${project.liveUrl ? `
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="button button-outline" style="border-color: var(--border-color); color: #FFFFFF; display: inline-flex; align-items: center; gap: 8px;">
            <span>${project.isExternalDemo ? 'Visitar Web Oficial' : 'Solicitar Demo / Ver'}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 16px; height: 16px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
          </a>
        ` : ''}
        ${project.repoUrl ? `
          <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="button button-outline" style="border-color: var(--border-color); color: #FFFFFF; display: inline-flex; align-items: center; gap: 8px;" title="Ver código en GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" style="width: 16px; height: 16px;"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            <span>GitHub</span>
          </a>
        ` : ''}
        <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Sotelo Digital! Me interesó el proyecto de ' + project.title + ' y quisiera cotizar un desarrollo para mi negocio.')}" target="_blank" class="button button-primary">
          Consultar por WhatsApp
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 17px; height: 17px;"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
        <button class="button button-secondary" id="modal-inner-close">Cerrar</button>
      </div>
    `;

    document.getElementById('modal-inner-close')?.addEventListener('click', () => {
      this.closeModal(this.modalOverlay);
    });

    this.openModal(this.modalOverlay);
  }

  private initEstimator(): void {
    const typeBtns = document.querySelectorAll<HTMLButtonElement>('.opt-type');
    const timeBtns = document.querySelectorAll<HTMLButtonElement>('.opt-time');
    const supportBtns = document.querySelectorAll<HTMLButtonElement>('.opt-support');

    const bindOptGroup = (buttons: NodeListOf<HTMLButtonElement>, key: keyof EstimateState) => {
      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          buttons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.currentEstimate[key] = btn.getAttribute('data-val') || '';
          this.renderEstimate();
        });
      });
    };

    bindOptGroup(typeBtns, 'type');
    bindOptGroup(timeBtns, 'timeline');
    bindOptGroup(supportBtns, 'support');

    this.renderEstimate();
  }

  private renderEstimate(): void {
    const summaryDetails = document.querySelector<HTMLElement>('.summary-details');
    const waBtn = document.getElementById('estimator-wa-btn') as HTMLAnchorElement | null;
    const priceRangeElem = document.getElementById('estimate-price-range');

    const basePrices: Record<string, string> = {
      'Landing Page de Ventas': '$120.000 ARS',
      'Sitio Web Institucional': '$160.000 ARS',
      'Sitio con Carrito / Tienda Online': '$220.000 ARS',
      'Gestor de Datos & Automatización': 'desde $350.000 ARS'
    };

    if (priceRangeElem) {
      priceRangeElem.textContent = basePrices[this.currentEstimate.type] || '$120.000 ARS';
    }

    if (summaryDetails) {
      summaryDetails.innerHTML = `<strong>Proyecto:</strong> ${this.currentEstimate.type} | <strong>Plazo:</strong> ${this.currentEstimate.timeline} | <strong>Soporte:</strong> ${this.currentEstimate.support}`;
    }

    if (waBtn) {
      const estimatedBase = basePrices[this.currentEstimate.type] || '$120.000 ARS';
      const message = [
        '¡Hola Sotelo Digital! Estuve configurando mi propuesta en su sitio web:',
        `• Tipo de Proyecto: ${this.currentEstimate.type}`,
        `• Plazo Deseado: ${this.currentEstimate.timeline}`,
        `• Mantenimiento/Soporte: ${this.currentEstimate.support}`,
        `• Inversión Base Estimada: ${estimatedBase}`,
        '',
        '¿Podemos coordinar una llamada o mensaje directo para revisar detalles y presupuesto formal a medida? Gracias!'
      ].join('\n');

      waBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    }
  }

  private initFaq(): void {
    const faqItems = document.querySelectorAll<HTMLElement>('.faq-item');
    faqItems.forEach(item => {
      const questionBtn = item.querySelector<HTMLButtonElement>('.faq-question');
      questionBtn?.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        faqItems.forEach(other => other.classList.remove('active'));
        if (!isOpen) {
          item.classList.add('active');
        }
      });
    });
  }

  private syncWhatsAppLinks(): void {
    // Sync floating button
    const floatBtn = document.querySelector<HTMLAnchorElement>('.whatsapp-floating');
    if (floatBtn) {
      floatBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('¡Hola Sotelo Digital! Vengo desde su sitio web y quiero consultar sobre un proyecto.')}`;
    }

    // Sync Promo Cards buttons
    const promoButtons = document.querySelectorAll<HTMLAnchorElement>('.promo-wa-btn');
    promoButtons.forEach(btn => {
      const plan = btn.getAttribute('data-plan') || 'un proyecto';
      btn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`¡Hola Sotelo Digital! Quiero aprovechar la promo de lanzamiento para: ${plan}.`)}`;
    });

    // Sync Urgency Banner button
    const urgencyBtn = document.querySelector<HTMLAnchorElement>('.urgency-cta-btn');
    if (urgencyBtn) {
      urgencyBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('¡Hola Sotelo Digital! Quiero reservar uno de los últimos cupos del mes para mi web.')}`;
    }

    // Sync Maintenance Plan buttons
    const planButtons = document.querySelectorAll<HTMLAnchorElement>('.plan-card a.button');
    planButtons.forEach(btn => {
      const planName = btn.closest('.plan-card')?.querySelector('h3')?.textContent || 'Mantenimiento';
      btn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`¡Hola Sotelo Digital! Quiero consultar por el plan de soporte mensual: ${planName}.`)}`;
    });
  }

  private updateCopyrightYear(): void {
    const yearElem = document.getElementById('year');
    if (yearElem) {
      yearElem.textContent = String(new Date().getFullYear());
    }
  }
}

// Initialize Application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const app = new SoteloDigitalApp();
  app.init();
});
