function Logging(message: string) {
  return function (constructor: Function) {
    console.log(message);
    console.log(constructor);
  }
}

@Logging('Logging user')
class User {
  name = 'Quill';
  constructor() {
    console.log('aaa');
  }
}

const user1 = new User();