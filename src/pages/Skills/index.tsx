import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import useStore from "@/useStore";
import { SKILLS_ENTRIES } from "@/pages/Skills/data";
import { NavLinkEnum } from "@/types/enum";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import SimpleIcon from "@/components/ui/simpleicon";

const Skills: React.FC = () => {
    const { skills, setSkills } = useStore();

    const onSetSkill = (skill: string) => () => {
        setSkills(skill);
    };

    return (
        <>
            <div className="space-y-0.5">
                <h2 className="text-2xl font-semibold tracking-tight">
                    Skills
                </h2>
                <p className="text-muted-foreground">
                    Show off the languages, frameworks, software and tech that
                    you use.
                </p>
            </div>
            <Separator className="my-6" />
            {SKILLS_ENTRIES.map(([key, { title, items }]) => (
                <Card key={key} className="mb-4">
                    <CardHeader>
                        <CardTitle>🧰 {title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                        {items.map((icon) => (
                            <Tooltip key={icon}>
                                <TooltipTrigger asChild>
                                    <Button
                                        key={icon}
                                        type="button"
                                        onClick={onSetSkill(icon)}
                                        variant={
                                            skills.includes(icon)
                                                ? "default"
                                                : "ghost"
                                        }
                                        className="h-auto p-2"
                                    >
                                        <SimpleIcon
                                            name={icon}
                                            size={24}
                                            color={
                                                skills.includes(icon)
                                                    ? "fafafa"
                                                    : "71717a"
                                            }
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
                <Link to={NavLinkEnum.introduction}>
                    <Button type="button" variant="outline">
                        <ChevronLeftIcon className="mr-2" /> Previous section
                    </Button>
                </Link>
                <Link to={NavLinkEnum.socials}>
                    <Button type="button" variant="outline">
                        Next section <ChevronRightIcon className="ml-2" />
                    </Button>
                </Link>
            </div>
        </>
    );
};

export default Skills;
