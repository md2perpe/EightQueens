EightQueens
===========

Javascript solution of Eight Queens problem


Ideas
-----

* Every row can contain only one queen
* Every column can contain only one queen

Therefore, every solution can be represented as a permutation of the column numbers (0 through 7).

* If two queens can reach each other diagonally, either _row_ + _col_ (for \ diagonals) or _row_ - _col_ (for / diagonals) are equal for the two queens.
