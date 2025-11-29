function gameRev() {
    let str = prompt('Введите текст');
    if (str === null) {
        alert('Игра отменена!');

    }
    function rev() {
        str = str.split('');
        str.reverse();
        str = str.join('');
    }
    rev(str);
    alert(str);
}