let currentSection = 1;

function nextSection(section) {
    document.getElementById(`section${section}`).style.display = 'none';
    document.getElementById(`section${section + 1}`).style.display = 'block';
}

// Función para reproducir la música
function playMusic() {
    const music = document.getElementById('music');
    music.play();
}

// Mostrar la primera sección al cargar la página
document.getElementById('section1').style.display = 'block';
