class SearchEngine {
  constructor(data) {
    this.data = data;
    this.index = this.buildIndex();
  }

  buildIndex() {
    return this.data.posts.map(post => ({
      ...post,
      searchText: `${post.title} ${post.excerpt} ${post.tags.join(' ')} ${post.category} ${post.author}`.toLowerCase()
    }));
  }

  search(query) {
    if (!query || query.trim().length === 0) return [];
    const terms = query.toLowerCase().split(' ').filter(t => t.length > 0);
    return this.index
      .filter(post =>
        terms.every(term => post.searchText.includes(term))
      )
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }
}

const searchEngine = new SearchEngine(siteData);

function getSearchResults(query) {
  const results = searchEngine.search(query);
  return results;
}
