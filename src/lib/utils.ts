import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export enum ENUM_LINK_TYPE {
  github = "https://github.com/",
  linkedin = "https://www.linkedin.com/in/",
  twitter = "https://twitter.com/",
  instagram = "https://www.instagram.com/",
  facebook = "https://www.facebook.com/",
  youtube = "https://www.youtube.com/",
  buyMeACoffee = "https://www.buymeacoffee.com/",
  kofi = "https://ko-fi.com/",
}

export const getLink = (key: string, value: string) => {
  if (!ENUM_LINK_TYPE[key as keyof typeof ENUM_LINK_TYPE]) return "";
  return ENUM_LINK_TYPE[key as keyof typeof ENUM_LINK_TYPE] + value;
};
