const ProjectsData = {
  title: "My Projects",
  subtitle: "Some things I've built",
  filters: ["All", "Frontend", "Web Application", "UI Design"],
  projects: [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A modern personal portfolio featuring responsive layouts and reusable components.",
      image: "/images/project-1.png",
      category: "Frontend",
      technologies: ["React", "Bootstrap", "JavaScript"],
      githubUrl: "https://github.com/yourusername/portfolio",
      demoUrl: "",
    },
    {
      id: 2,
      title: "Market Management System",
      description:
        "A web interface for organizing markets, shops, tenants, and payments.",
      image: "/images/project-2.png",
      category: "Web Application",
      technologies: ["React", "Bootstrap", "API"],
      githubUrl: "https://github.com/yourusername/market-system",
      demoUrl: "",
    },
    {
      id: 3,
      title: "Dashboard UI",
      description:
        "A responsive dashboard concept with statistics and data cards.",
      image: "/images/project-3.png",
      category: "UI Design",
      technologies: ["React", "Bootstrap", "CSS"],
      githubUrl: "",
      demoUrl: "",
    },
  ],
};

export default ProjectsData;