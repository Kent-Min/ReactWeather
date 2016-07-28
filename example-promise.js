// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
//
//
//
//
// }
//
//
// getTempCallback('Philadelphia', function (err,temp){
//   if (err) {
//     console.log('err',err);
//
//   }else{
//     console.log('success', temp)
//   }
//
//
// }
// );
//
//
//
// function getTempPromise(location) {
//   return new Promise(function (resolve, reject){
//     setTimeout (function () {
//       resolve(79);
//       reject('city not found');
//     }, 1000);
//
// });
// }
//
//
// getTempPromise('Philadenlphia').then(function (temp){
//   console.log('promise success', temp);
// },function (err) {
//   console.log('promise error',error);
// })



//challenge area
function addPromise (a,b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number'){
      resolve(a + b);
    }else {
      reject('not a valid number');
    }
  });
}


addPromise('kent', 3).then(function (sum){
  console.log('success',sum);
}, function (err){
  console.log('error',err);
});


addPromise(5, 3).then(function (sum){
  console.log('success',sum);
},function (err){
  console.log('error',error);
});
