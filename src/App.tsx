import { Link, Outlet } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Preview, SidebarNav } from "@/components";

const sidebarNavItems = [
  {
    title: "Introduction",
    href: "/introduction",
  },
  {
    title: "Skills",
    href: "/skills",
  },
  {
    title: "Socials",
    href: "/socials",
  },
  {
    title: "Support",
    href: "/support",
  },
];

const App: React.FC = () => {
  return (
    <>
      <div className="flex-col">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} className="h-8 w-8" alt="logo" />
              <h1 className="text-xl">Github Profile README Generator</h1>
            </Link>
            <div className="ml-auto flex items-center space-x-4">
              awesome-generated
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0">
            <aside className="-mx-4 lg:w-1/6">
              <SidebarNav items={sidebarNavItems} />
            </aside>
            <main className="flex flex-col space-y-8 lg:flex-row lg:space-x-4 lg:space-y-0 w-full">
              <div className="flex-1 lg:w-1/2">
                <Outlet />
              </div>
              <div className="flex-1 lg:w-1/2">
                <Preview />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
