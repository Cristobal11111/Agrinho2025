// Función para aplicar el tamaño de texto a todos los elementos
function applyTextSize(size) {
  const elementsToResize = [
    'body', 'header', 'main', 'footer', 
    '.noticia', '.noticia h2', '.noticia p', '.intro p'
  ];
  
  // Primero removemos todas las clases de tamaño
  document.body.classList.remove('text-sm', 'text-md', 'text-lg');
  
  // Aplicamos la clase al body y elementos específicos
  document.body.classList.add(size);
  
  // Aplicamos a elementos específicos para mayor seguridad
  elementsToResize.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      el.classList.remove('text-sm', 'text-md', 'text-lg');
      el.classList.add(size);
    });
  });
  
  savePreference('textSize', size);
}

// Modificar los event listeners para usar la nueva función
textSm.addEventListener('click', function() {
  applyTextSize('text-sm');
  updateTextButtons('text-sm');
});

textMd.addEventListener('click', function() {
  applyTextSize('text-md');
  updateTextButtons('text-md');
});

textLg.addEventListener('click', function() {
  applyTextSize('text-lg');
  updateTextButtons('text-lg');
});