const QUESTIONS = [
  // ==========================================
  // CATEGORY 1: Pedagogy & Mental Ability (1-10)
  // ==========================================
  {
    id: 1,
    category: "Pedagogy & Mental Ability",
    question: "According to Jean Piaget's theory of cognitive development, during which stage does a child develop the concept of 'conservation'?",
    options: [
      "Sensorimotor stage",
      "Preoperational stage",
      "Concrete operational stage",
      "Formal operational stage"
    ],
    correctIndex: 2,
    explanation: "According to Piaget, conservation (the understanding that quantity doesn't change even if shape changes) is developed during the Concrete Operational Stage (typically ages 7-11)."
  },
  {
    id: 2,
    category: "Pedagogy & Mental Ability",
    question: "Which of the following models of instruction is highly collaborative and places students in groups to achieve shared learning goals?",
    options: [
      "Direct Instruction Model",
      "Cooperative Learning Model",
      "Inquiry-Based Learning Model",
      "Programmed Instruction Model"
    ],
    correctIndex: 1,
    explanation: "Cooperative Learning Model focuses on structured student-group cooperation to maximize learning and achieve collective goals."
  },
  {
    id: 3,
    category: "Pedagogy & Mental Ability",
    question: "In the context of instructional design, what does the acronym 'ADDIE' stand for?",
    options: [
      "Analysis, Design, Development, Implementation, Evaluation",
      "Assessment, Design, Delivery, Integration, Examination",
      "Analysis, Delivery, Development, Instruction, Evaluation",
      "Assessment, Diagram, Development, Implementation, Evaluation"
    ],
    correctIndex: 0,
    explanation: "ADDIE stands for Analyze, Design, Develop, Implement, and Evaluate. It is a classic framework used by instructional designers and training developers."
  },
  {
    id: 4,
    category: "Pedagogy & Mental Ability",
    question: "What is the primary role of formative assessment in a classroom?",
    options: [
      "To assign grades and rank students at the end of a semester",
      "To provide feedback to both teachers and students to modify learning activities in progress",
      "To certify student completion of standard curriculum objectives",
      "To conduct standardized national comparative tests"
    ],
    correctIndex: 1,
    explanation: "Formative assessment is diagnostic and ongoing. Its primary role is to monitor student learning and provide ongoing feedback to improve teaching and learning."
  },
  {
    id: 5,
    category: "Pedagogy & Mental Ability",
    question: "In a certain code language, if 'COMPUTER' is written as 'RFUVQNPC', then how will 'MEDICINE' be written in that same code?",
    options: [
      "EOJDEJFM",
      "EOJDJEFM",
      "DJEFMEOJ",
      "EOJDEJMF"
    ],
    correctIndex: 1,
    explanation: "The logic is: Reverse the word except the first and last letters, then increment those reversed middle letters by +1. First letter and last letter swap positions. For COMPUTER: C and R swap to R...C. OMPUTE reversed is ETUPMO. Incrementing each by 1: E->F, T->U, U->V, P->Q, M->N, O->P. Giving RFUVQNPC. For MEDICINE: M and E swap to E...M. EDICIN reversed is NICIDE. Incrementing: N->O, I->J, C->D, I->J, D->E, E->F. Result is EOJDJEFM."
  },
  {
    id: 6,
    category: "Pedagogy & Mental Ability",
    question: "Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?",
    options: [
      "7",
      "10",
      "12",
      "13"
    ],
    correctIndex: 1,
    explanation: "This is an alternating addition and subtraction series. First, 3 is added, then 2 is subtracted (7+3=10, 10-2=8, 8+3=11, 11-2=9, 9+3=12, 12-2=10)."
  },
  {
    id: 7,
    category: "Pedagogy & Mental Ability",
    question: "Pointing to a photograph, Suresh said, 'He is the son of the only son of my mother.' How is Suresh related to that boy?",
    options: [
      "Brother",
      "Uncle",
      "Cousin",
      "Father"
    ],
    correctIndex: 3,
    explanation: "The 'only son of my mother' is Suresh himself. Therefore, the boy in the photograph is Suresh's son, making Suresh the father."
  },
  {
    id: 8,
    category: "Pedagogy & Mental Ability",
    question: "Choose the statement that represents a valid conclusion based on the premises: 1. All programmers are logical. 2. Some designers are programmers.",
    options: [
      "All designers are logical.",
      "Some designers are logical.",
      "No designer is logical.",
      "All logical people are programmers."
    ],
    correctIndex: 1,
    explanation: "Since some designers are programmers, and all programmers are logical, those designers who are programmers must also be logical. Thus, 'Some designers are logical' is a valid conclusion."
  },
  {
    id: 9,
    category: "Pedagogy & Mental Ability",
    question: "Which cognitive domain level in Bloom's Revised Taxonomy involves breaking down information into component parts to explore relationships?",
    options: [
      "Remembering",
      "Applying",
      "Analyzing",
      "Evaluating"
    ],
    correctIndex: 2,
    explanation: "Analyzing refers to breaking down information into constituent parts and determining how the parts relate to one another and to an overall structure."
  },
  {
    id: 10,
    category: "Pedagogy & Mental Ability",
    question: "Three of the following four are alike in a certain way and so form a group. Which is the one that does not belong to that group?",
    options: [
      "Router",
      "Bridge",
      "Hub",
      "SQL Server"
    ],
    correctIndex: 3,
    explanation: "Router, Bridge, and Hub are network hardware devices. SQL Server is a software relational database management system (RDBMS)."
  },

  // =========================================================
  // CATEGORY 2: Computer Fundamentals & Number Systems (11-22)
  // =========================================================
  {
    id: 11,
    category: "Computer Fundamentals & Number Systems",
    question: "Convert the binary number (11011.101)₂ to its decimal equivalent.",
    options: [
      "27.625",
      "27.5",
      "25.625",
      "27.375"
    ],
    correctIndex: 0,
    explanation: "Integral part: (11011)₂ = 16 + 8 + 0 + 2 + 1 = 27. Fractional part: (0.101)₂ = 1*(2⁻¹) + 0*(2⁻²) + 1*(2⁻³) = 0.5 + 0 + 0.125 = 0.625. Total decimal equivalent = 27.625."
  },
  {
    id: 12,
    category: "Computer Fundamentals & Number Systems",
    question: "What is the 2's complement representation of the decimal number -18 in an 8-bit registers system?",
    options: [
      "11101110",
      "11101100",
      "11101010",
      "11001110"
    ],
    correctIndex: 0,
    explanation: "Decimal 18 in binary (8-bit) is 00010010. 1's complement is 11101101. Add 1 for 2's complement: 11101101 + 1 = 11101110."
  },
  {
    id: 13,
    category: "Computer Fundamentals & Number Systems",
    question: "In the IEEE 754 single-precision floating-point format, how many bits are allocated for the sign, exponent, and mantissa (fraction) respectively?",
    options: [
      "1, 8, 23",
      "1, 11, 20",
      "1, 11, 52",
      "2, 8, 22"
    ],
    correctIndex: 0,
    explanation: "The single-precision IEEE 754 standard uses a total of 32 bits: 1 bit for sign, 8 bits for biased exponent, and 23 bits for the mantissa (fraction)."
  },
  {
    id: 14,
    category: "Computer Fundamentals & Number Systems",
    question: "Which of the following logic gates is called a universal gate because any Boolean function can be implemented using it alone?",
    options: [
      "AND",
      "OR",
      "NAND",
      "XOR"
    ],
    correctIndex: 2,
    explanation: "NAND and NOR gates are known as universal gates because any other gate (AND, OR, NOT, etc.) can be constructed using only these gates."
  },
  {
    id: 15,
    category: "Computer Fundamentals & Number Systems",
    question: "Simplify the Boolean expression: Y = AB + A(B + C) + B(B + C).",
    options: [
      "A + B",
      "B + AC",
      "A + BC",
      "AB + C"
    ],
    correctIndex: 1,
    explanation: "Expand the terms: Y = AB + AB + AC + BB + BC. Since AB + AB = AB and BB = B, we get Y = AB + AC + B + BC. Combine terms with B: Y = B(A + 1 + C) + AC. Since (A + 1 + C) = 1, we get Y = B + AC."
  },
  {
    id: 16,
    category: "Computer Fundamentals & Number Systems",
    question: "How many selection lines are required for a 32-to-1 Multiplexer (MUX)?",
    options: [
      "4",
      "5",
      "6",
      "32"
    ],
    correctIndex: 1,
    explanation: "For a 2ⁿ-to-1 multiplexer, n selection lines are required. Here, 32 = 2⁵, so n = 5 selection lines are needed."
  },
  {
    id: 17,
    category: "Computer Fundamentals & Number Systems",
    question: "Which cache memory mapping technique maps each block of main memory to exactly one possible cache line?",
    options: [
      "Direct Mapping",
      "Fully Associative Mapping",
      "Set Associative Mapping",
      "Dynamic Mapping"
    ],
    correctIndex: 0,
    explanation: "In Direct Mapping, block k of main memory maps to cache line (k mod N), where N is the total number of lines in the cache. Each block has exactly one target line."
  },
  {
    id: 18,
    category: "Computer Fundamentals & Number Systems",
    question: "What is the ASCII value of the uppercase character 'A' in decimal?",
    options: [
      "48",
      "65",
      "97",
      "98"
    ],
    correctIndex: 1,
    explanation: "The ASCII code for 'A' is 65. ('a' is 97, and '0' is 48)."
  },
  {
    id: 19,
    category: "Computer Fundamentals & Number Systems",
    question: "Which of the following register holds the address of the next instruction to be fetched and executed?",
    options: [
      "Instruction Register (IR)",
      "Memory Address Register (MAR)",
      "Program Counter (PC)",
      "Accumulator (AC)"
    ],
    correctIndex: 2,
    explanation: "The Program Counter (PC) stores the memory address of the next instruction that the CPU needs to fetch and execute."
  },
  {
    id: 20,
    category: "Computer Fundamentals & Number Systems",
    question: "What does the term 'DMA' stand for in computer systems design?",
    options: [
      "Direct Memory Access",
      "Dynamic Memory Allocation",
      "Distributed Memory Architecture",
      "Data Management Assembly"
    ],
    correctIndex: 0,
    explanation: "DMA stands for Direct Memory Access. It allows hardware subsystems to access main system memory independently of the central processing unit (CPU)."
  },
  {
    id: 21,
    category: "Computer Fundamentals & Number Systems",
    question: "Which type of ROM can be erased by exposing it to ultraviolet light and then rewritten?",
    options: [
      "PROM",
      "EPROM",
      "EEPROM",
      "Flash ROM"
    ],
    correctIndex: 1,
    explanation: "EPROM (Erasable Programmable Read-Only Memory) is erased by exposing the chip to strong ultraviolet light through a transparent quartz window. EEPROM is erased electrically."
  },
  {
    id: 22,
    category: "Computer Fundamentals & Number Systems",
    question: "According to Flynn's taxonomy, modern multi-core processor systems with multiple threads operating on different data subsets represent which architecture?",
    options: [
      "SISD",
      "SIMD",
      "MISD",
      "MIMD"
    ],
    correctIndex: 3,
    explanation: "MIMD (Multiple Instruction streams, Multiple Data streams) represents systems where multiple autonomous processors simultaneously execute different instructions on different data."
  },

  // ================================================================
  // CATEGORY 3: Programming Fundamentals (C, C++, Java, Python) (23-37)
  // ================================================================
  {
    id: 23,
    category: "Programming Fundamentals (C, C++, Java, Python)",
    question: "In C, what is the output of the following code snippet?\n#include <stdio.h>\nint main() {\n    int a = 5;\n    int *p = &a;\n    printf(\"%d\", *p++);\n    return 0;\n}",
    options: [
      "5",
      "6",
      "Garbage value",
      "Compiler Error"
    ],
    correctIndex: 0,
    explanation: "The operator precedence of postfix ++ is higher than dereference *, but it operates as a postfix. So *p++ evaluates to *p (which is a's value, 5) and then increments the pointer p itself, not the value stored at p. So it prints 5."
  },
  {
    id: 24,
    category: "Programming Fundamentals (C, C++, Java, Python)",
    question: "Which of the following OOP concepts refers to the ability of different classes to respond to the same message/method call in their own unique way?",
    options: [
      "Inheritance",
      "Encapsulation",
      "Polymorphism",
      "Abstraction"
    ],
    correctIndex: 2,
    explanation: "Polymorphism (specifically dynamic polymorphism) allows methods with the same signature to behave differently depending on the object executing them."
  },
  {
    id: 25,
    category: "Programming Fundamentals (C, C++, Java, Python)",
    question: "In C++, how is a virtual function declared in a base class to create a 'Pure Virtual Function'?",
    options: [
      "virtual void draw() = 0;",
      "virtual void draw();",
      "void draw() = virtual;",
      "pure virtual void draw();"
    ],
    correctIndex: 0,
    explanation: "A pure virtual function is declared by appending '= 0' to its virtual function declaration. This makes the class abstract."
  },
  {
    id: 26,
    category: "Programming Fundamentals (C, C++, Java, Python)",
    question: "In C++, what is the 'Diamond Problem' related to?",
    options: [
      "Memory leak during dynamic allocations",
      "Ambiguity in multiple inheritance",
      "Infinite recursion in templates",
      "Destructor call order in single inheritance"
    ],
    correctIndex: 1,
    explanation: "The Diamond Problem occurs in multiple inheritance when a class inherits from two classes that both inherit from a single common grandparent class, creating ambiguity when accessing grandparent members."
  },
  {
    id: 27,
    category: "Programming Fundamentals (C, C++, Java, Python)",
    question: "In Java, what is the key difference between the keywords 'final', 'finally', and 'finalize'?",
    options: [
      "They are identical and used interchangeably depending on Java version",
      "'final' is a modifier, 'finally' is a block for try-catch exception handling, and 'finalize' is a method called by the garbage collector",
      "'final' is used for exception handling, 'finally' is for garbage collection, and 'finalize' is for declaring constant values",
      "'final' makes a class inherit-only, 'finally' marks class methods static, and 'finalize' terminates threads"
    ],
    correctIndex: 1,
    explanation: "'final' restricts classes, variables, or methods (constants/non-overridable). 'finally' is a block in exception handling that always executes. 'finalize()' is a protected method of java.lang.Object called by the garbage collector before discarding an object."
  },
  {
    id: 28,
    category: "Programming Fundamentals (C, C++, Java, Python)",
    question: "In Python, what is the value of the expression `x` after executing: `x = [i**2 for i in range(5) if i % 2 == 0]`?",
    options: [
      "[0, 4, 16]",
      "[1, 9]",
      "[0, 1, 4, 9, 16]",
      "[0, 4, 8]"
    ],
    correctIndex: 0,
    explanation: "This is a list comprehension. `range(5)` yields 0, 1, 2, 3, 4. The condition `i % 2 == 0` filters even numbers: 0, 2, 4. Squaring them (`i**2`) yields 0²=0, 2²=4, and 4²=16. The resulting list is [0, 4, 16]."
  },
  {
    id: 29,
    category: "Programming Fundamentals (C, C++, Java, Python)",
    question: "Which of the following programming languages is compiled to intermediate bytecode and executed in a virtual machine environment (JVM)?",
    options: [
      "C++",
      "C",
      "Java",
      "Assembly"
    ],
    correctIndex: 2,
    explanation: "Java source code is compiled into bytecode (.class files), which runs on any platform containing a Java Virtual Machine (JVM)."
  },
  {
    id: 30,
    category: "Programming Fundamentals (C, C++, Java, Python)",
    question: "In Python, which built-in data type is unordered, mutable, and does not allow duplicate elements?",
    options: [
      "List",
      "Tuple",
      "Set",
      "Dictionary"
    ],
    correctIndex: 2,
    explanation: "A Set in Python is an unordered collection of unique elements. It is mutable but cannot contain duplicates."
  },
  {
    id: 31,
    category: "Programming Fundamentals (C, C++, Java, Python)",
    question: "Which parameter passing mechanism evaluates argument expressions only when their values are actually needed inside the function?",
    options: [
      "Call by Value",
      "Call by Reference",
      "Call by Need (Lazy Evaluation)",
      "Call by Name"
    ],
    correctIndex: 2,
    explanation: "Call by Need (or lazy evaluation) is a memoized version of call-by-name where expressions are evaluated only when first accessed, and then cached."
  },
  {
    id: 32,
    category: "Programming Fundamentals (C, C++, Java, Python)",
    question: "What is the purpose of the 'super' keyword in Java and Python?",
    options: [
      "To declare variables with the highest possible scope",
      "To call constructors or methods of the parent (superclass)",
      "To optimize execution speed inside loops",
      "To mark a method as un-overridable by child classes"
    ],
    correctIndex: 1,
    explanation: "The `super` keyword is used in subclasses to refer to parent class members (constructors, methods, or variables)."
  },
  {
    id: 33,
    category: "Programming Fundamentals (C, C++, Java, Python)",
    question: "In C, what is a pointer that points to a memory location that has been deallocated or freed called?",
    options: [
      "Null Pointer",
      "Void Pointer",
      "Dangling Pointer",
      "Wild Pointer"
    ],
    correctIndex: 2,
    explanation: "A dangling pointer is a pointer pointing to a memory location that has been freed (deallocated) or out of scope."
  },
  {
    id: 34,
    category: "Programming Fundamentals (C, C++, Java, Python)",
    question: "Which of the following Python functions is used to check the data type of an object?",
    options: [
      "type()",
      "typeof()",
      "datatype()",
      "instanceof()"
    ],
    correctIndex: 0,
    explanation: "In Python, `type(object)` returns the type of the object, whereas `isinstance()` checks if an object is an instance of a class."
  },
  {
    id: 35,
    category: "Programming Fundamentals (C, C++, Java, Python)",
    question: "In object-oriented programming, a constructor that does not accept any parameters is referred to as:",
    options: [
      "Parameterless / Default Constructor",
      "Copy Constructor",
      "Parameterized Constructor",
      "Static Constructor"
    ],
    correctIndex: 0,
    explanation: "A default constructor (or parameterless constructor) is a constructor that can be called without any arguments."
  },
  {
    id: 36,
    category: "Programming Fundamentals (C, C++, Java, Python)",
    question: "What is the output of the following Python script?\nprint(\"Hello\" * 3)",
    options: [
      "Hello Hello Hello",
      "Hello3",
      "HelloHelloHello",
      "TypeError"
    ],
    correctIndex: 2,
    explanation: "In Python, multiplying a string by an integer n repeats the string n times. So `\"Hello\" * 3` evaluates to `\"HelloHelloHello\"` (no spaces)."
  },
  {
    id: 37,
    category: "Programming Fundamentals (C, C++, Java, Python)",
    question: "Which OOP concept enforces restricting direct access to some of an object's components and binding data and methods together?",
    options: [
      "Polymorphism",
      "Abstraction",
      "Inheritance",
      "Encapsulation"
    ],
    correctIndex: 3,
    explanation: "Encapsulation is the bundling of data and the methods that operate on that data into a single unit, and restricting direct access (using private variables/getters/setters)."
  },

  // ==========================================
  // CATEGORY 4: Data Structures & Algorithms (38-52)
  // ==========================================
  {
    id: 38,
    category: "Data Structures & Algorithms",
    question: "What is the time complexity of building a heap (binary heap) from an unsorted array of n elements?",
    options: [
      "O(n log n)",
      "O(n)",
      "O(n²)",
      "O(log n)"
    ],
    correctIndex: 1,
    explanation: "Although inserting n elements individually takes O(n log n) in the worst case, the optimal bottom-up heap construction algorithm (Build-Heap) runs in O(n) time."
  },
  {
    id: 39,
    category: "Data Structures & Algorithms",
    question: "In a Binary Search Tree (BST), which traversal method visits the nodes in sorted ascending order?",
    options: [
      "Preorder Traversal",
      "Inorder Traversal",
      "Postorder Traversal",
      "Level Order Traversal"
    ],
    correctIndex: 1,
    explanation: "Inorder traversal visits the left subtree, the root, and then the right subtree. For any BST, this process outputs nodes in ascending sorted order."
  },
  {
    id: 40,
    category: "Data Structures & Algorithms",
    question: "Which data structure operates on a Last-In, First-Out (LIFO) access pattern?",
    options: [
      "Queue",
      "Stack",
      "Linked List",
      "Heap"
    ],
    correctIndex: 1,
    explanation: "A Stack is a LIFO data structure. Elements are added (push) and removed (pop) from the same end (the top)."
  },
  {
    id: 41,
    category: "Data Structures & Algorithms",
    question: "What is the worst-case time complexity of the QuickSort sorting algorithm?",
    options: [
      "O(n)",
      "O(n log n)",
      "O(n²)",
      "O(2ⁿ)"
    ],
    correctIndex: 2,
    explanation: "QuickSort's worst-case time complexity is O(n²), which occurs when the pivot chosen is consistently the smallest or largest element (e.g., when the array is already sorted)."
  },
  {
    id: 42,
    category: "Data Structures & Algorithms",
    question: "Which of the following sorting algorithms is stable and has a guaranteed worst-case time complexity of O(n log n)?",
    options: [
      "QuickSort",
      "BubbleSort",
      "MergeSort",
      "SelectionSort"
    ],
    correctIndex: 2,
    explanation: "MergeSort is a divide-and-conquer algorithm that is stable and guarantees a time complexity of O(n log n) in all cases (worst, average, and best)."
  },
  {
    id: 43,
    category: "Data Structures & Algorithms",
    question: "What is the minimum number of queues required to implement a Priority Queue efficiently?",
    options: [
      "1 (if using a heap/ordered structure)",
      "2",
      "3",
      "n queues for n elements"
    ],
    correctIndex: 0,
    explanation: "A priority queue can be implemented using a single queue if the underlying structure is organized (like a binary heap or sorted array), though heaps are the most standard implementation."
  },
  {
    id: 44,
    category: "Data Structures & Algorithms",
    question: "Which graph traversal algorithm uses a Queue data structure to explore nodes layer by layer?",
    options: [
      "Depth-First Search (DFS)",
      "Breadth-First Search (BFS)",
      "Dijkstra's Algorithm",
      "Kruskal's Algorithm"
    ],
    correctIndex: 1,
    explanation: "Breadth-First Search (BFS) explores vertices level by level, utilizing a FIFO Queue to keep track of discovered but unvisited vertices."
  },
  {
    id: 45,
    category: "Data Structures & Algorithms",
    question: "What is the height of a balanced AVL tree with n nodes?",
    options: [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(√n)"
    ],
    correctIndex: 0,
    explanation: "An AVL tree is a self-balancing binary search tree where the difference between heights of left and right subtrees cannot exceed 1. Its height is strictly bounded by O(log n)."
  },
  {
    id: 46,
    category: "Data Structures & Algorithms",
    question: "If a node in a singly linked list needs to be deleted given only a pointer to that specific node (and not the head), what is the time complexity to do so?",
    options: [
      "O(1) (by copying data from the next node)",
      "O(n)",
      "O(log n)",
      "It is impossible"
    ],
    correctIndex: 0,
    explanation: "You can copy the data of the next node into the current node and delete the next node: `node.data = node.next.data; node.next = node.next.next;`. This runs in O(1) time."
  },
  {
    id: 47,
    category: "Data Structures & Algorithms",
    question: "Which of the following is a hash collision resolution technique that stores all elements that hash to the same slot in a linked list?",
    options: [
      "Linear Probing",
      "Quadratic Probing",
      "Double Hashing",
      "Chaining"
    ],
    correctIndex: 3,
    explanation: "Chaining (or Open Chaining) resolves collisions by maintaining a linked list of all elements that hash to the same bucket index."
  },
  {
    id: 48,
    category: "Data Structures & Algorithms",
    question: "What is the time complexity of searching for an element in a balanced Binary Search Tree (BST)?",
    options: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    correctIndex: 1,
    explanation: "In a balanced BST (like AVL or Red-Black tree), the search space is halved at each step, resulting in a time complexity of O(log n)."
  },
  {
    id: 49,
    category: "Data Structures & Algorithms",
    question: "Which algorithm design paradigm is used in Floyd-Warshall's all-pairs shortest path algorithm?",
    options: [
      "Greedy Method",
      "Divide and Conquer",
      "Dynamic Programming",
      "Backtracking"
    ],
    correctIndex: 2,
    explanation: "Floyd-Warshall is a classic Dynamic Programming algorithm that computes shortest paths between all pairs of vertices by solving overlapping subproblems."
  },
  {
    id: 50,
    category: "Data Structures & Algorithms",
    question: "What is the primary difference between a tree and a graph?",
    options: [
      "Graphs can have cycles and disconnected nodes; trees are connected acyclic graphs",
      "Trees can have cycles; graphs cannot",
      "Trees are always directed; graphs are always undirected",
      "There is no difference"
    ],
    correctIndex: 0,
    explanation: "A tree is a specialized connected graph that does not contain cycles (acyclic). A graph is a general set of vertices and edges which can have cycles, multiple components, and isolated nodes."
  },
  {
    id: 51,
    category: "Data Structures & Algorithms",
    question: "Which data structure is typically used to convert an infix expression to a postfix expression?",
    options: [
      "Stack",
      "Queue",
      "Binary Tree",
      "Priority Queue"
    ],
    correctIndex: 0,
    explanation: "A Stack is used to hold operators while converting an infix expression (e.g., A + B) to a postfix expression (e.g., A B +) to manage operator precedence."
  },
  {
    id: 52,
    category: "Data Structures & Algorithms",
    question: "What is the time complexity of binary search on a sorted array of n elements?",
    options: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    correctIndex: 1,
    explanation: "Binary search repeatedly divides the search interval in half. The maximum number of steps required to find the element is O(log n)."
  },

  // ==========================================
  // CATEGORY 5: Operating Systems & Computer Org (53-67)
  // ==========================================
  {
    id: 53,
    category: "Operating Systems & Computer Org",
    question: "In OS scheduling, if processes are scheduled based on their remaining execution time, which algorithm is being used?",
    options: [
      "First-Come, First-Served (FCFS)",
      "Shortest Job First (SJF) non-preemptive",
      "Shortest Remaining Time First (SRTF)",
      "Round Robin (RR)"
    ],
    correctIndex: 2,
    explanation: "Shortest Remaining Time First (SRTF) is the preemptive version of SJF, where the process with the smallest remaining processing time is executed next."
  },
  {
    id: 54,
    category: "Operating Systems & Computer Org",
    question: "Which of the following is NOT one of the four necessary conditions for a deadlock to occur in a system?",
    options: [
      "Mutual Exclusion",
      "Hold and Wait",
      "Preemption",
      "Circular Wait"
    ],
    correctIndex: 2,
    explanation: "The four Coffman conditions are Mutual Exclusion, Hold & Wait, No Preemption, and Circular Wait. Thus, 'Preemption' is not a condition; 'No Preemption' is."
  },
  {
    id: 55,
    category: "Operating Systems & Computer Org",
    question: "What is 'Belady's Anomaly' in operating systems memory management?",
    options: [
      "Page fault rate increases as the number of allocated page frames increases",
      "Page fault rate decreases as the number of allocated page frames increases",
      "Memory leak occurs when processes terminate abruptly",
      "Virtual memory performance decreases with fast disk access speed"
    ],
    correctIndex: 0,
    explanation: "Belady's Anomaly is a phenomenon where increasing the number of page frames results in an increase in the number of page faults. It occurs in some FIFO page replacement policies."
  },
  {
    id: 56,
    category: "Operating Systems & Computer Org",
    question: "Which CPU scheduling algorithm can suffer from 'Convoy Effect'?",
    options: [
      "Shortest Job First",
      "Round Robin",
      "First-Come, First-Served (FCFS)",
      "Priority Scheduling"
    ],
    correctIndex: 2,
    explanation: "In FCFS, if a CPU-bound process with a long burst time arrives first, all subsequent short processes are delayed behind it, resulting in the Convoy Effect."
  },
  {
    id: 57,
    category: "Operating Systems & Computer Org",
    question: "What is a 'Semaphore' in operating systems design?",
    options: [
      "An integer variable used to solve critical section synchronization problems",
      "A device driver used to control network transmissions",
      "A hardware register used for virtual address mapping",
      "An encryption key used for securing file systems"
    ],
    correctIndex: 0,
    explanation: "A semaphore is an integer variable accessed via atomic wait() and signal() operations, used to manage concurrent process synchronization."
  },
  {
    id: 58,
    category: "Operating Systems & Computer Org",
    question: "In virtual memory management, what is 'Thrashing'?",
    options: [
      "The system spends more time swapping pages in and out than executing actual process instructions",
      "The system crashes due to hardware memory module failure",
      "The OS terminates processes to release RAM",
      "Fragmentation reaches 100% of memory capacity"
    ],
    correctIndex: 0,
    explanation: "Thrashing occurs when the virtual memory of a system is rapidly swapping pages, meaning it spends more time paging than doing useful work."
  },
  {
    id: 59,
    category: "Operating Systems & Computer Org",
    question: "Which of the following describes 'Internal Fragmentation'?",
    options: [
      "Allocated memory block is slightly larger than the requested memory, leaving unused space inside the block",
      "Total memory space exists to satisfy request, but it is not contiguous",
      "Disks are fragmented due to file deletions",
      "CPU register space is wasted during instruction execution"
    ],
    correctIndex: 0,
    explanation: "Internal fragmentation occurs when memory is allocated in fixed-size blocks, and the process requests a size smaller than the block, leaving the remainder unused."
  },
  {
    id: 60,
    category: "Operating Systems & Computer Org",
    question: "What is the purpose of the Translation Lookaside Buffer (TLB) in virtual memory?",
    options: [
      "To cache recent virtual-to-physical address translations for faster access",
      "To schedule processes inside the CPU pipeline",
      "To manage files on secondary storage devices",
      "To act as a buffer for network data packets"
    ],
    correctIndex: 0,
    explanation: "The TLB is a high-speed hardware cache that stores recent page table translations, avoiding double memory access for virtual address translation."
  },
  {
    id: 61,
    category: "Operating Systems & Computer Org",
    question: "Which of the following is a preemptive scheduling algorithm that uses time slices (quanta) to cycle through active processes?",
    options: [
      "FCFS",
      "Shortest Job First",
      "Round Robin",
      "Priority Scheduling (non-preemptive)"
    ],
    correctIndex: 2,
    explanation: "Round Robin (RR) allocates a small fixed unit of time (time quantum) to each process in a circular fashion, preempting processes when their quantum expires."
  },
  {
    id: 62,
    category: "Operating Systems & Computer Org",
    question: "What is the critical section problem?",
    options: [
      "Designing a protocol where processes can share resources without conflicts or race conditions on shared data",
      "Preventing hardware damages from over-voltage",
      "Managing files in directories safely",
      "Compiling source code files into executable binary"
    ],
    correctIndex: 0,
    explanation: "The critical section problem concerns designing a synchronization mechanism where processes can access shared data without causing race conditions or inconsistencies."
  },
  {
    id: 63,
    category: "Operating Systems & Computer Org",
    question: "Which of the following is a non-volatile memory that holds start-up instructions (bootstrap loader) for the system?",
    options: [
      "RAM",
      "Cache Memory",
      "ROM",
      "Registers"
    ],
    correctIndex: 2,
    explanation: "ROM (Read-Only Memory) is non-volatile and retains its contents when power is turned off. It stores the bootstrap loader to initialize the hardware during boot."
  },
  {
    id: 64,
    category: "Operating Systems & Computer Org",
    question: "In computer organization, what does the term 'Pipelining' accomplish?",
    options: [
      "Executing multiple stages of different instructions concurrently",
      "Connecting multiple CPUs together using bus lines",
      "Caching memory blocks in multiple hierarchy levels",
      "Reducing clock speed to save battery life"
    ],
    correctIndex: 0,
    explanation: "Pipelining is a technique where multiple instructions are overlapped in execution, similar to an assembly line, improving instruction throughput."
  },
  {
    id: 65,
    category: "Operating Systems & Computer Org",
    question: "If a system uses 32-bit logical addresses and a page size of 4 KB, how many entries are there in a single-level page table?",
    options: [
      "2²⁰ entries",
      "2¹² entries",
      "2³² entries",
      "1 million entries"
    ],
    correctIndex: 0,
    explanation: "Page size = 4 KB = 2¹² bytes (offsets require 12 bits). Page number bits = Total address bits - Offset bits = 32 - 12 = 20 bits. Therefore, the number of page table entries is 2²⁰."
  },
  {
    id: 66,
    category: "Operating Systems & Computer Org",
    question: "Which register in the CPU stores the results of arithmetic and logical operations performed by the ALU?",
    options: [
      "Instruction Register (IR)",
      "Program Counter (PC)",
      "Accumulator (AC)",
      "Stack Pointer (SP)"
    ],
    correctIndex: 2,
    explanation: "The Accumulator is a register in which intermediate arithmetic and logic results are stored."
  },
  {
    id: 67,
    category: "Operating Systems & Computer Org",
    question: "What is the role of the 'medium-term scheduler' in an operating system?",
    options: [
      "To swap processes out of main memory to disk (suspended state) and vice versa",
      "To select which ready process should execute next in the CPU",
      "To bring new processes from disk into memory (ready state)",
      "To manage printer spooling tasks"
    ],
    correctIndex: 0,
    explanation: "The medium-term scheduler handles swapping. It removes processes from memory to reduce the degree of multiprogramming and reintroduces them later."
  },

  // ==========================================
  // CATEGORY 6: Database Management System (DBMS) (68-80)
  // ==========================================
  {
    id: 68,
    category: "Database Management System (DBMS)",
    question: "A relation R has attributes (A, B, C, D) and functional dependencies F = {A -> B, B -> C}. What is the candidate key of R?",
    options: [
      "A",
      "AD",
      "AC",
      "AB"
    ],
    correctIndex: 1,
    explanation: "To find the candidate key, find attribute closures. The closure of AD is: AD⁺ = {A, D} -> using A->B gets {A, B, D} -> using B->C gets {A, B, C, D}. Since AD can determine all attributes and no proper subset of AD can, AD is the candidate key."
  },
  {
    id: 69,
    category: "Database Management System (DBMS)",
    question: "Which normal form guarantees that there are no partial dependencies (i.e., no non-prime attribute depends on a proper subset of a candidate key)?",
    options: [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    correctIndex: 1,
    explanation: "Second Normal Form (2NF) requires the relation to be in 1NF and removes partial functional dependencies (where a non-prime attribute is dependent on a part of a composite candidate key)."
  },
  {
    id: 70,
    category: "Database Management System (DBMS)",
    question: "Consider functional dependencies F = {A -> B, B -> C, C -> D}. According to Armstrong's axioms, what is the rule that derives A -> D called?",
    options: [
      "Reflexivity",
      "Augmentation",
      "Transitivity",
      "Union"
    ],
    correctIndex: 2,
    explanation: "Transitivity states that if X -> Y and Y -> Z, then X -> Z. Applying transitivity to A -> B and B -> C gives A -> C. Applying it again to A -> C and C -> D gives A -> D."
  },
  {
    id: 71,
    category: "Database Management System (DBMS)",
    question: "Which of the following SQL clauses is used to filter records groups returned by the GROUP BY clause?",
    options: [
      "WHERE",
      "HAVING",
      "ORDER BY",
      "SELECT"
    ],
    correctIndex: 1,
    explanation: "The `HAVING` clause is used to filter groups of records. The `WHERE` clause filters individual rows before groups are formed."
  },
  {
    id: 72,
    category: "Database Management System (DBMS)",
    question: "What does the 'Durability' property in ACID transactions guarantee?",
    options: [
      "Transactions are executed in isolation from other concurrent transactions",
      "Once a transaction commits, its changes are permanently written to database storage, even in the event of a system crash",
      "Database remains consistent before and after transaction execution",
      "All operations inside a transaction are executed successfully, or none are"
    ],
    correctIndex: 1,
    explanation: "Durability guarantees that once a transaction has committed, it will remain committed even in the event of system failure (e.g., power loss or crash)."
  },
  {
    id: 73,
    category: "Database Management System (DBMS)",
    question: "In a relational model, what is a referential integrity constraint enforced through?",
    options: [
      "Primary Key",
      "Foreign Key",
      "Unique Key",
      "Check Constraint"
    ],
    correctIndex: 1,
    explanation: "Referential integrity is enforced using Foreign Keys, which ensure that relationships between tables remain consistent and values match existing parent keys."
  },
  {
    id: 74,
    category: "Database Management System (DBMS)",
    question: "Which normal form requires that for every non-trivial functional dependency X -> Y, X must be a superkey?",
    options: [
      "2NF",
      "3NF",
      "Boyce-Codd Normal Form (BCNF)",
      "4NF"
    ],
    correctIndex: 2,
    explanation: "A relation is in BCNF if for every non-trivial functional dependency X -> Y, X is a superkey of the relation. BCNF is stricter than 3NF."
  },
  {
    id: 75,
    category: "Database Management System (DBMS)",
    question: "Which SQL command is classified under Data Definition Language (DDL)?",
    options: [
      "UPDATE",
      "INSERT",
      "ALTER",
      "SELECT"
    ],
    correctIndex: 2,
    explanation: "ALTER modifies schema definitions, which makes it DDL. UPDATE and INSERT are DML (Data Manipulation Language)."
  },
  {
    id: 76,
    category: "Database Management System (DBMS)",
    question: "In transaction management, what does the 'phantom read' anomaly refer to?",
    options: [
      "A transaction reads data that has been modified but not yet committed by another transaction",
      "A transaction re-reads a row and finds different data due to another committed transaction update",
      "A transaction re-runs a query and finds new rows added/deleted by another committed transaction",
      "A transaction reads cached data from local memory instead of database disk"
    ],
    correctIndex: 2,
    explanation: "A phantom read occurs when a transaction queries a range of rows twice and notices that a concurrent transaction has inserted or deleted rows within that range in the meantime."
  },
  {
    id: 77,
    category: "Database Management System (DBMS)",
    question: "What is the primary difference between a clustered and a non-clustered index in database tables?",
    options: [
      "Clustered index physically reorders rows on disk; non-clustered index stores index pointers separately without reordering table rows",
      "You can have multiple clustered indexes, but only one non-clustered index",
      "Non-clustered indexes are stored in RAM; clustered indexes on disk",
      "Clustered index is used only for text columns; non-clustered for integers"
    ],
    correctIndex: 0,
    explanation: "A clustered index determines the physical order of data rows in a table. Hence, a table can only have one clustered index. Non-clustered indexes contain pointers to row locations."
  },
  {
    id: 78,
    category: "Database Management System (DBMS)",
    question: "Which relational algebra operation selects rows that satisfy a given predicate?",
    options: [
      "Projection (π)",
      "Selection (σ)",
      "Join (⋈)",
      "Rename (ρ)"
    ],
    correctIndex: 1,
    explanation: "The selection operation (σ) filters rows (tuples) based on a given condition. Projection (π) selects specific columns (attributes)."
  },
  {
    id: 79,
    category: "Database Management System (DBMS)",
    question: "What does the 'Atomicity' property of transactions ensure?",
    options: [
      "All statements within a transaction succeed, or the entire transaction is rolled back (All-or-Nothing)",
      "Transactions are broken down into sub-units dynamically",
      "Data values are converted into atomic data types",
      "Transactions cannot be executed simultaneously"
    ],
    correctIndex: 0,
    explanation: "Atomicity is the 'all-or-nothing' property: either the entire transaction is committed successfully, or all its changes are aborted and rolled back."
  },
  {
    id: 80,
    category: "Database Management System (DBMS)",
    question: "In entity-relationship modeling, what represents an entity that cannot be uniquely identified by its own attributes alone?",
    options: [
      "Strong Entity Set",
      "Weak Entity Set",
      "Composite Entity Set",
      "Derived Entity Set"
    ],
    correctIndex: 1,
    explanation: "A weak entity set lacks a primary key and depends on a strong identifying relationship with an owner entity set to form a unique identifier."
  },

  // ==========================================
  // CATEGORY 7: Computer Networks & Security (81-92)
  // ==========================================
  {
    id: 81,
    category: "Computer Networks & Security",
    question: "Given the IP address block 192.168.10.0/26, what is the total number of usable host IP addresses available in this subnet?",
    options: [
      "64",
      "62",
      "32",
      "30"
    ],
    correctIndex: 1,
    explanation: "A prefix of /26 leaves 32 - 26 = 6 bits for hosts. Total IP addresses = 2⁶ = 64. Subtracting 2 for the network address (all 0s) and broadcast address (all 1s) leaves 64 - 2 = 62 usable host addresses."
  },
  {
    id: 82,
    category: "Computer Networks & Security",
    question: "Which layer of the OSI model is responsible for node-to-node frame delivery, error detection/correction on the physical link, and physical addressing?",
    options: [
      "Physical Layer",
      "Data Link Layer",
      "Network Layer",
      "Transport Layer"
    ],
    correctIndex: 1,
    explanation: "The Data Link Layer structures bits into frames, manages MAC addressing, and handles error and flow control between adjacent network nodes."
  },
  {
    id: 83,
    category: "Computer Networks & Security",
    question: "In the TCP/IP protocol suite, which protocol is connection-oriented, reliable, and manages flow control using a sliding window mechanism?",
    options: [
      "UDP",
      "IP",
      "TCP",
      "ICMP"
    ],
    correctIndex: 2,
    explanation: "TCP (Transmission Control Protocol) is connection-oriented, provides reliable transmission using acknowledgments, and performs flow control with a sliding window."
  },
  {
    id: 84,
    category: "Computer Networks & Security",
    question: "What is the port number typically used by secure HTTPS connections?",
    options: [
      "80",
      "21",
      "443",
      "8080"
    ],
    correctIndex: 2,
    explanation: "HTTPS (HTTP Secure) uses port 443 by default. Unsecure HTTP uses port 80."
  },
  {
    id: 85,
    category: "Computer Networks & Security",
    question: "In cryptography, how does asymmetric encryption differ from symmetric encryption?",
    options: [
      "Asymmetric encryption uses a public key to encrypt and a private key to decrypt; symmetric uses the same key for both",
      "Symmetric encryption is more secure but slower than asymmetric",
      "Asymmetric encryption requires keys to be physically delivered before transmission",
      "Symmetric encryption is only used for text columns; asymmetric for files"
    ],
    correctIndex: 0,
    explanation: "Asymmetric (public-key) cryptography uses a mathematically related key pair (public/private). Symmetric uses a single shared key for encryption and decryption."
  },
  {
    id: 86,
    category: "Computer Networks & Security",
    question: "Which network security device monitors incoming and outgoing traffic and decides whether to block or allow specific traffic based on defined rules?",
    options: [
      "Switch",
      "Hub",
      "Firewall",
      "Repeater"
    ],
    correctIndex: 2,
    explanation: "A firewall is a network security device that monitors and filters incoming and outgoing network traffic based on an organization's previously established security policies."
  },
  {
    id: 87,
    category: "Computer Networks & Security",
    question: "What type of attack involves an attacker placing themselves in the communication path between two legitimate nodes to eavesdrop or modify traffic?",
    options: [
      "Phishing",
      "Man-in-the-Middle (MitM) Attack",
      "Denial of Service (DoS)",
      "SQL Injection"
    ],
    correctIndex: 1,
    explanation: "A Man-in-the-Middle (MitM) attack occurs when an attacker intercepting communication relays messages between two parties who believe they are communicating directly."
  },
  {
    id: 88,
    category: "Computer Networks & Security",
    question: "Which protocol is used to map dynamic IP addresses to physical MAC addresses in local area networks?",
    options: [
      "DNS",
      "DHCP",
      "ARP",
      "NAT"
    ],
    correctIndex: 2,
    explanation: "ARP (Address Resolution Protocol) resolves a known IPv4 network layer address to a physical data link layer MAC address."
  },
  {
    id: 89,
    category: "Computer Networks & Security",
    question: "What is the primary function of the Domain Name System (DNS)?",
    options: [
      "To assign dynamic IP addresses to local computers",
      "To translate human-readable domain names (e.g., example.com) to numeric IP addresses",
      "To encrypt browser web sessions",
      "To route packets across multiple routers"
    ],
    correctIndex: 1,
    explanation: "DNS acts as the phonebook of the Internet, translating user-friendly domain names like www.google.com to the machine-readable IP addresses required to locate resources."
  },
  {
    id: 90,
    category: "Computer Networks & Security",
    question: "In network security, what does an IDS stand for?",
    options: [
      "Intrusion Detection System",
      "Internet Distribution Service",
      "Integrated Data Security",
      "Instruction Delivery System"
    ],
    correctIndex: 0,
    explanation: "IDS stands for Intrusion Detection System. It monitors network or system activities for malicious actions or policy violations."
  },
  {
    id: 91,
    category: "Computer Networks & Security",
    question: "Which of the following routing protocols is classified as a Distance Vector routing protocol?",
    options: [
      "OSPF",
      "BGP",
      "RIP (Routing Information Protocol)",
      "IS-IS"
    ],
    correctIndex: 2,
    explanation: "RIP uses hop count as its routing metric and utilizes the Bellman-Ford algorithm, classifying it as a Distance Vector routing protocol. OSPF is a Link State protocol."
  },
  {
    id: 92,
    category: "Computer Networks & Security",
    question: "What is 'Salting' in the context of password storage security?",
    options: [
      "Adding random data to passwords before hashing to protect against precomputed dictionary/rainbow table attacks",
      "Encrypting passwords twice using different algorithms",
      "Storing passwords in plain text inside secure files",
      "Adding special characters to passwords during user sign-up"
    ],
    correctIndex: 0,
    explanation: "Salting involves appending unique random strings (salts) to passwords before hashing them. This ensures that identical passwords have different hash outputs, rendering precomputed rainbow tables useless."
  },

  // ========================================================
  // CATEGORY 8: System Analysis and Design & IoT (93-100)
  // ========================================================
  {
    id: 93,
    category: "System Analysis and Design & IoT",
    question: "Which software development life cycle (SDLC) model is highly risk-driven, repeating evolutionary phases in a spiral path?",
    options: [
      "Waterfall Model",
      "Iterative Enhancement Model",
      "Spiral Model",
      "V-Model"
    ],
    correctIndex: 2,
    explanation: "The Spiral Model, originally proposed by Barry Boehm, is an evolutionary, risk-driven SDLC model that blends iterative prototyping with systematic waterfall control."
  },
  {
    id: 94,
    category: "System Analysis and Design & IoT",
    question: "In System Analysis and Design, what does a circle or bubble symbol represent in a Data Flow Diagram (DFD)?",
    options: [
      "Data Store",
      "Process (transformation of data)",
      "External Entity (source/sink)",
      "Data Flow path"
    ],
    correctIndex: 1,
    explanation: "In DFD notation (Yourdon & Coad or Gane & Sarson), circles (or rounded rectangles) represent processes that transform incoming data flows into outgoing flows."
  },
  {
    id: 95,
    category: "System Analysis and Design & IoT",
    question: "Which testing phase in system development is performed by actual end-users in their own environment prior to commercial release?",
    options: [
      "Unit Testing",
      "Integration Testing",
      "Beta Testing",
      "Alpha Testing"
    ],
    correctIndex: 2,
    explanation: "Beta testing is conducted by real users of the software application in a real-world environment. Alpha testing is performed in-house by developers/testers."
  },
  {
    id: 96,
    category: "System Analysis and Design & IoT",
    question: "What is the primary role of a 'System Analyst'?",
    options: [
      "To write assembly level drivers for peripheral devices",
      "To understand business requirements, bridge communication gaps, and design computer-based solutions",
      "To configure router routing tables in local networks",
      "To perform physical database defragmentation"
    ],
    correctIndex: 1,
    explanation: "A System Analyst bridges the gap between business requirements and technical systems, analyzing needs and designing appropriate software/hardware architectures."
  },
  {
    id: 97,
    category: "System Analysis and Design & IoT",
    question: "Which IoT communication protocol operates on a publish-subscribe architecture, runs over TCP, and is designed for high-latency, low-bandwidth environments?",
    options: [
      "CoAP",
      "HTTP",
      "MQTT",
      "XMPP"
    ],
    correctIndex: 2,
    explanation: "MQTT (Message Queuing Telemetry Transport) is a lightweight publish-subscribe messaging protocol running over TCP, ideal for constrained IoT devices and networks."
  },
  {
    id: 98,
    category: "System Analysis and Design & IoT",
    question: "What is the key difference between a sensor and an actuator in an IoT system?",
    options: [
      "Sensors convert physical phenomena into electrical signals; actuators convert electrical commands into physical actions (movement, heat, light)",
      "Actuators measure physical properties; sensors execute physical tasks",
      "Sensors require internet connectivity; actuators work only offline",
      "There is no functional difference"
    ],
    correctIndex: 0,
    explanation: "Sensors input physical environment states (like temperature or light) into the system. Actuators take output signals from the system and trigger actions (like opening a valve or turning on a motor)."
  },
  {
    id: 99,
    category: "System Analysis and Design & IoT",
    question: "Which of the following represents a lightweight, REST-like IoT protocol that runs over UDP instead of TCP, utilizing request-response mechanisms?",
    options: [
      "MQTT",
      "CoAP (Constrained Application Protocol)",
      "HTTP",
      "FTP"
    ],
    correctIndex: 1,
    explanation: "CoAP is a web transfer protocol designed for constrained nodes and networks in IoT. It uses UDP to reduce overhead and mimics HTTP's GET/PUT/POST/DELETE methods."
  },
  {
    id: 100,
    category: "System Analysis and Design & IoT",
    question: "In System Analysis and Design, what is the term used to describe the degree of interdependence between different software modules?",
    options: [
      "Cohesion",
      "Coupling",
      "Modularity",
      "Abstraction"
    ],
    correctIndex: 1,
    explanation: "Coupling measures the degree of interdependence between modules. Software designs aim for low coupling (loose connection) and high cohesion (single clear purpose per module)."
  }
];

// If using ES modules in browser or testing in node
if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUESTIONS;
}
