    const buttons = document.querySelectorAll('.buttons button');
    const images = document.querySelectorAll('.gallery img');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter'); // get button filter
    images.forEach(img => {
      if(filter === 'all' || img.dataset.category === filter) {
        img.style.display = 'block';  // show image
      } else {
        img.style.display = 'none';   // hide image
      }
    });
  });
});
    // ----------- Lightbox ------------
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('img');
    let currentIndex = 0;

    function showLightbox(index) {
      const visibleImages = Array.from(images).filter(i => i.style.display !== 'none');
      if(index < 0) index = visibleImages.length - 1;
      if(index >= visibleImages.length) index = 0;
      currentIndex = index;
      lightboxImg.src = visibleImages[index].src;
      lightbox.style.display = 'flex';
    }

    images.forEach((img, i) => img.addEventListener('click', () => showLightbox(i)));

    lightbox.querySelector('.close').onclick = () => lightbox.style.display = 'none';
    lightbox.querySelector('.prev').onclick = () => showLightbox(currentIndex - 1);
    lightbox.querySelector('.next').onclick = () => showLightbox(currentIndex + 1);
    lightbox.addEventListener('click', e => { if(e.target === lightbox) lightbox.style.display = 'none'; });
