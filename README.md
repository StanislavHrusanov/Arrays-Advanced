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

## **19. Equal Neighbors**

Write a function that finds the number of **equal neighbor** **pairs**
inside a matrix of variable size and type (numbers or strings).

The **input** comes as an **array of arrays**, containing string
elements (2D matrix of strings).

The **output** is the return **value** of your function. Save the number
of equal pairs, you find and return it.

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
<td><p>[['2', '3', '4', '7', '0'],</p>
<p>['4', '0', '5', '3', '4'],</p>
<p>['2', '3', '5', '4', '2'],</p>
<p>['9', '8', '7', '5', '4']]</p></td>
<td>1</td>
<td></td>
<td><p>[['test', 'yo', 'yo', 'ho'],</p>
<p>['well', 'done', 'no', '6'],</p>
<p>['not', 'done', 'yet', '5']]</p></td>
<td>2</td>
</tr>
</tbody>
</table>

## **20. Bunny Kill**

*In the underground world of bunnies, mafia and corruption have taken
over. Snowball is on a mission to infiltrate a certain deserted military
hanger, supposedly filled with convict bunnies.*

You will be given a **matrix** of integers, each integer separated by a
**single space**, and each row on a new line, which will represent the
current situation in the hangar. Then on the last line of input, you
will receive indexes - **coordinates** to several cells in the hangar
separated by a **single space**, in the following format: **row1,column1
row2,column2 row3,column3…**

On those cells, there are bunnies with **bombs**. Snowball is smart and
knows that bombs are an easy way to neutralize enemies, especially when
they are the enemy’s bombs.

Snowball will proceed to eliminate **every** **bunny with a bomb**, one
by one in the order they were given. When a bunny with a bomb is killed,
it **explodes** and deals damage **equal** to its **integer** **value**,
to **all** the cells **around** it (in every direction and all
diagonals). If a bomb bunny is caught in the explosion and killed, that
bomb is no longer valid and will **not explode**. When a bunny is
damaged, it **reduces** its integer value by the **damage** value. When
a bunny’s value reaches **0**, **it dies**. When a bunny explodes, **it
dies**.

When Snowball is done with all the bomb bunnies, he will proceed to kill
any other convict bunny, which has remained **alive**. You must count
all the **damage** Snowball did in the hangar. Note that bomb explosion
damage **does not** count as Snowballs damage, but the killing of bomb
bunnies and other bunnies **DOES.** Snowball’s damage for every bunny is
equal to the bunny at that cell’s **integer value**.

### Input

  - The input data is passed to the first function found in your code as
    an **array of strings**.

  - Each entry in the array represents a row of the matrix, in the form
    of integers separated by a space.

  - On the last line, you will receive the coordinates of the cells with
    the bomb bunnies.

### Output

  - On the first line, you need to print Snowball’s **damage**.

  - On the second line, you need to print the number of bunnies, who
    **HE** killed.

### Constraints

  - The size of the matrix will be between **\[0…1000\].**

  - The coordinates to the bomb bunnies will **always** be in the
    matrix.

  - The integers of the matrix will be in the range **\[0…10000\].**

  - Allowed time/memory: 250ms/16MB

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
<td><p>['10 10 10',</p>
<p>'10 10 10',</p>
<p>'10 10 10',</p>
<p>'0,0']</p></td>
<td><p>60</p>
<p>6</p></td>
<td>The blue number represents a bunny which is a bomb. The red numbers are bunnies that have been hit by the exploding bunny. Since the exploding bunny has a value of 10, all the damaged bunnies suffer 10 damage. Since their values are also 10, the explosion kills them and they are no longer valid targets for Snowball. So in total Snowball deals 60 dmg (the 5 untargeted bunnies + the exploding one) and kills 6 units.</td>
</tr>
</tbody>
</table>

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
<td><p>['5 10 15 20',</p>
<p>'10 10 10 10',</p>
<p>'10 15 10 10',</p>
<p>'10 10 10 10',</p>
<p>'2,2 0,1']</p></td>
<td><p>70</p>
<p>7</p></td>
<td><p>Here the purple bunnies are caught in the explosion, but since their values are bigger than the exploding bunny’s value – they don’t die and are left for Snowball to kill.</p>
<p>The damage Snowball deals here is 10 + 10 + 5 + 20 + 10 + 5 + 10 = 70. The values for the bunnies who survived the explosion are 5 because the explosion reduced their initial values</p>
<p>15 (initial) – 10 (exploding bunny) = 5</p></td>
</tr>
</tbody>
</table>

