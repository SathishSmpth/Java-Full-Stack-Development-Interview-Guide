# Repeat and Missing Number

[<< BACK](../README.md)

## Problem Statement

Given an integer array nums of size n containing values from [1, n] and each value appears exactly once in the array, except for A, which appears twice and B which is missing.

Return the values A and B, as an array of size 2, where A appears in the 0-th index and B in the 1st index.

Note: You are not allowed to modify the original array.

## Examples

**Input**

```text
nums = [3, 5, 4, 1, 1]
```

**Output:**

``` text
[1, 2]
```

**Explanation:**

**1** appears two times in the array and **2** is missing from `nums`

## Brute Force Approach

### Algorithm (Brute Force)

- `Iterate through the array from index 1 to N, where N is the size of the array.`
- `For each integer, i, use linear search to count its occurrence in the given array.`
- `If an element has an occurrence of 2, store it as a candidate element.`
- `If an element has an occurrence of 0, store it as another candidate element.`
- `Finally, return the two elements that have occurrences of 2 and 0, respectively.`

### Pseudocode (Brute Force)

- `n ← size of nums`
- `repeating ← -1`
- `missing ← -1`

``` sh
for i ← 1 to n:
    count ← 0

    for j ← 0 to n − 1:
        if nums[j] = i:
            count ← count + 1

    if count = 2:
        repeating ← i
    else if count = 0:
        missing ← i

return [repeating, missing]

```

### Code (Brute Force)

| Language   | Implementation |
|-----------|----------------|
| Java | [View Code](./brute-force/Solution.java) |
| C++ | [View Code](./brute-force/Solution.cpp) |
| Python | [View Code](./brute-force/solution.py) |
| JavaScript | [View Code](./brute-force/solution.js) |

### Complexity Analysis (Brute Force)

Time Complexity: O(N2), where N is the size of the array. This is because we are iterating through the array for each integer from 1 to N, leading to a nested loop.

Space Complexity: O(1), as we are using a constant amount of space for the variables `repeating` and `missing`, regardless of the input size.

## Better Approach

### Algorithm

- `Declare a hash array of size N+1 where N is the range of numbers in the array (from 1 to N). This hash array will store the frequency of each element.`
- `Iterate through the given array and for each element encountered, update the frequency in the hash array.`
- `Once all elements are processed, iterate through the hash array and identify the two elements: one with frequency 2 and one with frequency 0.`
- `Return the two elements that have frequencies of 2 and 0, respectively.`

### Pseudocode

- `n ← size of nums`
- `hash ← array of size (n + 1) initialized to 0`

``` sh
// Step 1: Count frequencies
for each element in nums:
    hash[element] ← hash[element] + 1

repeating ← -1
missing ← -1

// Step 2: Identify repeating and missing
for i ← 1 to n:
    if hash[i] = 2:
        repeating ← i
    else if hash[i] = 0:
        missing ← i

return [repeating, missing]

```

### Code

#### JAVA

```java
class Solution {
    // Function to find repeating and missing numbers
    public int[] findMissingRepeatingNumbers(int[] nums) {
        int n = nums.length; // Size of the array
        int repeating = -1, missing = -1;

        // Find the repeating and missing number:
        for (int i = 1; i <= n; i++) {
            // Count the occurrences:
            int cnt = 0;
            for (int j = 0; j < n; j++) {
                if (nums[j] == i) cnt++;
            }

            // Check if i is repeating or missing
            if (cnt == 2) repeating = i;
            else if (cnt == 0) missing = i;

            // Stop early if both found
            if (repeating != -1 && missing != -1)
                break;
        }

        // Return {repeating, missing}
        return new int[]{repeating, missing};
    }
}
```

#### C++

```cpp
class Solution {
public:
    // Function to find repeating and missing numbers
    vector<int> findMissingRepeatingNumbers(vector<int>& nums) {
        
        // Size of the array
        int n = nums.size();
        int repeating = -1, missing = -1;

        // Find the repeating and missing number:
        for (int i = 1; i <= n; i++) {
            
            // Count the occurrences:
            int cnt = 0;
            
            for (int j = 0; j < n; j++) {
                if (nums[j] == i) cnt++;
            }

            // Check if i is repeating or missing
            if (cnt == 2) repeating = i;
            else if (cnt == 0) missing = i;

            /* If both repeating and missing
            are found, break out of loop*/
            if (repeating != -1 && missing != -1)
                break;
        }
        
        // Return {repeating, missing}
        return {repeating, missing};
    }
};
```

#### PYTHON

```py
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

```

### JAVASCRIPT

```js
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
```

### Complexity Analysis

Time Complexity: O(N2), where N is the size of the array. This is because we are iterating through the array for each integer from 1 to N, leading to a nested loop.

Space Complexity: O(1), as we are using a constant amount of space for the variables `repeating` and `missing`, regardless of the input size.
