
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//function checkSpase() {
//    
//    if (numUser === null) {
//        alert("Отменено!");
//    }
//    else {
//        
//    }
//}

function game() {
    
    let num = random(1, 100)
    console.log(num)
    alert("Угадайте число")
    let numUser = prompt("Введите своё число.")
    //checkSpase()
    while (numUser != num) {
        if (numUser < num) {
            alert("Число больше.")
             numUser = prompt("Введите своё число.")
            //checkSpase()
        }
        else if (numUser > num) {
            alert("Число меньше.")
            numUser = prompt("Введите своё число.")
            //checkSpase()
        }
        else if (numUser == null) {
        alert("Отменено!");
        break
        }
    }
    alert("Вы угадали!")
}
