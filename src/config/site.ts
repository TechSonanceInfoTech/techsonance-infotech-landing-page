export const siteConfig = {
  name: "TechSonance InfoTech | Custom Web & Mobile App Development Company",
  description: "TechSonance InfoTech delivers custom web development, mobile apps, cloud solutions & AI integration. Hire dedicated developers or get end-to-end software development. Free consultation!",
  navItems: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Hire Developers", href: "/hire", isMegaMenu: true }, // Added Mega Menu Trigger
    { label: "About", href: "/about" },
    { label: "Career", href: "/career" },
    { label: "Contact", href: "/contact" },
  ],
  hero: {
    staticText: "Build Scalable Solutions with",
    dynamicWords: ["Innovation", "AI & Intelligence", "Scalability"],
    subHeadline: "We craft high-performance web applications, AI-driven solutions, and scalable cloud architectures that accelerate business growth and deliver measurable results.",
  },
  services: [
    {
      title: "Custom Web Development",
      description: "Build powerful, scalable web applications with modern technologies like React, Next.js, and Node.js that drive user engagement and business growth.",
      badge: "Popular",
      slug: "web-development",
      number: "01",
    },
    {
      title: "Mobile App Development",
      description: "Create high-performance iOS, Android, and cross-platform mobile apps using React Native and Flutter that users love.",
      badge: "Trending",
      slug: "mobile-development",
      number: "02",
    },
    {
      title: "Cloud & DevOps Solutions",
      description: "Deploy faster with automated CI/CD pipelines, AWS/Azure cloud infrastructure, and scalable architectures that grow with your business.",
      badge: "Enterprise",
      slug: "cloud-devops",
      number: "03",
    },
    {
      title: "Data Analytics & AI Solutions",
      description: "Transform raw data into actionable insights with custom analytics dashboards, machine learning models, and business intelligence tools.",
      badge: "Growth",
      slug: "data-analytics",
      number: "04",
    },
    {
      title: "E-Commerce Development",
      description: "Launch conversion-optimized online stores with secure payment integration, inventory management, and seamless user experience.",
      badge: "Quick Start",
      slug: "ecommerce",
      number: "05",
    },
    {
      title: "Hire Dedicated Developers",
      description: "Scale your team with skilled React, Node.js, Python, and full-stack developers who integrate seamlessly into your workflow.",
      badge: "Featured",
      slug: "hire-developers",
      number: "06",
    },
  ],
}
