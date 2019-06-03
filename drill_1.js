'use strict';

function getYearOfBirth(age){
    return 2019-age;
}

function createGreeting(name,age){
  let yob = getYearOfBirth(age);

  return `Hi, my name is ${name} and I\'m ${age} years old.
  I was born in ${yob}.`;
}

console.log(createGreeting('hi',20));

