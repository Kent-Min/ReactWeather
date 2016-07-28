var names =  ['kent', 'kent2', 'kent3'];
//
// names.forEach (function (name) {
//
//   console.log('forEach',name);
//
//
// });
//
//
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
//
// });
//
//
// names.forEach((name1) => console.log(name1));
//

// var returnMe = (name) => name + '!';
//
// console.log(returnMe('Kent'));

// var person = {
//   name : 'Kent',
//   greet : function () {
//     names.forEach((name) => {
//       console.log(this.name + ' say hi to ' + name);
//     });
//   }
// }
//
// person.greet();

//
//
//
// function add (a, b) {
//   return a+b;
// }
//
// console.log(add(1,3));
// console.log(add(9,0));
//




var addStatement = (a, b) => {
  return a + b;
}



console.log(addStatement(1,3));



var addExpression = (a,b) => a+b;


console.log(addExpression(3,5));
