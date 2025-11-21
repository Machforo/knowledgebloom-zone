import { useState } from "react";
import { Header } from "@/components/Header";
import { MiniHeader } from "@/components/MiniHeader";
import { Footer } from "@/components/Footer";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/data/courses";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(courses.map(course => course.category)))];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
                Our Courses
              </h1>
              <p className="mt-6 text-lg leading-8 text-white/90">
                Expert-led training programs designed to accelerate your career
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
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
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {filteredCourses.length > 0 ? (
              <>
                <div className="mb-8">
                  <p className="text-muted-foreground">
                    Showing {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'}
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  No courses found matching your criteria. Try adjusting your search or filters.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
