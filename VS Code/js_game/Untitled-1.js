/**
 * Игра «Камень, ножницы, бумага»
 * Игра против компьютера с использованием prompt() и alert().
 */

function playGame() {
    // 1. Возможные варианты игры
    const options = ["камень", "ножницы", "бумага"];

    // --- БЛОК ПОЛЬЗОВАТЕЛЬСКОГО ВВОДА ---

    // Запрашиваем выбор пользователя
    let userInput = prompt("Введите свой выбор: камень, ножницы или бумага");

    // Обрабатываем ввод: приводим к нижнему регистру и удаляем пробелы
    if (userInput === null) {
        alert("Игра отменена.");
        return; // Прерываем игру, если пользователь нажал Отмена
    }

    const userChoice = userInput.trim().toLowerCase();

    // Проверяем корректность ввода
    if (!options.includes(userChoice)) {
        alert("Некорректный ввод. Пожалуйста, введите 'камень', 'ножницы' или 'бумага'.");
        return; // Прерываем игру при неверном вводе
    }

    // --- БЛОК КОМПЬЮТЕРНОГО ВЫБОРА ---

    // Генерируем случайный индекс от 0 до 2
    const randomIndex = Math.floor(Math.random() * options.length);
    // Выбираем вариант компьютера из массива
    const computerChoice = options[randomIndex];

    // --- БЛОК ОПРЕДЕЛЕНИЯ ПОБЕДИТЕЛЯ ---

    let resultMessage = `Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\n\n`;
    let winner = "";

    if (userChoice === computerChoice) {
        winner = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        winner = "Вы победили!";
    } else {
        winner = "Компьютер победил!";
    }

    // --- БЛОК ВЫВОДА РЕЗУЛЬТАТА ---

    alert(resultMessage + winner);
}