'use strict';


function yearOfBirth(age){
    if(age<0){
        throw new Error("Age can not be negative");
    }
    return 2019-age;
}
/* 
function getYearOfBirth(age){
    return 2019-age;
}
 */


function createGreeting(name,age){
  if(name === undefined || age===undefined){
    throw new Error('Arguments not valid.');
  }
  if(typeof name !=='string' || typeof age !== 'number'){
    throw new TypeError('Arguments are of wrong type.');
  }
  if(isNaN(age)){
    throw new Error('Age is NaN.');
  }

  let yob = yearOfBirth(age);

  return `Hi, my name is ${name} and I\'m ${age} years old.
  I was born in ${yob}.`;
}

try{
    
    const greeting1=createGreeting('Arpan', NaN);
}
catch(e){
    console.log(e.message);
}


