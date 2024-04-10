import { PropsWithChildren } from "react";

type MdTitleProps = {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    condition?: boolean;
};

export const MdTitle: React.FC<PropsWithChildren<MdTitleProps>> = ({
    children,
    level = 1,
    condition = true,
}) => {
    if (!condition || !children) return null;

    return (
        <>
            {`#`.repeat(level)} {children}
            {`\n`}
        </>
    );
};

type MdTextProps = {
    condition?: boolean;
    align?: "left" | "center" | "right";
};

export const MdText: React.FC<PropsWithChildren<MdTextProps>> = ({
    children,
    condition = true,
}) => {
    if (!condition || !children) return null;

    return (
        <>
            {children}
            {`\n`}
        </>
    );
};

type MdLinkProps = {
    href: string;
};

export const MdLink: React.FC<PropsWithChildren<MdLinkProps>> = ({
    children,
    href = "#",
}) => {
    return `[${children ?? href}](${href})`;
};
