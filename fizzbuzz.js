function fizzbuzz(value) {
  if (value % 3 === 0 && value % 5 === 0) {
    return "fizzbuzz";
  } else if (value % 3 === 0) {
    return "fizz";
  } else if (value % 5 === 0) {
    return "buzz";
  } else {
    return value;
  }
}

console.log(fizzbuzz(15));
console.log(fizzbuzz(9));
console.log(fizzbuzz(10));
console.log(fizzbuzz(7));
