"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logging(message) {
    return function (constructor) {
        console.log(message);
        console.log(constructor);
    };
}
function Component(template, selector) {
    return function (constructor) {
        return class extends constructor {
            constructor(...args) {
                super(...args);
                const mountedElement = document.querySelector(selector);
                const instance = new constructor();
                if (mountedElement) {
                    mountedElement.innerHTML = template;
                    mountedElement.querySelector('h1').textContent = instance.name;
                }
            }
        };
    };
}
function PropertyLogging(target, propetyKey) {
    console.log('key');
    console.log(target);
    console.log(propetyKey);
}
function MethodLogging(target, propetyKey, descriptor) {
    console.log('method');
    console.log(target);
    console.log(propetyKey);
    console.log(descriptor);
}
function ParameterLogging(target, propetyKey, parameterIndex) {
    console.log('parameter');
    console.log(target);
    console.log(propetyKey);
    console.log(parameterIndex);
}
let User = class User {
    constructor(age) {
        this.age = age;
        this.name = 'Quill';
        console.log('aaa');
    }
    greeting(message) {
        console.log(message);
    }
};
User.name2 = 'Quill';
__decorate([
    MethodLogging,
    __param(0, ParameterLogging)
], User.prototype, "greeting", null);
__decorate([
    PropertyLogging
], User, "name2", void 0);
User = __decorate([
    Component('<h1>{{name}}</h1>', '#app'),
    Logging('Logging user')
], User);
const user1 = new User(32);
