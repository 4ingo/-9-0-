// 1) Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'.
//    Проверьте работу скрипта при a, равном 'test', 'тест', 3 Решить задачу через if-else.

// let a='test';
// if(a==='test'){
//     console.log('Верно')
// }else{
//     console.log('Неверно')
// }

// 3) С помощью функции promt, спросите у пользователя, когда он собирается прийти в магазин? Если он прийдет в промежуток с 23 вечера до 9 утра, сообщить,
//     'В это время мы не работаем', если он прийдет с 9 до 12, сообщить 'Будем рады Вас видеть', если прийдет с 12 до 13, сообщить, что обед. А если с 13 до 23 вечера,
//     то сообщить, что так же рады видеть.
//     Решить задачу через switch case

// Я решил через  if else
let hour=prompt("Когда вы придете в магазин ");
 if (hour>=23 && hour<=9){
     console.log('В это время мы не работаем')
 }else if (hour>9 && hour<=12){
     console.log('Будем рады Вас видеть')
 }else if(hour>12 && hour<13){
     console.log('обед')
 }else if(hour<13 && hour<=23){
     console.log('Будем рады Вас видеть')
 }


//
// 4) Создайте переменные m и n. В m поместите произвольное числовое значение.
//     Напишите оператор ветвления if так, чтобы если m было больше 50,
//     то в переменную n помещалось слово «большое», иначе — слово «маленькое».
// Решить задачу через if-else.
// let m=43;
// let n;
// if (m>50){
//     console.log(n+'Большое')
// }else{
//     console.log(n+'Маленькое')
// }

// 5)Если переменная a равна нулю или равна двум, то прибавьте к ней 7,
//     иначе поделите ее на 10. Выведите новое значение переменной в консоль.
//     Проверьте работу скрипта при a, равном 5, 0, -3, 2.
// // let a =5;
// // let a =0;
// // let a =-3;
// let a =2;
// if(a===0 || a===2){
//     console.log(a+7);
// }else{
//     console.log(a/10);
// }

// 6) с  помощью confirm, спросите у пользователя, есть ли ему 18? если есть, покажите в консоли 'есть', если нет - 'нет'.
// let question=confirm('Вам есть 18?');
// if(question){
//     console.log('Есть')
// }else{
//     console.log('Нет')
// }

// 7)Если переменная a равна или меньше 1, а переменная b больше или равна 3,
//     то выведите сумму этих переменных в консоль, иначе выведите их разность (результат вычитания).
// Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5 соответственно.

// // let a=1;
// // let a=6;
// let a=3;
// // let b=3;
// // let b=6;
// let b=5;
// if(a<=1 && b>=3){
//     let c=a+b;
//     console.log(a+" + "+b+" = "+c)
// }else {
//     let d=a-b;
//     console.log(a+" - "+b+" = "+d)
// }


// 8) Паше 17 лет. Пока он еще ребенок, но через год станет полноценной ячейкой общества. Напишите скрипт, который бы
// показывал, что пока Паше 17 лет, он - ребенок, но, когда станет 18 - он взрослый. Возраст Паши поместите в переменную.
// let a =17;
// // let a=19;
// if(a>0 && a<18){
//     console.log("Паше "+a+". Он  ребенок ");
// }else{
//     console.log("Паше "+a+". Он взрослый");
// }

// 9) Создать переменную seasons, которая может принимать строку.
//     Если она имеет значение 'декабрь', 'январь' или 'февраль', то в консоль вывести сообщение 'зима',
//     если имеет значение 'апрель', 'март' или 'май' – 'весна',
//     если имеет значение 'июнь', 'июль' или 'август' - 'лето',
//     имеет значение 'сентябрь', 'октябрь' или 'ноябрь' - 'осень'.
// let saesons=prompt("Напишите месяц года :");
// if(saesons==='Декабрь' || saesons==='Январь' || saesons==='Февраль'){
//     alert('Зима')
// }else if (saesons=== 'Март'|| saesons==='Апрель' || saesons==='Май') {
//     alert('Весна')
// }
// else if (saesons=== 'Июнь'|| saesons==='Июль' || saesons==='Август'){
//     alert('Лето')
// }else if (saesons=== 'Сентябрь'|| saesons==='Октябрь' || saesons==='Ноябрь'){
//     alert('Осень')
// }else{
//     alert('Попробуйте писать правильно')
// }
// let saesons=prompt("Напишите месяц года :");
// switch (saesons) {
//     case "Декабрь":
//         alert('Зима');
//     break;
//     case "Январь":
//         alert('Зима');
//     break;
//     case "Февраль":
//         alert('Зима');
//         break;
//     case "Март":
//         alert('Весна');
//         break;
//     case "Апрел":
//         alert('Весна');
//         break;
//     case "Май":
//         alert('Весна');
//         break;
//     case "Июнь":
//         alert('Лето');
//         break;
//     case "Июль":
//         alert('Лето');
//         break;
//     case "Август":
//         alert('Лето');
//         break;
//     case "Сентябрь":
//         alert('Осень');
//         break;
//     case "Октябрь":
//         alert('Осень');
//         break;
//     case "Ноябрь":
//         alert('Осень');
//         break;
//     default:
//         alert('Такого месяца не существует!!!')
//
// }

// 10) Создать переменную time. Которая может принимать число.
//     Если число равно или больше 0 и меньше или равно 15
// : вывести в консоль "время относится к четверти часа".
//     Если число больше 15 и меньше или равно 30
// : вывести в консоль "время относится к половине часа".
//     Если число больше 30 и меньше или равно 45
// : в консоль вывести "время относится к 3/4 часа".
//     Если число больше 45 и меньше или равно 60
// : в консоль вывести "время относится к целому часу".
//     Если число не подходит по всем условиям
//     : вывести в консоль "неизвестный диапазон".
//     Для решения задачи в условии потребуется логический оператор &&.
// И условие либо if else, либо switch case.

// let time=prompt('Введите число от 0 до 60 :');
// if(time>=0 && time<=15){
//     alert("время относится к четверти часа");
// }else if(time>15 && time<=30){
//     alert("время относится к половине часа")
// }else if(time>30 && time<=60){
//     alert("время относится к целому часу")
// }else{
//     alert("неизвестный диапазон")
// }