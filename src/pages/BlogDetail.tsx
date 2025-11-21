import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { MiniHeader } from "@/components/MiniHeader";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <MiniHeader />
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <MiniHeader />
      <Header />
      
      <main className="flex-1">
        <div className="bg-muted/30 py-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Button asChild variant="ghost" className="mb-4">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>

        <article className="py-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="mb-8">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                {post.category}
              </div>
              <h1 className="text-4xl font-bold tracking-tight mb-6">{post.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[400px] object-cover rounded-lg mb-8"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">{post.excerpt}</p>
              
              <p className="leading-relaxed mb-4">
                This comprehensive guide explores the fundamental concepts and practical applications that are shaping the future of this field. Through detailed analysis and real-world examples, we'll uncover the key principles that drive innovation and success.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Understanding the Fundamentals</h2>
              <p className="leading-relaxed mb-4">
                At its core, this topic represents a paradigm shift in how we approach problem-solving and innovation. By leveraging cutting-edge methodologies and proven strategies, professionals can unlock new levels of efficiency and creativity in their work.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Practical Applications</h2>
              <p className="leading-relaxed mb-4">
                The real power of these concepts becomes apparent when we examine their practical applications. From startups to established enterprises, organizations worldwide are implementing these strategies to drive growth, improve efficiency, and create meaningful impact.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Understanding foundational principles is crucial for long-term success</li>
                <li>Practical application trumps theoretical knowledge</li>
                <li>Continuous learning and adaptation are essential</li>
                <li>Community and collaboration amplify individual efforts</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
              <p className="leading-relaxed mb-4">
                As we continue to navigate this evolving landscape, the importance of staying informed and adaptable cannot be overstated. By embracing these principles and applying them consistently, you position yourself for success in an increasingly competitive and dynamic environment.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t">
              <Button asChild size="lg">
                <Link to="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  View All Blog Posts
                </Link>
              </Button>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;
