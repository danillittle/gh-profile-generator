import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    title: string;
    href: string;
  }[];
}

const SidebarNav: React.FC<SidebarNavProps> = ({
  className,
  items,
  ...props
}) => {
  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className,
      )}
      {...props}
    >
      {items.map((item) => (
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
