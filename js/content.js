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
      featured: false
    }
  ]
};

siteData.categories.forEach(cat => {
  cat.count = siteData.posts.filter(p => p.category === cat.id).length;
});
