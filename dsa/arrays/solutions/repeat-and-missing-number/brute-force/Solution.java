public class Solution {
    // Function to find repeating and missing numbers
    public int[] findMissingRepeatingNumbers(int[] nums) {
        int n = nums.length; // Size of the array
        int repeating = -1, missing = -1;

        // Find the repeating and missing number:
        for (int i = 1; i <= n; i++) {
            // Count the occurrences:
            int cnt = 0;
            for (int j = 0; j < n; j++) {
                if (nums[j] == i)
                    cnt++;
            }

            // Check if i is repeating or missing
            if (cnt == 2)
                repeating = i;
            else if (cnt == 0)
                missing = i;

            // Stop early if both found
            if (repeating != -1 && missing != -1)
                break;
        }

        // Return {repeating, missing}
        return new int[] { repeating, missing };
    }
}
