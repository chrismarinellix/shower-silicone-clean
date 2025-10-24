import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import '../styles/BlogPost.css';

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="blog-post">
        <div className="container">
          <h1>Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const currentIndex = blogPosts.findIndex(p => p.id === post.id);
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;

  // Parse markdown-style content
  const renderContent = (content) => {
    const lines = content.trim().split('\n');
    const elements = [];
    let currentList = null;

    lines.forEach((line, index) => {
      line = line.trim();

      if (!line) {
        if (currentList) {
          elements.push(<ul key={`list-${index}`}>{currentList}</ul>);
          currentList = null;
        }
        return;
      }

      // Headers
      if (line.startsWith('# ')) {
        if (currentList) {
          elements.push(<ul key={`list-${index}`}>{currentList}</ul>);
          currentList = null;
        }
        elements.push(<h1 key={index}>{line.substring(2)}</h1>);
      } else if (line.startsWith('## ')) {
        if (currentList) {
          elements.push(<ul key={`list-${index}`}>{currentList}</ul>);
          currentList = null;
        }
        elements.push(<h2 key={index}>{line.substring(3)}</h2>);
      } else if (line.startsWith('### ')) {
        if (currentList) {
          elements.push(<ul key={`list-${index}`}>{currentList}</ul>);
          currentList = null;
        }
        elements.push(<h3 key={index}>{line.substring(4)}</h3>);
      }
      // List items
      else if (line.startsWith('- ') || line.startsWith('* ')) {
        const listItem = <li key={index}>{line.substring(2)}</li>;
        if (currentList === null) {
          currentList = [listItem];
        } else {
          currentList.push(listItem);
        }
      }
      // Bold text
      else if (line.startsWith('**') && line.endsWith('**')) {
        if (currentList) {
          elements.push(<ul key={`list-${index}`}>{currentList}</ul>);
          currentList = null;
        }
        elements.push(<p key={index}><strong>{line.slice(2, -2)}</strong></p>);
      }
      // Regular paragraphs
      else {
        if (currentList) {
          elements.push(<ul key={`list-${index}`}>{currentList}</ul>);
          currentList = null;
        }
        // Handle inline bold
        const parts = line.split(/(\*\*.*?\*\*)/g);
        const rendered = parts.map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i}>{part.slice(2, -2)}</strong>;
          }
          return part;
        });
        elements.push(<p key={index}>{rendered}</p>);
      }
    });

    if (currentList) {
      elements.push(<ul key="final-list">{currentList}</ul>);
    }

    return elements;
  };

  return (
    <div className="blog-post">
      <div className="post-header">
        <div className="container">
          <Link to="/blog" className="back-link">← Back to Blog</Link>
          <div className="post-meta">
            <span className="post-category">{post.category}</span>
            <span className="post-date">{formatDate(post.date)}</span>
            <span className="post-author">by {post.author}</span>
          </div>
          <h1 className="post-title">{post.title}</h1>
        </div>
      </div>

      <div className="post-content">
        <div className="container">
          <article className="post-body">
            {renderContent(post.content)}
          </article>

          <div className="post-footer">
            <div className="post-nav">
              {prevPost && (
                <Link to={`/blog/${prevPost.slug}`} className="post-nav-item prev">
                  <span className="nav-label">← Previous Post</span>
                  <span className="nav-title">{prevPost.title}</span>
                </Link>
              )}
              {nextPost && (
                <Link to={`/blog/${nextPost.slug}`} className="post-nav-item next">
                  <span className="nav-label">Next Post →</span>
                  <span className="nav-title">{nextPost.title}</span>
                </Link>
              )}
            </div>

            <div className="post-cta">
              <h2>Need Professional Silicone Replacement?</h2>
              <p>Contact Kartell Caulking for expert service in Sandringham and surrounding areas.</p>
              <Link to="/contact" className="btn btn-primary btn-large">Get Your Free Quote</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
