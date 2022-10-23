function Logging(message: string) {
  return function (constructor: Function) {
    console.log(message);
    console.log(constructor);
  }
}

function Component(template: string, selector: string) {
  return function<T extends {new(...args: any[]): {name: string}}>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        const mountedElement = document.querySelector(selector);
        const instance = new constructor();
        if (mountedElement) {
          mountedElement.innerHTML = template;
          mountedElement.querySelector('h1')!.textContent = instance.name;
        }
      }
    }
  }
}

function PropertyLogging(target: any, propetyKey: string) {
  console.log('key');
  console.log(target);
  console.log(propetyKey);

}

function MethodLogging(target: any, propetyKey: string, descriptor: PropertyDescriptor) {
  console.log('method');
  console.log(target);
  console.log(propetyKey);
  console.log(descriptor);

}

function ParameterLogging(target: any, propetyKey: string, parameterIndex: number) {
  console.log('parameter');
  console.log(target);
  console.log(propetyKey);
  console.log(parameterIndex);

}

@Component('<h1>{{name}}</h1>', '#app')
@Logging('Logging user')
class User {
  @PropertyLogging
  static name2 = 'Quill';
  name = 'Quill';
  constructor(public age: number) {
    console.log('aaa');
  }
  @MethodLogging
  greeting(@ParameterLogging message: string) {
    console.log(message);
  }
}

const user1 = new User(32);