## **21. Air Pollution**

Write a program that tracks the **pollution** **in the air** Sofia. You
will receive **two arguments** – the **first** is the **map** of Sofia
represented by a **matrix of numbers** and the second is an **array of
strings** representing the **forces** **affecting** the **air quality**.
The **map** will **always** be with **5 rows** and **5 columns** in a
**total** **of** **25 elements - blocks**. Each block’s particle
pollution (PM) is **affected** by **3 forces** received in the following
formats**:**

  - **"breeze {index}" –** index is **the row** where **all column’s
    value drops** by **15** PM

  - **"gale {index}" –** index is **the column in all rows** where
    **value drops** by **20** PM

  - **"smog {value}" – all** **blocks** in the map **increase** equally
    by **the given value’s** PM

The threshold in each block is **50** PM. If it is **below** **that
number**, the block’s air is considered **normal** but if it **reaches
or goes over it,** that block’s air is considered **polluted**. Also,
note that the **polluted particles** in a block **cannot go below**
**zero**.

Finally, your program needs to **find** if there are **any polluted
blocks** and **print them** in the format given below.

**Input**

You will receive **two** **arguments**:

  - The **first** argument is an **array with five strings** – **rows**
    of the matrix with **columns separated by space** that must be
    parsed as **numbers**, representing the **map of Sofia**.

  - The **second** argument is an **array of strings** – each **string**
    consists of one of the **words (breeze/gale/smog)** and a **number**
    **separated by space**, representing the **different forces**.

**Output**

Print on the **console a single line**:

  - If there are **polluted blocks** in the map, **use** their
    **coordinates** in the following format:

<!-- end list -->

  - **"\[{rowIndex}-{columnIndex}\]"**

> Note that you must **start** from the **top left corner** of the map
> moving to the **bottom right corner** **horizontally**. Then
> **separate** each **formatted block’s coordinates** with **comma and
> space** and print them in a single line in the following format:

  - **"Polluted areas: {block1}, {block2}, {block3}, …"**

<!-- end list -->

  - If there are **no polluted blocks** in the map print:

<!-- end list -->

  - **"No polluted areas"**

**Constraints**

  - The **number** of **rows** and **columns** for the **matrix** will
    **always** be **5**

  - The **number** in each block will be an **integer** in the range
    **\[0..1000\] inclusive**

  - The **number** of **elements** in the **second input argument** will
    be in the range **\[0..100\] inclusive**

  - Given **smog’s** **value** will be an **integer** in the range
    **\[0..100\] inclusive**

  - Given **indexes** will **always** be **valid**

**Examples**

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>['5 7 72 14 4',</p>
<p>'41 35 37 27 33',</p>
<p>'23 16 27 42 12',</p>
<p>'2 20 28 39 14',</p>
<p>'16 34 31 10 24'],</p>
<p>['breeze 1', 'gale 2', 'smog 25']</p></td>
<td><strong>Polluted areas: [0-2], [1-0], [2-3], [3-3], [4-1]</strong></td>
</tr>
</tbody>
</table>

**Explanation**

Graphic diagram explaining the **first example’s** program flow:

![](media/image1.PNG)

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>['5 7 3 28 32',</p>
<p>'41 12 49 30 33',</p>
<p>'3 16 20 42 12',</p>
<p>'2 20 10 39 14',</p>
<p>'7 34 4 27 24'],</p>
<p>['smog 11', 'gale 3', 'breeze 1', 'smog 2']</p></td>
<td><strong>No polluted areas</strong></td>
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
<td><p>['5 7 2 14 4',</p>
<p>'21 14 2 5 3',</p>
<p>'3 16 7 42 12',</p>
<p>'2 20 8 39 14',</p>
<p>'7 34 1 10 24'],</p>
<p>['breeze 1', 'gale 2', 'smog 35']</p></td>
<td><strong>Polluted areas: [2-1], [2-3], [3-1], [3-3], [4-1], [4-4]</strong></td>
</tr>
</tbody>
</table>

## **22. Jan's Notation**

