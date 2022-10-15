interface Nameable {
  name: string;
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
  greeting(message: string): void {
    console.log(message);
  }
}

const user = new Developer('Quill', 38, 3);
