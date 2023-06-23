/*------------------------Условие-----------------------------*/
// == и ===
//console.log(Boolean('2rew')) //true
//console.log(Boolean('')) //false
//console.log(Boolean(10)) //true
//console.log(Boolean(0)) //false
// console.log(Boolean(undefined)) //false
// console.log(Boolean(null)) //false
// console.log(typeof(Infinity)) // number
// console.log('5' - 'f') //NaN - неопредленное число
// console.log(typeof(NaN)) // number
// console.log(NaN * 5) //NaN 
// console.log(Boolean(Infinity)) // true
// console.log(Boolean(NaN)) // false
// == и ===
//console.log(5 == 5) // true
//console.log(5 === 5) // true
//console.log('5' == 5) // true -проверяет только значения
//console.log('5' === 5) // false -  проверяет и тип проверяется и значение
// if (5) {

// } else if (4) {

// } else {

// }

/*------------------------Задания-----------------------------*/

//Напишите программу, для вычисления данного выражения y^0.5
// let y = 4;
// if (y > 0) {
//     console.log(Math.sqrt(y)); //console.log(y ** 0.5)
// } else {
//     console.log('число отрицательное')
// }

// /*Дано четырехзначное число. Поменяйте местами наименьшую и наибольшую цифры. 0000*/
// let n = 1234; //должно получиться 4231
// let len = n / 1000; //определяем кол-во знаков

// //console.log(len)
// //console.log(Math.max(1, 2, 3, 4))
// //console.log(Math.min(1, 2, 3, 4))

// if (9 >= len >= 1) {
//     n4 = n % 10; //4 -номер цифры 
//     //console.log(n4)
//     n3 = (n % 100 - n4) / 10; //3 -номер цифры 
//     //console.log(n3);
//     n2 = (n % 1000 - n3 * 10 - n4) / 100; //2 -номер цифры 
//     //console.log(n2);
//     n1 = (n % 10000 - n2 * 100 - n3 * 10 - n4) / 1000; //1 -номер цифры 
//     //console.log(n1);
//     max = Math.max(n1, n2, n3, n4)
//     min = Math.min(n1, n2, n3, n4)

//     if (max === n4) {
//         if (min === n1) {
//             console.log('yes', n4 * 1000 + n2 * 100 + n3 * 10 + n1);
//         } else if (min === n2) { // n = 2134 -> 2431
//             console.log('yes', n1 * 1000 + n4 * 100 + n3 * 10 + n2);
//         } else if (min === n3) { // n = 2314 -> 2341
//             console.log('yes', n1 * 1000 + n2 * 100 + n4 * 10 + n3);
//         }

//     } else if (max === n3) {
//         {
//             if (min === n1) { // n = 1243 -> 4213
//                 console.log('yes', n3 * 1000 + n2 * 100 + n1 * 10 + n4);
//             } else if (min === n2) { // n = 2143 -> 2413
//                 console.log('yes', n1 * 1000 + n3 * 100 + n2 * 10 + n4);
//             } else if (min === n4) { // n = 2341 -> 2314
//                 console.log('yes', n1 * 1000 + n2 * 100 + n4 * 10 + n3);
//             }
//         }
//     }
// } else {
//     console.log('no')
// }

/*-----------------------------------------*/
/*Дано четырехзначное число. Поменяйте местами наименьшую и наибольшую цифры. 0000*/
let n = 1234; //должно получиться 1234
n = String(n);
// console.log(n.slice(1, 3)) // 3- end не включительно
// console.log(n.slice(1)) //  end- До последнего элемента
let len = n.length; //определяем кол-во знаков
//console.log(len)
if (4 === len) {
    max = Math.max(n[0], n[1], n[2], n[3]); //0
    index_max = n.indexOf(max)
    min = Math.min(n[0], n[1], n[2], n[3]);
    index_min = n.indexOf(min)
    result = n[index_max] + n[index_max - 1] + n[index_max - 2] + n[index_min];
    // for (i in n) { // перебираем индексы в строка(числе) 
    //     if (i == max) {
    //         console.log(i);
    //     } else if (i == min) {
    //         console.log(i)
    //     } else {
    //         console.log(i)
    //     }
    //}
    //console.log(result);
    //console.log(n.indexOf(String));
} else {
    console.log('no')
}