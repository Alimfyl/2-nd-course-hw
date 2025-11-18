
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function game() {
    
    let num = random(1, 100)
    alert("Угадайте число")

    let input;
    let attempts = 0;
    

    do {
        let inputString = prompt('Введите своё число');
        
        
        if (inputString === null) {
            alert('Игра отменена!');
            return;
        }

        input = +inputString;
        attempts++;

        if (isNaN(input)) {
            alert('Это не число. Попробуйте еще раз.');
        } else if (input !== num) {
            alert(num > input ? 'Число больше.' : 'Число меньше.');
        }
        
    } while (input !== num || isNaN(input));

    alert(`Вы угадали!`);
}