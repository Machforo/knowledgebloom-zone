import digitalMarketingImg from "@/assets/digital-marketing-blog.jpg";
import aiTrendsImg from "@/assets/ai-trends-blog.jpg";
import careerSkillsImg from "@/assets/career-skills-blog.jpg";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "digital-marketing-trends-2025",
    title: "Top 5 Digital Marketing Trends in 2025",
    excerpt: "Explore AI-driven marketing, personalized campaigns, immersive content strategies, and automation tools that are transforming how brands connect with audiences.",
    author: "Jane Doe",
    date: "Aug 22, 2025",
    readTime: "5 min read",
    category: "Digital Marketing",
    image: digitalMarketingImg
  },
  {
    id: "startups-scale-2025",
    title: "How Startups Can Scale in 2025",
    excerpt: "Discover smart funding strategies, building high-performance teams, leveraging technology for growth, and scaling operations efficiently.",
    author: "John Smith",
    date: "Aug 20, 2025",
    readTime: "6 min read",
    category: "Business",
    image: careerSkillsImg
  },
  {
    id: "ai-tools-transforming-business",
    title: "Top AI Tools Transforming Businesses",
    excerpt: "Learn about cutting-edge AI technologies revolutionizing industries—from automation to predictive analytics and customer engagement tools.",
    author: "Sarah Johnson",
    date: "Aug 18, 2025",
    readTime: "7 min read",
    category: "Technology",
    image: aiTrendsImg
  },
  {
    id: "future-of-creativity",
    title: "The Future Landscape of Creativity",
    excerpt: "Creative workflows are transforming right before our eyes. The line between human creativity and AI assistance is blurring in fascinating ways.",
    author: "Michael Chen",
    date: "Aug 20, 2025",
    readTime: "8 min read",
    category: "AI & Creativity",
    image: aiTrendsImg
  },
  {
    id: "wisdom-of-astrology",
    title: "Unlocking the Wisdom of Astrology",
    excerpt: "A journey into the stars exploring how ancient wisdom meets modern understanding in the practice of astrology.",
    author: "Priya Sharma",
    date: "Aug 19, 2025",
    readTime: "6 min read",
    category: "Astrology",
    image: digitalMarketingImg
  },
  {
    id: "career-growth-strategies",
    title: "Career Growth Strategies for 2025",
    excerpt: "Navigate the evolving job market with proven strategies for professional development, skill building, and career advancement.",
    author: "David Wilson",
    date: "Aug 17, 2025",
    readTime: "5 min read",
    category: "Career",
    image: careerSkillsImg
  }
];
