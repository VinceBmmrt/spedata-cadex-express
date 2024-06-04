/* eslint-disable */
/*
// Surcharge d'une méthode des tableau

const array = [1, 2, 3];
array.forEach = function () {
  return array[1];
};

console.log(
  array.forEach((value) => { console.log(value); }),
);
*/

/*
// Fonctionnement d'Object.entries
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
const obj = {
  name: 'NiB',
  age: 50,
};

console.log(Object.entries(obj));
*/
/*
// propriétés enumérables... ou pas.
const obj = {
  name: 'Joe',
  toString() {
    return this.name;
  },
};
console.log(String(obj));
console.log(Object.keys(obj));
// toString est énumérable.. ce n'est pas forcément une bonne idée

const obj2 = {
  name: 'Joe',
};

Object.defineProperty(obj2, 'toString', {
  enumerable: false,
  writable: false,
  value: function () {
    return this.name;
  }
});


console.log(String(obj2));
console.log(Object.keys(obj2));
*/

/*
function sumFactory(num){
  //renvoie la function
  return function(num2){
    return num + num2
  }
}

const addTo5 = sumFactory(5) // function(n){return 5 + num}
const addTo15 = sumFactory(15) // function(n){return 15 + num}
console.log(addTo5(2))
console.log(addTo15(6))
*/

function test(){
  const n = Math.random();
  if(n < 0.5){
    throw new Error('random number is too small');
  }
}

function test2(){
  test();
}

function test3(){
  try{
    test2();
  } catch(err){
    console.log(err.message)
  }
}

test3();