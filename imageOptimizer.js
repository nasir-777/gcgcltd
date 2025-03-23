// Create a function to generate low-res thumbnails
function createThumbnail(img) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 20; // Very small thumbnail
  canvas.height = 20;
  ctx.drawImage(img, 0, 0, 20, 20);
  return canvas.toDataURL('image/jpeg', 0.1);
}

// Progressive image loading
function loadImage(img) {
  const fullSrc = img.dataset.src;
  
  // Create a temporary image to load the full version
  const tempImage = new Image();
  tempImage.onload = () => {
    img.src = fullSrc;
    img.style.opacity = 1;
  };
  tempImage.src = fullSrc;
} 