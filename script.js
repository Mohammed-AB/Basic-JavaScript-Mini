const logger = () => {
  let message = 'hi';
  console.log(message);
};

const looper = () => {
  const message = 'I love JS!';
  for (var i = 0; i < 10; i++) {
    console.log(message);
  }
};

const greet = (name) => {
  let greeting = 'Hello ${name}';
  console.log(greeting);
};
name
let yourName = 'Mohammed';

logger();
looper();
greet(yourName);
