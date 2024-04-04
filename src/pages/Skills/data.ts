type SkillType = {
  [key: string]: {
    title: string;
    items: string[];
  };
};

export const SKILLS: SkillType = {
  core: {
    title: "Core",
    items: [
      "c",
      "c++",
      "csharp",
      "coffeescript",
      "dart",
      "elixir",
      "elm",
      "erlang",
      "git",
      "go",
      "haskell",
      "java",
      "javascript",
      "kotlin",
      "lua",
      "nim",
      "ocaml",
      "php",
      "python",
      "r",
      "ruby",
      "rust",
      "scala",
      "swift",
      "typescript",
      "zig",
    ],
  },
  frontend: {
    title: "Frontend",
    items: [
      "html5",
      "css3",
      "sass",
      "tailwindcss",
      "bootstrap",
      "mui",
      "angular",
      "react",
      "redux",
      "next.js",
      "svelte",
      "vue.js",
      "nuxt.js",
      "vite",
      "webpack",
      "babel",
    ],
  },
  backend: {
    title: "Backend",
    items: [
      "bun",
      "node.js",
      "express",
      "nestjs",
      "laravel",
      "django",
      "flask",
      ".net",
      "swagger",
      "graphql",
    ],
  },
  database: {
    title: "Database",
    items: ["mongodb", "postgresql", "mysql", "sqlite", "redis", "oracle"],
  },
  cloud: {
    title: "Cloud",
    items: [
      "amazonaws",
      "azuredevops",
      "googlecloud",
      "digitalocean",
      "heroku",
      "vercel",
    ],
  },
  devops: {
    title: "DevOps",
    items: [
      "docker",
      "kubernetes",
      "ansible",
      "terraform",
      "jenkins",
      "teamcity",
    ],
  },
  misc: {
    title: "Misc",
    items: ["linux", "windows", "macos", "gitlab", "github", "bitbucket"],
  },
  tools: {
    title: "Tools",
    items: [
      "visualstudiocode",
      "visualstudio",
      "intellijidea",
      "postman",
      "figma",
      "notion",
      "slack",
      "discord",
    ],
  },
};

export const SKILLS_ENTRIES = Object.entries(SKILLS);
