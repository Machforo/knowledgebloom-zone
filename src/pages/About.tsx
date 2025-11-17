import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                About TrainingLobe
              </h1>
              <p className="mt-6 text-lg leading-8 text-white/90">
                Empowering careers through accessible, practical, and career-focused learning
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  At TrainingLobe, we believe that quality education should be accessible to everyone, regardless of their background or location. Our mission is to equip learners with expert-led training in AI, Web Development, Data Analytics, and emerging technologies.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  We focus on practical, hands-on learning that translates directly to real-world career opportunities. Every course is designed with input from industry professionals to ensure you're learning skills that employers actually need.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our commitment goes beyond just teaching technical skills—we're dedicated to helping you build a sustainable, fulfilling career in technology.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Target className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Career-Focused</h3>
                    <p className="text-muted-foreground">
                      Every course is designed to give you job-ready skills that employers value. We track industry trends to keep our curriculum relevant.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                      <Eye className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Practical Learning</h3>
                    <p className="text-muted-foreground">
                      Learn by doing with hands-on projects, real-world case studies, and practical exercises that reinforce your understanding.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <Heart className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Student Success</h3>
                    <p className="text-muted-foreground">
                      Your success is our success. We provide ongoing support, mentorship, and career guidance throughout your learning journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Values</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-card p-8 rounded-xl shadow-card">
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards in course quality, instructor expertise, and student support.
                </p>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-card">
                <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
                <p className="text-muted-foreground">
                  Quality education should be available to everyone. We offer flexible learning options and financial aid.
                </p>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-card">
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously update our curriculum to reflect the latest industry trends and technologies.
                </p>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-card">
                <h3 className="text-xl font-semibold mb-3">Community</h3>
                <p className="text-muted-foreground">
                  Learning is better together. We foster a supportive community where students help each other grow.
                </p>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-card">
                <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                <p className="text-muted-foreground">
                  We're transparent about what our courses offer and committed to delivering on our promises.
                </p>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-card">
                <h3 className="text-xl font-semibold mb-3">Impact</h3>
                <p className="text-muted-foreground">
                  We measure success by the positive impact we have on our students' careers and lives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 sm:py-32">
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
