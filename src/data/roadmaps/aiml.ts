import { Roadmap } from '../../types/roadmap';

export const aimlRoadmap: Roadmap = {
  id: 'ai-ml',
  title: 'AI & Machine Learning Roadmap',
  slug: 'ai-ml',
  subtitle: 'From linear algebra & scikit-learn to deep learning, transformers & generative AI',
  category: 'ai-data',
  icon: 'Cpu',
  difficulty: 'Beginner → Advanced',
  estimatedDuration: '5–8 months',
  projectsCount: 7,
  careerPaths: ['Machine Learning Engineer', 'AI Research Scientist', 'LLM Application Developer', 'Data Scientist'],
  careerStages: [
    { title: 'Math & Python Foundations', desc: 'Linear algebra, calculus, probability, NumPy, and Pandas' },
    { title: 'Classical Machine Learning', desc: 'Regression, classification, decision trees, random forests, and SVM' },
    { title: 'Deep Learning & PyTorch', desc: 'Neural networks, backpropagation, CNNs for vision, and RNNs' },
    { title: 'Transformers & LLMs', desc: 'Attention mechanism, BERT, GPT, prompt engineering, and fine-tuning' },
    { title: 'GenAI & RAG Systems', desc: 'Vector databases (Pinecone/Chroma), LangChain, and agentic workflows' },
    { title: 'MLOps & Deployment', desc: 'Model serving with FastAPI, Docker, and monitoring in production' },
  ],
  levels: [
    {
      levelNumber: 0,
      levelTag: 'LEVEL 0 — Math & NumPy Foundations',
      title: 'Mathematics for Machine Learning',
      description: 'Master vectors, matrices, dot products, gradients, and vectorized operations in NumPy.',
      color: 'blue',
      topics: [
        {
          id: 'ai-l0-t1',
          title: 'Linear Algebra: Vectors & Matrices',
          subtitle: 'The language of data representations and transformations',
          difficulty: 'medium',
          estimatedHours: '4 hours',
          whatIsIt: 'In AI, every piece of data (an image, a paragraph of text, or a customer profile) is represented as a list of numbers called a Vector, or a 2D grid called a Matrix.',
          whyLearnIt: 'Neural networks are literally chains of matrix multiplications. Understanding vectors is essential for understanding model weights.',
          codeExample: {
            language: 'python',
            code: `import numpy as np

# A vector representing a house: [sqft, bedrooms, age]
house = np.array([2100, 3, 5])

# Feature weights learned by model:
weights = np.array([150.0, 25000.0, -2000.0])

# Dot product calculates predicted price:
price = np.dot(house, weights)
print(f"Predicted Price: \${price:,.2f}")`,
            explanation: 'np.dot multiplies corresponding elements and sums them in a single high-speed CPU operation.',
          },
          practiceExercises: [
            { id: 'ai-ex-0-1', task: 'Calculate the dot product of [2, 3] and [4, 5] by hand.', hint: '(2*4) + (3*5) = 8 + 15 = 23.' },
            { id: 'ai-ex-0-2', task: 'What is matrix transposition?', hint: 'Flipping a matrix over its diagonal, switching row and column indices.' },
          ],
          miniChallenge: {
            title: 'Image as a Matrix',
            description: 'Load an image using PIL or OpenCV and print its numpy shape (e.g. 512, 512, 3 for height, width, RGB color channels). Inspect the pixel values (0 to 255).',
            tips: 'img_arr = np.array(image); print(img_arr.shape)',
          },
        },
      ],
    },
    {
      levelNumber: 1,
      levelTag: 'LEVEL 1 — Classical Machine Learning',
      title: 'Supervised & Unsupervised Learning (Scikit-Learn)',
      description: 'Train models on tabular data: Linear Regression, Logistic Regression, Decision Trees, and K-Means clustering.',
      color: 'green',
      project: {
        id: 'ai-p1',
        title: 'Customer Churn Predictor',
        difficulty: 'beginner',
        description: 'Build an end-to-end classification pipeline that predicts whether a customer will cancel their subscription based on usage patterns.',
        whatYouWillBuild: 'Scikit-learn model with feature preprocessing, train-test splitting, cross-validation, and ROC-AUC evaluation.',
        skillsRequired: ['Python', 'Pandas', 'Scikit-learn', 'Model Evaluation'],
        estimatedHours: '6–8 hours',
        starterSteps: ['Load churn dataset with Pandas', 'Encode categorical features', 'Train Random Forest classifier', 'Evaluate with classification_report'],
      },
      topics: [
        {
          id: 'ai-l1-t1',
          title: 'Supervised Learning: Regression vs Classification',
          subtitle: 'Predicting continuous numbers vs categorical labels',
          difficulty: 'easy',
          estimatedHours: '3 hours',
          whatIsIt: 'Supervised learning trains models on labeled historical data:\n• Regression predicts a continuous quantity (e.g. house price \$450,000).\n• Classification predicts a discrete category (e.g. Spam vs Not Spam).',
          whyLearnIt: 'This covers 80% of enterprise predictive analytics used in finance, healthcare, and retail today.',
          codeExample: {
            language: 'python',
            code: `from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
model = LogisticRegression()
model.fit(X_train, y_train)

accuracy = model.score(X_test, y_test)
print(f"Accuracy: {accuracy * 100:.1f}%")`,
            explanation: 'fit() teaches the model on training data; score() evaluates performance on unseen test data.',
          },
          practiceExercises: [
            { id: 'ai-ex-1-1', task: 'Why must you never evaluate a model on the same data it was trained on?', hint: 'To prevent overfitting and verify that the model can generalize to new real-world data.' },
            { id: 'ai-ex-1-2', task: 'What is the difference between Precision and Recall?', hint: 'Precision: of all positive predictions, how many were right? Recall: of all actual positives, how many did we catch?' },
          ],
          miniChallenge: {
            title: 'Iris Flower Classifier',
            description: 'Load the famous Iris dataset from scikit-learn, train a DecisionTreeClassifier, and visualize the decision boundaries.',
            tips: 'from sklearn.datasets import load_iris',
          },
        },
      ],
    },
    {
      levelNumber: 2,
      levelTag: 'LEVEL 2 — Deep Learning & Neural Networks',
      title: 'PyTorch, Backpropagation & Computer Vision',
      description: 'Build neural networks with PyTorch, understand activation functions (ReLU), loss functions, gradient descent, and CNNs.',
      color: 'purple',
      topics: [
        {
          id: 'ai-l2-t1',
          title: 'Neural Networks & PyTorch Fundamentals',
          subtitle: 'Tensors, autograd, forward pass, and backpropagation',
          difficulty: 'advanced',
          estimatedHours: '5 hours',
          whatIsIt: 'A neural network passes numbers through layers of interconnected mathematical neurons. PyTorch’s autograd engine automatically computes derivatives (gradients) to tune weights through backpropagation.',
          whyLearnIt: 'PyTorch is the premier framework used by OpenAI, Meta, Google, and top academic AI research labs worldwide.',
          codeExample: {
            language: 'python',
            code: `import torch
import torch.nn as nn

class SimpleNet(nn.Module):
    def __init__(self):
        super().__init__()
        self.fc1 = nn.Linear(784, 128)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(128, 10)

    def forward(self, x):
        return self.fc2(self.relu(self.fc1(x)))`,
            explanation: 'Defines a 2-layer neural network with non-linear ReLU activation.',
          },
          practiceExercises: [
            { id: 'ai-ex-2-1', task: 'Why are activation functions like ReLU essential in neural networks?', hint: 'Without non-linear activations, stacking multiple linear layers collapses into a single linear equation.' },
            { id: 'ai-ex-2-2', task: 'What does optimizer.zero_grad() do in PyTorch training loops?', hint: 'Clears accumulated gradients from the previous training iteration.' },
          ],
          miniChallenge: {
            title: 'MNIST Digit Recognizer',
            description: 'Train a small convolutional neural network on the MNIST dataset of handwritten digits to achieve > 98% test accuracy in PyTorch.',
            tips: 'Use nn.Conv2d layers followed by nn.MaxPool2d.',
          },
        },
      ],
    },
    {
      levelNumber: 3,
      levelTag: 'LEVEL 3 — Generative AI, LLMs & RAG',
      title: 'Transformers, Embeddings & Vector Search',
      description: 'Understand the Attention Mechanism, build Retrieval-Augmented Generation (RAG) pipelines, and create autonomous AI agents.',
      color: 'pink',
      topics: [
        {
          id: 'ai-l3-t1',
          title: 'Retrieval-Augmented Generation (RAG) Architecture',
          subtitle: 'Grounding LLMs with vector databases and private documents',
          difficulty: 'advanced',
          estimatedHours: '5 hours',
          whatIsIt: 'LLMs have a knowledge cutoff and hallucinate when asked about private data. RAG converts your documents into vector embeddings, performs semantic similarity search in a vector database, and passes relevant excerpts into the prompt.',
          whyLearnIt: 'RAG is the #1 enterprise Generative AI application requested by companies building internal copilots.',
          codeExample: {
            language: 'python',
            code: `User Query: "What is our company vacation policy?"
       ↓
Generate embedding vector for query
       ↓
Vector DB finds top 3 matching policy paragraphs
       ↓
LLM Prompt: "Answer query using only these facts: [Paragraphs]"
       ↓
Accurate, hallucination-free answer with citations`,
            explanation: 'The model answers based on factual retrieved context rather than guessing.',
          },
          practiceExercises: [
            { id: 'ai-ex-3-1', task: 'What is cosine similarity and how does it compare vector embeddings?', hint: 'Measures the cosine of the angle between two vectors; 1.0 means identical semantic meaning.' },
            { id: 'ai-ex-3-2', task: 'Difference between fine-tuning a model vs using RAG?', hint: 'Fine-tuning modifies model weights for tone/style; RAG injects dynamic factual data without retraining.' },
          ],
          miniChallenge: {
            title: 'Document Q&A Copilot',
            description: 'Build a miniature RAG pipeline with ChromaDB or FAISS that indexes a PDF document and answers specific questions with source page citations.',
            tips: 'Use chunking (e.g. 500 characters with 50 character overlap).',
          },
        },
      ],
    },
  ],
  projects: [
    {
      id: 'ai-p1-card',
      title: 'Customer Churn Predictor',
      difficulty: 'beginner',
      description: 'Predicts user subscription churn with Scikit-learn and evaluates model metrics.',
      whatYouWillBuild: 'Classification model pipeline with feature importance analysis.',
      skillsRequired: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
      estimatedHours: '6–8 hours',
      starterSteps: ['Data cleaning', 'Feature encoding', 'Model training', 'Evaluation metrics'],
    },
    {
      id: 'ai-p2',
      title: 'Computer Vision Defect Detector',
      difficulty: 'intermediate',
      description: 'Trains a convolutional neural network (PyTorch) to classify manufacturing surface defects.',
      whatYouWillBuild: 'Deep learning vision model with transfer learning (ResNet).',
      skillsRequired: ['PyTorch', 'Torchvision', 'Transfer Learning', 'CNNs'],
      estimatedHours: '10–14 hours',
      starterSteps: ['Augment training images', 'Fine-tune pre-trained backbone', 'Optimize loss function', 'Export model via ONNX'],
    },
    {
      id: 'ai-p3',
      title: 'Full Production RAG Knowledge Assistant',
      difficulty: 'advanced',
      description: 'An AI assistant that ingests company handbooks into a vector database and answers user queries with source citations and FastAPI backend.',
      whatYouWillBuild: 'End-to-end RAG architecture with vector database and streaming responses.',
      skillsRequired: ['Python', 'Vector DB (Chroma/Pinecone)', 'Gemini / LLM API', 'FastAPI'],
      estimatedHours: '16–22 hours',
      starterSteps: ['Chunk and embed text files', 'Store vectors with metadata', 'Build retrieval query pipeline', 'Expose REST API'],
    },
  ],
};

