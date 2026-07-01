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
    },
    {
      id: 'streamlit-dashboard',
      type: 'tutorial',
      title: 'Build Your First Data‑Science Dashboard with Streamlit',
      excerpt: 'Create an interactive data dashboard in minutes using Streamlit — no front-end experience required.',
      content: `
        <h2>What is Streamlit?</h2>
        <p>Streamlit lets you turn Python scripts into interactive web apps with just a few <code>st.*</code> commands. No HTML, CSS, or JavaScript needed.</p>

        <h2>Setup</h2>
        <pre><code>pip install streamlit pandas plotly
streamlit hello</code></pre>

        <h2>Your First Dashboard</h2>
        <pre><code>import streamlit as st
import pandas as pd
import plotly.express as px

st.set_page_config(page_title="Sales Dashboard", layout="wide")
st.title("Interactive Sales Dashboard")

df = pd.read_csv("sales.csv")
category = st.selectbox("Filter by category", df["category"].unique())
filtered = df[df["category"] == category]

fig = px.bar(filtered, x="month", y="revenue", color="product")
st.plotly_chart(fig, use_container_width=True)

col1, col2, col3 = st.columns(3)
col1.metric("Total Revenue", f"$\u00a0{filtered['revenue'].sum():,.0f}")
col2.metric("Avg Order", f"$\u00a0{filtered['revenue'].mean():,.2f}")
col3.metric("Orders", len(filtered))</code></pre>

        <h2>Deploy</h2>
        <p>Push to GitHub and connect to Streamlit Community Cloud for free hosting. Your dashboard gets a public URL instantly.</p>

        <blockquote>Streamlit apps auto-reload when you save <code>.py</code> — changes appear instantly in the browser during development.</blockquote>
      `,
      image: 'fa-chart-bar',
      category: 'python',
      tags: ['Streamlit', 'Python', 'Data Science', 'Dashboard'],
      author: 'Sarah Johnson',
      date: '2025-01-10',
      readTime: '7 min',
      featured: false
    },
    {
      id: 'flask-vs-fastapi',
      type: 'tutorial',
      title: 'Flask vs. FastAPI: When to Choose Each for ML Apps',
      excerpt: 'Compare Flask and FastAPI for serving machine learning models — performance, ergonomics, and ecosystem.',
      content: `
        <h2>Why This Comparison Matters</h2>
        <p>Choosing the right framework affects development speed, inference latency, and long-term maintainability of your ML service.</p>

        <h2>Flask — The Veteran</h2>
        <pre><code>from flask import Flask, request, jsonify
import pickle

app = Flask(__name__)
model = pickle.load(open("model.pkl", "rb"))

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    pred = model.predict([data["features"]])
    return jsonify({"prediction": pred.tolist()})</code></pre>

        <p><strong>Pros:</strong> Huge ecosystem, many tutorials, Flask-RESTful, Flask-SQLAlchemy.</p>
        <p><strong>Cons:</strong> No automatic validation, no async by default, manual OpenAPI docs.</p>

        <h2>FastAPI — The Modern Contender</h2>
        <pre><code>from fastapi import FastAPI
from pydantic import BaseModel
import pickle

app = FastAPI()
model = pickle.load(open("model.pkl", "rb"))

class InputData(BaseModel):
    features: list[float]

@app.post("/predict")
async def predict(data: InputData):
    pred = model.predict([data.features])
    return {"prediction": pred.tolist()}</code></pre>

        <p><strong>Pros:</strong> Auto validation with Pydantic, native async, auto OpenAPI docs at <code>/docs</code>, high performance.</p>
        <p><strong>Cons:</strong> Smaller (but growing) ecosystem, async can be overkill for simple tasks.</p>

        <h2>Decision Guide</h2>
        <ul>
          <li><strong>Choose Flask</strong> when you need rich ecosystem libraries or are maintaining a legacy codebase.</li>
          <li><strong>Choose FastAPI</strong> for new projects, especially when async IO, auto docs, and validation matter.</li>
        </ul>

        <blockquote>FastAPI is roughly 2× faster than Flask in synthetic benchmarks due to its async nature and Starlette foundation.</blockquote>
      `,
      image: 'fa-code-compare',
      category: 'backend',
      tags: ['Flask', 'FastAPI', 'Python', 'ML', 'Backend'],
      author: 'Alex Chen',
      date: '2025-01-12',
      readTime: '8 min',
      featured: false
    },
    {
      id: 'react-fastapi-fullstack',
      type: 'tutorial',
      title: 'Full‑Stack Data‑Science App: React Front‑end + FastAPI Back‑end',
      excerpt: 'Build a complete data app with a React UI talking to a FastAPI backend serving ML predictions.',
      content: `
        <h2>Architecture Overview</h2>
        <p>React SPA — HTTP requests → FastAPI — loads model → returns predictions.</p>

        <h2>FastAPI Backend</h2>
        <pre><code>from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import joblib
import numpy as np

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"])
model = joblib.load("model.pkl")

class Features(BaseModel):
    data: list[float]

@app.post("/predict")
def predict(f: Features):
    pred = model.predict(np.array(f.data).reshape(1, -1))
    return {"result": float(pred[0])}</code></pre>

        <h2>React Frontend</h2>
        <pre><code>import { useState } from "react";

export default function Predictor() {
  const [features, setFeatures] = useState("");
  const [result, setResult] = useState(null);

  const predict = async () => {
    const res = await fetch("https://your-api.com/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: features.split(",").map(Number) }),
    });
    const json = await res.json();
    setResult(json.result);
  };

  return (
    &lt;div&gt;
      &lt;input value={features} onChange={e => setFeatures(e.target.value)} placeholder="1.2,3.4,5.6" /&gt;
      &lt;button onClick={predict}&gt;Predict&lt;/button&gt;
      {result !== null && &lt;p&gt;Result: {result}&lt;/p&gt;}
    &lt;/div&gt;
  );
}</code></pre>

        <h2>Deployment</h2>
        <p>Deploy the API on Render/Railway and the React app on Vercel/Netlify. Set the <code>VITE_API_URL</code> env var in your React build.</p>
      `,
      image: 'fa-layer-group',
      category: 'react',
      tags: ['React', 'FastAPI', 'Full Stack', 'Python', 'Data Science'],
      author: 'Maya Patel',
      date: '2025-01-15',
      readTime: '10 min',
      featured: false
    },
    {
      id: 'deploy-free-tier-cloud',
      type: 'tutorial',
      title: 'Deploy a Python Web App on a Free Tier Cloud (Render, Railway, Fly.io)',
      excerpt: 'Compare three free-tier platforms and deploy a FastAPI app step by step on each.',
      content: `
        <h2>Platform Overview</h2>
        <table style="width:100%; border-collapse:collapse;">
          <tr style="background:#f1f5f9;"><th style="padding:8px;border:1px solid #ddd;">Platform</th><th style="padding:8px;border:1px solid #ddd;">Free Tier</th><th style="padding:8px;border:1px solid #ddd;">Sleep</th></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;">Render</td><td style="padding:8px;border:1px solid #ddd;">512 MB RAM, 1 CPU</td><td style="padding:8px;border:1px solid #ddd;">Spins down after 15 min</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;">Railway</td><td style="padding:8px;border:1px solid #ddd;">$5 credit, 500 MB RAM</td><td style="padding:8px;border:1px solid #ddd;">No sleep with usage</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;">Fly.io</td><td style="padding:8px;border:1px solid #ddd;">3 shared VMs, 256 MB</td><td style="padding:8px;border:1px solid #ddd;">No sleep</td></tr>
        </table>

        <h2>Deploy on Render</h2>
        <pre><code># render.yaml
services:
  - type: web
    name: my-api
    env: python
    buildCommand: pip install -r requirements.txt
    startCommand: uvicorn main:app --host 0.0.0.0 --port $PORT</code></pre>
        <p>Push to GitHub, connect repo on Render Dashboard, and deploy.</p>

        <h2>Deploy on Railway</h2>
        <pre><code># railway.json or just connect repo
# Add Procfile:
web: uvicorn main:app --host 0.0.0.0 --port $PORT</code></pre>

        <h2>Deploy on Fly.io</h2>
        <pre><code>fly launch
fly deploy</code></pre>

        <blockquote>All three platforms support custom domains and auto-deploy from GitHub on push.</blockquote>
      `,
      image: 'fa-cloud-upload-alt',
      category: 'devops',
      tags: ['Deployment', 'Python', 'Render', 'Railway', 'Fly.io', 'DevOps'],
      author: 'Alex Chen',
      date: '2025-01-18',
      readTime: '9 min',
      featured: false
    },
    {
      id: 'nextjs-portfolio-tailwind',
      type: 'tutorial',
      title: 'Next.js 14 + Tailwind CSS: Build a Portfolio Site in 30 min',
      excerpt: 'Scaffold a modern portfolio with Next.js App Router and Tailwind CSS — fast, responsive, and deploy-ready.',
      content: `
        <h2>Scaffold the Project</h2>
        <pre><code>npx create-next-app@latest portfolio --typescript --tailwind --app
cd portfolio
npm run dev</code></pre>

        <h2>Hero Section</h2>
        <pre><code>// app/page.tsx
export default function Home() {
  return (
    &lt;main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col items-center justify-center p-8"&gt;
      &lt;h1 className="text-5xl font-bold mb-4"&gt;Hi, I'm Alex&lt;/h1&gt;
      &lt;p className="text-xl text-slate-300 mb-8"&gt;Full-Stack Developer &amp; UI Designer&lt;/p&gt;
      &lt;div className="flex gap-4"&gt;
        &lt;a href="#projects" className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition"&gt;View Work&lt;/a&gt;
        &lt;a href="#contact" className="px-6 py-3 border border-slate-400 rounded-lg hover:bg-slate-700 transition"&gt;Contact&lt;/a&gt;
      &lt;/div&gt;
    &lt;/main&gt;
  );
}</code></pre>

        <h2>Project Cards</h2>
        <p>Use Tailwind grid and responsive utilities to list projects — no extra CSS needed.</p>

        <pre><code>&lt;div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"&gt;
  {projects.map(p => (
    &lt;div key={p.id} className="bg-slate-800 rounded-xl p-6 hover:scale-105 transition"&gt;
      &lt;h3 className="text-xl font-semibold"&gt;{p.title}&lt;/h3&gt;
      &lt;p className="text-slate-400 mt-2"&gt;{p.description}&lt;/p&gt;
    &lt;/div&gt;
  ))}
&lt;/div&gt;</code></pre>

        <h2>Deploy</h2>
        <p>Run <code>npm run build</code>, then deploy on Vercel (zero config with Next.js).</p>

        <blockquote>Next.js Image component with Tailwind classes gives you automatic lazy loading and responsive images.</blockquote>
      `,
      image: 'fa-brands fa-react',
      category: 'react',
      tags: ['Next.js', 'Tailwind CSS', 'React', 'Portfolio', 'Frontend'],
      author: 'Maya Patel',
      date: '2025-01-20',
      readTime: '6 min',
      featured: false
    },
    {
      id: 'pwa-vue3-vite',
      type: 'tutorial',
      title: 'Progressive Web Apps (PWA) with Vue 3 & Vite',
      excerpt: 'Turn your Vue 3 app into an installable PWA with offline support, service workers, and push notifications.',
      content: `
        <h2>Why PWA?</h2>
        <p>PWAs work offline, load instantly, and feel like a native app. Users can install them on their home screen.</p>

        <h2>Setup</h2>
        <pre><code>npm create vite@latest my-pwa -- --template vue
cd my-pwa
npm install vite-plugin-pwa</code></pre>

        <h2>Configure Vite</h2>
        <pre><code>// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'My PWA App',
        short_name: 'PWA',
        description: 'Offline-first Vue app',
        theme_color: '#42b883',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ]
})</code></pre>

        <h2>Test Offline</h2>
        <p>Run <code>npm run build && npm run preview</code>. Open DevTools → Application → Service Workers. Toggle "Offline" — your app still works.</p>

        <blockquote>vite-plugin-pwa generates the service worker automatically. No manual SW code needed.</blockquote>
      `,
      image: 'fa-mobile-alt',
      category: 'javascript',
      tags: ['Vue', 'PWA', 'Vite', 'Service Worker', 'Offline'],
      author: 'Sarah Johnson',
      date: '2025-01-22',
      readTime: '7 min',
      featured: false
    },
    {
      id: 'typescript-strict-mode',
      type: 'tutorial',
      title: 'TypeScript Deep Dive: From "any" to Strict Mode',
      excerpt: 'Eliminate unsafe any types and enable strict mode for bulletproof TypeScript code.',
      content: `
        <h2>Start with <code>any</code> — The Escape Hatch</h2>
        <p><code>any</code> turns off type checking. It's useful for migration but should be消灭ed in production code.</p>

        <pre><code>// Avoid
function process(data: any) { return data.name; }

// Prefer
interface Data { name: string; }
function process(data: Data) { return data.name; }</code></pre>

        <h2>Enable Strict Mode</h2>
        <p>In <code>tsconfig.json</code>:</p>
        <pre><code>{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}</code></pre>

        <h2>Generics — Reusable Type Safety</h2>
        <pre><code>function first&lt;T&gt;(arr: T[]): T | undefined {
  return arr[0];
}

const num = first([1, 2, 3]);     // number | undefined
const str = first(["a", "b"]);    // string | undefined</code></pre>

        <h2>Discriminated Unions</h2>
        <pre><code>type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rect"; w: number; h: number };

function area(s: Shape): number {
  switch (s.kind) {
    case "circle": return Math.PI * s.radius ** 2;
    case "rect":   return s.w * s.h;
  }
}</code></pre>

        <blockquote>Strict mode catches real bugs at compile time. Run <code>tsc --noEmit</code> in CI to enforce it.</blockquote>
      `,
      image: 'fa-brands fa-js',
      category: 'javascript',
      tags: ['TypeScript', 'Strict Mode', 'Generics', 'Type Safety'],
      author: 'Alex Chen',
      date: '2025-01-25',
      readTime: '9 min',
      featured: false
    },
    {
      id: 'wcag-accessibility-checklist',
      type: 'tutorial',
      title: 'Web Accessibility Checklist (WCAG 2.2) for Developers',
      excerpt: 'A practical WCAG 2.2 compliance checklist every developer should follow for inclusive web apps.',
      content: `
        <h2>Why Accessibility Matters</h2>
        <p>1 in 5 people has a disability. Accessible design benefits everyone — better SEO, larger audience, and legal compliance.</p>

        <h2>Perceivable</h2>
        <ul>
          <li><strong>Alt text</strong> on all images</li>
          <li><strong>Captions</strong> for video and audio</li>
          <li><strong>Color contrast</strong> ratio ≥ 4.5:1 for normal text</li>
          <li>Don't convey info <strong>only by color</strong></li>
        </ul>

        <h2>Operable</h2>
        <ul>
          <li>All functionality via <strong>keyboard</strong></li>
          <li>Visible <strong>focus indicators</strong></li>
          <li>No <strong>flashing content</strong> (3+ flashes/sec)</li>
          <li>Skip navigation link at top of page</li>
        </ul>

        <h2>Understandable</h2>
        <ul>
          <li>Page language set in <code>&lt;html lang&gt;</code></li>
          <li>Predictable navigation — consistent layout</li>
          <li>Descriptive <strong>error messages</strong> on forms</li>
          <li>Labels on all form inputs</li>
        </ul>

        <h2>Robust</h2>
        <ul>
          <li>Valid HTML — use a validator</li>
          <li>ARIA landmarks use (<code>role="navigation"</code>, <code>role="main"</code>)</li>
          <li>Test with <strong>screen readers</strong> (NVDA, VoiceOver)</li>
        </ul>

        <pre><code>&lt;!-- Skip link example --&gt;
&lt;a href="#main" class="skip-link"&gt;Skip to content&lt;/a&gt;

&lt;!-- ARIA landmark --&gt;
&lt;nav aria-label="Main navigation"&gt;...&lt;/nav&gt;</code></pre>

        <blockquote>Automated tools catch ~30% of issues. Manual testing with keyboard + screen reader is essential.</blockquote>
      `,
      image: 'fa-universal-access',
      category: 'web-dev',
      tags: ['Accessibility', 'WCAG', 'A11y', 'Inclusive Design'],
      author: 'Maya Patel',
      date: '2025-01-28',
      readTime: '7 min',
      featured: false
    },
    {
      id: 'github-actions-cicd',
      type: 'tutorial',
      title: 'GitHub Actions for CI/CD: Deploy a Node API to Fly.io',
      excerpt: 'Automate testing and deployment of a Node.js API using GitHub Actions with deployment to Fly.io.',
      content: `
        <h2>What is GitHub Actions?</h2>
        <p>GitHub Actions lets you run automated workflows triggered by events like push, PR, or schedule.</p>

        <h2>Workflow File</h2>
        <p>Create <code>.github/workflows/deploy.yml</code>:</p>

        <pre><code>name: Deploy API
on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm test

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: superfly/flyctl-actions/setup-flyctl@master
      - run: flyctl deploy --remote-only
        env:
          FLY_API_TOKEN: \${{ secrets.FLY_API_TOKEN }}</code></pre>

        <h2>Setup Secrets</h2>
        <p>In your GitHub repo: Settings → Secrets and variables → Actions. Add <code>FLY_API_TOKEN</code> (generate via <code>fly tokens create deploy</code>).</p>

        <h2>Fly.io Config</h2>
        <pre><code># fly.toml
[build]
  builder = "heroku/buildpacks:20"

[http_service]
  internal_port = 3000
  force_https = true</code></pre>

        <blockquote>Always run tests before deploying. The <code>needs: test</code> ensures deployment only happens if tests pass.</blockquote>
      `,
      image: 'fa-github',
      category: 'devops',
      tags: ['GitHub Actions', 'CI/CD', 'DevOps', 'Node.js', 'Fly.io'],
      author: 'Alex Chen',
      date: '2025-02-01',
      readTime: '8 min',
      featured: false
    },
    {
      id: 'serverless-functions-101',
      type: 'tutorial',
      title: 'Serverless Functions 101: Vercel + Netlify vs. AWS Lambda',
      excerpt: 'Learn what serverless functions are, and compare three platforms for deploying them.',
      content: `
        <h2>What is a Serverless Function?</h2>
        <p>A serverless function is a single-purpose piece of code that runs on-demand, scales automatically, and you pay only for execution time.</p>

        <h2>Netlify Functions</h2>
        <pre><code>// netlify/functions/hello.js
exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Netlify!" })
  };
};</code></pre>
        <p>Zero config — just create a <code>netlify/functions</code> directory.</p>

        <h2>Vercel Functions</h2>
        <pre><code>// api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: "Hello from Vercel!" });
}</code></pre>
        <p>Place files in <code>/api</code> directory, they become endpoints automatically.</p>

        <h2>AWS Lambda (via SAM)</h2>
        <pre><code># template.yaml
Resources:
  HelloFunction:
    Type: AWS::Serverless::Function
    Properties:
      CodeUri: hello/
      Runtime: nodejs20.x
      Handler: index.handler
      Events:
        HelloApi:
          Type: Api
          Properties:
            Path: /hello
            Method: GET</code></pre>

        <table style="width:100%; border-collapse:collapse;">
          <tr style="background:#f1f5f9;"><th style="padding:8px;border:1px solid #ddd;" >Feature</th><th style="padding:8px;border:1px solid #ddd;">Netlify</th><th style="padding:8px;border:1px solid #ddd;">Vercel</th><th style="padding:8px;border:1px solid #ddd;">AWS Lambda</th></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;">Cold start</td><td style="padding:8px;border:1px solid #ddd;">~300ms</td><td style="padding:8px;border:1px solid #ddd;">~200ms</td><td style="padding:8px;border:1px solid #ddd;">~500ms</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;">Free tier</td><td style="padding:8px;border:1px solid #ddd;">125K requests/mo</td><td style="padding:8px;border:1px solid #ddd;">100GB-hours</td><td style="padding:8px;border:1px solid #ddd;">1M requests/mo</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;">Config effort</td><td style="padding:8px;border:1px solid #ddd;">Minimal</td><td style="padding:8px;border:1px solid #ddd;">Minimal</td><td style="padding:8px;border:1px solid #ddd;">High</td></tr>
        </table>
      `,
      image: 'fa-cloud',
      category: 'devops',
      tags: ['Serverless', 'Vercel', 'Netlify', 'AWS Lambda', 'DevOps'],
      author: 'Sarah Johnson',
      date: '2025-02-03',
      readTime: '8 min',
      featured: false
    },
    {
      id: 'docker-data-scientists',
      type: 'tutorial',
      title: 'Docker for Data Scientists: Containerizing Jupyter & ML Models',
      excerpt: 'Use Docker to create reproducible environments for Jupyter notebooks and serve ML models in containers.',
      content: `
        <h2>Why Data Scientists Need Docker</h2>
        <p>Reproducibility is hard when dependencies clash. Docker gives you the exact same environment everywhere — local, team, and cloud.</p>

        <h2>Jupyter in Docker</h2>
        <pre><code># Dockerfile
FROM jupyter/datascience-notebook:latest
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY notebooks/ ./notebooks/

# Run
docker build -t my-jupyter .
docker run -p 8888:8888 my-jupyter</code></pre>

        <h2>Serving an ML Model</h2>
        <pre><code># Dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY model.pkl app.py ./
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]</code></pre>

        <h2>Docker Compose for Full Stack</h2>
        <pre><code>version: "3.9"
services:
  jupyter:
    build: .
    ports: ["8888:8888"]
    volumes: ["./notebooks:/home/jovyan/work"]
  ml-api:
    build: ./api
    ports: ["8000:8000"]</code></pre>

        <blockquote>Use <code>.dockerignore</code> to exclude <code>.git</code>, <code>__pycache__</code>, and large datasets — smaller builds are faster builds.</blockquote>
      `,
      image: 'fa-docker',
      category: 'devops',
      tags: ['Docker', 'Data Science', 'Jupyter', 'ML', 'DevOps'],
      author: 'Maya Patel',
      date: '2025-02-05',
      readTime: '8 min',
      featured: false
    },
    {
      id: 'chrome-extension-scraper',
      type: 'tutorial',
      title: 'Building a Chrome Extension that Scrapes Web‑Page Data',
      excerpt: 'Create a Chrome extension that extracts structured data from any webpage using the DOM API.',
      content: `
        <h2>Extension Structure</h2>
        <pre><code>my-extension/
├── manifest.json
├── popup.html
├── popup.js
└── content.js</code></pre>

        <h2>Manifest v3</h2>
        <pre><code>{
  "manifest_version": 3,
  "name": "Page Scraper",
  "version": "1.0",
  "permissions": ["activeTab", "scripting"],
  "action": { "default_popup": "popup.html" },
  "content_scripts": [{
    "matches": ["&lt;all_urls&gt;"],
    "js": ["content.js"]
  }]
}</code></pre>

        <h2>Content Script — Extract Data</h2>
        <pre><code>// content.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "scrape") {
    const data = {
      title: document.title,
      url: location.href,
      headings: [...document.querySelectorAll("h1, h2, h3")].map(h => h.textContent.trim()),
      links: [...document.querySelectorAll("a[href]")].map(a => ({ text: a.textContent.trim(), href: a.href }))
    };
    sendResponse(data);
  }
});</code></pre>

        <h2>Popup — Display Results</h2>
        <pre><code>// popup.js
document.getElementById("scrape").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const data = await chrome.tabs.sendMessage(tab.id, { action: "scrape" });
  document.getElementById("output").textContent = JSON.stringify(data, null, 2);
});</code></pre>

        <h2>Load in Chrome</h2>
        <p>Go to <code>chrome://extensions</code>, toggle Developer mode, click "Load unpacked", select your folder.</p>

        <blockquote>Use <code>activeTab</code> permission instead of <code>&lt;all_urls&gt;</code> — it requests access only when the user clicks the extension.</blockquote>
      `,
      image: 'fa-puzzle-piece',
      category: 'javascript',
      tags: ['Chrome Extension', 'JavaScript', 'Scraping', 'Browser'],
      author: 'Alex Chen',
      date: '2025-02-08',
      readTime: '9 min',
      featured: false
    },
    {
      id: 'low-code-no-code',
      type: 'blog',
      title: 'Low‑Code No‑Code: Comparing Bubble, Softr, and Retool',
      excerpt: 'Compare three leading low-code platforms — when to use them and when to write code instead.',
      content: `
        <h2>The Rise of Low-Code</h2>
        <p>Low-code and no-code platforms let you build apps visually, reducing development time by up to 80% for common use cases.</p>

        <h2>Bubble</h2>
        <p><strong>Best for:</strong> Full-featured web apps with custom logic, databases, and workflows.</p>
        <ul>
          <li>Visual workflow editor</li>
          <li>Built-in database and user management</li>
          <li>Responsive design engine</li>
          <li>Plugins for Stripe, OpenAI, etc.</li>
        </ul>
        <p><strong>Limitations:</strong> Performance can suffer at scale. Vendor lock-in. Complex logic gets messy visually.</p>

        <h2>Softr</h2>
        <p><strong>Best for:</strong> Building portals, directories, and membership sites on top of Airtable.</p>
        <ul>
          <li>Pre-built blocks and templates</li>
          <li>Airtable as backend</li>
          <li>User authentication built-in</li>
          <li>SEO-friendly output</li>
        </ul>
        <p><strong>Limitations:</strong> Limited customization. Requires Airtable. Not for complex logic.</p>

        <h2>Retool</h2>
        <p><strong>Best for:</strong> Internal tools, admin panels, dashboards connected to databases/APIs.</p>
        <ul>
          <li>Drag-and-drop UI connected to any data source</li>
          <li>Write JavaScript snippets for custom logic</li>
          <li>Self-hostable option</li>
          <li>Version control integration</li>
        </ul>
        <p><strong>Limitations:</strong> Less suitable for public-facing apps. Pricing scales with users.</p>

        <h2>When to Just Write Code</h2>
        <p>Choose traditional development when you need: complex custom logic, high performance, full control over infrastructure, or unique UI interactions.</p>
      `,
      image: 'fa-cubes',
      category: 'web-dev',
      tags: ['Low-Code', 'No-Code', 'Bubble', 'Retool', 'Softr'],
      author: 'Sarah Johnson',
      date: '2025-02-10',
      readTime: '6 min',
      featured: false
    },
    {
      id: 'webassembly-python-numpy',
      type: 'tutorial',
      title: 'WebAssembly (Wasm) for Python: Run NumPy in the Browser',
      excerpt: 'Use Pyodide and WebAssembly to run Python data science code directly in the browser — no server needed.',
      content: `
        <h2>What is Pyodide?</h2>
        <p>Pyodide is a Python runtime for the browser compiled to WebAssembly. It includes NumPy, Pandas, Matplotlib, and 100+ packages.</p>

        <h2>Basic Setup</h2>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;script src="https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;NumPy in the Browser&lt;/h1&gt;
  &lt;pre id="output"&gt;&lt;/pre&gt;
  &lt;script&gt;
    async function main() {
      const pyodide = await loadPyodide();
      const result = await pyodide.runPython(\`
import numpy as np
arr = np.array([1, 2, 3, 4, 5])
f"Mean: {arr.mean()}, Sum: {arr.sum()}"
      \`);
      document.getElementById("output").textContent = result;
    }
    main();
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

        <h2>Interactive Charts</h2>
        <p>Combine Pyodide with Chart.js or plot on a canvas directly from Matplotlib figures serialized as JSON.</p>

        <h2>Performance Notes</h2>
        <p>NumPy operations run at near-native speed thanks to Wasm. I/O and DOM interactions are the bottlenecks — keep those in JavaScript.</p>

        <blockquote>Pyodide downloads ~12 MB on first load. After that, it caches in the browser — subsequent loads are instant.</blockquote>
      `,
      image: 'fa-flask',
      category: 'python',
      tags: ['WebAssembly', 'Python', 'NumPy', 'Pyodide', 'Browser'],
      author: 'Maya Patel',
      date: '2025-02-12',
      readTime: '7 min',
      featured: false
    },
    {
      id: '30-day-code-sprint',
      type: 'blog',
      title: '30‑Day Code Sprint',
      excerpt: 'A month-long plan to build a portfolio project from scratch, ship it, and share it — with daily goals and accountability.',
      content: `
        <h2>Why a Code Sprint?</h2>
        <p>A focused 30-day build forces you to ship. Perfectionism kills projects. A sprint creates urgency, momentum, and a real result.</p>

        <h2>Week 1 — Plan & Scaffold</h2>
        <ul>
          <li>Day 1: Define the project — one sentence, one target user</li>
          <li>Day 2: Sketch UI (paper or Figma)</li>
          <li>Day 3: Choose stack and set up repo</li>
          <li>Day 4-5: Scaffold backend or data layer</li>
          <li>Day 6-7: Scaffold frontend shell</li>
        </ul>

        <h2>Week 2 — Core Features</h2>
        <ul>
          <li>Build the most important feature first</li>
          <li>Ship daily — even if it's one button that works</li>
          <li>Write minimal tests for critical paths</li>
        </ul>

        <h2>Week 3 — Polish & Edge Cases</h2>
        <ul>
          <li>Error handling, loading states, empty states</li>
          <li>Responsive design pass</li>
          <li>Performance check (Lighthouse)</li>
        </ul>

        <h2>Week 4 — Ship & Share</h2>
        <ul>
          <li>Deploy to production (Vercel/Netlify/Render)</li>
          <li>Write a "launch post" on dev.to or LinkedIn</li>
          <li>Share on Twitter, Hacker News, relevant subreddits</li>
        </ul>

        <blockquote>The best portfolio project is a shipped project. Done is better than perfect.</blockquote>
      `,
      image: 'fa-calendar-check',
      category: 'web-dev',
      tags: ['Productivity', 'Project', 'Portfolio', 'Career'],
      author: 'Alex Chen',
      date: '2025-02-15',
      readTime: '5 min',
      featured: false
    },
    {
      id: 'zero-to-fullstack-4weeks',
      type: 'blog',
      title: 'From Zero to Full‑Stack in 4 Weeks',
      excerpt: 'A structured four-week curriculum to go from HTML basics to a deployed full-stack application.',
      content: `
        <h2>Who This Is For</h2>
        <p>Complete beginners with zero coding experience who want a structured path to building real web apps.</p>

        <h2>Week 1 — Foundations</h2>
        <ul>
          <li>HTML: semantic markup, forms, tables</li>
          <li>CSS: Flexbox, Grid, responsive design</li>
          <li>Build: A personal homepage with responsive layout</li>
        </ul>

        <h2>Week 2 — JavaScript & Interactivity</h2>
        <ul>
          <li>Variables, functions, DOM manipulation</li>
          <li>Fetch API and async/await</li>
          <li>Build: A todo app with local storage</li>
        </ul>

        <h2>Week 3 — Backend & Databases</h2>
        <ul>
          <li>Node.js + Express basics</li>
          <li>REST APIs — CRUD operations</li>
          <li>SQLite/MongoDB — persistence</li>
          <li>Build: A notes API with Create/Read/Update/Delete</li>
        </ul>

        <h2>Week 4 — Full Stack & Deploy</h2>
        <ul>
          <li>Connect React frontend to Express backend</li>
          <li>Environment variables, CORS, production builds</li>
          <li>Deploy on Render (backend) + Netlify (frontend)</li>
          <li>Build: A full-stack journal or task manager app</li>
        </ul>

        <blockquote>Focus on one project that grows each week. By week 4 you'll have a complete, deployable app in your portfolio.</blockquote>
      `,
      image: 'fa-graduation-cap',
      category: 'web-dev',
      tags: ['Full Stack', 'Beginner', 'Learning', 'Curriculum'],
      author: 'Sarah Johnson',
      date: '2025-02-18',
      readTime: '6 min',
      featured: false
    },
    {
      id: 'data-science-web-fusion',
      type: 'blog',
      title: 'Data‑Science‑Web‑Fusion',
      excerpt: 'Why the line between data science and web development is disappearing — and how to thrive at the intersection.',
      content: `
        <h2>The Convergence</h2>
        <p>Five years ago, data science meant Jupyter notebooks and Python scripts. Web development meant React and Node.js. Today, the two worlds are fusing.</p>

        <h2>Driving Forces</h2>
        <ul>
          <li><strong>In-browser ML:</strong> TensorFlow.js, ONNX Runtime Web, Pyodide let models run in the browser</li>
          <li><strong>AutoML platforms:</strong> Teachable Machine, Vertex AI AutoML make model creation accessible to web devs</li>
          <li><strong>Data apps as web apps:</strong> Streamlit, Dash, Gradio — data tools look like web apps</li>
          <li><strong>Edge computing:</strong> Serverless GPU inference, Cloudflare Workers AI</li>
        </ul>

        <h2>Skills at the Intersection</h2>
        <p>The most valuable engineers in 2025+ will be those who can:</p>
        <ul>
          <li>Build a React UI and serve it from a FastAPI backend</li>
          <li>Deploy and monitor an ML model in production</li>
          <li>Create interactive data visualizations (D3, Plotly, Vega-Lite)</li>
          <li>Optimize for performance on both frontend and data pipeline</li>
        </ul>

        <h2>Project Ideas</h2>
        <ul>
          <li>Real-time sentiment analyzer (React + Hugging Face API)</li>
          <li>Personal finance dashboard (Streamlit + SQLite)</li>
          <li>Image classifier PWA (TensorFlow.js in the browser)</li>
          <li>AI chat interface with streaming responses</li>
        </ul>

        <blockquote>The future belongs to full-stack data scientists — engineers who can own the entire pipeline from raw data to polished UI.</blockquote>
      `,
      image: 'fa-brain',
      category: 'python',
      tags: ['Data Science', 'Web Development', 'Full Stack', 'Career'],
      author: 'Maya Patel',
      date: '2025-02-20',
      readTime: '5 min',
      featured: false,
    },
    {
      id: 'dom-manipulation-techniques',
      type: 'tutorial',
      title: 'Master the DOM: 10 Practical Manipulation Techniques',
      excerpt: 'Learn essential DOM manipulation techniques including querySelector, event delegation, dynamic styling, and template rendering.',
      content: `

    <h2>Querying the DOM</h2>
    <p>Modern browsers provide <code>querySelector</code> and <code>querySelectorAll</code> for flexible element selection using CSS selectors.</p>
    <pre><code>const header = document.querySelector('.header');
const items = document.querySelectorAll('.nav-item:not(.hidden)');</code></pre>
    <h2>Event Delegation</h2>
    <p>Attach a single listener to a parent element instead of many child listeners:</p>
    <pre><code>list.addEventListener('click', (e) => {
  const btn = e.target.closest('.delete-btn');
  if (btn) btn.parentElement.remove();
});</code></pre>
    <h2>Dynamic Styling</h2>
    <pre><code>el.classList.toggle('active');
el.style.setProperty('--offset', offset + 'px');</code></pre>
    <blockquote>Always use <code>closest()</code> over <code>matches()</code> for event delegation — it handles nested elements correctly.</blockquote>
  
      `,
      image: 'fa-code',
      category: 'javascript',
      tags: ['DOM', 'JavaScript', 'Events', 'Frontend'],
      author: 'Alex Chen',
      date: '2025-03-01',
      readTime: '8 min',
      featured: false,
    },
    {
      id: 'socket-io-chat',
      type: 'tutorial',
      title: 'Build a Real-Time Chat with Socket.IO and Vanilla JS',
      excerpt: 'Create a real-time chat application using Socket.IO for WebSocket communication and vanilla JavaScript for the frontend.',
      content: `

    <h2>Server Setup</h2>
    <pre><code>const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', { user: socket.id, text: msg });
  });
});

server.listen(3000);</code></pre>
    <h2>Client</h2>
    <pre><code>const socket = io();
form.addEventListener('submit', (e) => {
  e.preventDefault();
  socket.emit('chat message', input.value);
  input.value = '';
});
socket.on('chat message', (msg) => {
  messages.innerHTML += '<li>' + msg.user + ': ' + msg.text + '</li>';
});</code></pre>
    <blockquote>Socket.IO falls back to long-polling if WebSocket is unavailable — your app works everywhere.</blockquote>
  
      `,
      image: 'fa-comments',
      category: 'javascript',
      tags: ['Socket.IO', 'WebSocket', 'Real-Time', 'JavaScript'],
      author: 'Alex Chen',
      date: '2025-03-03',
      readTime: '10 min',
      featured: false,
    },
    {
      id: 'js-design-patterns',
      type: 'tutorial',
      title: 'JavaScript Design Patterns: Singleton, Observer, Factory',
      excerpt: 'Master three essential design patterns in JavaScript with practical real-world examples.',
      content: `

    <h2>Singleton Pattern</h2>
    <pre><code>const Database = (() => {
  let instance;
  return { getInstance: () => instance || (instance = {}) };
})();</code></pre>
    <h2>Observer Pattern</h2>
    <pre><code>class EventBus {
  constructor() { this.listeners = {}; }
  on(event, fn) { (this.listeners[event] ||= []).push(fn); return () => this.off(event, fn); }
  off(event, fn) { this.listeners[event] = this.listeners[event]?.filter(f => f !== fn); }
  emit(event, ...args) { this.listeners[event]?.forEach(fn => fn(...args)); }
}</code></pre>
    <h2>Factory Pattern</h2>
    <pre><code>function createUser(type) {
  const users = { admin: { role: 'admin', permissions: ['read', 'write', 'delete'] }, viewer: { role: 'viewer', permissions: ['read'] } };
  return users[type] || users.viewer;
}</code></pre>
    <blockquote>Design patterns are solutions to common problems — use them when needed, not by default.</blockquote>
  
      `,
      image: 'fa-puzzle-piece',
      category: 'javascript',
      tags: ['Design Patterns', 'JavaScript', 'Singleton', 'Observer', 'Factory'],
      author: 'Maya Patel',
      date: '2025-03-05',
      readTime: '9 min',
      featured: false,
    },
    {
      id: 'es-modules-deep-dive',
      type: 'tutorial',
      title: 'ES Modules Deep Dive: Import, Export, Dynamic Imports',
      excerpt: 'Understand ES modules inside out — static analysis, tree-shaking, dynamic imports, and circular dependencies.',
      content: `

    <h2>Named vs Default Exports</h2>
    <pre><code>// utils.js
export const add = (a, b) => a + b;
export default function logger(msg) { console.log(msg); }

// app.js
import logger, { add } from './utils.js';</code></pre>
    <h2>Dynamic Imports</h2>
    <pre><code>const module = await import('./heavy-component.js');</code></pre>
    <h2>Circular Dependencies</h2>
    <p>ES modules handle circular dependencies via live bindings — the module is evaluated once and bindings are shared.</p>
    <blockquote>Dynamic imports return a Promise and can be used with <code>React.lazy</code> for code splitting.</blockquote>
  
      `,
      image: 'fa-cubes',
      category: 'javascript',
      tags: ['ES Modules', 'JavaScript', 'Import', 'Export', 'Tree-Shaking'],
      author: 'Sarah Johnson',
      date: '2025-03-07',
      readTime: '7 min',
      featured: false,
    },
    {
      id: 'build-reactive-state-library',
      type: 'tutorial',
      title: 'Build Your Own Reactive State Library (like Vue Reactivity)',
      excerpt: 'Understand reactivity by building a minimal reactive state library using JavaScript Proxies.',
      content: `

    <h2>Reactive System with Proxy</h2>
    <pre><code>function reactive(obj) {
  const deps = new Map();
  return new Proxy(obj, {
    get(target, key) {
      track(deps, key);
      return Reflect.get(target, key);
    },
    set(target, key, value) {
      Reflect.set(target, key, value);
      trigger(deps, key);
      return true;
    }
  });
}</code></pre>
    <h2>Dependency Tracking</h2>
    <pre><code>let activeEffect;
function effect(fn) { activeEffect = fn; fn(); activeEffect = null; }
function track(deps, key) { if (!activeEffect) return; if (!deps.has(key)) deps.set(key, new Set()); deps.get(key).add(activeEffect); }
function trigger(deps, key) { deps.get(key)?.forEach(fn => fn()); }</code></pre>
    <blockquote>Vue 3 uses a similar Proxy-based reactivity system. Understanding this helps you debug reactive issues.</blockquote>
  
      `,
      image: 'fa-bolt',
      category: 'javascript',
      tags: ['Reactivity', 'Proxy', 'JavaScript', 'State Management'],
      author: 'Alex Chen',
      date: '2025-03-10',
      readTime: '8 min',
      featured: false,
    },
    {
      id: 'event-loop-visualized',
      type: 'blog',
      title: 'The Event Loop Explained with Visual Diagrams',
      excerpt: 'Understand how JavaScript\'s event loop works — microtasks, macrotasks, and async ordering with visual examples.',
      content: `

    <h2>How the Event Loop Works</h2>
    <p>The event loop continuously checks the call stack and task queues. When the call stack is empty, it processes microtasks first, then macrotasks.</p>
    <pre><code>console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');
// Output: 1, 4, 3, 2</code></pre>
    <h2>Microtasks vs Macrotasks</h2>
    <p>Microtasks include Promise.then, MutationObserver, queueMicrotask. Macrotasks include setTimeout, setInterval, I/O, UI rendering.</p>
    <blockquote>After every macrotask, the event loop processes ALL microtasks before the next render cycle.</blockquote>
  
      `,
      image: 'fa-redo',
      category: 'javascript',
      tags: ['Event Loop', 'JavaScript', 'Async', 'Performance'],
      author: 'Sarah Johnson',
      date: '2025-03-12',
      readTime: '6 min',
      featured: false,
    },
    {
      id: 'closures-scope-interview',
      type: 'blog',
      title: 'Closures and Scope: Common Interview Questions',
      excerpt: 'Master closures and lexical scoping through common interview questions and practical examples.',
      content: `

    <h2>What is a Closure?</h2>
    <p>A closure is a function that retains access to its outer (lexical) scope even after the outer function has returned.</p>
    <pre><code>function counter() {
  let count = 0;
  return () => ++count;
}
const c = counter();
console.log(c()); // 1
console.log(c()); // 2</code></pre>
    <h2>Classic Loop Closure</h2>
    <pre><code>for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 3, 3, 3
}
// Fix with let or IIFE:
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 0, 1, 2
}</code></pre>
    <blockquote>Closures are the foundation of the module pattern, currying, and many functional programming techniques.</blockquote>
  
      `,
      image: 'fa-lock',
      category: 'javascript',
      tags: ['Closures', 'Scope', 'JavaScript', 'Interview'],
      author: 'Alex Chen',
      date: '2025-03-14',
      readTime: '7 min',
      featured: false,
    },
    {
      id: 'optional-chaining-nullish',
      type: 'blog',
      title: 'Why You Should Use Optional Chaining and Nullish Coalescing',
      excerpt: 'Stop writing verbose null checks — optional chaining and nullish coalescing make your code cleaner and safer.',
      content: `

    <h2>Optional Chaining (?.)</h2>
    <pre><code>// Before
const name = user && user.profile && user.profile.name;
// After
const name = user?.profile?.name;</code></pre>
    <h2>Nullish Coalescing (??)</h2>
    <pre><code>// || treats 0, '' as falsy — often wrong
const count = value || 10;
// ?? only checks null/undefined
const count = value ?? 10;</code></pre>
    <blockquote>Use <code>??</code> for defaults and <code>?.</code> for safe access — they prevent entire categories of runtime errors.</blockquote>
  
      `,
      image: 'fa-shield',
      category: 'javascript',
      tags: ['Optional Chaining', 'Nullish Coalescing', 'JavaScript', 'ES2020'],
      author: 'Maya Patel',
      date: '2025-03-17',
      readTime: '4 min',
      featured: false,
    },
    {
      id: 'web-workers-offscreen-canvas',
      type: 'blog',
      title: 'Web Workers and OffscreenCanvas for Performance',
      excerpt: 'Offload heavy computation to Web Workers and render graphics with OffscreenCanvas for jank-free UIs.',
      content: `

    <h2>Web Workers</h2>
    <pre><code>// worker.js
self.onmessage = (e) => {
  const result = heavyComputation(e.data);
  self.postMessage(result);
};
// main.js
const worker = new Worker('worker.js');
worker.postMessage(data);
worker.onmessage = (e) => console.log(e.data);</code></pre>
    <h2>OffscreenCanvas</h2>
    <pre><code>const canvas = document.getElementById('myCanvas');
const offscreen = canvas.transferControlToOffscreen();
const worker = new Worker('renderer.js');
worker.postMessage({ canvas: offscreen }, [offscreen]);</code></pre>
    <blockquote>Transferring OffscreenCanvas to a Worker avoids blocking the main thread during heavy rendering.</blockquote>
  
      `,
      image: 'fa-microchip',
      category: 'javascript',
      tags: ['Web Workers', 'OffscreenCanvas', 'Performance', 'Multithreading'],
      author: 'James Wilson',
      date: '2025-03-19',
      readTime: '6 min',
      featured: false,
    },
    {
      id: 'lodash-native-alternatives',
      type: 'blog',
      title: 'Top 10 Lodash Utilities You Can Replace with Native JS',
      excerpt: 'Modern JavaScript has native equivalents for most Lodash functions — reduce your bundle size by dropping Lodash.',
      content: `

    <h2>Native Replacements</h2>
    <pre><code>// _.get -> optional chaining
_.get(obj, 'a.b.c')  ->  obj?.a?.b?.c

// _.cloneDeep -> structuredClone
_.cloneDeep(obj)  ->  structuredClone(obj)

// _.debounce -> built-in or tiny polyfill
// _.groupBy -> reduce()
const grouped = arr.reduce((acc, item) => {
  (acc[item.type] ??= []).push(item);
  return acc;
}, {});</code></pre>
    <p>Many apps import the entire lodash library but use only a few functions. Native alternatives like <code>Object.fromEntries</code>, <code>Array.flat</code>, and <code>String.replaceAll</code> cover most use cases.</p>
    <blockquote>If you only need one or two Lodash functions, inline them or use <code>lodash-es</code> for tree-shaking.</blockquote>
  
      `,
      image: 'fa-box-open',
      category: 'javascript',
      tags: ['Lodash', 'JavaScript', 'Bundle Size', 'Native'],
      author: 'Priya Sharma',
      date: '2025-03-21',
      readTime: '5 min',
      featured: false,
    },
    {
      id: 'async-python-asyncio',
      type: 'tutorial',
      title: 'Async Python with asyncio and aiohttp',
      excerpt: 'Write concurrent Python code using asyncio and aiohttp for fast I/O-bound operations like web scraping.',
      content: `

    <h2>Async Basics</h2>
    <pre><code>import asyncio

async def fetch(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as resp:
            return await resp.text()

async def main():
    urls = ['https://example.com'] * 10
    tasks = [fetch(url) for url in urls]
    results = await asyncio.gather(*tasks)

asyncio.run(main())</code></pre>
    <h2>Semaphores for Rate Limiting</h2>
    <pre><code>sem = asyncio.Semaphore(5)
async def limited_fetch(url):
    async with sem:
        return await fetch(url)</code></pre>
    <blockquote>asyncio.gather runs tasks concurrently, not in parallel. Use <code>asyncio.run()</code> to start the event loop.</blockquote>
  
      `,
      image: 'fa-brands fa-python',
      category: 'python',
      tags: ['asyncio', 'aiohttp', 'Python', 'Async'],
      author: 'Sarah Johnson',
      date: '2025-03-02',
      readTime: '9 min',
      featured: false,
    },
    {
      id: 'cli-tool-click-poetry',
      type: 'tutorial',
      title: 'Build a CLI Tool with Click and Poetry',
      excerpt: 'Create a professional command-line tool in Python with Click for the interface and Poetry for packaging.',
      content: `

    <h2>Project Setup</h2>
    <pre><code>poetry new my-cli
cd my-cli
poetry add click</code></pre>
    <h2>CLI with Click</h2>
    <pre><code>import click

@click.command()
@click.argument('name')
@click.option('--greeting', default='Hello')
def greet(name, greeting):
    click.echo(f'{greeting}, {name}!')

if __name__ == '__main__':
    greet()</code></pre>
    <h2>Package Script</h2>
    <p>In <code>pyproject.toml</code> add: <code>[tool.poetry.scripts] my-cli = "my_cli:main"</code></p>
    <blockquote>Click automatically generates help text and error messages from your function signatures.</blockquote>
  
      `,
      image: 'fa-terminal',
      category: 'python',
      tags: ['Click', 'Poetry', 'CLI', 'Python'],
      author: 'Alex Chen',
      date: '2025-03-04',
      readTime: '7 min',
      featured: false,
    },
    {
      id: 'fastapi-sqlmodel-crud',
      type: 'tutorial',
      title: 'FastAPI + SQLModel: Full CRUD with Type Safety',
      excerpt: 'Build a type-safe CRUD API using FastAPI and SQLModel with automatic migrations and Pydantic validation.',
      content: `

    <h2>Define Model</h2>
    <pre><code>from sqlmodel import SQLModel, Field, create_engine, Session

class User(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    name: str
    email: str</code></pre>
    <h2>CRUD Endpoints</h2>
    <pre><code>from fastapi import FastAPI, Depends

app = FastAPI()

@app.post('/users')
def create_user(user: User, session: Session = Depends(get_session)):
    session.add(user)
    session.commit()
    session.refresh(user)
    return user

@app.get('/users/{user_id}')
def get_user(user_id: int, session = Depends(get_session)):
    return session.get(User, user_id)</code></pre>
    <blockquote>SQLModel combines SQLAlchemy and Pydantic — one model for the DB and for API validation.</blockquote>
  
      `,
      image: 'fa-server',
      category: 'python',
      tags: ['FastAPI', 'SQLModel', 'CRUD', 'Python'],
      author: 'Maya Patel',
      date: '2025-03-06',
      readTime: '10 min',
      featured: false,
    },
    {
      id: 'playwright-web-scraping',
      type: 'tutorial',
      title: 'Web Scraping with Playwright (Python)',
      excerpt: 'Scrape dynamic websites using Playwright Python with headless browser automation and anti-bot techniques.',
      content: `

    <h2>Setup</h2>
    <pre><code>pip install playwright
playwright install</code></pre>
    <h2>Scrape Dynamic Content</h2>
    <pre><code>from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto('https://example.com')
    page.wait_for_selector('.results')
    items = page.query_selector_all('.item')
    data = [item.inner_text() for item in items]
    browser.close()</code></pre>
    <blockquote>Playwright auto-waits for elements. Use <code>page.wait_for_selector</code> instead of fixed sleep calls.</blockquote>
  
      `,
      image: 'fa-spider',
      category: 'python',
      tags: ['Playwright', 'Web Scraping', 'Python', 'Automation'],
      author: 'James Wilson',
      date: '2025-03-08',
      readTime: '8 min',
      featured: false,
    },
    {
      id: 'python-type-hints-mypy',
      type: 'blog',
      title: 'Python Type Hints: From Annotations to mypy Strict',
      excerpt: 'Level up from basic type hints to strict mypy enforcement with TypedDict, Protocol, and generics.',
      content: `

    <h2>Basic Type Hints</h2>
    <pre><code>def greet(name: str) -> str:
    return f'Hello, {name}'</code></pre>
    <h2>TypedDict and Protocol</h2>
    <pre><code>from typing import TypedDict, Protocol

class UserDict(TypedDict):
    id: int
    name: str

class Drawable(Protocol):
    def draw(self) -> None: ...</code></pre>
    <h2>mypy Strict Mode</h2>
    <p>Enable <code>--strict</code> in your mypy config. It enables <code>no_implicit_optional</code>, <code>warn_return_any</code>, and more.</p>
    <blockquote>Type hints catch bugs at analysis time, not runtime. Run mypy in CI to enforce them.</blockquote>
  
      `,
      image: 'fa-check-double',
      category: 'python',
      tags: ['Type Hints', 'mypy', 'Python', 'Typing'],
      author: 'Priya Sharma',
      date: '2025-03-11',
      readTime: '6 min',
      featured: false,
    },
    {
      id: 'python-generators-coroutines',
      type: 'blog',
      title: 'Understanding Python Generators and Coroutines',
      excerpt: 'Master generators, yield, send, and coroutines for lazy evaluation and efficient data pipelines.',
      content: `

    <h2>Generator Basics</h2>
    <pre><code>def count_up_to(n):
    i = 0
    while i < n:
        yield i
        i += 1</code></pre>
    <h2>Two-Way Communication with send()</h2>
    <pre><code>def accumulator():
    total = 0
    while True:
        value = yield total
        total += value

acc = accumulator()
next(acc)
print(acc.send(10))  # 10
print(acc.send(5))   # 15</code></pre>
    <blockquote>Generators are memory-efficient for large datasets — they produce values on demand instead of storing them all.</blockquote>
  
      `,
      image: 'fa-sync',
      category: 'python',
      tags: ['Generators', 'Coroutines', 'Python', 'Iterators'],
      author: 'Sarah Johnson',
      date: '2025-03-15',
      readTime: '7 min',
      featured: false,
    },
    {
      id: 'zen-of-python-idiomatic',
      type: 'blog',
      title: 'The Zen of Python Applied: Writing Idiomatic Code',
      excerpt: 'Practical examples of each Python Zen principle with before-and-after code comparisons.',
      content: `

    <h2>Beautiful is Better than Ugly</h2>
    <pre><code># Ugly
if x == True and y != None and len(z) > 0:
# Beautiful
if x and y is not None and z:</code></pre>
    <h2>Simple is Better than Complex</h2>
    <pre><code># Complex
result = list(map(lambda x: x * 2, filter(lambda x: x > 0, numbers)))
# Simple
result = [x * 2 for x in numbers if x > 0]</code></pre>
    <blockquote>Run <code>import this</code> in a Python shell to see the Zen. Let it guide your design decisions.</blockquote>
  
      `,
      image: 'fa-feather',
      category: 'python',
      tags: ['Python', 'Idiomatic', 'Zen', 'Best Practices'],
      author: 'Maya Patel',
      date: '2025-03-18',
      readTime: '5 min',
      featured: false,
    },
    {
      id: 'python-decorators-deep-dive',
      type: 'blog',
      title: 'Decorators in Depth: Caching, Logging, and Auth Wrappers',
      excerpt: 'Build powerful Python decorators for caching, logging, authentication, and more with functools.wraps.',
      content: `

    <h2>Basic Decorator</h2>
    <pre><code>from functools import wraps

def log_calls(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print(f'Calling {func.__name__}')
        return func(*args, **kwargs)
    return wrapper

@log_calls
def add(a, b): return a + b</code></pre>
    <h2>Parameterized Decorator</h2>
    <pre><code>def cache(ttl_seconds=60):
    def decorator(func):
        cached = {}
        @wraps(func)
        def wrapper(*args):
            if args in cached:
                return cached[args]
            result = func(*args)
            cached[args] = result
            return result
        return wrapper
    return decorator</code></pre>
    <blockquote>Always use <code>@wraps</code> from functools to preserve the decorated function's metadata.</blockquote>
  
      `,
      image: 'fa-layer-group',
      category: 'python',
      tags: ['Decorators', 'Python', 'Caching', 'Logging'],
      author: 'Alex Chen',
      date: '2025-03-22',
      readTime: '8 min',
      featured: false,
    },
    {
      id: 'react-router-v6-deep-dive',
      type: 'tutorial',
      title: 'React Router v6: Nested Routes, Loaders, and Actions',
      excerpt: 'Build complex routing with React Router v6 using data loaders, actions, and nested layouts.',
      content: `

    <h2>Nested Routes</h2>
    <pre><code>const router = createBrowserRouter([
  {
    path: '/',
    element: &lt;RootLayout /&gt;,
    errorElement: &lt;ErrorPage /&gt;,
    children: [
      { index: true, element: &lt;Home /&gt; },
      { path: 'dashboard', element: &lt;Dashboard /&gt; },
      { path: 'users/:id', element: &lt;UserProfile /&gt; }
    ]
  }
]);</code></pre>
    <h2>Data Loaders</h2>
    <pre><code>const router = createBrowserRouter([{
  path: 'users/:id',
  loader: ({ params }) => fetch('/api/users/' + params.id),
  element: &lt;User /&gt;
}]);</code></pre>
    <blockquote>Data loaders let you fetch data before rendering the route component — no more useEffect for data fetching.</blockquote>
  
      `,
      image: 'fa-brands fa-react',
      category: 'react',
      tags: ['React Router', 'React', 'Routing', 'Data Loading'],
      author: 'Alex Chen',
      date: '2025-03-01',
      readTime: '10 min',
      featured: false,
    },
    {
      id: 'zustand-state-management',
      type: 'tutorial',
      title: 'State Management with Zustand (Lightweight Alternative)',
      excerpt: 'Replace Redux boilerplate with Zustand — a tiny, fast, and scalable state management library for React.',
      content: `

    <h2>Create a Store</h2>
    <pre><code>import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 })
}));</code></pre>
    <h2>Use in Components</h2>
    <pre><code>function Counter() {
  const { count, increment } = useStore();
  return &lt;button onClick={increment}&gt;{count}&lt;/button&gt;;
}</code></pre>
    <blockquote>Zustand selects only the pieces of state your component uses — no re-renders for unrelated changes.</blockquote>
  
      `,
      image: 'fa-database',
      category: 'react',
      tags: ['Zustand', 'State Management', 'React', 'JavaScript'],
      author: 'Maya Patel',
      date: '2025-03-05',
      readTime: '7 min',
      featured: false,
    },
    {
      id: 'react-testing-vitest',
      type: 'tutorial',
      title: 'Testing React Components with Vitest and React Testing Library',
      excerpt: 'Write reliable component tests with Vitest and React Testing Library — user-centric, not implementation-focused.',
      content: `

    <h2>Setup</h2>
    <pre><code>npm install vitest @testing-library/react @testing-library/jest-dom</code></pre>
    <h2>Test a Component</h2>
    <pre><code>import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('increments count', () => {
  render(&lt;Counter /&gt;);
  fireEvent.click(screen.getByText('+'));
  expect(screen.getByTestId('count')).toHaveTextContent('1');
});</code></pre>
    <blockquote>Test behavior, not implementation. Don't test internal state — test what the user sees and does.</blockquote>
  
      `,
      image: 'fa-vial',
      category: 'testing',
      tags: ['Vitest', 'Testing', 'React', 'RTL'],
      author: 'Priya Sharma',
      date: '2025-03-08',
      readTime: '9 min',
      featured: false,
    },
    {
      id: 'react-server-components',
      type: 'tutorial',
      title: 'React Server Components (RSC) in Next.js App Router',
      excerpt: 'Learn how server components work in Next.js 14+ — when to use server vs client components for optimal performance.',
      content: `

    <h2>Server Component (Default)</h2>
    <pre><code>// app/page.tsx — this is a server component by default
export default async function Home() {
  const data = await fetch('https://api.example.com/data');
  const json = await data.json();
  return &lt;div&gt;{json.title}&lt;/div&gt;;
}</code></pre>
    <h2>Client Component</h2>
    <pre><code>// app/Counter.tsx
'use client';
export default function Counter() {
  const [count, setCount] = useState(0);
  return &lt;button onClick={() => setCount(c => c + 1)}&gt;{count}&lt;/button&gt;;
}</code></pre>
    <blockquote>Server components reduce client-side JavaScript. Use 'use client' only when you need interactivity, hooks, or browser APIs.</blockquote>
  
      `,
      image: 'fa-server',
      category: 'react',
      tags: ['React Server Components', 'Next.js', 'React', 'Performance'],
      author: 'Alex Chen',
      date: '2025-03-11',
      readTime: '9 min',
      featured: false,
    },
    {
      id: 'react-19-whats-new',
      type: 'blog',
      title: 'React 19: What\'s New and Should You Upgrade?',
      excerpt: 'A breakdown of React 19 features including Actions, the use hook, refs as props, and the new compiler.',
      content: `

    <h2>React 19 Highlights</h2>
    <ul>
      <li><strong>Actions:</strong> Built-in handling of async transitions and form submissions</li>
      <li><strong>use() hook:</strong> Read promises and context directly in render</li>
      <li><strong>ref as prop:</strong> No more forwardRef — ref is a regular prop</li>
      <li><strong>React Compiler:</strong> Automatic memoization (no more useMemo/useCallback)</li>
    </ul>
    <h2>Before and After</h2>
    <pre><code>// React 18: forwardRef required
const Input = forwardRef((props, ref) => &lt;input ref={ref} /&gt;);
// React 19: ref is just a prop
const Input = ({ ref, ...props }) => &lt;input ref={ref} /&gt;;</code></pre>
    <blockquote>React 19 is mostly backward-compatible. The compiler is opt-in and can be adopted incrementally.</blockquote>
  
      `,
      image: 'fa-star',
      category: 'react',
      tags: ['React 19', 'React', 'Upgrade', 'New Features'],
      author: 'Sarah Johnson',
      date: '2025-03-14',
      readTime: '6 min',
      featured: false,
    },
    {
      id: 'compound-components-pattern',
      type: 'blog',
      title: 'Compound Components and Render Props Patterns',
      excerpt: 'Build flexible reusable React components using compound components and render props patterns.',
      content: `

    <h2>Compound Component Pattern</h2>
    <pre><code>function Tabs({ children }) { return &lt;div className="tabs"&gt;{children}&lt;/div&gt;; }
Tabs.Tab = ({ label, active, onClick }) => (
  &lt;button className={active ? 'active' : ''} onClick={onClick}&gt;{label}&lt;/button&gt;
);
Tabs.Panel = ({ children, active }) => active ? &lt;div&gt;{children}&lt;/div&gt; : null;

// Usage
&lt;Tabs&gt;
  &lt;Tabs.Tab label="Profile" active={tab === 'profile'} onClick={() => setTab('profile')} /&gt;
  &lt;Tabs.Tab label="Settings" active={tab === 'settings'} onClick={() => setTab('settings')} /&gt;
  &lt;Tabs.Panel active={tab === 'profile'}&gt;Profile content&lt;/Tabs.Panel&gt;
&lt;/Tabs&gt;</code></pre>
    <blockquote>Compound components share implicit state via React Context — the parent manages state, children just render.</blockquote>
  
      `,
      image: 'fa-puzzle-piece',
      category: 'react',
      tags: ['Design Patterns', 'React', 'Compound Components', 'Render Props'],
      author: 'Maya Patel',
      date: '2025-03-17',
      readTime: '7 min',
      featured: false,
    },
    {
      id: 'react-performance-profiling',
      type: 'blog',
      title: 'React Performance: Profiling, Memoization, and Virtualization',
      excerpt: 'Identify and fix React performance bottlenecks using the Profiler, memo, useMemo, and windowing libraries.',
      content: `

    <h2>Find Bottlenecks with Profiler</h2>
    <pre><code>import { Profiler } from 'react';

function onRender(id, phase, actualDuration) {
  console.log(id, phase, actualDuration);
}

&lt;Profiler id="List" onRender={onRender}&gt;
  &lt;ExpensiveList /&gt;
&lt;/Profiler&gt;</code></pre>
    <h2>Virtualization with react-window</h2>
    <pre><code>import { FixedSizeList } from 'react-window';

&lt;FixedSizeList height={400} itemCount={10000} itemSize={50}&gt;
  {({ index, style }) => &lt;div style={style}&gt;Row {index}&lt;/div&gt;}
&lt;/FixedSizeList&gt;</code></pre>
    <blockquote>Don't memoize prematurely. Profile first, then wrap only the components that actually re-render unnecessarily.</blockquote>
  
      `,
      image: 'fa-tachometer-alt',
      category: 'react',
      tags: ['Performance', 'React', 'Memoization', 'Virtualization'],
      author: 'James Wilson',
      date: '2025-03-20',
      readTime: '8 min',
      featured: false,
    },
    {
      id: 'redux-to-zustand-migration',
      type: 'blog',
      title: 'Migrating from Redux to Zustand/Context: A Practical Guide',
      excerpt: 'A step-by-step guide for migrating a Redux codebase to Zustand or React Context with minimal disruption.',
      content: `

    <h2>Migration Strategy</h2>
    <ol>
      <li>Install Zustand alongside Redux — both can coexist</li>
      <li>Create Zustand stores mirroring your Redux slices</li>
      <li>Gradually replace useSelector with useStore in components</li>
      <li>Remove Redux boilerplate slice by slice</li>
    </ol>
    <pre><code>// Before (Redux)
const count = useSelector(state => state.counter.value);

// After (Zustand)
const count = useCounterStore(state => state.count);</code></pre>
    <blockquote>Zustand removes action types, reducers, dispatch, and Provider wrappers — ~60% less boilerplate than Redux.</blockquote>
  
      `,
      image: 'fa-exchange-alt',
      category: 'react',
      tags: ['Redux', 'Zustand', 'Migration', 'State Management'],
      author: 'Alex Chen',
      date: '2025-03-24',
      readTime: '7 min',
      featured: false,
    },
    {
      id: 'responsive-design-patterns',
      type: 'tutorial',
      title: 'Responsive Design Patterns: From Mobile-First to Container Queries',
      excerpt: 'Build truly responsive layouts using mobile-first CSS, container queries, and modern responsive patterns.',
      content: `

    <h2>Mobile-First Approach</h2>
    <pre><code>.card { display: flex; flex-direction: column; }
@media (min-width: 768px) {
  .card { flex-direction: row; }
}</code></pre>
    <h2>Container Queries</h2>
    <pre><code>.card-container { container-type: inline-size; }
@container (min-width: 400px) {
  .card { flex-direction: row; }
}</code></pre>
    <blockquote>Container queries let components respond to their parent's width, not just the viewport — truly reusable components.</blockquote>
  
      `,
      image: 'fa-mobile-alt',
      category: 'web-dev',
      tags: ['Responsive', 'CSS', 'Container Queries', 'Mobile-First'],
      author: 'Priya Sharma',
      date: '2025-03-03',
      readTime: '9 min',
      featured: false,
    },
    {
      id: 'form-validation-frontend',
      type: 'tutorial',
      title: 'Form Validation: Constraint API, Custom Validation, UX Patterns',
      excerpt: 'Build robust form validation using the Constraint Validation API with great user experience patterns.',
      content: `

    <h2>HTML5 Constraint Validation</h2>
    <pre><code>&lt;input type="email" required minlength="3" pattern="[^@]+@[^@]+.[^@]+"&gt;
&lt;span class="error"&gt;&lt;/span&gt;</code></pre>
    <h2>Custom Validation with JavaScript</h2>
    <pre><code>const input = document.getElementById('email');
input.addEventListener('input', () => {
  input.setCustomValidity('');
  if (input.validity.typeMismatch) {
    input.setCustomValidity('Please enter a valid email');
  }
});</code></pre>
    <blockquote>Show validation errors inline, not in popups. Validate on blur or input, not just on submit.</blockquote>
  
      `,
      image: 'fa-check-circle',
      category: 'web-dev',
      tags: ['Validation', 'Forms', 'UX', 'HTML5'],
      author: 'Sarah Johnson',
      date: '2025-03-06',
      readTime: '7 min',
      featured: false,
    },
    {
      id: 'semantic-html-accessibility',
      type: 'tutorial',
      title: 'Semantic HTML: The Foundation of Accessible Websites',
      excerpt: 'Use semantic HTML elements correctly for better accessibility, SEO, and code readability.',
      content: `

    <h2>Why Semantics Matter</h2>
    <p>Screen readers and search engines rely on HTML structure. Using the right elements improves both.</p>
    <pre><code>&lt;!-- Bad --&gt;
&lt;div class="nav"&gt;...&lt;/div&gt;
&lt;div class="main"&gt;...&lt;/div&gt;

&lt;!-- Good --&gt;
&lt;nav&gt;...&lt;/nav&gt;
&lt;main&gt;...&lt;/main&gt;</code></pre>
    <h2>Landmarks</h2>
    <p>Use <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;aside&gt;</code>, and <code>&lt;footer&gt;</code> correctly.</p>
    <blockquote>Every page should have exactly one <code>&lt;main&gt;</code> and one <code>&lt;h1&gt;</code>. Skip navigation with a skip link.</blockquote>
  
      `,
      image: 'fa-code',
      category: 'web-dev',
      tags: ['Semantic HTML', 'Accessibility', 'SEO', 'HTML5'],
      author: 'Maya Patel',
      date: '2025-03-10',
      readTime: '6 min',
      featured: false,
    },
    {
      id: 'image-optimization-web',
      type: 'tutorial',
      title: 'Image Optimization for the Web: Formats, CDN, Lazy Loading',
      excerpt: 'Optimize images for the web with modern formats, responsive images, CDN delivery, and lazy loading.',
      content: `

    <h2>Modern Formats</h2>
    <pre><code>&lt;picture&gt;
  &lt;source srcset="image.avif" type="image/avif"&gt;
  &lt;source srcset="image.webp" type="image/webp"&gt;
  &lt;img src="image.jpg" alt="description" loading="lazy"&gt;
&lt;/picture&gt;</code></pre>
    <h2>Responsive Images</h2>
    <pre><code>&lt;img src="small.jpg" srcset="medium.jpg 768w, large.jpg 1200w"
     sizes="(max-width: 768px) 100vw, 50vw" alt=""&gt;</code></pre>
    <blockquote>WebP typically saves 25-35% over JPEG. AVIF saves another 20% over WebP with better quality.</blockquote>
  
      `,
      image: 'fa-images',
      category: 'web-dev',
      tags: ['Images', 'Optimization', 'WebP', 'AVIF', 'CDN'],
      author: 'James Wilson',
      date: '2025-03-13',
      readTime: '8 min',
      featured: false,
    },
    {
      id: 'api-integration-patterns',
      type: 'tutorial',
      title: 'API Integration Patterns: Fetch, Error Handling, Retry, Caching',
      excerpt: 'Implement robust API integration with fetch, automatic retries, error handling, and client-side caching.',
      content: `

    <h2>Fetch with Error Handling</h2>
    <pre><code>async function apiFetch(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options
  });
  if (!res.ok) throw new ApiError(res.status, await res.json());
  return res.json();
}</code></pre>
    <h2>Automatic Retry</h2>
    <pre><code>async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try { return await apiFetch(url); }
    catch (e) { if (i === retries - 1) throw e; }
  }
}</code></pre>
    <blockquote>Use the <code>AbortController</code> to cancel stale requests when the user navigates away.</blockquote>
  
      `,
      image: 'fa-plug',
      category: 'web-dev',
      tags: ['API', 'Fetch', 'Error Handling', 'Caching'],
      author: 'Alex Chen',
      date: '2025-03-16',
      readTime: '7 min',
      featured: false,
    },
    {
      id: 'progressive-enhancement',
      type: 'blog',
      title: 'Progressive Enhancement: Building Robust Web Experiences',
      excerpt: 'Design websites that work without JavaScript first, then enhance with JavaScript for a richer experience.',
      content: `

    <h2>The Principle</h2>
    <p>Start with a functional HTML-only experience. Layer CSS for presentation, then JavaScript for interactivity. Every layer should degrade gracefully.</p>
    <pre><code>&lt;!-- Works without JS --&gt;
&lt;form action="/submit" method="POST"&gt;
  &lt;input type="email" name="email" required&gt;
  &lt;button type="submit"&gt;Subscribe&lt;/button&gt;
&lt;/form&gt;

&lt;script&gt;
  // Enhance with JS
  document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    await fetch('/api/subscribe', { method: 'POST', body: new FormData(e.target) });
  });
&lt;/script&gt;</code></pre>
    <blockquote>Progressive enhancement is the opposite of graceful degradation — you build up from the baseline, not down from the peak.</blockquote>
  
      `,
      image: 'fa-layer-group',
      category: 'web-dev',
      tags: ['Progressive Enhancement', 'JavaScript', 'HTML', 'Resilience'],
      author: 'Priya Sharma',
      date: '2025-03-19',
      readTime: '5 min',
      featured: false,
    },
    {
      id: 'web-vitals-lighthouse',
      type: 'blog',
      title: 'Core Web Vitals and Lighthouse: A Practical Optimization Guide',
      excerpt: 'Measure and optimize Core Web Vitals (LCP, FID, CLS) using Lighthouse and real-user monitoring.',
      content: `

    <h2>Core Web Vitals</h2>
    <ul>
      <li><strong>LCP (Largest Contentful Paint):</strong> < 2.5s — optimize images, preload key resources</li>
      <li><strong>FID (First Input Delay):</strong> < 100ms — split long tasks, use web workers</li>
      <li><strong>CLS (Cumulative Layout Shift):</strong> < 0.1 — set dimensions on images, avoid injecting content above existing</li>
    </ul>
    <h2>Quick Wins</h2>
    <pre><code>&lt;!-- Preload hero image --&gt;
&lt;link rel="preload" href="hero.webp" as="image"&gt;
&lt;!-- Set dimensions to prevent layout shift --&gt;
&lt;img src="photo.jpg" width="800" height="600" alt=""&gt;</code></pre>
    <blockquote>Run Lighthouse in incognito mode. Aim for 90+ across all categories for a green badge.</blockquote>
  
      `,
      image: 'fa-chart-line',
      category: 'web-dev',
      tags: ['Core Web Vitals', 'Lighthouse', 'SEO', 'Performance'],
      author: 'Sarah Johnson',
      date: '2025-03-22',
      readTime: '6 min',
      featured: false,
    },
    {
      id: 'browser-dev-tools-mastery',
      type: 'blog',
      title: 'Browser DevTools Mastery: Debug Faster, Ship Better',
      excerpt: 'Unlock advanced Chrome DevTools features for debugging, performance profiling, and network analysis.',
      content: `

    <h2>Essential Features</h2>
    <ul>
      <li><strong>Breakpoints:</strong> Conditional, log points, XHR/fetch breakpoints</li>
      <li><strong>Coverage tab:</strong> Find unused CSS/JS</li>
      <li><strong>Performance tab:</strong> Record and analyze frame rates, long tasks</li>
      <li><strong>Network throttling:</strong> Simulate Slow 3G</li>
    </ul>
    <h2>Debugging Tips</h2>
    <pre><code>// Logpoint — logs without stopping
console.log('value:', x);
// Conditional breakpoint — stops only when condition is true
x > 100</code></pre>
    <blockquote>Use \`debugger\` statements in code as quick inline breakpoints during development.</blockquote>
  
      `,
      image: 'fa-bug',
      category: 'web-dev',
      tags: ['DevTools', 'Debugging', 'Chrome', 'Performance'],
      author: 'James Wilson',
      date: '2025-03-25',
      readTime: '7 min',
      featured: false,
    },
    {
      id: 'flexbox-fundamentals',
      type: 'tutorial',
      title: 'Flexbox Fundamentals: Everything You Need to Know',
      excerpt: 'Master CSS Flexbox with practical examples covering alignment, wrapping, ordering, and responsive patterns.',
      content: `

    <h2>Basic Flexbox</h2>
    <pre><code>.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}</code></pre>
    <h2>Flex Properties</h2>
    <pre><code>.item { flex: 1; }           /* grow equally */
.item { flex: 0 0 200px; }   /* fixed width */
.item { align-self: flex-end; } /* override alignment */</code></pre>
    <blockquote>Remember: \`justify-content\` works on the main axis, \`align-items\` on the cross axis.</blockquote>
  
      `,
      image: 'fa-arrows-alt-h',
      category: 'css',
      tags: ['Flexbox', 'CSS', 'Layout', 'Responsive'],
      author: 'Maya Patel',
      date: '2025-03-02',
      readTime: '8 min',
      featured: false,
    },
    {
      id: 'css-custom-properties-theming',
      type: 'tutorial',
      title: 'CSS Custom Properties (Variables) and Theming',
      excerpt: 'Build dynamic themes with CSS custom properties, including dark mode, design tokens, and real-time switching.',
      content: `

    <h2>Define Properties</h2>
    <pre><code>:root {
  --color-primary: #6366f1;
  --color-bg: #ffffff;
  --color-text: #1e293b;
  --space-md: 16px;
}</code></pre>
    <h2>Dynamic Theming</h2>
    <pre><code>[data-theme="dark"] {
  --color-bg: #0f172a;
  --color-text: #e2e8f0;
}
body { background: var(--color-bg); color: var(--color-text); }</code></pre>
    <blockquote>Custom properties cascade and can be changed at runtime — no preprocessor rebuild needed.</blockquote>
  
      `,
      image: 'fa-palette',
      category: 'css',
      tags: ['CSS Variables', 'Theming', 'Design Tokens', 'Dark Mode'],
      author: 'Priya Sharma',
      date: '2025-03-05',
      readTime: '7 min',
      featured: false,
    },
    {
      id: 'build-design-system-css',
      type: 'tutorial',
      title: 'Build a Design System with Modern CSS',
      excerpt: 'Create a scalable design system using CSS cascade layers, container queries, :has(), and logical properties.',
      content: `

    <h2>Cascade Layers</h2>
    <pre><code>@layer reset, base, components, utilities;

@layer reset { * { box-sizing: border-box; margin: 0; } }
@layer components {
  .btn { padding: 0.5em 1em; border-radius: 0.25em; }
}</code></pre>
    <h2>The :has() Selector</h2>
    <pre><code>.card:has(img) { display: grid; grid-template-columns: 200px 1fr; }
.form-group:has(:invalid) .error { display: block; }</code></pre>
    <blockquote>:has() is the most powerful CSS selector in years — it selects parents based on children.</blockquote>
  
      `,
      image: 'fa-paint-roller',
      category: 'css',
      tags: ['Design System', 'CSS', 'Cascade Layers', ':has()'],
      author: 'Maya Patel',
      date: '2025-03-08',
      readTime: '10 min',
      featured: false,
    },
    {
      id: 'advanced-css-animations',
      type: 'tutorial',
      title: 'Advanced Animations: Keyframes, Transitions, and Scroll-Driven',
      excerpt: 'Create performant CSS animations using keyframes, transitions, and the new scroll-driven animation API.',
      content: `

    <h2>Keyframe Animations</h2>
    <pre><code>@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.element { animation: fadeIn 0.3s ease-out; }</code></pre>
    <h2>Scroll-Driven Animations</h2>
    <pre><code>@keyframes grow { from { scale: 0.5; } to { scale: 1; } }
.element {
  animation: grow linear;
  animation-timeline: view();
  animation-range: entry 0% entry 100%;
}</code></pre>
    <blockquote>Use \`will-change: transform, opacity\` on animated elements for GPU-accelerated rendering.</blockquote>
  
      `,
      image: 'fa-play-circle',
      category: 'css',
      tags: ['CSS Animations', 'Keyframes', 'Scroll-Driven', 'Performance'],
      author: 'James Wilson',
      date: '2025-03-12',
      readTime: '9 min',
      featured: false,
    },
    {
      id: 'modern-css-reset-2025',
      type: 'blog',
      title: 'Modern CSS Reset: What Should You Keep in 2025?',
      excerpt: 'Evaluate what belongs in a modern CSS reset now that browsers have normalized many defaults.',
      content: `

    <h2>The Minimal Reset</h2>
    <pre><code>*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; line-height: 1.5; -webkit-font-smoothing: antialiased; }
img, picture, video, canvas, svg { display: block; max-width: 100%; }
input, button, textarea, select { font: inherit; }
p, h1, h2, h3, h4, h5, h6 { overflow-wrap: break-word; }</code></pre>
    <p>Many older reset rules (like removing list styles) are better handled at the component level. Keep it minimal.</p>
    <blockquote>A good reset removes browser inconsistencies without fighting browser defaults.</blockquote>
  
      `,
      image: 'fa-eraser',
      category: 'css',
      tags: ['CSS Reset', 'CSS', 'Best Practices', 'Browser Defaults'],
      author: 'Sarah Johnson',
      date: '2025-03-15',
      readTime: '4 min',
      featured: false,
    },
    {
      id: 'grid-vs-flexbox-guide',
      type: 'blog',
      title: 'CSS Grid vs Flexbox: When to Use Each',
      excerpt: 'A decision guide with layout pattern examples comparing CSS Grid and Flexbox for different scenarios.',
      content: `

    <h2>When to Use Flexbox</h2>
    <ul>
      <li>One-dimensional layouts (row OR column)</li>
      <li>Content-driven sizing</li>
      <li>Navigation bars, toolbars, centering</li>
      <li>Cards in a row that wrap</li>
    </ul>
    <h2>When to Use Grid</h2>
    <ul>
      <li>Two-dimensional layouts (rows AND columns)</li>
      <li>Explicit placement of items</li>
      <li>Page-level layouts, galleries, dashboards</li>
      <li>When you need gap/alignment in both axes</li>
    </ul>
    <blockquote>They're not mutually exclusive — use Grid for the page layout and Flexbox for components within grid cells.</blockquote>
  
      `,
      image: 'fa-th',
      category: 'css',
      tags: ['CSS Grid', 'Flexbox', 'Layout', 'Comparison'],
      author: 'Alex Chen',
      date: '2025-03-18',
      readTime: '5 min',
      featured: false,
    },
    {
      id: 'aspect-ratio-object-fit',
      type: 'blog',
      title: 'The Power of aspect-ratio and object-fit in Image Layouts',
      excerpt: 'Use aspect-ratio and object-fit to create consistent, responsive image layouts without overflow or distortion.',
      content: `

    <h2>aspect-ratio</h2>
    <pre><code>.card-image {
  aspect-ratio: 16 / 9;
  object-fit: cover;
  width: 100%;
}</code></pre>
    <h2>object-fit Options</h2>
    <ul>
      <li><strong>cover:</strong> Crop to fill — best for thumbnails</li>
      <li><strong>contain:</strong> Fit entire image — best for product photos</li>
      <li><strong>fill:</strong> Stretch — avoid unless necessary</li>
    </ul>
    <blockquote>Setting both width and aspect-ratio prevents layout shift — one of the biggest CLS contributors.</blockquote>
  
      `,
      image: 'fa-crop',
      category: 'css',
      tags: ['aspect-ratio', 'object-fit', 'Images', 'CSS'],
      author: 'Priya Sharma',
      date: '2025-03-21',
      readTime: '4 min',
      featured: false,
    },
    {
      id: 'dark-mode-implementation',
      type: 'blog',
      title: 'Dark Mode Implementation Strategies',
      excerpt: 'Implement dark mode with prefers-color-scheme, manual toggle, and localStorage persistence.',
      content: `

    <h2>Automatic Dark Mode</h2>
    <pre><code>@media (prefers-color-scheme: dark) {
  :root { --bg: #0f172a; --text: #e2e8f0; }
}</code></pre>
    <h2>Manual Toggle with Persistence</h2>
    <pre><code>const toggle = document.getElementById('dark-toggle');
toggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
});
// On load
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
}</code></pre>
    <blockquote>Always respect the user's system preference as the default, then let them override.</blockquote>
  
      `,
      image: 'fa-moon',
      category: 'css',
      tags: ['Dark Mode', 'CSS', 'JavaScript', 'Theming'],
      author: 'Maya Patel',
      date: '2025-03-24',
      readTime: '5 min',
      featured: false,
    },
    {
      id: 'graphql-apollo-express',
      type: 'tutorial',
      title: 'GraphQL with Apollo Server and Express',
      excerpt: 'Build a GraphQL API using Apollo Server with Express, including schema design, resolvers, and subscriptions.',
      content: `

    <h2>Setup</h2>
    <pre><code>npm install @apollo/server express graphql cors</code></pre>
    <h2>Schema and Resolvers</h2>
    <pre><code>const typeDefs = \`
  type Book { id: ID!, title: String!, author: String! }
  type Query { books: [Book!]! }
  type Mutation { addBook(title: String!, author: String!): Book! }
\`;

const resolvers = {
  Query: { books: () => books },
  Mutation: { addBook: (_, { title, author }) => ({ id: String(books.length + 1), title, author }) }
};</code></pre>
    <blockquote>GraphQL lets clients request exactly the fields they need — no more over-fetching or under-fetching.</blockquote>
  
      `,
      image: 'fa-project-diagram',
      category: 'backend',
      tags: ['GraphQL', 'Apollo', 'Express', 'API'],
      author: 'Alex Chen',
      date: '2025-03-04',
      readTime: '10 min',
      featured: false,
    },
    {
      id: 'jwt-refresh-tokens-auth',
      type: 'tutorial',
      title: 'Authentication with JWT and Refresh Tokens in Node.js',
      excerpt: 'Implement secure authentication with JWT access tokens and httpOnly refresh token cookies in Node.js.',
      content: `

    <h2>Token Generation</h2>
    <pre><code>const jwt = require('jsonwebtoken');

function generateTokens(userId) {
  const accessToken = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ userId }, process.env.REFRESH_SECRET, { expiresIn: '7d' });
  return { accessToken, refreshToken };
}</code></pre>
    <h2>Refresh Endpoint</h2>
    <pre><code>app.post('/refresh', (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token) return res.sendStatus(401);
  jwt.verify(token, process.env.REFRESH_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const { accessToken } = generateTokens(user.userId);
    res.json({ accessToken });
  });
});</code></pre>
    <blockquote>Store access tokens in memory, refresh tokens in httpOnly cookies. Never expose refresh tokens to JavaScript.</blockquote>
  
      `,
      image: 'fa-lock',
      category: 'backend',
      tags: ['JWT', 'Authentication', 'Node.js', 'Security'],
      author: 'Sarah Johnson',
      date: '2025-03-07',
      readTime: '11 min',
      featured: false,
    },
    {
      id: 'websockets-nodejs',
      type: 'tutorial',
      title: 'WebSockets with ws Library and Express',
      excerpt: 'Add real-time bidirectional communication to your Node.js app using the ws library alongside Express.',
      content: `

    <h2>WebSocket Server</h2>
    <pre><code>const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) client.send(data);
    });
  });
});</code></pre>
    <h2>Client</h2>
    <pre><code>const ws = new WebSocket('ws://localhost:8080');
ws.onmessage = (event) => console.log(event.data);
ws.send(JSON.stringify({ type: 'message', text: 'Hello' }));</code></pre>
    <blockquote>Use <code>ws</code> instead of <code>socket.io</code> when you need minimal overhead and control. Add your own reconnection logic.</blockquote>
  
      `,
      image: 'fa-exchange-alt',
      category: 'backend',
      tags: ['WebSockets', 'Node.js', 'Real-Time', 'ws'],
      author: 'James Wilson',
      date: '2025-03-10',
      readTime: '8 min',
      featured: false,
    },
    {
      id: 'message-queues-bullmq',
      type: 'tutorial',
      title: 'Message Queues with BullMQ and Redis',
      excerpt: 'Handle background jobs and scheduled tasks with BullMQ, Redis, and Node.js worker processes.',
      content: `

    <h2>Queue Setup</h2>
    <pre><code>const { Queue, Worker } = require('bullmq');

const emailQueue = new Queue('email', { connection: { host: 'localhost', port: 6379 } });

// Add job
await emailQueue.add('send-welcome', { userId: 123, email: 'user@example.com' });</code></pre>
    <h2>Worker</h2>
    <pre><code>const worker = new Worker('email', async job => {
  await sendEmail(job.data.email, 'Welcome!');
}, { connection });</code></pre>
    <blockquote>BullMQ supports delayed jobs, retries with backoff, and job scheduling — critical for production apps.</blockquote>
  
      `,
      image: 'fa-tasks',
      category: 'backend',
      tags: ['BullMQ', 'Redis', 'Queue', 'Background Jobs'],
      author: 'Priya Sharma',
      date: '2025-03-13',
      readTime: '9 min',
      featured: false,
    },
    {
      id: 'rest-api-best-practices',
      type: 'blog',
      title: 'REST API Best Practices: Status Codes, Pagination, Versioning',
      excerpt: 'Design production-quality REST APIs with proper status codes, pagination strategies, and URL versioning.',
      content: `

    <h2>Status Codes</h2>
    <ul>
      <li><strong>200</strong> GET success, <strong>201</strong> POST created</li>
      <li><strong>204</strong> DELETE success (no body)</li>
      <li><strong>400</strong> Bad request, <strong>401</strong> Unauthorized, <strong>403</strong> Forbidden, <strong>404</strong> Not found</li>
      <li><strong>422</strong> Validation error, <strong>429</strong> Rate limited</li>
      <li><strong>500</strong> Internal server error</li>
    </ul>
    <h2>Cursor Pagination</h2>
    <pre><code>GET /api/users?cursor=abc123&limit=20
Response: { data: [...], nextCursor: "def456" }</code></pre>
    <blockquote>Cursor-based pagination is more stable than offset-based — inserting items doesn't shift pages.</blockquote>
  
      `,
      image: 'fa-code-branch',
      category: 'backend',
      tags: ['REST', 'API', 'Pagination', 'Best Practices'],
      author: 'Alex Chen',
      date: '2025-03-16',
      readTime: '6 min',
      featured: false,
    },
    {
      id: 'microservices-vs-monolith',
      type: 'blog',
      title: 'Microservices vs Monolith: When to Split',
      excerpt: 'Evaluate when to use microservices vs a monolith — Conway\'s Law, domain boundaries, and team topology.',
      content: `

    <h2>Start with a Monolith</h2>
    <p>Almost every successful microservice started as a monolith. Premature splitting adds complexity without proven value.</p>
    <h2>When to Split</h2>
    <ul>
      <li>Team size > 10 engineers</li>
      <li>Different deployment cadences for different components</li>
      <li>Scalability requirements differ significantly</li>
      <li>Clear domain boundaries (bounded contexts)</li>
    </ul>
    <blockquote>Conway's Law: systems resemble the communication structures of the organizations that build them.</blockquote>
  
      `,
      image: 'fa-sitemap',
      category: 'backend',
      tags: ['Microservices', 'Monolith', 'Architecture', 'System Design'],
      author: 'Sarah Johnson',
      date: '2025-03-19',
      readTime: '6 min',
      featured: false,
    },
    {
      id: 'rate-limiting-strategies',
      type: 'blog',
      title: 'Rate Limiting Strategies for Public APIs',
      excerpt: 'Implement rate limiting with token bucket, sliding window, and Redis-based approaches for your API.',
      content: `

    <h2>Sliding Window with Redis</h2>
    <pre><code>const { rateLimit } = require('express-rate-limit');
const RedisStore = require('rate-limit-redis');

const limiter = rateLimit({
  store: new RedisStore({ client: redisClient }),
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/', limiter);</code></pre>
    <h2>Response Headers</h2>
    <p>Always return <code>X-RateLimit-Limit</code>, <code>X-RateLimit-Remaining</code>, and <code>Retry-After</code> headers.</p>
    <blockquote>Use the 429 status code for rate-limited requests and include a Retry-After header with seconds.</blockquote>
  
      `,
      image: 'fa-tachometer-alt',
      category: 'backend',
      tags: ['Rate Limiting', 'API', 'Redis', 'Security'],
      author: 'James Wilson',
      date: '2025-03-22',
      readTime: '5 min',
      featured: false,
    },
    {
      id: 'caching-strategies-redis-cdn',
      type: 'blog',
      title: 'Caching Strategies: Redis, CDN, and HTTP Caching',
      excerpt: 'Implement multi-layer caching with Redis, CDN edge caching, and HTTP cache headers for optimal performance.',
      content: `

    <h2>HTTP Caching Headers</h2>
    <pre><code>Cache-Control: public, max-age=3600, stale-while-revalidate=86400
ETag: "abc123"
Last-Modified: Wed, 21 Oct 2025 07:28:00 GMT</code></pre>
    <h2>Redis Cache Pattern</h2>
    <pre><code>async function getCached(key, fetchFn, ttl = 3600) {
  const cached = await redis.get(key);
  if (cached) return JSON.parse(cached);
  const data = await fetchFn();
  await redis.set(key, JSON.stringify(data), 'EX', ttl);
  return data;
}</code></pre>
    <blockquote>Cache invalidation is hard. Use <code>stale-while-revalidate</code> to serve stale data while fetching fresh data in the background.</blockquote>
  
      `,
      image: 'fa-database',
      category: 'backend',
      tags: ['Caching', 'Redis', 'CDN', 'Performance'],
      author: 'Priya Sharma',
      date: '2025-03-25',
      readTime: '6 min',
      featured: false,
    },
    {
      id: 'kubernetes-101',
      type: 'tutorial',
      title: 'Kubernetes 101: Deploy a Containerized App',
      excerpt: 'Deploy your first application to Kubernetes with pods, deployments, services, and ingress configuration.',
      content: `

    <h2>Deployment</h2>
    <pre><code>apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
      - name: app
        image: my-app:latest
        ports:
        - containerPort: 3000</code></pre>
    <h2>Service</h2>
    <pre><code>apiVersion: v1
kind: Service
metadata:
  name: web-service
spec:
  selector:
    app: web
  ports:
  - port: 80
    targetPort: 3000
  type: LoadBalancer</code></pre>
    <blockquote>Start with \`kubectl apply -f deployment.yaml\`. Use namespaces to separate environments.</blockquote>
  
      `,
      image: 'fa-dharmachakra',
      category: 'devops',
      tags: ['Kubernetes', 'Docker', 'Deployment', 'DevOps'],
      author: 'James Wilson',
      date: '2025-03-02',
      readTime: '11 min',
      featured: false,
    },
    {
      id: 'terraform-iac-beginners',
      type: 'tutorial',
      title: 'Terraform for Beginners: Infrastructure as Code',
      excerpt: 'Manage cloud infrastructure with Terraform — providers, resources, state management, and modules.',
      content: `

    <h2>Basic Configuration</h2>
    <pre><code>provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "static_files" {
  bucket = "my-app-static-files"
  tags = {
    Name = "Static files bucket"
  }
}</code></pre>
    <h2>State Management</h2>
    <pre><code>terraform {
  backend "s3" {
    bucket = "my-terraform-state"
    key    = "prod/terraform.tfstate"
    region = "us-east-1"
  }
}</code></pre>
    <blockquote>Always use remote state (S3, Terraform Cloud) for team collaboration — never share local state files.</blockquote>
  
      `,
      image: 'fa-cubes',
      category: 'devops',
      tags: ['Terraform', 'IaC', 'DevOps', 'Cloud'],
      author: 'Priya Sharma',
      date: '2025-03-06',
      readTime: '10 min',
      featured: false,
    },
    {
      id: 'prometheus-grafana-monitoring',
      type: 'tutorial',
      title: 'Monitoring with Prometheus and Grafana',
      excerpt: 'Set up comprehensive monitoring for your apps with Prometheus metrics collection and Grafana dashboards.',
      content: `

    <h2>Prometheus Config</h2>
    <pre><code>global:
  scrape_interval: 15s
scrape_configs:
  - job_name: 'node-app'
    static_configs:
      - targets: ['localhost:3000']</code></pre>
    <h2>Node.js Metrics</h2>
    <pre><code>const client = require('prom-client');
const collectMetrics = client.collectDefaultMetrics;
collectMetrics();

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});</code></pre>
    <blockquote>Set up alerts in Grafana for p99 latency > 500ms and error rate > 1% — catch issues before users do.</blockquote>
  
      `,
      image: 'fa-chart-pie',
      category: 'devops',
      tags: ['Prometheus', 'Grafana', 'Monitoring', 'DevOps'],
      author: 'Sarah Johnson',
      date: '2025-03-10',
      readTime: '9 min',
      featured: false,
    },
    {
      id: 'cicd-pipeline-design',
      type: 'blog',
      title: 'CI/CD Pipeline Design Patterns',
      excerpt: 'Design efficient CI/CD pipelines with trunk-based development, preview deployments, and canary releases.',
      content: `

    <h2>Pipeline Stages</h2>
    <ol>
      <li>Lint + Type Check</li>
      <li>Unit Tests (parallel)</li>
      <li>Integration Tests</li>
      <li>Build + Docker Image</li>
      <li>Deploy to Staging</li>
      <li>E2E Tests</li>
      <li>Deploy to Production (manual approval)</li>
    </ol>
    <h2>Trunk-Based Development</h2>
    <p>Short-lived feature branches merged to main daily. No long-lived branches. Each merge triggers CI/CD.</p>
    <blockquote>Trunk-based development with feature flags reduces merge conflicts and accelerates releases.</blockquote>
  
      `,
      image: 'fa-code-branch',
      category: 'devops',
      tags: ['CI/CD', 'Pipeline', 'DevOps', 'Git'],
      author: 'Alex Chen',
      date: '2025-03-14',
      readTime: '6 min',
      featured: false,
    },
    {
      id: 'cloud-provider-comparison',
      type: 'blog',
      title: 'Choosing a Cloud Provider: AWS vs GCP vs Azure for Startups',
      excerpt: 'Compare AWS, GCP, and Azure for startups — cost, ease of use, service maturity, and learning curve.',
      content: `

    <h2>Quick Comparison</h2>
    <table><tr><th>Factor</th><th>AWS</th><th>GCP</th><th>Azure</th></tr>
    <tr><td>Market share</td><td>32%</td><td>11%</td><td>23%</td></tr>
    <tr><td>Free tier</td><td>12 months</td><td>$300 credits</td><td>$200 credits</td></tr>
    <tr><td>Kubernetes</td><td>EKS</td><td>GKE (best)</td><td>AKS</td></tr>
    <tr><td>Serverless</td><td>Lambda</td><td>Cloud Functions</td><td>Functions</td></tr>
    <tr><td>Learning curve</td><td>Steep</td><td>Moderate</td><td>Moderate</td></tr></table>
    <blockquote>For most startups: start with GCP for simplicity, or AWS for the widest ecosystem and job market.</blockquote>
  
      `,
      image: 'fa-cloud',
      category: 'devops',
      tags: ['Cloud', 'AWS', 'GCP', 'Azure', 'Comparison'],
      author: 'James Wilson',
      date: '2025-03-18',
      readTime: '7 min',
      featured: false,
    },
    {
      id: 'observability-logs-metrics-traces',
      type: 'blog',
      title: 'Observability: Logs, Metrics, and Traces Explained',
      excerpt: 'Understand the three pillars of observability — structured logging, metrics collection, and distributed tracing.',
      content: `

    <h2>Structured Logging</h2>
    <pre><code>const logger = pino({
  level: 'info',
  transport: { target: 'pino-pretty' }
});
logger.info({ userId: 123, action: 'signup' }, 'User signed up');</code></pre>
    <h2>Distributed Tracing</h2>
    <p>OpenTelemetry automatically traces requests across services. Each span has a trace ID linking all services involved.</p>
    <blockquote>Logs tell you something happened. Metrics tell you how often. Traces tell you where it happened in the stack.</blockquote>
  
      `,
      image: 'fa-search',
      category: 'devops',
      tags: ['Observability', 'Logging', 'Metrics', 'Tracing'],
      author: 'Priya Sharma',
      date: '2025-03-22',
      readTime: '6 min',
      featured: false,
    },
    {
      id: 'postgresql-performance-deep-dive',
      type: 'tutorial',
      title: 'PostgreSQL Deep Dive: Indexes, Queries, and Performance',
      excerpt: 'Optimize PostgreSQL performance with proper indexing, query planning, and EXPLAIN ANALYZE analysis.',
      content: `

    <h2>Index Types</h2>
    <pre><code>CREATE INDEX idx_users_email ON users (email);
CREATE INDEX idx_orders_date ON orders (created_at DESC);
CREATE INDEX idx_products_search ON products USING GIN (to_tsvector('english', name));</code></pre>
    <h2>EXPLAIN ANALYZE</h2>
    <pre><code>EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'test@example.com';</code></pre>
    <p>Look for sequential scans on large tables — that's where you need an index.</p>
    <blockquote>PostgreSQL uses B-tree indexes by default. Use GIN for full-text search and GiST for geometric data.</blockquote>
  
      `,
      image: 'fa-database',
      category: 'database',
      tags: ['PostgreSQL', 'Indexes', 'Performance', 'SQL'],
      author: 'Alex Chen',
      date: '2025-03-03',
      readTime: '10 min',
      featured: false,
    },
    {
      id: 'mongodb-aggregation-pipeline',
      type: 'tutorial',
      title: 'MongoDB Aggregation Pipeline: From Beginner to Pro',
      excerpt: 'Master MongoDB\'s aggregation pipeline with $match, $group, $lookup, $unwind, and $facet stages.',
      content: `

    <h2>Pipeline Stages</h2>
    <pre><code>db.orders.aggregate([
  { $match: { status: 'completed' } },
  { $group: { _id: '$product', total: { $sum: '$amount' }, count: { $sum: 1 } } },
  { $sort: { total: -1 } },
  { $limit: 10 }
]);</code></pre>
    <h2>$lookup (Join)</h2>
    <pre><code>db.orders.aggregate([
  { $lookup: { from: 'users', localField: 'userId', foreignField: '_id', as: 'user' } },
  { $unwind: '$user' },
  { $project: { 'user.password': 0 } }
]);</code></pre>
    <blockquote>Use $match and $limit early in the pipeline to reduce document processing at each stage.</blockquote>
  
      `,
      image: 'fa-tree',
      category: 'database',
      tags: ['MongoDB', 'Aggregation', 'Database', 'NoSQL'],
      author: 'Sarah Johnson',
      date: '2025-03-06',
      readTime: '9 min',
      featured: false,
    },
    {
      id: 'redis-beyond-caching',
      type: 'tutorial',
      title: 'Redis Beyond Caching: Pub/Sub, Sorted Sets, Rate Limiting',
      excerpt: 'Use Redis data structures for real-time features: pub/sub messaging, leaderboards with sorted sets, and rate limiting.',
      content: `

    <h2>Pub/Sub</h2>
    <pre><code>const subscriber = redisClient.duplicate();
subscriber.subscribe('notifications', (message) => {
  console.log('Received:', message);
});
await redisClient.publish('notifications', JSON.stringify({ type: 'alert', text: 'Server down' }));</code></pre>
    <h2>Sorted Sets for Leaderboards</h2>
    <pre><code>await redis.zAdd('leaderboard', { score: 1500, value: 'user1' });
const top = await redis.zRange('leaderboard', 0, 9, { rev: true });</code></pre>
    <blockquote>Redis operations are single-threaded and atomic — perfect for distributed counters and locks.</blockquote>
  
      `,
      image: 'fa-bolt',
      category: 'database',
      tags: ['Redis', 'Pub/Sub', 'Cache', 'Database'],
      author: 'Maya Patel',
      date: '2025-03-09',
      readTime: '8 min',
      featured: false,
    },
    {
      id: 'database-indexing-explained',
      type: 'blog',
      title: 'Database Indexing Explained: When and How to Index',
      excerpt: 'Understand database indexes — B-trees, composite indexes, covering indexes, and when they hurt performance.',
      content: `

    <h2>How Indexes Work</h2>
    <p>Indexes are sorted copies of a subset of columns, with pointers to the actual rows. They speed up lookups but slow down writes.</p>
    <h2>Index Guidelines</h2>
    <ul>
      <li>Index columns used in WHERE, JOIN, and ORDER BY</li>
      <li>Composite indexes: order by selectivity (most selective first)</li>
      <li>Covering indexes include all columns a query needs — no table access needed</li>
      <li>Don't index low-cardinality columns (boolean, small enum)</li>
    </ul>
    <blockquote>Use \`EXPLAIN\` to check if your query uses an index. Aim for index-only scans when possible.</blockquote>
  
      `,
      image: 'fa-sort-alpha-down',
      category: 'database',
      tags: ['Indexing', 'Database', 'Performance', 'SQL'],
      author: 'James Wilson',
      date: '2025-03-12',
      readTime: '6 min',
      featured: false,
    },
    {
      id: 'acid-vs-base-cap',
      type: 'blog',
      title: 'ACID vs BASE: Trade-offs in Distributed Databases',
      excerpt: 'Understand ACID and BASE consistency models and how the CAP theorem applies to distributed database design.',
      content: `

    <h2>ACID Properties</h2>
    <ul>
      <li><strong>Atomicity:</strong> All or nothing</li>
      <li><strong>Consistency:</strong> Data follows all rules</li>
      <li><strong>Isolation:</strong> Concurrent transactions don't interfere</li>
      <li><strong>Durability:</strong> Committed data survives failures</li>
    </ul>
    <h2>CAP Theorem</h2>
    <p>In a distributed system, you can have at most two of: Consistency, Availability, Partition tolerance.</p>
    <p>CP systems (like traditional RDBMS) choose consistency over availability during partitions. AP systems (like Cassandra) choose availability.</p>
    <blockquote>Most modern systems relax consistency (eventual consistency) for better availability and partition tolerance.</blockquote>
  
      `,
      image: 'fa-balance-scale',
      category: 'database',
      tags: ['ACID', 'BASE', 'CAP Theorem', 'Distributed Systems'],
      author: 'Priya Sharma',
      date: '2025-03-15',
      readTime: '7 min',
      featured: false,
    },
    {
      id: 'orm-vs-raw-sql',
      type: 'blog',
      title: 'ORM vs Raw SQL: Finding the Right Balance',
      excerpt: 'Compare ORM and raw SQL approaches for performance, maintainability, and type safety in your applications.',
      content: `

    <h2>When ORMs Shine</h2>
    <ul>
      <li>CRUD-heavy applications with simple queries</li>
      <li>Rapid prototyping and iteration</li>
      <li>Type safety (TypeORM, Prisma, SQLModel)</li>
      <li>Migration management</li>
    </ul>
    <h2>When Raw SQL Wins</h2>
    <ul>
      <li>Complex queries with many joins and aggregations</li>
      <li>Performance-critical paths</li>
      <li>Bulk operations</li>
      <li>Proprietary database features</li>
    </ul>
    <blockquote>Use an ORM for 80% of queries and raw SQL for the 20% that need optimization — best of both worlds.</blockquote>
  
      `,
      image: 'fa-exchange-alt',
      category: 'database',
      tags: ['ORM', 'SQL', 'Database', 'Performance'],
      author: 'Alex Chen',
      date: '2025-03-18',
      readTime: '5 min',
      featured: false,
    },
    {
      id: 'e2e-testing-playwright',
      type: 'tutorial',
      title: 'End-to-End Testing with Playwright',
      excerpt: 'Write reliable end-to-end tests with Playwright including locators, assertions, parallel execution, and CI integration.',
      content: `

    <h2>Installation</h2>
    <pre><code>npm init playwright@latest</code></pre>
    <h2>Write a Test</h2>
    <pre><code>import { test, expect } from '@playwright/test';

test('user can log in', async ({ page }) => {
  await page.goto('/login');
  await page.fill('[name="email"]', 'user@example.com');
  await page.fill('[name="password"]', 'secret123');
  await page.click('button[type="submit"]');
  await expect(page.locator('.dashboard')).toBeVisible();
});</code></pre>
    <h2>CI Integration</h2>
    <pre><code># .github/workflows/e2e.yml
- run: npx playwright install --with-deps
- run: npx playwright test</code></pre>
    <blockquote>Use <code>page.getByRole()</code> and <code>page.getByText()</code> over CSS selectors — they're more resilient to DOM changes.</blockquote>
  
      `,
      image: 'fa-vial',
      category: 'testing',
      tags: ['Playwright', 'E2E', 'Testing', 'Automation'],
      author: 'Priya Sharma',
      date: '2025-03-05',
      readTime: '9 min',
      featured: false,
    },
    {
      id: 'pytest-unit-testing-python',
      type: 'tutorial',
      title: 'Unit Testing in Python with pytest',
      excerpt: 'Write effective unit tests in Python using pytest fixtures, parametrization, mocking, and coverage reports.',
      content: `

    <h2>Basic Test</h2>
    <pre><code>def add(a, b): return a + b

def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0</code></pre>
    <h2>Fixtures and Parametrize</h2>
    <pre><code>import pytest

@pytest.fixture
def db():
    return Database(':memory:')

@pytest.mark.parametrize('input,expected', [
    ([1, 2, 3], 6),
    ([], 0),
    ([-1], -1)
])
def test_sum(input, expected):
    assert sum(input) == expected</code></pre>
    <blockquote>Run <code>pytest --cov=src tests/</code> for coverage reports. Aim for 80%+ coverage on critical paths.</blockquote>
  
      `,
      image: 'fa-check-double',
      category: 'testing',
      tags: ['pytest', 'Python', 'Testing', 'Unit Tests'],
      author: 'Sarah Johnson',
      date: '2025-03-08',
      readTime: '8 min',
      featured: false,
    },
    {
      id: 'testing-trophy-strategy',
      type: 'blog',
      title: 'The Testing Trophy: Unit, Integration, and E2E Strategy',
      excerpt: 'Learn the testing trophy approach — how to balance unit, integration, and end-to-end tests for maximum confidence.',
      content: `

    <h2>The Testing Trophy (Kent C. Dodds)</h2>
    <p>Write most of your tests as integration tests, with static analysis catching the rest. Fewer E2E tests (critical paths only).</p>
    <ul>
      <li><strong>Static Analysis:</strong> TypeScript, ESLint — catch errors before running</li>
      <li><strong>Unit Tests:</strong> Test isolated functions and utilities</li>
      <li><strong>Integration Tests:</strong> Test how components work together (the bulk)</li>
      <li><strong>E2E Tests:</strong> Test critical user journeys only</li>
    </ul>
    <blockquote>Integration tests give the best confidence-per-test ratio. They test real user scenarios without the brittleness of E2E.</blockquote>
  
      `,
      image: 'fa-trophy',
      category: 'testing',
      tags: ['Testing', 'Integration', 'Unit Tests', 'E2E'],
      author: 'Maya Patel',
      date: '2025-03-12',
      readTime: '5 min',
      featured: false,
    },
    {
      id: 'tdd-in-practice',
      type: 'blog',
      title: 'Test-Driven Development (TDD) in Practice',
      excerpt: 'Apply TDD with a real-world case study — red-green-refactor cycle with practical examples and common pitfalls.',
      content: `

    <h2>The TDD Cycle</h2>
    <ol>
      <li><strong>Red:</strong> Write a failing test</li>
      <li><strong>Green:</strong> Write the minimum code to pass</li>
      <li><strong>Refactor:</strong> Clean up without changing behavior</li>
    </ol>
    <pre><code># Step 1: Red
def test_is_palindrome():
    assert is_palindrome('racecar') == True
    assert is_palindrome('hello') == False

# Step 2: Green
def is_palindrome(s):
    return s == s[::-1]

# Step 3: Refactor (nothing to refactor here)</code></pre>
    <blockquote>TDD is about design, not testing. The tests are a byproduct of designing your API before implementing it.</blockquote>
  
      `,
      image: 'fa-redo',
      category: 'testing',
      tags: ['TDD', 'Testing', 'Python', 'Best Practices'],
      author: 'James Wilson',
      date: '2025-03-16',
      readTime: '6 min',
      featured: false,
    },
    {
      id: 'owasp-top-10-prevention',
      type: 'tutorial',
      title: 'OWASP Top 10: Prevention for Web Developers',
      excerpt: 'Protect your web app against the OWASP Top 10 — XSS, CSRF, SQL injection, SSRF with prevention code examples.',
      content: `

    <h2>XSS Prevention</h2>
    <pre><code>// React auto-escapes JSX — safe by default
// For innerHTML, sanitize first:
function sanitize(html) {
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
}</code></pre>
    <h2>CSRF Protection</h2>
    <pre><code>// Use SameSite cookies
res.cookie('session', token, { httpOnly: true, sameSite: 'strict', secure: true });
// Or use CSRF tokens
const csrfToken = crypto.randomBytes(32).toString('hex');</code></pre>
    <blockquote>Use parameterized queries or an ORM to prevent SQL injection. Never concatenate user input into SQL strings.</blockquote>
  
      `,
      image: 'fa-shield-alt',
      category: 'security',
      tags: ['OWASP', 'XSS', 'CSRF', 'Security'],
      author: 'Alex Chen',
      date: '2025-03-04',
      readTime: '10 min',
      featured: false,
    },
    {
      id: 'oauth-oidc-authentication',
      type: 'tutorial',
      title: 'Secure Authentication with OAuth 2.0 and OpenID Connect',
      excerpt: 'Implement OAuth 2.0 authorization code flow with PKCE and OpenID Connect for secure third-party authentication.',
      content: `

    <h2>Authorization Code Flow with PKCE</h2>
    <pre><code>// Generate code verifier and challenge
const verifier = crypto.randomBytes(32).toString('base64url');
const challenge = crypto.createHash('sha256').update(verifier).digest('base64url');

// Redirect to authorization server
const authUrl = \`https://provider.com/oauth/authorize?
  response_type=code&client_id=\${clientId}&
  code_challenge=\${challenge}&redirect_uri=\${redirectUri}\`;</code></pre>
    <h2>Token Exchange</h2>
    <pre><code>const response = await fetch('https://provider.com/oauth/token', {
  method: 'POST',
  body: new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    code_verifier: verifier,
    client_id: clientId,
    redirect_uri: redirectUri
  })
});</code></pre>
    <blockquote>PKCE is mandatory for mobile and SPA apps. It prevents interception of the authorization code.</blockquote>
  
      `,
      image: 'fa-id-card',
      category: 'security',
      tags: ['OAuth', 'OpenID Connect', 'Authentication', 'Security'],
      author: 'Priya Sharma',
      date: '2025-03-08',
      readTime: '11 min',
      featured: false,
    },
    {
      id: 'https-csp-security-headers',
      type: 'blog',
      title: 'HTTPS, SSL/TLS, and Content Security Policy Explained',
      excerpt: 'Secure your site with HTTPS, SSL/TLS certificates, and Content Security Policy headers to prevent attacks.',
      content: `

    <h2>Content Security Policy (CSP)</h2>
    <pre><code>Content-Security-Policy: default-src 'self';
  script-src 'self' https://cdn.example.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' https:;
  connect-src 'self' https://api.example.com;</code></pre>
    <h2>Security Headers Checklist</h2>
    <ul>
      <li>\`Strict-Transport-Security: max-age=63072000\`</li>
      <li>\`X-Content-Type-Options: nosniff\`</li>
      <li>\`X-Frame-Options: DENY\`</li>
      <li>\`Referrer-Policy: strict-origin-when-cross-origin\`</li>
    </ul>
    <blockquote>Use securityheaders.com to check your site's security headers. Aim for an A+ rating.</blockquote>
  
      `,
      image: 'fa-lock',
      category: 'security',
      tags: ['HTTPS', 'SSL', 'CSP', 'Security Headers'],
      author: 'Sarah Johnson',
      date: '2025-03-12',
      readTime: '6 min',
      featured: false,
    },
    {
      id: 'secrets-management',
      type: 'blog',
      title: 'Secrets Management: Environment Variables, Vault, and GitGuardian',
      excerpt: 'Protect API keys, database passwords, and tokens with proper secrets management and automated scanning.',
      content: `

    <h2>Environment Variables</h2>
    <pre><code># .env file (never commit)
DATABASE_URL=postgresql://user:password@localhost:5432/db
JWT_SECRET=your-secret-key-here

# Access in code
const dbUrl = process.env.DATABASE_URL;</code></pre>
    <h2>Secrets Scanning</h2>
    <p>Use <code>git-secrets</code> or GitGuardian to scan for committed secrets before each push.</p>
    <pre><code># pre-commit hook
pip install detect-secrets
detect-secrets scan --baseline .secrets.baseline</code></pre>
    <blockquote>Never hardcode secrets. Use environment variables locally and a secrets manager (Vault, AWS Secrets Manager) in production.</blockquote>
  
      `,
      image: 'fa-key',
      category: 'security',
      tags: ['Secrets', 'Security', 'Environment Variables', 'DevOps'],
      author: 'James Wilson',
      date: '2025-03-16',
      readTime: '5 min',
      featured: false,
    },
    {
      id: 'developer-portfolio-guide',
      type: 'tutorial',
      title: 'Building Your Developer Portfolio: A Complete Guide',
      excerpt: 'Create a standout developer portfolio with project selection, writing case studies, and deployment strategies.',
      content: `

    <h2>What to Include</h2>
    <ul>
      <li>3-5 best projects (quality over quantity)</li>
      <li>Case study format: problem → approach → outcome</li>
      <li>Live demos and GitHub links</li>
    </ul>
    <h2>Project Selection</h2>
    <p>Choose projects that demonstrate different skills: a full-stack app, an open-source contribution, and a solo side project.</p>
    <blockquote>A portfolio with three well-documented projects beats one with ten unfinished ones.</blockquote>
  
      `,
      image: 'fa-briefcase',
      category: 'career',
      tags: ['Portfolio', 'Career', 'Projects', 'Job Search'],
      author: 'Maya Patel',
      date: '2025-03-03',
      readTime: '8 min',
      featured: false,
    },
    {
      id: 'open-source-contribution',
      type: 'tutorial',
      title: 'Open Source Contribution: From First PR to Maintainer',
      excerpt: 'Start contributing to open source — finding projects, reading codebases, making your first pull request.',
      content: `

    <h2>Finding Projects</h2>
    <ul>
      <li>Search GitHub for 'good first issue' labels</li>
      <li>Pick projects you use and understand</li>
      <li>Start with documentation fixes</li>
    </ul>
    <h2>Making Your First PR</h2>
    <pre><code>git clone https://github.com/user/project
git checkout -b fix/typo-readme
# Make changes
git commit -m "docs: fix typo in README"
git push -u origin fix/typo-readme</code></pre>
    <blockquote>Start small. Documentation and test improvements are valuable contributions that teach you the project's workflow.</blockquote>
  
      `,
      image: 'fa-code-branch',
      category: 'career',
      tags: ['Open Source', 'GitHub', 'Contribution', 'Career'],
      author: 'Alex Chen',
      date: '2025-03-06',
      readTime: '7 min',
      featured: false,
    },
    {
      id: 'web-developer-roadmap-2025',
      type: 'blog',
      title: 'The 2025 Web Developer Roadmap',
      excerpt: 'A curated learning roadmap for frontend, backend, and DevOps skills with resources for each stage.',
      content: `

    <h2>Frontend</h2>
    <p>HTML → CSS (Flexbox, Grid) → JavaScript (ES6+) → Framework (React/Vue/Svelte) → State Management → Testing</p>
    <h2>Backend</h2>
    <p>Language (Node.js/Python) → HTTP/APIs → Database → Authentication → Deployment</p>
    <h2>DevOps</h2>
    <p>Git → CI/CD → Docker → Cloud → Monitoring</p>
    <blockquote>Don't try to learn everything. Pick one path, build projects, and expand your skills based on what you build.</blockquote>
  
      `,
      image: 'fa-map-signs',
      category: 'career',
      tags: ['Roadmap', 'Career', 'Learning', 'Web Development'],
      author: 'Sarah Johnson',
      date: '2025-03-10',
      readTime: '6 min',
      featured: false,
    },
    {
      id: 'technical-blogging-guide',
      type: 'blog',
      title: 'How to Write Effective Technical Blog Posts',
      excerpt: 'Write clear, engaging technical content — structure, code examples, audience targeting, and SEO fundamentals.',
      content: `

    <h2>Structure</h2>
    <ol>
      <li>Problem statement (why should the reader care?)</li>
      <li>Step-by-step solution with code</li>
      <li>Common pitfalls</li>
      <li>Summary</li>
    </ol>
    <h2>Code Examples</h2>
    <ul>
      <li>Each code block should be runnable or copyable</li>
      <li>Explain what the code does before showing it</li>
      <li>Use consistent formatting and naming</li>
    </ul>
    <blockquote>Write for your past self. If you struggled with a concept, explain it the way you wish it had been explained to you.</blockquote>
  
      `,
      image: 'fa-pen-fancy',
      category: 'career',
      tags: ['Blogging', 'Writing', 'Technical Content', 'Career'],
      author: 'Priya Sharma',
      date: '2025-03-13',
      readTime: '5 min',
      featured: false,
    },
    {
      id: 'system-design-interview-prep',
      type: 'blog',
      title: 'Preparing for System Design Interviews',
      excerpt: 'Master system design interviews with common patterns, whiteboarding techniques, and trade-off analysis frameworks.',
      content: `

    <h2>Common Interview Topics</h2>
    <ul>
      <li>Design URL shortener (tinyurl, bitly)</li>
      <li>Design chat system (WhatsApp, Slack)</li>
      <li>Design social media feed (Twitter, Instagram)</li>
      <li>Design rate limiter</li>
    </ul>
    <h2>Framework</h2>
    <ol>
      <li>Clarify requirements and scope</li>
      <li>Estimate scale (QPS, storage, bandwidth)</li>
      <li>High-level design (components)</li>
      <li>Deep dive on key components</li>
      <li>Trade-offs and bottlenecks</li>
    </ol>
    <blockquote>The interviewer cares more about your reasoning process than the final design. Think out loud.</blockquote>
  
      `,
      image: 'fa-sitemap',
      category: 'career',
      tags: ['System Design', 'Interviews', 'Career', 'Architecture'],
      author: 'James Wilson',
      date: '2025-03-17',
      readTime: '7 min',
      featured: false,
    },
    {
      id: 'remote-work-developer-tools',
      type: 'blog',
      title: 'Remote Work Tools and Practices for Developers',
      excerpt: 'Effective remote work strategies — async communication, documentation, time management, and essential tools.',
      content: `

    <h2>Async Communication</h2>
    <ul>
      <li>Write detailed tickets and PR descriptions</li>
      <li>Record short Loom videos for complex topics</li>
      <li>Use GitHub Discussions for collaborative decisions</li>
    </ul>
    <h2>Essential Tools</h2>
    <p>Slack/Zulip for chat, Linear/Jira for tickets, Notion/Confluence for docs, Zoom/Google Meet for calls.</p>
    <h2>Time Management</h2>
    <p>Time blocking, Pomodoro technique, and strict work-hour boundaries prevent burnout.</p>
    <blockquote>Over-communicate in writing. A well-written message saves a meeting.</blockquote>
  
      `,
      image: 'fa-home',
      category: 'career',
      tags: ['Remote Work', 'Productivity', 'Career', 'Tools'],
      author: 'Maya Patel',
      date: '2025-03-20',
      readTime: '5 min',
      featured: false,
    },
    {
      id: 'rag-langchain-app',
      type: 'tutorial',
      title: 'Build a RAG (Retrieval-Augmented Generation) App with LangChain',
      excerpt: 'Build a Q&A system over your documents using LangChain, vector stores, and OpenAI embeddings.',
      content: `

    <h2>Document Loading and Chunking</h2>
    <pre><code>from langchain_community.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter

loader = PyPDFLoader('document.pdf')
docs = loader.load()
splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
chunks = splitter.split_documents(docs)</code></pre>
    <h2>Vector Store and QA Chain</h2>
    <pre><code>from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma

embeddings = OpenAIEmbeddings()
db = Chroma.from_documents(chunks, embeddings)
retriever = db.as_retriever()</code></pre>
    <blockquote>RAG combines retrieval (search) with generation (LLM) — the model answers based on your documents, not just its training data.</blockquote>
  
      `,
      image: 'fa-robot',
      category: 'ai-ml',
      tags: ['RAG', 'LangChain', 'AI', 'LLM'],
      author: 'Maya Patel',
      date: '2025-03-05',
      readTime: '11 min',
      featured: false,
    },
    {
      id: 'ollama-docker-llm',
      type: 'tutorial',
      title: 'Deploying LLMs with Ollama and Docker',
      excerpt: 'Run large language models locally or on your server using Ollama and Docker for cost-effective AI deployment.',
      content: `

    <h2>Run Ollama</h2>
    <pre><code>docker run -d --gpus all -v ollama:/root/.ollama -p 11434:11434 \
  --name ollama ollama/ollama

docker exec ollama ollama pull llama3.2</code></pre>
    <h2>API Call</h2>
    <pre><code>fetch('http://localhost:11434/api/generate', {
  method: 'POST',
  body: JSON.stringify({
    model: 'llama3.2',
    prompt: 'Explain JavaScript closures',
    stream: false
  })
});</code></pre>
    <blockquote>Ollama supports dozens of open-source models. It runs on CPU (slow) or GPU (fast).</blockquote>
  
      `,
      image: 'fa-docker',
      category: 'ai-ml',
      tags: ['Ollama', 'Docker', 'LLM', 'AI Deployment'],
      author: 'James Wilson',
      date: '2025-03-09',
      readTime: '9 min',
      featured: false,
    },
    {
      id: 'ai-engineer-stack',
      type: 'blog',
      title: 'The AI Engineer Stack: LangChain, Vector Databases, and Agents',
      excerpt: 'Survey the AI engineer tooling landscape — LangChain, Chroma/Pinecone, and agent frameworks with use cases.',
      content: `

    <h2>The Stack</h2>
    <ul>
      <li><strong>LLMs:</strong> OpenAI, Anthropic, open-source (Llama, Mistral)</li>
      <li><strong>Frameworks:</strong> LangChain, LlamaIndex, Vercel AI SDK</li>
      <li><strong>Vector DBs:</strong> Chroma (local), Pinecone (managed), Weaviate</li>
      <li><strong>Agents:</strong> AutoGPT, CrewAI, LangGraph</li>
    </ul>
    <h2>When to Use Each</h2>
    <p>LangChain for document Q&A and chains. LlamaIndex for indexing large document corpora. Vercel AI SDK for streaming chat UIs.</p>
    <blockquote>The AI stack is evolving fast. Pick tools with good documentation and active communities.</blockquote>
  
      `,
      image: 'fa-layer-group',
      category: 'ai-ml',
      tags: ['AI', 'LangChain', 'Vector Database', 'LLM'],
      author: 'Sarah Johnson',
      date: '2025-03-13',
      readTime: '6 min',
      featured: false,
    },
    {
      id: 'prompt-engineering-patterns',
      type: 'blog',
      title: 'Prompt Engineering Patterns for Developers',
      excerpt: 'Master prompt engineering — chain-of-thought, few-shot, structured outputs, and function calling with LLMs.',
      content: `

    <h2>Prompt Patterns</h2>
    <pre><code>// Chain-of-thought
const prompt = \`
Solve this step by step:
A store has 15 apples. It sells 7 and then receives 10 more.
Step 1: Start with 15 apples
Step 2: After selling 7: 15 - 7 = 8
Step 3: After receiving 10: 8 + 10 = 18
Answer: 18
Now solve: A train has 200 passengers. 85 get off, 120 get on.\`</code></pre>
    <h2>Structured Outputs</h2>
    <pre><code>const response = await openai.chat.completions.create({
  model: 'gpt-4',
  messages: [{ role: 'user', content: 'Extract: "John is 28 and lives in NYC"' }],
  response_format: { type: 'json_object' }
});</code></pre>
    <blockquote>Chain-of-thought prompting dramatically improves reasoning accuracy on multi-step problems.</blockquote>
  
      `,
      image: 'fa-brain',
      category: 'ai-ml',
      tags: ['Prompt Engineering', 'AI', 'LLM', 'Developer Tools'],
      author: 'Alex Chen',
      date: '2025-03-17',
      readTime: '7 min',
      featured: false,
    },
    {
      id: 'webgpu-next-gen-graphics',
      type: 'blog',
      title: 'WebGPU: Next-Generation Graphics and Compute in the Browser',
      excerpt: 'Explore WebGPU for high-performance graphics and general-purpose GPU compute directly in the browser.',
      content: `

    <h2>What is WebGPU?</h2>
    <p>WebGPU is the successor to WebGL, providing direct GPU access with lower overhead and compute shader support.</p>
    <pre><code>const adapter = await navigator.gpu.requestAdapter();
const device = await adapter.requestDevice();
const shader = device.createShaderModule({
  code: \`
    @vertex fn vs() -> @builtin(position) vec4<f32> { ... }
    @fragment fn fs() -> @location(0) vec4<f32> { ... }
  \`
});</code></pre>
    <blockquote>WebGPU supports compute shaders for GPU-accelerated machine learning, physics simulations, and image processing.</blockquote>
  
      `,
      image: 'fa-cubes',
      category: 'web-dev',
      tags: ['WebGPU', 'Graphics', 'GPU', 'Performance'],
      author: 'James Wilson',
      date: '2025-03-06',
      readTime: '8 min',
      featured: false,
    },
    {
      id: 'edge-computing-comparison',
      type: 'blog',
      title: 'Edge Computing: Cloudflare Workers vs Deno Deploy',
      excerpt: 'Compare edge computing platforms — Cloudflare Workers and Deno Deploy for globally distributed serverless functions.',
      content: `

    <h2>Cloudflare Workers</h2>
    <pre><code>export default {
  async fetch(request) {
    const cache = caches.default;
    const cached = await cache.match(request);
    if (cached) return cached;
    const response = await fetch('https://api.example.com');
    await cache.put(request, response.clone());
    return response;
  }
};</code></pre>
    <h2>Deno Deploy</h2>
    <pre><code>Deno.serve(async (req) => {
  const data = await Deno.readTextFile('./data.json');
  return new Response(data, { headers: { 'Content-Type': 'application/json' } });
});</code></pre>
    <blockquote>Edge functions run in data centers close to your users — single-digit millisecond cold starts on both platforms.</blockquote>
  
      `,
      image: 'fa-globe',
      category: 'devops',
      tags: ['Edge Computing', 'Cloudflare Workers', 'Deno', 'Serverless'],
      author: 'Priya Sharma',
      date: '2025-03-10',
      readTime: '7 min',
      featured: false,
    },
    {
      id: 'state-of-web-frameworks-2025',
      type: 'blog',
      title: 'The State of Web Frameworks in 2025',
      excerpt: 'Compare React, Vue, Svelte, Solid, and Qwik — where each framework excels and which to choose for your next project.',
      content: `

    <h2>Framework Comparison</h2>
    <table><tr><th>Framework</th><th>Best For</th><th>Bundle Size</th><th>Learning Curve</th></tr>
    <tr><td>React</td><td>Ecosystem, jobs, large teams</td><td>~40KB</td><td>Moderate</td></tr>
    <tr><td>Vue</td><td>Rapid development, small teams</td><td>~33KB</td><td>Easy</td></tr>
    <tr><td>Svelte</td><td>Small bundles, reactive UIs</td><td>~2KB (compiled)</td><td>Easy</td></tr>
    <tr><td>Solid</td><td>High performance, fine-grained reactivity</td><td>~8KB</td><td>Moderate</td></tr>
    <tr><td>Qwik</td><td>Instant loading, resumability</td><td>~1KB (initial)</td><td>Steep</td></tr></table>
    <blockquote>All modern frameworks are fast enough. Choose based on ecosystem, team skills, and community support.</blockquote>
  
      `,
      image: 'fa-chart-bar',
      category: 'web-dev',
      tags: ['React', 'Vue', 'Svelte', 'Solid', 'Qwik'],
      author: 'Alex Chen',
      date: '2025-03-14',
      readTime: '7 min',
      featured: false,
    },
    {
      id: 'low-bandwidth-web-apps',
      type: 'blog',
      title: 'Building for the Next Billion Users: Low-Bandwidth Web Apps',
      excerpt: 'Design web applications that work in low-bandwidth environments — progressive enhancement, offline-first, and data budgets.',
      content: `

    <h2>Principles</h2>
    <ul>
      <li>Target < 100KB initial page load</li>
      <li>Offline-first with service workers</li>
      <li>Optimistic UI updates for slow connections</li>
      <li>Data budget: track every kilobyte</li>
    </ul>
    <h2>Techniques</h2>
    <pre><code>// Register service worker for offline access
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}

// Use Cache API for API responses
const cache = await caches.open('api-v1');
cache.put(request, response.clone());</code></pre>
    <blockquote>Every 100KB of JavaScript saves ~$0.23 in data costs for users in developing countries. Small bundles matter.</blockquote>
  
      `,
      image: 'fa-wifi',
      category: 'web-dev',
      tags: ['Low-Bandwidth', 'Offline-First', 'Performance', 'Accessibility'],
      author: 'Priya Sharma',
      date: '2025-03-18',
      readTime: '6 min',
      featured: false,
    },
    {
      id: 'url-shortener-hono-cloudflare',
      type: 'tutorial',
      title: 'Build a URL Shortener with Hono and Cloudflare Workers',
      excerpt: 'Create a serverless URL shortener using Hono framework, Cloudflare KV for storage, and edge deployment.',
      content: `

    <h2>Setup</h2>
    <pre><code>npm create hono@latest url-shortener
cd url-shortener</code></pre>
    <h2>Main Handler</h2>
    <pre><code>import { Hono } from 'hono';

const app = new Hono();

app.post('/shorten', async (c) => {
  const { url } = await c.req.json();
  const id = crypto.randomUUID().slice(0, 8);
  await c.env.KV.put(id, url);
  return c.json({ short: \`https://short.com/\${id}\` });
});

app.get('/:id', async (c) => {
  const url = await c.env.KV.get(c.req.param('id'));
  return url ? c.redirect(url) : c.notFound();
});

export default app;</code></pre>
    <blockquote>Hono is ultralight (14KB) and runs on Cloudflare Workers, Deno, Bun, and Node.js with the same API.</blockquote>
  
      `,
      image: 'fa-link',
      category: 'backend',
      tags: ['Hono', 'Cloudflare Workers', 'URL Shortener', 'Serverless'],
      author: 'Priya Sharma',
      date: '2025-03-12',
      readTime: '7 min',
      featured: false,
    },
    {
      id: 'real-time-collaborative-editor',
      type: 'tutorial',
      title: 'Real-Time Collaborative Editor with CRDTs and Yjs',
      excerpt: 'Build a Google Docs-style collaborative editor using Yjs CRDTs, WebRTC, and shared cursors.',
      content: `

    <h2>Setup Yjs</h2>
    <pre><code>npm install yjs y-websocket y-codemirror.next</code></pre>
    <h2>Create Document</h2>
    <pre><code>import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';

const doc = new Y.Doc();
const provider = new WebsocketProvider('ws://localhost:1234', 'my-room', doc);
const type = doc.getText('content');

// Bind to editor
import { yCollab } from 'y-codemirror.next';
yCollab(editorView, type, provider.awareness);</code></pre>
    <h2>Server</h2>
    <p>Run <code>y-websocket/bin/server.js</code> for the sync server, or use y-webrtc for peer-to-peer without a server.</p>
    <blockquote>CRDTs (Conflict-Free Replicated Data Types) enable offline editing and automatic conflict resolution without a central server.</blockquote>
  
      `,
      image: 'fa-users',
      category: 'javascript',
      tags: ['Yjs', 'CRDT', 'Collaborative', 'Real-Time'],
      author: 'Maya Patel',
      date: '2025-03-20',
      readTime: '10 min',
      featured: false,
    },
    {
      id: 'architecture-decision-records',
      type: 'blog',
      title: 'Architecture Decision Records (ADRs): Documenting Technical Choices',
      excerpt: 'Document architectural decisions with ADRs — a lightweight format for capturing context, options, and trade-offs.',
      content: `

    <h2>ADR Format</h2>
    <pre><code># ADR-001: Use PostgreSQL as Primary Database

## Status
Accepted

## Context
We need a relational database for the new CRM system. The team has experience with PostgreSQL.

## Decision
We will use PostgreSQL 16 with the pgvector extension for future AI features.

## Consequences
- Positive: Strong ecosystem, excellent JSON support
- Positive: pgvector enables vector search without a separate DB
- Negative: Higher operational overhead than SQLite
- Risk: Need to hire DBA expertise</code></pre>
    <blockquote>Store ADRs in your repository under docs/adr/. Each ADR is a markdown file that's reviewed like code.</blockquote>
  
      `,
      image: 'fa-file-alt',
      category: 'backend',
      tags: ['ADR', 'Documentation', 'Architecture', 'Best Practices'],
      author: 'Sarah Johnson',
      date: '2025-03-22',
      readTime: '5 min',
      featured: false,
    },
    {
      id: 'read-codebase-efficiently',
      type: 'blog',
      title: 'How to Read a Codebase Efficiently',
      excerpt: 'Strategies for understanding unfamiliar codebases — starting points, tracing execution, and building mental models.',
      content: `

    <h2>Starting Points</h2>
    <ul>
      <li>Read the README and CONTRIBUTING.md</li>
      <li>Examine the project structure (package.json, folder layout)</li>
      <li>Find the entry point (main, index, app)</li>
      <li>Look at the test files for usage examples</li>
    </ul>
    <h2>Building Understanding</h2>
    <p>Trace a single feature end-to-end. Add console.log or debugger statements. Draw the module dependency graph.</p>
    <blockquote>Don't try to understand everything. Focus on what you need to change and build outward from there.</blockquote>
  
      `,
      image: 'fa-book-open',
      category: 'career',
      tags: ['Code Reading', 'Learning', 'Developer Skills', 'Productivity'],
      author: 'James Wilson',
      date: '2025-03-25',
      readTime: '5 min',
      featured: false,
    }

  ]
};

siteData.categories.forEach(cat => {
  cat.count = siteData.posts.filter(p => p.category === cat.id).length;
});
