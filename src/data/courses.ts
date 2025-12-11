import agentZeroImg from "@/assets/agent-zero-workshop.jpg";
import astroNumerologyImg from "@/assets/astro-numerology.jpg";
import aiCourseImg from "@/assets/ai-course.jpg";
import webDevCourseImg from "@/assets/web-dev-course.jpg";
import dataAnalyticsCourseImg from "@/assets/data-analytics-course.jpg";
import digitalMarketingImg from "@/assets/digital-marketing-blog.jpg";
import cloudComputingImg from "@/assets/cloud-computing-aws.jpg";
import cybersecurityImg from "@/assets/cybersecurity-essentials.jpg";
import atharvImg from "@/assets/atharv-kumar.jpeg";
import amardeepImg from "@/assets/amardeep-bajpai.jpeg";

export interface Instructor {
  name: string;
  title: string;
  bio: string;
  image: string;
  linkedIn: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  duration: string;
  level: string;
  lessons: number;
  rating: number;
  image: string;
  category: string;
  syllabus: string[];
  instructor: string;
  instructors?: Instructor[];
  price: string;
  learningOutcomes: string[];
  isComingSoon?: boolean;
  whatsappLink?: string;
}

export const courses: Course[] = [
  {
    id: "agent-zero-bootcamp",
    title: "The AI Product Foundry: 2-Day Bootcamp on Advanced AI Engineering & Strategy",
    description: "A 2-day intensive bootcamp where you'll learn to build production-ready AI agents, automate workflows, and develop AI product strategy.",
    fullDescription: "This isn't a lecture. It's a two-day coding intensive where you leave with a deployable AI product, a clear understanding of the tech, and a strategy for using it. Whether you're building internal tools or launching a startup, this bootcamp gives you the practical skills and CEO-level thinking to succeed.",
    duration: "2 Days",
    level: "Intermediate",
    lessons: 12,
    rating: 4.9,
    image: agentZeroImg,
    category: "AI & Automation",
    instructor: "Atharv Kumar & Amardeep Bajpai",
    instructors: [
      {
        name: "Atharv Kumar",
        title: "AI and Tech Lead, Webisdom",
        bio: "I lead technology at Webisdom, where we don't just talk about AI—we ship it. I've designed this bootcamp to bridge the gap between business logic and AI implementation.",
        image: atharvImg,
        linkedIn: "https://www.linkedin.com/in/atharv-kumar-270337222"
      },
      {
        name: "Amardeep Bajpai",
        title: "CEO, Webisdom & Digital Innovation Leader",
        bio: "A visionary leader who has scaled 5 startups to unicorns and advised 300+ global brands. Amardeep brings the 'CEO Perspective'—teaching you not just how to build AI, but how to build a business around AI.",
        image: amardeepImg,
        linkedIn: "https://www.linkedin.com/in/amardeepbajpai/"
      }
    ],
    price: "₹4,999",
    syllabus: [
      "Day 1 Morning: Agentic AI Deep Dive — Understanding context, memory, and tools",
      "Day 1 Afternoon: Building Your First Agent — Hands-on coding with OpenAI/Groq APIs",
      "Day 1 Evening: Tool Integration — Connecting your agent to external APIs and services",
      "Day 2 Morning: Advanced Prompt Engineering — Structured outputs and error handling",
      "Day 2 Afternoon: Multi-Agent Systems — Orchestrating multiple AI agents",
      "Day 2 Evening: Deployment & Strategy — Production deployment and business strategy"
    ],
    learningOutcomes: [
      "Build and deploy production-ready AI agents",
      "Master advanced prompt engineering techniques",
      "Connect AI to real-world APIs and databases",
      "Understand multi-agent orchestration",
      "Develop AI product strategy and business models"
    ],
    isComingSoon: false,
    whatsappLink: "https://chat.whatsapp.com/E5TOAN12u9BGbkiMPQXrXg?mode=hqrt3"
  },
  {
    id: "astro-numerology-bootcamp",
    title: "Lo Shu Grid Numerology Course: Become a Professional Numerologist",
    description: "Learn about the hidden power of numbers and how numbers impact our lives in various ways using the most practical Lo Shu grid.",
    fullDescription: "Learn about the hidden power of numbers and how numbers impact our lives in various ways. Our Lo Shu Grid Numerology Course uses the most practical Lo Shu grid, teaching you how to interpret numerical patterns that influence key aspects of your life, including personality, relationships, and career. Perfect for both beginners and enthusiasts, this course offers practical, real-world concepts of numerology, helping you make informed decisions and gain deeper insights into your life's direction. Enroll today and explore how our Lo Shu grid numerology course can transform the understanding of yourself and people around you.",
    duration: "8 Weeks",
    level: "Beginner",
    lessons: 24,
    rating: 4.8,
    image: astroNumerologyImg,
    category: "Numerology",
    instructor: "Atharv Kumar & Amardeep Bajpai",
    instructors: [
      {
        name: "Atharv Kumar",
        title: "Numerology Expert & Tech Lead",
        bio: "Combining ancient wisdom with modern understanding, Atharv brings a unique perspective to numerology education.",
        image: atharvImg,
        linkedIn: "https://www.linkedin.com/in/atharv-kumar-270337222"
      },
      {
        name: "Amardeep Bajpai",
        title: "CEO, Webisdom & Spiritual Guide",
        bio: "A visionary leader with deep knowledge of mystical sciences, helping students unlock the power of numbers.",
        image: amardeepImg,
        linkedIn: "https://www.linkedin.com/in/amardeepbajpai/"
      }
    ],
    price: "₹2,999",
    syllabus: [
      "Introduction to Lo Shu Grid and its History",
      "Understanding the 9 Numbers and Their Meanings",
      "Creating and Reading Personal Lo Shu Charts",
      "Personality Analysis through Numbers",
      "Relationship Compatibility using Numerology",
      "Career Guidance through Number Patterns",
      "Advanced Grid Interpretations",
      "Professional Practice and Consultation Skills"
    ],
    learningOutcomes: [
      "Create and interpret Lo Shu Grid charts",
      "Analyze personality traits through numbers",
      "Provide relationship compatibility readings",
      "Guide career decisions using numerology",
      "Start your own numerology practice"
    ],
    isComingSoon: false,
    whatsappLink: "https://chat.whatsapp.com/E5TOAN12u9BGbkiMPQXrXg?mode=hqrt3"
  },
  {
    id: "ai-machine-learning",
    title: "AI & Machine Learning Fundamentals",
    description: "Master the foundations of artificial intelligence and machine learning with hands-on projects.",
    fullDescription: "Dive deep into the world of AI and Machine Learning. This comprehensive course covers neural networks, deep learning, natural language processing, and computer vision.",
    duration: "12 weeks",
    level: "Intermediate",
    lessons: 48,
    rating: 4.9,
    image: aiCourseImg,
    category: "AI & ML",
    syllabus: [
      "Introduction to AI and ML Concepts",
      "Python for Machine Learning",
      "Supervised and Unsupervised Learning",
      "Neural Networks and Deep Learning",
      "Natural Language Processing",
      "Computer Vision Fundamentals",
      "Model Deployment and Production",
      "Capstone Project"
    ],
    instructor: "Dr. Sarah Chen",
    price: "₹599",
    learningOutcomes: [
      "Build and train machine learning models",
      "Implement neural networks using TensorFlow and PyTorch",
      "Process and analyze complex datasets",
      "Deploy ML models to production",
      "Understand ethical AI principles"
    ],
    isComingSoon: true
  },
  {
    id: "web-development-bootcamp",
    title: "Full Stack Web Development Bootcamp",
    description: "Learn to build modern, responsive web applications from front-end to back-end.",
    fullDescription: "Become a full-stack developer with this intensive bootcamp.",
    duration: "16 weeks",
    level: "Beginner",
    lessons: 64,
    rating: 4.8,
    image: webDevCourseImg,
    category: "Web Development",
    syllabus: [
      "HTML5 & CSS3 Fundamentals",
      "JavaScript ES6+ Mastery",
      "React.js and Modern Frameworks",
      "Node.js and Express.js",
      "Database Design (SQL & NoSQL)",
      "RESTful APIs and GraphQL",
      "Authentication and Security",
      "Cloud Deployment and DevOps"
    ],
    instructor: "Michael Rodriguez",
    price: "₹799",
    learningOutcomes: [
      "Build responsive websites from scratch",
      "Develop full-stack web applications",
      "Work with modern frameworks and libraries",
      "Implement secure authentication systems",
      "Deploy applications to cloud platforms"
    ],
    isComingSoon: true
  },
  {
    id: "data-analytics-professional",
    title: "Professional Data Analytics",
    description: "Transform data into actionable insights with advanced analytics and visualization techniques.",
    fullDescription: "Master the art of data analysis with this comprehensive course.",
    duration: "10 weeks",
    level: "Intermediate",
    lessons: 40,
    rating: 4.7,
    image: dataAnalyticsCourseImg,
    category: "Data Analytics",
    syllabus: [
      "Statistics for Data Analysis",
      "SQL and Database Querying",
      "Python for Data Analysis",
      "Data Visualization with Tableau and Power BI",
      "Exploratory Data Analysis",
      "Predictive Analytics Basics"
    ],
    instructor: "Dr. Emily Watson",
    price: "₹549",
    learningOutcomes: [
      "Analyze complex datasets effectively",
      "Create compelling data visualizations",
      "Write efficient SQL queries",
      "Use Python for data manipulation",
      "Present insights to stakeholders"
    ],
    isComingSoon: true
  },
  {
    id: "digital-marketing-mastery",
    title: "Digital Marketing Mastery",
    description: "Learn cutting-edge digital marketing strategies to grow businesses online.",
    fullDescription: "Master digital marketing channels including SEO, social media, content marketing.",
    duration: "8 weeks",
    level: "Beginner",
    lessons: 32,
    rating: 4.6,
    image: digitalMarketingImg,
    category: "Marketing",
    syllabus: [
      "Digital Marketing Fundamentals",
      "SEO and Content Strategy",
      "Social Media Marketing",
      "Email Marketing Campaigns",
      "Google Ads and PPC",
      "Analytics and Tracking"
    ],
    instructor: "Jennifer Taylor",
    price: "₹449",
    learningOutcomes: [
      "Create effective digital marketing campaigns",
      "Optimize websites for search engines",
      "Manage social media accounts professionally",
      "Track and analyze marketing metrics"
    ],
    isComingSoon: true
  },
  {
    id: "cloud-computing-aws",
    title: "Cloud Computing with AWS",
    description: "Master Amazon Web Services and become a certified cloud solutions architect.",
    fullDescription: "Learn cloud infrastructure, serverless computing, containerization on AWS.",
    duration: "10 weeks",
    level: "Intermediate",
    lessons: 42,
    rating: 4.8,
    image: cloudComputingImg,
    category: "Cloud & DevOps",
    syllabus: [
      "AWS Fundamentals and IAM",
      "EC2, S3, and Storage Solutions",
      "Networking and VPC",
      "Serverless with Lambda",
      "Container Services (ECS, EKS)",
      "Database Services"
    ],
    instructor: "David Kumar",
    price: "₹649",
    learningOutcomes: [
      "Design scalable cloud architectures",
      "Deploy applications on AWS",
      "Implement security best practices",
      "Optimize cloud costs"
    ],
    isComingSoon: true
  },
  {
    id: "cybersecurity-essentials",
    title: "Cybersecurity Essentials",
    description: "Protect systems and data with comprehensive cybersecurity knowledge and practical skills.",
    fullDescription: "Learn the fundamentals of cybersecurity, including network security and ethical hacking.",
    duration: "12 weeks",
    level: "Intermediate",
    lessons: 45,
    rating: 4.7,
    image: cybersecurityImg,
    category: "Cybersecurity",
    syllabus: [
      "Security Fundamentals",
      "Network Security",
      "Ethical Hacking Basics",
      "Vulnerability Assessment",
      "Incident Response",
      "Security Compliance"
    ],
    instructor: "Robert Chen",
    price: "₹699",
    learningOutcomes: [
      "Identify and mitigate security threats",
      "Perform security assessments",
      "Implement security controls",
      "Respond to security incidents"
    ],
    isComingSoon: true
  }
];
