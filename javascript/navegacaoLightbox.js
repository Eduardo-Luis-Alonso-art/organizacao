document.addEventListener('DOMContentLoaded', function() {
  // Navegação entre anos
  const anoBtns = document.querySelectorAll('.ano-btn');
  const anoContainers = document.querySelectorAll('.ano-container');
  
  anoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      anoBtns.forEach(b => b.classList.remove('ativo'));
      btn.classList.add('ativo');
      
      const ano = btn.dataset.ano;
      anoContainers.forEach(container => {
        container.classList.toggle('ativo', container.id === `ano-${ano}`);
      });
    });
  });
  
  // Lightbox mobile
  const lightboxMobile = document.querySelector('.lightbox-mobile');
  const lightboxImgMobile = document.getElementById('lightbox-imagem-mobile');
  const lightboxTituloMobile = document.getElementById('lightbox-titulo-mobile');
  const lightboxDataMobile = document.getElementById('lightbox-data-mobile');
  const closeLightbox = document.querySelector('.fechar-lightbox');
  const fotoItems = document.querySelectorAll('.foto-item');
  
  function isMobile() {
    return window.innerWidth <= 768;
  }
  
  fotoItems.forEach(item => {
    item.addEventListener('click', function() {
      if (isMobile()) {
        const img = this.querySelector('img');
        const titulo = this.querySelector('.foto-titulo')?.textContent || '';
        const data = this.querySelector('.foto-data')?.textContent || '';
        
        if (lightboxImgMobile && lightboxTituloMobile && lightboxDataMobile && lightboxMobile) {
          lightboxImgMobile.src = img.src;
          lightboxTituloMobile.textContent = titulo;
          lightboxDataMobile.textContent = data;
          lightboxMobile.style.display = 'flex';
          document.body.style.overflow = 'hidden';
        }
      }
    });
  });
  
  closeLightbox?.addEventListener('click', () => {
    if (lightboxMobile) lightboxMobile.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
  
  lightboxMobile?.addEventListener('click', (e) => {
    if (e.target === lightboxMobile) {
      lightboxMobile.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
  
  window.addEventListener('orientationchange', function() {
    if (lightboxMobile?.style.display === 'flex') {
      lightboxMobile.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});