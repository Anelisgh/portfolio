(() => {
  // ✦ . ✦ . ✦ . ✦ . ✦
  // CAROUSEL LOGIC
  // ✦ . ✦ . ✦ . ✦ . ✦
  function initCarousel(containerId) {
    const projectContainer = document.getElementById(containerId);
    
    if (!projectContainer) return;
    
    const slide = projectContainer.querySelector('.carusel-slide');
    const controls = projectContainer.querySelectorAll('.control-item');
    const kinetocareControls = projectContainer.querySelectorAll('.kinetocare-control');
    const prevBtn = projectContainer.querySelector('.prev');
    const nextBtn = projectContainer.querySelector('.next');
    
    if (!slide || !prevBtn || !nextBtn) return;
    
    let currentIndex = 0;
    const totalSlides = slide.children.length;

    function updateCarousel(index) {
      slide.style.transform = `translateX(-${index * 100}%)`;

      if (controls.length > 0) {
        controls.forEach((control, i) => {
          const p = control.querySelector('p');
          if (i === index) {
            control.classList.add('active');
            if (p) {
              p.style.maxHeight = p.scrollHeight + 'px';
            }
          } else {
            control.classList.remove('active');
            if (p) {
              p.style.maxHeight = '0px';
            }
          }
        });
      }

      if (kinetocareControls.length > 0) {
        kinetocareControls.forEach((control) => {
          const slideIndex = parseInt(control.dataset.slide);
          if (slideIndex === index) {
            control.classList.add('active');
          } else {
            control.classList.remove('active');
          }
        });
      }
      
      currentIndex = index;
    }

    if (controls.length > 0) {
      controls.forEach(control => {
        control.addEventListener('click', () => {
          const slideIndex = parseInt(control.dataset.slide);
          updateCarousel(slideIndex);
        });
      });
    }

    if (kinetocareControls.length > 0) {
      kinetocareControls.forEach(control => {
        control.addEventListener('click', () => {
          const slideIndex = parseInt(control.dataset.slide);
          updateCarousel(slideIndex);
        });
      });
    }

    nextBtn.addEventListener('click', () => {
      let newIndex = (currentIndex + 1) % totalSlides;
      updateCarousel(newIndex);
    });

    prevBtn.addEventListener('click', () => {
      let newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel(newIndex);
    });
    
    updateCarousel(0);
  }

  // ✦ . ✦ . ✦ . ✦ . ✦
  // LANGUAGE SWITCHER
  // ✦ . ✦ . ✦ . ✦ . ✦
  function initLanguageSwitch() {
    const langButtons = document.querySelectorAll('.lang-btn');
    if (!langButtons.length) return;

    function setLanguage(lang) {
      if (typeof translations === 'undefined' || !translations[lang]) return;

      // Update toggle buttons active state and aria-pressed
      langButtons.forEach(btn => {
        const isActive = btn.dataset.lang === lang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });

      // Update document language attribute
      document.documentElement.lang = lang;

      // Update Page Title
      if (translations[lang].page_title) {
        document.title = translations[lang].page_title;
      }

      // Update Meta Description
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && translations[lang].meta_description) {
        metaDesc.setAttribute('content', translations[lang].meta_description);
      }

      // Update text and HTML content
      const i18nElements = document.querySelectorAll('[data-i18n]');
      i18nElements.forEach(el => {
        const key = el.dataset.i18n;
        const value = translations[lang][key];
        if (value !== undefined) {
          if (value.includes('<') && value.includes('>')) {
            el.innerHTML = value;
          } else {
            el.textContent = value;
          }
        }
      });

      // Update aria-labels
      const ariaElements = document.querySelectorAll('[data-i18n-aria]');
      ariaElements.forEach(el => {
        const key = el.dataset.i18nAria;
        const value = translations[lang][key];
        if (value) {
          el.setAttribute('aria-label', value);
        }
      });

      try {
        localStorage.setItem('portfolio_lang', lang);
      } catch (e) {
        console.warn('LocalStorage unavailable:', e);
      }

      // Re-adjust active paragraphs height if text length changed with language
      requestAnimationFrame(() => {
        document.querySelectorAll('.control-item.active p').forEach(p => {
          p.style.maxHeight = p.scrollHeight + 'px';
        });
        window.dispatchEvent(new CustomEvent('languageChanged'));
      });
    }

    langButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedLang = btn.dataset.lang;
        setLanguage(selectedLang);
      });
    });

    let savedLang = 'ro';
    try {
      savedLang = localStorage.getItem('portfolio_lang') || 'ro';
    } catch (e) {
      savedLang = 'ro';
    }

    setLanguage(savedLang);
  }

  // Initialize all components
  initCarousel('kinetocare-project');
  initCarousel('big-data-project');
  initCarousel('azure-telemetry-project');
  initLanguageSwitch();

  // Keep accordion heights accurate on window resize
  window.addEventListener('resize', () => {
    document.querySelectorAll('.control-item.active p').forEach(p => {
      p.style.maxHeight = p.scrollHeight + 'px';
    });
  });
})();