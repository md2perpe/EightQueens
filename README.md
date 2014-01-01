EightQueens
===========

Javascript solution of Eight Queens problem


Ideas
-----

* Every row can contain only one queen
* Every column can contain only one queen

Therefore, every solution can be represented as a permutation of the column numbers (0 through 7).
E.g. [2, 4, 3, 7, 5, 1, 6, 0] means that on row #0 a queen is placed in column #2, on row #1 a queen is placed in column #4, on row #2 a queen is placed in column #3, and so on.

* If two queens can reach each other diagonally, either _row_ + _col_ (for \ diagonals) or _row_ - _col_ (for / diagonals) are equal for the two queens.
