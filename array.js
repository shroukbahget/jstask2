// problem1
// function leftMostDigit(num) {
//     let numString = num.toString();

//     return numString.charAt(0);
//   }
//   console.log(leftMostDigit(432));  
//   console.log(leftMostDigit(12)); 

// problem2
// function countNumbers(arr) {
//   let positiveCount = 0;
//   let negativeCount = 0;
//   let evenCount = 0;
//   let oddCount = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       positiveCount++;
//       if (arr[i] % 2 === 0) {
//         evenCount++;
//       } else {
//         oddCount++;
//       }
//     } else if (arr[i] < 0) {
//       negativeCount++;
//       if (arr[i] % 2 === 0) {
//         evenCount++;
//       } else {
//         oddCount++;
//       }
//     } else {
//       evenCount++;
//     }
//   }

//   console.log("Positive count:", positiveCount);
//   console.log("Negative count:", negativeCount);
//   console.log("Even count:", evenCount);
//   console.log("Odd count:", oddCount);
// }
// const numbers = [5, 7, -2, 0, 4, -8, -3, 6];
// countNumbers(numbers);
// const number = [0,2,4,6];
// countNumbers(number);

// problem3
// function filterIntegers(arr) {
//   return arr.filter(item => Number.isInteger(item));
// }
// const mixedArray = [1, NaN, 2, 'a', 'aba'];
// const integersOnly = filterIntegers(mixedArray);
// console.log(integersOnly); 
// const mixedArray2 = ['Ahmed', 12, 'Mohamed', 34, 'Mahmoud', 12, 54];
// const integersOnly2 = filterIntegers(mixedArray2);
// console.log(integersOnly2); 

// problem4
// function slice(arr, start, end) {
//   return arr.slice(start, end);
// }
// const array = [1, 2, 3, 4, 5];
// const slicedArray = slice(array, 1, 4);
// console.log(slicedArray); 

// problem5
// function findLargestNumbers(arrays) {
//   return arrays.map(array => Math.max(...array));
// }
// const input = [[1, 2, 3, 4], [45, 73, 12], [13, 13, 10]];
// const result = findLargestNumbers(input);
// console.log(result);

// function findLargestNumbers(arr) {
//   let largestNumbers = [];

//   for (let i = 0; i < arr.length; i++) {
//     let subarray = arr[i];
//     let largestNumber = subarray[0];

//     for (let j = 1; j < subarray.length; j++) {
//       if (subarray[j] > largestNumber) {
//         largestNumber = subarray[j];
//       }
//     }

//     largestNumbers.push(largestNumber);
//   }
//   return largestNumbers;
// }
// let array = [[1, 2, 3, 4], [45, 73, 12], [13, 13, 10]];
// let result = findLargestNumbers(array);
// console.log(result);

// problem6
// function abbreviateString(str) {
//   if (str.length > 10) {
//       return str[0] + (str.length - 2) + str[str.length - 1];
//   }
//   return str;
// }
// console.log(abbreviateString("Word")); 
// console.log(abbreviateString("internationalization"));
// console.log(abbreviateString("pneumonoultramicroscopicsilicovolcanoconiosis"));

// problem7
// function hasTwoTypesOfCharacters(str) {
//   if (str.length !== 4) {
//       return false; // Ensure the string is exactly 4 characters long
//   } 
//   const charCount = {};
//   for (let char of str) {
//       charCount[char] = (charCount[char] || 0) + 1;
//   }
//   return Object.keys(charCount).length === 2 && Object.values(charCount).every(count => count === 2);
// }
// console.log(hasTwoTypesOfCharacters("ASSA")); 
// console.log(hasTwoTypesOfCharacters("STTO")); 
// console.log(hasTwoTypesOfCharacters("FFEE")); 

// problem9
// function findIndices(arr, char) {
//   let indices = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === char) {
//       indices.push(i);
//     }
//   }

//   if (indices.length === 0) {
//     return "Character not found in array";
//   } else {
//     return [indices[0], indices[indices.length - 1]];
//   }
// }
// const array = ['h', 'e', 'i', 'i', 'o'];
// const character = 'i';
// const indices = findIndices(array, character);
// console.log(indices); 
// const array1 =  ['c','i','r','c','u','m','l','o','c','u','t','i','o','n','n','n'];
// const character1 = 'c';
// const indices1 = findIndices(array1, character1);
// console.log(indices1); 
// const array2 =  ['A','S','D','A','x','m'];
// const character2 = 'a';
// const indices2 = findIndices(array2, character2);
// console.log(indices2); 

// problem10
// function checkSubarraySum(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     let currentSum = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       currentSum += arr[j];

//       if (currentSum === target) {
//         return true;
//       }

//       if (currentSum > target) {
//         break;
//       }
//     }
//   }
//   return false;
// }
// const array = [1, 2, 3, 4, 5];
// const targetNumber = 7;
// console.log(checkSubarraySum(array, targetNumber)); 
// const array1 = [1, 2, 3, 4, 5];
// const targetNumber1 = 10;
// console.log(checkSubarraySum(array1, targetNumber1)); 
// const array2 = [1, 2, 3, 4, 5];
// const targetNumber2 = 18;
// console.log(checkSubarraySum(array2, targetNumber2)); 