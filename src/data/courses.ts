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
  price: string;
  learningOutcomes: string[];
}

export const courses: Course[] = [
  {
    id: "ai-machine-learning",
    title: "AI & Machine Learning Fundamentals",
    description: "Master the foundations of artificial intelligence and machine learning with hands-on projects.",
    fullDescription: "Dive deep into the world of AI and Machine Learning. This comprehensive course covers neural networks, deep learning, natural language processing, and computer vision. Build real-world projects and gain practical experience with industry-standard tools and frameworks.",
    duration: "12 weeks",
    level: "Intermediate",
    lessons: 48,
    rating: 4.9,
    image: "/src/assets/ai-course.jpg",
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
    price: "$599",
    learningOutcomes: [
      "Build and train machine learning models",
      "Implement neural networks using TensorFlow and PyTorch",
      "Process and analyze complex datasets",
      "Deploy ML models to production",
      "Understand ethical AI principles"
    ]
  },
  {
    id: "web-development-bootcamp",
    title: "Full Stack Web Development Bootcamp",
    description: "Learn to build modern, responsive web applications from front-end to back-end.",
    fullDescription: "Become a full-stack developer with this intensive bootcamp. Learn HTML, CSS, JavaScript, React, Node.js, databases, and deployment. Build a portfolio of projects to showcase your skills to potential employers.",
    duration: "16 weeks",
    level: "Beginner",
    lessons: 64,
    rating: 4.8,
    image: "/src/assets/web-dev-course.jpg",
    category: "Web Development",
    syllabus: [
      "HTML5 & CSS3 Fundamentals",
      "JavaScript ES6+ Mastery",
      "React.js and Modern Frameworks",
      "Node.js and Express.js",
      "Database Design (SQL & NoSQL)",
      "RESTful APIs and GraphQL",
      "Authentication and Security",
      "Cloud Deployment and DevOps",
      "Final Capstone Project"
    ],
    instructor: "Michael Rodriguez",
    price: "$799",
    learningOutcomes: [
      "Build responsive websites from scratch",
      "Develop full-stack web applications",
      "Work with modern frameworks and libraries",
      "Implement secure authentication systems",
      "Deploy applications to cloud platforms"
    ]
  },
  {
    id: "data-analytics-professional",
    title: "Professional Data Analytics",
    description: "Transform data into actionable insights with advanced analytics and visualization techniques.",
    fullDescription: "Master the art of data analysis with this comprehensive course. Learn statistical analysis, data visualization, SQL, Python, and business intelligence tools. Work on real-world datasets and present insights effectively.",
    duration: "10 weeks",
    level: "Intermediate",
    lessons: 40,
    rating: 4.7,
    image: "/src/assets/data-analytics-course.jpg",
    category: "Data Analytics",
    syllabus: [
      "Statistics for Data Analysis",
      "SQL and Database Querying",
      "Python for Data Analysis (Pandas, NumPy)",
      "Data Visualization with Tableau and Power BI",
      "Exploratory Data Analysis",
      "Predictive Analytics Basics",
      "Business Intelligence Reporting",
      "Data-Driven Decision Making"
    ],
    instructor: "Dr. Emily Watson",
    price: "$549",
    learningOutcomes: [
      "Analyze complex datasets effectively",
      "Create compelling data visualizations",
      "Write efficient SQL queries",
      "Use Python for data manipulation",
      "Present insights to stakeholders"
    ]
  },
  {
    id: "digital-marketing-mastery",
    title: "Digital Marketing Mastery",
    description: "Learn cutting-edge digital marketing strategies to grow businesses online.",
    fullDescription: "Master digital marketing channels including SEO, social media, content marketing, email marketing, and paid advertising. Learn to create effective campaigns and measure ROI.",
    duration: "8 weeks",
    level: "Beginner",
    lessons: 32,
    rating: 4.6,
    image: "/src/assets/ai-course.jpg",
    category: "Marketing",
    syllabus: [
      "Digital Marketing Fundamentals",
      "SEO and Content Strategy",
      "Social Media Marketing",
      "Email Marketing Campaigns",
      "Google Ads and PPC",
      "Analytics and Tracking",
      "Conversion Optimization",
      "Marketing Automation"
    ],
    instructor: "Jennifer Taylor",
    price: "$449",
    learningOutcomes: [
      "Create effective digital marketing campaigns",
      "Optimize websites for search engines",
      "Manage social media accounts professionally",
      "Track and analyze marketing metrics",
      "Build a comprehensive marketing strategy"
    ]
  },
  {
    id: "cloud-computing-aws",
    title: "Cloud Computing with AWS",
    description: "Master Amazon Web Services and become a certified cloud solutions architect.",
    fullDescription: "Learn cloud infrastructure, serverless computing, containerization, and DevOps practices on AWS. Prepare for AWS certification exams while building real-world cloud solutions.",
    duration: "10 weeks",
    level: "Intermediate",
    lessons: 42,
    rating: 4.8,
    image: "/src/assets/web-dev-course.jpg",
    category: "Cloud & DevOps",
    syllabus: [
      "AWS Fundamentals and IAM",
      "EC2, S3, and Storage Solutions",
      "Networking and VPC",
      "Serverless with Lambda",
      "Container Services (ECS, EKS)",
      "Database Services (RDS, DynamoDB)",
      "Monitoring and Cost Optimization",
      "AWS Certification Prep"
    ],
    instructor: "David Kumar",
    price: "$649",
    learningOutcomes: [
      "Design scalable cloud architectures",
      "Deploy applications on AWS",
      "Implement security best practices",
      "Optimize cloud costs",
      "Prepare for AWS certifications"
    ]
  },
  {
    id: "cybersecurity-essentials",
    title: "Cybersecurity Essentials",
    description: "Protect systems and data with comprehensive cybersecurity knowledge and practical skills.",
    fullDescription: "Learn the fundamentals of cybersecurity, including network security, ethical hacking, incident response, and security compliance. Gain hands-on experience with security tools and techniques.",
    duration: "12 weeks",
    level: "Intermediate",
    lessons: 45,
    rating: 4.7,
    image: "/src/assets/data-analytics-course.jpg",
    category: "Cybersecurity",
    syllabus: [
      "Security Fundamentals",
      "Network Security",
      "Ethical Hacking Basics",
      "Vulnerability Assessment",
      "Incident Response",
      "Security Compliance (GDPR, HIPAA)",
      "Cryptography Essentials",
      "Security Operations Center (SOC)"
    ],
    instructor: "Robert Chen",
    price: "$699",
    learningOutcomes: [
      "Identify and mitigate security threats",
      "Perform security assessments",
      "Implement security controls",
      "Respond to security incidents",
      "Understand compliance requirements"
    ]
  }
];
