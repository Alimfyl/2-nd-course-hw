
        function rn(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
    function gameArithmetic (){
    function generate_example(lvl) {

  const operator = {
    0: ['+'],
    1: ['-'],
    2: ['*'],
    3: ['/']
  };

    const availableOps = operator[lvl] || operator[1]; 
    const selectedOperator = availableOps[Math.floor(Math.random() * availableOps.length)];

    let num1 = rn(1,20);
    let num2 = rn(1,20);

    if (selectedOperator === '/') {
        while(num2 === 0){
            num2 = rn(1,20);
        }
    }
    if (selectedOperator === '/'){
        while(num1 % num2 != 0){
            num1 = rn(1,20);
        }
    }

  return `${num1} ${selectedOperator} ${num2}`;
}

let rnNum = rn(0,3)
let result1 = generate_example(rnNum)
let result2 = eval(result1)
answer()
console.log(result2);

console.log(result1);

function answer(){
alert(`Решите пример ${result1}`)
userAnswer = prompt('Введите ответ');
while(userAnswer != result2) {
if (result2 != userAnswer){
    alert('Неверно!')
    userAnswer = prompt('Введите ответ');
}
else{
    alert('Верно!')
}
}
alert('Верно!')
}
}