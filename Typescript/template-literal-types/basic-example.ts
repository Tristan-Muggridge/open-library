type Greeting = `Hello, ${string}`;

const greet: Greeting = "Hello, world!"; // Valid
const greetError: Greeting = "Hi, world!"; // Error: Type 'Hi, world!' is not assignable to type 'Hello, ${string}'
