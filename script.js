// Question 01
// let multiArray = [];

// Question 02
// let matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

// Question 03
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Question 04
// let number = parseInt(prompt("Enter a number for multiplication table:"));
// let length = parseInt(prompt("Enter the length of the table:"));
// for (let i = 1; i <= length; i++) {
//     console.log(number + " x " + i + " = " + (number * i));
// }

// Question 05
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log("Element at index " + i + " is " + fruits[i]);
// }

// Question 06
// let counting = "Counting: ";
// for (let i = 1; i <= 15; i++) {
//     counting += i + ", ";
// }
// console.log(counting.slice(0, -2));

// let reverseCounting = "Reverse Counting: ";
// for (let i = 10; i >= 1; i--) {
//     reverseCounting += i + ", ";
// }
// console.log(reverseCounting.slice(0, -2));

// let even = "Even: ";
// for (let i = 0; i <= 20; i += 2) {
//     even += i + ", ";
// }
// console.log(even.slice(0, -2));

// let odd = "Odd: ";
// for (let i = 1; i <= 19; i += 2) {
//     odd += i + ", ";
// }
// console.log(odd.slice(0, -2));

// let series = "Series: ";
// for (let i = 2; i <= 20; i += 2) {
//     series += i + "k, ";
// }
// console.log(series.slice(0, -3) + "k");


// Question 07
// let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/madam?");
// let itemIndex = bakeryItems.indexOf(userInput.toLowerCase());

// if (itemIndex !== -1) {
//     alert(userInput + " is available at index " + itemIndex + " in our bakery");
// } else {
//     alert("We are sorry. " + userInput + " is not available in our bakery");
// }

// Question 08
// let A = [24, 53, 78, 91, 12];
// let largest = A[0];

// for (let i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }
// console.log("Array Items:" + A);
// console.log("The largest number is " + largest);


// Question 09

// let A = [24, 53, 78, 91, 12];
// let smallest = A[0];

// for (let i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }
// console.log("Array Items:" + A);
// console.log("The smallest number is " + smallest);


// Question 10

// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write(i + ", ");
//     }
// }
