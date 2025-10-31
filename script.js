// Cambiar color de fondo al hacer clic
document.getElementById('cambiar-color').addEventListener('click', function() {
    const colores = ['#f4f4f4', '#e0f7fa', '#fff3e0', '#f3e5f5', '#e8f5e9'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
});

// Simular envío de formulario
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Mensaje enviado! (Esto es solo una simulación)');
    this.reset();
});