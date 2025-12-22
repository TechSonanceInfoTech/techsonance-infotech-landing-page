import { 
  Trophy, Clock, Briefcase, Users, MessageCircle, CalendarCheck, 
  Award, Cpu, Star, Calendar, Palmtree, Hourglass, Heart,
  Rocket, Brain, Users as UsersIcon, Home, TrendingUp, Lightbulb
} from "lucide-react"

export const careerConfig = {
  hero: {
    badge: "We're Hiring",
    title: "Build Your Career With Us",
    subtitle: "Join a team that values clean code, continuous learning, and real-world impact.",
    primaryCTA: {
      text: "View Open Positions",
      href: "#open-positions"
    },
    secondaryCTA: {
      text: "Send Your Resume",
      href: "#apply-section"
    }
  },

  whyWorkWithUs: {
    title: "Why Join Our Team?",
    points: [
      {
        icon: Rocket,
        title: "Work on real-world global projects"
      },
      {
        icon: Brain,
        title: "Learn modern technologies & best practices"
      },
      {
        icon: UsersIcon,
        title: "Collaborative and respectful work culture"
      },
      {
        icon: Home,
        title: "Flexible work environment (remote / hybrid)"
      },
      {
        icon: TrendingUp,
        title: "Career growth and skill development"
      },
      {
        icon: Lightbulb,
        title: "Freedom to experiment and innovate"
      }
    ]
  },

  lifeAtCompany: {
    title: "Life at TechSonance InfoTech LLP",
    description: "We are a team of developers, designers, and problem-solvers who believe in ownership, transparency, and continuous improvement.",
    benefits: [
      { icon: Trophy, title: "Awards" },
      { icon: Users, title: "Friendly Culture" },
      { icon: Briefcase, title: "Leave Policy" },
      { icon: Clock, title: "Flexible Timing" },
      { icon: MessageCircle, title: "Open Communication" },
      { icon: Calendar, title: "5 Days Working" },
      { icon: Award, title: "Employment Training" },
      { icon: CalendarCheck, title: "On-time Salary" },
      { icon: Cpu, title: "Trending Technology" },
      { icon: Hourglass, title: "Overtime Pay" },
      { icon: Star, title: "Celebration" },
      { icon: Palmtree, title: "Annual Picnic" },
      { icon: Heart, title: "Supportive Team" }
    ]
  },

  openPositions: [
    {
      title: "Full Stack Developer",
      experience: "1–3 Years",
      location: "Remote / Hybrid",
      techStack: ["React", "Next.js", "Node.js", "Python", "MongoDB"],
      type: "Full-time",
      description: "We are looking for a motivated Full Stack Developer who enjoys building scalable web applications and working with modern technologies."
    },
    {
      title: "Frontend Developer",
      experience: "0–2 Years",
      location: "Remote",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      type: "Full-time / Internship",
      description: "Join our team to build beautiful, responsive user interfaces with modern frontend technologies."
    },
    {
      title: "Backend Developer",
      experience: "2–4 Years",
      location: "Onsite / Hybrid",
      techStack: ["Node.js", "Python", "PostgreSQL", "AWS"],
      type: "Full-time",
      description: "Build robust APIs and scalable backend systems for our global client projects."
    }
  ],

  hiringProcess: {
    title: "Our Hiring Process",
    subtitle: "We respect your time and keep the process straightforward.",
    steps: [
      { number: 1, title: "Resume Screening", description: "We review your application" },
      { number: 2, title: "Technical Discussion", description: "Chat about your skills" },
      { number: 3, title: "Practical Task", description: "Show us what you can do" },
      { number: 4, title: "Final Interview", description: "Meet the team" },
      { number: 5, title: "Offer & Onboarding", description: "Welcome aboard!" }
    ]
  },

  applySection: {
    title: "Didn't Find a Suitable Role?",
    description: "We're always looking for passionate people. Send us your resume and we'll get back to you.",
    submitButton: "Submit Resume"
  },

  finalCTA: {
    title: "Ready to grow your career with us?",
    buttonText: "Join Our Team",
    subtitle: "Let's build impactful technology together.",
    href: "#apply-section"
  }
}
