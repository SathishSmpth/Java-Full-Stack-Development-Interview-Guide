/*
 Problem: Repeat and Missing Number
 BACK: ../README.md
*/

class Solution {
    // Function to find repeating and missing numbers
    findMissingRepeatingNumbers(nums) {
        
        // Size of the array
        let n = nums.length; 
        let repeating = -1, missing = -1;

        // Find the repeating and missing number:
        for (let i = 1; i <= n; i++) {
            
            // Count the occurrences:
            let cnt = 0;
            for (let j = 0; j < n; j++) {
                if (nums[j] === i) {
                    cnt++;
                }
            }

            // Check if i is repeating or missing
            if (cnt === 2) {
                repeating = i;
            } else if (cnt === 0) {
                missing = i;
            }

            /* If both repeating and missing 
            are found, break out of loop*/
            if (repeating !== -1 && missing !== -1) {
                break;
            }
        }

        // Return [repeating, missing]
        return [repeating, missing];
    }
}
