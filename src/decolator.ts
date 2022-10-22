function Logging(constructor: Function) {
  console.log('Loggg');
  console.log(constructor);
}

@Logging
class User {
  name = 'Quill';
  constructor() {
    console.log('aaa');
  }
}

const user1 = new User();