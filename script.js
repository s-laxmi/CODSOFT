function openLightbox(image) {
  document.getElementById('lightbox-img').src = image.src;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
