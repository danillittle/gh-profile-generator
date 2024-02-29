import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, prefix, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-9 w-full rounded-md border border-input text-sm shadow-sm transition-colors focus-within:ring-1 focus-within:ring-ring",
          className,
        )}
      >
        {prefix && (
          <div className="flex h-full items-center text-muted-foreground whitespace-nowrap ml-3 -mr-2.5">
            {prefix}
          </div>
        )}
        <input
          type={type}
          className="flex w-full h-full bg-transparent px-3 py-1 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
