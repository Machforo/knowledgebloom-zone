import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { MiniHeader } from "@/components/MiniHeader";
import { Footer } from "@/components/Footer";
import { CourseCard } from "@/components/CourseCard";
import { HeroCarousel } from "@/components/HeroCarousel";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { courses } from "@/data/courses";
import { faqs } from "@/data/faqs";
import { ArrowRight, BookOpen, Users, Award, TrendingUp } from "lucide-react";

const Home = () => {
  const featuredCourses = courses.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <MiniHeader />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[hsl(192,35%,50%)] overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-2xl animate-fade-in">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Skills That Shape Your Future
                </h1>
                <p className="mt-4 text-lg text-white/90 font-medium">
                  Students | Professionals | Entrepreneurs
                </p>
                <p className="mt-6 text-base leading-7 text-white/95">
                  "Accessible, practical, and career-focused learning in Trading, Astrology, Digital Marketing, and Artificial Intelligence."
                </p>
                <div className="mt-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-lg">
                    <Link to="/courses">
                      Explore Courses
                    </Link>
                  </Button>
                </div>
                <div className="mt-8 flex items-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <span className="text-white/90 text-sm">Co-created with:</span>
                  <div className="flex gap-2">
                    <div className="w-16 h-16 bg-white/20 rounded flex items-center justify-center backdrop-blur-sm">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <div className="w-16 h-16 bg-white/20 rounded flex items-center justify-center backdrop-blur-sm">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative lg:block hidden animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <HeroCarousel />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                One globe, one classroom—many journeys.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Turn curiosity into mastery with expert-led, hands-on learning. Build skills that are practical, ethical, and future-ready—leaving with confidence, impact, and measurable results. Learn from real practitioners, apply knowledge instantly, and grow with a community that thrives on progress.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" variant="outline">
                  <Link to="/courses">Know more</Link>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="relative group">
                <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card shadow-card hover:shadow-hover transition-all">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Expert-Led Training</h3>
                  <p className="text-muted-foreground">
                    Learn from industry professionals with years of real-world experience
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card shadow-card hover:shadow-hover transition-all">
                  <div className="mb-4 rounded-full bg-secondary/10 p-3 text-secondary">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Active Community</h3>
                  <p className="text-muted-foreground">
                    Join a vibrant community of learners and get support when you need it
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card shadow-card hover:shadow-hover transition-all">
                  <div className="mb-4 rounded-full bg-accent/10 p-3 text-accent">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Industry-Recognized</h3>
                  <p className="text-muted-foreground">
                    Earn certificates that employers value and respect
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card shadow-card hover:shadow-hover transition-all">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
                  <p className="text-muted-foreground">
                    Practical skills that translate directly to career advancement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Courses</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Start your learning journey with our most popular programs
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" variant="outline">
                <Link to="/courses">
                  View All Courses <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Student Testimonials at TrainingLobe</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Hear from students who transformed their careers with our training
              </p>
            </div>
            
            <TestimonialCarousel />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Find answers to common questions about our courses
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={faq.id} 
                  value={`item-${index}`}
                  className="bg-card rounded-lg border px-6"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-gradient-hero">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Start Your Journey?
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/90">
                Join thousands of students who have transformed their careers with TrainingLobe
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/register">Get Started Today</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
