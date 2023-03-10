var person = {
  age: 14,
  name: 'Lucas',
};

// função pura
function getRemainingYearsToMajorty(person) {
  return 18 - person.age;
}

//função impura
function increasePersonAge(person) {
  person.age = person.age + 1;
}

increasePersonAge(person);
var remainingYears = getRemainingYearsToMajorty(person);

console.log(remainingYears);
