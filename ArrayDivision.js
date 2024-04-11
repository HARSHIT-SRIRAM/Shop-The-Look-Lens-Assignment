function arrayDivision(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let dividend = arr[i];
    let divisor;
    let quotient;

    // Assigning the divisor
    if (i === arr.length - 1) {
      divisor = arr[0];
    } else {
      divisor = arr[i + 1];
    }

    // checking if the divisor is zero and throwing exception if divisor is zeero
    try {
      if (divisor === 0) {
        throw "Division by zero";
      }
      
      // validated if exception not thrown
      quotient = dividend / divisor;
    } catch (error) {
      quotient = "Error: " + error;
    }
    
    // after getting quotient assigning result
    result.push(quotient);
  }

  return result;
}

const arr = [9, 33, 0, 7, 2, 82, 77];
console.log("Result of array division:", arrayDivision(arr));
