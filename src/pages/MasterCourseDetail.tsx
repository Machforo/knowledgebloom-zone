import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { MiniHeader } from "@/components/MiniHeader";
import { Footer } from "@/components/Footer";
import { masterCourses } from "@/data/masterCourses";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, User, ArrowLeft, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const MasterCourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const course = masterCourses.find(c => c.id === id);
  const faqs = [{ question: "Is this masterclass really free?", answer: "Yes! All our masterclasses are completely free." }];

  if (!course) return (<div className="min-h-screen flex flex-col"><MiniHeader /><Header /><main className="flex-1 flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold mb-4">Masterclass Not Found</h1><Button asChild><Link to="/master-class"><ArrowLeft className="mr-2 h-4 w-4" />Back</Link></Button></div></main><Footer /></div>);

  return (
    <div className="min-h-screen flex flex-col"><MiniHeader /><Header /><main className="flex-1"><div className="bg-muted/30 py-4"><div className="mx-auto max-w-7xl px-6 lg:px-8"><Button asChild variant="ghost" size="sm"><Link to="/master-class"><ArrowLeft className="mr-2 h-4 w-4" />Back</Link></Button></div></div><section className="py-12 bg-gradient-hero"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12"><div className="text-white"><Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">{course.category}</Badge><h1 className="text-4xl font-bold tracking-tight mb-4">{course.title}</h1><p className="text-lg text-white/90 mb-6">{course.description}</p><div className="flex flex-wrap gap-6 mb-8"><div className="flex items-center gap-2"><Clock className="h-5 w-5" /><span>{course.duration}</span></div><div className="flex items-center gap-2"><User className="h-5 w-5" /><span>{course.instructor}</span></div></div><div className="flex items-center gap-4"><div className="text-3xl font-bold">{course.price}</div><Button size="lg" variant="secondary">Enroll Now</Button></div></div><div className="relative rounded-xl overflow-hidden shadow-hover"><img src={course.image} alt={course.title} className="w-full h-full object-cover" /></div></div></div></section><section className="py-16"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="grid grid-cols-1 lg:grid-cols-3 gap-8"><div className="lg:col-span-2 space-y-12"><Card><CardHeader><CardTitle>What You'll Learn</CardTitle><CardDescription>Master these key concepts</CardDescription></CardHeader><CardContent><ul className="space-y-3"><li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" /><span>Comprehensive understanding of {course.category}</span></li></ul></CardContent></Card></div><div className="lg:sticky lg:top-24 lg:self-start"><Card><CardHeader><CardTitle>Details</CardTitle></CardHeader><CardContent className="space-y-4"><div><div className="text-sm text-muted-foreground mb-1">Duration</div><div className="font-semibold">{course.duration}</div></div><div><div className="text-sm text-muted-foreground mb-1">Price</div><div className="text-2xl font-bold text-primary">{course.price}</div></div><Button className="w-full" size="lg">Enroll Now</Button></CardContent></Card></div></div></div></section><section className="py-16 bg-muted/30"><div className="mx-auto max-w-3xl px-6 lg:px-8"><div className="text-center mb-12"><h2 className="text-3xl font-bold tracking-tight mb-4">FAQ</h2></div><Accordion type="single" collapsible className="space-y-4">{faqs.map((faq, i) => (<AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-lg border px-6"><AccordionTrigger className="text-left font-semibold hover:no-underline">{faq.question}</AccordionTrigger><AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent></AccordionItem>))}</Accordion></div></section></main><Footer /></div>
  );
};

export default MasterCourseDetail;
