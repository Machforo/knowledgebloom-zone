import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { MiniHeader } from "@/components/MiniHeader";
import { Footer } from "@/components/Footer";
import { masterCourses } from "@/data/masterCourses";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, ArrowLeft, Check } from "lucide-react";
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

const MasterCourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [dbCourse, setDbCourse] = useState<DbCourse | null>(null);
  const [loading, setLoading] = useState(true);
  
  const staticCourse = masterCourses.find(c => c.id === id);
  const faqs = [
    { question: "Is this masterclass really free?", answer: "Yes! All our masterclasses are completely free to attend." },
    { question: "Will I receive a certificate?", answer: "Yes, all participants receive a certificate of completion." },
    { question: "How do I join the WhatsApp community?", answer: "After enrollment, you'll receive a link to join our exclusive WhatsApp community." }
  ];

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

  if (!course) {
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
    description: isDbCourse ? dbCourse.description : staticCourse!.description,
    image: isDbCourse ? dbCourse.image_url : staticCourse!.image,
    instructor: isDbCourse ? dbCourse.instructor_name : staticCourse!.instructor,
    instructorBio: isDbCourse ? dbCourse.instructor_bio : `Expert in ${staticCourse!.category} with years of teaching experience.`,
    instructorImage: isDbCourse ? dbCourse.instructor_image : null,
    category: isDbCourse ? "Masterclass" : staticCourse!.category,
    whatYouLearn: isDbCourse ? (dbCourse.what_you_learn || []) : [`Comprehensive understanding of ${staticCourse!.category}`, `Practical skills and techniques`, `Industry best practices`],
    whoIsFor: isDbCourse ? (dbCourse.who_is_for || []) : [`Anyone interested in ${staticCourse!.category}`, `Beginners and professionals alike`]
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

        <section className="py-12 bg-gradient-hero">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="text-white">
                <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
                  {displayData.category} - Free
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight mb-4">{displayData.title}</h1>
                <p className="text-lg text-white/90 mb-6">{displayData.description}</p>
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <span>{displayData.instructor}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold">Free</div>
                  <EnrollmentForm 
                    courseId={id || ""} 
                    courseTitle={displayData.title} 
                    courseType="masterclass"
                    trigger={<Button size="lg" variant="secondary">Enroll Now</Button>}
                  />
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-hover">
                <img src={displayData.image} alt={displayData.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-12">
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

                <Card>
                  <CardHeader>
                    <CardTitle>Who Should Attend?</CardTitle>
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
              </div>

              <div className="lg:sticky lg:top-24 lg:self-start">
                <Card>
                  <CardHeader>
                    <CardTitle>Masterclass Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Type</div>
                      <Badge variant="secondary">Masterclass (Free)</Badge>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Instructor</div>
                      <div className="font-semibold">{displayData.instructor}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Price</div>
                      <div className="text-2xl font-bold text-primary">Free</div>
                    </div>
                    <EnrollmentForm 
                      courseId={id || ""} 
                      courseTitle={displayData.title} 
                      courseType="masterclass"
                      trigger={<Button className="w-full" size="lg">Enroll Now - It's Free!</Button>}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-lg border px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
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

export default MasterCourseDetail;
