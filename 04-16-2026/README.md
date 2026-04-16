# ParityParser

A logic-oriented program that performs arithmetic calculations based on the count of non-digit characters between numbers.

## How It Works

1. **Numbers:** Consecutive digits are treated as a single integer.
2. **Operators:** The gap between numbers determines the math:
    * **Even count** of characters = Addition ($+$)
    * **Odd count** of characters = Subtraction ($-$)
3. **Direction:** Evaluated strictly left-to-right.
4. **Formatting:** Leading and trailing non-digits are ignored.

### Example
**Input:** `"3ab10c8"`
* `3` and `10` are separated by `"ab"` (2 chars, Even) → $3 + 10 = 13$
* `13` and `8` are separated by `"c"` (1 char, Odd) → $13 - 8 = 5$
* **Result:** `5`

---

## Quick Reference

| Input | Logic | Result |
| :--- | :--- | :--- |
| `10aaa5` | 3 chars (Odd) | **5** |
| `2--2--2` | 2 chars (Even) | **6** |
| `100hello20` | 5 chars (Odd) | **80** |
