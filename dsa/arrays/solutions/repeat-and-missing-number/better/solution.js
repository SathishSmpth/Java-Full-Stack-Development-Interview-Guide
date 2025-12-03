/*
 Problem: Repeat and Missing Number
 BACK: ../README.md
*/

class Solution {
  // Function to find repeating and missing numbers
  findMissingRepeatingNumbers(nums) {
    // Size of the array
    let n = nums.length;

    // Hash array to count occurrences
    let hash = Array(n + 1).fill(0);

    // Update the hash array:
    for (let num of nums) {
      hash[num]++;
    }

    let repeating = -1,
      missing = -1;

    // Find the repeating and missing number:
    for (let i = 1; i <= n; i++) {
      if (hash[i] === 2) {
        repeating = i;
      } else if (hash[i] === 0) {
        missing = i;
      }

      /* If both repeating and missing are found, break out of loop*/
      if (repeating !== -1 && missing !== -1) {
        break;
      }
    }

    // Return [repeating, missing]
    return [repeating, missing];
  }
}
