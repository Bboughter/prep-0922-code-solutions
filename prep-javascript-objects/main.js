const person = {
  firstName: 'Michael',
  lastName: 'Wood',
  hobby: 'playing baseball'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'chef';
console.log('The person\'s current job is:', person.job);

person.previousJob = 'skateboarder';
console.log("The person's previous job is:", person.previousJob);

console.log(person);
