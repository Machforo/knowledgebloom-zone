import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { MiniHeader } from "@/components/MiniHeader";
import { Footer } from "@/components/Footer";
import { courses } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, Star, ArrowLeft, Check, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <MiniHeader />
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
            <Button asChild>
              <Link to="/courses">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Courses
              </Link>
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
        {/* Breadcrumb */}
        <div className="bg-muted/30 py-4">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Button asChild variant="ghost" size="sm">
              <Link to="/courses">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Courses
              </Link>
            </Button>
          </div>
        </div>

        {/* Course Header */}
        <section className="py-12 bg-gradient-hero">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="text-white">
                <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
                  {course.category}
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight mb-4">
                  {course.title}
                </h1>
                <p className="text-lg text-white/90 mb-6">
                  {course.fullDescription}
                </p>
                
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    <span>{course.lessons} lessons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <span>{course.instructor}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold">{course.price}</div>
                  <Button size="lg" variant="secondary">
                    Enroll Now
                  </Button>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-hover">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                {/* Learning Outcomes */}
                <Card>
                  <CardHeader>
                    <CardTitle>What You'll Learn</CardTitle>
                    <CardDescription>
                      Key skills and knowledge you'll gain from this course
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {course.learningOutcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Syllabus */}
                <Card>
                  <CardHeader>
                    <CardTitle>Course Syllabus</CardTitle>
                    <CardDescription>
                      Comprehensive curriculum breakdown
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3">
                      {course.syllabus.map((topic, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                            {index + 1}
                          </span>
                          <span className="pt-1">{topic}</span>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Level</div>
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Duration</div>
                      <div className="font-semibold">{course.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Total Lessons</div>
                      <div className="font-semibold">{course.lessons} lessons</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Instructor</div>
                      <div className="font-semibold">{course.instructor}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Price</div>
                      <div className="text-2xl font-bold text-primary">{course.price}</div>
                    </div>
                  </CardContent>
                </Card>

                <Button className="w-full" size="lg">
                  Enroll in This Course
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

export default CourseDetail;
