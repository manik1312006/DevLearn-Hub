const siteData = {
  categories: [
    { id: 'web-dev', name: 'Web Development', icon: 'fa-globe', count: 0 },
    { id: 'javascript', name: 'JavaScript', icon: 'fa-brands fa-js', count: 0 },
    { id: 'python', name: 'Python', icon: 'fa-brands fa-python', count: 0 },
    { id: 'react', name: 'React', icon: 'fa-brands fa-react', count: 0 },
    { id: 'css', name: 'CSS & Design', icon: 'fa-paint-brush', count: 0 },
    { id: 'backend', name: 'Backend', icon: 'fa-server', count: 0 },
    { id: 'devops', name: 'DevOps', icon: 'fa-cloud', count: 0 },
    { id: 'database', name: 'Database', icon: 'fa-database', count: 0 }
  ],

  posts: [
    {
      id: 'getting-started-react',
      type: 'tutorial',
      title: 'Getting Started with React: A Beginner\'s Guide',
      excerpt: 'Learn the fundamentals of React including components, props, state, and building your first app.',
      content: `
        <h2>What is React?</h2>
        <p>React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small, isolated pieces of code called components.</p>
        
        <h2>Setting Up Your Environment</h2>
        <p>To get started with React, you need Node.js installed on your system. Once you have Node.js, you can create a new React app using Vite:</p>
        
        <pre><code>npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev</code></pre>
        
        <h2>Your First Component</h2>
        <p>Components are the building blocks of any React application. Here's a simple component:</p>
        
        <pre><code>function Welcome({ name }) {
  return &lt;h1&gt;Hello, {name}!&lt;/h1&gt;;
}</code></pre>
        
        <h2>Understanding JSX</h2>
        <p>JSX is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML-like code in your JavaScript files.</p>
        
        <blockquote>JSX is not required to use React, but it makes the code more readable and easier to write.</blockquote>
        
        <h2>State and Props</h2>
        <p><strong>Props</strong> are read-only inputs to components. <strong>State</strong> is data that changes over time within a component.</p>
        
        <pre><code>import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;
        Increment
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
        
        <h2>Next Steps</h2>
        <p>Now that you understand the basics, explore hooks, routing with React Router, and state management with Context API or Redux.</p>
      `,
      image: 'fa-brands fa-react',
      category: 'react',
      tags: ['React', 'JavaScript', 'Frontend', 'Beginner'],
      author: 'Alex Chen',
      date: '2024-12-15',
      readTime: '8 min',
      featured: true
    },
    {
      id: 'python-automation-scripts',
      type: 'blog',
      title: '5 Python Automation Scripts to Save Hours of Work',
      excerpt: 'Discover five practical Python scripts that automate repetitive tasks and boost your productivity.',
      content: `
        <h2>Why Automate with Python?</h2>
        <p>Python's simplicity and rich ecosystem make it perfect for automation. Here are five scripts that can save you hours every week.</p>
        
        <h2>1. File Organizer</h2>
        <p>Automatically sort files into folders based on their extension:</p>
        
        <pre><code>import os
import shutil
from pathlib import Path

def organize_directory(path):
    for file in Path(path).iterdir():
        if file.is_file():
            ext = file.suffix[1:]
            target_dir = Path(path) / ext
            target_dir.mkdir(exist_ok=True)
            shutil.move(str(file), str(target_dir / file.name))

organize_directory('/path/to/clean')</code></pre>
        
        <h2>2. Email Sender</h2>
        <p>Send personalized emails in bulk using smtplib:</p>
        
        <pre><code>import smtplib
from email.message import EmailMessage

def send_email(to, subject, body):
    msg = EmailMessage()
    msg.set_content(body)
    msg['Subject'] = subject
    msg['To'] = to
    
    with smtplib.SMTP('smtp.gmail.com', 587) as server:
        server.starttls()
        server.login('your@email.com', 'password')
        server.send_message(msg)</code></pre>
        
        <h2>3. Web Scraper</h2>
        <p>Extract data from websites using requests and BeautifulSoup.</p>
        
        <h2>4. Backup Script</h2>
        <p>Create automated backups of important directories with timestamps.</p>
        
        <h2>5. CSV Reporter</h2>
        <p>Generate reports from CSV data with formatting and calculations.</p>
        
        <p>These scripts can be scheduled using cron (Linux/macOS) or Task Scheduler (Windows) for fully automated workflows.</p>
      `,
      image: 'fa-brands fa-python',
      category: 'python',
      tags: ['Python', 'Automation', 'Productivity', 'Scripting'],
      author: 'Sarah Johnson',
      date: '2024-11-28',
      readTime: '6 min',
      featured: true
    },
    {
      id: 'css-grid-mastery',
      type: 'tutorial',
      title: 'CSS Grid Mastery: Build Complex Layouts with Ease',
      excerpt: 'Master CSS Grid layout system with practical examples and responsive design patterns.',
      content: `
        <h2>Introduction to CSS Grid</h2>
        <p>CSS Grid Layout is the most powerful layout system in CSS. It's a 2-dimensional system that can handle both columns and rows.</p>
        
        <h2>Basic Grid Setup</h2>
        <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}</code></pre>
        
        <h2>Grid Areas</h2>
        <p>Define named areas for complex layouts:</p>
        
        <pre><code>.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 250px 1fr 1fr;
}</code></pre>
        
        <h2>Responsive Grids</h2>
        <p>Use auto-fit and minmax for responsive layouts without media queries:</p>
        
        <pre><code>.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}</code></pre>
        
        <blockquote>Grid and Flexbox work great together. Use Grid for 2D layouts and Flexbox for 1D layouts.</blockquote>
        
        <h2>Alignment and Spacing</h2>
        <p>Control alignment with justify-items, align-items, place-items, and their content counterparts.</p>
      `,
      image: 'fa-paint-brush',
      category: 'css',
      tags: ['CSS', 'Grid', 'Layout', 'Responsive', 'Design'],
      author: 'Maya Patel',
      date: '2024-12-01',
      readTime: '10 min',
      featured: true
    },
    {
      id: 'nodejs-rest-api',
      type: 'tutorial',
      title: 'Build a REST API with Node.js and Express',
      excerpt: 'Step-by-step guide to creating a production-ready REST API using Node.js, Express, and MongoDB.',
      content: `
        <h2>Prerequisites</h2>
        <p>Make sure you have Node.js and MongoDB installed on your machine.</p>
        
        <h2>Project Setup</h2>
        <pre><code>mkdir rest-api
cd rest-api
npm init -y
npm install express mongoose dotenv cors</code></pre>
        
        <h2>Creating the Server</h2>
        <pre><code>const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});</code></pre>
        
        <h2>Defining Routes</h2>
        <p>Create CRUD endpoints for your resources with proper HTTP methods and status codes.</p>
        
        <h2>Middleware</h2>
        <p>Add authentication, logging, error handling, and validation middleware.</p>
        
        <blockquote>Always validate input data and handle errors gracefully in your API.</blockquote>
      `,
      image: 'fa-server',
      category: 'backend',
      tags: ['Node.js', 'Express', 'API', 'Backend', 'MongoDB'],
      author: 'Alex Chen',
      date: '2024-10-20',
      readTime: '12 min',
      featured: false
    },
    {
      id: 'javascript-promises-async',
      type: 'blog',
      title: 'Understanding JavaScript Promises and Async/Await',
      excerpt: 'A deep dive into asynchronous JavaScript, from callbacks to Promises to modern async/await patterns.',
      content: `
        <h2>The Problem with Callbacks</h2>
        <p>Before Promises, asynchronous code was handled with callbacks, leading to callback hell.</p>
        
        <h2>Promises to the Rescue</h2>
        <pre><code>const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data received');
    }, 2000);
  });
};

fetchData()
  .then(data => console.log(data))
  .catch(err => console.error(err));</code></pre>
        
        <h2>Async/Await Syntax</h2>
        <p>Modern JavaScript offers a cleaner syntax:</p>
        
        <pre><code>async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}</code></pre>
        
        <blockquote>Async/await is syntactic sugar over Promises, making asynchronous code look synchronous.</blockquote>
        
        <h2>Error Handling</h2>
        <p>Always handle errors in async functions using try/catch blocks or .catch() on Promises.</p>
      `,
      image: 'fa-brands fa-js',
      category: 'javascript',
      tags: ['JavaScript', 'Async', 'Promises', 'Web Development'],
      author: 'Sarah Johnson',
      date: '2024-11-15',
      readTime: '7 min',
      featured: false
    },
    {
      id: 'docker-beginners-guide',
      type: 'tutorial',
      title: 'Docker for Beginners: Containerize Your Applications',
      excerpt: 'Learn Docker from scratch — containers, images, Dockerfiles, and docker-compose for local development.',
      content: `
        <h2>What is Docker?</h2>
        <p>Docker is a platform for developing, shipping, and running applications in containers. Containers are lightweight, portable, and consistent across environments.</p>
        
        <h2>Installing Docker</h2>
        <p>Download Docker Desktop from docker.com for macOS/Windows, or use your package manager on Linux.</p>
        
        <h2>Your First Dockerfile</h2>
        <pre><code>FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]</code></pre>
        
        <h2>Docker Compose</h2>
        <p>Define multi-container applications:</p>
        
        <pre><code>version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: secret</code></pre>
        
        <blockquote>Always use official base images and specify exact versions for reproducible builds.</blockquote>
      `,
      image: 'fa-cloud',
      category: 'devops',
      tags: ['Docker', 'DevOps', 'Containers', 'Deployment'],
      author: 'Maya Patel',
      date: '2024-12-05',
      readTime: '9 min',
      featured: false
    },
    {
      id: 'sql-vs-nosql',
      type: 'blog',
      title: 'SQL vs NoSQL: Choosing the Right Database',
      excerpt: 'Compare relational and non-relational databases to make informed architectural decisions for your projects.',
      content: `
        <h2>Understanding the Landscape</h2>
        <p>The choice between SQL and NoSQL databases depends on your data structure, scalability needs, and query patterns.</p>
        
        <h2>SQL Databases</h2>
        <p>Relational databases like PostgreSQL and MySQL use structured schemas with tables, rows, and relationships.</p>
        
        <h3>When to use SQL:</h3>
        <ul>
          <li>Structured data with clear relationships</li>
          <li>ACID compliance required</li>
          <li>Complex queries and joins</li>
          <li>Data integrity is critical</li>
        </ul>
        
        <h2>NoSQL Databases</h2>
        <p>Document stores like MongoDB, key-value stores like Redis, and graph databases like Neo4j offer flexibility.</p>
        
        <h3>When to use NoSQL:</h3>
        <ul>
          <li>Unstructured or semi-structured data</li>
          <li>Horizontal scalability needed</li>
          <li>Rapid development with evolving schema</li>
          <li>Large volumes of data</li>
        </ul>
        
        <blockquote>Many modern applications use both SQL and NoSQL databases (polyglot persistence) to leverage the strengths of each.</blockquote>
      `,
      image: 'fa-database',
      category: 'database',
      tags: ['Database', 'SQL', 'NoSQL', 'Architecture'],
      author: 'Alex Chen',
      date: '2024-09-10',
      readTime: '5 min',
      featured: false
    },
    {
      id: 'react-hooks-deep-dive',
      type: 'tutorial',
      title: 'React Hooks Deep Dive: useEffect, useMemo, useCallback',
      excerpt: 'Master React hooks beyond the basics with practical examples and performance optimization patterns.',
      content: `
        <h2>Beyond useState</h2>
        <p>React provides several built-in hooks that help manage side effects, memoization, and performance.</p>
        
        <h2>useEffect</h2>
        <p>Handle side effects like API calls, subscriptions, and DOM manipulations:</p>
        
        <pre><code>useEffect(() => {
  fetch('/api/data')
    .then(res => res.json())
    .then(data => setData(data));
  
  return () => {
    // Cleanup
  };
}, []);</code></pre>
        
        <h2>useMemo</h2>
        <p>Memoize expensive computations:</p>
        
        <pre><code>const sortedList = useMemo(() => {
  return items.sort((a, b) => a.name.localeCompare(b.name));
}, [items]);</code></pre>
        
        <h2>useCallback</h2>
        <p>Memoize functions to prevent unnecessary re-renders:</p>
        
        <pre><code>const handleClick = useCallback(() => {
  setCount(c => c + 1);
}, []);</code></pre>
        
        <blockquote>Don't over-optimize. Use useMemo and useCallback only when profiling shows a performance issue.</blockquote>
      `,
      image: 'fa-brands fa-react',
      category: 'react',
      tags: ['React', 'Hooks', 'Performance', 'JavaScript'],
      author: 'Maya Patel',
      date: '2024-12-10',
      readTime: '11 min',
      featured: false
    },
    {
      id: 'web-performance-optimization',
      type: 'blog',
      title: 'Web Performance Optimization: Make Your Site Lightning Fast',
      excerpt: 'Practical techniques to optimize web performance including lazy loading, code splitting, and caching strategies.',
      content: `
        <h2>Why Performance Matters</h2>
        <p>A one-second delay in page load can lead to 7% reduction in conversions. Performance directly impacts user experience and SEO.</p>
        
        <h2>Core Web Vitals</h2>
        <p>Google's Core Web Vitals measure LCP (loading), FID (interactivity), and CLS (visual stability).</p>
        
        <h2>Optimization Techniques</h2>
        
        <h3>1. Image Optimization</h3>
        <p>Use modern formats like WebP and AVIF. Implement lazy loading with loading="lazy".</p>
        
        <h3>2. Code Splitting</h3>
        <p>Split your JavaScript bundles using dynamic imports:</p>
        
        <pre><code>const HeavyComponent = React.lazy(() => 
  import('./HeavyComponent')
);</code></pre>
        
        <h3>3. Caching Strategy</h3>
        <p>Implement service workers for offline support and cache-first strategies for static assets.</p>
        
        <h3>4. Reduce Bundle Size</h3>
        <p>Tree-shake unused code, minify, and compress assets with Brotli or Gzip.</p>
        
        <blockquote>Measure performance with Lighthouse and WebPageTest before and after optimization.</blockquote>
      `,
      image: 'fa-rocket',
      category: 'web-dev',
      tags: ['Performance', 'SEO', 'Optimization', 'Web Development'],
      author: 'Sarah Johnson',
      date: '2024-11-05',
      readTime: '7 min',
      featured: false
    },
    {
      id: 'git-workflow-team',
      type: 'blog',
      title: 'Git Workflow Best Practices for Teams',
      excerpt: 'Establish effective Git workflows for collaborative development with branching strategies and code review processes.',
      content: `
        <h2>Why a Good Workflow Matters</h2>
        <p>A consistent Git workflow prevents conflicts, enables parallel development, and maintains a clean project history.</p>
        
        <h2>Popular Workflows</h2>
        
        <h3>GitHub Flow</h3>
        <p>Simple workflow with main branch and feature branches:</p>
        <ul>
          <li>Create a branch from main</li>
          <li>Make changes and commit</li>
          <li>Open a pull request</li>
          <li>Review and merge</li>
        </ul>
        
        <h3>Git Flow</h3>
        <p>More structured with develop, feature, release, and hotfix branches.</p>
        
        <h2>Best Practices</h2>
        <ul>
          <li>Write clear, descriptive commit messages</li>
          <li>Keep commits small and focused</li>
          <li>Rebase instead of merge for feature branches</li>
          <li>Review code before merging</li>
          <li>Use .gitignore effectively</li>
        </ul>
        
        <blockquote>Agree on a workflow as a team and document it in your repository's CONTRIBUTING.md.</blockquote>
      `,
      image: 'fa-code-branch',
      category: 'devops',
      tags: ['Git', 'Workflow', 'Collaboration', 'DevOps'],
      author: 'Alex Chen',
      date: '2024-10-05',
      readTime: '6 min',
      featured: false
    }
  ]
};

siteData.categories.forEach(cat => {
  cat.count = siteData.posts.filter(p => p.category === cat.id).length;
});
