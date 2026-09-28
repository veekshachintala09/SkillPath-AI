import { Roadmap } from '../../types/roadmap';

export const pythonRoadmap: Roadmap = {
  id: 'python',
  title: 'Python Roadmap',
  slug: 'python',
  subtitle: 'From beginner scripts to data science, web backends & AI automation',
  category: 'programming',
  icon: 'Terminal',
  difficulty: 'Beginner → Advanced',
  estimatedDuration: '3–5 months',
  projectsCount: 7,
  careerPaths: ['Python Developer', 'Data Analyst', 'Backend Engineer (FastAPI/Django)', 'Machine Learning Engineer'],
  careerStages: [
    { title: 'Python Basics', desc: 'Variables, loops, functions, lists, dicts & modules' },
    { title: 'OOP & Clean Code', desc: 'Classes, decorators, generators & error handling' },
    { title: 'Libraries & Tools', desc: 'Virtual environments, pip, Requests, Pandas' },
    { title: 'Specialized Track', desc: 'Web (FastAPI/Django) or Data/AI (NumPy, Scikit-learn)' },
    { title: 'Portfolio Projects', desc: 'Full-stack web scraper, REST API, or predictive model' },
    { title: 'Interview & Career', desc: 'Pythonic idioms, algorithms, and system design' },
  ],
  levels: [
    {
      levelNumber: 0,
      levelTag: 'LEVEL 0 — Prerequisites & Setup',
      title: 'Environment & Pythonic Mindset',
      description: 'Install Python 3.12+, configure VS Code or PyCharm, and run your first interactive REPL session.',
      color: 'blue',
      topics: [
        {
          id: 'py-l0-t1',
          title: 'Installing Python & VS Code',
          subtitle: 'Setting up Python 3.12 and the Python extension',
          difficulty: 'easy',
          estimatedHours: '2 hours',
          whatIsIt: 'Python is an interpreted, high-level language celebrated for readable, English-like syntax. The Python interpreter reads your .py files line by line and executes them immediately.',
          whyLearnIt: 'Python is the fastest language to learn and the #1 language worldwide for Artificial Intelligence, data analysis, and automation.',
          codeExample: {
            language: 'bash',
            code: `# Check python in terminal:
python --version
# Expected: Python 3.12.x`,
            explanation: 'The terminal command verifies Python is correctly installed and added to PATH.',
          },
          practiceExercises: [
            { id: 'py-ex-0-1', task: 'Open terminal and launch Python interactive shell by typing "python".', hint: 'You will see the ">>>" prompt where you can execute code live.' },
            { id: 'py-ex-0-2', task: 'Type 10 + 25 * 2 in the Python shell and press enter.', hint: 'Python acts as an immediate calculator.' },
          ],
          miniChallenge: {
            title: 'Interactive Shell Explorer',
            description: 'Run python in terminal, test print("Hello World"), exit with exit(), and create a file hello.py to run with "python hello.py".',
            tips: 'Use VS Code terminal (Ctrl + `).',
          },
        },
        {
          id: 'py-l0-t2',
          title: 'Variables, Indentation & Data Types',
          subtitle: 'The significance of whitespace and dynamic typing',
          difficulty: 'easy',
          estimatedHours: '3 hours',
          whatIsIt: 'In Python, code blocks are defined by indentation (4 spaces) rather than curly braces {}. Python is dynamically typed: you do not need to declare types like int or float.',
          whyLearnIt: 'Clean indentation makes Python code look like executable pseudocode, drastically reducing visual clutter.',
          codeExample: {
            language: 'python',
            code: `user_name = "Maya"
age = 22
gpa = 3.85
is_student = True

print(f"Student: {user_name}, Age: {age}, GPA: {gpa}")`,
            explanation: 'f-strings (formatted string literals) provide the modern, clean way to inject variables into text.',
          },
          practiceExercises: [
            { id: 'py-ex-0-3', task: 'Create variables for item_name, quantity, and price_per_unit. Compute total_cost.', hint: 'total_cost = quantity * price_per_unit' },
            { id: 'py-ex-0-4', task: 'What happens if you mix tabs and spaces in Python?', hint: 'Python raises an IndentationError. Always use 4 spaces.' },
          ],
          miniChallenge: {
            title: 'Personal Bio Generator',
            description: 'Write a script that stores your name, city, favorite hobby, and years of experience, printing an ASCII-bordered greeting card.',
            tips: 'Use f""" multi-line f-strings.',
          },
        },
      ],
    },
    {
      levelNumber: 1,
      levelTag: 'LEVEL 1 — Core Python',
      title: 'Control Flow, Functions & Data Structures',
      description: 'Master if-else logic, loops, custom functions, lists, dictionaries, tuples, and sets.',
      color: 'green',
      project: {
        id: 'proj-py-1',
        title: 'Command-Line Task Manager & Budgeter',
        difficulty: 'beginner',
        description: 'An interactive CLI tool to track daily tasks with priorities, due dates, and expense tallying stored in a JSON file.',
        whatYouWillBuild: 'Menu-driven Python script using dictionaries, lists, file handling (json module), and input loops.',
        skillsRequired: ['Lists', 'Dicts', 'Functions', 'File I/O (JSON)', 'While loops'],
        estimatedHours: '5–7 hours',
        starterSteps: ['Initialize tasks list', 'Build display_menu function', 'Add task with priority', 'Save to tasks.json on exit'],
      },
      topics: [
        {
          id: 'py-l1-t1',
          title: 'Conditionals & Loops (for & while)',
          subtitle: 'Making decisions and iterating over sequences',
          difficulty: 'easy',
          estimatedHours: '3 hours',
          whatIsIt: 'Python uses if, elif, and else for branching logic. For loops iterate over sequences (like lists or ranges) with "for item in collection:".',
          whyLearnIt: 'Pythonic loops are intuitive and eliminate tedious index-tracking boilerplate.',
          codeExample: {
            language: 'python',
            code: `scores = [88, 92, 79, 95, 84]

for score in scores:
    if score >= 90:
        print(f"Score {score}: Excellent (A)")
    elif score >= 80:
        print(f"Score {score}: Good (B)")`,
            explanation: 'The loop directly grabs each score item without needing an index counter.',
          },
          practiceExercises: [
            { id: 'py-ex-1-1', task: 'Use range(1, 21) to print all multiples of 3.', hint: 'Use if i % 3 == 0 inside the loop.' },
            { id: 'py-ex-1-2', task: 'What is the purpose of the "break" and "continue" keywords?', hint: 'break exits the loop immediately; continue skips to the next iteration.' },
          ],
          miniChallenge: {
            title: 'FizzBuzz Classic',
            description: 'Loop from 1 to 50: for multiples of 3 print "Fizz", multiples of 5 print "Buzz", and multiples of both print "FizzBuzz".',
            tips: 'Check the "both" condition first with (i % 3 == 0 and i % 5 == 0).',
          },
        },
        {
          id: 'py-l1-t2',
          title: 'Functions, *args & **kwargs',
          subtitle: 'Reusability, default parameters, and variable arguments',
          difficulty: 'easy',
          estimatedHours: '3 hours',
          whatIsIt: 'Functions encapsulate reusable code with the "def" keyword. Python supports default values, named keyword arguments, *args (variable positional args), and **kwargs (variable keyword args).',
          whyLearnIt: 'Functions make your code DRY (Don’t Repeat Yourself) and easy to test.',
          codeExample: {
            language: 'python',
            code: `def calculate_discount(price, discount_percent=10):
    return price * (1 - discount_percent / 100)

print(calculate_discount(100))      # 90.0 (default 10%)
print(calculate_discount(100, 25))  # 75.0 (custom 25%)`,
            explanation: 'Default arguments make functions flexible for both simple and advanced use cases.',
          },
          practiceExercises: [
            { id: 'py-ex-1-3', task: 'Write a function is_prime(n) that returns True if n is a prime number.', hint: 'Check if any number from 2 to int(n**0.5) divides n evenly.' },
            { id: 'py-ex-1-4', task: 'Write a function sum_all(*numbers) that takes any number of arguments and returns their sum.', hint: 'Iterate over numbers tuple using sum().' },
          ],
          miniChallenge: {
            title: 'Text Analyzer Utility',
            description: 'Write a function analyze_text(text) that returns a dictionary containing word count, character count, and the most frequent word.',
            tips: 'Use text.split() and collection.Counter or standard dict.',
          },
        },
        {
          id: 'py-l1-t3',
          title: 'Lists, Dictionaries, Tuples & Sets',
          subtitle: 'The four powerhouse Python data structures',
          difficulty: 'easy',
          estimatedHours: '4 hours',
          whatIsIt: '• List []: Ordered, mutable sequence.\n• Tuple (): Ordered, immutable (cannot be altered after creation).\n• Dict {k: v}: Key-value store with instant O(1) lookup.\n• Set {}: Unordered collection of unique items.',
          whyLearnIt: 'Knowing which container to pick is the foundation of high-performance Python programming.',
          codeExample: {
            language: 'python',
            code: `user = {
    "username": "alex99",
    "roles": ["developer", "admin"],
    "verified": True
}

# Add key
user["email"] = "alex@test.com"

# Safe lookup with default
status = user.get("status", "Active")`,
            explanation: 'dict.get() prevents KeyError crashes by returning a default value if key is missing.',
          },
          practiceExercises: [
            { id: 'py-ex-1-5', task: 'Remove all duplicates from a list of numbers using a set in one line.', hint: 'list(set(numbers))' },
            { id: 'py-ex-1-6', task: 'Sort a list of dictionaries by a specific key like age using sorted(..., key=lambda x: x["age"]).', hint: 'Use lambda as key function.' },
          ],
          miniChallenge: {
            title: 'Vocabulary Flashcard Game',
            description: 'Store 5 words and definitions in a dictionary. Randomly quiz the user, prompt for definition or word match, and tally the final score.',
            tips: 'Use random.choice(list(cards.keys())).',
          },
        },
        {
          id: 'py-l1-t4',
          title: 'List Comprehensions & Generator Expressions',
          subtitle: 'Elegant, high-speed one-line transformations',
          difficulty: 'medium',
          estimatedHours: '3 hours',
          whatIsIt: 'List comprehensions provide a concise way to create lists based on existing iterables: [expression for item in iterable if condition].',
          whyLearnIt: 'They are significantly faster than traditional for loops in Python because the iteration is handled by optimized C code under the hood.',
          codeExample: {
            language: 'python',
            code: `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Keep only even numbers squared
evens_squared = [n ** 2 for n in numbers if n % 2 == 0]
# Result: [4, 16, 36, 64, 100]`,
            explanation: 'A 4-line loop is compressed into one clean, expressive statement.',
          },
          practiceExercises: [
            { id: 'py-ex-1-7', task: 'Given a list of words, create a list containing the length of each word.', hint: '[len(w) for w in words]' },
            { id: 'py-ex-1-8', task: 'Create a dictionary comprehension mapping numbers 1-5 to their cubes.', hint: '{n: n**3 for n in range(1, 6)}' },
          ],
          miniChallenge: {
            title: 'Data Sanitizer',
            description: 'Given a list of messy email strings with mixed cases and extra spaces, write a comprehension to strip whitespace and lowercase each email.',
            tips: '[e.strip().lower() for e in emails if "@" in e]',
          },
        },
      ],
    },
    {
      levelNumber: 2,
      levelTag: 'LEVEL 2 — Intermediate Python & OOP',
      title: 'Object-Oriented Programming & File I/O',
      description: 'Master Classes, dunder methods (__init__, __str__), inheritance, context managers (with open), and virtual environments.',
      color: 'yellow',
      topics: [
        {
          id: 'py-l2-t1',
          title: 'Classes, Dunder Methods & Inheritance',
          subtitle: 'Building clean models with self, __init__, and @dataclass',
          difficulty: 'medium',
          estimatedHours: '4 hours',
          whatIsIt: 'Classes encapsulate data and behavior. Special double-underscore "dunder" methods like __init__ (constructor) and __str__ (display representation) customize standard Python behaviors.',
          whyLearnIt: 'OOP is essential for modeling complex systems, writing clean libraries, and understanding frameworks like Django, PyTorch, and SQLAlchemy.',
          codeExample: {
            language: 'python',
            code: `class BankAccount:
    def __init__(self, owner: str, balance: float = 0.0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount: float):
        if amount > 0:
            self.balance += amount

    def __str__(self):
        return f"Account({self.owner}, Balance: \${self.balance:.2f})"`
            ,
            explanation: '__str__ defines what gets printed when passing the object to print().',
          },
          practiceExercises: [
            { id: 'py-ex-2-1', task: 'What does the "self" parameter represent in class methods?', hint: 'It points to the specific instance of the object calling the method.' },
            { id: 'py-ex-2-2', task: 'Use Python 3.7+ @dataclass to create a clean User model in 4 lines.', hint: 'from dataclasses import dataclass' },
          ],
          miniChallenge: {
            title: 'Vehicle Fleet Manager',
            description: 'Create a Vehicle parent class and ElectricVehicle child class with battery_level and charge() method. Override __str__ for both.',
            tips: 'Use super().__init__() in the child class.',
          },
        },
        {
          id: 'py-l2-t2',
          title: 'Virtual Environments (venv) & Package Management',
          subtitle: 'Isolating dependencies with pip and venv',
          difficulty: 'easy',
          estimatedHours: '2 hours',
          whatIsIt: 'A virtual environment is an isolated directory containing its own Python executable and installed pip libraries. Prevents version conflicts between projects.',
          whyLearnIt: 'Without virtual environments, installing a package for one project can break other projects on your machine.',
          codeExample: {
            language: 'bash',
            code: `# Create virtual environment:
python -m venv .venv

# Activate on Mac/Linux:
source .venv/bin/activate
# Activate on Windows:
.venv\\Scripts\\activate

# Install packages:
pip install requests pandas`,
            explanation: 'When activated, your terminal uses the local .venv libraries.',
          },
          practiceExercises: [
            { id: 'py-ex-2-3', task: 'How do you freeze your installed dependencies into a requirements.txt file?', hint: 'pip freeze > requirements.txt' },
            { id: 'py-ex-2-4', task: 'How do you install dependencies from requirements.txt on another machine?', hint: 'pip install -r requirements.txt' },
          ],
          miniChallenge: {
            title: 'Clean Environment Setup',
            description: 'Create a new project folder, initialize a virtual environment, install the "requests" library, and write a 5-line script fetching an API.',
            tips: 'import requests; r = requests.get("https://api.github.com"); print(r.status_code)',
          },
        },
      ],
    },
    {
      levelNumber: 3,
      levelTag: 'LEVEL 3 — Web APIs, Databases & Automation',
      title: 'FastAPI, Web Scraping & SQL',
      description: 'Build fast async REST APIs with FastAPI, scrape web data with BeautifulSoup, and connect to SQLite/PostgreSQL with SQLAlchemy.',
      color: 'pink',
      topics: [
        {
          id: 'py-l3-t1',
          title: 'Modern REST APIs with FastAPI & Pydantic',
          subtitle: 'High-performance, type-hinted async web services',
          difficulty: 'advanced',
          estimatedHours: '5 hours',
          whatIsIt: 'FastAPI is a modern, blazing-fast web framework for building APIs with Python 3.8+ using standard type hints and Pydantic validation. It generates interactive Swagger API docs automatically.',
          whyLearnIt: 'FastAPI is currently the most popular choice for AI microservices, ML model inference servers, and modern web backends.',
          codeExample: {
            language: 'python',
            code: `from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float

@app.post("/items")
async def create_item(item: Item):
    return {"message": f"Created {item.name} at \${item.price}"}`
            ,
            explanation: 'Pydantic validates input types automatically and returns 422 error if types do not match.',
          },
          practiceExercises: [
            { id: 'py-ex-3-1', task: 'Create a GET endpoint with a query parameter: /search?query=python.', hint: '@app.get("/search") def search(query: str = "all")' },
            { id: 'py-ex-3-2', task: 'Visit http://localhost:8000/docs in your browser when running FastAPI.', hint: 'FastAPI includes built-in interactive Swagger UI.' },
          ],
          miniChallenge: {
            title: 'Quotes API Microservice',
            description: 'Build a FastAPI app with GET /quote/random and POST /quote to submit new motivational quotes. Store them in an in-memory list or SQLite.',
            tips: 'Run with uvicorn main:app --reload',
          },
        },
      ],
    },
  ],
  projects: [
    {
      id: 'py-p1',
      title: 'Automated Web Scraper & Price Tracker',
      difficulty: 'beginner',
      description: 'Scrapes e-commerce prices or news headlines using BeautifulSoup, alerts if a price drops below target, and sends email/desktop notifications.',
      whatYouWillBuild: 'Automated script combining Requests, BeautifulSoup, and schedule/cron.',
      skillsRequired: ['Requests', 'BeautifulSoup', 'File I/O', 'Regex'],
      estimatedHours: '5–8 hours',
      starterSteps: ['Fetch target HTML page', 'Parse price with CSS selectors', 'Compare against target threshold', 'Send notification'],
    },
    {
      id: 'py-p2',
      title: 'Full REST API with FastAPI & SQLite',
      difficulty: 'intermediate',
      description: 'A production-ready CRUD backend with automatic OpenAPI documentation, JWT authentication, and database persistence.',
      whatYouWillBuild: 'REST API service with Pydantic validation and SQLAlchemy ORM.',
      skillsRequired: ['FastAPI', 'Pydantic', 'SQLAlchemy', 'JWT'],
      estimatedHours: '10–14 hours',
      starterSteps: ['Define database models', 'Create Pydantic schemas', 'Implement CRUD endpoints', 'Add authentication dependency'],
    },
    {
      id: 'py-p3',
      title: 'Exploratory Data Analysis Dashboard',
      difficulty: 'intermediate',
      description: 'Analyze real-world CSV datasets (sales or weather), compute statistical insights with Pandas, and visualize trends with Matplotlib/Seaborn.',
      whatYouWillBuild: 'Jupyter notebook and interactive Streamlit web dashboard.',
      skillsRequired: ['Pandas', 'NumPy', 'Matplotlib', 'Streamlit'],
      estimatedHours: '8–12 hours',
      starterSteps: ['Load dataset with Pandas', 'Clean missing values', 'Compute correlations', 'Build Streamlit interactive charts'],
    },
  ],
};
