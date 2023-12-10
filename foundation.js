let firstName = "Sony"
let age = 18
let isMarried = false

console.log("\n This persons name is " + firstName + " and their age is " + age);

if (isMarried == true) {
  console.log(firstName +" is married");
} else {
  console.log(firstName +" is not married");
}

let loop = 1000
let answer = 0

for (let i = 0; i <=loop; i++){
  answer=answer+i
}
console.log("Answer : " + answer); 

cnt = 10
for (let i = 0; i < cnt; i++) {
  if (i % 2 == 0) {
    console.log("Even : "+i);
  } else {
    console.log("Odd : "+i);
  }
  
}

const ages = [21, 22, 23, 24, 25, 26]

// for (let i = 0; i < ages.length; i++) {
  for (const element of ages) {
    if (element % 2 == 0) {
      console.log(element);
    }
  }
  
  const users1 = {
    fn: "Sony",
    gender: "male"
  }
  
  
  console.log(users1["fn"]);
  
  const all_users = [{
    fn: "Sony",
    gender: "male"
  }, {
    fn: "test",
    gender: "male"
  },
  {
    fn: "test2",
    gender: "female"
  }
  ]
console.log("\n");
for (let i = 0; i < all_users.length; i++) {
// for (const element of all_users) {
  if (all_users[i]["gender"] == "male") {
    console.log(all_users[i]["fn"]);
  }
  // console.log(all_users[i]["fn"]);
}

function add(a, b) {
  const sumvalue = a + b;
  return sumvalue
}
const value = add(1,2)
console.log(value)

// CALL BACKS -- Call another function from function
function sum(num1, num2, displayResult) {
    let result = num1 + num2;
    displayResult(result);
    return result
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

let ans = sum(1, 2, displayResult)
console.log(ans);
// ans = sum(1,2, displayResultPassive)
// console.log(ans);
// https://gist.github.com/hkirat/898ac1da32b6b347a8c0c3e73e1c0666  --- GIT HARKIRAT