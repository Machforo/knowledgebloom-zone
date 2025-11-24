import naveenImg from "@/assets/naveen-luthra.jpg";
import narainImg from "@/assets/narain-gupta.jpg";
import jayasudhaImg from "@/assets/jayasudha-bandi.jpg";

export interface Expert {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
}

export const experts: Expert[] = [
  {
    id: "1",
    name: "Mr. Naveen Luthra",
    title: "Director at Karnavati University",
    image: naveenImg,
    bio: "Naveen Luthra, Director at Karnavati University and Dean of the Unitedworld School of Liberal Arts & Mass Communication, is a seasoned executive with over two decades of experience across diverse industries. An alumnus of IIM Ahmedabad, he currently serves as Senior Vice President – Global Strategic Partnerships."
  },
  {
    id: "2",
    name: "Prof. (Dr.) Narain Gupta",
    title: "Faculty in Operations Management at MDI Gurgaon",
    image: narainImg,
    bio: "A distinguished faculty member in Operations Management at MDI Gurgaon since 2012, holds a Doctoral Degree from IIM Ahmedabad, an M.Tech from IIT Kharagpur. With corporate experience in Global eProcure, he has delivered impactful consulting assignments for major brands."
  },
  {
    id: "3",
    name: "Jayasudha Bandi",
    title: "Office of Alumni Engagement at ISB",
    image: jayasudhaImg,
    bio: "Currently working in the Office of Alumni Engagement at the Indian School of Business (ISB), plays a pivotal role in fostering connections within the alumni community. With a strong background in HR and alumni career services, she creates meaningful impact through strategic engagement."
  }
];
