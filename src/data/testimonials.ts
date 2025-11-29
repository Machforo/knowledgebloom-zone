import ashwinImg from "@/assets/ashwin-testimonial.jpg";
import prachiImg from "@/assets/prachi-testimonial.jpg";
import riteshImg from "@/assets/ritesh-testimonial.jpg";
import rahulImg from "@/assets/rahul-testimonial.jpg";
import snehaImg from "@/assets/sneha-testimonial.jpg";
import amitImg from "@/assets/amit-testimonial.jpg";

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
    image: ashwinImg,
    content: "Learning under expert guidance has been a transformative experience. The courses on Fundamentals of AI, Business Simulation, and Emerging Technologies blend technical knowledge with practical applications perfectly."
  },
  {
    id: "2",
    name: "Prachi Jain",
    role: "Emerging Tech Learner",
    image: prachiImg,
    content: "Attending the training was a truly enlightening experience. The sessions were engaging, easy to follow, and full of practical insights that deepened my understanding. I especially appreciated how the training connected complex concepts to everyday life."
  },
  {
    id: "3",
    name: "Ritesh Ranjan",
    role: "Business Simulation Learner",
    image: riteshImg,
    content: "The interactive simulations and real-world examples taught me to make data-driven decisions and inspired me to think bigger about my career and technology. Highly recommended for anyone looking to upskill."
  },
  {
    id: "4",
    name: "Rahul Mehta",
    role: "Digital Marketing Specialist",
    image: rahulImg,
    content: "The digital marketing course exceeded my expectations. The practical strategies and real campaign examples helped me land a promotion within 3 months. The instructors are knowledgeable and always available for guidance."
  },
  {
    id: "5",
    name: "Sneha Kapoor",
    role: "Data Analytics Professional",
    image: snehaImg,
    content: "I transitioned from a non-tech background to data analytics thanks to TrainingLobe. The curriculum is well-structured, the projects are industry-relevant, and the support from mentors made all the difference."
  },
  {
    id: "6",
    name: "Amit Sharma",
    role: "Trading & Investment Learner",
    image: amitImg,
    content: "Learning trading strategies from experienced professionals was invaluable. The course demystified the complexities of financial markets and gave me the confidence to start investing with a clear strategy."
  }
];
