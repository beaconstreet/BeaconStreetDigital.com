import projectsData from "../data/projects.json";

export interface Project {
  id: string;
  title: string;
  slug: string;
  categories: string[];
  thumbnail: string;
  description: string;
  url: string;
  tools: string[];
  assets: {
    website: string[];
    video: string[];
    digitalCampaigns: string[];
    photography: string[];
  };
}

export function getAllProjects(): Project[] {
  return projectsData as Project[];
}

export function getProjectById(id: string): Project | undefined {
  return (projectsData as Project[]).find((project) => project.id === id);
}

export function getCategories(): string[] {
  const categories = new Set<string>();

  (projectsData as Project[]).forEach((project) => {
    project.categories.forEach((category) => {
      categories.add(category);
    });
  });

  return Array.from(categories);
}

export function filterProjectsByCategory(category: string): Project[] {
  if (category === "All Projects") {
    return projectsData as Project[];
  }

  return (projectsData as Project[]).filter((project) =>
    project.categories.includes(category)
  );
}
