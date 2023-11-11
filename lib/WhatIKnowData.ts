import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNode,
  FaDatabase,
  FaDocker,
  FaGit,
  FaAws,
} from "react-icons/fa";

import {
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
} from "react-icons/si";

export const WhatIKnowData = [
  {
    title: "Frontend",
    languages: [
      {
        languageName: "HTML",
        icon: FaHtml5,
        color: "#E44D26", // HTML color
      },
      {
        languageName: "CSS",
        icon: FaCss3,
        color: "#1572B6", // CSS color
      },
      {
        languageName: "Tailwind",
        icon: SiTailwindcss,
        color: "#38B2AC", // Tailwind color
      },
      {
        languageName: "Javascript",
        icon: SiJavascript,
        color: "#F7DF1E", // JavaScript color
      },
      {
        languageName: "Typescript",
        icon: SiTypescript,
        color: "#3178C6", // TypeScript color
      },
      {
        languageName: "React.js",
        icon: FaReact,
        color: "#61DAFB", // React.js color
      },
      {
        languageName: "Next.js",
        icon: SiNextdotjs, // You may want to change this to the appropriate Next.js icon if available
        color: "#000000", // Next.js color
      },
    ],
  },
  {
    title: "Backend",
    languages: [
      {
        languageName: "Node.js",
        icon: FaNode,
        color: "#8CC84B", // Node.js color
      },
      {
        languageName: "Express.js",
        icon: SiExpress,
        color: "#000000", // Express.js color
      },
    ],
  },
  {
    title: "Database",
    languages: [
      {
        languageName: "MySQL",
        icon: SiMysql,
        color: "#4479A1", // MySQL color
      },
      {
        languageName: "MongoDB",
        icon: SiMongodb,
        color: "#13AA52", // MongoDB color
      },
      {
        languageName: "PostgreSQL",
        icon: SiPostgresql,
        color: "#336791", // PostgreSQL color
      },
    ],
  },
  {
    title: "Devops",
    languages: [
      {
        languageName: "Docker",
        icon: FaDocker,
        color: "#0DB7ED", // Docker color
      },
      {
        languageName: "Git",
        icon: FaGit,
        color: "#F05032", // Git color
      },
      {
        languageName: "AWS",
        icon: FaAws,
        color: "#FF9900", // AWS color
      },
    ],
  },
];
