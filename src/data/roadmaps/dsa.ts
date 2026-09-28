import { Roadmap } from '../../types/roadmap';

export const dsaRoadmap: Roadmap = {
  id: 'dsa',
  title: 'Data Structures & Algorithms',
  slug: 'dsa',
  subtitle: 'From Big-O & linear collections to graphs, dynamic programming & interview mastery',
  category: 'programming',
  icon: 'GitFork',
  difficulty: 'Beginner → Advanced',
  estimatedDuration: '3–5 months',
  projectsCount: 5,
  careerPaths: ['Software Engineer', 'Systems Architect', 'Algorithm Engineer', 'Competitive Programmer'],
  careerStages: [
    { title: 'Foundations & Big-O', desc: 'Asymptotic notation, space/time trade-offs, and memory layouts' },
    { title: 'Linear Structures', desc: 'Arrays, Two Pointers, Sliding Window, Linked Lists, Stacks & Queues' },
    { title: 'Hierarchical & Trees', desc: 'Binary Trees, BSTs, Heaps/Priority Queues, and Trie structures' },
    { title: 'Graphs & Searching', desc: 'BFS, DFS, Dijkstra, Topological Sort, and Disjoint Set Union' },
    { title: 'Dynamic Programming', desc: '1D DP, 2D grid DP, knapsack variations, and bitmask DP' },
    { title: 'FAANG / Tier-1 Interviews', desc: 'Timed mock coding rounds, pattern recognition, and trade-off defense' },
  ],
  levels: [
    {
      levelNumber: 0,
      levelTag: 'LEVEL 0 — Complexity & Patterns',
      title: 'Big-O & Algorithmic Patterns',
      description: 'Master time and space complexity, Two Pointers, and the Sliding Window pattern.',
      color: 'blue',
      topics: [
        {
          id: 'dsa-l0-t1',
          title: 'Two Pointers & Sliding Window',
          subtitle: 'The two highest-frequency array patterns in coding interviews',
          difficulty: 'medium',
          estimatedHours: '4 hours',
          whatIsIt: 'Instead of brute force nested loops O(n²), Two Pointers use left and right pointers moving towards each other, while Sliding Window expands and contracts a window to process subarrays in O(n) linear time.',
          whyLearnIt: 'Solves dozens of LeetCode medium questions instantly without nested iterations.',
          codeExample: {
            language: 'python',
            code: `# Two Sum on Sorted Array:
def two_sum_sorted(nums, target):
    left, right = 0, len(nums) - 1
    while left < right:
        current_sum = nums[left] + nums[right]
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1  # Need larger sum
        else:
            right -= 1 # Need smaller sum
    return []`,
            explanation: 'Runs in O(n) time and O(1) space by leveraging the sorted order.',
          },
          practiceExercises: [
            { id: 'dsa-ex-0-1', task: 'Solve "Maximum Subarray of Size K" using Sliding Window.', hint: 'Keep a running window sum; subtract left element as window moves right.' },
            { id: 'dsa-ex-0-2', task: 'Explain why Two Pointers requires sorted data.', hint: 'Because without order, incrementing or decrementing pointers gives no directional guarantee.' },
          ],
          miniChallenge: {
            title: 'Container With Most Water',
            description: 'Given heights array [1,8,6,2,5,4,8,3,7], find two vertical lines that form a container holding the maximum water area using Two Pointers.',
            tips: 'Area = (right - left) * min(height[left], height[right]). Move the pointer with the smaller height.',
          },
        },
      ],
    },
    {
      levelNumber: 1,
      levelTag: 'LEVEL 1 — Trees, Graphs & DP',
      title: 'Advanced Algorithmic Mastery',
      description: 'Binary Search Trees, Graph traversals, Heaps, and Dynamic Programming optimization.',
      color: 'purple',
      practiceGoal: 'Practice Goal: 100+ LeetCode problems across 14 key patterns',
      topics: [
        {
          id: 'dsa-l1-t1',
          title: 'Graph Traversals: BFS vs DFS',
          subtitle: 'Shortest paths, connected components, and cycle detection',
          difficulty: 'advanced',
          estimatedHours: '5 hours',
          whatIsIt: 'Breadth-First Search (BFS) explores all immediate neighbors level-by-level using a Queue. Depth-First Search (DFS) dives deeply down branches using Recursion or a Stack.',
          whyLearnIt: 'BFS guarantees the shortest path in unweighted graphs; DFS is optimal for backtracking (mazes, permutations, Sudoku).',
          codeExample: {
            language: 'python',
            code: `from collections import deque

def bfs_shortest_path(graph, start, target):
    queue = deque([(start, 0)]) # (node, distance)
    visited = {start}
    
    while queue:
        node, dist = queue.popleft()
        if node == target:
            return dist
        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, dist + 1))
    return -1`,
            explanation: 'The first time BFS reaches the target, the recorded distance is guaranteed to be minimal.',
          },
          practiceExercises: [
            { id: 'dsa-ex-1-1', task: 'Solve "Number of Islands" using DFS on a 2D matrix.', hint: 'When you find a "1", run DFS to flip all connected land cells to "0".' },
            { id: 'dsa-ex-1-2', task: 'What is Topological Sort?', hint: 'A linear ordering of vertices in a directed acyclic graph (DAG) respecting dependency prerequisites.' },
          ],
          miniChallenge: {
            title: 'Course Schedule Dependency Check',
            description: 'Given numCourses and prerequisites pairs [[1,0]], determine if it is possible to finish all courses (cycle detection in directed graph).',
            tips: 'Use Kahn’s algorithm with indegree array or 3-color DFS.',
          },
        },
      ],
    },
  ],
  projects: [
    {
      id: 'dsa-p1',
      title: 'Shortest Path Visualizer (Dijkstra / A*)',
      difficulty: 'intermediate',
      description: 'An interactive pathfinding grid visualizer that allows users to place start/end nodes, draw wall obstacles, and watch Dijkstra and A* search algorithms animate in real-time.',
      whatYouWillBuild: 'Interactive React / Canvas visualizer illustrating algorithm mechanics.',
      skillsRequired: ['Graph Algorithms', 'Dijkstra', 'PriorityQueue / Heap', 'React/Canvas'],
      estimatedHours: '10–14 hours',
      starterSteps: ['Create grid cell matrix', 'Implement MinHeap for Dijkstra', 'Animate visited nodes with delay', 'Trace shortest path back'],
    },
  ],
};

