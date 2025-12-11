import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { MiniHeader } from "@/components/MiniHeader";
import { Footer } from "@/components/Footer";
import { masterCourses } from "@/data/masterCourses";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, ArrowLeft, Check, Calendar, Clock, Monitor, Linkedin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { EnrollmentForm } from "@/components/EnrollmentForm";
import { supabase } from "@/integrations/supabase/client";
import atharvImg from "@/assets/atharv-kumar.jpeg";
import amardeepImg from "@/assets/amardeep-bajpai.jpeg";

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

const MasterCourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [dbCourse, setDbCourse] = useState<DbCourse | null>(null);
  const [loading, setLoading] = useState(true);
  
  const staticCourse = masterCourses.find(c => c.id === id);

  useEffect(() => {
    const fetchCourse = async () => {
      if (id) {
        const { data } = await supabase
          .from("courses")
          .select("*")
          .eq("id", id)
          .eq("is_active", true)
          .eq("course_type", "masterclass")
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

  if (!course || staticCourse?.isComingSoon) {
    return (
      <div className="min-h-screen flex flex-col">
        <MiniHeader />
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Masterclass Not Found</h1>
            <Button asChild>
              <Link to="/master-class">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Masterclasses
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const isDbCourse = !!dbCourse;
  const displayData = {
    title: isDbCourse ? dbCourse.title : staticCourse!.title,
    subtitle: staticCourse?.subtitle || "",
    description: isDbCourse ? dbCourse.description : staticCourse!.description,
    image: isDbCourse ? dbCourse.image_url : staticCourse!.image,
    instructor: isDbCourse ? dbCourse.instructor_name : staticCourse!.instructor,
    instructors: staticCourse?.instructors || [],
    category: isDbCourse ? "Masterclass" : staticCourse!.category,
    whatYouLearn: isDbCourse ? (dbCourse.what_you_learn || []) : (staticCourse?.whatYouLearn || []),
    syllabus: staticCourse?.syllabus || [],
    faqs: staticCourse?.faqs || [],
    date: staticCourse?.date || "",
    time: staticCourse?.time || "",
    format: staticCourse?.format || "",
    duration: staticCourse?.duration || "",
    whatsappLink: staticCourse?.whatsappLink || ""
  };

  // Use imported images for instructors
  const instructorImages: { [key: string]: string } = {
    "Atharv Kumar": atharvImg,
    "Amardeep Bajpai": amardeepImg
  };

  return (
    <div className="min-h-screen flex flex-col">
      <MiniHeader />
      <Header />
      
      <main className="flex-1">
        <div className="bg-muted/30 py-4">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Button asChild variant="ghost" size="sm">
              <Link to="/master-class">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Masterclasses
              </Link>
            </Button>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 bg-gradient-hero">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="text-white">
                <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
                  {displayData.category} - Free Masterclass
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight mb-4">{displayData.title}</h1>
                {displayData.subtitle && (
                  <p className="text-xl text-white/90 mb-6">{displayData.subtitle}</p>
                )}
                <p className="text-lg text-white/80 mb-6">{displayData.description}</p>
                
                {/* Key Details */}
                <div className="flex flex-wrap gap-6 mb-8 text-white/90">
                  {displayData.date && (
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      <span>{displayData.date}</span>
                    </div>
                  )}
                  {displayData.time && (
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      <span>{displayData.time}</span>
                    </div>
                  )}
                  {displayData.format && (
                    <div className="flex items-center gap-2">
                      <Monitor className="h-5 w-5" />
                      <span>{displayData.format}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold">Free</div>
                  <EnrollmentForm 
                    courseId={id || ""} 
                    courseTitle={displayData.title} 
                    courseType="masterclass"
                    whatsappLink={displayData.whatsappLink}
                    trigger={<Button size="lg" variant="secondary">Reserve My Spot</Button>}
                  />
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-hover">
                <img src={displayData.image} alt={displayData.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-12">
                
                {/* What You'll Learn */}
                {displayData.whatYouLearn.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>What You'll Learn</CardTitle>
                      <CardDescription>Master these key concepts</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {displayData.whatYouLearn.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
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
                      <CardTitle>Course Curriculum</CardTitle>
                      <CardDescription>What we'll cover in {displayData.duration}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {displayData.syllabus.map((module, index) => (
                          <div key={index} className="border-l-4 border-primary pl-4">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-semibold text-lg">{module.title}</h3>
                              <Badge variant="outline">{module.duration}</Badge>
                            </div>
                            <ul className="space-y-1 text-muted-foreground">
                              {module.topics.map((topic, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-primary">•</span>
                                  <span>{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Instructors */}
                {displayData.instructors.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Meet Your Instructors</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      {displayData.instructors.map((instructor, index) => (
                        <div key={index} className="flex flex-col sm:flex-row items-start gap-4">
                          <img 
                            src={instructorImages[instructor.name] || instructor.image} 
                            alt={instructor.name} 
                            className="w-24 h-24 rounded-full object-cover flex-shrink-0" 
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-xl font-semibold">{instructor.name}</h3>
                              <a 
                                href={instructor.linkedIn} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary/80 transition-colors"
                              >
                                <Linkedin className="h-5 w-5" />
                              </a>
                            </div>
                            <p className="text-sm text-primary font-medium mb-2">{instructor.title}</p>
                            <p className="text-muted-foreground">{instructor.bio}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:sticky lg:top-24 lg:self-start">
                <Card>
                  <CardHeader>
                    <CardTitle>Masterclass Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Type</div>
                      <Badge variant="secondary">Free Masterclass</Badge>
                    </div>
                    {displayData.date && (
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Date</div>
                        <div className="font-semibold">{displayData.date}</div>
                      </div>
                    )}
                    {displayData.time && (
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Time</div>
                        <div className="font-semibold">{displayData.time}</div>
                      </div>
                    )}
                    {displayData.duration && (
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Duration</div>
                        <div className="font-semibold">{displayData.duration}</div>
                      </div>
                    )}
                    {displayData.format && (
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Format</div>
                        <div className="font-semibold">{displayData.format}</div>
                      </div>
                    )}
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Price</div>
                      <div className="text-2xl font-bold text-primary">Free</div>
                    </div>
                    <EnrollmentForm 
                      courseId={id || ""} 
                      courseTitle={displayData.title} 
                      courseType="masterclass"
                      whatsappLink={displayData.whatsappLink}
                      trigger={<Button className="w-full" size="lg">Enroll Now - It's Free!</Button>}
                    />
                    <p className="text-xs text-center text-muted-foreground">
                      Limited seats available for hands-on guidance
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {displayData.faqs.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                {displayData.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-lg border px-6">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default MasterCourseDetail;
