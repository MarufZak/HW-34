do {
    var a = prompt('Введите свое имя');
} while (!isNaN(a));

do {
    var b = prompt('Введите свой год рождения');
} while (isNaN(b));

do {
    var c = prompt('Введите нынешний год');
} while (isNaN(c));

function year(b , c) {
    let answer = c - b;
    return answer
}

console.log(a + " , вам " + year(b , c) + " лет");

