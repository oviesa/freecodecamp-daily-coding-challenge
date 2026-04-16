# 04-16-2026-freeCodeCamp-challenge

## Instructions: String Math
Given a string with numbers and other characters, perform math on the numbers based on the count of non-digit characters between them.

* **Even gap:** Use addition ($+$).
* **Odd gap:** Use subtraction ($-$).
* **Consecutive digits:** Form a single number.
* **Logic:** Applied left-to-right.
* **Cleanup:** Ignore leading and trailing non-digit characters.

## Solution
I built a logic-oriented program that extracts integers and calculates their sum or difference by measuring the index-distance between numeric substrings.

## How It Works
1. **Numbers:** The algorithm scans the string and groups consecutive digits into a single integer.
2. **Operators:** The "gap" (the count of non-digits) between numbers determines the operation:
    * **Even count** = Addition ($+$)
    * **Odd count** = Subtraction ($-$)
3. **Direction:** Evaluated strictly left-to-right.
4. **Formatting:** Leading and trailing non-digits are ignored.

### Example
**Input:** `"3ab10c8"`
* `3` and `10` are separated by `"ab"` (2 chars, Even) → $3 + 10 = 13$
* `13` and `8` are separated by `"c"` (1 char, Odd) → $13 - 8 = 5$
* **Result:** `5`

---

## Quick Reference Table

| Input | Logic | Result |
| :--- | :--- | :--- |
| `10aaa5` | 3 chars (Odd) | **5** |
| `2--2--2` | 2 chars (Even) | **6** |
| `100hello20` | 5 chars (Odd) | **80** |

---

## Technologies Used

I utilized the following JavaScript features to solve this challenge:

1. **Functions:** To encapsulate the logic into a reusable `doMath` block.
2. **If Statements:** To handle the branching logic between even (addition) and odd (subtraction) gaps.
3. **For Loops:** To iterate through the array of extracted numbers and apply calculations.
4. **While Loops:** To traverse the string and group consecutive digits without losing the index position.
5. **`.length`:** Used to track the span of numeric strings and determine the end of a character gap.
6. **`/\d/`:** A Regular Expression (Regex) used to identify if a character is a digit ($0-9$).
7. **`.push`:** To store extracted numbers, their starting positions, and their lengths into arrays.
8. **`.test`:** A Regex method used to check if the current character matches the digit pattern.

---
