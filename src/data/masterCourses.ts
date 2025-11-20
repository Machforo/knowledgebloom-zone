export interface MasterCourse {
  id: string;
  title: string;
  description: string;
  instructor: string;
  category: string;
  image: string;
  price: string;
  duration: string;
}

export const masterCourses: MasterCourse[] = [
  {
    id: "ai-agents-marketing",
    title: "AI Agents for Marketing and Business",
    description: "Learn how to leverage AI agents to automate and enhance your marketing strategies. Perfect for beginners looking to understand AI applications in business.",
    instructor: "TrainingLobe",
    category: "AI",
    image: "/placeholder.svg",
    price: "Free",
    duration: "3 Months"
  },
  {
    id: "ai-agents-no-tech",
    title: "AI Agents (No Tech Skills Needed)",
    description: "Discover the power of AI agents without any technical background. Learn practical applications that can transform your workflow.",
    instructor: "TrainingLobe",
    category: "AI",
    image: "/placeholder.svg",
    price: "Free",
    duration: "Self-paced"
  },
  {
    id: "digital-marketing-trends",
    title: "Digital Marketing: Attract and Engage Customers",
    description: "Master the latest digital marketing strategies to attract, engage, and retain customers in today's competitive landscape.",
    instructor: "TrainingLobe",
    category: "Marketing",
    image: "/placeholder.svg",
    price: "Free",
    duration: "4 Weeks"
  },
  {
    id: "facebook-marketing",
    title: "Build a Business Presence with Facebook",
    description: "Learn how to create a powerful business presence on Facebook and leverage its tools for maximum reach and engagement.",
    instructor: "TrainingLobe",
    category: "Marketing",
    image: "/placeholder.svg",
    price: "Free",
    duration: "3 Weeks"
  },
  {
    id: "youtube-marketing",
    title: "YouTube Marketing for Small Business",
    description: "Discover effective YouTube marketing strategies tailored for small businesses to grow their audience and brand.",
    instructor: "TrainingLobe",
    category: "Marketing",
    image: "/placeholder.svg",
    price: "Free",
    duration: "4 Weeks"
  },
  {
    id: "meta-analytics",
    title: "Meta Platform Insights & Analytics",
    description: "Deep dive into Meta's analytics tools to understand your audience and optimize your marketing campaigns.",
    instructor: "TrainingLobe",
    category: "Marketing",
    image: "/placeholder.svg",
    price: "Free",
    duration: "2 Weeks"
  },
  {
    id: "medical-astrology",
    title: "Medical Astrology",
    description: "Explore the ancient practice of medical astrology and its applications in understanding health patterns.",
    instructor: "TrainingLobe",
    category: "Astrology",
    image: "/placeholder.svg",
    price: "Free",
    duration: "6 Weeks"
  },
  {
    id: "modern-astrology",
    title: "Modern Astrology",
    description: "Learn contemporary approaches to astrology and how to apply them in modern life contexts.",
    instructor: "TrainingLobe",
    category: "Astrology",
    image: "/placeholder.svg",
    price: "Free",
    duration: "8 Weeks"
  },
  {
    id: "paddhati-astrology",
    title: "Paddhati Astrology",
    description: "Master the systematic approach of Paddhati astrology for accurate predictions and insights.",
    instructor: "TrainingLobe",
    category: "Astrology",
    image: "/placeholder.svg",
    price: "Free",
    duration: "10 Weeks"
  },
  {
    id: "stock-trading-basics",
    title: "Stock Trading Fundamentals",
    description: "Learn the basics of stock trading, market analysis, and investment strategies from experienced traders.",
    instructor: "TrainingLobe",
    category: "Trading",
    image: "/placeholder.svg",
    price: "Free",
    duration: "5 Weeks"
  }
];

export const categories = ["All", "AI", "Marketing", "Trading", "Astrology"];
