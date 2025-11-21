import { Header } from "@/components/Header";
import { MiniHeader } from "@/components/MiniHeader";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Lightbulb, Globe, Award as AwardIcon, Shield, TrendingUp, Users } from "lucide-react";
import { experts } from "@/data/experts";

const About = () => {
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
                About Us
              </h1>
              <p className="mt-6 text-lg leading-8 text-white/90">
                Redefining learning with innovation and excellence
              </p>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Leadership & Vision
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Message from Our Founder</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  At TrainingLobe, under visionary leadership, we are driven by a mission to transform education through innovation and excellence. With years of rich experience in the fields of technology and learning, we believe in bridging the gap between academic knowledge and real-world industry requirements.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Our philosophy emphasizes hands-on practice, problem-solving, and cultivating a mindset of continuous learning. We strongly believe that true education goes beyond theory, empowering learners to apply their knowledge to build meaningful solutions.
                </p>
                <p className="text-lg text-muted-foreground">
                  Under this guidance, TrainingLobe has grown into a platform that equips learners with expert-led training in AI, Web Development, Data Analytics, and emerging technologies—preparing them for success in today's fast-paced digital world.
                </p>
                <div className="mt-8">
                  <Button asChild size="lg">
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/placeholder.svg"
                  alt="Founder"
                  className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Experts */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Experts at TrainingLobe</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Learn from industry leaders with decades of combined experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {experts.map((expert) => (
                <Card key={expert.id} className="overflow-hidden hover:shadow-hover transition-shadow">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2">{expert.name}</h3>
                    <p className="text-sm text-primary font-medium mb-4">{expert.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{expert.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Mission & Vision</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Guiding principles that drive everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-16">
              <Card className="bg-card shadow-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our mission at TrainingLobe is to make quality education accessible, practical, and future-ready. We are dedicated to bridging the gap between theoretical knowledge and industry skills by offering hands-on, expert-led training.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We aim to empower students, professionals, and lifelong learners to adapt to emerging technologies such as Artificial Intelligence, Data Analytics, and Web Development. By nurturing innovation, curiosity, and problem-solving abilities, we prepare our learners to lead tomorrow's digital transformation.
                </p>
              </Card>

              <Card className="bg-card shadow-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Eye className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We envision a future where education breaks boundaries—reaching every individual, regardless of their background or location. Our vision is to create a global learning ecosystem that enables learners to access cutting-edge knowledge and unlock their potential.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  TrainingLobe aspires to become a trusted hub of excellence, where innovation meets education, and where learners contribute to shaping industries, building solutions, and driving progress on a global scale.
                </p>
              </Card>
            </div>

            {/* Core Values */}
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h3 className="text-2xl font-bold">Our Core Values</h3>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-card p-6 rounded-xl shadow-card text-center">
                <Lightbulb className="h-10 w-10 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Innovation</h4>
                <p className="text-sm text-muted-foreground">
                  Exploring new tools and methods for engaging, future-ready learning
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-card text-center">
                <Globe className="h-10 w-10 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Accessibility</h4>
                <p className="text-sm text-muted-foreground">
                  Making high-quality training available with flexible schedules
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-card text-center">
                <AwardIcon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Excellence</h4>
                <p className="text-sm text-muted-foreground">
                  Expert-led programs with real-world projects and mentorship
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-card text-center">
                <Heart className="h-10 w-10 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Integrity</h4>
                <p className="text-sm text-muted-foreground">
                  Operating with honesty in a trustworthy learning environment
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-card text-center">
                <TrendingUp className="h-10 w-10 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Growth</h4>
                <p className="text-sm text-muted-foreground">
                  Encouraging adaptability, critical thinking, and leadership
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-card text-center">
                <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Knowledge</h4>
                <p className="text-sm text-muted-foreground">
                  Providing practical insights and industry trends
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-card text-center">
                <Target className="h-10 w-10 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Leadership</h4>
                <p className="text-sm text-muted-foreground">
                  Nurturing decision-making and strategic skills
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-card text-center">
                <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Collaboration</h4>
                <p className="text-sm text-muted-foreground">
                  Driving innovation through teamwork and community
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-muted-foreground">Students Enrolled</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Expert Instructors</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Completion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">4.8</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
