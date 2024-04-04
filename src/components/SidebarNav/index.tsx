import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { NavLinkEnum } from "@/types/enum";

type NavItemType = {
  title: string;
  href: NavLinkEnum;
};

const sidebarNavItems: NavItemType[] = [
  {
    title: "Introduction",
    href: NavLinkEnum.introduction,
  },
  {
    title: "Skills",
    href: NavLinkEnum.skills,
  },
  {
    title: "Socials",
    href: NavLinkEnum.socials,
  },
  {
    title: "Support",
    href: NavLinkEnum.support,
  },
];

const SidebarNav: React.FC = () => {
  return (
    <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
      {sidebarNavItems.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          className={({ isActive }) =>
            cn(
              "rounded-lg px-3 py-2 text-sm font-medium",
              isActive
                ? "bg-muted hover:bg-muted"
                : "hover:bg-transparent hover:underline",
            )
          }
        >
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default SidebarNav;
