const name = 'Max';
let age = 29;
const hasHobbies = true;

age = 30;


//maneira antiga de fazer função
const summarizeUser = (userName, userAge, userHasHobby) => {
    
    return (
    'Name is ' +
     userName +
      ', age is ' +
     userAge + 
     ' and the user has hobbies ' +
    userHasHobby
     );
};

console.log(summarizeUser(name,age,hasHobbies));

//maneira rápida de fazer função
const add = (a,b) => a + b;

console.log(add(1,2));

//maneira mais rápida ainda de fazer uma função
const addOne = a => a + 1;

console.log(addOne(1));
