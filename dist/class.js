"use strict";
class Person {
    constructor(initName) {
        this.name = initName;
    }
    greeting() {
        console.log(`Hello I am ${this.name}`);
    }
}
const quill = new Person('Quill');
quill.greeting();
const anotherQuill = {
    name: 'anotherQuill',
    anotherGreeting: quill.greeting
};
anotherQuill.anotherGreeting();
