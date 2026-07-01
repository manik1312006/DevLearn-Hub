# DevLearn Hub - Blog & Tutorials Website

A fully responsive blog and tutorials website built with vanilla HTML, CSS, and JavaScript. Features include search functionality, category navigation, Google AdSense integration, SEO optimization, and easy content management.

## Features

- Responsive design (mobile, tablet, desktop)
- Real-time search across all content
- Category-based filtering
- Syntax highlighting for code blocks
- Google AdSense ready
- SEO optimized with meta tags and Open Graph
- Contact page with form
- Newsletter subscription
- Clean, modern UI

## Quick Start

1. Clone or download the repository.
2. Open `index.html` in your browser to preview locally.
3. To add content, edit `js/content.js` — add new posts to the `posts` array.
4. For deployment, push to GitHub and connect to Netlify (see `netlify.toml`).

## Project Structure

```
├── index.html           # Home page
├── about.html           # About page
├── contact.html         # Contact page
├── 404.html             # Error page
├── css/style.css        # Stylesheet
├── js/
│   ├── content.js       # All content data
│   ├── search.js        # Search engine
│   └── main.js          # Site functionality
├── blog/                # Blog section
├── tutorials/           # Tutorial section
└── netlify.toml         # Netlify config
```

## Adding Content

Open `js/content.js` and add a new object to the `posts` array:

```javascript
{
  id: 'unique-slug',
  type: 'blog',              // 'blog' or 'tutorial'
  title: 'Your Title',
  excerpt: 'Short description...',
  content: '<p>Full HTML content...</p>',
  image: 'fa-code',
  category: 'javascript',
  tags: ['Tag1', 'Tag2'],
  author: 'Your Name',
  date: '2024-12-01',
  readTime: '5 min',
  featured: false
}
```

## AdSense Setup

1. Get your AdSense publisher ID from https://adsense.google.com
2. Replace `ca-pub-xxxxxxxxxxxxxxxx` with your ID in all HTML files.
3. Replace ad slot IDs in `<ins>` tags.
4. Deploy and get approval from Google.

## Deployment

### Netlify

1. Push to GitHub.
2. Connect repo to Netlify.
3. Netlify auto-detects config from `netlify.toml`.
4. Deploy with one click.

## Documentation

See `DOCUMENTATION.md` for detailed setup, customization, and content management instructions.

## License

MIT
