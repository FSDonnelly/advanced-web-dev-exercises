let person = {
  firstName: "Ellie",
  sayHi: function () {
    return "Hi " + this.firstName;
  },
  determineContext: function () {
    return this === person;
  },
  dog: {
    sayHello: function () {
      return `Hello ${this.firstName}`;
    },
    determineContext: function () {
      return this === person;
    },
  },
};
undefined;
console.log(person.sayHi());
console.log(person.dog.sayHello());
console.log(person.dog.sayHello.call(person));
// ("Hi Ellie");
console.log(person.determineContext());
// true;

firstFunction = () => {
  console.log("Hello");
};

console.log(firstFunction);
firstFunction();

let colt = {
  firstName: "Colt",
  sayHi: function () {
    return `Hi ${this.firstName}`;
  },
};

let elie = {
  firstName: "Elie",
  // sayHi: function () {
  //   return `Hi ${this.firstName}`;
  // },
};

console.log(colt.sayHi());
// console.log(elie.sayHi());
console.log(colt.sayHi.call(elie));
