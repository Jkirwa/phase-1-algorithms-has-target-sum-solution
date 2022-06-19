// function hasTargetSum(array, target) {
//   // Write your algorithm here

// const seenNumbers={};
//   for(let i=0;i<array.length;i++){
//         const compliment=target -array[i]
//         if (seenNumbers[compliment])return true
//       seenNumbers[array[i]]= true;
      
//       }
//       return false;
//     }
function hasTargetSum(array, target) {
  const seenNumbers = new Set(); 
  for (const number of array) {
    const complement = target - number;

    
    if (seenNumbers.has(complement)) return true;

    seenNumbers.add(number);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  time complexity:o(n)
  space complexity:o(n)
  
*/

/* 
  Add your pseudocode here
  create an object to keep track of numbers already seen
  iterate each number in the array
  check if any key on our object is a compliment
 
  if theres any return true else false
        using set
          
  initialize an empty Set
  .has returns true if the Set includes the complement

   .add adds the number to the Set




*/

/*
  Add written explanation of your solution here
   create an object to keep track of numbers already seen
  iterate each number in the array
  check if any key on our object is a compliment
 
  if theres any return true else false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
