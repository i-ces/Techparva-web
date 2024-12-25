export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  topics: string[];
  image: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export const speakers: Speaker[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "AI Research Director",
    company: "TechCorp AI",
    bio: "Leading AI researcher with 15 years of experience in machine learning and neural networks.",
    topics: ["Artificial Intelligence", "Machine Learning", "Neural Networks"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    social: {
      twitter: "https://twitter.com/sarahj",
      linkedin: "https://linkedin.com/in/sarahj"
    }
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CTO",
    company: "CloudScale Solutions",
    bio: "Cloud computing expert specializing in scalable architecture and DevOps practices.",
    topics: ["Cloud Computing", "DevOps", "System Architecture"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    social: {
      github: "https://github.com/michaelc",
      linkedin: "https://linkedin.com/in/michaelc"
    }
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Blockchain Lead",
    company: "Web3 Innovations",
    bio: "Pioneering researcher in blockchain technology and decentralized systems.",
    topics: ["Blockchain", "Web3", "Cryptocurrency"],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    social: {
      twitter: "https://twitter.com/emilyr",
      github: "https://github.com/emilyr"
    }
  }
];