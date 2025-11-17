import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MasterClass = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Master Classes</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Advanced training for professionals seeking mastery
              </p>
            </div>
            
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-muted-foreground mb-8">
                Our master classes provide in-depth, advanced training led by industry experts. Coming soon...
              </p>
              <Button asChild>
                <Link to="/courses">Explore Regular Courses</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MasterClass;
