'use strict';


function yearOfBirth(age){
    if(age<0){
        throw new Error("Age can not be negative");
    }
    return 2019-age;
}

function getYearOfBirth(age){
    return 2019-age;
}



function createGreeting(name,age){
  if(name === undefined, age===undefined){
    throw new Error('Arguments not valid');
  }
  
  let yob = yearOfBirth(age);

  return `Hi, my name is ${name} and I\'m ${age} years old.
  I was born in ${yob}.`;
}

try{
    const greeting1=createGreeting('Arpan',23);
}
catch(e){
    console.log(e.message);
}


