import { useEffect, useRef, useState } from "react";
import useStore from "@/useStore";
import { getServiceLink } from "@/lib/utils";
import { MdLink, MdText, MdTitle } from "@/components/md";
import { Button } from "@/components/ui/button";
import SimpleIcon from "@/components/ui/simpleicon";

const Preview: React.FC = () => {
    const codeRef = useRef<HTMLDivElement>(null);
    const { introduction, skills, socials, support } = useStore();
    const [code, setCode] = useState<string>();
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        setCode(codeRef.current?.innerHTML || "");
    }, [introduction, skills, socials, support]);

    const onCopy = () => {
        navigator.clipboard.writeText(codeRef.current?.innerHTML || "");
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };

    return (
        <>
            <div ref={codeRef} className="hidden">
                <MdTitle condition={!!introduction.name}>
                    Hi 👋 My name is {introduction.name}
                </MdTitle>
                <MdText condition={!!introduction.description}>
                    {introduction.description}
                </MdText>
                <MdText condition={!!introduction.location}>
                    * 🌍 I'm based in **{introduction.location}**
                </MdText>
                <MdText condition={!!introduction.workingOnTitle}>
                    * 🧑‍💻 I'm currently working on{" "}
                    <MdLink href={introduction.workingOnLink}>
                        {introduction.workingOnTitle}
                    </MdLink>
                </MdText>
                <MdText condition={!!introduction.portfolioLink}>
                    * 🖥️ See my portfolio at{" "}
                    <MdLink href={introduction.portfolioLink}>
                        {introduction.portfolioTitle}
                    </MdLink>
                </MdText>
                <MdText condition={!!introduction.emailMe}>
                    * 📫 You can contact me at{" "}
                    <MdLink href={introduction.emailMe}>
                        {introduction.emailMe}
                    </MdLink>
                </MdText>
                <MdText condition={!!introduction.learning}>
                    * 🧠 I'm learning **{introduction.learning}**
                </MdText>
                <MdText condition={!!introduction.collaborateOn}>
                    * 🤝 I'm open to collaborating on **
                    {introduction.collaborateOn}**
                </MdText>
                <MdText condition={!!introduction.additionalInfo}>
                    * ⚡ {introduction.additionalInfo}
                </MdText>

                {!!skills.length && (
                    <>
                        {`\n`}
                        <MdTitle level={3}>My skills:</MdTitle>
                        <p align="left">
                            {skills.map((skill) => (
                                <span key={skill} title={skill}>
                                    <SimpleIcon name={skill} size={32} />{" "}
                                </span>
                            ))}
                        </p>
                        {`\n`}
                    </>
                )}

                {!!Math.max(...Object.values(socials).map((i) => i.length)) && (
                    <>
                        {`\n`}
                        <MdTitle level={3}>Connect with me::</MdTitle>
                        <p align="left">
                            {Object.entries(socials).map(([key, value]) =>
                                value.length ? (
                                    <a
                                        key={key}
                                        href={getServiceLink(key, value)}
                                        target="_blank"
                                        rel="noreferrer"
                                        title={key}
                                    >
                                        <SimpleIcon name={key} size={32} />{" "}
                                    </a>
                                ) : null,
                            )}
                        </p>
                        {`\n`}
                    </>
                )}

                {!!Math.max(...Object.values(support).map((i) => i.length)) && (
                    <>
                        {`\n`}
                        <MdTitle level={3}>Support:</MdTitle>
                        <p align="left">
                            {Object.entries(support).map(
                                ([key, value]) =>
                                    !!value.length && (
                                        <a
                                            key={key}
                                            href={getServiceLink(key, value)}
                                            target="_blank"
                                            rel="noreferrer"
                                            title={key}
                                        >
                                            <SimpleIcon name={key} size={32} />{" "}
                                        </a>
                                    ),
                            )}
                        </p>
                    </>
                )}
            </div>

            <div className="relative">
                <div className="border border-muted-foreground rounded-md p-4 mt-4 relative">
                    <div className="font-mono text-sm whitespace-pre-wrap">
                        {code}
                    </div>
                    <div className="absolute top-4 right-4 space-x-2">
                        <Button type="button" size="sm" onClick={onCopy}>
                            {isCopied ? "Copied!" : "Copy"}
                        </Button>
                        <Button type="button" size="sm" disabled>
                            Preview
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Preview;
