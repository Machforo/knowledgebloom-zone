import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { MiniHeader } from "@/components/MiniHeader";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { masterCourses } from "@/data/masterCourses";
import { ArrowLeft, Clock, BarChart, Users, Award } from "lucide-react";

const MasterCourseDetail = () => {
  const { id } = useParams();
  const course = masterCourses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <MiniHeader />
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Master Course Not Found</h1>
            <Button asChild>
              <Link to="/master-class">Back to Master Classes</Link>
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
        <div className="bg-muted/30 py-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Button asChild variant="ghost" className="mb-4">
              <Link to="/master-class">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Master Classes
              </Link>
            </Button>
          </div>
        </div>

        <div className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                    {course.category}
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight mb-4">{course.title}</h1>
                  <p className="text-lg text-muted-foreground mb-6">{course.description}</p>
                  
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-[400px] object-cover rounded-lg mb-8"
                  />
                </div>

                <Card className="mb-8">
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary mt-0.5" />
                        <span>Master the fundamental concepts and advanced techniques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary mt-0.5" />
                        <span>Apply knowledge to real-world scenarios and projects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary mt-0.5" />
                        <span>Develop practical skills valued by industry leaders</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary mt-0.5" />
                        <span>Build a portfolio of projects to showcase your expertise</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      This comprehensive master class is designed to take you from beginner to expert level. Through a combination of theoretical knowledge and hands-on practice, you'll gain the skills and confidence needed to excel in this field.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Our experienced instructors bring years of industry experience and are committed to your success. You'll have access to lifetime course materials, a supportive community, and ongoing mentorship to ensure you achieve your learning goals.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-1">
                <Card className="sticky top-8">
                  <CardContent className="pt-6">
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-primary mb-2">{course.price}</div>
                      <p className="text-sm text-muted-foreground">One-time payment</p>
                    </div>

                    <Button className="w-full mb-6" size="lg">
                      Enroll Now
                    </Button>

                    <div className="space-y-4 text-sm">
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <div className="font-medium">Duration</div>
                          <div className="text-muted-foreground">{course.duration}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <BarChart className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <div className="font-medium">Level</div>
                          <div className="text-muted-foreground">All Levels</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <div className="font-medium">Instructor</div>
                          <div className="text-muted-foreground">{course.instructor}</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t">
                      <h3 className="font-semibold mb-3">This course includes:</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Lifetime access to all course materials</li>
                        <li>• Live interactive sessions with experts</li>
                        <li>• Hands-on projects and assignments</li>
                        <li>• Certificate of completion</li>
                        <li>• Community support and mentorship</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MasterCourseDetail;
