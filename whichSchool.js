// Function establsihing which school to attend according to age
const whichSchool  = function (age)  {
  if (age < 13) {
    return 'Elementary School';
  } else if (age >= 13 && age <= 18) {
    return 'Secondary School';
  } else {
    return 'Lighthouse Labs'
  }
}

// Print the choices
console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));