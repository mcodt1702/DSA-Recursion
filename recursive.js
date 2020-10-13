// function countSheep(num) {
//   if (num === 0) {
//     console.log("All jumped!");
//   } else {
//     console.log(`${num}: Another Sheep jumped over the fence`);
//     countSheep(num - 1);
//   }
// }

// countSheep(3);

// var exponent = function (a, n) {
//   if (n === 0) {
//     return 1;
//   } else {
//     return a * exponent(a, n - 1);
//   }
// };

// console.log(exponent(4, 4));

// const sumOf = function (list) {
//   // Base case
//   if (list.length === 1) {
//     return list[0];
//   }
//   // General case
//   return list[0] + sumOf(list.slice(1));
// };

// let lst = [2, 4];
// console.log(sumOf(lst));

// function reverseString(str) {
//   if (str.length < 5) {
//     return str;
//   }
//   return console.log(reverseString(str.slice(1)) + str[0]);
// }
// reverseString("marco");

// function tri(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     console.log(n);
//     return n + tri(n - 1);
//   }
// }

// console.log(tri(5));
// n = 6
// 6 + tri(5)
// 5 + tri(4)
// 4 + tri(3)
// 3 + tri(2)
// 2 + tri(1)
//Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

//Input: 02/20/2020
//Output: ["02", "20", "2020"]

function fibonacci(num) {
  if (num <= 2) {
    return 1;
  } else {
    console.log(num);
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

console.log(fibonacci(7));
//num =7
// 7-1 + 7-2 = 11
//num = 5
//1, 1, 2, 3, 5, 8, 13.

//7. Factorial

function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
//Write a recursive function that finds the factorial of a given number.
//The factorial of a number can be found by multiplying that number by
//each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.//
//

console.log(factorial(5));

//8. Find a way out of the maze
//You have entered a Maze and need to find your way out of it. There are more
//than one possible paths through the Maze to the single exit point. Write a
//recursive function that will help you find a possible path through the maze.

//help needed
