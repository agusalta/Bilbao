// Seleccionar elementos relevantes
let previewContainer = document.querySelector('.cuadros-preview');
let previewBoxes = previewContainer.querySelectorAll('.preview');
let cuadroContainers = document.querySelectorAll('.galeria-container .cuadro-container');

// Agregar evento de clic a cada contenedor de cuadro
cuadroContainers.forEach(cuadro => {
  cuadro.addEventListener('click', () => {
    // Mostrar la vista previa
    previewContainer.style.display = 'flex';

    // Ocultar todas las vistas previas
    previewBoxes.forEach(preview => {
      preview.style.display = 'none';
    });

    // Obtener el nombre del cuadro clickeado
    let name = cuadro.getAttribute('data-name');

    // Mostrar la vista previa correspondiente al cuadro clickeado
    let targetPreview = previewContainer.querySelector(`.preview[data-target="${name}"]`);
    if (targetPreview) {
      targetPreview.style.display = 'block';
    }

    // Agregar evento de clic al botón de cierre dentro de la vista previa
    let closeButton = targetPreview.querySelector('.cerrar-modal');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        targetPreview.style.display = 'none';
        previewContainer.style.display = 'none';
      });
    }
  });
});

