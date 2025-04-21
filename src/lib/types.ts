export type PhotoblogFrontmatter = {
  /**
   * The title of the photoblog
   */
  title: string;

  /**
   * The description of the photoblog
   */
  description: string;

  /**
   * The tags of the photoblog
   * (eg. ["JavaScript", "React", "Node.js"])
   */
  tags?: string[];

  /**
   * The GitHub URL of the photoblog
   */
  githubUrl?: string;

  /**
   * The live URL of the photoblog
   */
  liveUrl?: string;

  /**
   * Whether the photoblog should be featured on the homepage
   */
  featured?: boolean;

  /**
   * The date the photoblog was created or started in W3C format
   * (this will determine the sort order of the photoblog)
   */
  timestamp: string;

  /**
   * The URL of the photoblog on the website
   * (eg. https://zaggonaut.dev/photoblog/my-photoblog)
   */
  filename: string;
};

export type ArticleFrontmatter = {
  /**
   * The title of the article
   */
  title: string;

  /**
   * THe summary description of the article
   */
  description: string;

  /**
   * The tags of the article
   * (eg. ["JavaScript", "React", "Node.js"])
   */
  tags?: string[];

  /**
   * The estimated time to read the article in minutes
   */
  time: number;

  /**
   * Whether the article should be featured on the homepage
   */
  featured: boolean;

  /**
   * The timestamp the article was published in W3C format
   */
  timestamp: string;

  /**
   * The URL of the article on the website
   * (eg. https://zaggonaut.dev/blog/my-article)
   */
  filename: string;
};

// src/lib/types.ts (add these interfaces)
export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description?: string; // Optional description
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string; // Or maybe a list of bullet points: string[]
  url?: string; // Optional link to company/project
}

// Assuming ProjectFrontmatter is similar to PhotoblogFrontmatter but maybe without specific photo fields
// Or reuse ProjectSnippet's Props type if that's more appropriate
export interface ProjectFrontmatter {
  title: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  tags?: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

