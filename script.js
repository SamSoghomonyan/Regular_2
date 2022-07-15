// 1) Make an array of numbers that are doubles of the first array

// function doubleNumbers(arr) {
//     return arr.map(x => x * 2)
// }
// console.log(doubleNumbers([2, 4, 100]))

// function doubleNumbers(arr) {
//     let newArray = []
//     for (let i = 0; i < arr.length; i++) {
//         newArray.push(arr[i] * 2)
//     }
//     return newArray
// }
// console.log(doubleNumbers([2, 4, 100]))

// function map(array, callBack) {
//     let result = []
//     for (let index = 0; index < array.length; index++) {
//         const value = array[index]
//         // console.log(value)
//         result.push(callBack(value, index, array))
//     }
//     return result
// }
// console.log(map([1, 2, 3, 4], ((value, index, array) => {
//     return value * 2
// })))

// function map(array, callback) {
//     const result = [];
//     const { length } = array;

//     for (let index = 0; index < length; index += 1) {
//         const value = array[index];

//         result[index] = callback(value, index, array);
//     }

//     return result;
// }
// console.log(map([1, 2, 3, 4], ((value, index, array) => {
//     return value * 2
// })))

// 2) Take an array of numbers and make them strings


// function stringItUp(arr) {
//     let newStringArray = arr.map(String)
//     return newStringArray
// }

// console.log(stringItUp([2, 5, 100]));

// function stringItUp(arr) {
//     let stirng = ''
//     for (let i = 0; i < arr.length; i++) {
//         string =
//   }
// }

// console.log(stringItUp([2, 5, 100]));

// 3) Capitalize each of an array of names

// function capitalizeNames(arr) {
//     return arr.map(item => item[0].toUpperCase().concat(item.slice(1).toLowerCase()))

// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
// ["John", "Jacob", "Jingleheimer", "Schmidt"]

//     .toLowerCase() դարցնումա բոլոր տառերը փոքրատառ

// 4) Make an array of strings of the names

// function namesOnly(arr) {
//     return arr.map(item => item.name)
// }

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"];

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix



// function makeStrings(arr) {
//     let matrix = []
//     arr.map(item => {
//         if (item.age >= 80) {
//             matrix.push(item.name + " can go to The Matrix")
//         } else {
//             matrix.push(item.name + " is under age!!")
//         }
//     })
//     return matrix
// }

// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));
// ["Angelina Jolie can go to The Matrix",
//     "Eric Jones is under age!!",
//     "Paris Hilton is under age!!",
//     "Kayne West is under age!!",
//     "Bob Ziroll can go to The Matrix"]



// 6)  If the given input is an array of numbers, return the sum of all the positives ones.If the array is empty or there aren't any positive numbers, return 0.

// function array(arr) {
//     return arr.filter(item => item > 0).reduce((positiveNumber, item) => positiveNumber + item)
// }

// const input = [1, -4, 12, 0, -3, 29, -150];   //   42
// console.log(array(input))


// 7) Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

// function object(obj) {
//     let newArray = []
//     let numbers = obj.map(item => item.age)
//     let max = Math.max(...numbers)
//     let min = Math.min(...numbers)
//     newArray.push(min, max, max - min)
//     return newArray
// }

// const input7 = [
//     {
//         name: 'John',
//         age: 13
//     },
//     {
//         name: 'Mark',
//         age: 56,
//     },
//     {
//         name: 'Rachel',
//         age: 45,
//     },
//     {
//         name: 'Nate',
//         age: 67,
//     },
//     {
//         name: 'Jeniffer',
//         age: 65,
//     }
// ];
// console.log(object(input7))
// Output -> [13, 67, 54];

// 8 )
// Count the occurrences of distinct elements in the given 2D array.The given input is an array,
//     the elements of which are arrays of strings.The result is an object whose
// property names are the values from the arrays and their value is the number of their occurrences.



// function foo(arr) {
//     let arrFlat = arr.flat()
//     const counts = {};
//     const sampleArray = arrFlat;
//     sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; console.log(x) });
//     return counts
// }


// const input8 = [
//     ['a', 'b', 'c'],
//     ['c', 'd', 'f'],
//     ['d', 'f', 'g'],
// ];

// console.log(foo(input8))

// const output8 = {
//     a: 1,
//     b: 1,
//     c: 2,
//     d: 2,
//     f: 2,
//     g: 1,
// }

// 9 

// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

// gtnel trvats array i miji 3rd amenashate krknvox tive;

// function foo(arr) {
//     const counts = {};
//     arr.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; console.log(x) });
//     let newArray = Object.values(counts)
//     console.log(newArray)
//     let output = Math.max(...newArray) / 2
//     let output1 = Math.round(output)
//     return output1

