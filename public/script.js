
function toggleActive(button) {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(btn => {
        if (btn !== button) {
            btn.classList.remove('active');
        }
    });
    button.classList.add('active');

    const images = document.querySelectorAll('.unusual-candles');
    const frames = document.querySelectorAll('.unusual-candles.frames');

    if (button.textContent === "Вазы и кашпо") {
        images.forEach(img => img.style.display = 'block');
        frames.forEach(frame => frame.style.display = 'none');
        currentIndexImagesVases = currentIndexImages = 0; // Сброс индексов при смене категории
    } else if (button.textContent === "Фоторамки") {
        images.forEach(img => img.style.display = 'none');
        frames.forEach(frame => frame.style.display = 'block');
        currentIndexImagesVases = currentIndexImages = 0; // Сброс индексов при смене категории
    }
}
document.addEventListener("DOMContentLoaded", function () {
    // Получаем ссылки на изображение и стрелки
    let currentImage = document.querySelector('.current-image');
    let currentImageVases = document.querySelector('.current-image.frames');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    
    // Список изображений для ваз и кашпо
    const images = [
        "./assets/png/picture1.png",
        "./assets/png/picture2.png",
        "./assets/png/picture3.png",
        "./assets/png/picture4.png",
        "./assets/png/picture5.png",
        "./assets/png/picture6.png"
    ];

    // Список изображений для фоторамок
    const images_vases = [
        "./assets/png/picture7.png",
        "./assets/png/picture8.png",
        "./assets/png/picture9.png",
        "./assets/png/picture10.png",
        "./assets/png/picture11.png",
        "./assets/png/picture12.png"
    ];

    let currentIndexImages = 0; // Индекс текущего изображения для ваз и кашпо
    let currentIndexImagesVases = 0; // Индекс текущего изображения для фоторамок

    // Функция для переключения на предыдущее изображение
function showPrevImage(button) {
    if (button.textContent === "Вазы и кашпо") {
        currentIndexImages = (currentIndexImages === 0) ? images.length - 1 : currentIndexImages - 1;
        currentImage.src = images[currentIndexImages];
    } else if (button.textContent === "Фоторамки") {
        currentIndexImagesVases = (currentIndexImagesVases === 0) ? images_vases.length - 1 : currentIndexImagesVases - 1;
        currentImageVases.src = images_vases[currentIndexImagesVases];
    }
}

// Функция для переключения на следующее изображение
function showNextImage(button) {
    if (button.textContent === "Вазы и кашпо") {
        currentIndexImages = (currentIndexImages === images.length - 1) ? 0 : currentIndexImages + 1;
        currentImage.src = images[currentIndexImages];
    } else if (button.textContent === "Фоторамки") {
        currentIndexImagesVases = (currentIndexImagesVases === images_vases.length - 1) ? 0 : currentIndexImagesVases + 1;
        currentImageVases.src = images_vases[currentIndexImagesVases];
    }
}

    // Функция для обновления ссылки на текущее изображение
    function updateCurrentImageSrc(button) {
        if (button.textContent === "Вазы и кашпо") {
            currentImage.src = images[currentIndexImages];
        } else if (button.textContent === "Фоторамки") {
            currentImageVases.src = images_vases[currentIndexImagesVases];
        }
    }

    // Обработчики событий для стрелок
    prevArrow.addEventListener('click', () => {
        showPrevImage(document.querySelector('.button.active'));
        updateCurrentImageSrc(document.querySelector('.button.active'));
    });
    nextArrow.addEventListener('click', () => {
        showNextImage(document.querySelector('.button.active'));
        updateCurrentImageSrc(document.querySelector('.button.active'));
    });
    
});
        
    