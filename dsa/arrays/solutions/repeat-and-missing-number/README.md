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

### Algorithm (Better)

- `Declare a hash array of size N+1 where N is the range of numbers in the array (from 1 to N). This hash array will store the frequency of each element.`
- `Iterate through the given array and for each element encountered, update the frequency in the hash array.`
- `Once all elements are processed, iterate through the hash array and identify the two elements: one with frequency 2 and one with frequency 0.`
- `Return the two elements that have frequencies of 2 and 0, respectively.`

### Pseudocode (Better)

- `n ← size of nums`
- `hash ← array of size (n + 1) initialized to 0`

```sh
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

### Code (Better)

| Language   | Implementation |
|-----------|----------------|
| Java | [View Code](./better/Solution.java) |
| C++ | [View Code](./better/Solution.cpp) |
| Python | [View Code](./better/solution.py) |
| JavaScript | [View Code](./better/solution.js) |

### Complexity Analysis (Better)

Time Complexity: O(2*N), where N is the size of the array. This is because we are iterating through the array once to build the hash array and then iterating through the hash array to find the repeating and missing numbers.

Space Complexity: O(N), as we are using an additional hash array of size N+1 to store the frequency of each element.

## Optimal Approach

### Algorithm (Optimal)

- `First, calculate the sum of all elements in the given array, denoted as S, and the sum of natural numbers from 1 to N, denoted as Sn. The formula for Sn is (N * (N + 1)) / 2.`
- `Now calculate S - Sn. This gives us X - Y, where X is the repeating number and Y is the missing number.`
- `Next, calculate the sum of squares of all elements in the array, denoted as S2, and the sum of squares of the first N numbers, denoted as S2n. The formula for S2n is (N * (N + 1) * (2N + 1)) / 6.`
- `Now calculate S2 - S2n. This gives us X2 - Y2.`
- `From the equations S - Sn = X - Y and S2 - S2n = X2 - Y2, we can compute X + Y by the formula (S2 - S2n) / (S - Sn).`
- `Using the values of X + Y and X - Y, we can solve for X and Y through simple addition and subtraction.`
- `Finally, return the values of X (the repeating number) and Y (the missing number).`

### Pseudocode (Optimal - Mathematical Approach)

- `findMissingRepeatingNumbers(nums):`
- `n ← size of nums`

```sh
// Step 1: Calculate sum and sum of squares of array
S ← 0
S2 ← 0
for each element in nums:
    S ← S + element
    S2 ← S2 + (element × element)

// Step 2: Expected sum and sum of squares
Sn ← (n × (n + 1)) / 2
S2n ← (n × (n + 1) × (2n + 1)) / 6

// Step 3: Differences
diff ← S − Sn            // X − Y
diff2 ← S2 − S2n         // X² − Y²

// Step 4: Compute X + Y
sumXY ← diff2 / diff     // X + Y

// Step 5: Solve equations
X ← (diff + sumXY) / 2   // Repeating number
Y ← X − diff             // Missing number

return [X, Y]

```

### Code (Optimal)

| Language   | Implementation |
|-----------|----------------|
| Java | [View Code](./optimal/Solution.java) |
| C++ | [View Code](./optimal/Solution.cpp) |
| Python | [View Code](./optimal/solution.py) |
| JavaScript | [View Code](./optimal/solution.js) |

### Complexity Analysis (Optimal)

Time Complexity: O(N), where N is the size of the array. This is because we are iterating through the array to calculate the sums and sums of squares.

Space Complexity: O(1), as we are using a constant amount of space for variables, regardless of the input size.

## Video Explanation

<a href="https://www.youtube.com/watch?v=2D0D8HE6uak&feature=youtu.be" target="_blank">Repeat and Missing Number - Click here</a>