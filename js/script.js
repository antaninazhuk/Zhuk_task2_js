// Task2_Zhuk_Antanina
// Задание1 
// a = 5;
// b = 1;
// c = 5;
// d = 0;

// Задание 2
// e = 5;
// f = 4;
// x = 6;
// y = 5;

// // Задание 3

// let yearOfChempions = +prompt('Введите год, в котором вы хотите узнать чемпьона?', '');


// // Через if...else

// if (yearOfChempions < 2011) {
//     alert('Статистика еще не велась');
// } else if (yearOfChempions === 2022) {
//     alert('Сезон еще идет');
// } else if (yearOfChempions > 2022) {
//     alert('Все лучшее впереди!');
// } else if (yearOfChempions === 2015 || yearOfChempions === 2017) {
//     alert('Челси');
// } else if (yearOfChempions === 2012 || yearOfChempions === 2014 || yearOfChempions === 2018 || yearOfChempions === 2019 || yearOfChempions === 2021) {
//     alert('Манчестер Сити');
// } else if (yearOfChempions === 2011 || yearOfChempions === 2013) {
//     alert('Манчестер Юнайтед');
// } else if (yearOfChempions === 2020) {
//     alert('Ливерпуль');
// } else if (yearOfChempions === 2016) {
//     alert('Лестер Сити');
// } else alert('Введите год цифрами');

// // Через условный оператор "?"

// (yearOfChempions < 2011) ? alert('Статистика еще не велась'): (yearOfChempions === 2022) ? alert('Сезон еще идет') : (yearOfChempions > 2022) ? alert('Все лучшее впереди!') : (yearOfChempions === 2015 || yearOfChempions === 2017) ? alert('Челси') : (yearOfChempions === 2012 || yearOfChempions === 2014 || yearOfChempions === 2018 || yearOfChempions === 2019 || yearOfChempions === 2021) ? alert('Манчестер Сити') : (yearOfChempions === 2011 || yearOfChempions === 2013) ? alert('Манчестер Юнайтед') : (yearOfChempions === 2020) ? alert('Ливерпуль') : (yearOfChempions === 2016) ? alert('Лестер Сити') : alert('Введите год цифрами');

// // Задание 4

// let userName = prompt('Введите ваш логин', '');

// if (userName === 'Админ') {
//     userPassword = prompt('Введите пароль', '');
//     if (userPassword === 'Я главный') {
//         alert('Здравствуйте');
//     } else if (userPassword === '' || userPassword === null) {
//         alert('Отменено');
//     } else {
//         alert('Неверный пароль');
//     }
// } else if (userName === '' || userName === null) {
//     alert('Отменено');
// } else {
//     alert('Я вас не знаю');
// };

// // // Задание 5

// for (let oddNumber = 7; oddNumber <= 15; oddNumber++) {
//     if (oddNumber === 12) break;
//     if (oddNumber % 2 === 0) continue;
//     alert(oddNumber);
// }
// alert('12. Цикл прерван')

// // // Задание 6
// let j = 0;
// while (j < 5) {
//     console.log(`number ${j}!`);
//     j++;
// }