function rn(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateExample(lvl) {
    const operatorsByLevel = {
        0: ['+'],
        1: ['-'],
        2: ['*'],
        3: ['/']
    };

    const availableOps = operatorsByLevel[lvl] || operatorsByLevel[0]; 
    const selectedOperator = availableOps[Math.floor(Math.random() * availableOps.length)];

    let num1 = rn(1, 20);
    let num2 = rn(1, 20);

    if (selectedOperator === '/') {
        while (num2 === 0 || num1 % num2 !== 0) {
            num1 = rn(1, 20);
            num2 = rn(1, 20);
        }
    }

    const expression = `${num1} ${selectedOperator} ${num2}`;
  
    const answer = eval(expression); 

    return { expression, answer };
}


function gameArithmetic() {
    
    const difficultyLevel = rn(0, 3);
    const example = generateExample(difficultyLevel);
    
    
    let userAnswer;
    do {
        
        userAnswer = prompt(`Решите пример: ${example.expression}`);

        
        if (userAnswer === null) {
            alert('Игра отменена.');
            return; 
        }

        
        if (+userAnswer !== example.answer) {
            alert('Неверно! Попробуйте еще раз.');
        }

    } while (+userAnswer !== example.answer); 
    
    alert('Верно!');
    
}