export const dataScienceRoadmap: Roadmap = {
  id: 'data-science',
  title: 'Data Science Roadmap',
  slug: 'data-science',
  subtitle: 'From exploratory data analysis & SQL to statistical modeling and predictive insights',
  category: 'ai-data',
  icon: 'BarChart3',
  difficulty: 'Beginner → Advanced',
  estimatedDuration: '4–6 months',
  projectsCount: 6,
  careerPaths: ['Data Scientist', 'Data Analyst', 'Business Intelligence Analyst', 'Analytics Engineer'],
  careerStages: [
    { title: 'Excel & SQL Essentials', desc: 'Complex SQL queries, window functions, joins, and aggregates' },
    { title: 'Python for Data', desc: 'Pandas, NumPy, data wrangling, cleaning missing values, and merges' },
    { title: 'Visualization & BI', desc: 'Tableau, Power BI, Seaborn, and interactive business dashboards' },
    { title: 'Applied Statistics', desc: 'A/B testing, hypothesis testing, p-values, and probability distributions' },
    { title: 'Machine Learning Insights', desc: 'Regression forecasting, customer segmentation, and clustering' },
    { title: 'Storytelling & Portfolio', desc: 'Communicating data narratives to stakeholders and executive teams' },
  ],
  levels: [
    {
      levelNumber: 0,
      levelTag: 'LEVEL 0 — SQL & Data Wrangling',
      title: 'SQL Querying & Pandas Mastery',
      description: 'Extract and transform data from relational databases and clean messy real-world datasets.',
      color: 'blue',
      topics: [
        {
          id: 'ds-l0-t1',
          title: 'Advanced SQL for Data Analysts',
          subtitle: 'Window functions, CTEs, GROUP BY, and multi-table JOINs',
          difficulty: 'easy',
          estimatedHours: '4 hours',
          whatIsIt: 'SQL (Structured Query Language) is used to pull raw records out of enterprise databases. Common Table Expressions (WITH clause) and Window functions (OVER, PARTITION BY) enable deep analytical queries.',
          whyLearnIt: 'SQL is the single most tested skill in every data science and analyst interview.',
          codeExample: {
            language: 'sql',
            code: `WITH MonthlySales AS (
  SELECT 
    DATE_TRUNC('month', order_date) AS month,
    SUM(total_amount) AS revenue
  FROM orders
  GROUP BY 1
)
SELECT 
  month,
  revenue,
  LAG(revenue) OVER (ORDER BY month) AS prev_month_revenue,
  ROUND((revenue - LAG(revenue) OVER (ORDER BY month)) / LAG(revenue) OVER (ORDER BY month) * 100, 2) AS growth_pct
FROM MonthlySales;`,
            explanation: 'Uses a CTE and the LAG() window function to calculate month-over-month percentage growth.',
          },
          practiceExercises: [
            { id: 'ds-ex-0-1', task: 'Difference between WHERE and HAVING in SQL?', hint: 'WHERE filters rows before aggregation; HAVING filters groups after aggregation.' },
            { id: 'ds-ex-0-2', task: 'Write a query to find the 2nd highest salary in an employees table.', hint: 'Use DENSE_RANK() OVER (ORDER BY salary DESC) = 2.' },
          ],
          miniChallenge: {
            title: 'E-commerce Cohort Analysis',
            description: 'Write a SQL query that tracks retention: what percentage of customers who made their first purchase in January returned to make another purchase in February.',
            tips: 'Join customer orders back onto their first_order_date.',
          },
        },
      ],
    },
  ],
  projects: [
    {
      id: 'ds-p1',
      title: 'E-commerce Sales Analytics & Executive Dashboard',
      difficulty: 'beginner',
      description: 'Analyze millions of transactions, clean missing values, identify seasonal peaks, and present an executive summary with interactive visual charts.',
      whatYouWillBuild: 'Pandas data pipeline and interactive Streamlit/Power BI dashboard.',
      skillsRequired: ['Python', 'Pandas', 'SQL', 'Seaborn / Plotly'],
      estimatedHours: '8–12 hours',
      starterSteps: ['Ingest raw CSV logs', 'Aggregate revenue by category and region', 'Plot cohort retention', 'Publish interactive dashboard'],
    },
  ],
};
