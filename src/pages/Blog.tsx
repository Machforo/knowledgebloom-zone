import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Blog</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Stay updated with the latest insights and trends
              </p>
            </div>
            
            <div className="mx-auto max-w-2xl text-center text-muted-foreground">
              <p>Blog posts coming soon...</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
