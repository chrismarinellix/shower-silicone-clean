import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import '../styles/Blog.css';

function Blog() {
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="blog">
      <section className="page-hero">
        <div className="container">
          <h1>Silicone Care Blog</h1>
          <p className="subtitle">Tips, guides, and expert advice for maintaining your bathroom silicone</p>
        </div>
      </section>

      <section className="blog-content">
        <div className="container">
          <div className="blog-grid">
            {sortedPosts.map(post => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-body">
                  <div className="blog-meta">
                    <span className="blog-date">{formatDate(post.date)}</span>
                    <span className="blog-author">by {post.author}</span>
                  </div>
                  <h2>
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="btn btn-outline">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="blog-sidebar">
            <div className="sidebar-widget">
              <h3>Categories</h3>
              <ul className="category-list">
                <li><Link to="/blog">Maintenance</Link></li>
                <li><Link to="/blog">How-To</Link></li>
                <li><Link to="/blog">Tips & Tricks</Link></li>
                <li><Link to="/blog">Before & After</Link></li>
              </ul>
            </div>

            <div className="sidebar-widget cta-widget">
              <h3>Need Professional Help?</h3>
              <p>Get expert silicone replacement for your bathroom.</p>
              <Link to="/contact" className="btn btn-primary">Get a Free Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
