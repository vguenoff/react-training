// Implicit binding
// Explisit binding
// new Binding
// window binding

// Where was this function invoked

// const sayName = name => console.log(`Hello ${name}`);
// sayName('Vassil');

// const me = {
//   name: 'Vassil',
//   age: '30',
//   sayName() {
//     console.log(this);
//     console.log(`Hi ${this.name}`);
//   }
// };

// console.log(me.name);
// console.log(me.age);
// console.log(me.sayName());

// const sayNameMixin = function(obj) {
//   obj.sayName = function() {
//     console.log(this.name);
//   };
// };

// const me = {
//   name: 'Vassil',
//   age: 30
// };

// const you = {
//   name: 'Vlad',
//   age: 29
// };

// sayNameMixin(me);
// sayNameMixin(you);

// me.sayName(); // Vassil
// you.sayName(); // Vlad

var Person = function(name, age) {
  return {
    name: name,
    age: age,
    sayName: function() {
      console.log('Hi ' + this.name);
    },
    mother: {
      name: 'Stacey',
      sayName: function() {
        console.log('Mother ' + this.name);
      }
    }
  };
};

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.mother = {
//       name: 'Stacey',
//       sayName() {
//         console.log(`Hi ${this.name}`);
//       }
//     };
//   }
//   sayName() {
//     console.log(`Hi ${this.name}`);
//   }
// }

const mark = new Person('Mark', '33');
mark.sayName();
mark.mother.sayName();
