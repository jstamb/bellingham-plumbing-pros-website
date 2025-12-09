import { useParams, Link, Navigate } from 'react-router-dom';
import { getBlogPostBySlug } from '../data/blogPosts';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/blog" className="text-white/80 hover:text-white mb-4 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <time className="text-white/80" dateTime={post.publishedDate}>
            {new Date(post.publishedDate).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-lg shadow-md p-8">
            {/* Introduction paragraphs */}
            {post.contentParagraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Headings with content */}
            {post.headings.map((heading, index) => (
              <div key={index} className="mt-8">
                {heading.level === 2 ? (
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{heading.text}</h2>
                ) : (
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{heading.text}</h3>
                )}
                <p className="text-gray-700 leading-relaxed">{heading.content}</p>
              </div>
            ))}
          </div>

          {/* Back to Blog */}
          <div className="mt-8 text-center">
            <Link
              to="/blog"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              ← Back to All Posts
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
