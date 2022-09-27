const languages = ['html', 'css', 'javascript', 'react', 'node', 'postgres'];
console.log(languages);

languages.firstElement = 'html';
console.log('the first element of the array is', languages.firstElement);

languages.thirdElement = 'javascript';
console.log('the 3rd element of the array is', languages.thirdElement);

console.log('The length of the array is', languages.length);

languages.lastElement = 'postgres';
console.log('The last element of the array is', languages.lastElement);
