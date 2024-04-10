import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ServiceLinkEnum } from "@/types/enum";

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};

export const getServiceLink = (key: string, value: string) => {
    const base = ServiceLinkEnum[key as keyof typeof ServiceLinkEnum];

    return base ? base + value : value;
};
