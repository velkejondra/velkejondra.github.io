import type { ArticleFrontmatter, PhotoblogFrontmatter } from "./types";
import { getShortDescription, processContentInDir } from "./utils";

export const featuredPhotoblog = (
  await processContentInDir<PhotoblogFrontmatter, PhotoblogFrontmatter>(
    "photoblog",
    (data) => {
      const shortDescription = getShortDescription(
        data.frontmatter.description,
      );
      return {
        title: data.frontmatter.title,
        description: shortDescription,
        tags: data.frontmatter.tags,
        githubUrl: data.frontmatter.githubUrl,
        liveUrl: data.frontmatter.liveUrl,
        featured: data.frontmatter.featured,
        timestamp: data.frontmatter.timestamp,
        filename: `/photoblog/${data.frontmatter.filename}`,
      };
    },
  )
)
  .filter((photoblog) => photoblog.featured)
  .sort((a, b) => {
    const dateA = new Date(a.timestamp);
    const dateB = new Date(b.timestamp);
    return dateB.getTime() - dateA.getTime();
  });

export const featuredArticles = (
    await processContentInDir<ArticleFrontmatter, ArticleFrontmatter>(
      "devblog",
      (data) => {
        const shortDescription = getShortDescription(
          data.frontmatter.description,
        );
        return {
          title: data.frontmatter.title,
          description: shortDescription,
          tags: data.frontmatter.tags,
          time: data.frontmatter.time,
          featured: data.frontmatter.featured,
          timestamp: data.frontmatter.timestamp,
          filename: `/blog/${data.frontmatter.filename}`,
        };
      },
    )
  )
    .filter((photoblog) => photoblog.featured)
    .sort((a, b) => {
      const dateA = new Date(a.timestamp);
      const dateB = new Date(b.timestamp);
      return dateB.getTime() - dateA.getTime();
    });