function game () {
function random ( min , max ) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } 
    let num = random ( 1 , 100 )
    alert ("Угадайте число")
    let numUser = prompt ("Введите своё число.")
    while( numUser != num ) {
        if(numUser < num) {
        alert ("Число больше.")
       numUser = prompt ("Введите своё число.")
    }
        else if  (numUser > num) ;{
        alert ("Число меньше.")
        numUser = prompt ("Введите своё число.")
    }  
         (numUser === num) ;{
        alert ("Вы угадали!")
        break;
        }
    }
    }
