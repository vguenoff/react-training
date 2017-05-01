// var stacey = {
//   name: 'Stacey',
//   age: 34,
//   sayName: function() {
//     console.log('My name is ' + this.name + '.');
//   }
// };

var sayName = function(lang1, lagn2, lang3) {
  console.log('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lagn2 + ' and ' + lang3 + '.');
};

var stacey = {
  name: 'Stacey',
  age: 34,
};

var languages = ['JavaScript', 'Ruby', 'Python'];

// 'call' immediately invokes with arguments one by one
sayName.call(stacey, languages[0], languages[1], languages[2]);
// works like 'call', but returns a new function instead of invoking the original function
var sayNameStacy = sayName.bind(stacey, languages[0], languages[1], languages[2]);
sayNameStacy();
// 'apply' immediately invokes with arguments as an array
sayName.apply(stacey, languages);
