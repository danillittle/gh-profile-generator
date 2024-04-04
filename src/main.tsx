import "./globals.css";
import App from "@/App";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Introduction, Skills, Socials, Support } from "@/pages";
import { NavLinkEnum } from "@/types/enum.ts";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={NavLinkEnum.introduction} />,
      },
      {
        path: NavLinkEnum.introduction,
        element: <Introduction />,
      },
      {
        path: NavLinkEnum.skills,
        element: <Skills />,
      },
      {
        path: NavLinkEnum.socials,
        element: <Socials />,
      },
      {
        path: NavLinkEnum.support,
        element: <Support />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TooltipProvider delayDuration={0}>
      <RouterProvider router={routes} />
    </TooltipProvider>
  </React.StrictMode>,
);