export const cppRoadmap: Roadmap = {
  id: 'cpp',
  title: 'C++ Roadmap',
  slug: 'cpp',
  subtitle: 'From manual memory management & pointers to modern C++20, templates & game engines',
  category: 'programming',
  icon: 'Cpu',
  difficulty: 'Beginner → Advanced',
  estimatedDuration: '4–7 months',
  projectsCount: 6,
  careerPaths: ['Game Developer (Unreal Engine)', 'High-Frequency Trading (HFT) Developer', 'Embedded Systems Engineer', 'Systems Programmer'],
  careerStages: [
    { title: 'Syntax & Memory', desc: 'Pointers, references, stack vs heap, malloc/free, new/delete' },
    { title: 'Modern C++ (C++11/17/20)', desc: 'Smart pointers (std::unique_ptr), RAII, lambdas, and auto' },
    { title: 'STL & Data Structures', desc: 'std::vector, std::unordered_map, std::sort, iterators' },
    { title: 'OOP & Generic Templates', desc: 'Classes, vtables, virtual destructors, template metaprogramming' },
    { title: 'Low-Latency & Systems', desc: 'Cache locality, multithreading (std::jthread), memory fences' },
    { title: 'Industry Portfolio', desc: 'Custom 2D/3D physics engine or low-latency trading order book' },
  ],
  levels: [
    {
      levelNumber: 0,
      levelTag: 'LEVEL 0 — Pointers & Manual Memory',
      title: 'Memory Addresses, Pointers & References',
      description: 'Understand direct memory access, pointer arithmetic, dereferencing (*), and the difference between Stack and Heap.',
      color: 'blue',
      topics: [
        {
          id: 'cpp-l0-t1',
          title: 'Pointers and Memory Addresses',
          subtitle: 'Direct hardware access with & (address-of) and * (dereference)',
          difficulty: 'medium',
          estimatedHours: '4 hours',
          whatIsIt: 'A pointer is a variable that stores the actual hexadecimal memory address of another variable. By dereferencing with *, you read or modify that memory directly.',
          whyLearnIt: 'Pointers give C++ zero-overhead performance, allowing games and operating systems to run at the absolute physical speed limit of hardware.',
          codeExample: {
            language: 'cpp',
            code: `#include <iostream>

int main() {
    int score = 42;
    int* ptr = &score; // Stores address of score

    std::cout << "Address: " << ptr << std::endl;
    std::cout << "Value: " << *ptr << std::endl;

    *ptr = 99; // Mutates score directly in memory!
    std::cout << "New score: " << score << std::endl; // 99
}`,
            explanation: 'ptr holds the memory address; *ptr accesses the value stored at that address.',
          },
          practiceExercises: [
            { id: 'cpp-ex-0-1', task: 'What is a nullptr in C++ and why is it preferred over NULL?', hint: 'nullptr is type-safe and avoids ambiguity with the integer 0.' },
            { id: 'cpp-ex-0-2', task: 'What is a Dangling Pointer?', hint: 'A pointer referencing memory that has already been deallocated/freed.' },
          ],
          miniChallenge: {
            title: 'In-Place Array Reverser',
            description: 'Write a C++ function void reverse(int* start, int* end) that reverses an array in-place using only pointer arithmetic and no bracket indices.',
            tips: 'while (start < end) { std::swap(*start, *end); start++; end--; }',
          },
        },
      ],
    },
  ],
  projects: [
    {
      id: 'cpp-p1',
      title: 'High-Performance In-Memory Key-Value Store',
      difficulty: 'intermediate',
      description: 'Build a fast in-memory key-value database in C++ with custom hashing, collision resolution, and file persistence (WAL logging).',
      whatYouWillBuild: 'Multi-threaded C++ engine utilizing std::mutex, custom memory allocators, and binary file serialization.',
      skillsRequired: ['C++', 'Pointers', 'Hash Tables', 'Concurrency', 'File I/O'],
      estimatedHours: '12–16 hours',
      starterSteps: ['Implement custom HashTable', 'Add thread-safe mutex locks', 'Write Write-Ahead Log (WAL)', 'Benchmark queries per second'],
    },
  ],
};

