/*
 Problem: Repeat and Missing Number
 BACK: ../README.md
*/

class Solution {
  // Function to find repeating and missing numbers
  findMissingRepeatingNumbers(nums) {
    // Size of the array
    let n = nums.length;

    // Sum of first n natural numbers
    let SN = (n * (n + 1)) / 2;

    // Sum of squares of first n natural numbers
    let S2N = (n * (n + 1) * (2 * n + 1)) / 6;

    /* Calculate actual sum (S) and sum 
           of squares (S2) of array elements */
    let S = 0,
      S2 = 0;
    for (let i = 0; i < n; i++) {
      S += nums[i];
      S2 += nums[i] * nums[i];
    }

    // Compute the difference values
    let val1 = S - SN;

    // S2 - S2n = X^2 - Y^2
    let val2 = S2 - S2N;

    // Calculate X + Y using X + Y = (X^2 - Y^2) / (X - Y)
    val2 = val2 / val1;

    /* Calculate X and Y from X + Y and X - Y
           X = ((X + Y) + (X - Y)) / 2
           Y = X - (X - Y) */
    let x = (val1 + val2) / 2;
    let y = x - val1;

    // Return the results as [repeating, missing]
    return [Math.floor(x), Math.floor(y)];
  }
}
