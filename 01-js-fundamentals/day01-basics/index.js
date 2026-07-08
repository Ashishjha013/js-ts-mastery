// Problem #1: Reverse a string without using .reverse()

function reverse(str) {
  let temp = "";
  for (let i = str.length - 1; i >= 0; i--) {
    temp += str[i];
  }

  return temp;
}

let name = "genny";
// console.log(`Reversed string: ${reverse(name)}`);

// Problem #2: Write a Function that returns largest number in an array, without Math.max

function maxNum(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

// let arr = [1, 56, 34, 20, 95];
let arr = [-5, -10, -2];
// console.log(`The largest number in the array is: ${maxNum(arr)}`);

// Problem #3: Write a Function that checks if a string is a palindrome or not.

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left <= right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
