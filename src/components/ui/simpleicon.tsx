import * as React from "react";

export interface SimpleIconProps
    extends React.ImgHTMLAttributes<HTMLImageElement> {
    name: string;
    size?: number;
    color?: string;
}

const SimpleIcon = React.forwardRef<HTMLImageElement, SimpleIconProps>(
    ({ name, size, color, ...props }, ref) => {
        return (
            <img
                ref={ref}
                width={size}
                height={size}
                src={`https://cdn.simpleicons.org/${name}/${color}`}
                alt={name}
                {...props}
            />
        );
    },
);

export default SimpleIcon;
