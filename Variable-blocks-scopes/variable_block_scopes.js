{
  // Block scope
  {
    //Nested Block Scope
    // use let, const
  }
}

if (true) {
  // Block Scope
}

for (let i = 1; i <= 10; i++) {
  // Block Scope
}

function sum(a, b) {
  // Function Scope
  var result = a + b;
}

sum(4, 3);

// Scalar values
const answers = 46;
const greetings = 'Hello';
console.log(answers);

//Arrays and Objects
const numbers = [2, 4, 6];
const person = {
  firstName: 'John',
  lastName: 'Johnson',
};
person.firstName = 'Emeka';
console.log(person.firstName);

//Note: use const more often and then let in the case of counter. Avoid using var in modern JavaScript.
