"""
Problem: Repeat and Missing Number
BACK: ../README.md
"""

class Solution:
    # Function to find repeating and missing numbers
    def findMissingRepeatingNumbers(self, nums):
        
        # Size of the array
        n = len(nums)
        
        # Hash array to count occurrences
        hash = [0] * (n + 1)
        
        # Update the hash array:
        for num in nums:
            hash[num] += 1

        repeating = -1
        missing = -1
        
        # Find the repeating and missing number:
        for i in range(1, n + 1):
            if hash[i] == 2:
                repeating = i
            elif hash[i] == 0:
                missing = i

            """ If both repeating and missing
            are found, break out of loop"""
            if repeating != -1 and missing != -1:
                break
        
        # Return [repeating, missing]
        return [repeating, missing]
