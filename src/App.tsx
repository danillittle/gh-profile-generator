import { Outlet } from "react-router-dom";
import { Header, Preview, SidebarNav } from "@/components";

const App: React.FC = () => {
    return (
        <div className="flex-col">
            <Header />
            <div className="flex-1 space-y-4 p-8 pt-6">
                <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0">
                    <aside className="-mx-4 lg:w-1/6">
                        <SidebarNav />
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
    );
};

export default App;
