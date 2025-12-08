import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { MiniHeader } from "@/components/MiniHeader";
import { Footer } from "@/components/Footer";
import { courses } from "@/data/courses";
import { getCourseFaqs } from "@/data/courseFaqs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, Star, ArrowLeft, Check, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { EnrollmentForm } from "@/components/EnrollmentForm";
import { supabase } from "@/integrations/supabase/client";

interface DbCourse {
  id: string;
  title: string;
  description: string;
  course_type: "bootcamp" | "masterclass";
  price: number;
  duration: string;
  image_url: string;
  instructor_name: string;
  instructor_image: string;
  instructor_bio: string;
  syllabus: string[];
  what_you_learn: string[];
  who_is_for: string[];
  is_active: boolean;
}

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [dbCourse, setDbCourse] = useState<DbCourse | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Try to find in static data first
  const staticCourse = courses.find(c => c.id === id);
  const faqs = getCourseFaqs(id || "");

  useEffect(() => {
    const fetchCourse = async () => {
      if (id) {
        const { data } = await supabase
          .from("courses")
          .select("*")
          .eq("id", id)
          .eq("is_active", true)
          .maybeSingle();
        
        if (data) {
          setDbCourse(data as DbCourse);
        }
      }
      setLoading(false);
    };

    fetchCourse();
  }, [id]);

  const course = dbCourse || staticCourse;

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <MiniHeader />
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="animate-pulse text-xl">Loading...</div>
        </main>
        <Footer />
      </div>
    );
  }

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

  // Normalize course data for display
  const isDbCourse = !!dbCourse;
  const displayData = {
    title: isDbCourse ? dbCourse.title : staticCourse!.title,
    description: isDbCourse ? dbCourse.description : staticCourse!.fullDescription,
    image: isDbCourse ? dbCourse.image_url : staticCourse!.image,
    price: isDbCourse ? (dbCourse.course_type === "masterclass" ? "Free" : `₹${dbCourse.price}`) : staticCourse!.price,
    duration: isDbCourse ? dbCourse.duration : staticCourse!.duration,
    instructor: isDbCourse ? dbCourse.instructor_name : staticCourse!.instructor,
    instructorBio: isDbCourse ? dbCourse.instructor_bio : `Expert instructor with years of experience. Passionate about teaching and helping students achieve their career goals.`,
    instructorImage: isDbCourse ? dbCourse.instructor_image : null,
    category: isDbCourse ? (dbCourse.course_type === "bootcamp" ? "Bootcamp" : "Masterclass") : staticCourse!.category,
    courseType: isDbCourse ? dbCourse.course_type : "bootcamp" as const,
    syllabus: isDbCourse ? (dbCourse.syllabus || []) : staticCourse!.syllabus,
    learningOutcomes: isDbCourse ? (dbCourse.what_you_learn || []) : staticCourse!.learningOutcomes,
    whoIsFor: isDbCourse ? (dbCourse.who_is_for || []) : [`Beginners looking to start their career`, `Professionals wanting to upgrade their skills`, `Students seeking practical, industry-relevant knowledge`],
    rating: staticCourse?.rating || 4.8,
    lessons: staticCourse?.lessons || 24,
    level: staticCourse?.level || "Intermediate"
  };

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
                  {displayData.category}
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight mb-4">
                  {displayData.title}
                </h1>
                <p className="text-lg text-white/90 mb-6">
                  {displayData.description}
                </p>
                
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{displayData.rating}</span>
                  </div>
                  {displayData.courseType === "bootcamp" && displayData.duration && (
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      <span>{displayData.duration}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    <span>{displayData.lessons} lessons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <span>{displayData.instructor}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold">{displayData.price}</div>
                  <EnrollmentForm 
                    courseId={id || ""} 
                    courseTitle={displayData.title} 
                    courseType={displayData.courseType}
                    trigger={<Button size="lg" variant="secondary">Enroll Now</Button>}
                  />
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-hover">
                <img
                  src={displayData.image}
                  alt={displayData.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Course Content with Fixed Sidebar */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Scrollable Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Learning Outcomes */}
                {displayData.learningOutcomes.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>What You'll Learn</CardTitle>
                      <CardDescription>
                        Key skills and knowledge you'll gain from this course
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {displayData.learningOutcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Syllabus */}
                {displayData.syllabus.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Course Syllabus</CardTitle>
                      <CardDescription>
                        Comprehensive curriculum breakdown
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ol className="space-y-3">
                        {displayData.syllabus.map((topic, index) => (
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
                )}

                {/* Instructor */}
                <Card>
                  <CardHeader>
                    <CardTitle>Meet Your Instructor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-4">
                      {displayData.instructorImage ? (
                        <img src={displayData.instructorImage} alt={displayData.instructor} className="w-20 h-20 rounded-full object-cover flex-shrink-0" />
                      ) : (
                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <User className="h-10 w-10 text-primary" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{displayData.instructor}</h3>
                        <p className="text-muted-foreground">{displayData.instructorBio}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Who is this course for */}
                <Card>
                  <CardHeader>
                    <CardTitle>Who is this course for?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {displayData.whoIsFor.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Sample Reviews */}
                <Card>
                  <CardHeader>
                    <CardTitle>Student Reviews</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="border-b pb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>
                        <span className="font-semibold">Amazing course!</span>
                      </div>
                      <p className="text-muted-foreground">
                        "This course exceeded my expectations. The content was well-structured and the instructor explained everything clearly."
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>
                        <span className="font-semibold">Highly recommended</span>
                      </div>
                      <p className="text-muted-foreground">
                        "Practical examples and hands-on projects made learning enjoyable. I can now apply these skills in my job."
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Fixed Sidebar */}
              <div className="lg:sticky lg:top-24 lg:self-start">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Type</div>
                      <Badge variant={displayData.courseType === "bootcamp" ? "default" : "secondary"}>
                        {displayData.courseType === "bootcamp" ? "Bootcamp (Paid)" : "Masterclass (Free)"}
                      </Badge>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Level</div>
                      <Badge variant="outline">{displayData.level}</Badge>
                    </div>
                    {displayData.courseType === "bootcamp" && displayData.duration && (
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Duration</div>
                        <div className="font-semibold">{displayData.duration}</div>
                      </div>
                    )}
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Total Lessons</div>
                      <div className="font-semibold">{displayData.lessons} lessons</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Instructor</div>
                      <div className="font-semibold">{displayData.instructor}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Price</div>
                      <div className="text-2xl font-bold text-primary">{displayData.price}</div>
                    </div>
                    <EnrollmentForm 
                      courseId={id || ""} 
                      courseTitle={displayData.title} 
                      courseType={displayData.courseType}
                      trigger={<Button className="w-full" size="lg">Enroll in This Course</Button>}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Common questions about this course
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
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
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetail;
