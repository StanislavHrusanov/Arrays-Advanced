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

## **9. Train**

You will be given an **array of strings**.

The **first** element will be **a string containing wagons** (numbers).
Each number inside the string represents **the number of passengers that
are currently in a wagon**.

The **second** element in the array will be **the max capacity of each
wagon** (single number).

The **rest** of the elements will be **commands** in the following
format:

  - **Add** {**passengers**} – add a **wagon** to the end with the given
    number of passengers.

  - {**passengers**} - find an existing wagon to **fit all the
    passengers** (**starting from the first wagon**)

At the end, **print the final state** of the train (all the wagons
**separated** by a space).

### Example

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>['32 54 21 12 4 0 23',</p>
<p>'75',</p>
<p>'Add 10',</p>
<p>'Add 0',</p>
<p>'30',</p>
<p>'10',</p>
<p>'75']</p></td>
<td>72 54 21 12 4 75 23 10 0</td>
</tr>
<tr class="even">
<td><p><strong>['0 0 0 10 2 4',</strong></p>
<p><strong>'10',</strong></p>
<p><strong>'Add 10',</strong></p>
<p><strong>'10',</strong></p>
<p><strong>'10',</strong></p>
<p><strong>'10',</strong></p>
<p><strong>'8',</strong></p>
<p><strong>'6']</strong></p></td>
<td><strong>10 10 10 10 10 10 10</strong></td>
</tr>
</tbody>
</table>

## **10. Distinct Array**

You will be given an **array of integer numbers** on the first line of
the input.

Remove all **repeating elements** from the array.

Print the result elements **separated** by a single space.

### Examples

| **Input**                         | **Output**         | **Comments**                                             |
| --------------------------------- | ------------------ | -------------------------------------------------------- |
| \[1, 2, 3, 4\]                    | 1 2 3 4            | No repeating elements                                    |
| **\[7, 8, 9, 7, 2, 3, 4, 1, 2\]** | **7 8 9 2 3 4 1**  | **7 and 2 are already present in the array remove them** |
| **\[20, 8, 12, 13, 4, 4, 8, 5\]** | **20 8 12 13 4 5** | **4 and 8 are already present in the array remove them** |

## **11. House Party**

Write a function that keeps track of **guests** that are going to a
house party.

You will be given an **array of strings**. Each string will be one of
the following:

  - **"{name} is going\!"**

  - **"{name} is not going\!"**

If you receive the **first type of input**, you have to **add** the
person if he/she **is not** in the list (If he/she is in the list print:
"**{name} is already in the list\!**").

