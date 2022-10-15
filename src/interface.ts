interface addFunc {
  (num1: number, num2: number): number;
}

let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
  return n1 + n2;
}

interface Nameable {
  name: string;
  nickName?: string;
}
const nameable: Nameable = {
  name: 'aai'
}
interface Human extends Nameable {
  age: number;
  greeting(message: string): void;
}

const human: Human = {
  name: 'Quill',
  age: 38,
  greeting(message: string) {
    console.log(message);
  }
}

class Developer implements Human {
  constructor(public name: string, public age: number, public experience: number) {}
  greeting(message: string = 'hello'): void {
    console.log(message);
  }
}

const user = new Developer('Quill', 38, 3);
