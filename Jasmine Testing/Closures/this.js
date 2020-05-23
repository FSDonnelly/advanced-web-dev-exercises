let person = {
  firstName: "Ellie",
  sayHi: function () {
    return "Hi " + this.firstName;
  },
  determineContext: function () {
    return this === person;
  },
};
undefined;
console.log(person.sayHi());
// ("Hi Ellie");
console.log(person.determineContext());
// true;
