// 1)A digital clock loses x seconds every y minutes.

// Give current time and future target time, calculate actual clock reading at that moment

// Example
// input:
// 10:00:00
// 11:00:00
// 10 60(clock loses 10 sec each 60 minutes)

// output:
// 10: 59: 50

// -----------------------------------------------------------------------------------------------------------------

// 2)count number in [L, R] that have exactly 3 distinct prime factors.

// Example
// input:
// 10  30

// output
// 1

// -----------------------------------------------------------------------------------------------------------------------

// 3)you are given K sorted lists.

// You must merge them into one list, but not using normal merge rules.

// instead, you must follow alternating priority rules:

// Merging rules

// You will repeatedly pick the next element using these rules:
// 1. step 1(MIN - Pick Step):
// pick the smallest among all current element.
// if there's a tie, pick from the list with a smaller index.

// 2.step 2(Max - Pick step):
// Pick the largest amoung all current elements.
// if there's a tie , pick from the list with a smaller index.

// 3.these two steps repeat alternately:
// step1 -> step2 -> step1 -> step2 ->...

// 4.when a list becomes empty, simply ignore it in future steps.
// Return the merged list after proccessing all elements.

// Example
// input:
// list 0 -> [1, 4, 7]
// list 1 -> [2, 3, 8]
// list 2 -> [1, 5, 9]

// output:
// 1 4 1 7 2 8 3 9 5

// ---------------------------------------------------------------------------------------------------------------------

// 4) Given a grid with # block and . empty cells, apply gravity upward(reverse gravity).
// all blocks move up until they hit another block or the top.

//Example
// input:
// . . #
// . # .
// # . #

// Output:
// # # #
// . . #
// . . .

// ------------------------------------------------------------------------------------------------------------

// 5) You must compress string S as:

// -> replace longest repeating substring with { substring }{ count }
// -> if Multiple, choose lexicographically smallest substring.
// -> if no repeats -> return original.

// Example

// input:
// abcabcabcx
// Output:
// abc3x;
// --------------------------------------------------------------------------------------------------------