export const javascriptRoadmap: Roadmap = {
  id: 'javascript',
  title: 'JavaScript Roadmap',
  slug: 'javascript',
  subtitle: 'The universal language of the web, Node.js, asynchronous runtimes & full-stack apps',
  category: 'web-dev',
  icon: 'Code',
  difficulty: 'Beginner → Advanced',
  estimatedDuration: '3–5 months',
  projectsCount: 7,
  careerPaths: ['JavaScript Developer', 'Frontend Engineer', 'Node.js Backend Developer', 'Full Stack Engineer'],
  careerStages: [
    { title: 'Syntax & Types', desc: 'Variables (let/const), primitive vs reference types, scopes, and closures' },
    { title: 'The Event Loop & Async JS', desc: 'Call stack, microtask queue, callbacks, Promises, and async/await' },
    { title: 'Modern ES6+ Features', desc: 'Destructuring, rest/spread, modules, optional chaining, and nullish coalescing' },
    { title: 'Browser APIs & DOM', desc: 'Event delegation, Fetch, WebSockets, Web Storage, and Canvas' },
    { title: 'Node.js Backend', desc: 'File system, streams, buffers, Express, and event emitters' },
    { title: 'Full Stack & TypeScript', desc: 'Adding static type safety and building enterprise web apps' },
  ],
  levels: [
    {
      levelNumber: 0,
      levelTag: 'LEVEL 0 — Scopes, Closures & Execution',
      title: 'How JavaScript Actually Runs',
      description: 'Understand the Call Stack, Hoisting, Lexical Scope, Closures, and Primitive vs Reference types.',
      color: 'blue',
      topics: [
        {
          id: 'js-l0-t1',
          title: 'The JavaScript Event Loop & Concurrency',
          subtitle: 'Call Stack, Web APIs, Task Queue and Microtask Queue',
          difficulty: 'medium',
          estimatedHours: '4 hours',
          whatIsIt: 'JavaScript is single-threaded. The Event Loop constantly monitors the Call Stack: when the stack is empty, it pushes completed asynchronous tasks (Promises from microtask queue, timers from macrotask queue) onto the stack.',
          whyLearnIt: 'Understanding the Event Loop is the hallmark of a senior JavaScript engineer and prevents tricky asynchronous bugs.',
          codeExample: {
            language: 'javascript',
            code: `console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");

// Output Order: 1 -> 4 -> 3 -> 2
// Microtasks (Promises) always run before Macrotasks (setTimeout)!`,
            explanation: 'Synchronous code runs first, then microtasks (3), then macrotasks (2).',
          },
          practiceExercises: [
            { id: 'js-ex-0-1', task: 'Why does setTimeout(..., 0) not execute immediately?', hint: 'It must wait for the current call stack to clear and pending microtasks to finish.' },
            { id: 'js-ex-0-2', task: 'What is a Closure in JavaScript?', hint: 'A function that retains access to its outer lexical scope even after the outer function has closed.' },
          ],
          miniChallenge: {
            title: 'Custom Debounce Function',
            description: 'Write a debounce(fn, delay) function using closures and setTimeout to limit how often a search input fires API calls.',
            tips: 'Clear the previous timer with clearTimeout(timerId) on each trigger.',
          },
        },
      ],
    },
  ],
  projects: [
    {
      id: 'js-p1',
      title: 'Real-Time Collaborative Markdown Editor',
      difficulty: 'intermediate',
      description: 'A live web markdown editor with instant preview, local storage autosave, export to PDF, and word statistics.',
      whatYouWillBuild: 'Pure vanilla JS or React application with regex parser and debounce timers.',
      skillsRequired: ['JavaScript ES6+', 'DOM Manipulation', 'LocalStorage', 'Debounce'],
      estimatedHours: '8–12 hours',
      starterSteps: ['Setup live preview container', 'Implement regex markdown parser', 'Add autosave with debounce', 'Export to file'],
    },
  ],
};

