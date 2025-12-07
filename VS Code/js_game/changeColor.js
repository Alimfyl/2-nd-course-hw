const body = document.querySelector('.background');

// Функция для генерации случайного шестнадцатеричного цвета
function generateRandomHexColor() {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    while (color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
}

// Использование оператора опциональной цепочки (?.) для безопасного добавления обработчика
document.getElementById('changeColorButton')?.addEventListener('click', function () {
    const newColor = generateRandomHexColor();
    body.style.background = newColor;
});