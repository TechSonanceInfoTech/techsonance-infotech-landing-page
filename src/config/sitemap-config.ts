import { 
  Home, Info, Briefcase, FolderKanban, Users, Mail, 
  Code, Smartphone, Layers, Rocket, Cpu, Plug, Wrench,
  FileText, Shield, Cookie, RefreshCw, Calendar, MessageSquare,
  BookOpen, Newspaper, GraduationCap, TrendingUp
} from "lucide-react"

export const sitemapConfig = {
  hero: {
    title: "Site Map",
    description: "Navigate through our complete website structure"
  },

  sections: [
    {
      title: "Main Pages",
      icon: Home,
      links: [
        { name: "Home", href: "/", description: "Welcome to TechSonance" },
        { name: "About Us", href: "/about", description: "Learn about our company and values" },
        { name: "Services", href: "/services", description: "Explore our software solutions" },
        { name: "Portfolio", href: "/portfolio", description: "View our past projects" },
        { name: "Careers", href: "/career", description: "Join our team" },
        { name: "Contact", href: "/contact", description: "Get in touch with us" }
      ]
    },
    {
      title: "Services",
      icon: Briefcase,
      links: [
        { name: "Web Application Development", href: "/services/web-development", icon: Code },
        { name: "Mobile App Development", href: "/services/mobile-development", icon: Smartphone },
        { name: "Full-Stack Development", href: "/services/full-stack", icon: Layers },
        { name: "SaaS & MVP Development", href: "/services/saas-mvp", icon: Rocket },
        { name: "AI & Automation", href: "/services/ai-automation", icon: Cpu },
        { name: "API Integration", href: "/services/api-integration", icon: Plug },
        { name: "Maintenance & Support", href: "/services/maintenance-support", icon: Wrench }
      ]
    },
    {
      title: "Hire Developers",
      icon: Users,
      links: [
        { name: "React.js Developers", href: "/hire/reactjs-developers" },
        { name: "Next.js Developers", href: "/hire/nextjs-developers" },
        { name: "Vue.js Developers", href: "/hire/vuejs-developers" },
        { name: "Node.js Developers", href: "/hire/nodejs-developers" },
        { name: "Python Developers", href: "/hire/python-developers" },
        { name: "React Native Developers", href: "/hire/react-native-developers" },
        { name: "Flutter Developers", href: "/hire/flutter-developers" },
        { name: "Full-Stack Developers", href: "/hire/fullstack-developers" }
      ]
    },
    {
      title: "Portfolio",
      icon: FolderKanban,
      links: [
        { name: "All Projects", href: "/portfolio", description: "Browse all our work" },
        { name: "Web Projects", href: "/portfolio?category=web", description: "Web development projects" },
        { name: "Mobile Projects", href: "/portfolio?category=mobile", description: "Mobile app projects" },
        { name: "SaaS Projects", href: "/portfolio?category=saas", description: "SaaS products" },
        { name: "AI Projects", href: "/portfolio?category=ai", description: "AI & automation projects" }
      ]
    },
    {
      title: "Company",
      icon: Info,
      links: [
        { name: "About Us", href: "/about", description: "Our story and mission" },
        { name: "Careers", href: "/career", description: "Current job openings" },
        { name: "Life at TechSonance", href: "/career#culture", description: "Our work culture" },
        { name: "Contact Us", href: "/contact", description: "Reach out to us" }
      ]
    },
    {
      title: "Resources",
      icon: BookOpen,
      links: [
        { name: "Blog", href: "/blog", icon: Newspaper, description: "Tech articles and insights" },
        { name: "Case Studies", href: "/portfolio", icon: FileText, description: "Detailed project stories" },
        { name: "Tutorials", href: "/blog/tutorials", icon: GraduationCap, description: "How-to guides" }
      ]
    },
    {
      title: "Get Started",
      icon: TrendingUp,
      links: [
        { name: "Start a Project", href: "/contact", icon: Rocket, description: "Begin your journey" },
        { name: "Get a Quote", href: "/contact", icon: MessageSquare, description: "Request pricing" },
        { name: "Schedule Consultation", href: "/contact", icon: Calendar, description: "Book a call" }
      ]
    },
    {
      title: "Legal",
      icon: Shield,
      links: [
        { name: "Privacy Policy", href: "/legal/privacy-policy", icon: Shield },
        { name: "Terms & Conditions", href: "/legal/terms-conditions", icon: FileText },
        { name: "Cookie Policy", href: "/legal/cookie-policy", icon: Cookie },
        { name: "Refund Policy", href: "/legal/refund-policy", icon: RefreshCw }
      ]
    }
  ]
}
