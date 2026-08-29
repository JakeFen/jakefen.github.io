import linkpulseCover from "../assets/linkpulse-cover.png";

export interface Project {
  slug: string;
  photo: string;
  title: string;
  subtitle: string;
  description: string;
  tools: string;
  webHref: string;
  githubHref: string;
}

export const projects: Project[] = [
  {
    slug: "linkpulse",
    photo: linkpulseCover,
    title: "LinkPulse",
    subtitle: "A full-stack URL shortener with click analytics.",
    description:
      "I built LinkPulse as a focused backend project to deepen my experience with Go, REST APIs, and PostgreSQL. The application allows users to create short URLs and redirects requests to their original destinations while persisting link data in a PostgreSQL database.",
    tools: "React, TypeScript, Tailwind, Go, PostgreSQL",
    webHref: "https://linkpulse-kappa-sooty.vercel.app/",
    githubHref: "https://github.com/JakeFen/LinkPulse",
  },
];
