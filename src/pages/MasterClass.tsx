import { useState } from "react";
import { Header } from "@/components/Header";
import { MiniHeader } from "@/components/MiniHeader";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { masterCourses, categories } from "@/data/masterCourses";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";

const MasterClass = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses = selectedCategory === "All" 
    ? masterCourses 
    : masterCourses.filter(course => course.category === selectedCategory);

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
                Explore Our Master Courses
              </h1>
              <p className="mt-6 text-lg leading-8 text-white/90">
                Learn AI, Marketing, Trading, and Astrology — Free masterclasses designed by TrainingLobe experts
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course) => (
                <Card key={course.id} className={`flex flex-col hover:shadow-hover transition-shadow ${course.isComingSoon ? 'opacity-75' : ''}`}>
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={course.image}
                      alt={course.title}
                      className={`w-full h-full object-cover ${course.isComingSoon ? 'grayscale' : ''}`}
                    />
                    {course.isComingSoon && (
                      <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                        <Badge variant="secondary" className="text-lg px-4 py-2 bg-primary text-primary-foreground">
                          <Clock className="w-4 h-4 mr-2" />
                          Coming Soon
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{course.category}</Badge>
                      <span className="text-sm font-semibold text-primary">{course.price}</span>
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription className="text-sm">by {course.instructor}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">{course.description}</p>
                    {course.date && !course.isComingSoon && (
                      <p className="mt-4 text-sm font-medium text-primary">📅 {course.date}</p>
                    )}
                  </CardContent>
                  <CardFooter>
                    {course.isComingSoon ? (
                      <Button className="w-full" variant="outline" disabled>
                        Coming Soon
                      </Button>
                    ) : (
                      <Button asChild className="w-full" variant="outline">
                        <Link to={`/master-class/${course.id}`}>Learn More</Link>
                      </Button>
                    )}
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

export default MasterClass;
