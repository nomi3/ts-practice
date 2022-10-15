"use strict";
let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
const person = {
    name: 'Jack',
    age: 21
};
const fruits = ['apple', 'banana'];
const book = ['bussiness', 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
let anything = true;
let unionType = 10;
let unionTypes = [10, 'hello'];
const apple = 'apple';
let clothSize = 'large';
function add(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    console.log('hello!!');
}
const anotherAdd = add;
const doubleNumber = num => num * 2;
