import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Welcome to the TrainingLobe Blog
              </h1>
              <p className="mt-6 text-lg leading-8 text-white/90">
                Stay updated with the latest insights on Digital Marketing, Technology, Career Growth, Business Strategies, and more
              </p>
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight mb-12">Latest Articles</h2>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Card key={post.id} className="flex flex-col hover:shadow-hover transition-shadow">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="outline">Read More →</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
