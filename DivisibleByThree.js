
function DivisibleBy3(numbers) {
  let sum = 0;
  let lastNumber = 0;

  // using forEach to check the given condition
  numbers.forEach((number) => {
    if (number % 3 === 0) {
      sum += number;
      lastNumber = number;
    }
  });

  // Returning null if no numbers divisible by 3 are found
  if (sum === 0) {
    return null;
  }
  // Returning null if numbers divisible by 3 are found
  return { sum: sum, lastNumber: lastNumber };
}

const numbers = [6, 8, 9, 12, 17, 21, 24, 28, 33, 36]; // array numbers divisible by 3
// const numbers = [10, 20, 50]; // array without numbers divisible by 3

const result = DivisibleBy3(numbers);
if (result !== null) {
  console.log("Sum of numbers divisible by 3:", result["sum"]);
  console.log("Last number divisible by 3:", result["lastNumber"]);
} else {
  console.log("No number found that is divisible by 3 in the given array.");
}
