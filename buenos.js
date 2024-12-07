const flowersBackground = document.getElementById('flowers-background');

// Función para crear una flor con pétalos y centro
function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('dynamic-flower');

    // Posicionar la flor en un lugar aleatorio
    flower.style.top = `${Math.random() * 100}%`;
    flower.style.left = `${Math.random() * 100}%`;

    // Tamaño aleatorio
    const size = Math.random() * 40 + 30; // Entre 30px y 70px
    flower.style.width = `${size}px`;
    flower.style.height = `${size}px`;

    // Crear pétalos
    for (let i = 0; i < 8; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.transform = `rotate(${i * 45}deg) translateY(-50%)`;
        petal.style.backgroundColor = getRandomPetalColor(); // Colores rosados o morados
        flower.appendChild(petal);
    }

    // Crear centro de la flor
    const center = document.createElement('div');
    center.classList.add('center');
    flower.appendChild(center);

    // Agregar la flor al contenedor
    flowersBackground.appendChild(flower);

    // Eliminar la flor después de 12 segundos (desaparecerá antes por el fadeOut)
    setTimeout(() => {
        flower.remove();
    }, 12000);
}

// Función para generar colores específicos para los pétalos
function getRandomPetalColor() {
    const petalColors = ['#FF69B4', '#DB7093', '#BA55D3', '#9370DB']; // Tonos rosados y morados
    return petalColors[Math.floor(Math.random() * petalColors.length)];
}

// Generar flores de manera continua
let flowerDelay = 0; // Variable para retrasar la aparición de cada flor

setInterval(() => {
    createFlower();
    flowerDelay += 800; // Retraso de 500ms entre cada flor
}, 1500);

// Crear algunas flores al iniciar con un pequeño retraso
for (let i = 0; i < 10; i++) {
    setTimeout(createFlower, flowerDelay);
    flowerDelay += 500; // Incrementar el retraso para cada flor
}
