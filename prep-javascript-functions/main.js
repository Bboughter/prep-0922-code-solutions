function addTwoNumbers(x, y) {
  return x + y;
}

var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise:', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return (hours * 60);
}
var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise:', convertHoursToMinutesResult);

function getGreeting(name) {
  return name;
}
var getGreetingResult = getGreeting('Hello World!');
console.log('getGreeting exercise:' + '"' + getGreetingResult + '"');

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * num2;
}
var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Exercise:', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 exercise:', multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers exercise:', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * 3.14159265359 * radius;
}
var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCirleCircumfernce exercise:', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var getFullNameResult = getFullName('Juan', 'Ramirez');
console.log('getFullName exercise:', getFullNameResult);

function cube(number) {
  return number * number * number;
}
var cubeResult = cube(5);
console.log('cube excercise:', cubeResult);
