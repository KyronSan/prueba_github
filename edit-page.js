document.getElementById('edit-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener el valor del textarea
    const content = document.getElementById('content').value;
    
    // Almacenar el contenido en localStorage
    localStorage.setItem('page-content', content);
    
    // Mostrar mensaje de éxito
    document.getElementById('status-message').classList.remove('hidden');
    document.getElementById('status-message').innerText = 'Cambios guardados exitosamente.';
});

// Cargar el contenido al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const savedContent = localStorage.getItem('page-content') || 'Texto inicial.';
    document.getElementById('content').value = savedContent;
});
