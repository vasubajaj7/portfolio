import ogImage from "../assets/og-image.png";

export const siteConfig = {
  name: "Your Portfolio",
  description: "Full-stack developer & designer crafting exceptional digital experiences. Explore my projects, case studies, and insights.",
  url: "https://yourportfolio.com",
  lang: "en",
  locale: "en_US",
  author: "Your Name",
  twitter: "@YourHandle",
  ogImage: ogImage,
  socialLinks: {
    twitter: "https://twitter.com/yourhandle",
    github: "https://github.com/yourusername",
    discord: "https://discord.com",
  },
  navLinks: [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Case Studies", href: "/case-studies" },
    { text: "Blog", href: "/blog" },
    { text: "Contact", href: "/contact" },
  ],
};