export const gitRoadmap: Roadmap = {
  id: 'git-github',
  title: 'Git & GitHub Roadmap',
  slug: 'git-github',
  subtitle: 'Version control mastery, branching strategies, merge conflicts, pull requests & CI/CD',
  category: 'programming',
  icon: 'GitBranch',
  difficulty: 'Beginner → Intermediate',
  estimatedDuration: '1–2 months',
  projectsCount: 4,
  careerPaths: ['DevOps Engineer', 'Release Engineer', 'Open Source Contributor', 'Software Engineer'],
  careerStages: [
    { title: 'Local Version Control', desc: 'git init, add, commit, status, diff, log, and .gitignore' },
    { title: 'Branching & Merging', desc: 'git branch, checkout, switch, merge, and resolving conflicts' },
    { title: 'Remote Repositories', desc: 'git push, pull, clone, fetch, and upstream remote remotes' },
    { title: 'GitHub Collaboration', desc: 'Pull Requests, code reviews, issues, discussions, and milestones' },
    { title: 'Advanced Git Mastery', desc: 'Interactive rebase (-i), cherry-pick, stash, bisect, and reflog' },
    { title: 'GitHub Actions & CI/CD', desc: 'Automating tests, linting, building, and deploying upon push' },
  ],
  levels: [
    {
      levelNumber: 0,
      levelTag: 'LEVEL 0 — Core Git Commands',
      title: 'Local Repository Fundamentals',
      description: 'Initialize repos, stage changes, create atomic commits, and inspect commit history.',
      color: 'blue',
      topics: [
        {
          id: 'git-l0-t1',
          title: 'The Three Trees of Git',
          subtitle: 'Working Directory, Staging Area (Index), and Commit History',
          difficulty: 'easy',
          estimatedHours: '2 hours',
          whatIsIt: 'Git tracks changes across three stages: 1) Working directory (where you edit files), 2) Staging area (where you curate what goes into the next commit with git add), 3) Git repository (permanent snapshots created with git commit).',
          whyLearnIt: 'Git is used by 99% of engineering organizations worldwide to collaborate safely without overwriting each other’s code.',
          codeExample: {
            language: 'bash',
            code: `# Stage all modified files:
git add .

# Create descriptive commit:
git commit -m "feat(auth): implement JWT token verification"

# View clean 1-line history:
git log --oneline --graph --all`,
            explanation: 'Atomic commits with descriptive messages make it easy to audit who changed what and when.',
          },
          practiceExercises: [
            { id: 'git-ex-0-1', task: 'How do you unstage a file without losing your local modifications?', hint: 'git restore --staged <filename>' },
            { id: 'git-ex-0-2', task: 'What is the purpose of the .gitignore file?', hint: 'Instructs Git to ignore sensitive files, secrets (.env), node_modules, and binaries.' },
          ],
          miniChallenge: {
            title: 'First Open Source Contribution',
            description: 'Fork an open-source repository on GitHub, clone it locally, create a feature branch, fix a typo or add a test, commit, push, and submit a Pull Request.',
            tips: 'git checkout -b fix/docs-typo',
          },
        },
      ],
    },
  ],
  projects: [
    {
      id: 'git-p1',
      title: 'Automated CI/CD Pipeline with GitHub Actions',
      difficulty: 'beginner',
      description: 'Configure a GitHub workflow (.github/workflows/ci.yml) that automatically runs linter checks, compiles code, and runs tests whenever code is pushed or a PR is opened.',
      whatYouWillBuild: 'YAML workflow specification with GitHub Actions marketplace runners.',
      skillsRequired: ['Git', 'GitHub Actions', 'YAML', 'Automated Testing'],
      estimatedHours: '4–6 hours',
      starterSteps: ['Create .github/workflows directory', 'Define on: [push, pull_request]', 'Configure Node/Java setup step', 'Add npm test step'],
    },
  ],
};
