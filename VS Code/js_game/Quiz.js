function startQuizGame() {
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let score = 0;

    for (let i = 0; i < quiz.length; i++) {
        const currentQuestion = quiz[i];

        let promptText = `${currentQuestion.question}\n\n`;
        promptText += currentQuestion.options.join('\n');

        const userAnswer = prompt(promptText);

        if (userAnswer !== null && userAnswer.trim() !== '') {

            const userChoice = parseInt(userAnswer, 10);


            if (userChoice === currentQuestion.correctAnswer) {
                score++;
                alert('Верно!');
            } else {
                alert('Неверно.');
            }
        } else {
            alert('Ответ пропущен.');
        }
    }

    alert(`Викторина завершена!\nВы ответили правильно на ${score} из ${quiz.length} вопросов.`);
}


