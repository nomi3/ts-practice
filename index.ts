let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = 'hello';

const person: {
  name: string;
  age: number;
} = {
  name: 'Jack',
  age: 21
};

const fruits: string[] = ['apple', 'banana'];

const book: [string, number, boolean] = ['bussiness', 1500, false];

enum CoffeeSize {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}

let anything: any = true;

let unionType: number | string = 10;
let unionTypes: (number | string)[] = [10, 'hello'];

type ClothSize = 'small' | 'medium' | 'large';

const apple = 'apple';

let clothSize: ClothSize = 'large';

function add(num1: number, num2: number): number {
  return num1 + num2
}

function sayHello(): void {
  console.log('hello!!');
}

const anotherAdd: (n1: number, n2: number) => number = add;

const doubleNumber: (num: number) => number = num => num * 2;