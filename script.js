// Task 1: Array Filtering And Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.
const peopleData = [
  { name: "Phoebe", age: 28, gender: "female" },
  { name: "Joey", age: 25, gender: "male" },
  { name: "Chandler", age: 28, gender: "male" },
  { name: "Rechel", age: 23, gender: "female" },
  { name: "Monica", age: 23, gender: "female" },
  { name: "Ross", age: 28, gender: "male" },
];

const filterAndReturnNames = (peopleArray) => {
  const remainingPeople = peopleData?.filter(
    (person) => person?.gender !== "female"
  );
  const remainingPeopleNames = remainingPeople?.map((person) => person?.name);

  return remainingPeopleNames;
};

const names = filterAndReturnNames(peopleData);
console.log("Task 1");
console.log("Names: ", names, "\n");

// Task 4: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
const carsInfo = [
  { make: "Tesla", model: "Model 3", year: 2021 },
  { make: "BMW", model: "X3", year: 2019 },
  { make: "Ford", model: "Mustang", year: 2022 },
  { make: "Toyota", model: "Camry", year: 2020 },
  { make: "Honda", model: "Civic", year: 2018 },
];

const sortCarsByYear = (carsArray) => {
  const sortedArray = carsArray?.sort((a, b) => a.year - b.year);
  return sortedArray;
};

const sortedCars = sortCarsByYear(carsInfo);
console.log("Task 4");
console.log("Sorted Car Data: ", sortedCars, "\n");

// Task 6: Array Reduction
// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
const numbersArray = [1, 3, 4, 6, 7, 8];

const sumEvenNumber = (numArr) => {
  const result = numArr?.reduce((sum, num) => {
    return num % 2 === 0 ? sum + num : sum;
  }, 0);
  return result;
};
console.log("Task 6");
console.log("Sum of even numbers: ", sumEvenNumber(numbersArray), "\n");

// Task 7: Leap Year Checker
// Write a function that determines whether a given year is a leap year.
const isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
    console.log(year + " is leap year.\n");
  else console.log(year + " is not leap year.\n");
};
console.log("Task 7");
isLeapYear(2025);

// Task 8: Unique Values
// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.
const numbersWithDuplicates = [1, 3, 2, 4, 5, 2, 5, 3, 6, 4, 6, 6, 3, 9];

const getUniqueNumbers = (numArr) => {
  const uniqueNumbersArr = [...new Set(numArr)];
  return uniqueNumbersArr;
};

const uniqueNumbers = getUniqueNumbers(numbersWithDuplicates);
console.log("Task 8");
console.log("Unique Numbers: ", uniqueNumbers, "\n");

// Task 9: Advanced Sorting
// Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.
const students = [
  { name: "Phoebe", grades: [85, 90, 48, 92] },
  { name: "Joey", grades: [88, 77, 85, 90] },
  { name: "Chandler", grades: [92, 83, 94, 89] },
  { name: "Rechel", grades: [79, 85, 81, 97] },
  { name: "Monica", grades: [98, 91, 93, 96] },
  { name: "Ross", grades: [92, 88, 94, 99] },
];

const sortStudents = (stdArr) => {
  const sortedArray = stdArr?.sort((a, b) => {
    const avgA =
      a.grades.reduce((sum, grade) => sum + grade, 0) / a.grades.length;
    const avgB =
      b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length;
    return avgB - avgA;
  });

  return sortedArray;
};

console.log("Task 9");
console.log("Sorted Students: ", sortStudents(students), "\n");

// Task 10: Functional Programming - Reduce
// Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.
const products = [
  { item: "Mobile", quantity: 2, price: 5000 },
  { item: "Laptop", quantity: 5, price: 50000 },
];

const calculateTotalValue = (productArr) => {
  const total = productArr?.reduce((total, item) => {
    const itemTotal = item?.quantity * item?.price;
    return total + itemTotal;
  }, 0);
  return total;
};

console.log("Task 10");
console.log("Total Value: ", calculateTotalValue(products), "\n");
