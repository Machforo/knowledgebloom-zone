import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { MiniHeader } from "@/components/MiniHeader";
import { Footer } from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  const blogFaqs = [
    { question: "Can I share this article?", answer: "Yes! Feel free to share this article on social media or with colleagues." },
    { question: "How often do you publish new content?", answer: "We publish new blog posts weekly, covering the latest trends." },
    { question: "Can I subscribe to get notified of new posts?", answer: "Yes, subscribe to our newsletter at the bottom of the page." }
  ];

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <MiniHeader />
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
            <Button asChild><Link to="/blog"><ArrowLeft className="mr-2 h-4 w-4" />Back to Blog</Link></Button>
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
        <div className="bg-muted/30 py-4"><div className="mx-auto max-w-7xl px-6 lg:px-8"><Button asChild variant="ghost" size="sm"><Link to="/blog"><ArrowLeft className="mr-2 h-4 w-4" />Back to Blog</Link></Button></div></div>
        <section className="py-12 bg-gradient-hero"><div className="mx-auto max-w-4xl px-6 lg:px-8"><Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">{post.category}</Badge><h1 className="text-4xl font-bold tracking-tight text-white mb-6">{post.title}</h1><div className="flex flex-wrap gap-6 text-white/90"><div className="flex items-center gap-2"><User className="h-4 w-4" /><span>{post.author}</span></div><div className="flex items-center gap-2"><Calendar className="h-4 w-4" /><span>{post.date}</span></div><div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>{post.readTime}</span></div></div></div></section>
        <section className="py-16"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="grid grid-cols-1 lg:grid-cols-3 gap-8"><div className="lg:col-span-2 space-y-8"><img src={post.image} alt={post.title} className="w-full h-[400px] object-cover rounded-xl shadow-lg" /><Card><CardContent className="pt-6 prose prose-lg max-w-none"><p className="text-lg text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p><h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2><p>Understanding fundamentals, practical application, and continuous learning drive success.</p></CardContent></Card></div><div className="lg:sticky lg:top-24 lg:self-start"><Card><CardHeader><CardTitle>Article Details</CardTitle></CardHeader><CardContent className="space-y-4"><div><div className="text-sm text-muted-foreground mb-1">Category</div><Badge variant="outline">{post.category}</Badge></div><div><div className="text-sm text-muted-foreground mb-1">Published</div><div className="font-semibold">{post.date}</div></div><div><div className="text-sm text-muted-foreground mb-1">Author</div><div className="font-semibold">{post.author}</div></div></CardContent></Card></div></div></div></section>
        <section className="py-16 bg-muted/30"><div className="mx-auto max-w-3xl px-6 lg:px-8"><div className="text-center mb-12"><h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2></div><Accordion type="single" collapsible className="space-y-4">{blogFaqs.map((faq, index) => (<AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg border px-6"><AccordionTrigger className="text-left font-semibold hover:no-underline">{faq.question}</AccordionTrigger><AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent></AccordionItem>))}</Accordion></div></section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
