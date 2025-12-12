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
  type?: "article" | "podcast";
  platform?: string;
}

export const blogPosts: BlogPost[] = [
  // Podcasts from Amardeep Bajpai
  {
    id: "ai-apocalypse-or-golden-age",
    title: "THE AI APOCALYPSE OR GOLDEN AGE",
    excerpt: "Join Amardeep Bajpai as he discusses how AI can transform chaos into structured growth in this insightful episode of 'Scaling Smarter'.",
    author: "Amardeep Bajpai",
    date: "Aug 13, 2025",
    readTime: "Podcast",
    category: "AI & Technology",
    image: aiTrendsImg,
    type: "podcast",
    platform: "LinkedIn"
  },
  {
    id: "ai-for-business-leaders",
    title: "AI for Business Leaders: From Hype to Hands-On Growth",
    excerpt: "Join Amardeep Bajpai as he discusses how AI can transform chaos into structured growth in this insightful episode of 'Scaling Smarter'.",
    author: "Amardeep Bajpai",
    date: "Aug 20, 2025",
    readTime: "Podcast",
    category: "Business",
    image: careerSkillsImg,
    type: "podcast",
    platform: "LinkedIn"
  },
  {
    id: "scaling-smarter-ai-growth",
    title: "Scaling Smarter – How AI Turns Chaos into Growth",
    excerpt: "Discover how AI transforms chaos into growth with Amardeep Bajpai in this insightful 'Scaling Smarter' session.",
    author: "Amardeep Bajpai",
    date: "Aug 27, 2025",
    readTime: "Podcast",
    category: "AI & Technology",
    image: aiTrendsImg,
    type: "podcast",
    platform: "LinkedIn"
  },
  {
    id: "hidden-personality-ai",
    title: "The Hidden Personality of Artificial Intelligence",
    excerpt: "Join Amardeep Bajpai and Unnati Harjani as they delve into the ethical implications of AI in warfare—should autonomous weapons decide who lives?",
    author: "Amardeep Bajpai & Unnati Harjani",
    date: "Sep 3, 2025",
    readTime: "Podcast",
    category: "AI & Ethics",
    image: aiTrendsImg,
    type: "podcast",
    platform: "LinkedIn"
  },
  {
    id: "ai-generated-influencers",
    title: "AI Generated Influencers",
    excerpt: "Join Amardeep Bajpai and Unnati Harjani as they delve into the ethical implications of AI in warfare—should autonomous weapons decide who lives?",
    author: "Amardeep Bajpai & Unnati Harjani",
    date: "Sep 10, 2025",
    readTime: "Podcast",
    category: "AI & Technology",
    image: digitalMarketingImg,
    type: "podcast",
    platform: "LinkedIn"
  },
  {
    id: "ai-revolution-land-of-gurukuls-1",
    title: "The AI Revolution in Land of Gurukuls",
    excerpt: "Catch Amardeep Bajpai on this podcast as he dives into actionable ways AI and digital strategy can power your growth story.",
    author: "Amardeep Bajpai",
    date: "Sep 17, 2025",
    readTime: "Podcast",
    category: "AI & Education",
    image: careerSkillsImg,
    type: "podcast",
    platform: "LinkedIn"
  },
  {
    id: "ai-revolution-land-of-gurukuls-2",
    title: "The AI Revolution in Land of Gurukuls (Part 2)",
    excerpt: "Join Amardeep Bajpai for a forward-looking session where AI meets actionable strategy to accelerate growth.",
    author: "Amardeep Bajpai",
    date: "Sep 24, 2025",
    readTime: "Podcast",
    category: "AI & Education",
    image: aiTrendsImg,
    type: "podcast",
    platform: "LinkedIn"
  },
  {
    id: "autonomous-weapons",
    title: "Autonomous Weapons",
    excerpt: "Join Amardeep Bajpai for a live session unpacking AI trends and digital strategy insights to empower startups and professionals.",
    author: "Amardeep Bajpai",
    date: "Oct 1, 2025",
    readTime: "Podcast",
    category: "AI & Ethics",
    image: aiTrendsImg,
    type: "podcast",
    platform: "LinkedIn"
  },
  {
    id: "autonomous-weapons-part-2",
    title: "Autonomous Weapons Part 2",
    excerpt: "Tune in to explore live insights on AI-driven growth and digital strategy with Amardeep Bajpai — your roadmap from startup to scale.",
    author: "Amardeep Bajpai",
    date: "Oct 8, 2025",
    readTime: "Podcast",
    category: "AI & Ethics",
    image: careerSkillsImg,
    type: "podcast",
    platform: "LinkedIn"
  },
  {
    id: "adversarial-malicious-ai",
    title: "Adversarial And Malicious AI Networks",
    excerpt: "Join Amardeep Bajpai for an insightful podcast on AI & digital transformation where he shares real-world strategies for startup to unicorn growth.",
    author: "Amardeep Bajpai",
    date: "Oct 15, 2025",
    readTime: "Podcast",
    category: "AI & Security",
    image: aiTrendsImg,
    type: "podcast",
    platform: "LinkedIn"
  },
  // Original Articles
  {
    id: "digital-marketing-trends-2025",
    title: "Top 5 Digital Marketing Trends in 2025",
    excerpt: "Explore AI-driven marketing, personalized campaigns, immersive content strategies, and automation tools that are transforming how brands connect with audiences.",
    author: "Jane Doe",
    date: "Aug 22, 2025",
    readTime: "5 min read",
    category: "Digital Marketing",
    image: digitalMarketingImg,
    type: "article"
  },
  {
    id: "startups-scale-2025",
    title: "How Startups Can Scale in 2025",
    excerpt: "Discover smart funding strategies, building high-performance teams, leveraging technology for growth, and scaling operations efficiently.",
    author: "John Smith",
    date: "Aug 20, 2025",
    readTime: "6 min read",
    category: "Business",
    image: careerSkillsImg,
    type: "article"
  },
  {
    id: "ai-tools-transforming-business",
    title: "Top AI Tools Transforming Businesses",
    excerpt: "Learn about cutting-edge AI technologies revolutionizing industries—from automation to predictive analytics and customer engagement tools.",
    author: "Sarah Johnson",
    date: "Aug 18, 2025",
    readTime: "7 min read",
    category: "Technology",
    image: aiTrendsImg,
    type: "article"
  }
];
