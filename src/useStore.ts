import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { IntroductionFormType } from "@/pages/Introduction";
import { SocialsFormType } from "@/pages/Socials";
import { SupportFormType } from "@/pages/Support";

const initialState = {
  introduction: {
    name: "",
    description: "",
    location: "",
    portfolioTitle: "",
    portfolioLink: "",
    emailMe: "",
    workingOnTitle: "",
    workingOnLink: "",
    learning: "",
    collaborateOn: "",
    additionalInfo: "",
  },
  skills: [],
  socials: {
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: "",
    youtube: "",
  },
  support: {
    buyMeACoffee: "",
    kofi: "",
  },
};

type StoreType = {
  introduction: IntroductionFormType;
  skills: string[];
  socials: SocialsFormType;
  support: SupportFormType;
  setIntroduction: (introduction: IntroductionFormType) => void;
  setSkills: (skill: string) => void;
  setSocials: (socials: SocialsFormType) => void;
  setSupport: (support: SupportFormType) => void;
  reset: () => void;
};

const useStore = create<StoreType>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        setIntroduction: (introduction) =>
          set((state) => ({ ...state, introduction })),
        setSkills: (skill) => {
          set((state) => {
            if (state.skills.includes(skill)) {
              return {
                ...state,
                skills: state.skills.filter((s) => s !== skill),
              };
            }
            return { ...state, skills: [...state.skills, skill] };
          });
        },
        setSocials: (socials) => set((state) => ({ ...state, socials })),
        setSupport: (support) => set((state) => ({ ...state, support })),
        reset: () => set(() => ({ ...initialState })),
      }),
      {
        name: "store",
      },
    ),
  ),
);

export default useStore;