Write a program that parses a series of instructions written in
**postfix notation** and executes them (postfix means the operator is
written **after** the operands). You will receive a **series of
instructions** – if the instruction is a **number**, **save it**;
otherwise, the instruction is an **arithmetic operator** (**+-\*/**) and
you must apply it to the most two **most recently saved** numbers.
**Discard** these two numbers and in their place, **save the result** of
the operation – this number is now eligible to be an **operand** in a
subsequent operation. Keep going until all input instructions have been
exhausted, or you encounter an **error**.

In the end, if you’re left with a **single saved number**, this is the
**result** of the calculation and you must **print** it. If there are
more numbers saved, then the user-supplied **too many instructions** and
you must print "**Error: too many operands\!**". If at any point during
the calculation you **don’t have** two numbers saved, the user-supplied
**too few instructions** and you must print "**Error: not enough
operands\!**". ***See the examples for more details.***

**Input**

You will receive an array with numbers **and** strings – the numbers
will be **operands** and must be saved; the strings will be **arithmetic
operators** that must be applied to the operands.

**Output**

Print on the **console** on a single line the **final result** of the
calculation or an **error message**, as instructed above.

**Constraints**

  - The **numbers** (operands) will be integers

  - The **strings** (operators) will always be one of **+-\*/**

  - The result of each operation will be in the range
    \[-2<sup>53</sup>…2<sup>53</sup>-1\] (**MAX\_SAFE\_INTEGER** will
    **never** be exceeded)

**Examples**

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th><strong>Explanation</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>[3,</p>
<p>4,</p>
<p>'+']</p></td>
<td><strong>7</strong></td>
<td><p>The first instruction is a <strong>number</strong>, therefore we <strong>save</strong> it. The next one is also a <strong>number</strong>, we <strong>save</strong> it too.</p>
<p>The third instruction is a <strong>string</strong>, so it must be an <strong>operator</strong> – we <strong>remove the last two</strong> numbers we saved, and operate: <strong>3+4=7</strong>. The result of this operation is then <strong>saved</strong> where the two operands <strong>used to be</strong>.</p>
<p>We’ve run out of instructions, so we check the saved values – we only have <strong>one</strong>, so this must be the <strong>final result</strong>. We <strong>print</strong> it on the console.</p></td>
</tr>
<tr class="even">
<td><p>[5,</p>
<p>3,</p>
<p>4,</p>
<p>'*',</p>
<p>'-']</p></td>
<td><strong>-7</strong></td>
<td><p>We save in order <strong>5</strong>, <strong>3,</strong> and <strong>4</strong>. The result of the operation <strong>3*4</strong> is <strong>12</strong>, which we <strong>save in place</strong> of <strong>3</strong> and <strong>4</strong>.</p>
<p>Currently, we have <strong>5</strong> and <strong>12</strong> saved. The result of the operation <strong>5-12</strong> is <strong>-7</strong>, which we <strong>save in place</strong> of <strong>5</strong> and <strong>12</strong>.</p>
<p>We have no more instructions and <strong>only one</strong> value saved, which we <strong>print</strong>.</p></td>
</tr>
</tbody>
</table>

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
<td><p>[7,</p>
<p>33,</p>
<p>8,</p>
<p>'-']</p></td>
<td><strong>Error: too many operands!</strong></td>
<td></td>
<td><p>[15,</p>
<p>'/']</p></td>
<td><strong>Error: not enough operands!</strong></td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th><strong>Explanation</strong></th>
<th></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th><strong>Explanation</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>[31,</p>
<p>2,</p>
<p>'+',</p>
<p>11,</p>
<p>'/']</p></td>
<td><strong>3</strong></td>
<td><strong>(31+2)/11</strong></td>
<td></td>
<td><p>[-1,</p>
<p>1,</p>
<p>'+',</p>
<p>101,</p>
<p>'*',</p>
<p>18,</p>
<p>'+',</p>
<p>3,</p>
<p>'/']</p></td>
<td><strong>6</strong></td>
<td><strong>(-1+1)*101+18/3</strong></td>
</tr>
</tbody>
</table>

## **23. Rosetta Stone**

You will be given an **encoded message** and a **template matrix** for
**decoding** it. The decoding is done by overlaying the template on top
of the stone with the message and performing an **arithmetic operation**
with the numbers that overlap. Each pair of numbers (one from the
message and one from the template matrix) is **added** together and the
resulting number is located on the wheel of letters (pictured to the
![](media/image11.png)right), by counting from the beginning (**zero**)
and going **clockwise**. You may count **more than one full revolution**
around the wheel (e.g. 6 is the same as 33 and so on). Repeat this
process for all symbols of the message.

If the decoding template matrix is **smaller** than the message, **shift
the template** **horizontally** by as many cells as it is wide, so it
covers the next section of the message (see example). Once you reach the
last column of the message matrix, if there are more rows left,
**shift** the template back to the **first column**, but **offset it
vertically** by as many cells as it is high. See the example’s
explanation for more information.

**Input**

You will receive an **array of strings**. The first element represents a
number **n**, which is the length of the **template matrix** for
decoding. The next **n** elements represent rows in the decoding
template matrix, with columns **separated by space**. The rest of the
elements are all rows of the **encoded message matrix**, with columns in
each row **separated by space**.

**Output**

Print the decoded message in **uppercase** on a single line on the
**console**. The final message is joined from all resulting cells,
starting from **top left**, going right, **row by row**. Trailing spaces
are **ignored**.

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
<td><p>[ '2',</p>
<p>'59 36',</p>
<p>'82 52',</p>
<p>'4 18 25 19 8',</p>
<p>'4 2 8 2 18',</p>
<p>'23 14 22 0 22',</p>
<p>'2 17 13 19 20',</p>
<p>'0 9 0 22 22' ]</p></td>
<td><strong>I CAME I SAW I CONQUERED</strong></td>
</tr>
</tbody>
</table>

#### Explanation

The line highlighted in red in the input is the number of lines of the
decoding template matrix. The lines highlighted in blue are the decoding
template itself. The remaining lines are the encoded message matrix.
When we overlay the template over the message, 59 and 36 from the first
line are on top of 4 and 18, 82 and 52 are on top of 4 and 2.

![](media/image12.png)

<table>
<thead>
<tr class="header">
<th><p>We add each pair to get 63 and 54 on the first line and 86 and 54 on the second. Looking up these numbers on the wheel of letters yields the following:</p>
<ul>
<li><p>For 63 we count two full revolutions and then we count 9 more, which corresponds to the letter ‘I’</p></li>
<li><p>For 54 we count exactly two full revolutions, ending at 0, which is empty space</p></li>
<li><p>For 86 we count 3 full revolutions and 5 more, ending at ‘E’</p></li>
<li><p>For 54 we get empty space again</p></li>
</ul></th>
<th><img src="media/image13.png" style="width:1.45in;height:2.30527in" /></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>We’ve run out of slots on the template, so we shift it 2 indexes to the right (the width of the template is 2), to decode the next segment of the message. This time we overlay it on top of 25, 19, 8, and 2, and after adding the numbers, we get 84, 55, 90, and 54. They correspond to ‘C’, ‘A’, ‘I’ and empty space, respectively.</td>
<td><img src="media/image14.png" style="width:1.44167in;height:2.29203in" /></td>
</tr>
<tr class="even">
<td>We keep repeating this for the entire message. Once we reach the end of the row, we shift the template down by its height (2 cells) and back to the beginning of the message. Any slots of the template that overhang at the end of the row are ignored.</td>
<td><img src="media/image15.png" style="width:1.56634in;height:1.98333in" /><img src="media/image16.png" style="width:2.01667in;height:2.00091in" /></td>
</tr>
<tr class="odd">
<td>The process is repeated for all remaining cells of the message. Note any parts of the template matrix that overhang below are ignored.</td>
<td></td>
</tr>
<tr class="even">
<td><img src="media/image17.png" style="width:6.57292in;height:2.125in" /></td>
<td></td>
</tr>
<tr class="odd">
<td><img src="media/image18.png" style="width:6.6in;height:2.12487in" /></td>
<td></td>
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
<td><p>[ '2',</p>
<p>'31 32',</p>
<p>'74 37',</p>
<p>'19 0 23 25',</p>
<p>'22 3 12 17',</p>
<p>'5 9 23 11',</p>
<p>'12 18 10 22' ]</p></td>
<td><strong>WE COME IN PEACE</strong></td>
</tr>
</tbody>
</table>
