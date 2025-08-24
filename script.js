(() => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox.querySelector('.lightbox-content');
  const caption = lightbox.querySelector('.lightbox-caption');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  let currentIndex = -1;
  const links = Array.from(document.querySelectorAll('.image-link'));

  function showImage(index) {
    currentIndex = index;
    const link = links[index];
    lightboxImg.src = link.href;
    caption.textContent = link.textContent.trim();
    lightbox.style.display = 'flex';
    lightbox.setAttribute('aria-hidden', 'false');
  }

  links.forEach((link, i) => {
    link.addEventListener('click', e => {
      e.preventDefault();
      showImage(i);
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      lightbox.style.display = 'none';
      lightbox.setAttribute('aria-hidden', 'true');
    }
    if (e.key === 'ArrowRight' && currentIndex < links.length - 1) {
      showImage(currentIndex + 1);
    }
    if (e.key === 'ArrowLeft' && currentIndex > 0) {
      showImage(currentIndex - 1);
    }
  });

  document.querySelectorAll('.image-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      lightbox.style.display = 'flex';
      lightboxImg.src = link.href;
      caption.textContent = link.textContent.trim();
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden', 'true');
  });

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
      lightbox.setAttribute('aria-hidden', 'true');
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      lightbox.style.display = 'none';
      lightbox.setAttribute('aria-hidden', 'true');
    }
  });
})();
