import { Link } from "react-router-dom";
import useStore from "@/useStore";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import SimpleIcon from "@/components/ui/simpleicon";

const SKILLS = {
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

const Skills: React.FC = () => {
  const { skills, setSkills } = useStore();

  return (
    <>
      <div className="space-y-0.5">
        <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
        <p className="text-muted-foreground">
          Show off the languages, frameworks, software and tech that you use.
        </p>
      </div>
      <Separator className="my-6" />
      {Object.entries(SKILLS).map(([key, { title, items }]) => (
        <Card key={key} className="mb-4">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {items.map((icon) => (
              <Tooltip key={icon}>
                <TooltipTrigger asChild>
                  <Button
                    key={icon}
                    type="button"
                    onClick={() => setSkills(icon)}
                    variant={skills.includes(icon) ? "default" : "ghost"}
                    className="h-auto p-2"
                  >
                    <SimpleIcon
                      name={icon}
                      size={24}
                      color={skills.includes(icon) ? "fafafa" : "71717a"}
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{icon}</TooltipContent>
              </Tooltip>
            ))}
          </CardContent>
        </Card>
      ))}
      <div className="flex justify-between mt-8">
        <Link to="/introduction">
          <Button type="button" variant="outline">
            Previous section
          </Button>
        </Link>
        <Link to="/socials">
          <Button type="button" variant="outline">
            Next section
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Skills;
