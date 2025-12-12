import { useState } from "react";
import { Header } from "@/components/Header";
import { MiniHeader } from "@/components/MiniHeader";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Mic, FileText } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";

const Blog = () => {
  const [filter, setFilter] = useState<"all" | "podcast" | "article">("all");

  const filteredPosts = filter === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.type === filter);

  const podcasts = blogPosts.filter(p => p.type === "podcast");
  const articles = blogPosts.filter(p => p.type === "article");

  return (
    <div className="min-h-screen flex flex-col">
      <MiniHeader />
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
                Stay updated with the latest insights on AI, Digital Transformation, Career Growth, and more. Featuring podcasts by Amardeep Bajpai.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
                size="sm"
              >
                All ({blogPosts.length})
              </Button>
              <Button
                variant={filter === "podcast" ? "default" : "outline"}
                onClick={() => setFilter("podcast")}
                size="sm"
                className="gap-2"
              >
                <Mic className="h-4 w-4" />
                Podcasts ({podcasts.length})
              </Button>
              <Button
                variant={filter === "article" ? "default" : "outline"}
                onClick={() => setFilter("article")}
                size="sm"
                className="gap-2"
              >
                <FileText className="h-4 w-4" />
                Articles ({articles.length})
              </Button>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight mb-12">
              {filter === "podcast" ? "Podcasts by Amardeep Bajpai" : filter === "article" ? "Latest Articles" : "Latest Content"}
            </h2>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="flex flex-col hover:shadow-hover transition-shadow">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    {post.type === "podcast" && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary text-primary-foreground gap-1">
                          <Mic className="h-3 w-3" />
                          Podcast
                        </Badge>
                      </div>
                    )}
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
                      {post.platform && (
                        <Badge variant="outline" className="text-xs">
                          {post.platform}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full" variant="outline">
                      <Link to={`/blog/${post.id}`}>
                        {post.type === "podcast" ? "Listen Now →" : "Read More →"}
                      </Link>
                    </Button>
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
