var person1 = {
  name: 'Bob',
  age: 20,
};

var person2 = {
  name: 'John',
  age: 33,
};

var person3 = {
  name: 'Paul',
  age: 40,
};

var list = [person1, person2, person3];

for (const person of list) {
  console.log(person);
}
