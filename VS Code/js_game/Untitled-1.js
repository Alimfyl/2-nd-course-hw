

function playGame() {
    
    const options = ["камень", "ножницы", "бумага"];

    let userInput = prompt("Введите свой выбор: камень, ножницы или бумага");

    if (userInput === null) {
        alert("Игра отменена.");
        return; 
    }

    const userChoice = userInput.trim().toLowerCase();

    if (!options.includes(userChoice)) {
        alert("Некорректный ввод. Пожалуйста, введите 'камень', 'ножницы' или 'бумага'.");
        return; 
    }

    const randomIndex = Math.floor(Math.random() * options.length);

    const computerChoice = options[randomIndex];

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

    alert(resultMessage + winner);
}