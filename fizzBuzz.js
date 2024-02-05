const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});



readline.question('enter a number: ', (enteredNumber) => {
  function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
      return "FizzBuzz";
    } else if (number % 3 === 0) {
      return "Fizz";
    } else if (number % 5 === 0) {
      return "Buzz";
    } else {
      return number;
    }
  }

  let result = fizzBuzz(Number(enteredNumber));
  console.log(result);

  readline.close();
});