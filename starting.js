const name = 'Max';
let age = 29;
const hasHobbies = true;

age = 30;

const summarizeUser = function (userName, userAge, userHasHobby) => {
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