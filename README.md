# Arrays-Advanced
Problems for exercise and homework from my training in Softuni

## **1. Sum First and Last**

Write a function that calculates and prints the **sum** of the **first**
and the **last** elements in an array.

The **input** comes as an array of string elements holding numbers.

The **output** is printed on the console.

### Examples

| **Input**            | **Output** |  | **Input**     | **Output** |
| -------------------- | ---------- |  | ------------- | ---------- |
| \['20', '30', '40'\] | 60         |  | \['5', '10'\] | 15         |

## **2. Negative or Positive Numbers**

Write a function that processes the elements in an **array** one by one
and produces a **new** array. **Prepend** each **negative** element at
the front of the array (**as** the **first element**) and **append**
each **positive** (or **0**) element at the end of the array.

The **input** comes as an array of string elements holding numbers.

The **output** is printed on the console, each element on a new line.

**Examples**

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>['7', '-2', '8', '9']</td>
<td><p>-2</p>
<p>7</p>
<p>8</p>
<p>9</p></td>
<td></td>
<td>['3', '-2', '0', '-1']</td>
<td><p>-1</p>
<p>-2</p>
<p>3</p>
<p>0</p></td>
</tr>
</tbody>
</table>


## **3. First and Last K Numbers**

Write a function that prints the first **k** and the last **k** elements
from an **array of numbers**.

The **input** comes as an **array of number** elements. The first
element represents the number **k**, all other elements are from the
array that needs to be processed.

The **output** is printed on the console on two lines. On the first
line, print the **first** **k** elements, separated by space. On the
second line, print the **last** **k** elements, separated by space.

**Examples**

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>[<strong>2</strong>,</p>
<p>7, 8, 9]</p></td>
<td><p>7 8</p>
<p>8 9</p></td>
<td></td>
<td><p>[<strong>3</strong>,</p>
<p>6, 7, 8, 9]</p></td>
<td><p>6 7 8</p>
<p>7 8 9</p></td>
</tr>
</tbody>
</table>


## **4. Last K Numbers Sequence**

You are given two integers **n** and **k**. Write a function that
generates and prints the following sequence:

  - The first element is **1.**

  - Every following element equals the sum of the previous **k**
    elements.

  - The length of the sequence is **n** elements.

The **input** comes as two number arguments. The first element
represents the number **n**, and the second – the number **k**.

The **output** is printed on the console on a single line, separated by
space.

**Examples**

| **Input** | **Output**   |  | **Input** | **Output**        |
| --------- | ------------ |  | --------- | ----------------- |
| 6, 3      | 1 1 2 4 7 13 |  | 8, 2      | 1 1 2 3 5 8 13 21 |


## **5. Process Odd Numbers**

You are given an **array of numbers**. Write a function that prints the
elements at **odd positions** from the array, **doubled** and in
**reverse** order.

The **input** comes as an array of number elements.

The **output** is printed on the console on a single line, separated by
space.

**Examples**

| **Input**          | **Output** |  | **Input**             | **Output** |
| ------------------ | ---------- |  | --------------------- | ---------- |
| \[10, 15, 20, 25\] | 50 30      |  | \[3, 0, 10, 4, 7, 3\] | 6 8 0      |


## **6. Smallest Two Numbers**

Write a function that prints the **two smallest** elements from an
**array of numbers**.

The **input** comes as an array of number elements.

The **output** is printed on the console on a single line, separated by
space.

**Examples**

| **Input**         | **Output** |  | **Input**             | **Output** |
| ----------------- | ---------- |  | --------------------- | ---------- |
| \[30, 15, 50, 5\] | 5 15       |  | \[3, 0, 10, 4, 7, 3\] | 0 3        |


## **7. List of Products**

You will receive an **array of products**. Print a **numbered array** of
all the products **ordered by name**.

**Example**

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>['Potatoes', 'Tomatoes', 'Onions', 'Apples']</td>
<td><p>1.Apples</p>
<p>2.Onions</p>
<p>3.Potatoes</p>
<p>4.Tomatoes</p></td>
</tr>
<tr class="even">
<td>['Watermelon', 'Banana', 'Apples']</td>
<td><p>1.Apples</p>
<p>2.Banana</p>
<p>3.Watermelon</p></td>
</tr>
</tbody>
</table>


## **8. Array Manipulations**

Write a function that manipulates an **array of numbers**.

  - **Add {number}:** add a number to the **end** of the array

  - **Remove {number}:** remove **all occurrences** of a particular
    **number** from the array

  - **RemoveAt {index}:** removes number at a **given index**

  - **Insert {number} {index}:** inserts a number at a **given index**

**Note: All the indices will be valid\!**

The **input** comes as an **array of strings**. The first element will
be a string containing the **array to manipulate**. Every other
**command** you receive will also be a string.

The **output** is the manipulated array printed on the console on a
single line, **separated by space**.

**Example**

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>['4 19 2 53 6 43',</p>
<p>'Add 3',</p>
<p>'Remove 2',</p>
<p>'RemoveAt 1',</p>
<p>'Insert 8 3']</p></td>
<td>4 53 6 8 43 3</td>
</tr>
<tr class="even">
<td><p>['6 12 2 65 6 42',</p>
<p>'Add 8',</p>
<p>'Remove 12',</p>
<p>'RemoveAt 3',</p>
<p>'Insert 6 2']</p></td>
<td>6 2 6 65 42 8</td>
</tr>
</tbody>
</table>

