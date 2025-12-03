"""
Problem: Repeat and Missing Number
BACK: ../README.md
"""

class Solution:
    # Function to find repeating and missing numbers
    def findMissingRepeatingNumbers(self, nums):
        
        # Size of the array
        n = len(nums) 
        repeating, missing = -1, -1

        # Find the repeating and missing number:
        for i in range(1, n + 1):
            # Count the occurrences:
            cnt = nums.count(i)

            # Check if i is repeating or missing
            if cnt == 2:
                repeating = i
            elif cnt == 0:
                missing = i

            """ If both repeating and missing
            are found, break out of loop"""
            if repeating != -1 and missing != -1:
                break

        # Return [repeating, missing]
        return [repeating, missing]
