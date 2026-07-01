document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initSearch();
  initScrollToTop();
  initContactForm();
  loadCategories();
  loadFooterCategories();
  loadPageContent();
  initYear();
});

function initNavigation() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const header = document.querySelector('.header');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }
}

function initSearch() {
  const searchToggle = document.getElementById('searchToggle');
  const searchBar = document.getElementById('searchBar');
  const searchInput = document.getElementById('searchInput');
  const searchClose = document.getElementById('searchClose');

  if (searchToggle && searchBar) {
    searchToggle.addEventListener('click', () => {
      searchBar.classList.toggle('active');
      if (searchBar.classList.contains('active')) {
        setTimeout(() => searchInput?.focus(), 100);
      }
    });

    if (searchClose) {
      searchClose.addEventListener('click', () => {
        searchBar.classList.remove('active');
        if (searchInput) searchInput.value = '';
        removeSearchResults();
      });
    }
  }

  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const query = searchInput.value.trim();
        if (query.length >= 2) {
          displaySearchResults(query);
        } else {
          removeSearchResults();
        }
      }, 300);
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        searchBar?.classList.remove('active');
        searchInput.value = '';
        removeSearchResults();
      }
    });
  }
}

function displaySearchResults(query) {
  removeSearchResults();
  const results = getSearchResults(query);
  const main = document.querySelector('main');
  if (!main) return;

  main.classList.add('searching');

  const section = document.createElement('section');
  section.className = 'search-results container';
  section.id = 'searchResults';
  section.style.paddingTop = '40px';

  if (results.length === 0) {
    section.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search"></i>
        <h3>No results found</h3>
        <p>No articles match "${query}". Try different keywords.</p>
      </div>
    `;
  } else {
    section.innerHTML = `
      <h2 style="margin-bottom:24px">Search results for <span style="color:var(--primary)">"${query}"</span> (${results.length})</h2>
      <div class="post-grid">${results.map(renderPostCard).join('')}</div>
    `;
  }

  main.prepend(section);
}

function removeSearchResults() {
  const existing = document.getElementById('searchResults');
  if (existing) existing.remove();
  const main = document.querySelector('main');
  if (main) main.classList.remove('searching');
}

function initScrollToTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 300);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const successDiv = document.getElementById('formSuccess');
    if (successDiv) {
      form.style.display = 'none';
      successDiv.style.display = 'block';
    }
  });
}

function loadCategories() {
  const grid = document.getElementById('categoriesGrid');
  if (!grid) return;

  grid.innerHTML = siteData.categories.map(cat => `
    <a href="${cat.id === 'web-dev' ? '../blog' : '../tutorials'}?category=${cat.id}" class="category-card">
      <i class="fas ${cat.icon}"></i>
      <h3>${cat.name}</h3>
      <span>${cat.count} articles</span>
    </a>
  `).join('');
}

function loadFooterCategories() {
  const list = document.getElementById('footerCategories');
  if (!list) return;

  list.innerHTML = siteData.categories.map(cat => `
    <li><a href="../blog?category=${cat.id}">${cat.name}</a></li>
  `).join('');
}

function loadPageContent() {
  const path = window.location.pathname;

  if (path.endsWith('blog/index.html') || path.endsWith('blog/') || path.match(/\/blog$/)) {
    loadPostList('blog', 'blogPosts');
    initCategoryFilters('blog');
  } else if (path.endsWith('tutorials/index.html') || path.endsWith('tutorials/') || path.match(/\/tutorials$/)) {
    loadPostList('tutorial', 'tutorialPosts');
    initCategoryFilters('tutorial');
  } else if (path.endsWith('index.html') || path === '/' || path.endsWith('/')) {
    loadHomePage();
  }

  if (path.endsWith('post.html')) {
    loadSinglePost();
  }
}

function loadHomePage() {
  const featuredContainer = document.getElementById('featuredPosts');
  const latestContainer = document.getElementById('latestPosts');

  const featured = siteData.posts.filter(p => p.featured).slice(0, 3);
  const latest = [...siteData.posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);

  if (featuredContainer) {
    featuredContainer.innerHTML = featured.map(renderPostCard).join('');
    attachPostCardEvents(featuredContainer);
  }
  if (latestContainer) {
    latestContainer.innerHTML = latest.map(renderPostCard).join('');
    attachPostCardEvents(latestContainer);
  }
}

function loadPostList(type, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const posts = siteData.posts.filter(p => p.type === type);
  container.innerHTML = posts.length
    ? posts.map(renderPostCard).join('')
    : '<p>No posts found in this category.</p>';

  attachPostCardEvents(container);
}

function initCategoryFilters(type) {
  const container = document.getElementById('categoryFilters');
  if (!container) return;

  container.innerHTML = `
    <button class="filter-btn active" data-filter="all">All</button>
    ${siteData.categories.map(cat =>
      `<button class="filter-btn" data-filter="${cat.id}">${cat.name}</button>`
    ).join('')}
  `;

  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    const postsContainerId = type === 'blog' ? 'blogPosts' : 'tutorialPosts';
    const postsContainer = document.getElementById(postsContainerId);
    if (!postsContainer) return;

    const filtered = filter === 'all'
      ? siteData.posts.filter(p => p.type === type)
      : siteData.posts.filter(p => p.type === type && p.category === filter);

    postsContainer.innerHTML = filtered.length
      ? filtered.map(renderPostCard).join('')
      : '<p>No posts in this category yet. Check back soon!</p>';

    attachPostCardEvents(postsContainer);
  });
}

function renderPostCard(post) {
  const link = getPostUrl(post);
  return `
    <div class="post-card" data-url="${link}">
      <div class="card-image" style="background: linear-gradient(135deg, ${getCategoryColor(post.category)}, ${getCategoryColor(post.category, true)});">
        <i class="fas ${post.image || 'fa-file-alt'}"></i>
      </div>
      <div class="card-body">
        <span class="card-category">${getCategoryName(post.category)}</span>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <div class="card-meta">
          <span><i class="far fa-calendar"></i> ${formatDate(post.date)}</span>
          <span><i class="far fa-clock"></i> ${post.readTime}</span>
        </div>
      </div>
    </div>
  `;
}

function attachPostCardEvents(container) {
  container.querySelectorAll('.post-card').forEach(card => {
    card.addEventListener('click', () => {
      const url = card.dataset.url;
      if (url) window.location.href = url;
    });
  });
}

function getPostUrl(post) {
  const base = post.type === 'tutorial' ? 'tutorials' : 'blog';
  return `${base}/post.html?id=${post.id}`;
}

function getCategoryName(catId) {
  const cat = siteData.categories.find(c => c.id === catId);
  return cat ? cat.name : 'General';
}

function getCategoryColor(catId, light = false) {
  const colors = {
    'web-dev': ['#6366f1', '#818cf8'],
    'javascript': ['#f59e0b', '#fbbf24'],
    'python': ['#22c55e', '#4ade80'],
    'react': ['#06b6d4', '#22d3ee'],
    'css': ['#ec4899', '#f472b6'],
    'backend': ['#8b5cf6', '#a78bfa'],
    'devops': ['#0ea5e9', '#38bdf8'],
    'database': ['#ef4444', '#f87171']
  };
  const c = colors[catId] || ['#6366f1', '#818cf8'];
  return c[light ? 1 : 0];
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function loadSinglePost() {
  const params = new URLSearchParams(window.location.search);
  const postId = params.get('id');
  const post = siteData.posts.find(p => p.id === postId);

  if (!post) {
    const content = document.getElementById('postContent');
    if (content) {
      content.innerHTML = '<div class="error-page"><h1>Post not found</h1><p>The requested post does not exist.</p><a href="../index.html" class="btn btn-primary">Go Home</a></div>';
    }
    return;
  }

  document.title = `${post.title} - DevLearn Hub`;
  updateMetaTags(post);

  const titleEl = document.getElementById('postTitle');
  const metaEl = document.getElementById('postMeta');
  const authorEl = document.getElementById('postAuthor');
  const bodyEl = document.getElementById('postBody');
  const tagsEl = document.getElementById('postTags');
  const navEl = document.getElementById('postNav');

  if (titleEl) titleEl.textContent = post.title;

  if (metaEl) {
    metaEl.innerHTML = `
      <span class="category">${getCategoryName(post.category)}</span>
      <span><i class="far fa-calendar"></i> ${formatDate(post.date)}</span>
      <span><i class="far fa-clock"></i> ${post.readTime}</span>
    `;
  }

  if (authorEl) {
    const initials = post.author.split(' ').map(n => n[0]).join('');
    authorEl.innerHTML = `
      <div class="avatar">${initials}</div>
      <span>${post.author}</span>
    `;
  }

  if (bodyEl) {
    bodyEl.innerHTML = post.content;
    if (typeof Prism !== 'undefined') {
      Prism.highlightAll();
    }
  }

  if (tagsEl) {
    tagsEl.innerHTML = post.tags.map(tag => `<span>${tag}</span>`).join('');
  }

  if (navEl) {
    const sameType = siteData.posts.filter(p => p.type === post.type);
    const idx = sameType.findIndex(p => p.id === post.id);
    const prev = idx > 0 ? sameType[idx - 1] : null;
    const next = idx < sameType.length - 1 ? sameType[idx + 1] : null;

    navEl.innerHTML = `
      ${prev ? `<a href="${getPostUrl(prev)}"><div class="nav-label"><i class="fas fa-arrow-left"></i> Previous</div><div class="nav-title">${prev.title}</div></a>` : '<div></div>'}
      ${next ? `<a href="${getPostUrl(next)}" style="text-align:right"><div class="nav-label">Next <i class="fas fa-arrow-right"></i></div><div class="nav-title">${next.title}</div></a>` : '<div></div>'}
    `;
  }

  const adContainers = document.querySelectorAll('.ad-placeholder ins.adsbygoogle');
  if (adContainers.length > 0 && typeof adsbygoogle !== 'undefined') {
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log('AdSense push:', e);
    }
  }
}

function updateMetaTags(post) {
  const desc = document.querySelector('meta[name="description"]');
  const keywords = document.querySelector('meta[name="keywords"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDesc = document.querySelector('meta[property="og:description"]');
  const canonical = document.querySelector('link[rel="canonical"]');

  const excerpt = post.excerpt.substring(0, 160);
  if (desc) desc.setAttribute('content', excerpt);
  if (keywords) keywords.setAttribute('content', post.tags.join(', '));
  if (ogTitle) ogTitle.setAttribute('content', `${post.title} - DevLearn Hub`);
  if (ogDesc) ogDesc.setAttribute('content', excerpt);

  const url = `${window.location.origin}/${getPostUrl(post)}`;
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', url);
  if (canonical) canonical.setAttribute('href', url);
}

function initYear() {
  const year = new Date().getFullYear();
  document.querySelectorAll('.current-year').forEach(el => el.textContent = year);
}
