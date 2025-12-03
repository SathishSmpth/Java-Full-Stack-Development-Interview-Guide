/*
 * Problem: Repeat and Missing Number
 * Documentation:
 * BACK → ../README.md
 *
 * GitHub:
 * Click the path above to navigate back to the explanation.
 */

public class Solution {
    // Function to find repeating and missing numbers
    public int[] findMissingRepeatingNumbers(int[] nums) {

        // Size of the array
        int n = nums.length;

        // Hash array to count occurrences
        int[] hash = new int[n + 1];

        // Update the hash array:
        for (int i = 0; i < n; i++) {
            hash[nums[i]]++;
        }

        int repeating = -1, missing = -1;

        // Find the repeating and missing number:
        for (int i = 1; i <= n; i++) {
            if (hash[i] == 2) {
                repeating = i;
            } else if (hash[i] == 0) {
                missing = i;
            }

            // Stop early if both found
            if (repeating != -1 && missing != -1) {
                break;
            }
        }

        // Return [repeating, missing]
        return new int[] { repeating, missing };
    }
}