// }
// console.log(foo([2, 2, 1, 1, 1, 2, 2, 2, 2, 2]))


// Input: nums = [3, 2, 3]
// Output: 3

// Input: nums = [2, 2, 1, 1, 1, 2, 2]
// Output: 2

// NOTE if the n / 2 is for example 3.5 you can assume that the majority elements appears not 3.5 times but 4 times


// 10) gtnel trvats array i miji 3rd amenashate krknvox tive;

// function foo(arr) {
//     const counts = {};
//     arr.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; console.log(x) });
//     // console.log(counts)
//     let newArray = Object.values(counts)
//     let sort = newArray.sort((a,b)=>b-a)
//     console.log(sort)
//     let keys = Object.keys(counts)
//     console.log(keys)
//     for(let i = 0 ; i<keys.length ; i++){
//         if(counts[keys[i]]==sort[2]){
//             return counts[keys[i]]
//         }
//     }
// }
// let array = [ 1,1,2,2,2,3,3,3.4,4,4,4,5,5,5,5,5]
// console.log(foo(array))
// let x = [1, 5, 7, 2, 15, 18, 24]
// let c = x.sort((a, b) => a - b);
// console.log(c)


// 11) Given a string s and an array of strings words, determine whether s is a prefix string of words.
//
// A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length.
//
// Return true if s is a prefix string of words, or false otherwise.

// Input: s = "iloveleetcode", words = ["i","love","leetcode","apples"]
// Output: true
// Explanation:
// s can be made by concatenating "i", "love", and "leetcode" together.

// function foo(arr){
//     let number  = []
//     for(let i = 0 ; i<arr.length ; i++){
//         if(Number(arr[i])){
//            number.push(arr[i])
//         }
//     }
//     if(number.length>0){
//         return false
//     }

//     return true
// }
// console.log(foo([ "i", "love",  "leetcode" ]))

// console.log(Number("dsfsdf"))

// խնդրի պահանջը չեմ հասկացել


// 12)
// // 12) Given an array of objects where objects have the following structure return an array of objects also containing
//     a field country, for example if phone number starts with +374 the field country will be Armenia, you can assume that
// first 4characters of phoneNumber represent the country, so you can just query them ,the country codes are given below,
// you will need to make the names uppercase,
// also there may or may not be a field relation which will be a string representing the name of one of the objects in the array
// you will need to replace that string with a reference to that actual object

///
// const phoneCountryCodes = {
//     '+374': 'Armenia',
//     '+375': 'Somali',
//     '+376': 'Russia',
//     '+377': 'Hoktemberyan',
// }

// const arrOfObjects = [

//     {
//         name: 'sarah',
//         age: 32,
//         phoneNumber: '+374000000',
//         relation: 'nelly'
//     },
//     {
//         name: 'nelly',
//         age: 11,
//         phoneNumber: '+3750020000',
//         relation: 'sarah'
//     }
// ];

// const referancetoSarahObject = arrOfObjects[0];
// const referanceToNellyObject =  arrOfObjects[1];

// // You will need to return


// const arrOfObjects = [

//     {
//         name: 'SARAH',
//         age: 32,
//         phoneNumber: '+374000000',
//         country: 'Armenia',
//         relation: referancetoSarahObject,
//     },
//     {
//         name: 'NELLY',
//         age: 11,
//         phoneNumber: '+3750020000',
//         country: 'Somali',
//         relation: referanceToNellyObject,

//     }
// ];

// const arrOfObjects = [

//     {
//         name: 'sarah',
//         age: 32,
//         phoneNumber: '+374000000',
//         relation: 'nelly'
//     },
//     {
//         name: 'nelly',
//         age: 11,
//         phoneNumber: '+3750020000',
//         relation: 'sarah'
//     }
// ];

// const phoneCountryCodes = {
//     '+374': 'Armenia',
//     '+375': 'Somali',
//     '+376': 'Russia',
//     '+377': 'Hoktemberyan',
// }

// function obj(obj1, phon) {
//     let obj2
//     let newArray = []
//     for (let i = 0; i < obj1.length; i++) {
//         obj2 = Object.values(obj1[i].phoneNumber).splice(0,4).join("")
//         newArray.push(obj2)
//     }
//     let name = obj1.map(item=> item.name.toUpperCase())
//     for(let i = 0 ; i<newArray.length ; i++){
//         obj1[i].country = phon[newArray[i]]
//         obj1[i].name = name[i]
//     }
//     return obj1
// }
// console.log(obj(arrOfObjects, phoneCountryCodes))