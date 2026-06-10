# 06-10-2026-freeCodeCamp-challenge

## Instructions: Roommates
Given an array of people and their roommate group, return the room assignments for a hotel stay using the following rules:

* **Group Matching:** People can only share a room with someone from the same group letter.
* **Chronological Pairing:** People are paired in the exact order they are given in the input list.
* **Room Capacity:** A room can hold a maximum of 2 people. Any leftover person without a partner in their group gets a solo room.
* **Formatting:** Return an array of strings. Pairs are separated by `" and "` (e.g., `"Alice and Carol"`), while solo travelers just display their name (e.g., `"Bob"`).
* **Final Order:** Room assignments must appear in the order the pairings or solo selections were completed.

## Solution
I built a dual-pass array processing program that groups individuals into dynamic queues based on their group identifier. It immediately pairs roommates as capacities are met and maps out solo rooms from the remaining list.

## How It Works
1. **Grouping Map:** The algorithm iterates through the input list and places names into a temporary tracking object, categorized by their group letter.
2. **Immediate Pairing:** As soon as a group's tracking list reaches a length of 2, those two names are immediately joined with `" and "` and pushed to the final results array. The group list is then cleared for future pairs.
3. **Solo Sweep:** After processing all pairs, a second sequential sweep looks for any leftover individual names remaining in the group tracker.
4. **Order Preservation:** The solo travelers are safely appended to the final results array, fully preserving the original chronological entry order.

### Example
**Input:**
```json
[
  { "name": "Alice", "group": "A" },
  { "name": "Bob", "group": "B" },
  { "name": "Carol", "group": "A" }
]

```


* `Alice` enters Group A (Waiting count: 1)
* `Bob` enters Group B (Waiting count: 1)
* `Carol` enters Group A (Waiting count: 2) → **Pair formed:** `"Alice and Carol"`
* **Leftovers:** `Bob` is left alone in Group B → **Solo room:** `"Bob"`
* **Result:** `["Alice and Carol", "Bob"]`

---

## Quick Reference Table

| Input Array | Logic | Result |
| :--- | :--- | :--- |
| `[{name: "A1", group: "X"}, {name: "B1", group: "Y"}]` | Both unique groups | `["A1", "B1"]` |
| `[{name: "A1", group: "X"}, {name: "A2", group: "X"}]` | 2 same group | `["A1 and A2"]` |
| `[{name: "A1", group: "X"}, {name: "B1", group: "Y"}, {name: "A2", group: "X"}]` | X pairs first, then Y solo | `["A1 and A2", "B1"]` |

---

## Technologies Used

I utilized the following JavaScript features to solve this challenge:

1. **Functions:** To encapsulate the roommate-matching logic into a reusable `getRoommates` block.
2. **Objects (Hash Map):** Used as a dynamic dictionary (`groups`) to store lists of people waiting for a room by their group letter.
3. **If Statements:** To verify if a group already exists in the dictionary and to check when a room hits maximum capacity.
4. **For...of Loops:** Used to cleanly iterate through the array of person objects without manually managing index counters.
5. **Destructuring Assignment:** Syntactic sugar (`const { name, group } = person`) used to unpack properties from the objects directly into clean local variables.
6. **Logical NOT (`!`):** To easily detect when a specific group letter has not yet been initialized in our tracking map.
7. **`.push`:** A native array method utilized to add people to their respective waiting groups and to log completed rooms.
8. **`.includes`:** Used during the secondary sweep to verify if a person's name is still actively sitting in the leftover tracker.
9. **`.filter`:** To safely remove a processed solo traveler from the leftover map, preventing duplicate tracking.

```
