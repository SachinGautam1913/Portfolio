export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce store management with analytics, inventory tracking, and order management.",
    image: "https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    liveUrl: "https://example.com/ecommerce",
    github: "https://github.com/username/ecommerce-dashboard"
  },
  {
    id: 2,
    title: "Travel Companion App",
    description: "A mobile-friendly application that helps users plan their trips, discover local attractions, and keep track of their itinerary.",
    image: "https://images.pexels.com/photos/4356144/pexels-photo-4356144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "mobile",
    technologies: ["React Native", "Firebase", "Google Maps API"],
    github: "https://github.com/username/travel-companion"
  },
  {
    id: 3,
    title: "Social Media UI Kit",
    description: "A comprehensive UI kit for social media applications with over 50 reusable components and 10 pre-designed screens.",
    image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "ui/ux",
    technologies: ["Figma", "Adobe XD", "Sketch"],
    liveUrl: "https://example.com/ui-kit"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A responsive portfolio website designed for a professional photographer to showcase their work and services.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web",
    technologies: ["HTML", "CSS", "JavaScript", "Gsap"],
    liveUrl: "https://example.com/portfolio",
    github: "https://github.com/username/photographer-portfolio"
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "A mobile application that allows users to track their workouts, set fitness goals, and monitor their progress over time.",
    image: "https://images.pexels.com/photos/3912368/pexels-photo-3912368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "mobile",
    technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
    github: "https://github.com/username/fitness-tracker"
  },
  {
    id: 6,
    title: "Restaurant Booking System",
    description: "A web application for a restaurant that allows customers to book tables, view the menu, and place orders online.",
    image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://example.com/restaurant",
    github: "https://github.com/username/restaurant-booking"
  }
];