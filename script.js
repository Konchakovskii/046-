'use strict';

//Способы вызова функции
//1

// function showThis() {
//     console.log(this);
// }

// showThis(); //ссылка на глобальный объект window (не работает с use strict - undefined)


// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a  + b;
//     }

//     console.log(sum());
// }

// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();


// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log("Hello! " + this.name);
//     };
// }
// const igor = new User('Igor', 33);

// igor.hello();

// igor.nationality = "Russian";

// delete igor.human;
// console.log(igor);


// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + ' ' + surname);
// }

// const user = {
//     name: 'John',
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     console.log(this);
//     return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));
// // console.log(double(13));


// 1) Обычная функция: this = window, но если use strict - undefined
// 2) Контект у методов объекта - сам объект.
// 3) This в конструкторах и классах - это новый экземпляр объекта.
// 4) Ручная привязка this: call, apply, bind.

const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     console.log(this);
//     this.style.backgroundColor = "red";
// });

// btn.addEventListener('click', (e) => {
//     console.log(this);
//     e.target.style.backgroundColor = "red";
// });

// btn.addEventListener('click', () => {
//     console.log(this);
//     this.style.backgroundColor = "red";
// });

// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this.num);
//         };
//         say();
//     }
// };
// obj.sayNumber();


// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = function() {
//             console.log(this.num);
//         };
//         say();
//     }
// };
// obj.sayNumber();

const double = a => a * 2;

console.log(double(4));
