const prompt = require('prompt-sync')();

let number = prompt('Please enter a number: ');

if (typeof (number++) == "number")
    number--;
    const remainder = number%2;
    switch (remainder) {
        case 0:
            console.log('Четное');
            break;
        case 1:
            console.log('Нечетное');
            break
        default:
            console.log('Упс, кажется, вы ошиблись');
    }
