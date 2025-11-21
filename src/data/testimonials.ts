export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  content: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ashwin Shukla",
    role: "AI & Business Simulation Learner",
    image: "/placeholder.svg",
    content: "Learning under expert guidance has been a transformative experience. The courses on Fundamentals of AI, Business Simulation, and Emerging Technologies blend technical knowledge with practical applications perfectly."
  },
  {
    id: "2",
    name: "Prachi Jain",
    role: "Emerging Tech Learner",
    image: "/placeholder.svg",
    content: "Attending the training was a truly enlightening experience. The sessions were engaging, easy to follow, and full of practical insights that deepened my understanding. I especially appreciated how the training connected complex concepts to everyday life."
  },
  {
    id: "3",
    name: "Ritesh Ranjan",
    role: "Business Simulation Learner",
    image: "/placeholder.svg",
    content: "The interactive simulations and real-world examples taught me to make data-driven decisions and inspired me to think bigger about my career and technology. Highly recommended for anyone looking to upskill."
  }
];
