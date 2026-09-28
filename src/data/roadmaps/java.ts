import { Roadmap } from '../../types/roadmap';

export const javaRoadmap: Roadmap = {
  id: 'java',
  title: 'Java Roadmap',
  slug: 'java',
  subtitle: 'From absolute beginner to job-ready Java developer',
  category: 'programming',
  icon: 'Coffee',
  difficulty: 'Beginner → Advanced',
  estimatedDuration: '4–6 months',
  projectsCount: 8,
  careerPaths: ['Software Developer', 'Backend Developer', 'Android Developer', 'Spring Boot Engineer'],
  careerStages: [
    { title: 'Learn Foundations', desc: 'Syntax, data types, control flow & core JVM concepts' },
    { title: 'Master OOP & DSA', desc: 'Object-oriented architecture & algorithmic problem solving' },
    { title: 'Build Projects', desc: 'Create 8+ real-world CLI, desktop and web backend applications' },
    { title: 'Git & GitHub', desc: 'Publish clean repositories with unit tests and clear READMEs' },
    { title: 'Polished Resume', desc: 'Highlight Spring Boot, REST APIs, and database integrations' },
    { title: 'Internship / Roles', desc: 'Apply to junior Java and backend engineering positions' },
    { title: 'Technical Interview', desc: 'Live coding DSA and system design fundamentals' },
    { title: 'Job Offer', desc: 'Land your career role as a confident Java developer' },
  ],
  levels: [
    {
      levelNumber: 0,
      levelTag: 'LEVEL 0 — Prerequisites',
      title: 'Computer Foundations & Setup',
      description: 'Understand how computers process code and configure your professional Java development environment.',
      color: 'blue',
      topics: [
        {
          id: 'java-l0-t1',
          title: 'How Computers Work',
          subtitle: 'CPU, RAM, and binary execution',
          difficulty: 'easy',
          estimatedHours: '2 hours',
          whatIsIt: 'A computer consists of hardware like the CPU (the brain that calculates) and RAM (temporary fast memory). At the lowest level, computers only process 1s and 0s (binary electrical signals).',
          whyLearnIt: 'Knowing where your code lives and how the computer physically executes instructions prevents confusion when you encounter memory limits, speed bottlenecks, or crashes.',
          codeExample: {
            language: 'text',
            code: `User writes code: System.out.println("Hello");
      ↓
Java Compiler (javac) turns it into Bytecode (.class)
      ↓
JVM executes it on CPU & RAM as native machine instructions`,
            explanation: 'Your high-level Java code is translated into universal bytecode, then executed natively by the JVM.',
          },
          practiceExercises: [
            { id: 'ex-0-1', task: 'Explain the difference between RAM (volatile memory) and Hard Drive storage in 1 sentence.', hint: 'RAM is temporary high-speed workspace; hard drives store data permanently.' },
            { id: 'ex-0-2', task: 'Identify what CPU clock speed (e.g. 3.2 GHz) means for code execution.', hint: 'It measures how many billion cycles of instructions the CPU can process per second.' },
            { id: 'ex-0-3', task: 'Draw or trace the flow from writing code in an editor to output showing on the screen.', hint: 'Source Code -> Compiler -> Bytecode -> JVM -> Screen Output.' },
          ],
          miniChallenge: {
            title: 'Computer Specs Detective',
            description: 'Check your computer’s operating system, RAM size (e.g., 8GB or 16GB), and processor model. Write down how much free disk space you have for installing developer tools.',
            tips: 'On Windows, check Task Manager -> Performance. On Mac, check Apple Menu -> About This Mac.',
          },
        },
        {
          id: 'java-l0-t2',
          title: 'What Programming Is',
          subtitle: 'Giving precise instructions to solve problems',
          difficulty: 'easy',
          estimatedHours: '2 hours',
          whatIsIt: 'Programming is simply writing a sequence of step-by-step instructions (an algorithm) that a computer follows without getting tired or making accidental deviations.',
          whyLearnIt: 'Computers do not guess what you meant; they do exactly what you tell them. Learning to think in clear, unambiguous steps is the #1 skill in coding.',
          codeExample: {
            language: 'java',
            code: `// Recipe for making coffee in pseudocode:
// 1. Boil water
// 2. Grind beans
// 3. Pour water over filter
// 4. Serve in mug`,
            explanation: 'Every software program is just a recipe: input data enters, steps execute in sequence, and desired output emerges.',
          },
          practiceExercises: [
            { id: 'ex-0-4', task: 'Write a 4-step pseudocode instruction set for making a sandwich.', hint: 'Be exact: get bread, add spread, put slices together, cut in half.' },
            { id: 'ex-0-5', task: 'Identify what happens if an instruction is missing or out of order.', hint: 'The program produces an error or unwanted result (a logical bug).' },
            { id: 'ex-0-6', task: 'Describe the difference between human natural language and programming language.', hint: 'Programming languages tolerate zero ambiguity.' },
          ],
          miniChallenge: {
            title: 'Bug Hunter Mindset',
            description: 'Imagine someone gives an instruction: "Turn left until you see a red car, then stop." What happens if there are no red cars on the street? How would you fix the instruction to avoid an infinite loop?',
            tips: 'Add a safety boundary, e.g., "or until you reach the end of the block".',
          },
        },
        {
          id: 'java-l0-t3',
          title: 'Variables & Basic Logic',
          subtitle: 'Named memory boxes and decision making',
          difficulty: 'easy',
          estimatedHours: '3 hours',
          whatIsIt: 'A variable is a labeled container in the computer’s memory that holds information (like a player’s score or a user’s name). Basic logic is making choices using TRUE or FALSE conditions (if this, do that).',
          whyLearnIt: 'Without variables, programs could not remember anything. Without logic, programs could not react to different user actions.',
          codeExample: {
            language: 'java',
            code: `int score = 100;
boolean isGameOver = false;

if (score >= 100) {
    System.out.println("You won the level!");
}`,
            explanation: 'We store 100 in a variable named "score". The computer checks if score is at least 100 before printing.',
          },
          practiceExercises: [
            { id: 'ex-0-7', task: 'If age = 16 and drinkingAge = 21, what should the condition check?', hint: 'if (age >= drinkingAge)' },
            { id: 'ex-0-8', task: 'Why does a variable need a name and a value?', hint: 'The name gives you a handle to find the value stored in memory.' },
            { id: 'ex-0-9', task: 'What is a boolean data type?', hint: 'A value that can only be either true or false.' },
          ],
          miniChallenge: {
            title: 'Logic Flowchart',
            description: 'Write out the logic for an ATM cash withdrawal: checks if card is valid, checks if PIN is correct, checks if balance is sufficient, then dispenses cash.',
            tips: 'Nest your conditions: Card OK? -> PIN OK? -> Balance OK? -> Dispense.',
          },
        },
        {
          id: 'java-l0-t4',
          title: 'Installing Java & Setting Up IDE',
          subtitle: 'JDK 21 LTS & IntelliJ IDEA / VS Code setup',
          difficulty: 'easy',
          estimatedHours: '2 hours',
          whatIsIt: 'The JDK (Java Development Kit) provides the compiler and runtime. An IDE (Integrated Development Environment) like IntelliJ IDEA Community or VS Code gives you a smart code editor with syntax highlighting, autocomplete, and error detection.',
          whyLearnIt: 'A properly configured developer setup eliminates friction so you can write, run, and debug your programs with a single click.',
          codeExample: {
            language: 'bash',
            code: `# Check if Java is installed in terminal:
java --version
# Expected: openjdk 21.0.x or java version "21"

# Check Java Compiler:
javac --version`,
            explanation: 'Running these commands confirms your terminal can find the Java compiler and runtime.',
          },
          practiceExercises: [
            { id: 'ex-0-10', task: 'Download and install JDK 21 (Temurin, Oracle, or Amazon Corretto).', hint: 'Visit adoptium.net for Eclipse Temurin JDK 21 LTS.' },
            { id: 'ex-0-11', task: 'Install IntelliJ IDEA Community Edition or VS Code with Extension Pack for Java.', hint: 'IntelliJ Community is 100% free and built specifically for Java.' },
            { id: 'ex-0-12', task: 'Verify JAVA_HOME environment variable if needed.', hint: 'Most modern installers configure this automatically.' },
          ],
          miniChallenge: {
            title: 'First Terminal Check',
            description: 'Open your terminal (Command Prompt, PowerShell, or macOS Terminal) and type "java -version". Take note of the version output.',
            tips: 'If it says "command not found", re-run the installer and check the box to add Java to PATH.',
          },
        },
      ],
    },
    {
      levelNumber: 1,
      levelTag: 'LEVEL 1 — Java Fundamentals',
      title: 'Core Syntax, Types & Control Flow',
      description: 'Master the fundamental building blocks of Java: data types, arithmetic, decisions, loops, arrays and strings.',
      color: 'green',
      project: {
        id: 'proj-java-1',
        title: 'Student Grade Calculator',
        difficulty: 'beginner',
        description: 'A console application that asks for student names, subject marks, calculates weighted percentages, assigns letter grades (A, B, C, F), and finds highest/lowest scores.',
        whatYouWillBuild: 'Interactive terminal program using Scanner, arrays, loops, and conditional statements with input validation.',
        skillsRequired: ['Variables', 'Data Types', 'Scanner (I/O)', 'If-Else', 'For Loops', 'Arrays'],
        estimatedHours: '4–6 hours',
        starterSteps: [
          'Create a Java class named StudentGradeCalculator with a main method',
          'Prompt user for total number of subjects using Scanner',
          'Use an array of doubles to store each subject mark',
          'Loop to compute sum and average percentage',
          'Use if-else chain to determine letter grade (90+=A, 80+=B, etc.)',
          'Print formatted report card to the console',
        ],
      },
      topics: [
        {
          id: 'java-l1-t1',
          title: 'Java Introduction & "Write Once, Run Anywhere"',
          subtitle: 'Why Java powers billions of enterprise devices',
          difficulty: 'easy',
          estimatedHours: '2 hours',
          whatIsIt: 'Java was created by Sun Microsystems in 1995. Its key superpower is platform independence: code compiled into bytecode can run on Windows, Mac, Linux, or Android without changing a single line.',
          whyLearnIt: 'Java is trusted by Fortune 500 banks, NASA, Google, Netflix, and Amazon for its extreme stability, strong typing, and rock-solid backward compatibility.',
          codeExample: {
            language: 'java',
            code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Welcome to Java!");
    }
}`,
            explanation: 'Every Java application starts in the main method inside a class. System.out.println writes text to the console.',
          },
          practiceExercises: [
            { id: 'ex-1-1', task: 'Modify the hello world program to print your name and your career goal.', hint: 'Use multiple System.out.println statements.' },
            { id: 'ex-1-2', task: 'Identify what happened if you remove the semicolon at the end of the line.', hint: 'Java requires semicolons; the compiler will throw a syntax error.' },
          ],
          miniChallenge: {
            title: 'Console Business Card',
            description: 'Create a program that prints a decorated business card with your name, dream role, and 3 favorite tech interests using asterisks or dashes as borders.',
            tips: 'Use System.out.println("*********************");',
          },
        },
        {
          id: 'java-l1-t2',
          title: 'JDK, JRE and JVM',
          subtitle: 'The holy trinity of Java execution',
          difficulty: 'easy',
          estimatedHours: '2 hours',
          whatIsIt: '• JDK (Java Development Kit): Everything to develop (compiler javac, tools) + JRE.\n• JRE (Java Runtime Environment): Libraries + JVM to run programs.\n• JVM (Java Virtual Machine): The engine that actually interprets bytecode into CPU instructions.',
          whyLearnIt: 'Understanding this hierarchy is a standard junior interview question and helps you diagnose build errors versus runtime crashes.',
          codeExample: {
            language: 'text',
            code: `[ JDK (javac, debugger, tools) ]
   └── [ JRE (standard class libraries) ]
          └── [ JVM (JIT compiler, Garbage Collector) ]
                 └── Operating System & CPU`,
            explanation: 'JDK contains JRE, and JRE contains the JVM.',
          },
          practiceExercises: [
            { id: 'ex-1-3', task: 'Which component translates .java files to .class bytecode files?', hint: 'javac (the Java compiler in the JDK).' },
            { id: 'ex-1-4', task: 'Can someone run a Java app without the JDK?', hint: 'Yes, if they have the JRE / Java runtime installed.' },
          ],
          miniChallenge: {
            title: 'Bytecode Inspector',
            description: 'Compile a simple Java file with "javac Hello.java", then inspect the created "Hello.class" file with "javap -c Hello" to see the raw bytecode instructions.',
            tips: 'javap is the Java disassembler included in your JDK.',
          },
        },
        {
          id: 'java-l1-t3',
          title: 'Variables and Primitive Data Types',
          subtitle: 'int, double, boolean, char, byte, short, long, float',
          difficulty: 'easy',
          estimatedHours: '3 hours',
          whatIsIt: 'Java is strongly typed. You must specify the type of data a variable holds. Java has 8 primitive types: byte, short, int, long (whole numbers); float, double (decimals); char (single letters); and boolean (true/false).',
          whyLearnIt: 'Choosing the right data type saves memory and prevents unexpected calculation errors like integer truncation.',
          codeExample: {
            language: 'java',
            code: `int age = 24;
double salary = 85000.50;
char grade = 'A';
boolean isEmployed = true;

System.out.println("Age: " + age + ", Salary: $" + salary);`,
            explanation: 'Each variable has a strict type. Trying to assign "twenty" to an int variable will trigger a compile error.',
          },
          practiceExercises: [
            { id: 'ex-1-5', task: 'Declare variables for a book: title (String), price (double), pages (int), inStock (boolean).', hint: 'Remember String starts with capital S because it is an object reference.' },
            { id: 'ex-1-6', task: 'Explain what happens when dividing two integers: 7 / 2 in Java.', hint: 'It results in 3, not 3.5, because integer division discards the remainder.' },
          ],
          miniChallenge: {
            title: 'Currency Converter',
            description: 'Declare a double for USD amount and an exchange rate to EUR. Calculate and print the converted total formatted with two decimal places.',
            tips: 'Use System.out.printf("%.2f EUR", eurAmount);',
          },
        },
        {
          id: 'java-l1-t4',
          title: 'Operators & User Input (Scanner)',
          subtitle: 'Arithmetic, logical operators and keyboard input',
          difficulty: 'easy',
          estimatedHours: '3 hours',
          whatIsIt: 'Operators perform actions on variables (+, -, *, /, %, ==, !=, &&, ||). Scanner is a Java utility class that lets your program read keyboard input typed by the user.',
          whyLearnIt: 'Input transforms static scripts into dynamic, interactive software that responds to real human choices.',
          codeExample: {
            language: 'java',
            code: `import java.util.Scanner;

Scanner scanner = new Scanner(System.in);
System.out.print("Enter your name: ");
String name = scanner.nextLine();
System.out.print("Enter your birth year: ");
int birthYear = scanner.nextInt();
int age = 2026 - birthYear;
System.out.println("Hello " + name + ", you are " + age + " years old!");`,
            explanation: 'Scanner reads text and numbers from System.in, allowing interactive conversations.',
          },
          practiceExercises: [
            { id: 'ex-1-7', task: 'Write a program that takes two numbers and prints their sum, difference, product, and remainder (modulo %).', hint: 'Use % for remainder: 10 % 3 = 1.' },
            { id: 'ex-1-8', task: 'Why do you need scanner.nextLine() after scanner.nextInt()?', hint: 'nextInt leaves the newline enter character in the buffer.' },
          ],
          miniChallenge: {
            title: 'Tip Calculator',
            description: 'Ask the user for the restaurant bill total and the tip percentage (15, 18, or 20). Compute tip amount, total bill, and split per person.',
            tips: 'double tip = bill * (tipPercent / 100.0);',
          },
        },
        {
          id: 'java-l1-t5',
          title: 'Conditional Statements (If, Else, Switch)',
          subtitle: 'Branching logic and decision trees',
          difficulty: 'easy',
          estimatedHours: '3 hours',
          whatIsIt: 'Conditionals let your code take different paths based on whether a condition is true or false. Switch statements provide clean branching when comparing a variable against specific values.',
          whyLearnIt: 'Every decision in software — from verifying passwords to checking account balances — depends on conditionals.',
          codeExample: {
            language: 'java',
            code: `int hour = 14;

if (hour < 12) {
    System.out.println("Good morning!");
} else if (hour < 18) {
    System.out.println("Good afternoon!");
} else {
    System.out.println("Good evening!");
}`,
            explanation: 'The program checks conditions in order and executes the first matching block.',
          },
          practiceExercises: [
            { id: 'ex-1-9', task: 'Write an if-else statement to check if a number is positive, negative, or zero.', hint: 'Check if (num > 0), else if (num < 0), else zero.' },
            { id: 'ex-1-10', task: 'Use a switch statement for day numbers 1 to 7 to print Monday to Sunday.', hint: 'Use switch(day) with cases 1 through 7.' },
          ],
          miniChallenge: {
            title: 'Leap Year Checker',
            description: 'Write a program that checks if a year is a leap year: divisible by 4, but not by 100 unless also divisible by 400.',
            tips: '(year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)',
          },
        },
        {
          id: 'java-l1-t6',
          title: 'Loops (For, While, Do-While)',
          subtitle: 'Repetition and iterative processing',
          difficulty: 'easy',
          estimatedHours: '3 hours',
          whatIsIt: 'Loops repeat a block of code as long as a condition holds true. For loops are ideal when you know the iteration count; while loops run while a condition remains true.',
          whyLearnIt: 'Computers excel at repeating repetitive tasks millions of times per second without mistakes. Loops power everything from games to database processing.',
          codeExample: {
            language: 'java',
            code: `// For loop counting 1 to 5
for (int i = 1; i <= 5; i++) {
    System.out.println("Count: " + i);
}

// While loop for game loop or user exit
boolean running = true;
while (running) {
    // Process game frame...
    running = false;
}`,
            explanation: 'The loop counter starts at 1, checks i <= 5, runs the body, and increments i++ after each pass.',
          },
          practiceExercises: [
            { id: 'ex-1-11', task: 'Print all even numbers from 2 to 50 using a for loop.', hint: 'Initialize i=2; i<=50; i+=2' },
            { id: 'ex-1-12', task: 'Calculate the factorial of 6 (6 * 5 * 4 * 3 * 2 * 1) using a loop.', hint: 'Keep a running product variable initialized to 1.' },
          ],
          miniChallenge: {
            title: 'Number Guessing Game',
            description: 'Generate a random number between 1 and 100. Use a while loop to let the user guess until they are correct, giving "Too high!" or "Too low!" hints after each guess.',
            tips: 'int target = (int)(Math.random() * 100) + 1;',
          },
        },
        {
          id: 'java-l1-t7',
          title: 'Arrays & Strings',
          subtitle: 'Ordered data collections and text manipulation',
          difficulty: 'easy',
          estimatedHours: '4 hours',
          whatIsIt: 'An array stores multiple items of the same type in fixed-size consecutive memory slots. A String is an object representing a sequence of characters with built-in helper methods (.length(), .substring(), .toLowerCase()).',
          whyLearnIt: 'Real-world data comes in lists: list of students, list of prices, list of transactions. Arrays and Strings are used in virtually every program.',
          codeExample: {
            language: 'java',
            code: `String[] fruits = {"Apple", "Banana", "Cherry"};

for (int i = 0; i < fruits.length; i++) {
    System.out.println("Fruit #" + (i + 1) + ": " + fruits[i].toUpperCase());
}`,
            explanation: 'Arrays are 0-indexed: fruits[0] is Apple. .length gives the total number of items.',
          },
          practiceExercises: [
            { id: 'ex-1-13', task: 'Create an array of 5 test scores and calculate the average score.', hint: 'Sum all values with a loop, then divide by scores.length.' },
            { id: 'ex-1-14', task: 'Reverse a string using a loop or StringBuilder.', hint: 'Loop backwards from str.length() - 1 down to 0.' },
          ],
          miniChallenge: {
            title: 'Palindrome Validator',
            description: 'Write a program that takes a word (like "racecar" or "madam") and checks if it reads the exact same forwards and backwards, ignoring uppercase/lowercase.',
            tips: 'Compare characters from start and end moving inward.',
          },
        },
      ],
    },
    {
      levelNumber: 2,
      levelTag: 'LEVEL 2 — Object-Oriented Programming',
      title: 'OOP Architecture & Encapsulation',
      description: 'Model real-world systems with Classes, Objects, Constructors, Methods, Encapsulation, Inheritance, Polymorphism, Abstraction and Interfaces.',
      color: 'purple',
      project: {
        id: 'proj-java-2',
        title: 'Bank Management System',
        difficulty: 'intermediate',
        description: 'An object-oriented banking application modeling Accounts, SavingsAccounts (with interest), CheckingAccounts (with overdraft limit), and Transactions with security encapsulation.',
        whatYouWillBuild: 'Multi-class architecture demonstrating inheritance, interface contracts (Transferable, Printable), polymorphism, and encapsulation with private fields.',
        skillsRequired: ['Classes & Objects', 'Inheritance', 'Interfaces', 'Polymorphism', 'Encapsulation'],
        estimatedHours: '8–12 hours',
        starterSteps: [
          'Design an abstract BaseAccount class with accountNumber, holderName, balance',
          'Implement encapsulate getters/setters with validation (no negative balance)',
          'Create SavingsAccount extending BaseAccount with applyInterest()',
          'Create CheckingAccount extending BaseAccount with overdraft limit',
          'Create a Bank class to hold multiple accounts and transfer funds safely',
          'Simulate deposits, withdrawals, and report generation in main',
        ],
      },
      topics: [
        {
          id: 'java-l2-t1',
          title: 'Classes and Objects',
          subtitle: 'The blueprint and the actual instance',
          difficulty: 'medium',
          estimatedHours: '3 hours',
          whatIsIt: 'A Class is a blueprint (like an architectural blueprint of a house). An Object is the actual instance built from that blueprint (the physical house built on the street with its own paint color).',
          whyLearnIt: 'OOP allows you to structure huge applications into neat, modular, reusable components rather than one giant unmanageable file.',
          codeExample: {
            language: 'java',
            code: `public class Car {
    String brand;
    int speed;

    void accelerate() {
        speed += 10;
        System.out.println(brand + " speed: " + speed + " mph");
    }
}

// In main:
Car myCar = new Car();
myCar.brand = "Tesla";
myCar.accelerate();`,
            explanation: 'Car is the blueprint; myCar is an object created with the "new" keyword.',
          },
          practiceExercises: [
            { id: 'ex-2-1', task: 'Design a Book class with title, author, and pageCount fields, and a displayInfo() method.', hint: 'Keep field declarations inside the class.' },
            { id: 'ex-2-2', task: 'Instantiate two different Book objects and print their details.', hint: 'Book b1 = new Book(); Book b2 = new Book();' },
          ],
          miniChallenge: {
            title: 'RPG Character Creator',
            description: 'Create a Hero class with name, health, and attackPower. Add an attack(Hero enemy) method that subtracts health from the opponent.',
            tips: 'enemy.health -= this.attackPower;',
          },
        },
        {
          id: 'java-l2-t2',
          title: 'Constructors & Methods',
          subtitle: 'Initializing state and defining behaviors',
          difficulty: 'medium',
          estimatedHours: '3 hours',
          whatIsIt: 'A constructor is a special method called automatically when an object is created with "new" to initialize its starting state. Methods define what actions an object can perform.',
          whyLearnIt: 'Constructors guarantee that objects cannot be created in an invalid or half-empty state.',
          codeExample: {
            language: 'java',
            code: `public class BankAccount {
    String owner;
    double balance;

    // Constructor:
    public BankAccount(String owner, double initialDeposit) {
        this.owner = owner;
        this.balance = initialDeposit;
    }

    public void deposit(double amount) {
        if (amount > 0) balance += amount;
    }
}`,
            explanation: 'The constructor forces you to provide an owner and deposit when creating the account.',
          },
          practiceExercises: [
            { id: 'ex-2-3', task: 'Write overloaded constructors: one default constructor and one parameterized constructor.', hint: 'Overloading means same name with different parameter signatures.' },
            { id: 'ex-2-4', task: 'What does the "this" keyword refer to?', hint: '"this" refers to the current object instance calling the method.' },
          ],
          miniChallenge: {
            title: 'Product Inventory Unit',
            description: 'Create a Product class with id, name, price, and stock. Add a purchase(int quantity) method that reduces stock only if sufficient items are available.',
            tips: 'Return a boolean indicating whether the purchase succeeded or failed.',
          },
        },
        {
          id: 'java-l2-t3',
          title: 'Encapsulation & Access Modifiers',
          subtitle: 'Data hiding with private fields and public getters/setters',
          difficulty: 'medium',
          estimatedHours: '3 hours',
          whatIsIt: 'Encapsulation bundles data and methods together while restricting direct access to internal state using private fields. External code interacts only via controlled public getter and setter methods.',
          whyLearnIt: 'Prevents rogue code from setting invalid values (like setting a negative bank balance or negative age).',
          codeExample: {
            language: 'java',
            code: `public class User {
    private int age; // Hidden from outside direct tampering

    public void setAge(int age) {
        if (age >= 0 && age <= 120) {
            this.age = age;
        } else {
            System.out.println("Invalid age provided!");
        }
    }

    public int getAge() {
        return this.age;
    }
}`,
            explanation: 'The setter acts as a security guard, validating every change before updating memory.',
          },
          practiceExercises: [
            { id: 'ex-2-5', task: 'What are the 4 Java access modifiers?', hint: 'private, default (package-private), protected, public.' },
            { id: 'ex-2-6', task: 'Why should class fields almost always be marked private?', hint: 'To protect the object integrity from unintended external modifications.' },
          ],
          miniChallenge: {
            title: 'Secure Wallet Class',
            description: 'Build a DigitalWallet class with private balance and pinCode. Users can only withdraw if they supply the correct pinCode parameter.',
            tips: 'public boolean withdraw(double amount, String enteredPin)',
          },
        },
        {
          id: 'java-l2-t4',
          title: 'Inheritance & Method Overriding',
          subtitle: 'Reusing code with the "extends" keyword and @Override',
          difficulty: 'medium',
          estimatedHours: '4 hours',
          whatIsIt: 'Inheritance allows a child class to inherit fields and methods from a parent class (e.g. Dog extends Animal). Method overriding allows the child to provide a specialized implementation of a parent method.',
          whyLearnIt: 'Eliminates redundant code. Write common logic once in a parent class and share it across dozens of child classes.',
          codeExample: {
            language: 'java',
            code: `class Animal {
    void makeSound() {
        System.out.println("Some sound...");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Bark! Bark!");
    }
}`,
            explanation: 'Dog inherits everything from Animal, but customizes the makeSound behavior.',
          },
          practiceExercises: [
            { id: 'ex-2-7', task: 'Create a Vehicle parent class and ElectricCar child class with batteryCapacity.', hint: 'Use "super()" in the child constructor to call the parent constructor.' },
            { id: 'ex-2-8', task: 'Can a class in Java inherit from multiple parent classes?', hint: 'No, Java does not support multiple class inheritance (to avoid diamond problem).' },
          ],
          miniChallenge: {
            title: 'Employee Hierarchy',
            description: 'Create an Employee base class with name and baseSalary. Create Manager and Developer subclasses that calculate annual bonuses differently.',
            tips: 'Use super.calculatePay() + bonus.',
          },
        },
        {
          id: 'java-l2-t5',
          title: 'Polymorphism',
          subtitle: 'One interface, many forms (Compile-time & Runtime)',
          difficulty: 'medium',
          estimatedHours: '4 hours',
          whatIsIt: 'Polymorphism means "many forms". It allows you to treat different child objects as instances of their common parent type while still invoking their specific child behaviors at runtime.',
          whyLearnIt: 'You can write flexible code that works with any current or future child type without needing massive if-else checks.',
          codeExample: {
            language: 'java',
            code: `Animal[] pets = { new Dog(), new Cat(), new Dog() };

for (Animal pet : pets) {
    pet.makeSound(); // Each makes its own specific sound automatically!
}`,
            explanation: 'Even though pet is declared as Animal, the JVM executes the Dog bark or Cat meow at runtime.',
          },
          practiceExercises: [
            { id: 'ex-2-9', task: 'Explain the difference between method overloading and method overriding.', hint: 'Overloading is same class, different params; Overriding is parent/child, same params.' },
            { id: 'ex-2-10', task: 'Create an array of Shape objects (Circle, Rectangle) and calculate total area in a loop.', hint: 'Shape defines abstract double getArea().' },
          ],
          miniChallenge: {
            title: 'Payment Gateway Dispatcher',
            description: 'Create a PaymentMethod base class with process(double amount). Implement CreditCardPayment and PayPalPayment subclasses. Write a checkout(PaymentMethod method, double total) function.',
            tips: 'The checkout function does not care which payment method was passed; it just calls process().',
          },
        },
        {
          id: 'java-l2-t6',
          title: 'Abstraction and Interfaces',
          subtitle: 'Abstract classes and interface contracts',
          difficulty: 'medium',
          estimatedHours: '4 hours',
          whatIsIt: 'An Interface is a 100% abstract contract specifying what a class must do, but not how it does it. An Abstract Class is an incomplete class that cannot be directly instantiated and can contain both abstract and concrete methods.',
          whyLearnIt: 'Interfaces enable clean decoupling in professional enterprise architecture, allowing different teams and external libraries to plug together seamlessly.',
          codeExample: {
            language: 'java',
            code: `public interface Printable {
    void print(); // Contract: any class implementing must provide this
}

public class Invoice implements Printable {
    @Override
    public void print() {
        System.out.println("Printing official tax invoice...");
    }
}`,
            explanation: 'The implements keyword commits Invoice to fulfilling the Printable contract.',
          },
          practiceExercises: [
            { id: 'ex-2-11', task: 'Can a class implement multiple interfaces?', hint: 'Yes! Java allows multiple interface implementation: class A implements B, C.' },
            { id: 'ex-2-12', task: 'When should you choose an abstract class over an interface?', hint: 'Use abstract class when you want to share code/state; use interface for pure behavior contracts.' },
          ],
          miniChallenge: {
            title: 'Smart Home Automation Contract',
            description: 'Define an interface SmartDevice with turnOn(), turnOff(), and getStatus(). Implement SmartLight, SmartThermostat, and SmartSpeaker classes.',
            tips: 'Store all devices in a List<SmartDevice> and create an "allOff()" emergency command.',
          },
        },
      ],
    },
    {
      levelNumber: 3,
      levelTag: 'LEVEL 3 — Intermediate Java',
      title: 'Collections, Concurrency & Modern Java',
      description: 'Master Exceptions, the Collections Framework (ArrayList, HashMap, HashSet), Generics, File I/O, Multithreading, Lambdas, and Streams.',
      color: 'yellow',
      project: {
        id: 'proj-java-3',
        title: 'Expense Tracker Application',
        difficulty: 'intermediate',
        description: 'A personal finance manager with categorised expenses, date filtering, monthly budget alerts, persistent file storage (CSV/JSON), and stream-based analytics.',
        whatYouWillBuild: 'Multi-threaded or file-backed CLI application utilizing HashMaps for category aggregation, Streams for computing averages and top expenses, and custom Exception handling.',
        skillsRequired: ['Collections (List, Map, Set)', 'File I/O', 'Streams API', 'Lambdas', 'Custom Exceptions'],
        estimatedHours: '10–14 hours',
        starterSteps: [
          'Create Expense entity with id, description, amount, category, and date',
          'Implement FileStorageService to read and write records to expenses.csv',
          'Use HashMap<Category, Double> to aggregate totals by category',
          'Use Streams to filter expenses by month and find top 3 largest transactions',
          'Implement custom InvalidExpenseException for invalid amounts or dates',
          'Write a console menu with interactive commands and summary reports',
        ],
      },
      topics: [
        {
          id: 'java-l3-t1',
          title: 'Exception Handling (Try, Catch, Finally, Custom)',
          subtitle: 'Gracefully handling errors and runtime crashes',
          difficulty: 'medium',
          estimatedHours: '3 hours',
          whatIsIt: 'Exceptions are unexpected events that disrupt the normal flow of a program. Try-catch blocks allow you to intercept errors (like dividing by zero or missing files) and recover gracefully instead of crashing.',
          whyLearnIt: 'Production servers run 24/7. Unhandled exceptions crash services; proper exception handling keeps critical apps running.',
          codeExample: {
            language: 'java',
            code: `try {
    int result = 100 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero: " + e.getMessage());
} finally {
    System.out.println("Cleanup actions execute here regardless!");
}`,
            explanation: 'The catch block intercepts the error, allowing the program to continue executing.',
          },
          practiceExercises: [
            { id: 'ex-3-1', task: 'Difference between Checked and Unchecked exceptions?', hint: 'Checked exceptions are verified at compile time; Unchecked (RuntimeExceptions) occur at runtime.' },
            { id: 'ex-3-2', task: 'Create a custom InsufficientFundsException extending Exception.', hint: 'public class InsufficientFundsException extends Exception { ... }' },
          ],
          miniChallenge: {
            title: 'Bulletproof Input Reader',
            description: 'Write a helper method getValidInteger(Scanner s, String prompt) that loops until the user enters a valid integer without crashing on letters.',
            tips: 'Catch InputMismatchException, clear the buffer with s.next(), and retry.',
          },
        },
        {
          id: 'java-l3-t2',
          title: 'Collections Framework (ArrayList, LinkedList, HashMap, HashSet)',
          subtitle: 'Dynamic memory structures for real-world datasets',
          difficulty: 'medium',
          estimatedHours: '5 hours',
          whatIsIt: 'The Java Collections Framework provides ready-made data structures: ArrayList (dynamic resizable list), HashSet (guarantees unique elements, O(1) lookup), and HashMap (key-value dictionary mapping, O(1) lookup).',
          whyLearnIt: 'Standard arrays have fixed sizes. 90% of business code uses ArrayList for lists and HashMap for lookup tables.',
          codeExample: {
            language: 'java',
            code: `import java.util.*;

// Key-Value Dictionary
Map<String, Double> stockPrices = new HashMap<>();
stockPrices.put("AAPL", 185.50);
stockPrices.put("GOOGL", 175.20);

// Unique Set
Set<String> uniqueTags = new HashSet<>();
uniqueTags.add("java");
uniqueTags.add("java"); // Ignored, sets never allow duplicates!`,
            explanation: 'Maps let you look up values instantly using a unique key.',
          },
          practiceExercises: [
            { id: 'ex-3-3', task: 'Count the frequency of each word in a paragraph using a HashMap<String, Integer>.', hint: 'map.put(word, map.getOrDefault(word, 0) + 1);' },
            { id: 'ex-3-4', task: 'When should you use LinkedList over ArrayList?', hint: 'LinkedList is faster for frequent insertions/deletions at the head/middle.' },
          ],
          miniChallenge: {
            title: 'Phonebook Directory',
            description: 'Create an in-memory Phonebook using HashMap<String, String>. Support commands: ADD, SEARCH, DELETE, and LIST_ALL.',
            tips: 'Use map.containsKey(name) to verify existence before updating.',
          },
        },
        {
          id: 'java-l3-t3',
          title: 'Generics (<T>)',
          subtitle: 'Type-safe templates without type casting',
          difficulty: 'medium',
          estimatedHours: '3 hours',
          whatIsIt: 'Generics allow you to define classes, interfaces, and methods with type parameters (like List<String> or Box<T>). The compiler enforces that only the specified type can enter the collection.',
          whyLearnIt: 'Before generics, collections held raw Objects, causing dangerous ClassCastExceptions at runtime.',
          codeExample: {
            language: 'java',
            code: `public class Box<T> {
    private T content;

    public void set(T item) { this.content = item; }
    public T get() { return this.content; }
}

// In main:
Box<String> nameBox = new Box<>();
nameBox.set("Alex");
String name = nameBox.get(); // No cast needed!`,
            explanation: 'The letter T represents any type chosen when the box is created.',
          },
          practiceExercises: [
            { id: 'ex-3-5', task: 'Write a generic method printArray(T[] array) that prints elements of any array type.', hint: 'public static <T> void printArray(T[] arr)' },
            { id: 'ex-3-6', task: 'What is a wildcard in Java Generics (<?> vs <? extends Number>)?', hint: 'Bounded wildcards restrict acceptable generic types.' },
          ],
          miniChallenge: {
            title: 'Generic Key-Value Pair',
            description: 'Implement a Pair<K, V> class with getKey(), getValue(), and toString(). Test it with Pair<String, Integer> and Pair<Integer, Boolean>.',
            tips: 'Declare: public class Pair<K, V>',
          },
        },
        {
          id: 'java-l3-t4',
          title: 'File Handling & Serialization',
          subtitle: 'Reading and writing permanent data with java.nio and java.io',
          difficulty: 'medium',
          estimatedHours: '3 hours',
          whatIsIt: 'File handling lets your program save data to the hard drive (in .txt, .csv, or .json files) and load it back when the program restarts.',
          whyLearnIt: 'Variables in memory disappear the second your app closes. Permanent storage makes your apps truly useful.',
          codeExample: {
            language: 'java',
            code: `import java.nio.file.*;
import java.io.IOException;

Path path = Path.of("notes.txt");
// Write to file:
Files.writeString(path, "Java is awesome!");

// Read from file:
String content = Files.readString(path);
System.out.println("Loaded: " + content);`,
            explanation: 'java.nio.file.Files provides clean modern methods for reading and writing text with one line.',
          },
          practiceExercises: [
            { id: 'ex-3-7', task: 'Write a program that logs the current timestamp to a log.txt file each time it runs.', hint: 'Use StandardOpenOption.APPEND with Files.writeString.' },
            { id: 'ex-3-8', task: 'Read a CSV file line by line and print each column separated by tabs.', hint: 'Use Files.readAllLines(path) and line.split(",").' },
          ],
          miniChallenge: {
            title: 'Persistent Todo List',
            description: 'Build a CLI todo list that loads saved tasks from tasks.txt on startup and writes new tasks to the file upon exiting.',
            tips: 'Use try-with-resources to ensure file streams close properly.',
          },
        },
        {
          id: 'java-l3-t5',
          title: 'Multithreading & Concurrency',
          subtitle: 'Threads, Runnable, synchronized, and ExecutorService',
          difficulty: 'advanced',
          estimatedHours: '4 hours',
          whatIsIt: 'A thread is a separate path of execution. Multithreading allows your program to perform multiple tasks at the exact same time on multi-core CPUs (e.g. downloading a file in the background while UI stays responsive).',
          whyLearnIt: 'Enterprise backends handle thousands of concurrent user requests simultaneously using thread pools.',
          codeExample: {
            language: 'java',
            code: `Runnable task = () -> {
    System.out.println("Running in thread: " + Thread.currentThread().getName());
};

Thread thread = new Thread(task);
thread.start();`,
            explanation: 'thread.start() spawns a new thread managed by the operating system scheduler.',
          },
          practiceExercises: [
            { id: 'ex-3-9', task: 'Difference between extending Thread vs implementing Runnable?', hint: 'Implementing Runnable is preferred because Java only allows single class inheritance.' },
            { id: 'ex-3-10', task: 'What is a Race Condition?', hint: 'When two threads modify shared data simultaneously, causing corrupted state.' },
          ],
          miniChallenge: {
            title: 'Parallel Web Crawler Simulation',
            description: 'Simulate downloading 5 web pages concurrently using ExecutorService thread pool (Executors.newFixedThreadPool(3)). Log start and completion times.',
            tips: 'executor.submit(() -> { Thread.sleep(1000); });',
          },
        },
        {
          id: 'java-l3-t6',
          title: 'Lambda Expressions & Stream API',
          subtitle: 'Functional programming, filter, map, reduce, collect',
          difficulty: 'advanced',
          estimatedHours: '4 hours',
          whatIsIt: 'Lambdas provide concise syntax for anonymous functions (e.g. x -> x * 2). The Stream API allows declarative data processing: filtering, transforming, sorting, and aggregating collections in a single readable pipeline.',
          whyLearnIt: 'Modern Java (Java 8 to 21+) relies heavily on Streams. It replaces clumsy nested loops with clean, expressive, bug-free pipelines.',
          codeExample: {
            language: 'java',
            code: `List<String> names = List.of("Alice", "Bob", "Charlie", "David");

List<String> longNames = names.stream()
    .filter(name -> name.length() > 4)
    .map(String::toUpperCase)
    .toList();

// Result: [ALICE, CHARLIE, DAVID]`,
            explanation: 'The pipeline filters names longer than 4 chars and converts them to uppercase.',
          },
          practiceExercises: [
            { id: 'ex-3-11', task: 'Given a list of numbers, use Streams to find the sum of all odd numbers.', hint: '.filter(n -> n % 2 != 0).reduce(0, Integer::sum)' },
            { id: 'ex-3-12', task: 'Convert a list of User objects into a Map<Long, String> of id -> name.', hint: 'Use Collectors.toMap(User::getId, User::getName).' },
          ],
          miniChallenge: {
            title: 'Top Performers Pipeline',
            description: 'Given a list of Student objects (name, gpa), use Streams to filter students with GPA >= 3.5, sort descending by GPA, and collect the top 3 names into a list.',
            tips: '.sorted(Comparator.comparingDouble(Student::getGpa).reversed()).limit(3)',
          },
        },
      ],
    },
    {
      levelNumber: 4,
      levelTag: 'LEVEL 4 — Advanced Java & Backend',
      title: 'Spring Boot, REST APIs & Enterprise Tech',
      description: 'Build enterprise backend services with JDBC, SQL, HTTP, REST APIs, Spring Boot, Maven, JUnit testing and Git.',
      color: 'pink',
      project: {
        id: 'proj-java-4',
        title: 'Full Backend REST API with Spring Boot',
        difficulty: 'advanced',
        description: 'A production-grade RESTful API service with Spring Boot, Spring Data JPA, PostgreSQL/H2, Bean Validation, DTOs, JWT Authentication, and Swagger documentation.',
        whatYouWillBuild: 'Production REST API supporting complete CRUD operations, database migrations, security filters, and automated JUnit/Mockito test suites.',
        skillsRequired: ['Spring Boot', 'Spring Data JPA', 'REST principles', 'PostgreSQL/SQL', 'JUnit 5', 'Maven'],
        estimatedHours: '16–20 hours',
        starterSteps: [
          'Initialize Spring Boot project using Spring Initializr with Web, JPA, Lombok, Validation',
          'Configure application.properties with database connection pool',
          'Create Entity models, Repositories, Services, and @RestController',
          'Implement DTO patterns to protect domain models from direct exposure',
          'Add GlobalExceptionHandler using @ControllerAdvice for clean HTTP error codes',
          'Write integration tests with @SpringBootTest and MockMvc',
        ],
      },
      topics: [
        {
          id: 'java-l4-t1',
          title: 'JDBC & Relational Databases (SQL)',
          subtitle: 'Connecting Java to PostgreSQL and MySQL',
          difficulty: 'advanced',
          estimatedHours: '4 hours',
          whatIsIt: 'JDBC (Java Database Connectivity) is the standard API for connecting Java applications to relational databases like PostgreSQL, MySQL, or SQLite to execute SQL queries (SELECT, INSERT, UPDATE, DELETE).',
          whyLearnIt: 'Virtually all enterprise software relies on persistent relational databases to store user accounts, financial records, and business transactions.',
          codeExample: {
            language: 'java',
            code: `String sql = "SELECT * FROM users WHERE email = ?";
try (Connection conn = DriverManager.getConnection(url, user, pass);
     PreparedStatement pstmt = conn.prepareStatement(sql)) {
    pstmt.setString(1, "alex@example.com");
    ResultSet rs = pstmt.executeQuery();
    while (rs.next()) {
        System.out.println("Found user: " + rs.getString("name"));
    }
}`,
            explanation: 'PreparedStatements prevent catastrophic SQL Injection attacks by parameterizing inputs.',
          },
          practiceExercises: [
            { id: 'ex-4-1', task: 'Why should you always use PreparedStatement instead of Statement with string concatenation?', hint: 'PreparedStatement sanitizes inputs and blocks SQL Injection attacks.' },
            { id: 'ex-4-2', task: 'What is connection pooling (HikariCP) and why does Spring Boot use it?', hint: 'Reuses open database connections instead of opening costly TCP connections per query.' },
          ],
          miniChallenge: {
            title: 'CRUD Repository with JDBC',
            description: 'Write a SimpleUserRepository class with save(User u) and findById(int id) methods using JDBC and try-with-resources.',
            tips: 'Always close Connection, Statement, and ResultSet.',
          },
        },
        {
          id: 'java-l4-t2',
          title: 'HTTP Protocol & RESTful API Architecture',
          subtitle: 'GET, POST, PUT, DELETE, status codes and JSON payloads',
          difficulty: 'advanced',
          estimatedHours: '3 hours',
          whatIsIt: 'REST (Representational State Transfer) is the architectural standard for web communications. Clients send HTTP requests (GET to read, POST to create, PUT to update, DELETE to remove) and receive JSON responses with HTTP status codes (200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Server Error).',
          whyLearnIt: 'REST is the universal bridge connecting frontend web apps (React, mobile) to Java backend servers.',
          codeExample: {
            language: 'text',
            code: `HTTP Request:
POST /api/v1/products HTTP/1.1
Content-Type: application/json
{
  "name": "Wireless Mouse",
  "price": 29.99
}

HTTP Response:
HTTP/1.1 201 Created
Location: /api/v1/products/42`,
            explanation: 'Clear verbs and status codes make APIs predictable and standards-compliant.',
          },
          practiceExercises: [
            { id: 'ex-4-3', task: 'What HTTP method should be used to partially update an existing resource?', hint: 'PATCH (or PUT for full replacement).' },
            { id: 'ex-4-4', task: 'What is the semantic difference between 401 Unauthorized and 403 Forbidden?', hint: '401 means not authenticated (login required); 403 means authenticated but lack permission.' },
          ],
          miniChallenge: {
            title: 'API Endpoint Blueprint',
            description: 'Design the full REST URL and method schema for an e-commerce shopping cart: view cart, add item, update quantity, remove item, and checkout.',
            tips: 'GET /cart, POST /cart/items, PUT /cart/items/{id}, DELETE /cart/items/{id}, POST /cart/checkout.',
          },
        },
        {
          id: 'java-l4-t3',
          title: 'Spring Framework & Spring Boot Foundations',
          subtitle: 'Inversion of Control (IoC), Dependency Injection (DI)',
          difficulty: 'advanced',
          estimatedHours: '5 hours',
          whatIsIt: 'Spring Boot is the world’s leading Java backend framework. It provides Inversion of Control (the framework manages object lifecycles) and Dependency Injection (@Autowired), allowing you to build production-ready microservices with zero boilerplate.',
          whyLearnIt: 'Spring Boot powers the majority of modern enterprise Java jobs globally.',
          codeExample: {
            language: 'java',
            code: `@RestController
@RequestMapping("/api/greetings")
public class GreetingController {

    @GetMapping
    public Map<String, String> sayHello(@RequestParam(defaultValue = "World") String name) {
        return Map.of("message", "Hello, " + name + "!");
    }
}`,
            explanation: 'Spring converts the returned Map directly into JSON and sets Content-Type: application/json.',
          },
          practiceExercises: [
            { id: 'ex-4-5', task: 'Explain the difference between @Component, @Service, and @Repository in Spring.', hint: 'They are all Spring Beans, but specify clear architectural roles for readability and exception translation.' },
            { id: 'ex-4-6', task: 'What is Dependency Injection in simple terms?', hint: 'Instead of an object creating its dependencies with "new", the container passes them in.' },
          ],
          miniChallenge: {
            title: 'First Spring Boot Microservice',
            description: 'Generate a Spring Boot app using start.spring.io. Create a HealthCheckController with a GET /actuator/status endpoint returning server timestamp and status: UP.',
            tips: 'Annotate the class with @RestController and method with @GetMapping("/actuator/status").',
          },
        },
        {
          id: 'java-l4-t4',
          title: 'Spring Data JPA & Hibernate ORM',
          subtitle: 'Map Java objects directly to database tables',
          difficulty: 'advanced',
          estimatedHours: '5 hours',
          whatIsIt: 'ORM (Object-Relational Mapping) maps Java classes (@Entity) directly to SQL database tables. Spring Data JPA provides automatic repository implementations with built-in pagination, sorting, and CRUD query generation.',
          whyLearnIt: 'You never have to write repetitive SQL queries or ResultSet mapping loops again.',
          codeExample: {
            language: 'java',
            code: `@Entity
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
}

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email); // Automatically implemented!
}`,
            explanation: 'Spring Data derives the SQL query directly from the method name findByEmail.',
          },
          practiceExercises: [
            { id: 'ex-4-7', task: 'What annotation marks the primary key in a JPA Entity?', hint: '@Id' },
            { id: 'ex-4-8', task: 'Difference between eager and lazy loading in JPA relationships (@OneToMany)?', hint: 'Eager loads immediately; Lazy loads only when the field is accessed.' },
          ],
          miniChallenge: {
            title: 'Bookstore Entity Relationship',
            description: 'Model an Author with @OneToMany List<Book>, and Book with @ManyToOne Author. Write a repository query to find books by genre.',
            tips: 'Use cascade = CascadeType.ALL on the parent relationship.',
          },
        },
        {
          id: 'java-l4-t5',
          title: 'Testing with JUnit 5 & Mockito',
          subtitle: 'Automated unit and integration testing',
          difficulty: 'advanced',
          estimatedHours: '3 hours',
          whatIsIt: 'JUnit 5 is the standard test runner for Java. Mockito allows you to mock external dependencies (like databases or third-party APIs) so you can test business logic in total isolation.',
          whyLearnIt: 'Companies do not hire developers who cannot write tests. Unit tests ensure your code works and prevents regressions during future updates.',
          codeExample: {
            language: 'java',
            code: `import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {
    @Test
    void shouldAddTwoNumbersCorrectly() {
        Calculator calc = new Calculator();
        assertEquals(5, calc.add(2, 3));
    }
}`,
            explanation: 'If the assertion fails, the test build fails and alerts you immediately.',
          },
          practiceExercises: [
            { id: 'ex-4-9', task: 'What annotation runs before each individual test method in JUnit 5?', hint: '@BeforeEach' },
            { id: 'ex-4-10', task: 'Why do we mock services with Mockito instead of calling real databases in unit tests?', hint: 'For speed, predictability, and preventing test pollution.' },
          ],
          miniChallenge: {
            title: 'Test-Driven UserService',
            description: 'Write unit tests for a UserService.register() method: test that duplicate emails throw an exception, and valid users get saved with encrypted passwords.',
            tips: 'Use when(userRepo.existsByEmail(...)).thenReturn(true).',
          },
        },
      ],
    },
    {
      levelNumber: 5,
      levelTag: 'LEVEL 5 — Data Structures & Algorithms',
      title: 'Algorithmic Mastery & Problem Solving',
      description: 'Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Hashing, Sorting, Searching, Recursion and Dynamic Programming.',
      color: 'purple',
      practiceGoal: 'Practice Goal: 100+ LeetCode / HackerRank problems',
      topics: [
        {
          id: 'java-l5-t1',
          title: 'Big-O Notation & Complexity Analysis',
          subtitle: 'Measuring time and space efficiency: O(1), O(log n), O(n), O(n²)',
          difficulty: 'medium',
          estimatedHours: '3 hours',
          whatIsIt: 'Big-O notation describes how an algorithm’s runtime or memory consumption scales as input size (N) grows towards infinity.',
          whyLearnIt: 'An O(n²) algorithm might take 1 second for 1,000 items, but 30 years for 1,000,000 items. Knowing Big-O lets you pick the right tool for large scale.',
          codeExample: {
            language: 'text',
            code: `O(1)       -> Instant lookup (HashMap get, Array index)
O(log n)   -> Binary search (halving search space each step)
O(n)       -> Single pass loop over array
O(n log n) -> Efficient sorting (MergeSort, QuickSort)
O(n²)      -> Nested loops comparing all pairs (BubbleSort)`,
            explanation: 'Always strive for O(1) or O(log n) when designing frequent operations.',
          },
          practiceExercises: [
            { id: 'ex-5-1', task: 'What is the Big-O time complexity of accessing an array element by index?', hint: 'O(1) constant time.' },
            { id: 'ex-5-2', task: 'What is the time complexity of searching an unsorted array?', hint: 'O(n) linear scan.' },
          ],
          miniChallenge: {
            title: 'Algorithm Speed Comparison',
            description: 'Compare linear search vs binary search on an array of 1,000,000 sorted numbers. Calculate worst-case comparison counts for both (1,000,000 vs ~20).',
            tips: 'log2(1,000,000) ≈ 20 operations!',
          },
        },
        {
          id: 'java-l5-t2',
          title: 'Linear Data Structures: Stacks & Queues',
          subtitle: 'LIFO (Last In First Out) and FIFO (First In First Out)',
          difficulty: 'medium',
          estimatedHours: '3 hours',
          whatIsIt: 'A Stack operates on LIFO (like a stack of cafeteria trays: push and pop). A Queue operates on FIFO (like a grocery checkout line: enqueue and dequeue).',
          whyLearnIt: 'Stacks power browser back buttons and undo/redo buffers. Queues power message brokers (Kafka, RabbitMQ) and printer jobs.',
          codeExample: {
            language: 'java',
            code: `Deque<String> stack = new ArrayDeque<>();
stack.push("Page 1");
stack.push("Page 2");
System.out.println("Back to: " + stack.pop()); // Page 2

Queue<String> queue = new LinkedList<>();
queue.offer("Customer 1");
queue.offer("Customer 2");
System.out.println("Serving: " + queue.poll()); // Customer 1`,
            explanation: 'Java recommends ArrayDeque over legacy Stack class for superior performance.',
          },
          practiceExercises: [
            { id: 'ex-5-3', task: 'Solve the Valid Parentheses problem: check if brackets "({[]})" match correctly.', hint: 'Push open brackets to a stack; pop and match on closing brackets.' },
            { id: 'ex-5-4', task: 'Implement a queue using two stacks.', hint: 'Use one stack for enqueue and one stack for dequeue.' },
          ],
          miniChallenge: {
            title: 'Expression Evaluator',
            description: 'Write an algorithm using a stack to evaluate Postfix (Reverse Polish) math expressions like "3 4 + 2 *".',
            tips: 'Push numbers; when an operator appears, pop two numbers, apply operation, push result back.',
          },
        },
        {
          id: 'java-l5-t3',
          title: 'Trees & Binary Search Trees (BST)',
          subtitle: 'Hierarchical node relationships, tree traversals (BFS & DFS)',
          difficulty: 'advanced',
          estimatedHours: '5 hours',
          whatIsIt: 'A tree is a non-linear data structure with a root node and children. A Binary Search Tree guarantees left child < parent < right child, allowing O(log n) lookup.',
          whyLearnIt: 'Database indexes (B-Trees) and file system folder trees use tree structures to organize billions of items.',
          codeExample: {
            language: 'java',
            code: `class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int v) { this.val = v; }
}

// In-order traversal visits nodes in sorted order:
void inOrder(TreeNode root) {
    if (root == null) return;
    inOrder(root.left);
    System.out.print(root.val + " ");
    inOrder(root.right);
}`,
            explanation: 'Recursion navigates left, visits the value, then navigates right.',
          },
          practiceExercises: [
            { id: 'ex-5-5', task: 'Write a method to calculate the maximum depth (height) of a binary tree.', hint: '1 + Math.max(maxDepth(root.left), maxDepth(root.right))' },
            { id: 'ex-5-6', task: 'Difference between In-order, Pre-order, and Post-order traversals?', hint: 'When the root is visited relative to left and right subtrees.' },
          ],
          miniChallenge: {
            title: 'BST Validator',
            description: 'Implement a function isValidBST(TreeNode root) that verifies all left descendants are strictly less than current node and all right descendants are greater.',
            tips: 'Pass min and max bounds recursively.',
          },
        },
        {
          id: 'java-l5-t4',
          title: 'Graphs, BFS & DFS',
          subtitle: 'Vertices, edges, Breadth-First and Depth-First Search',
          difficulty: 'advanced',
          estimatedHours: '5 hours',
          whatIsIt: 'A Graph models networks of interconnected nodes (vertices) and connections (edges). Used for social networks (friends), road maps (GPS directions), and internet routing.',
          whyLearnIt: 'Graph algorithms solve shortest path routing (Google Maps, flight finders) and recommendation engines.',
          codeExample: {
            language: 'java',
            code: `// Adjacency List representation:
Map<Integer, List<Integer>> graph = new HashMap<>();
graph.put(1, List.of(2, 3));
graph.put(2, List.of(4));

// BFS uses a Queue to explore neighbors level-by-level
Queue<Integer> q = new LinkedList<>();
Set<Integer> visited = new HashSet<>();`,
            explanation: 'BFS discovers the shortest path in unweighted graphs.',
          },
          practiceExercises: [
            { id: 'ex-5-7', task: 'Why must we track visited nodes in graph traversals?', hint: 'To prevent infinite loops when cycles exist in the graph.' },
            { id: 'ex-5-8', task: 'Which traversal algorithm finds the shortest path in an unweighted maze?', hint: 'BFS (Breadth-First Search).' },
          ],
          miniChallenge: {
            title: 'Social Network Degree of Separation',
            description: 'Build a BFS function that finds the shortest degree of friendship connection between Person A and Person B.',
            tips: 'Track distance count level-by-level using a queue.',
          },
        },
        {
          id: 'java-l5-t5',
          title: 'Recursion & Dynamic Programming (DP)',
          subtitle: 'Breaking complex problems into overlapping subproblems with memoization',
          difficulty: 'advanced',
          estimatedHours: '6 hours',
          whatIsIt: 'Recursion is a function calling itself until hitting a base case. Dynamic Programming optimizes recursion by caching already calculated results (memoization) so you never re-compute identical subproblems.',
          whyLearnIt: 'DP turns exponential O(2ⁿ) bottlenecks into blazing-fast O(n) solutions. It is the gold standard of technical coding interviews.',
          codeExample: {
            language: 'java',
            code: `// Fibonacci with Memoization (DP):
Map<Integer, Long> memo = new HashMap<>();

public long fib(int n) {
    if (n <= 1) return n;
    if (memo.containsKey(n)) return memo.get(n);
    long res = fib(n - 1) + fib(n - 2);
    memo.put(n, res);
    return res;
}`,
            explanation: 'The lookup table turns what would be billions of operations into just n steps.',
          },
          practiceExercises: [
            { id: 'ex-5-9', task: 'Solve the Climbing Stairs problem: you can climb 1 or 2 steps at a time. How many distinct ways to reach top N?', hint: 'Notice it follows the exact Fibonacci recurrence: dp[i] = dp[i-1] + dp[i-2].' },
            { id: 'ex-5-10', task: 'Explain the difference between Top-Down (Memoization) and Bottom-Up (Tabulation) DP.', hint: 'Top-down uses recursion + cache; bottom-up uses iterative table building.' },
          ],
          miniChallenge: {
            title: 'Coin Change Problem',
            description: 'Given coins [1, 2, 5] and amount 11, find the minimum number of coins needed to make up that amount (answer: 5+5+1 = 3 coins).',
            tips: 'Use an array dp of size amount + 1 initialized to amount + 1.',
          },
        },
      ],
    },
    {
      levelNumber: 6,
      levelTag: 'LEVEL 6 — Real Projects & Career Readiness',
      title: '8 Portfolio Projects & Job Preparation',
      description: 'Build these 8 production-quality projects to showcase on your GitHub, craft an ATS-optimized resume, and conquer Java interviews.',
      color: 'cyan',
      topics: [
        {
          id: 'java-l6-t1',
          title: 'GitHub & Clean Code Standards',
          subtitle: 'Professional commit hygiene, branching and README documentation',
          difficulty: 'easy',
          estimatedHours: '2 hours',
          whatIsIt: 'Hiring managers evaluate your GitHub. Clean code means meaningful variable names, single-responsibility methods, unit tests, and comprehensive README documentation with architecture diagrams.',
          whyLearnIt: 'Your GitHub profile is your live engineering portfolio that proves you can build real software.',
          codeExample: {
            language: 'markdown',
            code: `# Project Name
## Overview & Architecture
## Tech Stack (Java 21, Spring Boot, PostgreSQL)
## Setup & Running Instructions
## API Documentation & Screenshots`,
            explanation: 'Every repository must include a clean README explaining what it does and how to run it.',
          },
          practiceExercises: [
            { id: 'ex-6-1', task: 'Initialize a Git repository, commit your code with conventional commit syntax (feat:, fix:), and push to GitHub.', hint: 'git commit -m "feat: add user authentication"' },
            { id: 'ex-6-2', task: 'Create a .gitignore file to exclude target/, .idea/, and .class files.', hint: 'Never commit compiled binaries or IDE settings.' },
          ],
          miniChallenge: {
            title: 'Portfolio README Makeover',
            description: 'Write a professional GitHub README for one of your projects with badges, prerequisites, build steps, and API endpoint examples.',
            tips: 'Use shields.io for clean status badges.',
          },
        },
        {
          id: 'java-l6-t2',
          title: 'Java Developer Technical Interview Prep',
          subtitle: 'JVM memory model, Garbage Collection, and Java concurrency questions',
          difficulty: 'advanced',
          estimatedHours: '4 hours',
          whatIsIt: 'Java technical interviews focus on core concepts: JVM Heap vs Stack memory, Garbage Collection algorithms (G1, ZGC), equals() and hashCode() contracts, and Spring bean lifecycle.',
          whyLearnIt: 'Knowing how Java works under the hood distinguishes junior coders from senior engineers.',
          codeExample: {
            language: 'text',
            code: `Heap Memory:
- Stores all objects and JRE classes
- Managed automatically by Garbage Collector

Stack Memory:
- Stores method call frames and local primitive variables
- Very fast, allocated and freed immediately when method returns`,
            explanation: 'Understanding Heap vs Stack is essential for explaining OutOfMemoryError vs StackOverflowError.',
          },
          practiceExercises: [
            { id: 'ex-6-3', task: 'Why must you override hashCode() whenever you override equals() in Java?', hint: 'Hash-based collections like HashMap and HashSet depend on identical objects having matching hash codes.' },
            { id: 'ex-6-4', task: 'What is the volatile keyword in Java multithreading?', hint: 'Ensures changes to a variable are instantly visible to all threads (prevents CPU cache inconsistencies).' },
          ],
          miniChallenge: {
            title: 'Mock Interview Drill',
            description: 'Answer these 3 interview questions aloud without notes: 1) What is the JVM memory model? 2) How does HashMap work internally in Java? 3) What is Dependency Injection?',
            tips: 'Structure your answers: Definition -> Why it matters -> Example.',
          },
        },
      ],
    },
  ],
  projects: [
    {
      id: 'p1',
      title: 'Scientific & Financial Calculator',
      difficulty: 'beginner',
      description: 'A robust desktop or console calculator handling parentheses, operator precedence, exponentiation, and input error checking.',
      whatYouWillBuild: 'Menu-driven or GUI (JavaFX/Swing) calculator implementing custom parsing logic and robust exception validation.',
      skillsRequired: ['Java Basics', 'Scanner', 'Methods', 'Switch Statements', 'Exception Handling'],
      estimatedHours: '3–5 hours',
      starterSteps: ['Parse arithmetic operations', 'Implement precedence', 'Validate divide by zero', 'Add memory store/recall'],
    },
    {
      id: 'p2',
      title: 'Student Management System',
      difficulty: 'beginner',
      description: 'A multi-class administration tool for managing enrollments, courses, GPA calculations, and file export.',
      whatYouWillBuild: 'Object-oriented records system with persistent file storage and formatted tabular console output.',
      skillsRequired: ['OOP (Classes, Objects)', 'ArrayList', 'File I/O', 'Data Validation'],
      estimatedHours: '6–8 hours',
      starterSteps: ['Create Student and Course entities', 'Build enrollment registry', 'Persist to CSV', 'Support search by ID'],
    },
    {
      id: 'p3',
      title: 'Bank Management System',
      difficulty: 'intermediate',
      description: 'A complete banking application featuring multiple account types, interest calculation, overdraft protection, and transaction audit trails.',
      whatYouWillBuild: 'Production-style OOP hierarchy showcasing abstract classes, interfaces, and encapsulation.',
      skillsRequired: ['Inheritance', 'Interfaces', 'Polymorphism', 'Encapsulation', 'Collections'],
      estimatedHours: '8–12 hours',
      starterSteps: ['Create BaseAccount hierarchy', 'Implement Checking & Savings rules', 'Add transfer lock', 'Generate account statements'],
    },
    {
      id: 'p4',
      title: 'Personal Expense Tracker',
      difficulty: 'intermediate',
      description: 'A personal finance manager tracking monthly spending categories, budget limits, and financial analytics.',
      whatYouWillBuild: 'Analytical application utilizing HashMaps for category aggregation and Java Streams for analytics.',
      skillsRequired: ['Collections (HashMap, List)', 'Java Streams', 'Lambdas', 'File I/O'],
      estimatedHours: '10–14 hours',
      starterSteps: ['Model expense items', 'Aggregate by category using Streams', 'Filter by date range', 'Compute monthly trends'],
    },
    {
      id: 'p5',
      title: 'Interactive Quiz Application',
      difficulty: 'intermediate',
      description: 'A timed multi-category quiz game with randomized questions, score leaderboards, and detailed post-quiz answer analysis.',
      whatYouWillBuild: 'Application with JSON question loading, countdown timers using Java Concurrency, and score history storage.',
      skillsRequired: ['Multithreading (Timers)', 'Collections', 'JSON parsing', 'OOP'],
      estimatedHours: '8–10 hours',
      starterSteps: ['Load questions from JSON', 'Implement countdown timer thread', 'Calculate accuracy stats', 'Save high score table'],
    },
    {
      id: 'p6',
      title: 'E-commerce Shopping Backend',
      difficulty: 'advanced',
      description: 'Backend catalog and checkout engine managing product inventory, discount coupons, shopping carts, and simulated payment processing.',
      whatYouWillBuild: 'Modular backend architecture with repository patterns, inventory locking, and custom business exceptions.',
      skillsRequired: ['Spring Boot', 'Spring Data JPA', 'H2/PostgreSQL', 'REST Endpoints'],
      estimatedHours: '14–18 hours',
      starterSteps: ['Define Product & Order JPA entities', 'Create CRUD REST controllers', 'Handle stock decrement transactions', 'Add mock checkout endpoint'],
    },
    {
      id: 'p7',
      title: 'Full REST API with JWT Authentication',
      difficulty: 'advanced',
      description: 'A secure multi-tenant backend service with user registration, password hashing (BCrypt), JWT token issuance, and role-based access control.',
      whatYouWillBuild: 'Production-ready Spring Security API implementing stateless authentication filters and permission guards.',
      skillsRequired: ['Spring Security', 'JWT Tokens', 'PostgreSQL', 'Bean Validation'],
      estimatedHours: '16–22 hours',
      starterSteps: ['Setup Spring Security filter chain', 'Implement UserDetailsService', 'Generate and validate JWTs', 'Protect admin routes'],
    },
    {
      id: 'p8',
      title: 'Full-Stack Java Cloud Application',
      difficulty: 'advanced',
      description: 'An enterprise cloud application connecting a Spring Boot backend with a React web frontend, PostgreSQL database, and Docker containerization.',
      whatYouWillBuild: 'Complete full-stack system with Docker Compose setup, automated tests, and live Swagger API documentation.',
      skillsRequired: ['Spring Boot', 'React', 'Docker', 'PostgreSQL', 'CI/CD Basics'],
      estimatedHours: '25–35 hours',
      starterSteps: ['Containerize app with Dockerfile', 'Configure CORS and frontend proxy', 'Connect Spring Data to PostgreSQL', 'Deploy automated test pipeline'],
    },
  ],
};
