function changeWeather(weather) {
    const weatherEffect = document.getElementById('weather-effect');
    weatherEffect.className = weather;

    // Clear previous effects
    weatherEffect.innerHTML = '';

    if (weather === 'rainy') {
        createRain();
    } else if (weather === 'snowy') {
        createSnow();
    } else if (weather === 'sunny') {
        createSun();
    }
}

function createRain() {
    const weatherEffect = document.getElementById('weather-effect');
    for (let i = 0; i < 100; i++) {
        const rainDrop = document.createElement('div');
        rainDrop.className = 'rain';
        rainDrop.style.left = `${Math.random() * 100}%`;
        rainDrop.style.animationDuration = `${Math.random() * 0.5 + 0.5}s`;
        weatherEffect.appendChild(rainDrop);
    }
}

function createSnow() {
    const weatherEffect = document.getElementById('weather-effect');
    for (let i = 0; i < 50; i++) {
        const snowFlake = document.createElement('div');
        snowFlake.className = 'snow';
        snowFlake.style.left = `${Math.random() * 100}%`;
        snowFlake.style.animationDuration = `${Math.random() * 5 + 5}s`;
        weatherEffect.appendChild(snowFlake);
    }
}

function createSun() {
    const weatherEffect = document.getElementById('weather-effect');
    const sun = document.createElement('div');
    sun.className = 'sun';
    weatherEffect.appendChild(sun);
}

// Initialize with sunny weather
changeWeather('sunny');