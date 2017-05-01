// new Binding
var Animal = function(color, name, type) {
  // this = {}
  this.color = color;
  this.name = name;
  this.type = type;
};

var zebra = new Animal('black and white', 'Zorro', 'zebra');
console.log(zebra);

// window Binding
var sayAge = function() {
  console.log(this.age);
}

var me = {
  age: 25
};

// sayAge.call(me);
sayAge();
// window.age = 25;
// sayAge();