If you receive the **second type of input**, you have to **remove** the
person if he/she **is** in the list (if not print: "**{name} is not in
the list\!**").

At the end print all the guests each on a **separate line**.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>['Allie is going!',</p>
<p>'George is going!',</p>
<p>'John is not going!',</p>
<p>'George is not going!']</p></td>
<td><p><strong>John is not in the list!</strong></p>
<p><strong>Allie</strong></p></td>
</tr>
<tr class="even">
<td><p>['Tom is going!',</p>
<p>'Annie is going!',</p>
<p>'Tom is going!',</p>
<p>'Garry is going!',</p>
<p>'Jerry is going!']</p></td>
<td><p><strong>Tom is already in the list!</strong></p>
<p><strong>Tom</strong></p>
<p><strong>Annie</strong></p>
<p><strong>Garry</strong></p>
<p><strong>Jerry</strong></p></td>
</tr>
</tbody>
</table>

## **12. Sorting**

Write a function that sorts an **array of numbers** so that the first
element is the **biggest** one, the second is the **smallest** one, the
third is the **second** **biggest** one, and the fourth is the
**second** **smallest** one, and so on.

Print the elements on one row, **separated** by a single space.

### Examples

| **Input**                                | **Output**                  |
| ---------------------------------------- | --------------------------- |
| \[1, 21, 3, 52, 69, 63, 31, 2, 18, 94\]  | 94 1 69 2 63 3 52 18 31 21  |
| \[34, 2, 32, 45, 690, 6, 32, 7, 19, 47\] | 690 2 47 6 45 7 34 19 32 32 |

##  **13. Sort an Array by 2 Criteria**

Write a function that orders an **array of strings**, by their
**length** in **ascending order** as **primary criteria**, and by
**alphabetical value** in **ascending order** as **second criteria**.
The comparison should be **case-insensitive**.

The **input** comes as an **array of strings**.

The **output** is the **ordered** array of strings, each on a
**separate** line.

### Examples

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
<td>['alpha', 'beta', 'gamma']</td>
<td><p>beta</p>
<p>alpha</p>
<p>gamma</p></td>
<td></td>
<td>['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']</td>
<td><p>Jack</p>
<p>Isacc</p>
<p>George</p>
<p>Theodor</p>
<p>Harrison</p></td>
</tr>
</tbody>
</table>

### Hints

  - An array can be **sorted** by passing a comparing function to the
    **Array.sort()** function

  - Creating a comparing function by 2 criteria can be achieved by first
    comparing by the **main criteria**, if the 2 items are different
    (the result of the compare is not 0) - return the result as the
    result of the comparing function. If the two items are the same by
    the **main criteria** (the result of the comparison is 0), we need
    to compare by the **second criteria** and the result of that
    comparison is the result of the comparing function

## **14. Bomb Numbers**

Write a function that receives two parameters: **sequence of numbers**
and **special bomb number** with a certain **power**.

Your task is to **detonate every occurrence** of the **special bomb
number** and according to its power **his neighbors from left and
right**. **Detonations are performed from left to right and all
detonated numbers disappear.**

**The input contains two arrays of numbers. The first contains the
initial sequence and the second contains the special bomb number and its
power.**

The output is the **sum of the remaining elements** in the sequence.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th><strong>Comments</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>[1, 2, 2, 4, 2, 2, 2, 9],</p>
<p>[4, 2]</p></td>
<td>12</td>
<td>The special number is <strong>4</strong> with power <strong>2</strong>. After detonation, we are left with the sequence [1, 2, 9] with sum 12.</td>
</tr>
<tr class="even">
<td><p><strong>[1, 4, 4, 2, 8, 9, 1],</strong></p>
<p>[9, <strong>3]</strong></p></td>
<td><strong>5</strong></td>
<td>The special number is <strong>9</strong> with power <strong>3</strong>. After detonation, we are left with the sequence [1, 4] with sum 5. Since the 9 has only 1 neighbor to the right we <strong>remove just it</strong> (one number instead of 3).</td>
</tr>
<tr class="odd">
<td><p><strong>[1, 7, 7, 1, 2, 3],</strong></p>
<p><strong>[7, 1]</strong></p></td>
<td><strong>6</strong></td>
<td><strong>Detonations are performed from left to right. We could not detonate the second occurrence of 7 because its already destroyed by the first occurrence. The numbers [1, 2, 3] survive. Their sum is 6.</strong></td>
</tr>
<tr class="even">
<td><p><strong>[1, 1, 2, 1, 1, 1, 2, 1, 1, 1],</strong></p>
<p>[2, <strong>1]</strong></p></td>
<td><strong>4</strong></td>
<td><strong>The red and yellow numbers disappear in two sequential detonations. The result is the sequence [1, 1, 1, 1]. Sum = 4.</strong></td>
</tr>
</tbody>
</table>

## **15. Search for a Number**

You will receive two **arrays** of **integers**. The second **array is**
containing exactly **three** **numbers**.

**The first** number represents the **number** of **elements** you have
to **take** from the first **array** (**starting** from the **first**
**one**).

**The second** number represents the **number** of **elements** you have
to **delete** from the numbers you took (**starting** from the **first**
**one**).

**The third** number is the **number** we **search** in our collection
after the manipulations.

**As output print** how many times that **number** occurs in our array
in the following format:

**"Number {number} occurs {count} times."**

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th><strong>Comments</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>[5, 2, 3, 4, 1, 6],</strong></p>
<p><strong>[5, 2, 3]</strong></p></td>
<td><strong>Number 3 occurs 1 times.</strong></td>
<td><strong>First, we take 5 elements from the array. Delete the first 2 elements.<br />
Then we search for the number 3.</strong></td>
</tr>
<tr class="even">
<td><p><strong>[7, 1, 5, 8, 2, 7],</strong></p>
<p><strong>[3, 1, 5]</strong></p></td>
<td><strong>Number 5 occurs 1 times.</strong></td>
<td></td>
</tr>
</tbody>
</table>

## **16. \*Array Manipulator**

Write a function that **receives an array of integers** and an **array
of string commands** and **executes them over the array**. The commands
are as follows:

  - **add \<index\> \<element\>** – adds element at the specified index
    (elements right from this position inclusively are shifted to the
    right).

  - **addMany \<index\>\<element 1\> \<element 2\> … \<element n\>** –
    adds a set of elements at the specified index.

  - **contains \<element\>** – prints the index of the first occurrence
    of the specified element (**if exists**) in the array or **-1** if
    the element is not found.

  - **remove \<index\>** – removes the element at the specified index.

  - **shift \<positions\>** – **shifts every element** of the array the
    number of positions **to the** **left** (with rotation).
    
      - For example, \[1, 2, 3, 4, 5\] -\> shift 2 -\> \[3, 4, 5, 1, 2\]

  - **sumPairs** – sums the elements in the array by pairs (first +
    second, third + fourth, …).
    
      - For example, \[1, 2, 4, 5, 6, 7, 8\] -\> \[3, 9, 13, 8\].

  - **print** – stop receiving more commands and print the last state of
    the array in the following format:

**\`\[ {element1}, {element2}, …elementN} \]\`**

**Note:** The elements in the array must be **joined** by **comma** and
**space** **(, )**.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>[1, 2, 4, 5, 6, 7],</p>
<p>['add 1 8', 'contains 1', 'contains 3', 'print']</p></td>
<td><p>0</p>
<p>-1</p>
<p>[ 1, 8, 2, 4, 5, 6, 7 ]</p></td>
</tr>
<tr class="even">
<td><p><strong>[1, 2, 3, 4, 5],</strong></p>
<p><strong>['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']</strong></p></td>
<td><p><strong>-1</strong></p>
<p><strong>[ 2, 3, 5, 9, 8, 7, 6, 5, 1 ]</strong></p></td>
</tr>
</tbody>
</table>

## **17. \*Gladiator Inventory**

As a gladiator, Peter has a cool **Inventory**. He loves to buy new
equipment. You are given Peter’s inventory with all of his equipment -\>
**strings**, separated by whitespace.

You may receive the following **commands**:

  - Buy {equipment}

  - Trash {equipment}

  - Repair {equipment}

  - Upgrade {equipment}-{upgrade}

If you receive the **Buy command**, you should **add** the equipment at
the last position in the inventory, but only if it isn't bought already.

If you receive the **Trash command**, **delete** the equipment if it
exists.

If you receive the **Repair command**, you should **repair** the
equipment if it exists and place it in the **last position**.

If you receive the **Upgrade command**, you should check if the
equipment exists and **insert** after it the upgrade in the following
format: "**{equipment}:{upgrade}"**.

### Input / Consrtaints

You will receive an **array of strings**. Each element of the array is a
command.

  - In the **first input element,** you will receive Peter's
    **inventory** – a sequence of equipment names, separated by space.

### Output

As **output**, you must print Peter's **inventory** on one line,
**separated** by a space.

### Constraints

  - The **command will always be valid.**

  - The **equipment** and **Upgrade** will be strings and will contain
    any character, except **'-'**.

<!-- end list -->

  - Allowed working **time** / **memory**: **100ms** / **16MB**.

***Scroll down to see examples.***

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th><strong>Comment</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>['SWORD Shield Spear',</p>
<p>'Buy Bag',</p>
<p>'Trash Shield',</p>
<p>'Repair Spear',</p>
<p>'Upgrade SWORD-Steel']</p></td>
<td>SWORD SWORD:Steel Bag Spear</td>
<td><p>We receive the inventory =&gt; SWORD, Shield, Spear</p>
<p>We Buy Bag =&gt; SWORD, Shield, Spear, Bag</p>
<p>Trash Shield =&gt; SWORD, Spear, Bag</p>
<p>Repair Spear =&gt; SWORD, Bag, Spear</p>
<p>We add Upgrade =&gt; SWORD, SWORD:Steel, Bag,Spear</p>
<p>We print the inventory.</p></td>
</tr>
<tr class="even">
<td><p>['SWORD Shield Spear',</p>
<p>'Trash Bow',</p>
<p>'Repair Shield',</p>
<p>'Upgrade Helmet-V']</p></td>
<td>SWORD Spear Shield</td>
<td></td>
</tr>
</tbody>
</table>

## **18. \*Build a Wall** 

Write a program that keeps track of the construction of a **30-foot**
wall. You will be given an **array of strings** that must be **parsed**
as **numbers**, representing the initial height of mile-long sections of
the wall, in feet. Each section has its construction crew that can **add
1** foot of height per day by using 195 cubic yards of concrete. All
crews work simultaneously (see examples), meaning all sections that
aren't completed (are less than 30 feet high) **grow** by 1 foot every
day. When a section of the wall is complete, its crew is relieved.

Your program needs to keep track of how much concrete is used **daily**
until the completion of the entire wall. In the end, print on a single
line, separated by comma and space, the amount of **concrete** used each
**day**, and on a second line, the **final cost** of the wall. One cubic
yard of concrete costs **1900** pesos.

### Input 

Your program will receive an **array of strings** representing **numbers
as a parameter**.

### Output 

Print on the console on **one line** the **amount of concrete used each
day separated by comma and space**, and on a **second line**, the
**final cost** of the wall.

### Constraints 

  - The wall may contain up to 2000 sections (2000 elements in the
    initial array)

  - Starting height for each section is within the range \[0…30\]

### Examples 

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>[21, 25, 28]</td>
<td><p><strong>585, 585, 390, 390, 390, 195, 195, 195, 195</strong></p>
<p><strong>5928000 pesos</strong></p></td>
</tr>
</tbody>
</table>

### Explanation 

On the first day, all **three** crews work, each adding 1 **foot** to
their section, 585 cubic yards total (3 x 195). On the second day, it's
the same with the last section reaching 30 feet and its crew being
**relieved** (marked in red while they don't work). On the third day,
only **two** crews work, using up 390 cubic yards total. This continues
for 2 more days, with the second section reaching 30 feet. In the
remaining 4 days, only 1 crew works, using 195 cubic yards every day.
Over the entire period, 3120 cubic yards of concrete were used, costing
5'928'000 pesos. And that was for just 3 miles, imagine 2000\!

| **Starting** | **\[21, 25, 28\]** |
| ------------ | ------------------ |
| **Day 1**    | **\[22, 26, 29\]** |
| **Day 2**    | **\[23, 27, 30\]** |
| **Day 3**    | **\[24, 28, 30\]** |
| **Day 4**    | **\[25, 25, 30\]** |
| **Day 5**    | **\[26, 30, 30\]** |
| **Day 6**    | **\[27, 30, 30\]** |
| **Day 7**    | **\[28, 30, 30\]** |
| **Day 8**    | **\[29, 30, 30\]** |
| **Day 9**    | **\[30, 30, 30\]** |

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>[17]</td>
<td><p><strong>195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195</strong></p>
<p><strong>4816500 pesos</strong></p></td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>[17, 22, 17, 19, 17]</td>
<td><p><strong>975, 975, 975, 975, 975, 975, 975, 975, 780, 780, 780, 585, 585</strong></p>
<p><strong>21489000 pesos</strong></p></td>
</tr>
</tbody>
</table>
