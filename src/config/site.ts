export const siteConfig = {
  name: "TechSonance InfoTech LLP",
  description: "Empowering businesses with next-generation digital solutions, AI integration, and scalable cloud architectures.",
  navItems: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Hire Developers", href: "/hire", isMegaMenu: true }, // Added Mega Menu Trigger
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Career", href: "/career" },
    { label: "Contact", href: "/contact" },
  ],
  hero: {
    staticText: "Building the Future with",
    dynamicWords: ["Innovation", "Intelligence", "Excellence"],
    subHeadline: "We craft high-performance web applications, AI-driven solutions, and scalable cloud architectures to propel your business forward.",
  },
  services: [
    {
      title: "Custom Web Development",
      description: "Transform your vision into powerful web applications that engage users and accelerate business growth with cutting-edge technologies.",
      badge: "Popular",
      slug: "web-development",
      number: "01",
    },
    {
      title: "Mobile App Development",
      description: "Create exceptional mobile experiences with native iOS, Android, or cross-platform apps that users love and recommend.",
      badge: "Trending",
      slug: "mobile-development",
      number: "02",
    },
    {
      title: "Cloud & DevOps Solutions",
      description: "Scale effortlessly and deploy faster with automated cloud infrastructure that grows with your business demands.",
      badge: "Enterprise",
      slug: "cloud-devops",
      number: "03",
    },
    {
      title: "Data Analytics & Insights",
      description: "Turn raw data into strategic decisions with advanced analytics dashboards and actionable business intelligence.",
      badge: "Growth",
      slug: "data-analytics",
      number: "04",
    },
    {
      title: "E-Commerce Development",
      description: "Launch your online store with complete payment integration, inventory management, and conversion-optimized design.",
      badge: "Quick Start",
      slug: "ecommerce",
      number: "05",
    },
    {
      title: "Hire Dedicated Developers",
      description: "Build your dream team with skilled developers who integrate seamlessly and accelerate your project delivery.",
      badge: "Featured",
      slug: "hire-developers",
      number: "06",
    },
  ],
}
