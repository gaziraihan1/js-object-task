// Declare an array
let newArray = [2, 4, 5, 6, 7, 8, 9, 33, 54, 66, 88];
let newArr_2 = ['Hello', 'World']
//Check the index of array value
let indexArr = newArray.indexOf(6)
//Join the array
let joinArr = newArr_2.join(' ');
//Delete from the last of array
let popArr = newArray.pop();
//Delete from first of an array
let shiftArr = newArray.shift();
//Add on last of an array
let pushArr = newArray.push(33);
//Slice the chosen index, before end
let sliceArr = newArray.slice(2,5);
//Slice array untill last index reached
let spliceArr = newArray.splice(1,4);
//Add value in the starting
let unshiftArr = newArray.unshift(33);

console.log(popArr);
console.log(shiftArr);
console.log(pushArr);
console.log(sliceArr)
console.log(unshiftArr);
console.log(spliceArr)
console.log(newArr_2);
console.log(joinArr);
console.log(indexArr);
//Reverse method for and string
let newString = 'Hello world';
let reverse = '';
for(const letter of newString) {
    reverse = letter + reverse;
    console.log(letter)
}
console.log(reverse)

//Simple way to reverse the array
//split('') method splice the array with different indexes, reverse('') method reverse the values, join('') join the different indexes to one and added without comma.
console.log(newString.split('').reverse('').join(''))


//Check typeof
let newArr_3 = [3,4,5]
console.log(typeof newArr_3)

//Javascript is a case sensitive language, eg:case matter, if we use Camelcase we can only get that using camelcase.
let fruites = ['mango', 'Banana', 'Jackfruite', 'coconut'];
console.log(fruites.includes('Jackfruite'))