import agentZeroImg from "@/assets/agent-zero-workshop.jpg";
import masterMarketingImg from "@/assets/master-marketing.jpg";
import masterTradingImg from "@/assets/master-trading.jpg";
import masterAstrologyImg from "@/assets/master-astrology.jpg";

export interface Instructor {
  name: string;
  title: string;
  bio: string;
  image: string;
  linkedIn: string;
}

export interface MasterCourse {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  instructor: string;
  instructors?: Instructor[];
  category: string;
  image: string;
  price: string;
  duration: string;
  date?: string;
  time?: string;
  format?: string;
  isComingSoon?: boolean;
  syllabus?: { title: string; duration: string; topics: string[] }[];
  whatYouLearn?: string[];
  faqs?: { question: string; answer: string }[];
  whatsappLink?: string;
}

export const masterCourses: MasterCourse[] = [
  {
    id: "agent-zero-workshop",
    title: "Agent Zero Workshop: Build Your First AI Agent from Scratch",
    subtitle: "Stop chatting with AI. Start building with it. A 4-hour hands-on masterclass for developers and tech leaders to move from \"Prompting\" to \"Engineering.\"",
    description: "Everyone uses ChatGPT. But less than 1% of professionals know how to orchestrate LLMs to perform autonomous tasks, call APIs, and automate complex workflows. In this masterclass, you won't just learn about basics of AI; you will open your laptop, set up your environment, connect to OpenAI, and build a functioning AI Agent that can work on your given tasks.",
    instructor: "Atharv Kumar & Amardeep Bajpai",
    instructors: [
      {
        name: "Atharv Kumar",
        title: "AI and Tech Lead, Webisdom",
        bio: "I lead technology at Webisdom, where we don't just talk about AI—we ship it. I've designed this masterclass to bridge the gap between business logic and AI implementation. I'm skipping the hype to show you exactly how we build internal tools and products.",
        image: "/src/assets/atharv-kumar.jpeg",
        linkedIn: "https://www.linkedin.com/in/atharv-kumar-270337222"
      },
      {
        name: "Amardeep Bajpai",
        title: "CEO, Webisdom & Digital Innovation Leader",
        bio: "A visionary leader who has scaled 5 startups to unicorns and advised 300+ global brands. Amardeep brings the 'CEO Perspective'—teaching you not just how to build AI, but how to build a business around AI.",
        image: "/src/assets/amardeep-bajpai.jpeg",
        linkedIn: "https://www.linkedin.com/in/amardeepbajpai/"
      }
    ],
    category: "AI",
    image: agentZeroImg,
    price: "Free",
    duration: "4 Hours",
    date: "20/12/2025 (Saturday) & 21/12/2025 (Sunday)",
    time: "7:00 PM - 9:00 PM",
    format: "Online / Hands-on Coding",
    isComingSoon: false,
    whatsappLink: "https://chat.whatsapp.com/E5TOAN12u9BGbkiMPQXrXg?mode=hqrt3",
    syllabus: [
      {
        title: "Module 1: The New Stack",
        duration: "30 Mins",
        topics: [
          "Anatomy of an Agent: Context, Memory, and Tools",
          "Low-code orchestration for high-code logic",
          "Setting up your Environment: API Keys"
        ]
      },
      {
        title: "Module 2: The Brain - Prompt Engineering for Engineers",
        duration: "60 Mins",
        topics: [
          "System Prompts vs. User Prompts",
          "Structured Outputs: Forcing the LLM to return JSON, not poetry",
          "Lab: Building the logic layer of your agent"
        ]
      },
      {
        title: "Module 3: The Hands - Tool Use & Function Calling",
        duration: "90 Mins",
        topics: [
          "Giving your AI agency: How to connect LLMs to the outside world",
          "Building custom tools and integrations",
          "Hands-on coding session"
        ]
      },
      {
        title: "Module 4: Deployment & Next Steps",
        duration: "30 Mins",
        topics: [
          "Testing and debugging workflows",
          "From Prototype to Production (A look at the Bootcamp)"
        ]
      }
    ],
    whatYouLearn: [
      "Build a functioning AI Agent from scratch",
      "Master Prompt Engineering for real-world applications",
      "Connect LLMs to external APIs and tools",
      "Understand the anatomy of AI Agents: Context, Memory, and Tools",
      "Deploy and test your AI workflows"
    ],
    faqs: [
      {
        question: "Do I need to know Python/Coding?",
        answer: "No, but you need technical literacy. We use Python but will touch on JSON and API structures."
      },
      {
        question: "Is this a recorded video?",
        answer: "No, this is live. You build alongside me."
      },
      {
        question: "Do I need a paid OpenAI account?",
        answer: "No, you will use free credits from Groq."
      },
      {
        question: "Will I receive a certificate?",
        answer: "Yes, all participants receive a certificate of completion."
      }
    ]
  },
  {
    id: "ai-agents-no-tech",
    title: "AI Agents (No Tech Skills Needed)",
    description: "Discover the power of AI agents without any technical background. Learn practical applications that can transform your workflow.",
    instructor: "TrainingLobe",
    category: "AI",
    image: masterMarketingImg,
    price: "Free",
    duration: "Self-paced",
    isComingSoon: true
  },
  {
    id: "digital-marketing-trends",
    title: "Digital Marketing: Attract and Engage Customers",
    description: "Master the latest digital marketing strategies to attract, engage, and retain customers in today's competitive landscape.",
    instructor: "TrainingLobe",
    category: "Marketing",
    image: masterTradingImg,
    price: "Free",
    duration: "4 Weeks",
    isComingSoon: true
  },
  {
    id: "facebook-marketing",
    title: "Build a Business Presence with Facebook",
    description: "Learn how to create a powerful business presence on Facebook and leverage its tools for maximum reach and engagement.",
    instructor: "TrainingLobe",
    category: "Marketing",
    image: masterMarketingImg,
    price: "Free",
    duration: "3 Weeks",
    isComingSoon: true
  },
  {
    id: "youtube-marketing",
    title: "YouTube Marketing for Small Business",
    description: "Discover effective YouTube marketing strategies tailored for small businesses to grow their audience and brand.",
    instructor: "TrainingLobe",
    category: "Marketing",
    image: masterMarketingImg,
    price: "Free",
    duration: "4 Weeks",
    isComingSoon: true
  },
  {
    id: "meta-analytics",
    title: "Meta Platform Insights & Analytics",
    description: "Deep dive into Meta's analytics tools to understand your audience and optimize your marketing campaigns.",
    instructor: "TrainingLobe",
    category: "Marketing",
    image: masterMarketingImg,
    price: "Free",
    duration: "2 Weeks",
    isComingSoon: true
  },
  {
    id: "medical-astrology",
    title: "Medical Astrology",
    description: "Explore the ancient practice of medical astrology and its applications in understanding health patterns.",
    instructor: "TrainingLobe",
    category: "Astrology",
    image: masterAstrologyImg,
    price: "Free",
    duration: "6 Weeks",
    isComingSoon: true
  },
  {
    id: "modern-astrology",
    title: "Modern Astrology",
    description: "Learn contemporary approaches to astrology and how to apply them in modern life contexts.",
    instructor: "TrainingLobe",
    category: "Astrology",
    image: masterAstrologyImg,
    price: "Free",
    duration: "8 Weeks",
    isComingSoon: true
  },
  {
    id: "paddhati-astrology",
    title: "Paddhati Astrology",
    description: "Master the systematic approach of Paddhati astrology for accurate predictions and insights.",
    instructor: "TrainingLobe",
    category: "Astrology",
    image: masterAstrologyImg,
    price: "Free",
    duration: "10 Weeks",
    isComingSoon: true
  },
  {
    id: "stock-trading-basics",
    title: "Stock Trading Fundamentals",
    description: "Learn the basics of stock trading, market analysis, and investment strategies from experienced traders.",
    instructor: "TrainingLobe",
    category: "Trading",
    image: masterTradingImg,
    price: "Free",
    duration: "5 Weeks",
    isComingSoon: true
  }
];

export const categories = ["All", "AI", "Marketing", "Trading", "Astrology"];
